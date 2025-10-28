import { X, BookMarked } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBookmarks } from '@/contexts/BookmarkContext';
import { useLanguage } from '@/contexts/LanguageContext';
import chaptersData from '@/data/chapters.json';

interface BookmarkPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (chapterId: number, verseId: number) => void;
}

const BookmarkPanel = ({ isOpen, onClose, onNavigate }: BookmarkPanelProps) => {
  const { bookmarks } = useBookmarks();
  const { language } = useLanguage();

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-40 fade-in"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-background border-l border-border z-50 shadow-xl animate-slide-in-right overflow-y-auto">
        <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookMarked className="h-5 w-5 text-primary" />
            <h2 className="font-serif font-semibold text-lg">
              {language === 'english' ? 'Bookmarks' : 'बुकमार्क'}
            </h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-4">
          {bookmarks.length === 0 ? (
            <div className="text-center py-12">
              <BookMarked className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground">
                {language === 'english' 
                  ? 'No bookmarks yet. Start marking your favorite verses!'
                  : 'अभी तक कोई बुकमार्क नहीं। अपने पसंदीदा श्लोकों को चिह्नित करना शुरू करें!'}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {bookmarks.map((bookmark) => {
                const chapter = chaptersData.find(c => c.id === bookmark.chapterId);
                if (!chapter) return null;

                return (
                  <div
                    key={`${bookmark.chapterId}-${bookmark.verseId}`}
                    className="chapter-card"
                    onClick={() => {
                      onNavigate(bookmark.chapterId, bookmark.verseId);
                      onClose();
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        onNavigate(bookmark.chapterId, bookmark.verseId);
                        onClose();
                      }
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-sm mb-1">
                          {language === 'english' ? chapter.nameEnglish : chapter.nameHindi}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {language === 'english' ? 'Chapter' : 'अध्याय'} {chapter.number}, {' '}
                          {language === 'english' ? 'Verse' : 'श्लोक'} {bookmark.verseNumber}
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                        {bookmark.verseNumber}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BookmarkPanel;
