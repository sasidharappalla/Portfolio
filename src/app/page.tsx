"use client";

import CyclingBackgrounds from "@/components/main/CyclingBackgrounds";
import Navbar from "@/components/main/Navbar";
import Hero from "@/components/main/Hero";
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

        <CyclingBackgrounds />

        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
