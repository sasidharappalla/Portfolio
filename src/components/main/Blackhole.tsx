"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.cjs";

const Blackhole = (props: any) => {
    const ref = useRef<any>(null); // Fixed: Initialized with null

    // Create a torus/disk shape for the accretion disk
    const [positions] = React.useState(() => {
        const count = 3000;
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = 2.5 + Math.random() * 2; // Radius 2.5 to 4.5
            pos[i * 3] = Math.cos(angle) * radius;     // x
            pos[i * 3 + 1] = (Math.random() - 0.5) * 0.2; // y (flat disk)
            pos[i * 3 + 2] = Math.sin(angle) * radius; // z
        }
        return pos;
    });

    useFrame((state, delta) => {
        // Rotation
        if (ref.current) {
            ref.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <group {...props} rotation={[0, 0, Math.PI / 6]}> {/* Tilted View */}
            {/* Accretion Disk */}
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#7042f8" // Violet/Purple
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>

            {/* The Void (Black Sphere) */}
            <mesh>
                <sphereGeometry args={[2, 32, 32]} />
                <meshBasicMaterial color="#000000" />
            </mesh>

            {/* Event Horizon Glow */}
            <mesh scale={[2.1, 2.1, 2.1]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshBasicMaterial color="#7042f8" transparent opacity={0.1} />
            </mesh>
        </group>
    );
};

export default Blackhole;
