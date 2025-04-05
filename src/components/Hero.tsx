
import React from 'react';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={cn("relative h-[80vh] flex items-center", className)}>
      <div className="absolute inset-0 bg-[url('/hero-wood.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-kw-black/40"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10 text-kw-white">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl mb-4 max-w-3xl">
          A foundation for form.
        </h1>
        <p className="font-alice text-xl md:text-2xl max-w-xl">
          Timeless elegance in custom woodcraft. Each piece a testament to structure and creativity.
        </p>
        <div className="mt-10">
          <a 
            href="#contact" 
            className="inline-block border border-kw-white px-8 py-4 font-montserrat text-sm tracking-widest hover:bg-kw-white hover:text-kw-black transition duration-300"
          >
            BOOK CONSULTATION
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
