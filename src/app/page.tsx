import Testimonials from "@/components/Testimonials";
import Company from "@/components/Company";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import About from "@/components/About";
import CodeEditor from "@/components/CodeEditor";

export default function Home() {
  return (
    <>
      <Hero />
      <Company />
      <About />
      <Projects />
      <CodeEditor />
      <Testimonials />
      <Contact />
    </>
  );
}
