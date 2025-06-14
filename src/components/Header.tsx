
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", text: "About" },
    { id: "experience", text: "Experience" },
    { id: "skills", text: "Skills" },
    { id: "education", text: "Education" },
    { id: "contact", text: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home">
          <Logo className="h-8 w-8" />
        </a>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="hover:text-primary transition-colors text-muted-foreground font-medium nav-link-desktop">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? <X size={24} /> : <Menu size={24} />}
        </div>
        <div
          className={
            `fixed top-0 h-full bg-background ease-in-out duration-500 md:hidden ${nav ? 'left-0 w-[60%]' : 'left-[-100%]'}`
          }
        >
          <a href="#home" className="m-4 block">
            <Logo className="h-8 w-8" />
          </a>
          <ul className="p-4">
            {navItems.map((item) => (
              <li key={item.id} className="p-4 border-b border-gray-700">
                <a href={`#${item.id}`} onClick={() => setNav(false)}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
