import { useLanguage } from '@/contexts/LanguageContext';
import chaptersData from '@/data/chapters.json';

interface ChapterListProps {
  onChapterSelect: (chapterId: number) => void;
}

const ChapterList = ({ onChapterSelect }: ChapterListProps) => {
  const { language } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {language === 'english' ? 'Chapters of the Gita' : 'गीता के अध्याय'}
          </h2>
          <div className="sacred-divider my-6"></div>
          <p className="text-muted-foreground text-lg">
            {language === 'english' 
              ? 'Explore the 18 chapters of timeless wisdom'
              : 'शाश्वत ज्ञान के 18 अध्यायों का अन्वेषण करें'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chaptersData.map((chapter) => (
            <div
              key={chapter.id}
              className="chapter-card group"
              onClick={() => onChapterSelect(chapter.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onChapterSelect(chapter.id);
                }
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                  {chapter.number}
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                    {language === 'english' ? chapter.nameEnglish : chapter.nameHindi}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {language === 'english' ? chapter.translationEnglish : chapter.translationHindi}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {chapter.verseCount} {language === 'english' ? 'verses' : 'श्लोक'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterList;
