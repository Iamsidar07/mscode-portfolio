import Testimonials from "@/components/Testimonials";
import Company from "@/components/Company";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";

export default function Home() {
  return (
    <section className="">
      <Hero />
      <Company/>
      <About/>
      {/* <WhyChooseUs/> */}
      <Projects/>
      <Testimonials/>
      <Contact/>
    </section>
  )
}