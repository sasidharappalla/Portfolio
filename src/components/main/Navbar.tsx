"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 transition-all duration-300 ${scrolled ? "bg-[#030014]/50" : ""}`}>
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
                    <span className="font-bold ml-[10px] hidden md:block text-gray-300">
                        Sasidhar Appalla
                    </span>
                </a>

                <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        <a href="#about-me" className="cursor-pointer hover:text-[#7042f8] transition">About me</a>
                        <a href="#skills" className="cursor-pointer hover:text-[#7042f8] transition">Skills</a>
                        <a href="#projects" className="cursor-pointer hover:text-[#7042f8] transition">Projects</a>
                    </div>
                </div>

                <div className="flex flex-row gap-5">
                    {/* Socials can go here */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
