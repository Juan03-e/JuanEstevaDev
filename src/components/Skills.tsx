
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiBootstrap, SiIonic, SiSharp, SiDotnet, SiMongodb, SiGit, SiGithub } from "react-icons/si";
import { Bot, BarChart, GitMerge, Mic, Sparkles, Webhook } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const skillsData = {
  frontend: [
    { name: "JavaScript", icon: <SiJavascript style={{ color: '#F7DF1E' }} />, description: "Un lenguaje de programación de alto nivel, esencial para el desarrollo web interactivo." },
    { name: "HTML", icon: <SiHtml5 style={{ color: '#E34F26' }} />, description: "Lenguaje de marcado estándar para estructurar contenido en la web." },
    { name: "CSS", icon: <SiCss3 style={{ color: '#1572B6' }} />, description: "Lenguaje para describir la presentación y el estilo de los documentos HTML." },
    { name: "React", icon: <SiReact style={{ color: '#61DAFB' }} />, description: "Biblioteca de JavaScript para construir interfaces de usuario o componentes de UI." },
    { name: "Bootstrap", icon: <SiBootstrap style={{ color: '#7952B3' }} />, description: "Framework de CSS para desarrollar sitios web responsivos y mobile-first." },
    { name: "Ionic", icon: <SiIonic style={{ color: '#3880FF' }} />, description: "SDK para el desarrollo de aplicaciones móviles híbridas y multiplataforma." },
  ],
  backend: [
    { name: "C#", icon: <SiSharp style={{ color: '#239120' }} />, description: "Lenguaje de programación moderno y orientado a objetos desarrollado por Microsoft." },
    { name: ".NET8", icon: <SiDotnet style={{ color: '#512BD4' }} />, description: "Framework para construir aplicaciones multiplataforma con alto rendimiento." },
    { name: "Razor", icon: <span className="font-bold text-fuchsia-500">{"</>"}</span>, description: "Sintaxis de marcado para incrustar código C# en páginas web." },
    { name: "SQL", icon: <span className="font-extrabold text-[#CC2927]">SQL</span>, description: "Lenguaje estándar para gestionar y manipular bases de datos relacionales." },
    { name: "MongoDB", icon: <SiMongodb style={{ color: '#47A248' }} />, description: "Base de datos NoSQL orientada a documentos, ideal para aplicaciones escalables." },
    { name: "APIs Restful", icon: <Webhook className="text-sky-500" />, description: "Diseño y desarrollo de APIs siguiendo los principios de la arquitectura REST." },
    { name: "Git", icon: <SiGit style={{ color: '#F05032' }} />, description: "Sistema de control de versiones distribuido para el seguimiento de cambios en el código fuente." },
    { name: "GitHub", icon: <SiGithub />, description: "Plataforma de alojamiento de repositorios Git que ofrece herramientas de colaboración para el desarrollo de software." },
  ],
  interests: [
    { name: "Clean code", icon: <Sparkles className="text-yellow-400" /> },
    { name: "Automatización", icon: <Bot className="text-cyan-400" /> },
    { name: "Análisis de datos", icon: <BarChart className="text-green-400" /> },
    { name: "Fundamentos de DevOps", icon: <GitMerge className="text-orange-400" /> },
    { name: "Oratoria", icon: <Mic className="text-purple-400" /> },
  ],
};

const SkillGrid = ({ skills, category }: { skills: {name: string, icon: JSX.Element, description?: string}[], category: string }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-4">
    {skills.map((skill, index) => {
      const skillItem = (
        <div
          className="group flex flex-col items-center justify-center p-4 bg-secondary/30 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-secondary/80 cursor-pointer aspect-square animate-in fade-in zoom-in-95 duration-700"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
            {skill.icon}
          </div>
          <p className="text-sm text-center text-muted-foreground font-medium">{skill.name}</p>
        </div>
      );

      if ((category === 'frontend' || category === 'backend') && skill.description) {
        return (
          <HoverCard key={index} openDelay={200}>
            <HoverCardTrigger asChild>{skillItem}</HoverCardTrigger>
            <HoverCardContent className="w-64 bg-popover/90 backdrop-blur-sm border-border z-50">
              <p className="text-sm text-popover-foreground">{skill.description}</p>
            </HoverCardContent>
          </HoverCard>
        );
      }
      
      return <div key={index}>{skillItem}</div>;
    })}
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Habilidades e Intereses</h2>
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="interests">Intereses</TabsTrigger>
            </TabsList>
            {(Object.keys(skillsData) as Array<keyof typeof skillsData>).map((key) => (
              <TabsContent key={key} value={key}>
                <SkillGrid skills={skillsData[key]} category={key} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Skills;
