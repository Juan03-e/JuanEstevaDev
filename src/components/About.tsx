
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const paragraphs = [
    t("about_p1"),
    t("about_p2"),
    t("about_p3"),
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">{t('about_title')}</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr,2fr] gap-8 md:gap-12 items-center">
          <div className="flex justify-center animate-in fade-in zoom-in-95 duration-500">
            <Avatar className="w-60 h-60 md:w-72 md:h-72 border-4 border-primary/20 shadow-lg">
              <AvatarImage src="/lovable-uploads/bba84d5e-3978-4756-a1b8-652dbe5a4495.png" alt="Juan Pablo Esteva" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </div>
          <div className="animate-in fade-in zoom-in-95 duration-500 delay-200">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
              Juan Pablo Esteva
            </h3>
            <div className="text-lg text-muted-foreground space-y-4 text-center md:text-left">
              {paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
