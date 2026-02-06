"use client";

import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe, ExternalLink, Code } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface Project {
    title: string;
    description: string;
    techStack: readonly string[];
    link: { label: string; href: string };
    start: string;
    end: string;
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const offsetFromCenterList = {
            x: event.clientX - centerX,
            y: event.clientY - centerY
        }

        x.set(offsetFromCenterList.x);
        y.set(offsetFromCenterList.y);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-300, 300], [5, -5]); // Reverse axis for tilt
    const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ perspective: 1000 }}
        >
            <motion.div
                ref={ref}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="h-full"
            >
                <Card className="h-full flex flex-col justify-between overflow-hidden bg-black/40 backdrop-blur-xl border-white/10 relative group hover:border-primary/50 transition-colors duration-500">

                    {/* Holographic Sheen Gradient */}
                    <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                        style={{
                            background: "linear-gradient(105deg, transparent 40%, rgba(139, 92, 246, 0.1) 45%, rgba(6, 182, 212, 0.1) 50%, transparent 54%)",
                            backgroundSize: "200% 200%",
                            translateX: useTransform(mouseX, [-300, 300], ["-20%", "0%"]),
                        }}
                    />

                    <div className="absolute top-0 right-0 p-2 z-20">
                        <div className="text-[10px] font-mono text-primary/30 border border-primary/10 px-1 uppercase tracking-widest group-hover:text-primary group-hover:border-primary/50 transition-colors">
                            PROJ_0{index + 1}
                        </div>
                    </div>

                    <CardHeader className="relative z-10">
                        <CardTitle className="text-xl font-bold flex items-center gap-2 group-hover:text-primary transition-colors">
                            <Code className="size-5 text-primary/50" />
                            {project.title}
                        </CardTitle>
                        <CardDescription className="text-slate-400 mt-2">
                            {project.description}
                        </CardDescription>
                    </CardHeader>

                    <CardFooter className="flex flex-col gap-4 items-start relative z-10">
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <Badge
                                    key={tech}
                                    variant="secondary"
                                    className="bg-white/5 hover:bg-white/10 border-white/5 text-xs font-mono text-slate-300"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>

                        <div className="flex gap-2 w-full mt-2 pt-4 border-t border-white/5">
                            <Button asChild variant="ghost" size="sm" className="flex-1 hover:bg-primary/10 hover:text-primary text-xs font-mono uppercase tracking-wider group/btn">
                                <a href={project.link.href} target="_blank" rel="noopener noreferrer">
                                    <Globe className="mr-2 size-3 group-hover/btn:rotate-12 transition-transform" />
                                    {project.link.label}
                                </a>
                            </Button>
                        </div>

                        {/* Corner Markers */}
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardFooter>
                </Card>
            </motion.div>
        </motion.div>
    );
}
