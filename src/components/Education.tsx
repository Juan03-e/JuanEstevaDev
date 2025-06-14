
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Data Engineering and Artificial Intelligence",
    institution: "Catholic University of Uruguay",
    period: "August 2025 - Present",
  },
  {
    degree: "Analyst in Information Technologies",
    institution: "ORT University Uruguay",
    period: "March 2023 - July 2025",
    details: "Average grade of 93%",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="w-full space-y-4"
          >
            {educationData.map((edu, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="bg-background/50 border-border backdrop-blur-sm shadow-sm rounded-lg hover:shadow-primary/10 transition-shadow duration-300 overflow-hidden"
              >
                <AccordionTrigger className="p-6 text-left hover:no-underline">
                  <div className="flex items-start space-x-4">
                    <GraduationCap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pr-6 pl-12">
                  <div className="pl-6 border-l-2 border-primary/20">
                    <p className="text-muted-foreground">{edu.period}</p>
                    {edu.details && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {edu.details}
                      </p>
                    )}
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

export default Education;
