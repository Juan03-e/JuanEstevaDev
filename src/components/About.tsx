
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Sobre Mí</h2>
        <Card className="max-w-4xl mx-auto bg-secondary/50 border-border backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Resumen Profesional</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4 text-lg">
            <p>
              Desarrollador Full Stack de Montevideo, Uruguay, con sólida experiencia en la construcción y mantenimiento de aplicaciones web escalables. Actualmente tengo 22 años y estoy cursando la carrera de Ingeniería en Datos e Inteligencia Artificial en la UCU.
            </p>
            <p>
              Tengo capacidad demostrada para diseñar APIs RESTful, implementar sistemas de autenticación y desarrollar interfaces de frontend responsivas con código limpio. Con habilidades en prácticas de DevOps, incluyendo despliegue, configuración de servidores y automatización.
            </p>
            <p>
              Estoy enfocado en el rendimiento, la mantenibilidad y en ofrecer soluciones prácticas y colaborativas.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
