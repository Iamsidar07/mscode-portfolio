"use client";
import { js, left, line, spring, star } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { AiOutlineGithub, AiOutlineRight } from "react-icons/ai";
import { animateWithGsap } from "@/animations";
import { useGSAP } from "@gsap/react";
const Hero = () => {
  useGSAP(() => {
    animateWithGsap(".braces", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    });
    animateWithGsap(".home_heading", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
      stagger: 0.2,
    });

    animateWithGsap(".star", {
      rotation: 360,
      opacity: 1,
      scale: 5,
      translateX: window.innerWidth / 8,
      translateY: -window.innerWidth / 30,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <section className="relative home border-b border-gray-900">
      <Image
        src={left}
        alt="left"
        width={100}
        height={30}
        className="object-contain absolute translate-y-20 opacity-0 top-0 left-0 hidden lg:block braces "
      />
      <Image
        src={"/bug.svg"}
        alt="right"
        width={200}
        height={200}
        className="object-cover absolute bottom-0 right-0 hidden invert lg:block "
      />
      <Image
        src={spring}
        alt="spring"
        width={150}
        height={20}
        className="object-cover absolute invert -bottom-0 left-4 hidden lg:block "
      />
      <Image
        src={star}
        alt="star"
        width={30}
        height={20}
        className="hidden md:block object-cover absolute opacity-0 top-[25%] left-4 invert star"
      />
      <Image
        src={star}
        alt="star"
        width={30}
        height={20}
        className="object-cover absolute bottom-12 lg:bottom-[35%] right-4 invert"
      />
      <div className="w-full h-[calc(100vh-4rem)]  flex flex-col items-center justify-center gap-4 home_heading">
        <Link
          href={"https://github.com/iamsidar07"}
          target="_blank"
          className="flex items-center gap-1.5 home_heading px-7 py-3 rounded-full bg-gradient-to-r from-gray-900 to-[#0D1220] border border-gray-800 hover:brightness-110"
        >
          <AiOutlineGithub className="w-5 h-5 text-white" />
          <p>Github</p>
        </Link>

        <h1 className=" text-3xl lg:text-7xl leading-9 text-center capitalize font-semibold tracking-wider home_heading">
          {" "}
          a dedicated
        </h1>
        <h2 className=" text-[25px] lg:text-6xl leading-9 text-center capitalize font-semibold tracking-wider flex items-center gap-2 home_heading">
          <span className="text-green-400">Javascript</span>
          <div className="relative w-20 h-12 lg:w-28">
            <Image
              src={js}
              alt="js"
              fill
              className="object-contain w-full h-full"
            />
          </div>
          <span className="text-pink-500">Developer</span>
        </h2>
        <p className="lg:mt-4 text-lg lg:text-2xl font-medium max-w-2xl mx-auto text-center home_heading">
          Why do programmers prefer dark mode?
          <br />
          <span className="w-44 h-12 relative ml-2">
            <span className="text-[#fa8000]">
              {" "}
              Because light attracts bugs!
            </span>
            <Image
              src={line}
              alt="line"
              fill
              className="object-contain mt-6 max-w-[100px]"
            />
          </span>
        </p>

        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 mt-12 home_heading ">
          <Link
            href={
              "https://drive.google.com/file/d/1tyBkiRCvHy0-k3lZx1q0d0Gi4Rn3Lwv0/view"
            }
            target="_blank"
          >
            <Button title="🫠 Download Resume" />
          </Link>
          <Link href={"/#contact"} className="">
            <Button
              title="🫡 HIRE ME"
              icon={
                <AiOutlineRight className="w-4 group-hover:translate-x-2 duration-200" />
              }
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
