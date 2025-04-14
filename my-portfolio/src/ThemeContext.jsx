import React, { createContext, useState, useEffect, useCallback } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Valid themes and backgrounds
  const validThemes = ['light', 'dark'];
  const validBackgrounds = ['default', 'blue', 'purple', 'green', 'orange'];

  // Initialize state with localStorage or system preference
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && validThemes.includes(savedTheme)) {
      return savedTheme;
    }
    // Detect system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [bgColor, setBgColor] = useState(() => {
    const savedBg = localStorage.getItem('bgColor');
    return savedBg && validBackgrounds.includes(savedBg) ? savedBg : 'default';
  });

  // Toggle theme
  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      // Trigger transition
      document.documentElement.classList.add('theme-transition');
      setTimeout(() => document.documentElement.classList.remove('theme-transition'), 500);
      return newTheme;
    });
  }, []);

  // Change background
  const changeBackground = useCallback((color) => {
    if (validBackgrounds.includes(color)) {
      setBgColor(color);
      // Trigger transition
      document.documentElement.classList.add('bg-transition');
      setTimeout(() => document.documentElement.classList.remove('bg-transition'), 500);
    } else {
      console.warn(`Invalid background color: ${color}`);
    }
  }, []);

  // Apply theme and background
  useEffect(() => {
    // Validate and apply theme
    if (!validThemes.includes(theme)) {
      setTheme('light');
      return;
    }
    // Validate and apply background
    if (!validBackgrounds.includes(bgColor)) {
      setBgColor('default');
      return;
    }

    // Update attributes
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-bg', bgColor);

    // Save to localStorage
    try {
      localStorage.setItem('theme', theme);
      localStorage.setItem('bgColor', bgColor);
    } catch (error) {
      console.error('Failed to save theme to localStorage:', error);
    }

    // Update body gradients (matches theme.css)
    const gradients = {
      default: 'linear-gradient(135deg, #fafafa, #eceff1)',
      blue: 'linear-gradient(135deg, #fafafa, #90caf9)',
      purple: 'linear-gradient(135deg, #fafafa, #e1bee7)',
      green: 'linear-gradient(135deg, #fafafa, #a5d6a7)',
      orange: 'linear-gradient(135deg, #fafafa, #ffccbc)',
      dark_default: 'linear-gradient(135deg, #121212, #1e1e1e)',
      dark_blue: 'linear-gradient(135deg, #121212, #0d47a1)',
      dark_purple: 'linear-gradient(135deg, #121212, #4a148c)',
      dark_green: 'linear-gradient(135deg, #121212, #1b5e20)',
      dark_orange: 'linear-gradient(135deg, #121212, #bf360c)',
    };

    const key = theme === 'dark' ? `dark_${bgColor}` : bgColor;
    document.body.style.background = gradients[key] || gradients.default;

    // Cleanup
    return () => {
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.removeAttribute('data-bg');
    };
  }, [theme, bgColor]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      const systemTheme = e.matches ? 'dark' : 'light';
      if (!localStorage.getItem('theme')) {
        setTheme(systemTheme);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, bgColor, changeBackground }}>
      {children}
    </ThemeContext.Provider>
  );
}