"use client";

import { resumeData } from "@/data/resume";
import React from "react";
import { motion } from "framer-motion";
import {
    SiPython, SiCplusplus, SiGo, SiTypescript, SiJavascript, SiPostgresql,
    SiHtml5, SiCss3, SiScikitlearn, SiPandas, SiNumpy, SiPytorch,
    SiReact, SiNodedotjs, SiExpress, SiDjango, SiFlask, SiSpringboot, SiGraphql,
    SiDocker, SiKubernetes, SiJenkins, SiGit, SiApachekafka, SiRabbitmq, SiAnsible,
    SiMongodb, SiMysql, SiRedis, SiSelenium, SiTableau, SiUnity, SiJira
} from "react-icons/si";
import {
    FaDatabase, FaServer, FaCode, FaCloud, FaShieldAlt, FaJava, FaAws,
    FaMicrosoft, FaChartBar, FaCamera
} from "react-icons/fa";

// Mapping skill strings to Icons
const SkillIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    "Python": SiPython,
    "C++": SiCplusplus,
    "Java": FaJava,
    "GoLang": SiGo,
    "TypeScript": SiTypescript,
    "JavaScript": SiJavascript,
    "SQL": FaDatabase,
    "Bash": FaCode,
    "HTML/CSS": SiHtml5,
    "scikit-learn": SiScikitlearn,
    "Pandas": SiPandas,
    "NumPy": SiNumpy,
    "Computer Vision": FaCamera,
    "Neural Networks": SiPytorch,
    "Matplotlib": FaChartBar,
    "React.js": SiReact,
    "Node.js": SiNodedotjs,
    "Express.js": SiExpress,
    "Django": SiDjango,
    "Flask": SiFlask,
    "Spring Boot": SiSpringboot,
    "GraphQL": SiGraphql,
    "gRPC": FaServer,
    "AWS": FaAws,
    "Azure": FaMicrosoft,
    "Docker": SiDocker,
    "Kubernetes": SiKubernetes,
    "Jenkins": SiJenkins,
    "Git": SiGit,
    "CI/CD": FaServer,
    "Kafka": SiApachekafka,
    "RabbitMQ": SiRabbitmq,
    "Ansible": SiAnsible,
    "PostgreSQL": SiPostgresql,
    "MongoDB": SiMongodb,
    "MySQL": SiMysql,
    "Scylla": FaDatabase,
    "Redis": SiRedis,
    "Burp Suite": FaShieldAlt,
    "Nmap": FaShieldAlt,
    "Nikto": FaShieldAlt,
    "Selenium": SiSelenium,
    "Tableau": SiTableau,
    "Power BI": FaChartBar,
    "Unity": SiUnity,
    "JIRA": SiJira,
    "OPENXR": FaCode
};

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
            style={{ transform: "scale(0.9)" }}
        >
            <div className="w-full h-auto flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-[30px] text-white font-medium mt-[10px] text-center mb-[30px]"
                >
                    Technical Capabilities
                </motion.div>

                <div className="flex flex-row justify-center flex-wrap mt-4 gap-8 items-center max-w-[1200px] px-4">
                    {resumeData.skills.map((skill, index) => {
                        const Icon = SkillIconMap[skill] || FaCode;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="flex flex-col items-center gap-2 group cursor-pointer"
                            >
                                <div className="p-4 rounded-full border border-[#7042f88b] bg-[#0300145e] backdrop-blur-sm group-hover:bg-[#7042f8]/20 group-hover:border-[#7042f8] transition-all duration-300 shadow-[0_0_20px_0_rgba(112,66,248,0.2)]">
                                    <Icon className="text-3xl text-gray-300 group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-xs text-gray-400 group-hover:text-[#7042f8] transition-colors font-mono">
                                    {skill}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
