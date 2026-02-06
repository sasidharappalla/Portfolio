"use client";

import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { resumeData } from "@/data/resume";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[50] relative bg-[#030014]/50 backdrop-blur-md border-t border-[#7042f8]/20">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-start justify-around flex-wrap gap-8">

                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px] mb-4 text-white">Community</div>
                        {resumeData.contact.social.map((social) => {
                            if (social.name !== "GitHub" && social.name !== "LinkedIn") return null;
                            const Icon = social.name === "GitHub" ? Github : Linkedin;
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-row items-center my-[10px] cursor-pointer hover:text-[#7042f8] transition-colors"
                                >
                                    <Icon size={18} />
                                    <span className="text-[15px] ml-[6px]">{social.name}</span>
                                </a>
                            )
                        })}
                    </div>

                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px] mb-4 text-white">Social Media</div>
                        {resumeData.contact.social.map((social) => {
                            if (social.name !== "X") return null;
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-row items-center my-[10px] cursor-pointer hover:text-[#7042f8] transition-colors"
                                >
                                    <Twitter size={18} />
                                    <span className="text-[15px] ml-[6px]">Twitter (X)</span>
                                </a>
                            )
                        })}
                    </div>

                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px] mb-4 text-white">About</div>
                        <div className="flex flex-row items-center my-[10px] cursor-pointer hover:text-[#7042f8] transition-colors">
                            <Mail size={18} />
                            <a href={`mailto:${resumeData.contact.email}`} className="text-[15px] ml-[6px]">{resumeData.contact.email}</a>
                        </div>
                    </div>
                </div>

                <div className="mb-[20px] mt-10 text-[15px] text-center text-gray-500">
                    &copy; {new Date().getFullYear()} {resumeData.name} . All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
