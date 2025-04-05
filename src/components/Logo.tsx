
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showTexture?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, showTexture = false }) => {
  return (
    <div className={cn("relative", className)}>
      {showTexture && (
        <div className="absolute inset-0 bg-[url('/wood-texture.jpg')] bg-cover opacity-10 mix-blend-multiply"></div>
      )}
      <h1 className="font-playfair text-3xl md:text-4xl tracking-wider">
        KrishnaWoodsCo.
      </h1>
    </div>
  );
};

export default Logo;
