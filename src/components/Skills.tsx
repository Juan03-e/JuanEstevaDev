
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiBootstrap, SiIonic, SiSharp, SiDotnet, SiMongodb } from "react-icons/si";
import { Bot, BarChart, GitMerge, Mic, Sparkles } from "lucide-react";

const skillsData = {
  frontend: [
    { name: "JavaScript", icon: <SiJavascript style={{ color: '#F7DF1E' }} /> },
    { name: "HTML", icon: <SiHtml5 style={{ color: '#E34F26' }} /> },
    { name: "CSS", icon: <SiCss3 style={{ color: '#1572B6' }} /> },
    { name: "React", icon: <SiReact style={{ color: '#61DAFB' }} /> },
    { name: "Bootstrap", icon: <SiBootstrap style={{ color: '#7952B3' }} /> },
    { name: "Ionic", icon: <SiIonic style={{ color: '#3880FF' }} /> },
  ],
  backend: [
    { name: "C#", icon: <SiSharp style={{ color: '#239120' }} /> },
    { name: ".NET8", icon: <SiDotnet style={{ color: '#512BD4' }} /> },
    { name: "Razor", icon: <span className="font-bold text-fuchsia-500">{"</>"}</span> },
    { name: "SQL", icon: <span className="font-extrabold text-[#CC2927]">SQL</span> },
    { name: "MongoDB", icon: <SiMongodb style={{ color: '#47A248' }} /> },
  ],
  interests: [
    { name: "Clean code", icon: <Sparkles className="text-yellow-400" /> },
    { name: "Automatización", icon: <Bot className="text-cyan-400" /> },
    { name: "Análisis de datos", icon: <BarChart className="text-green-400" /> },
    { name: "Fundamentos de DevOps", icon: <GitMerge className="text-orange-400" /> },
    { name: "Oratoria", icon: <Mic className="text-purple-400" /> },
    { name: "MMA", icon: <span className="font-extrabold">MMA</span> },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Habilidades e Intereses</h2>
        <div className="max-w-4xl mx-auto">
          <Accordion type="multiple" defaultValue={['frontend', 'backend']} className="w-full space-y-4">
            {Object.entries(skillsData).map(([key, skills]) => (
              <AccordionItem key={key} value={key} className="bg-card/50 border border-border rounded-lg px-4 backdrop-blur-sm">
                <AccordionTrigger className="text-2xl font-semibold capitalize hover:no-underline text-primary">
                  {key === 'interests' ? 'Intereses' : key}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-4">
                    {skills.map((skill, index) => (
                      <div
                        key={index}
                        className="group flex flex-col items-center justify-center p-4 bg-secondary/30 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-secondary/80 cursor-pointer aspect-square"
                      >
                        <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
                          {skill.icon}
                        </div>
                        <p className="text-sm text-center text-muted-foreground font-medium">{skill.name}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Skills;
