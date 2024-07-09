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
    <div className="flex flex-col border-2 border-gray-800 md:rounded-lg group  overflow-hidden relative p-px md:bg-gradient-to-t from-[#131330] to-[#201745]">
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t to-transparent from-[#131330]  z-10 h-0 group-hover:h-full transition-all" />
      <Link
        href={appURL}
        target="_blank"
        className="relative inline-block w-full overflow-hidden md:rounded-lg"
      >
        <Image
          src={image}
          alt={title}
          width={1920}
          height={1080}
          quality={100}
          className="object-cover group-hover:scale-125 transition-transform md:rounded-lg"
        />
      </Link>

      <div className="p-4 md:absolute w-full md:-bottom-3/4 md:group-hover:bottom-1/3 md:group-hover:translate-y-1/3 flex flex-col items-center justify-center z-50 transition-transform">
        <Link
          href={appURL}
          target={"_blank"}
          className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-900 overflow-hidden p-2 hidden md:block"
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
        <div className="flex items-center gap-1 flex-wrap mt-2.5 font-mono">
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
