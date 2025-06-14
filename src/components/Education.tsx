
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
        <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Timeline */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
          <ul className="space-y-12">
            {educationData.map((edu, index) => (
              <li
                key={index}
                className="relative pl-12 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms`, opacity: 0 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 border-4 border-background"></div>
                
                <Card className="bg-background/50 border-border backdrop-blur-sm shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <GraduationCap className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle>{edu.degree}</CardTitle>
                        <CardDescription>{edu.institution}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pl-16">
                    <p className="text-muted-foreground">{edu.period}</p>
                    {edu.details && <p className="text-sm text-muted-foreground mt-1">{edu.details}</p>}
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
