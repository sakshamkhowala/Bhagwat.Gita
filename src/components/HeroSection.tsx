import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/gita-hero.jpg';

const HeroSection = () => {
  const { language } = useLanguage();

  return (
    <section className="relative overflow-hidden mb-12">
      <div className="absolute inset-0 om-pattern opacity-30"></div>
      <div 
        className="h-[400px] md:h-[500px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl fade-in">
            <div className="text-6xl md:text-7xl mb-6 animate-pulse">🕉️</div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {language === 'english' ? 'Bhagwat Gita' : 'श्रीमद्भगवद्गीता'}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-2">
              {language === 'english' 
                ? 'The Song of the Divine'
                : 'भगवान का पवित्र गीत'}
            </p>
            <div className="sacred-divider my-6 max-w-md mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'english'
                ? 'Explore timeless wisdom through 18 chapters and 700 verses of spiritual knowledge'
                : '18 अध्यायों और 700 श्लोकों के माध्यम से शाश्वत ज्ञान का अन्वेषण करें'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
