import { manoj, pointingSpring } from "@/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="p-6 w-full py-24 " id="about">
      <div className="w-full h-full max-w-[1440px] mx-auto relative">
        <Image
          src={pointingSpring}
          alt="pointing-spring"
          width={120}
          height={120}
          className="object-cover absolute -top-[111px] lg:-top-[15rem] left-0 w-[5rem] lg:w-[12rem] invert-[90%]"
        />
        <h2 className="text-2xl lg:text-6xl font-medium  lg:my-12">About</h2>
        <div className="flex flex-col justify-center items-center gap-4 py-6 w-full ">
          <Image
            src={manoj}
            alt="about"
            width={400}
            height={400}
            className="object-cover rounded-full border border-gray-900 p-1"
          />
          <div className="flex flex-col  justify-center gap-6 p-12 shadow-[12px_12px_#0f172a] leading-relaxed w-full rounded-lg max-w-2xl border border-gray-900">
            <p className="text-violet-700">HELLO I&apos;m</p>
            <h2 className="font-medium text-lg lg:text-5xl ">Manoj Kumar</h2>
            <p>
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
