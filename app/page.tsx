import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectPreview from "@/components/ProjectPreview";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import ServiceArea from "@/components/ServiceArea";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <ProjectPreview />
      <Services />
      <WhyChooseUs />
      <About />
      <Reviews />
      <ServiceArea />
      <Contact />
      <Footer />
    </main>
  );
}