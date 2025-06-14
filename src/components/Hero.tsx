
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThreeDScene from "./ThreeDScene";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center bg-grid-white/[0.03] relative overflow-hidden">
       <ThreeDScene />
       <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container mx-auto px-6 z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-primary mb-2">Juan Pablo Esteva</h1>
        <p className="text-2xl md:text-3xl font-light text-muted-foreground mb-6">Full Stack Developer</p>
        <p className="max-w-3xl mx-auto text-lg text-secondary-foreground mb-8">
          Developer with experience in C#, .NET, JavaScript, and more. Focused on creating scalable, high-performance web solutions.
        </p>
        <div className="flex justify-center items-center space-x-4 mb-8">
          <a href="https://www.linkedin.com/in/juanpabloesteva/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="https://github.com/juanpaesteva" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={28} />
          </a>
          <a href="mailto:juanpabloesteva1@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={28} />
          </a>
        </div>
        <div>
          <a href="/lovable-uploads/228fedc7-82a9-47ca-8c16-8b5fc8a94d34.png" download="JuanPabloEsteva_CV.png">
             <Button>Download CV</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
