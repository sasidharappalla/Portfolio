"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function SystemStats() {
    const [uptime, setUptime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setUptime(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const stats = [
        { label: "SYS_UPTIME", value: formatTime(uptime) },
        { label: "KERNEL_VER", value: "v4.2.0-rc1" },
        { label: "MEMORY", value: "64.0 GB / OK" },
        { label: "STATUS", value: "OPTIMAL", color: "text-green-400" },
    ];

    return (
        <div className="flex flex-col gap-4 font-mono text-xs text-primary/60 border-l border-primary/20 pl-4">
            {stats.map((stat, i) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex justify-between items-center gap-8"
                >
                    <span>{stat.label}</span>
                    <span className={stat.color || "text-slate-400"}>{stat.value}</span>
                </motion.div>
            ))}
        </div>
    );
}
