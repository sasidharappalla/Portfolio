"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

export function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
    const [displayText, setDisplayText] = useState("");
    const [isHovered, setIsHovered] = useState(false);

    // Scramble effect function
    const scramble = () => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText((prev) =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 2; // Speed of decoding
        }, 30);
        return interval;
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            scramble();
        }, delay * 1000);
        return () => clearTimeout(timeout);
    }, [text, delay]);

    const handleMouseEnter = () => {
        if (!isHovered) {
            setIsHovered(true);
            scramble();
            setTimeout(() => setIsHovered(false), 1000); // Debounce
        }
    };

    return (
        <motion.span
            className={className}
            onMouseEnter={handleMouseEnter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {displayText}
        </motion.span>
    );
}
