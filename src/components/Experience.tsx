
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const experienceData = [
  {
    role: "Full Stack Developer",
    company: "Freelancer",
    period: "Mayo 2025 - Presente",
    tasks: [
      "Desarrollo de API RESTful con C# y .NET 8.0.",
      "Implementación de autenticación, autorización y DTOs.",
      "Construcción de frontend con JavaScript, HTML, y CSS.",
      "Colaboración con diseñador para asegurar consistencia.",
      "Diseño de base de datos MySQL desde cero.",
    ],
  },
  {
    role: "Junior Developer",
    company: "Casas y +",
    period: "Junio 2025 - Presente",
    tasks: [
      "Desarrollo de funcionalidades web con PHP, JavaScript, y MySQL para CRM.",
      "Mantenimiento y optimización de proyectos existentes.",
      "Gestión de tareas DevOps en producción.",
      "Automatización de procesos con scripting y Git.",
      "Colaboración con equipo de ventas en soluciones técnicas.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Experiencia Laboral</h2>
        <div className="relative max-w-3xl mx-auto border-l-2 border-primary/30">
          {experienceData.map((job, index) => (
            <div key={index} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-secondary/30">
              </span>
              <Card className="ml-4 border-border bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <p className="text-sm font-semibold text-primary">{job.period}</p>
                  <CardTitle>{job.role}</CardTitle>
                  <CardDescription>{job.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {job.tasks.map((task, i) => <li key={i}>{task}</li>)}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
