"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const Encryption = () => {
    return (
        <div className="flex flex-row relative items-center justify-center min-h-[600px] w-full h-full">
            <div className="absolute w-auto h-auto top-0 z-[5]">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-[40px] font-medium text-center text-gray-200"
                >
                    Performance
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        {" "}
                        &{" "}

                    </span>
                    Security
                </motion.div>
            </div>

            <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
                <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
                    <div className="h-[50px] w-[50px] rounded-full border border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-sm hover:border-[#7042f8] transition-all duration-300 relative z-10">
                        <Lock className="text-gray-300 group-hover:text-[#7042f8] transition-colors" size={24} />
                    </div>

                    <div className="w-[100px] h-[100px] border border-[#7042f8]/30 rounded-full animate-spin-slow absolute mt-0 opacity-50"></div>

                    <div className="translate-y-[40px] opacity-0 group-hover:opacity-100 transition-opacity text-gray-300 font-mono text-sm tracking-wider">
                        ENCRYPTION...
                    </div>
                </div>
            </div>

            <div className="w-full flex items-start justify-center absolute bottom-20">
                {/* Procedural 'Lock' effect */}
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="text-gray-400 font-mono text-xs tracking-[0.5em] text-center opacity-70">
                        SECURE_CONNECTION_ESTABLISHED <br />
                        <span className="text-purple-500">AES-256 ENCRYPTED</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Encryption;
