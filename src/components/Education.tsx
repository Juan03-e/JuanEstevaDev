
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
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="bg-background/50 border-border backdrop-blur-sm">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
