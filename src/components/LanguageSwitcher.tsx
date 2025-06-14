
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'es') => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-1">
      <Button
        variant={i18n.language.startsWith('en') ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => changeLanguage('en')}
        className="px-3"
      >
        EN
      </Button>
      <Button
        variant={i18n.language.startsWith('es') ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => changeLanguage('es')}
        className="px-3"
      >
        ES
      </Button>
    </div>
  );
}
