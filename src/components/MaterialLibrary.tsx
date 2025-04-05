
import React from 'react';
import { cn } from '@/lib/utils';

interface MaterialLibraryProps {
  className?: string;
}

const MaterialLibrary: React.FC<MaterialLibraryProps> = ({ className }) => {
  return (
    <section id="material-library" className={cn("py-20 bg-white", className)}>
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="font-playfair text-3xl md:text-4xl mb-16 text-center">Krishna Woods Material Library</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[url('/premium-woods.jpg')] bg-cover bg-center opacity-20"></div>
              <h3 className="font-montserrat text-xl uppercase tracking-wider p-10 border border-kw-gray-200 bg-white bg-opacity-80 relative z-10 text-center">
                Premium Woods
              </h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-montserrat text-lg mb-2">Core Woods</h4>
                <p className="font-garamond text-lg">
                  Walnut, Oak, Ash, Mahogany, Beech, Maple
                </p>
              </div>
              
              <div>
                <h4 className="font-montserrat text-lg mb-2">Exotics & Art Pieces</h4>
                <p className="font-garamond text-lg">
                  Ebony, Bocote, Cocobolo, Olive Wood, Purpleheart, Rosewood, Koa, Snakewood, Spalted Beech, Macassar Ebony
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[url('/metals.jpg')] bg-cover bg-center opacity-20"></div>
              <h3 className="font-montserrat text-xl uppercase tracking-wider p-10 border border-kw-gray-200 bg-white bg-opacity-80 relative z-10 text-center">
                Metals
              </h3>
            </div>
            
            <div>
              <p className="font-garamond text-lg">
                Brushed Steel, Polished Brass, Black Iron, Chrome, Bronze
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[url('/stones.jpg')] bg-cover bg-center opacity-20"></div>
              <h3 className="font-montserrat text-xl uppercase tracking-wider p-10 border border-kw-gray-200 bg-white bg-opacity-80 relative z-10 text-center">
                Stones & Minerals
              </h3>
            </div>
            
            <div className="space-y-4">
              <p className="font-garamond text-lg">
                Marble (Carrara, Black Marquina), Onyx, Cement blends for bases, Resin (transparent, ocean blue, smoky)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialLibrary;
