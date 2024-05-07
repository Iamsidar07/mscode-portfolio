import Link from "next/link";
import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="relative px-2 py-2.5 w-full border-t border-t-gray-800">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full h-full max-w-[1440px] mx-auto gap-4 ">
        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()} Manoj Kumar | All rights reserved
        </p>
        <div className="flex items-center gap-4">
          <Link href={"https://twitter.com/iamsidar07"} target="_blank">
            <AiOutlineTwitter className="w-6 h-6" />

          </Link>
          <Link href={"https://github.com/iamsidar07"} target="_blank">

            <AiOutlineGithub className="w-6 h-6" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/manoj-kumar-72aa54222/"}
            target="_blank"

          >

            <AiOutlineLinkedin className="w-6 h-6" />

          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;

