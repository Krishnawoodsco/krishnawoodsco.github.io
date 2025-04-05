
import React from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section id="about" className={cn("py-20 relative overflow-hidden", className)}>
      {/* Background texture and pattern */}
      <div className="absolute inset-0 bg-[url('/wood-texture.jpg')] opacity-[0.04] bg-repeat"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-kw-black/[0.03] via-transparent to-kw-black/[0.02]"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-5xl mb-10 text-center drop-shadow-sm bg-clip-text text-transparent bg-gradient-to-b from-kw-black to-kw-gray-800">
            About Us
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="font-garamond text-xl leading-relaxed text-kw-black mb-8">
              <span className="font-playfair font-semibold">Krishna Woods Co.</span> is more than a woodworking brand — it is a vision carved in grain, tempered in fire, and guided by a relentless pursuit of beauty with purpose.
            </p>
            
            <p className="font-garamond text-lg leading-relaxed text-kw-gray-800 mb-8">
              Born in the heart of a young entrepreneur's mission to bring refinement into the world through craft, Krishna Woods Co. was never meant to be just a furniture company. It was conceived as a platform for timeless expression, a canvas for stories, and a stage for the materials of the Earth to shine in their raw, elegant truth.
            </p>
            
            <p className="font-garamond text-lg leading-relaxed text-kw-gray-800 mb-8">
              Every table begins as a conversation — not just with the client, but with the wood itself. Whether it's the warmth of walnut, the nobility of ebony, or the bold patterns of spalted maple, Krishna Woods Co. honors the spirit of the material. We do not force the wood into submission; we guide it, preserve its character, and build around its natural beauty.
            </p>
            
            <p className="font-alice text-xl italic text-kw-black mb-10">
              At its core, Krishna Woods Co. is built on three uncompromising pillars:
            </p>
            
            <div className="space-y-12 my-12">
              <div className="group">
                <Separator className="mb-6 bg-kw-gray-300 group-hover:bg-kw-black transition-colors duration-300" />
                <h3 className="font-montserrat text-xl font-semibold text-kw-black mb-3">1. Form That Follows Emotion</h3>
                <p className="font-garamond text-lg leading-relaxed text-kw-gray-800">
                  Design is not just about proportion — it's about presence. Our tables are not functional artifacts; they are sculptures that invite interaction. Whether it's a grand eucalyptus slab destined for a boardroom or a subtly contoured coffee table in a hotel lounge, each piece is designed to evoke. To anchor a room. To make people pause.
                </p>
              </div>
              
              <div className="group">
                <Separator className="mb-6 bg-kw-gray-300 group-hover:bg-kw-black transition-colors duration-300" />
                <h3 className="font-montserrat text-xl font-semibold text-kw-black mb-3">2. Craft Without Compromise</h3>
                <p className="font-garamond text-lg leading-relaxed text-kw-gray-800">
                  Each creation is handcrafted with intentionality, using premium woods, carefully chosen metals, and finishes that respect the grain's story. No shortcuts. No unnecessary repetition. We prefer refinement over replication. From hand-polished edges to meticulous material sourcing, we ensure that the final product embodies heritage-level quality.
                </p>
              </div>
              
              <div className="group">
                <Separator className="mb-6 bg-kw-gray-300 group-hover:bg-kw-black transition-colors duration-300" />
                <h3 className="font-montserrat text-xl font-semibold text-kw-black mb-3">3. Presence Beyond the Physical</h3>
                <p className="font-garamond text-lg leading-relaxed text-kw-gray-800">
                  Our pieces are placed with purpose — not just sold. By partnering with luxury hotels, curated spaces, and architectural studios, we position our creations where they can live, breathe, and inspire. We don't just furnish interiors — we brand them. Through integrated QR code tags, storytelling elements, and digital showcases, every piece becomes part of a growing gallery of identity.
                </p>
              </div>
            </div>
            
            <Separator className="my-10 bg-kw-gray-300" />
            
            <div className="space-y-6">
              <p className="font-garamond text-lg leading-relaxed text-kw-gray-800">
                Krishna Woods Co. is not in a rush. We believe in the slow luxury movement — making fewer pieces, but making them extraordinary. We are here to create not just tables, but timeless testimonies of craftsmanship — pieces that will survive trends, pass through generations, and quietly whisper elegance in every room they occupy.
              </p>
              
              <p className="font-garamond text-lg leading-relaxed text-kw-gray-800">
                This is a company that began with one table. But like all good stories, the first chapter was only a signal — of the forest that's yet to grow.
              </p>
            </div>
            
            <div className="mt-16 text-center">
              <p className="font-playfair text-2xl md:text-3xl text-kw-black">Krishna Woods Co.</p>
              <p className="font-alice text-lg md:text-xl text-kw-gray-800 mt-2">A Foundation for Form.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
