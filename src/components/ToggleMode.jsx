import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ToggleMode = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className="px-4 py-2 bg-white text-black rounded">
      {theme === 'night' ? '☀️ Light' : '🌙 Night'}
    </button>
  );
};

export default ToggleMode;