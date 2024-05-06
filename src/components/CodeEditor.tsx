import { vscode } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CodeEditor = () => {
  return (
    <section className="p-6 w-full py-24 relative border-b border-gray-800 ">
      <div className="flex justify-center">
        <div className="absolute top-0 bg-gradient-to-r  from-transparent via-violet-400 to-transparent h-[1px] w-1/2"></div>
        <div className="bg-violet-700 w-[300px] h-[300px] absolute blur-3xl rounded-full -z-50 filter bg-opacity-20 -top-[150px]" />
      </div>
      <div className="w-full h-full  max-w-[1440px] mx-auto relative">
        <h3 className="font-medium text-lg lg:text-5xl text-center my-12">
          Install 🔥<span className="text-pink-400">VSCode theme</span>
        </h3>
        <Link
          href={
            "https://marketplace.visualstudio.com/items?itemName=ManojKumar.late-night-coding-theme"
          }
          target="_blank"
        >
          <div className="mockup rounded-2xl shadow-2xl shadow-teal-900 bg-gradient-to-r  from-teal-950 via-violet-800 to-pink-900 p-2">
            <Image
              src={vscode}
              alt="vscode theme"
              width={1920}
              height={1080}
              className="w-full h-full bg-contain rounded-2xl"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CodeEditor;
