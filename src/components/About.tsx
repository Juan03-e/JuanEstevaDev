
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";

const paragraphs = [
  "Desarrollador Full Stack de Montevideo, Uruguay, con sólida experiencia en la construcción y mantenimiento de aplicaciones web escalables. Actualmente tengo 22 años y estoy cursando la carrera de Ingeniería en Datos e Inteligencia Artificial en la UCU.",
  "Tengo capacidad demostrada para diseñar APIs RESTful, implementar sistemas de autenticación y desarrollar interfaces de frontend responsivas con código limpio. Con habilidades en prácticas de DevOps, incluyendo despliegue, configuración de servidores y automatización.",
  "Estoy enfocado en el rendimiento, la mantenibilidad y en ofrecer soluciones prácticas y colaborativas."
];

const About = () => {
  const [typedParagraphs, setTypedParagraphs] = useState<string[]>(Array(paragraphs.length).fill(''));
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible || isTypingComplete) return;

    if (currentParagraphIndex >= paragraphs.length) {
      setIsTypingComplete(true);
      return;
    }

    const targetText = paragraphs[currentParagraphIndex];
    const currentTypedText = typedParagraphs[currentParagraphIndex];

    if (currentTypedText.length < targetText.length) {
      const timeoutId = setTimeout(() => {
        setTypedParagraphs(prev => {
          const newTyped = [...prev];
          newTyped[currentParagraphIndex] = targetText.slice(0, currentTypedText.length + 1);
          return newTyped;
        });
      }, 20); // Typing speed
      return () => clearTimeout(timeoutId);
    } else {
      if (currentParagraphIndex < paragraphs.length - 1) {
        const timeoutId = setTimeout(() => {
          setCurrentParagraphIndex(prev => prev + 1);
        }, 500); // Pause between paragraphs
        return () => clearTimeout(timeoutId);
      } else {
        setIsTypingComplete(true);
      }
    }
  }, [isVisible, typedParagraphs, currentParagraphIndex, isTypingComplete]);

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Sobre Mí</h2>
        <Card ref={cardRef} className="max-w-4xl mx-auto bg-secondary/50 border-border backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Resumen Profesional</CardTitle>
          </CardHeader>
          <CardContent className="min-h-[250px]">
            <div className="font-mono text-lg text-foreground space-y-4">
              {paragraphs.map((_, index) => (
                <p key={index}>
                  {typedParagraphs[index]}
                  {index === currentParagraphIndex && !isTypingComplete && (
                    <span className="inline-block w-2.5 h-5 bg-primary animate-pulse ml-1 translate-y-1"></span>
                  )}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
