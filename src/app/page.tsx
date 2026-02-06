"use client";

import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Hero from "@/components/main/Hero";
import Blackhole from "@/components/main/Blackhole";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import Experience from "@/components/main/Experience";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Navbar />

        {/* Main 3D Scene Layer */}
        <div className="fixed inset-0 z-0 h-screen w-full pointer-events-none">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <Blackhole position={[0, -2, 0]} />
          </Canvas>
        </div>

        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Footer />

        <StarsCanvas />
      </div>
    </main>
  );
}
