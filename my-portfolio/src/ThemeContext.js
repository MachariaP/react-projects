import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [bgColor, setBgColor] = useState('default');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedBgColor = localStorage.getItem('bgColor');
    if (savedTheme) setTheme(savedTheme);
    if (savedBgColor) setBgColor(savedBgColor);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('bgColor', bgColor);
    document.documentElement.setAttribute('data-bg', bgColor);
  }, [bgColor]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const changeBackground = (color) => {
    setBgColor(color);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, bgColor, changeBackground }}>
      {children}
    </ThemeContext.Provider>
  );
}