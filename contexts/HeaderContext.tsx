'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface HeaderTheme {
  backgroundColor: string;
  textColor?: string;
  borderColor?: string;
  shadowColor?: string;
}

interface HeaderContextType {
  headerTheme: HeaderTheme;
  setHeaderTheme: (theme: HeaderTheme) => void;
}

const defaultTheme: HeaderTheme = {
  backgroundColor: 'bg-white',
  textColor: 'text-gray-700',
  borderColor: 'border-gray-200',
  shadowColor: 'shadow-gray-200',
};

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [headerTheme, setHeaderThemeState] = useState<HeaderTheme>(defaultTheme);

  // Memoize setHeaderTheme to prevent unnecessary re-renders
  const setHeaderTheme = useCallback((theme: HeaderTheme) => {
    setHeaderThemeState(theme);
  }, []);

  return <HeaderContext.Provider value={{ headerTheme, setHeaderTheme }}>{children}</HeaderContext.Provider>;
};

export const useHeaderTheme = () => {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error('useHeaderTheme must be used within a HeaderProvider');
  }
  return context;
};
