
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const paragraphs = [
  "Desarrollador Full Stack de Montevideo, Uruguay, con sólida experiencia en la construcción y mantenimiento de aplicaciones web escalables. Actualmente tengo 22 años y estoy cursando la carrera de Ingeniería en Datos e Inteligencia Artificial en la UCU.",
  "Tengo capacidad demostrada para diseñar APIs RESTful, implementar sistemas de autenticación y desarrollar interfaces de frontend responsivas con código limpio. Con habilidades en prácticas de DevOps, incluyendo despliegue, configuración de servidores y automatización.",
  "Estoy enfocado en el rendimiento, la mantenibilidad y en ofrecer soluciones prácticas y colaborativas."
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Sobre Mí</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr,2fr] gap-8 md:gap-12 items-center">
          <div className="flex justify-center animate-in fade-in zoom-in-95 duration-500">
            <Avatar className="w-48 h-48 md:w-60 md:h-60 border-4 border-primary/20 shadow-lg">
              <AvatarImage src="/lovable-uploads/bba84d5e-3978-4756-a1b8-652dbe5a4495.png" alt="Juan Pablo Esteva" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </div>
          <div className="animate-in fade-in zoom-in-95 duration-500 delay-200">
            <Card className="bg-transparent border-0 shadow-none md:bg-secondary/50 md:border md:border-border md:backdrop-blur-sm md:shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-center md:text-left">Resumen Profesional</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg text-muted-foreground space-y-4 text-center md:text-left">
                  {paragraphs.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
