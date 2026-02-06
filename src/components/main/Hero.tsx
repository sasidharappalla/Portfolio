"use client";

import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full" id="about-me">
            {/* Content Container - z-index higher than canvas */}
            <div className="relative z-[40] h-screen flex flex-col justify-center items-center px-5 pointer-events-none">

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[800px] w-auto h-auto text-center"
                >
                    <span>
                        {resumeData.title}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            Pavan Sai Sasidhar{' '}
                        </span>
                    </span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-lg text-gray-400 my-5 max-w-[600px] text-center"
                >
                    {resumeData.summary}
                </motion.p>

                <motion.a
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    href="#skills"
                    className="py-2 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] pointer-events-auto border border-[#7042f8]/50 hover:bg-[#7042f8]/20 transition bg-[#030014]/50 backdrop-blur-md"
                >
                    Learn More!
                </motion.a>

            </div>
        </div>
    );
};

export default Hero;
