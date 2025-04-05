
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { cn } from '@/lib/utils';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={cn("w-full py-6 px-6 md:px-10 bg-white", className)}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        
        <div className="hidden md:flex space-x-8 font-montserrat text-sm tracking-wide">
          <a href="#brand-identity" className="hover:text-kw-gray-600 transition-colors">BRAND</a>
          <a href="#design-flow" className="hover:text-kw-gray-600 transition-colors">PROCESS</a>
          <a href="#material-library" className="hover:text-kw-gray-600 transition-colors">MATERIALS</a>
          <a href="#contact" className="hover:text-kw-gray-600 transition-colors">CONTACT</a>
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
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 pt-24 px-6">
          <div className="flex flex-col space-y-8 items-center font-montserrat text-lg">
            <a href="#brand-identity" onClick={toggleMenu} className="hover:text-kw-gray-600 transition-colors">BRAND</a>
            <a href="#design-flow" onClick={toggleMenu} className="hover:text-kw-gray-600 transition-colors">PROCESS</a>
            <a href="#material-library" onClick={toggleMenu} className="hover:text-kw-gray-600 transition-colors">MATERIALS</a>
            <a href="#contact" onClick={toggleMenu} className="hover:text-kw-gray-600 transition-colors">CONTACT</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
