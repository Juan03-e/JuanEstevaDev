import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  const experienceData = [
    {
      role: t("experience_freelancer_role"),
      company: t("experience_freelancer_company"),
      period: t("experience_freelancer_period"),
      tasks: t("experience_freelancer_tasks", { returnObjects: true }) as string[],
    },
    {
      role: t("experience_casasymas_role"),
      company: t("experience_casasymas_company"),
      period: t("experience_casasymas_period"),
      tasks: t("experience_casasymas_tasks", { returnObjects: true }) as string[],
    },
    {
      role: t("experience_eplanning_role"),
      company: t("experience_eplanning_company"),
      period: t("experience_eplanning_period"),
      tasks: t("experience_eplanning_tasks", { returnObjects: true }) as string[],
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">{t("experience_title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experienceData.map((job, index) => (
            <Card 
              key={job.company} 
              className={`h-full border-border bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-primary/50 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
              style={isVisible ? { animationDelay: `${index * 200}ms` } : {}}
            >
              <CardHeader>
                <p className="text-sm font-semibold text-primary">{job.period}</p>
                <CardTitle>{job.role}</CardTitle>
                <CardDescription>{job.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {job.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
