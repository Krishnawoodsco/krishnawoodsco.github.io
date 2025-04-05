
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import BrandIdentity from '@/components/BrandIdentity';
import DesignFlow from '@/components/DesignFlow';
import MaterialLibrary from '@/components/MaterialLibrary';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <BrandIdentity />
      <DesignFlow />
      <MaterialLibrary />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
