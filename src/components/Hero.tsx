
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import { Button } from "@/components/ui/button";
import ThreeDScene from "./ThreeDScene";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center bg-grid-white/[0.03] relative overflow-hidden">
       <ThreeDScene />
       <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container mx-auto px-6 z-10">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">
          <Trans i18nKey="hero_title">
            Turning complex ideas into <span className="text-primary">elegant solutions.</span>
          </Trans>
        </h1>
        <p className="text-2xl md:text-3xl font-light text-muted-foreground mb-6">{t('hero_subtitle')}</p>
        <p className="max-w-3xl mx-auto text-lg text-secondary-foreground mb-8">
          {t('hero_description')}
        </p>
        <div className="flex justify-center items-center space-x-4 mb-8">
          <a href="https://www.linkedin.com/in/juan-pablo-esteva-809059269/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="https://github.com/Juan03-e" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={28} />
          </a>
          <a href="mailto:juanpabloesteva1@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={28} />
          </a>
        </div>
        <div>
          <a href="/lovable-uploads/228fedc7-82a9-47ca-8c16-8b5fc8a94d34.png" download="JuanPabloEsteva_CV.png">
             <Button>{t('hero_cv')}</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
