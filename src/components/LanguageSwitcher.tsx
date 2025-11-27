import { Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 hover:bg-white/10">
          <Globe className="h-4 w-4" />
          <span className="uppercase font-medium">{language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem
          onClick={() => {
            console.log('Switching to English');
            setLanguage('en');
          }}
          className={`cursor-pointer ${language === 'en' ? 'bg-blue-50 font-medium' : ''}`}
        >
          <span className="mr-2 text-lg">🇬🇧</span>
          <span>English</span>
          {language === 'en' && <span className="ml-auto">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            console.log('Switching to French');
            setLanguage('fr');
          }}
          className={`cursor-pointer ${language === 'fr' ? 'bg-blue-50 font-medium' : ''}`}
        >
          <span className="mr-2 text-lg">🇫🇷</span>
          <span>Français</span>
          {language === 'fr' && <span className="ml-auto">✓</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
