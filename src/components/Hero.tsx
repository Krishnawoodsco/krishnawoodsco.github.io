
import React from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={cn("relative h-[90vh] flex items-center", className)}>
      <div className="absolute inset-0 bg-[url('/hero-wood.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-kw-black/60"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10 text-kw-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl mb-4 max-w-3xl tracking-wider uppercase">
              A foundation for form.
            </h1>
            <Separator className="w-24 h-[2px] bg-kw-white my-6" />
            <p className="font-garamond text-xl md:text-2xl max-w-xl leading-relaxed">
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
          
          <div className="md:w-1/3 grid grid-cols-2 gap-4 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <div className="rounded overflow-hidden">
              <img src="/premium-woods.jpg" alt="Premium Wood" className="w-full h-full object-cover transition duration-500 hover:scale-110" />
            </div>
            <div className="rounded overflow-hidden mt-8">
              <img src="/metals.jpg" alt="Metal Accents" className="w-full h-full object-cover transition duration-500 hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
