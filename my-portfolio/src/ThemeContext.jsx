import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [bgColor, setBgColor] = useState(() => localStorage.getItem('bgColor') || 'default');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('bgColor', bgColor);
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-bg', bgColor);
  }, [theme, bgColor]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const changeBackground = color => {
    setBgColor(color);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, bgColor, changeBackground }}>
      {children}
    </ThemeContext.Provider>
  );
}