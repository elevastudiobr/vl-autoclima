import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Diagnosis from "@/components/home/Diagnosis";
import Workshop from "@/components/home/Workshop";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030507]">
      <Header />

      <Hero />

      <Services />

      <Diagnosis />

      <Workshop />

      <Contact />

      <Footer />
    </main>
  );
}