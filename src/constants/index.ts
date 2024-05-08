import { StaticImageData } from "next/image";
import {
  carsify,
  promptly,
  nextgenvisions,
  mongodb,
  nodejs,
  tailwind,
  reactjs,
  typescript,
  javascript,
  html,
  git,
  css,
  nextjs,
  chatwithpdf,
  snaplink,
  chattube
} from "@/assets";

type tag = {
  name: string;
  color: string;
};
type Project = {
  name: string;
  description: string;
  tags: tag[];
  image: StaticImageData;
  liverUrl: string;
  sourceCodeUrl?: string;
};

type Testimonial = {
  testimonial: string;
  name: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    testimonial: "Code is like humor. When you have to explain it, it’s bad.",
    name: "Cory House",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    testimonial:
      "The function of good software is to make the complex appear simple.",
    name: "Grady Booch",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    testimonial: "The best error message is the one that never shows up.",
    name: "Thomas Fuchs",
    image:
      "data:image/jpeg;base64,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",
  },
];

export const projects: Project[] = [
  {
    name: "ChatTube",
    description:
      "A Chrome extension that enables you to have chat with your favourite youtube video.",
    tags: [
      {
        name: "reactjs",
        color: "text-violet-700",
      },
      {
        name: "chrome extension",
        color: "text-pink-400",
      },
      {
        name: "ai",
        color: "text-blue-400",
      },
      {
        name: "langchain",
        color: "text-pink-400",
      },
    ],
    image: chattube,
    sourceCodeUrl: "https://github.com/Iamsidar07/ChatTube",
    liverUrl: "",
  },


  {
    name: "Chat with pdf",
    description:
      "You can chat with your pdf by uploading pdf to this website.",
    tags: [
      {
        name: "nextjs",
        color: "text-violet-700",
      },
      {
        name: "mongodb",
        color: "text-pink-400",
      },
      {
        name: "typescript",
        color: "text-blue-400",
      },
      {
        name: "tailwindcss",
        color: "text-pink-400",
      },
    ],
    image: chatwithpdf,
    sourceCodeUrl: "https://github.com/Iamsidar07/chat-with-pdf",
    liverUrl: "https://chat-with-pdf-plum.vercel.app/",
  },

  {
    name: "Snaplink",
    description:
      "Snaplink is an url shortner web app used mongodb as database built in nextjs and tailwindcss. Integrated with sanity cms",
    tags: [
      {
        name: "react",
        color: "text-violet-700",
      },
      {
        name: "nextjs",
        color: "text-green-400",
      },
      {
        name: "mongodb",
        color: "text-pink-400",
      },
      {
        name: "typescript",
        color: "text-blue-400",
      },
      {
        name: "tailwindcss",
        color: "text-pink-400",
      },
    ],
    image: snaplink,
    sourceCodeUrl: "https://github.com/Iamsidar07/snaplink",
    liverUrl: "https://snaplink-xegc.vercel.app/",
  },
  {
    name: "Carsify",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "text-violet-700",
      },
      {
        name: "mongodb",
        color: "text-green-400",
      },
      {
        name: "tailwind",
        color: "text-pink-400",
      },
      {
        name: "typescript",
        color: "text-violet-700",
      },
      {
        name: "nextjs",
        color: "text-green-400",
      },
    ],
    image: carsify,
    sourceCodeUrl: "https://github.com/Iamsidar07/Car-Showcase",
    liverUrl: "https://car-showcase-gamma-vert.vercel.app/",
  },
  {
    name: "Nextgenvisions",
    description:
      "Web-based platform that allows users to search, create and generate prompt and generate dalle images and ability to share with the world.",
    tags: [
      {
        name: "react",
        color: "text-violet-700",
      },
      {
        name: "mongodb",
        color: "text-green-400",
      },
      {
        name: "tailwind",
        color: "text-pink-400",
      },
      {
        name: "typescript",
        color: "text-violet-700",
      },
      {
        name: "nextjs",
        color: "text-green-400",
      },
    ],
    image: nextgenvisions,
    sourceCodeUrl: "https://github.com/Iamsidar07/NextGenVisions",
    liverUrl: "https://next-gen-visions.vercel.app/",
  },
  {
    name: "Promptly",
    description:
      "Web-based platform that allows users to search, edit and share different types of prompt.",
    tags: [
      {
        name: "react",
        color: "text-violet-700",
      },
      {
        name: "mongodb",
        color: "text-green-400",
      },
      {
        name: "tailwind",
        color: "text-pink-400",
      },
      {
        name: "typescript",
        color: "text-violet-700",
      },
      {
        name: "nextjs",
        color: "text-green-400",
      },
    ],
    image: promptly,
    sourceCodeUrl: "https://github.com/Iamsidar07/Promptly",
    liverUrl: "https://promptly-rust.vercel.app/",
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
