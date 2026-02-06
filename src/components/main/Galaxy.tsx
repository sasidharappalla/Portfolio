"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.cjs";

const Galaxy = (props: any) => {
    const ref = useRef<any>(null);

    // Galaxy Spiral Logic
    const positions = useMemo(() => {
        const count = 4000; // Number of stars
        const pos = new Float32Array(count * 3);
        const arms = 3; // Spiral arms
        const radius = 5; // Galaxy radius

        for (let i = 0; i < count; i++) {
            // Distance from center
            const r = Math.random() * radius;

            // Spiral angle calculation
            const spinAngle = r * arms;

            // Random offset for organic look
            const branchAngle = (Math.floor(Math.random() * arms) * 2 * Math.PI) / arms;
            const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.5;
            const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.5;
            const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.5;

            // Final positions
            pos[i * 3] = Math.cos(spinAngle + branchAngle) * r + randomX;
            pos[i * 3 + 1] = randomY * 0.5; // Flattened disk
            pos[i * 3 + 2] = Math.sin(spinAngle + branchAngle) * r + randomZ;
        }
        return pos;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.05; // Slow rotation
            ref.current.rotation.z += delta * 0.01;
        }
    });

    return (
        <group rotation={[Math.PI / 4, 0, 0]} {...props}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#f2cf59" // Gold/Yellowish
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
            {/* Secondary cloud for depth (purple) */}
            <Points positions={positions} stride={3} frustumCulled={false} rotation={[0, Math.PI / 6, 0]}>
                <PointMaterial
                    transparent
                    color="#8b5cf6" // Violet
                    size={0.01}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.5}
                />
            </Points>
        </group>
    );
};

export default Galaxy;
