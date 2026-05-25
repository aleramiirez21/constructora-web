import WhatWeDo from "@/components/WhatWeDo";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-gray-100 text-white">

      <Navbar />
      <Hero />
      <Services />
      <WhatWeDo />
      <Projects />
      <Contact />
    

    </main>
  );
}