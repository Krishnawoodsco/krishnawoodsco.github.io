
import React from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';

interface BrandIdentityProps {
  className?: string;
}

const BrandIdentity: React.FC<BrandIdentityProps> = ({ className }) => {
  return (
    <section id="brand-identity" className={cn("py-20 bg-kw-white", className)}>
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="font-playfair text-3xl md:text-4xl mb-16 text-center">Brand Identity</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div className="space-y-6">
            <h3 className="font-montserrat text-xl uppercase tracking-wider">Logo</h3>
            <div className="p-10 border border-kw-gray-200 bg-kw-gray-100 flex justify-center items-center">
              <Logo showTexture={false} />
            </div>
            <p className="font-garamond text-lg">
              A minimalist typographic logo in black, with an optional woodgrain texture background when needed.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-montserrat text-xl uppercase tracking-wider">Tagline</h3>
            <div className="p-10 border border-kw-gray-200 bg-kw-gray-100 flex justify-center items-center">
              <p className="font-alice text-2xl">"A foundation for form."</p>
            </div>
            <p className="font-garamond text-lg">
              Evokes timeless elegance, structure, and creativity.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="font-montserrat text-xl uppercase tracking-wider">Color Palette</h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="w-24 h-24 bg-kw-black"></div>
                <div className="flex-1 p-4 border border-kw-gray-200 flex flex-col justify-center">
                  <p className="font-montserrat">Black</p>
                  <p className="font-garamond text-kw-gray-600">Sophistication, luxury</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-24 h-24 bg-kw-white border border-kw-gray-200"></div>
                <div className="flex-1 p-4 border border-kw-gray-200 flex flex-col justify-center">
                  <p className="font-montserrat">White</p>
                  <p className="font-garamond text-kw-gray-600">Purity, clarity, and neutrality</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-montserrat text-xl uppercase tracking-wider">Typography</h3>
            <div className="space-y-4">
              <div className="p-4 border border-kw-gray-200">
                <p className="font-playfair text-2xl mb-1">PLAYFAIR DISPLAY SC</p>
                <p className="font-garamond text-kw-gray-600">Primary Headings</p>
              </div>
              <div className="p-4 border border-kw-gray-200">
                <p className="font-garamond text-2xl mb-1">Garamond</p>
                <p className="font-garamond text-kw-gray-600">Body Text</p>
              </div>
              <div className="p-4 border border-kw-gray-200">
                <p className="font-alice text-2xl mb-1">Alice</p>
                <p className="font-garamond text-kw-gray-600">Alternative Body Text</p>
              </div>
              <div className="p-4 border border-kw-gray-200">
                <p className="font-montserrat text-2xl mb-1">Montserrat</p>
                <p className="font-garamond text-kw-gray-600">Digital/UI Fonts</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="font-montserrat text-xl uppercase tracking-wider">Brand Voice</h3>
            <div className="p-6 border border-kw-gray-200 bg-kw-gray-100">
              <p className="font-garamond text-lg italic">
                "Formal, British, smooth, understated. A voice that doesn't shout—it whispers authority and taste."
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-montserrat text-xl uppercase tracking-wider">Tone</h3>
            <div className="space-y-2">
              <div className="p-4 border border-kw-gray-200 flex items-center">
                <span className="w-2 h-2 bg-kw-black rounded-full mr-3"></span>
                <p className="font-garamond text-lg">Confident</p>
              </div>
              <div className="p-4 border border-kw-gray-200 flex items-center">
                <span className="w-2 h-2 bg-kw-black rounded-full mr-3"></span>
                <p className="font-garamond text-lg">Refined</p>
              </div>
              <div className="p-4 border border-kw-gray-200 flex items-center">
                <span className="w-2 h-2 bg-kw-black rounded-full mr-3"></span>
                <p className="font-garamond text-lg">Knowledgeable</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="font-montserrat text-xl uppercase tracking-wider mb-6">Imagery & Style</h3>
          <div className="p-6 border border-kw-gray-200 bg-kw-gray-100">
            <p className="font-garamond text-lg mb-4">
              Use natural light photography with high contrast between wood texture and minimalist backgrounds.
            </p>
            <p className="font-garamond text-lg">
              Visual style: Sharp shadows, raw texture close-ups, smooth finishes, process imagery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIdentity;
