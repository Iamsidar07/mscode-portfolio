import Company from "@/components/Company";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import About from "@/components/About";
import CodeEditor from "@/components/CodeEditor";
import Blogs from "@/components/Blogs";

export default function Home() {
  return (
    <>
      <Hero />
      <h2 className="text-center my-12 text-lg lg:text-6xl font-bold">
        Latest Blogs
      </h2>
      <Blogs />
      <Company />
      <About />
      <Projects />
      <CodeEditor />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}
