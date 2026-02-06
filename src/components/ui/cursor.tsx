"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-crosshair')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Main Crosshair */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                <motion.div
                    className="relative w-full h-full flex items-center justify-center"
                    animate={{
                        scale: isHovering ? 1.5 : 1,
                        rotate: isHovering ? 45 : 0
                    }}
                    transition={{ duration: 0.2 }}
                >
                    {/* Horizontal line */}
                    <div className="absolute w-full h-[1px] bg-white" />
                    {/* Vertical line */}
                    <div className="absolute h-full w-[1px] bg-white" />

                    {/* Center dot (only when hovering) */}
                    <motion.div
                        className="w-1 h-1 bg-primary rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovering ? 1 : 0 }}
                    />
                </motion.div>
            </motion.div>

            {/* Trailing Ring */}
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 rounded-full border border-primary/50 pointer-events-none z-[9998]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 2 : 1,
                    opacity: isHovering ? 0 : 0.5
                }}
                transition={{ duration: 0.2 }}
            />
        </>
    );
}
