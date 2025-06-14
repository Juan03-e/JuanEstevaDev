
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    role: "Full Stack Developer",
    company: "Freelancer",
    period: "May 2025 - Present",
    tasks: [
      "Development of RESTful APIs with C# and .NET 8.0.",
      "Implementation of authentication, authorization, and DTOs.",
      "Frontend development using JavaScript, HTML, and CSS.",
      "Collaboration with a designer to ensure consistency.",
      "Designing a MySQL database from scratch.",
    ],
  },
  {
    role: "Junior Developer",
    company: "Casas y +",
    period: "June 2025 - Present",
    tasks: [
      "Development of web features with PHP, JavaScript, and MySQL for a CRM.",
      "Maintenance and optimization of existing projects.",
      "Management of DevOps tasks in production.",
      "Process automation with scripting and Git.",
      "Collaboration with the sales team on technical solutions.",
    ],
  },
  {
    role: "Technical Support Specialist",
    company: "E-Planning",
    period: "Remote - Argentina | Mar 2024 - Mar 2025",
    tasks: [
      "Automated key internal workflows using JavaScript and C#, reducing manual effort by over 30%.",
      "Developed custom scripts to enhance operational efficiency and user interaction with the platform.",
      "Provided technical support to international clients, focusing on integration, issue diagnosis, and troubleshooting in programmatic advertising technologies.",
      "Resolved over 200 support tickets using HubSpot and Zendesk, maintaining a customer satisfaction rate above 90%."
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {experienceData.map((job) => (
              <AccordionItem
                value={job.company}
                key={job.company}
                className="bg-background/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                  <div className="flex items-center gap-4">
                    <Briefcase className="w-8 h-8 text-primary flex-shrink-0" />
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold">{job.role}</h3>
                      <p className="text-sm text-muted-foreground">
                        {job.company} &middot; {job.period}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 pt-2 pl-12">
                    {job.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Experience;
