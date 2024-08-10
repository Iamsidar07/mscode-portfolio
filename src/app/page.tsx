import Company from "@/components/Company";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import About from "@/components/About";
import CodeEditor from "@/components/CodeEditor";
import LatestBlogs from "@/components/LatestBlogs";

export default function Home() {
  return (
    <>
      <Hero />
      <LatestBlogs />
      <Company />
      <About />
      <Projects />
      <CodeEditor />
      <Contact />
    </>
  );
}
