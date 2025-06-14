
import { Badge } from "@/components/ui/badge";

const skillsData = {
  frontend: ["JavaScript", "HTML", "CSS", "React", "Bootstrap", "Ionic"],
  backend: ["C#", ".NET8", "Razor", "SQL", "MongoDB"],
  interests: ["Clean code", "Automatización", "Análisis de datos", "Fundamentos de DevOps", "Oratoria", "MMA"],
};

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-semibold mb-4 text-primary">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <Badge key={index} variant="secondary" className="text-md px-4 py-2 cursor-default">{skill}</Badge>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Habilidades e Intereses</h2>
        <div className="max-w-4xl mx-auto">
          <SkillCategory title="Frontend" skills={skillsData.frontend} />
          <SkillCategory title="Backend" skills={skillsData.backend} />
          <SkillCategory title="Intereses" skills={skillsData.interests} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
