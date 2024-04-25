import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Tag = {
  name: string;
  color: string;
};
type ProjectCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  appURL: string;
  tags: Tag[];
};

const ProjectCard = ({
  title,
  description,
  image,
  appURL,
  tags,
}: ProjectCardProps) => {
  return (
    <div className="min-w-screen border border-gray-800 flex flex-col rounded-lg group card overflow-hidden relative backdrop-blur-xl ring ring-teal-950 group">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-950 z-10 h-0 group-hover:h-full transition-all" />
      <Link
        href={appURL}
        target="_blank"
        className="relative inline-block w-full"
      >
        <Image
          src={image}
          alt={title}
          width={1920}
          height={1080}
          className="object-cover"
        />
      </Link>

      <div className="p-4 absolute w-full -bottom-1/2 group-hover:bottom-1/3 group-hover:translate-y-1/3 flex flex-col items-center justify-center z-50 transition-transform">
        <Link
          href={appURL}
          target={"_blank"}
          className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-900 overflow-hidden p-2"
        >
          <Image
            src={"/link.png"}
            width={100}
            height={100}
            alt="view more"
            className="w-full h-full object-contain"
          />
        </Link>

        <h1 className="text-white capitalize text-lg lg:text-2xl tracking-wider">
          {title}
        </h1>

        <p className="mt-2 text-gray-300">{description}</p>
        <div className="flex items-center gap-1 flex-wrap mt-2.5">
          {tags?.map((tag, i) => (
            <span key={i} className={`${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
