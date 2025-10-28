import { Moon, Sun, Languages, BookMarked } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeaderProps {
  onBookmarksClick: () => void;
}

const Header = ({ onBookmarksClick }: HeaderProps) => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl">🕉️</div>
          <div>
            <h1 className="text-xl font-bold font-serif bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Bhagwat Gita
            </h1>
            <p className="text-xs text-muted-foreground">Sacred Wisdom</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="hover:bg-primary/10"
            aria-label="Toggle language"
          >
            <Languages className="h-5 w-5" />
            <span className="sr-only">
              {language === 'english' ? 'Switch to Hindi' : 'Switch to English'}
            </span>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={onBookmarksClick}
            className="hover:bg-primary/10"
            aria-label="View bookmarks"
          >
            <BookMarked className="h-5 w-5" />
            <span className="sr-only">View bookmarks</span>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:bg-primary/10"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
            <span className="sr-only">
              {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
