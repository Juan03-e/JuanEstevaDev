import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      "Resolved over 200 support tickets using HubSpot and Zendesk, maintaining a customer satisfaction rate above 90%"
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue={experienceData[0].company} className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              {experienceData.map((job) => (
                <TabsTrigger key={job.company} value={job.company}>
                  {job.company}
                </TabsTrigger>
              ))}
            </TabsList>
            {experienceData.map((job) => (
              <TabsContent key={job.company} value={job.company} className="mt-4">
                <Card className="border-border bg-background/50 backdrop-blur-sm">
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
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Experience;
