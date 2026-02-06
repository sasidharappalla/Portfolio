"use client";

import React from "react";
import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
    return (
        <section id="experience" className="flex flex-col items-center justify-center py-20 relative z-20">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                Mission Log
            </h1>

            <div className="w-full max-w-5xl px-4 flex flex-col gap-10">
                {resumeData.work.map((work, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-4 border border-[#7042f8]/30 bg-[#030014]/50 backdrop-blur-md p-6 rounded-2xl relative overflow-hidden group hover:border-[#7042f8] transition-colors"
                    >
                        {/* Decorative 'Planet' Line */}
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity" />

                        <div className="flex flex-col gap-2 w-full">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                    {work.title}
                                </h2>
                                <span className="text-gray-400 font-mono text-sm border border-purple-500/30 px-2 py-1 rounded">
                                    {work.start} - {work.end}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 text-gray-300 text-lg">
                                <Briefcase size={16} className="text-purple-400" />
                                <span className="font-semibold">{work.company}</span>
                                <span className="text-gray-600 mx-2">|</span>
                                <MapPin size={16} className="text-cyan-400" />
                                <span className="text-sm text-gray-400">{work.location}</span>
                            </div>

                            <p className="text-gray-400 mt-4 leading-relaxed text-sm">
                                {work.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
