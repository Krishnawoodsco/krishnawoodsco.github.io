
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled down
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Detect active section
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
          console.log("Active section:", sectionId); // Debug log
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check immediately on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu toggled:", !isMenuOpen); // Debug log
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    console.log("Scrolling to section:", sectionId, section); // Debug log
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "hero", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "vision", label: "VISION" },
    { id: "design-flow", label: "PROCESS" },
    { id: "production-plan", label: "PRODUCTION" },
    { id: "goals", label: "GOALS" },
    { id: "material-library", label: "MATERIALS" },
    { id: "expertise", label: "EXPERTISE" },
    { id: "current-designs", label: "DESIGNS" },
    { id: "csr", label: "CSR" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-10 transition-all duration-300",
      scrolled ? "bg-white/95 dark:bg-kw-black/95 backdrop-blur-sm shadow-md" : "bg-transparent",
      className
    )}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        
        <div className="hidden md:flex space-x-3 lg:space-x-6 font-montserrat text-xs lg:text-sm tracking-wide">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={cn(
                "hover:text-kw-gray-600 dark:hover:text-kw-gray-300 transition-colors py-1",
                activeSection === link.id ? "border-b-2 border-kw-black dark:border-white font-semibold" : ""
              )}
            >
              {link.label}
            </button>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 bg-white/95 dark:bg-kw-black/95 z-50 pt-24 px-6 backdrop-blur-sm"
          >
            <div className="flex flex-col space-y-6 items-center font-montserrat text-lg">
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={cn(
                    "hover:text-kw-gray-600 dark:hover:text-kw-gray-300 transition-colors",
                    activeSection === link.id ? "border-b-2 border-kw-black dark:border-white font-semibold" : ""
                  )}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
