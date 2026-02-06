"use client";

import React from "react";
import { ProjectCard } from "@/components/project-card";
import { resumeData } from "@/data/resume";

const Projects = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20" id="projects">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
                {resumeData.projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
