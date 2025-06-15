
import { Github, Linkedin } from "lucide-react";
import { ContactForm } from "./ContactForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">{t("contact_title")}</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t("contact_description")}
        </p>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="text-lg">{t("contact_button")}</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>{t("contact_dialog_title")}</DialogTitle>
              <DialogDescription>
                {t("contact_dialog_description")}
              </DialogDescription>
            </DialogHeader>
            <ContactForm onSuccess={() => setIsDialogOpen(false)} />
          </DialogContent>
        </Dialog>
        <div className="flex justify-center items-center space-x-6 mt-12">
          <a href="https://github.com/Juan03-e" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={32} />
          </a>
          <a href="https://www.linkedin.com/in/juan-pablo-esteva-809059269/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
