"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { StarBackground } from "./StarBackground";
import Blackhole from "./Blackhole";
import Galaxy from "./Galaxy";
import { Preload } from "@react-three/drei";

const backgrounds = [
    {
        component: StarBackground,
        name: "Stars",
        props: { scale: [6, 6, 6] }, // Scale up to match camera distance
        cameraProps: { position: [0, 0, 1] }
    },
    {
        component: Blackhole,
        name: "Blackhole",
        props: { position: [0, -2, 0] },
        cameraProps: { position: [0, 0, 8], fov: 45 }
    },
    {
        component: Galaxy,
        name: "Galaxy",
        props: { scale: [1, 1, 1] },
        cameraProps: { position: [0, 0, 8], fov: 45 }
    },
];

const CyclingBackgrounds = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % backgrounds.length);
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    const currentBg = backgrounds[index];
    const Component = currentBg.component;

    // Use a key to force re-render of Canvas when camera settings might need to change drastically, 
    // or just pass different props. 
    // Ideally we keep one Canvas and just change the scene, but here camera requirements differ.
    // Stars was [0,0,1], Blackhole [0,0,8].

    // Simplest approach: Use the Blackhole camera settings (Z=8) for all, and scale Stars.

    return (
        <div className="fixed inset-0 z-0 h-screen w-full pointer-events-none">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <Suspense fallback={null}>
                    <Component {...currentBg.props} />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}

export default CyclingBackgrounds;
