
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CurrentDesignsProps {
  className?: string;
}

const CurrentDesigns: React.FC<CurrentDesignsProps> = ({ className }) => {
  return (
    <section id="current-designs" className={cn("py-20 bg-kw-gray-100 dark:bg-kw-gray-900", className)}>
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl mb-6 text-center">Current Designs</h2>
          <h3 className="font-alice text-xl md:text-2xl mb-12 text-center text-kw-gray-600 dark:text-kw-gray-300">Custom Table Creation</h3>
          
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <div className="bg-white dark:bg-kw-gray-800 p-8 rounded-lg shadow-sm">
              <div className="space-y-6">
                <div>
                  <h3 className="font-montserrat text-xl font-semibold mb-4">Complete Design Control</h3>
                  <p className="font-garamond">We make custom tables that allow full control over your design. You may customize your finish and materials as well as have full control over all dimensions of height and width. Our products stand out with no factory-made parts, meaning all work is done through purely artisan-handled efforts from sanding to joinery to every step of the process.</p>
                </div>
                
                <div>
                  <h3 className="font-montserrat text-xl font-semibold mb-4">Unmatched Customization</h3>
                  <p className="font-garamond">Your design will be something you can't match as perfectly to anything available in the market. You have ultimate control over the design process with access to Blender renders and 3D files that you can install right into your product renders, giving your projects a connection to luxury in not just product quality but also image.</p>
                </div>
                
                <div>
                  <h3 className="font-montserrat text-xl font-semibold mb-4">Transparency & Documentation</h3>
                  <p className="font-garamond">We are extremely dedicated to being reliable, transparent, and always on time. We make sure no process goes uninformed from you, and in fact, all of our products come with a log book documenting every step, allowing you and your client to have more detail about a single product's origins and history than a dozen products combined.</p>
                </div>
                
                <div>
                  <h3 className="font-montserrat text-xl font-semibold mb-4">Social Impact</h3>
                  <p className="font-garamond">Working with us doesn't just give you a great product but also contributes to a deeper meaning. We donate 25% of our income toward providing children in need with the resources for better education.</p>
                </div>
                
                <div>
                  <h3 className="font-montserrat text-xl font-semibold mb-4">Exclusivity</h3>
                  <p className="font-garamond">Currently, we only take in an exclusive number of products so we can maintain quality, which makes your products even more special.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="font-montserrat text-kw-gray-600 dark:text-kw-gray-300 text-sm uppercase tracking-wider mb-3">Krishna Woods Co. — A Foundation for Form</p>
              <p className="font-alice text-xl">Handcrafted excellence with purpose.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentDesigns;
