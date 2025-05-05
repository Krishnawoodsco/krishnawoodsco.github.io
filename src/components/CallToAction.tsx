
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';

interface CallToActionProps {
  className?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ className }) => {
  return (
    <section id="call-to-action" className={cn("py-20 bg-kw-black text-white", className)}>
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Let's Make Something Timeless</h2>
          <p className="font-garamond text-xl mb-10">
            If you're ready to create a statement piece with a story—and bring a unique vision to life—book a consultation today. With Krishna Woods, you're not just commissioning a table. You're shaping a lasting impression.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-white text-kw-black hover:bg-white/90 font-montserrat text-base flex items-center gap-2 h-12 px-6">
                <Mail size={18} />
                Request Design Consultation
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-montserrat text-base flex items-center gap-2 h-12 px-6">
                <Phone size={18} />
                Call Now
              </Button>
            </motion.div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-montserrat text-sm tracking-wider mb-2 text-white/70">EMAIL</h3>
                <a href="mailto:Krishnawoodsco@gmail.com" className="font-alice text-lg hover:text-white/80 transition-colors">Krishnawoodsco@gmail.com</a>
              </div>
              
              <div>
                <h3 className="font-montserrat text-sm tracking-wider mb-2 text-white/70">PHONE/WHATSAPP</h3>
                <a href="tel:+919092581722" className="font-alice text-lg hover:text-white/80 transition-colors">+91 9092 581 722</a>
              </div>
              
              <div>
                <h3 className="font-montserrat text-sm tracking-wider mb-2 text-white/70">WEBSITE</h3>
                <a href="https://krishnawoodsco.github.io/" className="font-alice text-lg hover:text-white/80 transition-colors">krishnawoodsco.github.io</a>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/20 text-center">
              <p className="font-garamond text-white/80">
                We respond within 2 hours and have you fully ready for production in less than 2 meetings. We work fast and make sure you always have full clarity of what is going on.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
