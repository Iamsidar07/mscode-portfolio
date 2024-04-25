"use client";
import Image from "next/image";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constants";
import { square, twoline } from "@/assets";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
const Projects = () => {
  const container = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    const cards = gsap.utils.toArray(".card");
    gsap.to(cards, {
      xPercent: -100 * (cards.length - 1),
      scrollTrigger: {
        trigger: "#work",
        start: "top top-=100",
        end: "+=" + container?.current?.offsetWidth,
        scrub: 0.3,
        pin: true,
      },
    });
  }, []);
  return (
    <section
      ref={container}
      id={"work"}
      className={`relative py-24 border-y border-gray-900 overflow-x-hidden h-[${projects.length * 100}vh] `}
    >
      <div className="absolute top-12 -left-6 w-24 lg:w-36 h-24 lg:h-36 z-20">
        <Image src={twoline} alt="twoline" fill className="object-contain " />
      </div>
      <div className="absolute -top-12 lg:-top-20 right-0 w-24 lg:w-32 h-28 lg:h-44 z-20">
        <Image
          src={square}
          alt="square"
          fill
          className="object-contain w-full h-full "
        />
      </div>

      <div className="bg-violet-700 w-[300px] h-[300px] absolute blur-3xl rounded-full -z-50 filter bg-opacity-20 top-1/2 right-1/3" />

      <h2 className="text-2xl lg:text-7xl font-medium text-white text-center">
        Manoj&apos;s Portfolio
      </h2>

      <div className="bg-violet-700 w-[300px] h-[300px] absolute blur-3xl rounded-full -z-50 filter bg-opacity-20 -top-24 right-1/3" />
      <p className=" text-center text-sm lg:text-lg my-6 text-white">
        Web apps that I have worked on.
      </p>
      <div className="flex items-center justify-center flex-nowrap space-x-10   w-[900vh] px-20">
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
