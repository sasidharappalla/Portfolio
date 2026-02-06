"use client";

import { resumeData } from "@/data/resume";
import { SkillsUniverse } from "@/components/ui/skills-universe";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SkillsPage() {
    return (
        <main className="h-screen w-screen overflow-hidden bg-background relative selection:bg-primary/30 selection:text-primary-foreground">

            {/* Background Grid */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
            </div>

            {/* Back Button */}
            <div className="absolute top-6 left-6 z-50">
                <Button variant="outline" size="sm" className="gap-2 border-primary/20 bg-background/50 backdrop-blur-md hover:bg-primary/10 hover:border-primary/50 text-xs font-mono" asChild>
                    <Link href="/">
                        <ChevronLeft className="size-4" />
                        RETURN_TO_SYSTEM
                    </Link>
                </Button>
            </div>

            {/* Full Screen Universe */}
            <div className="absolute inset-0 z-10">
                <SkillsUniverse skills={resumeData.skills} />
            </div>

            {/* Overlay Info */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-0 right-0 text-center pointer-events-none z-20"
            >
                <p className="text-slate-500 text-xs font-mono tracking-[0.3em] uppercase opacity-70">
                    Skills Universe System • Solar Orbit Model
                </p>
            </motion.div>

        </main>
    );
}
