import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai";

type Tag = {
  name: string;
  color: string;
};
type ProjectCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  appURL?: string;
  sourceCode?: string;
  tags: Tag[];
};

const ProjectCard = ({
  title,
  description,
  image,
  appURL,
  tags,
  sourceCode,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col border-2 border-gray-800 md:rounded-lg group  overflow-hidden relative p-px md:bg-gradient-to-t from-[#131330] to-[#201745]">
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t to-transparent from-[#131330]  z-10 h-0 group-hover:h-full transition-all" />
      <Image
        src={image}
        alt={title}
        width={1920}
        height={1080}
        quality={100}
        className="object-cover md:group-hover:scale-125 transition-transform md:rounded-lg"
      />
      <div className="p-4 md:absolute w-full md:-bottom-3/4 md:group-hover:bottom-1/3 md:group-hover:translate-y-1/3 flex flex-col items-center justify-center z-50 transition-transform">
        <h1 className="text-white capitalize text-lg lg:text-2xl tracking-wider">
          {title}
        </h1>

        <p className="mt-2 text-gray-300">{description}</p>
        <div className="flex items-center gap-1 flex-wrap mt-2.5 font-mono">
          {tags?.map((tag, i) => (
            <span key={i} className={`${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-4">
          {appURL && (
            <Link
              href={appURL}
              target={"_blank"}
              className="bg-gradient-to-br from-indigo-400 to-indigo-900 rounded-md overflow-hidden px-4 py-2 flex items-center gap-1 cursor-pointer"
            >
              <AiOutlineGlobal className="w-6 h-6" />
              Website
            </Link>
          )}
          {sourceCode && (
            <Link
              href={sourceCode}
              target={"_blank"}
              className="bg-gradient-to-br from-violet-500 to-indigo-900 rounded-md overflow-hidden px-4 py-2 flex items-center gap-1 cursor-pointer"
            >
              <AiFillGithub className="w-6 h-6" />
              Source Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
