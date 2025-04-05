
import React from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("py-12 bg-kw-gray-900 text-white", className)}>
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Logo className="mb-4" />
            <p className="font-garamond text-kw-gray-400 mb-6">
              A foundation for form.
            </p>
            <p className="font-alice text-sm text-kw-gray-400">
              © {new Date().getFullYear()} Krishna Woods Co. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-montserrat text-sm uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-3 font-garamond">
              <li>email@krishnawoodsco.com</li>
              <li>+1 (555) 123-4567</li>
              <li>By appointment only</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat text-sm uppercase tracking-wider mb-6">Follow</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-kw-gray-400 transition-colors">Instagram</a>
              <a href="#" className="text-white hover:text-kw-gray-400 transition-colors">Pinterest</a>
              <a href="#" className="text-white hover:text-kw-gray-400 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
