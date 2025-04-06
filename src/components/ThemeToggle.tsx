
import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 bg-kw-white/10 dark:bg-kw-black/10 backdrop-blur-sm p-2 rounded-full shadow-lg border border-kw-gray-200 dark:border-kw-gray-800"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-kw-white" />
      ) : (
        <Moon className="h-5 w-5 text-kw-black" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
