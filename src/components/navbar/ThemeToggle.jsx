import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                  (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);
  
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };
  
  return (
    <button 
      onClick={toggleTheme}
      className="btn btn-link p-2 rounded-circle focus-outline-none focus-ring-2 focus-ring-primary"
      aria-label="Toggle dark mode"
    >
      <motion.div
        animate={{ rotate: darkMode ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {darkMode ? (
          <FaSun className="text-warning fs-5" />
        ) : (
          <FaMoon className="text-dark fs-5" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;