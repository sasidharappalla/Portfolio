"use client";

import { motion } from "framer-motion";

interface EducationCardProps {
    edu: {
        school: string;
        degree: string;
        start: string;
        end: string;
        gpa: string;
    };
    index: number;
}

export function EducationCard({ edu, index }: EducationCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group bg-black/40 backdrop-blur-md border border-white/10 rounded-sm p-6 overflow-hidden hover:border-primary/40 transition-colors"
        >
            {/* Gold Connector Pins (RAM Style) */}
            <div className="absolute bottom-0 left-0 right-0 h-1 flex justify-center gap-[2px] opacity-50">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="w-2 h-full bg-yellow-600/50 rounded-t-[1px]" />
                ))}
            </div>

            <div className="flex justify-between items-start mb-4 relative z-10">
                <div>
                    <div className="text-[10px] font-mono text-primary/40 uppercase mb-1 tracking-widest">Mem_Slot_0{index + 1}</div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{edu.school}</h3>
                    <p className="text-slate-400 text-sm mt-1">{edu.degree}</p>
                </div>
                <div className="text-right">
                    <div className="inline-block px-2 py-1 bg-white/5 border border-white/5 rounded text-xs font-mono text-primary/80">
                        GPA: {edu.gpa}
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-end border-t border-white/5 pt-4 pb-2 relative z-10">
                <span className="text-xs text-slate-500 font-mono">{edu.start} — {edu.end}</span>
                <div className="flex gap-1">
                    <div className="size-1 bg-primary/20 rounded-full animate-pulse" />
                    <div className="size-1 bg-primary/20 rounded-full animate-pulse delay-75" />
                    <div className="size-1 bg-primary/20 rounded-full animate-pulse delay-150" />
                </div>
            </div>

            {/* Decorative Circuit Lines */}
            <div className="absolute top-0 right-0 w-20 h-20 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-primary w-full h-full">
                    <path d="M100 0 L50 50 L0 50" strokeWidth="1" />
                    <path d="M100 20 L60 60 L0 60" strokeWidth="1" />
                </svg>
            </div>

        </motion.div>
    );
}
