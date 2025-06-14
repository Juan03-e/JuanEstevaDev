
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Talk</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <a href="mailto:juanpabloesteva1@gmail.com">
          <Button size="lg" className="text-lg">
            <Mail className="mr-2 h-5 w-5" /> Contact Me
          </Button>
        </a>
        <div className="flex justify-center items-center space-x-6 mt-12">
          <a href="https://github.com/juanpaesteva" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={32} />
          </a>
          <a href="https://www.linkedin.com/in/juanpabloesteva/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
