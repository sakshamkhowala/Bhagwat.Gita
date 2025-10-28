import React, { createContext, useContext, useState, useEffect } from 'react';

interface Bookmark {
  chapterId: number;
  verseId: number;
  verseNumber: number;
}

interface BookmarkContextType {
  bookmarks: Bookmark[];
  toggleBookmark: (chapterId: number, verseId: number, verseNumber: number) => void;
  isBookmarked: (chapterId: number, verseId: number) => boolean;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const BookmarkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    const stored = localStorage.getItem('gita-bookmarks');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('gita-bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (chapterId: number, verseId: number, verseNumber: number) => {
    setBookmarks(prev => {
      const exists = prev.find(b => b.chapterId === chapterId && b.verseId === verseId);
      if (exists) {
        return prev.filter(b => !(b.chapterId === chapterId && b.verseId === verseId));
      } else {
        return [...prev, { chapterId, verseId, verseNumber }];
      }
    });
  };

  const isBookmarked = (chapterId: number, verseId: number) => {
    return bookmarks.some(b => b.chapterId === chapterId && b.verseId === verseId);
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within BookmarkProvider');
  }
  return context;
};
