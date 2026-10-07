import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Diagnosis from "@/components/home/Diagnosis";
import Workshop from "@/components/home/Workshop";
import Contact from "@/components/home/Contact";

import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030507]">
      <Header />

      <Hero />

      <Reveal>
        <Services />
      </Reveal>

      <Reveal delay={40}>
        <Diagnosis />
      </Reveal>

      <Reveal delay={40}>
        <Workshop />
      </Reveal>

      <Reveal delay={40}>
        <Contact />
      </Reveal>

      <Footer />
    </main>
  );
}