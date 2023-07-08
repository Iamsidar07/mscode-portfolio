import ClientLoveUs from "@/components/ClientLoveUs";
import Company from "@/components/Company";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <section className="">
      <Hero />
      <Company/>
      <WhyChooseUs/>
      <HowItWorks/>
      <Projects/>
      <ClientLoveUs/>
    </section>
  )
}