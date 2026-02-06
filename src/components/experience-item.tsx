"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ExperienceItemProps {
    work: {
        company: string;
        href: string;
        badges: readonly string[];
        location: string;
        title: string;
        logoUrl: string;
        start: string;
        end: string;
        description: string;
    };
    index: number;
}

export function ExperienceItem({ work, index }: ExperienceItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 group"
        >
            {/* Animated Data Stream Line */}
            <div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-primary/20 overflow-hidden">
                <motion.div
                    className="w-full h-[50%] bg-gradient-to-b from-transparent via-primary to-transparent absolute top-[-50%]"
                    animate={{ top: ["-50%", "150%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                />
            </div>

            {/* Node Marker */}
            <div className="absolute left-[-5px] top-0 size-3 rounded-full bg-black border border-primary shadow-[0_0_10px_rgba(139,92,246,0.5)] group-hover:scale-150 transition-transform duration-300" />

            <div className="flex flex-col sm:flex-row justify-between mb-2">
                <div className="flex items-center gap-4 mb-2 sm:mb-0">
                    {work.logoUrl && (
                        <Avatar className="border border-white/10 size-10">
                            <AvatarImage src={work.logoUrl} alt={work.company} className="object-cover" />
                            <AvatarFallback>{work.company[0]}</AvatarFallback>
                        </Avatar>
                    )}
                    <div>
                        <h3 className="font-bold text-lg leading-none group-hover:text-primary transition-colors">{work.company}</h3>
                        <p className="text-sm text-slate-400 font-mono mt-1">{work.title}</p>
                    </div>
                </div>
                <div className="text-right">
                    <span className="text-xs font-mono text-primary/70 bg-primary/10 px-2 py-1 rounded">
                        {work.start} — {work.end}
                    </span>
                    <p className="text-xs text-slate-500 mt-1">{work.location}</p>
                </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-4 border-l-2 border-white/5 pl-4 group-hover:border-primary/30 transition-colors">
                {work.description}
            </p>

            {work.badges.length > 0 && (
                <div className="flex gap-2 flex-wrap pl-4">
                    {work.badges.map((badge) => (
                        <Badge key={badge} variant="outline" className="text-[10px] py-0 h-5 border-white/10 text-slate-400 group-hover:border-primary/30 transition-colors">
                            {badge}
                        </Badge>
                    ))}
                </div>
            )}
        </motion.div>
    );
}
