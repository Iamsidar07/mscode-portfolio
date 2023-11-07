import { right, rightArrow, } from "@/assets";
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
    <div className="max-w-[350px] lg:max-w-[450px] border border-gray-800 flex flex-col rounded-lg group overflow-hidden ">
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
      <div className="p-4">
        <Link href={appURL}>
          {" "}
          <h1 className="text-white capitalize text-lg lg:text-2xl group-hover:underline transition-all duration-200 ease-linear tracking-wider">
            {title}
          </h1>
        </Link>

        <p className="mt-2 text-left text-gray-300">{description}</p>
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
