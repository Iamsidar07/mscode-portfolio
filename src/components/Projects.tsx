"use client";
import Image from "next/image";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constants";
import { square, twoline } from "@/assets";
const Projects = () => {
  return (
    <section className={`relative py-24 border-y border-gray-900 `}>
      <div className="absolute top-12 -left-6 w-24 lg:w-36 h-24 lg:h-36 z-20">
        <Image src={twoline} alt="twoline" fill className="object-contain " />
      </div>
      <div className="absolute -top-12 lg:-top-20 right-0 w-24 lg:w-32 h-28 lg:h-44 z-50">
        <Image
          src={square}
          alt="square"
          fill
          className="object-contain w-full h-full "
        />
      </div>

      <div className="bg-violet-700 w-[300px] h-[300px] absolute blur-3xl rounded-full -z-50 filter bg-opacity-20 top-1/2 right-1/3" />

      <h2 className="text-2xl lg:text-7xl font-medium text-white text-center">
        Works👨‍🏭
      </h2>

      <div className="bg-violet-700 w-[300px] h-[300px] absolute blur-3xl rounded-full -z-50 filter bg-opacity-20 -top-24 right-1/3" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 max-w-7xl mx-auto p-3 mt-6">
        {projects.map((project, i) => (
          <ProjectCard
            title={project.name}
            description={project.description}
            image={project.image}
            appURL={project.liverUrl}
            key={i}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
