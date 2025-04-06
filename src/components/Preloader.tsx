
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (!loading) {
          document.body.style.overflow = 'auto';
        }
      }}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-kw-white dark:bg-kw-black ${
        loading ? '' : 'pointer-events-none'
      }`}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: loading ? 1 : 1.2, opacity: loading ? 1 : 0 }}
        transition={{
          duration: 0.8,
          ease: [0.4, 0, 0.2, 1],
          scale: { duration: 1.2 },
        }}
        className="relative"
      >
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="absolute inset-0 bg-[url('/wood-texture.jpg')] bg-cover opacity-40 mix-blend-multiply rounded-lg"
          />
          <Logo showTexture={true} className="scale-150 transform-gpu" />
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
          className="h-0.5 bg-gradient-to-r from-transparent via-kw-black dark:via-kw-white to-transparent mt-6"
        />
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-3 text-center font-alice text-sm tracking-widest text-kw-black dark:text-kw-white"
        >
          A FOUNDATION FOR FORM
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
