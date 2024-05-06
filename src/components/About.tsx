"use client";
import { manoj, pointingSpring } from "@/assets";
import { animateWithGsap } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

const About = () => {
  useGSAP(() => {
    animateWithGsap(".about_heading", {
      opacity: 1,
      y: 0,
    });
    animateWithGsap(".about_text", {
      opacity: 1,
      y: 0,
    });
    gsap.from("#logo_img", {
      scale: 1.25,
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#logo_img",
        start: "30% bottom",
        toggleActions: "restart reverse restart reverse",
      },
    });
  }, []);
  return (
    <section className="p-6 w-full py-24 h-full" id="about">
      <div className="w-full h-full max-w-[1440px] mx-auto relative">
        <Image
          src={pointingSpring}
          alt="pointing-spring"
          width={120}
          height={120}
          className="object-cover absolute -top-[111px] lg:-top-[15rem] left-0 w-[5rem] lg:w-[12rem] invert-[90%]"
        />
        <h2 className="text-2xl lg:text-6xl font-medium  lg:my-12 about_heading">
          About
        </h2>
        <div className="flex flex-col justify-center items-center gap-4 py-6 w-full overflow-hidden h-full">
          <Image
            src={manoj}
            alt="about"
            width={400}
            height={400}
            id="logo_img"
            className="object-cover opacity-1 manoj-photo"
          />
          <div className="flex flex-col  justify-center gap-6 p-12 leading-relaxed w-full rounded-lg max-w-2xl">
            <p className="text-violet-700 about_text translate-y-20 opacity-0">
              HELLO I&apos;m
            </p>
            <h2 className="font-medium text-lg lg:text-5xl about_text translate-y-20 opacity-0">
              Manoj Kumar ❤️‍🔥
            </h2>
            <p className="about_text translate-y-20 opacity-0">
              Manoj Kumar is a passionate 20-year-old coder with a love for
              developing full-stack web apps. He is deeply enthusiastic about
              programming and constantly seeks to expand his knowledge and
              skills in the field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
