
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import DesignFlow from '@/components/DesignFlow';
import MaterialLibrary from '@/components/MaterialLibrary';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import ThemeToggle from '@/components/ThemeToggle';
import { motion, useScroll, useSpring } from 'framer-motion';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  return (
    <div className="min-h-screen bg-white dark:bg-kw-black relative">
      {/* Progress indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-kw-black dark:bg-kw-white z-50 origin-left"
        style={{ scaleX }}
      />
      
      {/* Preloader */}
      <Preloader />
      
      {/* Subtle grain texture overlay */}
      <div className="fixed inset-0 bg-[url('/wood-texture.jpg')] opacity-[0.03] dark:opacity-[0.02] bg-repeat pointer-events-none animate-grain"></div>
      
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Content */}
      <Navigation />
      <Hero />
      <About />
      <DesignFlow />
      <MaterialLibrary />
      <TestimonialCarousel />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
