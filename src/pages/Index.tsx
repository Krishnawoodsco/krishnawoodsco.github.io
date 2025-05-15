
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
import Vision from '@/components/Vision';
import ProductionPlan from '@/components/ProductionPlan';
import Goals from '@/components/Goals';
import CSR from '@/components/CSR';
import Expertise from '@/components/Expertise';
import CurrentDesigns from '@/components/CurrentDesigns';
import CallToAction from '@/components/CallToAction';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Show a welcome toast message when the page loads
    // This will verify our code changes are working
    toast({
      title: "Welcome to Krishna Woods Co.",
      description: "Scroll down to explore our vision and craftsmanship.",
    });
    
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    console.log("Index component mounted - fe2kkkr checking"); // Added fe2kkkr for checking
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
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
      
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        className="fixed bottom-6 right-6 z-40 bg-kw-black dark:bg-white text-white dark:text-kw-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
      
      {/* Content */}
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="vision">
        <Vision />
      </section>
      <section id="design-flow">
        <DesignFlow />
      </section>
      <section id="production-plan">
        <ProductionPlan />
      </section>
      <section id="goals">
        <Goals />
      </section>
      <section id="material-library">
        <MaterialLibrary />
      </section>
      <section id="expertise">
        <Expertise />
      </section>
      <section id="current-designs">
        <CurrentDesigns />
      </section>
      <section id="csr">
        <CSR />
      </section>
      <section id="testimonials">
        <TestimonialCarousel />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="call-to-action">
        <CallToAction />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
