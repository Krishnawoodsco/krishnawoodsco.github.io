
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from '@/components/ui/accordion';

interface ProductionPlanProps {
  className?: string;
}

const ProductionPlan: React.FC<ProductionPlanProps> = ({ className }) => {
  return (
    <section id="production-plan" className={cn("py-20 bg-kw-gray-100 dark:bg-kw-gray-900", className)}>
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl mb-16 text-center">Production Plan</h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-montserrat">1. Infrastructure & Facilities</AccordionTrigger>
                <AccordionContent className="font-garamond text-lg">
                  <p className="mb-4">Set up a professional workshop with dedicated zones for:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Woodworking (sanding, carving, bending, slab processing)</li>
                    <li>Stone working (cutting, inlay, sculpting)</li>
                    <li>Metalworking (cutting, welding, plating)</li>
                    <li>Finishing (spray booth, polish stations, curing area)</li>
                    <li>Precision tooling: CNC, joinery jigs, steam box for bending, high-end planers, etc.</li>
                    <li>Ventilation & safety protocols for resin work, plating, and metal dust</li>
                    <li>AR/VR design studio for customer-facing experiences</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-montserrat">2. Skilled Talent Development</AccordionTrigger>
                <AccordionContent className="font-garamond text-lg">
                  <p className="mb-4">Hire or train master craftsmen across:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Traditional joinery & slab finishing</li>
                    <li>Stone carving and wood-stone inlay</li>
                    <li>Welding (MIG/TIG) and metal polishing</li>
                    <li>Veneering and wood bending</li>
                  </ul>
                  <p className="mb-4">Bring in specialists for:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Spray finishing (automotive-level)</li>
                    <li>Electroplating & powder coating</li>
                    <li>Resin casting for clear/colored work</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-montserrat">3. Product Design & R&D</AccordionTrigger>
                <AccordionContent className="font-garamond text-lg">
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Develop standard operating procedures (SOPs) for each material-handling technique</li>
                    <li>Create a materials & finishes library for client exploration</li>
                    <li>Conduct resin and adhesion testing for wood-stone-metal hybrid pieces</li>
                    <li>Create proprietary techniques (e.g., signature burnishing, inlay methods)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl font-montserrat">4. Workflow Systems</AccordionTrigger>
                <AccordionContent className="font-garamond text-lg">
                  <p className="mb-4">Build an internal project management system for:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Quoting & design revisions</li>
                    <li>Production scheduling & tracking</li>
                    <li>Quality control & client approvals</li>
                    <li>Implement CAD-to-production pipeline for accuracy in joinery and cuts</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-xl font-montserrat">5. Branding & Client Experience</AccordionTrigger>
                <AccordionContent className="font-garamond text-lg">
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Build a high-touch design consultation process (including AR previews)</li>
                    <li>Document every project with marketing-quality visuals and BTS reels</li>
                    <li>Provide a "table passport" (cert. of authenticity, origin story, care guide, QR code)</li>
                    <li>Train team in client communications & upselling through craftsmanship</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-xl font-montserrat">6. Strategic Partnerships</AccordionTrigger>
                <AccordionContent className="font-garamond text-lg">
                  <p className="mb-4">Forge relationships with:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Exotic wood and stone suppliers (sustainably sourced)</li>
                    <li>Metal fabricators and powder coaters</li>
                    <li>Shipping partners for white-glove delivery</li>
                    <li>Design software developers (for Blender plugins or custom CAD)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-xl font-montserrat">7. Financial & Legal Backbone</AccordionTrigger>
                <AccordionContent className="font-garamond text-lg">
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Ensure full cost modeling per piece (materials, labour, design hours)</li>
                    <li>Secure insurance for high-value pieces in transit</li>
                    <li>Register intellectual property (designs, finishes, processes)</li>
                    <li>Set up client contracts for high-value commissions</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductionPlan;
