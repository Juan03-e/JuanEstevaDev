
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", text: t("nav_about") },
    { id: "experience", text: t("nav_experience") },
    { id: "skills", text: t("nav_skills") },
    { id: "education", text: t("nav_education") },
    { id: "contact", text: t("nav_contact") },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home">
          <Logo className="h-8 w-8" />
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:text-primary transition-colors text-muted-foreground font-medium nav-link-desktop">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="p-2 -mr-2">
                <Menu size={24} />
                <span className="sr-only">Open menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] p-0 flex flex-col">
              <div className="p-6 border-b border-border">
                <a href="#home" onClick={handleLinkClick}>
                  <Logo className="h-8 w-8" />
                </a>
              </div>
              <ul className="flex flex-col p-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={handleLinkClick}
                      className="block w-full p-3 text-lg hover:bg-accent rounded-md transition-colors"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-auto p-6 border-t border-border">
                <LanguageSwitcher />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
