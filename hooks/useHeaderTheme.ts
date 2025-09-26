'use client';

import { useEffect, useMemo } from 'react';
import { useHeaderTheme } from '../contexts/HeaderContext';

interface HeaderTheme {
  backgroundColor: string;
  textColor?: string;
  borderColor?: string;
  shadowColor?: string;
}

export const useSetHeaderTheme = (theme: HeaderTheme) => {
  const { setHeaderTheme } = useHeaderTheme();

  // Memoize the theme object to prevent unnecessary re-renders
  const memoizedTheme = useMemo(
    () => theme,
    [theme.backgroundColor, theme.textColor, theme.borderColor, theme.shadowColor]
  );

  // Memoize the default theme for cleanup
  const defaultTheme = useMemo(
    () => ({
      backgroundColor: 'bg-white',
      textColor: 'text-gray-700',
      borderColor: 'border-gray-200',
      shadowColor: 'shadow-gray-200',
    }),
    []
  );

  useEffect(() => {
    setHeaderTheme(memoizedTheme);

    // Cleanup: reset to default theme when component unmounts
    return () => {
      setHeaderTheme(defaultTheme);
    };
  }, [memoizedTheme, defaultTheme, setHeaderTheme]);
};
