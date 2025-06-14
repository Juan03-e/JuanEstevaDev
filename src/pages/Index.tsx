
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <FloatingIcons />
      <Header />
      <main id="home" className="flex-grow pt-16">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
