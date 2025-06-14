
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const paragraphs = [
  "Full Stack Developer from Montevideo, Uruguay, with solid experience in building and maintaining scalable web applications. I am currently 22 years old and studying for a degree in Data Engineering and Artificial Intelligence at UCU.",
  "Proven ability to design RESTful APIs, implement authentication systems, and develop responsive frontend interfaces with clean code. Skilled in DevOps practices, including deployment, server configuration, and automation.",
  "I am focused on performance, maintainability, and delivering practical and collaborative solutions."
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr,2fr] gap-8 md:gap-12 items-center">
          <div className="flex justify-center animate-in fade-in zoom-in-95 duration-500">
            <Avatar className="w-60 h-60 md:w-72 md:h-72 border-4 border-primary/20 shadow-lg">
              <AvatarImage src="/lovable-uploads/bba84d5e-3978-4756-a1b8-652dbe5a4495.png" alt="Juan Pablo Esteva" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </div>
          <div className="animate-in fade-in zoom-in-95 duration-500 delay-200">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
              Turning complex ideas into <span className="text-muted-foreground">elegant solutions.</span>
            </h3>
            <div className="text-lg text-muted-foreground space-y-4 text-center md:text-left">
              {paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
