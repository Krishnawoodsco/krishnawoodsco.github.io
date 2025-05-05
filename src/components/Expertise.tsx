
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ExpertiseProps {
  className?: string;
}

const Expertise: React.FC<ExpertiseProps> = ({ className }) => {
  return (
    <section id="expertise" className={cn("py-20 bg-white dark:bg-kw-black", className)}>
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl mb-6 text-center">Our Expertise</h2>
          <h3 className="font-alice text-xl md:text-2xl mb-12 text-center text-kw-gray-600 dark:text-kw-gray-300">Craftsmanship & Techniques</h3>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="wood" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="wood" className="font-montserrat">Wood & Stone</TabsTrigger>
                <TabsTrigger value="metal" className="font-montserrat">Metal Work</TabsTrigger>
                <TabsTrigger value="finishing" className="font-montserrat">Finishing</TabsTrigger>
              </TabsList>
              
              <TabsContent value="wood" className="space-y-4">
                <div className="bg-kw-gray-100 dark:bg-kw-gray-800 p-6 rounded-lg">
                  <ul className="space-y-4 font-garamond text-lg">
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Precision Wood Cutting</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Wood Carving & Sculpting</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Wood Planing & Sanding</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Joinery (Mortise-Tenon, Dovetail, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Full Slab Finishing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Stone Carving & Sculpting</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Wood & Stone Inlay Work</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Veneering</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Wood Bending (Steam or Kerf techniques)</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="metal" className="space-y-4">
                <div className="bg-kw-gray-100 dark:bg-kw-gray-800 p-6 rounded-lg">
                  <ul className="space-y-4 font-garamond text-lg">
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Metal Cutting (Plasma, Bandsaw, Laser)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Welding (MIG/TIG)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Metal Finishing (Brushed, Mirror, Matte)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Steel Framing & Structural Design</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Metal Inlay in Wood</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Electroplating & Powder Coating Basics</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Wood-to-Wood Gluing (Clamps, Dowels, Biscuits)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Stone & Wood Adhesive Use</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Resin Work (Epoxy, Clear, Colored)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Joint Reinforcement Techniques (Screws, Bolts, Dowels)</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="finishing" className="space-y-4">
                <div className="bg-kw-gray-100 dark:bg-kw-gray-800 p-6 rounded-lg">
                  <ul className="space-y-4 font-garamond text-lg">
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Varnishing / Lacquering / French Polish</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Oil & Wax Finishes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Spray Finishing (Automotive-level gloss)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Surface Texturing Techniques</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-2 w-2 mt-2.5 rounded-full bg-kw-black dark:bg-white mr-3"></div>
                      <span>Burnishing & Metal Polishing</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
