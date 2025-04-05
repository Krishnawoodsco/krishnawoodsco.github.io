
import React from 'react';
import { cn } from '@/lib/utils';

interface DesignFlowProps {
  className?: string;
}

const DesignFlow: React.FC<DesignFlowProps> = ({ className }) => {
  const steps = [
    {
      number: 1,
      title: "Measurement",
      items: [
        "Space & object distance measured during the home/site visit",
        "Max Available Volume Area noted",
        "Discuss preferred leg size, height, and under-table clearance",
        "Finalize placement (centerpiece vs wall-aligned)"
      ]
    },
    {
      number: 2,
      title: "Vision Consultation",
      items: [
        "Sit down with client + image portfolio",
        "Explore leg styles & materials (steel, wood, brass)",
        "Tabletop finish (matte, gloss, natural oil, epoxy)",
        "Size, theme, and context (indoor/outdoor, dining/work)"
      ]
    },
    {
      number: 3,
      title: "Design Creation",
      items: [
        "Create first concept sketch",
        "Develop Augmented Reality visualization of the piece",
        "Adjust size or details based on client feedback"
      ]
    },
    {
      number: 4,
      title: "Finalize Design Portfolio",
      items: [
        "Materials",
        "Finishes",
        "Dimensions",
        "Assembly method",
        "Custom markings (logo engraving, signatures, etc.)"
      ]
    },
    {
      number: 5,
      title: "Cost Calculation",
      items: [
        "Wood cost",
        "Finish cost",
        "Metalwork or accessories",
        "Labour",
        "AR/design consultation",
        "Share final quote with itemized costs"
      ]
    },
    {
      number: 6,
      title: "Build",
      items: [
        "Begin production",
        "Document process for marketing and client transparency"
      ]
    },
    {
      number: 7,
      title: "Market",
      items: [
        "Launch mini-campaign",
        "BTS build reels",
        "Client testimonials",
        "Style shots (on-site + in studio)"
      ]
    },
    {
      number: 8,
      title: "Package",
      items: [
        "Certificate of authenticity",
        "Material origin story",
        "Care guide",
        "Optional QR code linking to its making video"
      ]
    },
    {
      number: 9,
      title: "Deliver",
      items: [
        "White-glove delivery with installation and photo documentation",
        "Leave behind brochure for future referrals"
      ]
    }
  ];

  return (
    <section id="design-flow" className={cn("py-20 bg-kw-gray-100", className)}>
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="font-playfair text-3xl md:text-4xl mb-16 text-center">Table Consultation & Design Flow</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white p-6 border border-kw-gray-200">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 bg-kw-black text-white flex items-center justify-center font-montserrat">
                  {step.number}
                </span>
                <h3 className="font-montserrat text-xl ml-4">{step.title}</h3>
              </div>
              <ul className="space-y-2 font-garamond text-lg">
                {step.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-kw-black rounded-full mt-2 mr-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignFlow;
