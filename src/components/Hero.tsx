
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const textY = useTransform(scrollY, [0, 300], [0, 100]);

  useEffect(() => {
    // Lock scroll initially and release after animation
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 2500); // Match with preloader duration
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section 
      className={cn("relative h-[90vh] md:h-screen flex items-center overflow-hidden", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 1 }}
    >
      <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/hero-wood.jpg')] bg-cover bg-center bg-fixed">
          <div className="absolute inset-0 bg-kw-black/60 dark:bg-kw-black/70"></div>
        </div>
      </motion.div>
      
      <motion.div 
        style={{ y: textY }} 
        className="container mx-auto px-6 md:px-10 relative z-10 text-kw-white"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 1, ease: "easeOut" }}
          >
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl mb-4 max-w-3xl tracking-wider uppercase">
              A foundation for form.
            </h1>
            <Separator className="w-24 h-[2px] bg-kw-white my-6" />
            <p className="font-garamond text-xl md:text-2xl max-w-xl leading-relaxed">
              Timeless elegance in custom woodcraft. Each piece a testament to structure and creativity.
            </p>
            <motion.div 
              className="mt-10"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <a 
                href="#contact" 
                className="inline-block border border-kw-white px-8 py-4 font-montserrat text-sm tracking-widest hover:bg-kw-white hover:text-kw-black transition duration-500"
              >
                BOOK CONSULTATION
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/3 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3, duration: 1, ease: "easeOut" }}
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <motion.img 
                src="/premium-woods.jpg" 
                alt="Premium Wood" 
                className="w-full h-full object-cover" 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <div className="rounded-lg overflow-hidden mt-8 shadow-2xl">
              <motion.img 
                src="/metals.jpg" 
                alt="Metal Accents" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <a href="#about" className="text-kw-white/80 flex flex-col items-center">
          <span className="font-montserrat text-xs tracking-widest mb-2">SCROLL</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
