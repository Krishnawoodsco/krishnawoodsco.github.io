
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

interface VisionProps {
  className?: string;
}

const Vision: React.FC<VisionProps> = ({ className }) => {
  return (
    <section id="vision" className={cn("py-20 bg-white dark:bg-kw-black", className)}>
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl mb-6 text-center">Vision Statement</h2>
          <h3 className="font-alice text-xl md:text-2xl mb-10 text-center text-kw-gray-600 dark:text-kw-gray-300">A Foundation for Form</h3>
          
          <div className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
            <p className="font-garamond text-lg leading-relaxed mb-6">
              At Krishna Woods Co., we envision a world where furniture is no longer a commodity—but a language of identity, craftsmanship, and soul. We are redefining the premium furniture industry by combining heritage techniques with radical customization, creating one-of-a-kind pieces that are as functional as they are meaningful. Every table we make is a quiet revolution: a conversation between material, maker, and owner.
            </p>
            
            <p className="font-garamond text-lg leading-relaxed mb-6">
              We reject the noise of mass production and trends. Instead, we build with presence, purpose, and permanence. Our mission is to ensure that every client—no matter their budget—can create something extraordinary, something tailored, something truly their own. From celebrity homes and luxury hotels to everyday living rooms around the world, our tables are made to resonate beyond aesthetics—to become statement pieces, memory-holders, and symbols of refined taste.
            </p>
            
            <p className="font-garamond text-lg leading-relaxed mb-6">
              Our brand is not loud, but unforgettable. We treat our flagship pieces not just as products, but as branding artifacts—expressions of elegance that shape perception and elevate everything we offer. As we grow, our commitment remains clear: patient scaling, bold design, and uncompromising personalization, supported by cutting-edge technology such as AR previews, digital consultations, and fully integrated ordering systems.
            </p>
            
            <Separator className="my-8 bg-kw-gray-300 dark:bg-kw-gray-700" />
            
            <p className="font-garamond text-lg leading-relaxed mb-6">
              In time, we will process thousands of bespoke orders monthly, all while preserving intimacy, artistry, and craftsmanship. With efficient delivery timelines and an asset-light model, we offer both speed and soul—7 to 10 days for standard tables, and fast-tracked options for custom masterpieces.
            </p>
            
            <p className="font-garamond text-lg leading-relaxed mb-6">
              We aim to become the foremost choice for architects, interior designers, boutique hotels, and discerning individuals—those who see furniture not just as décor, but as legacy. Our retail galleries will serve as sanctuaries of this ethos, designed not for volume, but for presence. Not for passing trends, but for timeless moments.
            </p>
            
            <p className="font-garamond text-lg leading-relaxed mb-6">
              Through it all, we remain rooted in purpose. For every table sold, ₹5,000 will fund CSR initiatives in education and community development—proving that luxury and impact can coexist beautifully.
            </p>
            
            <div className="italic text-center my-10 text-kw-gray-800 dark:text-kw-gray-200">
              <p className="font-alice text-xl mb-2">
                Krishna Woods is not just a furniture brand. It's a movement in design thinking.
              </p>
              <p className="font-alice text-xl mb-2">
                A community. A cultural presence. A belief that great things take time—and that in a fast world, stillness is the new luxury.
              </p>
            </div>
            
            <div className="text-center mt-12">
              <p className="font-playfair text-lg mb-2">
                We don't want to be everywhere.
              </p>
              <p className="font-alice text-xl">
                We want to be remembered—by how we make people feel, by what we leave behind, and by how we help them shape the spaces that shape their lives.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
