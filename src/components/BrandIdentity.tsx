
import React from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';

interface BrandIdentityProps {
  className?: string;
}

const BrandIdentity: React.FC<BrandIdentityProps> = ({ className }) => {
  return (
    <section id="brand-identity" className={cn("py-20 relative overflow-hidden", className)}>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/wood-texture.jpg')] opacity-10 bg-repeat"></div>
      
      {/* Diagonal gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-kw-gray-200/20"></div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <h2 className="font-playfair text-3xl md:text-5xl mb-16 text-center drop-shadow-md bg-clip-text text-transparent bg-gradient-to-b from-kw-black to-kw-gray-800">Brand Identity</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div className="space-y-6 group">
            <h3 className="font-montserrat text-xl uppercase tracking-wider font-bold text-kw-black border-b border-kw-gray-300 pb-2 group-hover:border-kw-black transition-colors">Logo</h3>
            <div className="p-10 border-2 border-kw-gray-200 bg-kw-gray-100/70 flex justify-center items-center rounded-md shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm">
              <Logo showTexture={false} />
            </div>
            <p className="font-garamond text-lg text-kw-gray-800">
              A minimalist typographic logo in black, with an optional woodgrain texture background when needed.
            </p>
          </div>
          
          <div className="space-y-6 group">
            <h3 className="font-montserrat text-xl uppercase tracking-wider font-bold text-kw-black border-b border-kw-gray-300 pb-2 group-hover:border-kw-black transition-colors">Tagline</h3>
            <div className="p-10 border-2 border-kw-gray-200 bg-kw-gray-100/70 flex justify-center items-center rounded-md shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm">
              <p className="font-alice text-2xl text-kw-black">"A foundation for form."</p>
            </div>
            <p className="font-garamond text-lg text-kw-gray-800">
              Evokes timeless elegance, structure, and creativity.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6 group">
            <h3 className="font-montserrat text-xl uppercase tracking-wider font-bold text-kw-black border-b border-kw-gray-300 pb-2 group-hover:border-kw-black transition-colors">Color Palette</h3>
            <div className="space-y-4">
              <div className="flex hover:scale-[1.02] transition-transform duration-300">
                <div className="w-24 h-24 bg-kw-black rounded-l-md"></div>
                <div className="flex-1 p-4 border-2 border-l-0 border-kw-gray-200 flex flex-col justify-center rounded-r-md bg-white/80 backdrop-blur-sm">
                  <p className="font-montserrat font-bold">Black</p>
                  <p className="font-garamond text-kw-gray-700">Sophistication, luxury</p>
                </div>
              </div>
              <div className="flex hover:scale-[1.02] transition-transform duration-300">
                <div className="w-24 h-24 bg-kw-white border-2 border-kw-gray-200 rounded-l-md"></div>
                <div className="flex-1 p-4 border-2 border-l-0 border-kw-gray-200 flex flex-col justify-center rounded-r-md bg-white/80 backdrop-blur-sm">
                  <p className="font-montserrat font-bold">White</p>
                  <p className="font-garamond text-kw-gray-700">Purity, clarity, and neutrality</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 group">
            <h3 className="font-montserrat text-xl uppercase tracking-wider font-bold text-kw-black border-b border-kw-gray-300 pb-2 group-hover:border-kw-black transition-colors">Typography</h3>
            <div className="space-y-4">
              <div className="p-4 border-2 border-kw-gray-200 rounded-md hover:shadow-md transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <p className="font-playfair text-2xl mb-1">PLAYFAIR DISPLAY SC</p>
                <p className="font-garamond text-kw-gray-700">Primary Headings</p>
              </div>
              <div className="p-4 border-2 border-kw-gray-200 rounded-md hover:shadow-md transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <p className="font-garamond text-2xl mb-1">Garamond</p>
                <p className="font-garamond text-kw-gray-700">Body Text</p>
              </div>
              <div className="p-4 border-2 border-kw-gray-200 rounded-md hover:shadow-md transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <p className="font-alice text-2xl mb-1">Alice</p>
                <p className="font-garamond text-kw-gray-700">Alternative Body Text</p>
              </div>
              <div className="p-4 border-2 border-kw-gray-200 rounded-md hover:shadow-md transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <p className="font-montserrat text-2xl mb-1">Montserrat</p>
                <p className="font-garamond text-kw-gray-700">Digital/UI Fonts</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6 group">
            <h3 className="font-montserrat text-xl uppercase tracking-wider font-bold text-kw-black border-b border-kw-gray-300 pb-2 group-hover:border-kw-black transition-colors">Brand Voice</h3>
            <div className="p-6 border-2 border-kw-gray-200 bg-kw-gray-100/70 rounded-md shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm">
              <p className="font-garamond text-lg italic text-kw-gray-800">
                "Formal, British, smooth, understated. A voice that doesn't shout—it whispers authority and taste."
              </p>
            </div>
          </div>
          
          <div className="space-y-6 group">
            <h3 className="font-montserrat text-xl uppercase tracking-wider font-bold text-kw-black border-b border-kw-gray-300 pb-2 group-hover:border-kw-black transition-colors">Tone</h3>
            <div className="space-y-3">
              <div className="p-4 border-2 border-kw-gray-200 flex items-center rounded-md hover:shadow-sm transition-all duration-300 hover:bg-kw-gray-100/50 backdrop-blur-sm">
                <span className="w-3 h-3 bg-kw-black rounded-full mr-3"></span>
                <p className="font-garamond text-lg text-kw-gray-800">Confident</p>
              </div>
              <div className="p-4 border-2 border-kw-gray-200 flex items-center rounded-md hover:shadow-sm transition-all duration-300 hover:bg-kw-gray-100/50 backdrop-blur-sm">
                <span className="w-3 h-3 bg-kw-black rounded-full mr-3"></span>
                <p className="font-garamond text-lg text-kw-gray-800">Refined</p>
              </div>
              <div className="p-4 border-2 border-kw-gray-200 flex items-center rounded-md hover:shadow-sm transition-all duration-300 hover:bg-kw-gray-100/50 backdrop-blur-sm">
                <span className="w-3 h-3 bg-kw-black rounded-full mr-3"></span>
                <p className="font-garamond text-lg text-kw-gray-800">Knowledgeable</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 group">
          <h3 className="font-montserrat text-xl uppercase tracking-wider mb-6 font-bold text-kw-black border-b border-kw-gray-300 pb-2 inline-block group-hover:border-kw-black transition-colors">Imagery & Style</h3>
          <div className="p-6 border-2 border-kw-gray-200 bg-kw-gray-100/70 rounded-md shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm">
            <p className="font-garamond text-lg mb-4 text-kw-gray-800">
              Use natural light photography with high contrast between wood texture and minimalist backgrounds.
            </p>
            <p className="font-garamond text-lg text-kw-gray-800">
              Visual style: Sharp shadows, raw texture close-ups, smooth finishes, process imagery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIdentity;
