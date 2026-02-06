"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SkillNode {
    id: number;
    text: string;
    orbitRadius: number; // Distance from sun
    angle: number;       // Current angle in radians
    speed: number;       // Angular velocity
    color: string;
    radius: number;      // Size of the planet
    x: number;           // Current render X
    y: number;           // Current render Y
}

interface Star {
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
}

interface SkillsUniverseProps {
    skills: readonly string[];
    className?: string;
}

export function SkillsUniverse({ skills, className }: SkillsUniverseProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [nodes, setNodes] = useState<SkillNode[]>([]);
    const starsRef = useRef<Star[]>([]);
    const mouseRef = useRef<{ x: number; y: number; isDown: boolean }>({ x: -1000, y: -1000, isDown: false });
    const draggedNodeIndex = useRef<number | null>(null);

    // Initialize Stars
    useEffect(() => {
        const starCount = 200;
        const newStars: Star[] = [];
        for (let i = 0; i < starCount; i++) {
            newStars.push({
                x: Math.random() * 2000,
                y: Math.random() * 2000,
                size: Math.random() * 2,
                opacity: 0.2 + Math.random() * 0.8,
                speed: 0.02 + Math.random() * 0.05
            });
        }
        starsRef.current = newStars;
    }, []);

    // Initialize Nodes (Planets) with fixed orbits
    useEffect(() => {
        if (!containerRef.current) return;

        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        const minDimension = Math.min(width, height);

        const colors = ["#8b5cf6", "#06b6d4", "#ec4899", "#10b981", "#f59e0b"];

        // Distribute orbits evenly
        const minOrbit = 80;
        const maxOrbit = minDimension / 2 - 40;

        const initialNodes = skills.map((skill, index) => {
            // Assign a "lane" for the orbit so they don't overlap too much
            // We can have multiple planets share an orbit or spread them out
            // Let's optimize for spread:
            const orbitProgress = index / skills.length;
            // Randomized radius but kept within bounds, tending towards spreading out
            const orbitRadius = minOrbit + (maxOrbit - minOrbit) * (index / skills.length) + (Math.random() * 20 - 10);

            return {
                id: index,
                text: skill,
                orbitRadius: orbitRadius,
                angle: (index * 137.5) * (Math.PI / 180), // Golden angle distribution for initial scatter
                initialAngle: (index * 137.5) * (Math.PI / 180),
                speed: (0.002 + Math.random() * 0.003) * (index % 2 === 0 ? 1 : -1), // Alternate directions
                color: colors[index % colors.length],
                radius: 12 + Math.random() * 15,
                x: 0,
                y: 0,
            };
        });

        setNodes(initialNodes);
    }, [skills]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || nodes.length === 0) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const resizeCanvas = () => {
            if (containerRef.current && canvas) {
                canvas.width = containerRef.current.clientWidth;
                canvas.height = containerRef.current.clientHeight;
            }
        };
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        const animate = () => {
            const width = canvas.width;
            const height = canvas.height;
            const centerX = width / 2;
            const centerY = height / 2;

            ctx.clearRect(0, 0, width, height);

            // 1. Draw Stars
            starsRef.current.forEach(star => {
                star.x -= star.speed;
                if (star.x < 0) star.x = width; // wrap around

                ctx.beginPath();
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // 2. Draw Sun
            // Outer glow
            const sunGlow = ctx.createRadialGradient(centerX, centerY, 20, centerX, centerY, 150);
            sunGlow.addColorStop(0, "rgba(139, 92, 246, 0.4)");
            sunGlow.addColorStop(1, "transparent");
            ctx.fillStyle = sunGlow;
            ctx.beginPath();
            ctx.arc(centerX, centerY, 150, 0, Math.PI * 2);
            ctx.fill();

            // Inner core
            ctx.fillStyle = "white";
            ctx.shadowBlur = 40;
            ctx.shadowColor = "#8b5cf6";
            ctx.beginPath();
            ctx.arc(centerX, centerY, 15, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0; // Reset

            // 3. Draw Orbit Lines (Subtle)
            // We can draw a few faint rings to imply structure
            ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
            ctx.lineWidth = 1;
            [100, 200, 300, 400].forEach(r => {
                ctx.beginPath();
                ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
                ctx.stroke();
            });


            // 4. Update and Draw Planets
            nodes.forEach((node, i) => {
                let x, y;

                if (draggedNodeIndex.current === i) {
                    // Dragging overrides orbit
                    x = mouseRef.current.x;
                    y = mouseRef.current.y;

                    // Simple "elastic" connection to orbit (visual only)
                    ctx.beginPath();
                    ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
                    ctx.setLineDash([5, 5]);
                    ctx.moveTo(centerX, centerY);
                    ctx.lineTo(x, y);
                    ctx.stroke();
                    ctx.setLineDash([]);
                } else {
                    // Standard Orbital Motion
                    node.angle += node.speed;

                    // Mouse Proximity disturbance (push away slightly if too close)
                    let orbitR = node.orbitRadius;

                    const mouseDx = mouseRef.current.x - centerX;
                    const mouseDy = mouseRef.current.y - centerY;
                    // Check if mouse is near this planet's general orbit area? 
                    // Actually simpler: check distance to PLANET current pos
                    const currentX = centerX + Math.cos(node.angle) * orbitR;
                    const currentY = centerY + Math.sin(node.angle) * orbitR;

                    const mDx = mouseRef.current.x - currentX;
                    const mDy = mouseRef.current.y - currentY;
                    const mDist = Math.sqrt(mDx * mDx + mDy * mDy);

                    if (mDist < 100) {
                        // Slow down when hovered?
                        node.angle -= node.speed * 0.5;
                    }

                    x = centerX + Math.cos(node.angle) * orbitR;
                    y = centerY + Math.sin(node.angle) * orbitR;
                }

                // Update node state for hit detection
                node.x = x;
                node.y = y;

                // Draw Planet
                const gradient = ctx.createRadialGradient(x, y, node.radius * 0.2, x, y, node.radius * 2);
                gradient.addColorStop(0, node.color);
                gradient.addColorStop(1, "transparent");
                ctx.fillStyle = gradient;

                ctx.beginPath();
                ctx.arc(x, y, node.radius, 0, Math.PI * 2);
                ctx.fill();

                // Solid Core
                ctx.fillStyle = "white";
                ctx.beginPath();
                ctx.arc(x, y, 2, 0, Math.PI * 2);
                ctx.fill();

                // Planet Ring (Saturn style) for some nodes
                if (i % 3 === 0) {
                    ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
                    ctx.beginPath();
                    ctx.ellipse(x, y, node.radius + 5, (node.radius + 5) * 0.3, node.angle, 0, Math.PI * 2);
                    ctx.stroke();
                }

                // Text Label
                ctx.font = "12px monospace";
                ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
                ctx.textAlign = "center";
                ctx.fillText(node.text, x, y + node.radius + 15);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, [nodes]);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Hit detection
        nodes.forEach((node, i) => {
            const dx = node.x - mouseX;
            const dy = node.y - mouseY;
            if (Math.sqrt(dx * dx + dy * dy) < node.radius + 20) {
                draggedNodeIndex.current = i;
            }
        });
        mouseRef.current.isDown = true;
        mouseRef.current.x = mouseX; // Init pos
        mouseRef.current.y = mouseY;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseRef.current.x = e.clientX - rect.left;
        mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseUp = () => {
        draggedNodeIndex.current = null;
        mouseRef.current.isDown = false;
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "w-full h-[600px] relative overflow-hidden bg-black rounded-xl border border-white/5 cursor-crosshair active:cursor-grabbing",
                className
            )}
            style={{
                background: "linear-gradient(to bottom, #000000, #050510)" // Deep space gradient
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <canvas ref={canvasRef} className="absolute inset-0 block" />
        </div>
    );
}
