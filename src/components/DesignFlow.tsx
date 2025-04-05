
import React from 'react';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface DesignFlowProps {
  className?: string;
}

const DesignFlow: React.FC<DesignFlowProps> = ({ className }) => {
  const steps = [
    {
      number: 1,
      title: "Measurement",
      description: "We begin where all great designs start - with precision and purpose.",
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
      description: "A collaborative dialogue between craftsman and client.",
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
      description: "Where imagination meets possibility.",
      items: [
        "Create first concept sketch",
        "Develop Augmented Reality visualization of the piece",
        "Adjust size or details based on client feedback"
      ]
    },
    {
      number: 4,
      title: "Finalize Design Portfolio",
      description: "Documenting the journey from idea to implementation.",
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
      description: "Transparency in value creation.",
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
      description: "Craftsmanship in motion.",
      items: [
        "Begin production",
        "Document process for marketing and client transparency"
      ]
    },
    {
      number: 7,
      title: "Market",
      description: "Sharing the story behind the piece.",
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
      description: "The finishing touches that complete the experience.",
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
      description: "A celebration of completion and new beginnings.",
      items: [
        "White-glove delivery with installation and photo documentation",
        "Leave behind brochure for future referrals"
      ]
    }
  ];

  return (
    <section id="design-flow" className={cn("py-20 bg-kw-gray-100", className)}>
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="font-playfair text-3xl md:text-4xl mb-8 text-center">Table Consultation & Design Flow</h2>
        <p className="font-garamond text-xl text-center max-w-3xl mx-auto mb-16 italic">
          "Our process flows like the grain of wood itself — natural, intentional, and revealing beauty with every step."
        </p>
        
        <div className="relative">
          {/* Flowing connection line */}
          <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-kw-black to-transparent z-0"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className={`relative z-10 flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 md:gap-12`}
              >
                {/* Step number and connector */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white border border-kw-gray-200 flex items-center justify-center shadow-md relative">
                  <span className="font-montserrat text-2xl">{step.number}</span>
                  
                  {/* Small connecting line to the main timeline */}
                  {index < steps.length - 1 && (
                    <div className="absolute hidden md:block top-full left-1/2 -ml-px h-16 w-0.5 bg-gradient-to-b from-kw-black to-transparent"></div>
                  )}
                </div>
                
                {/* Content */}
                <div className={`flex-1 bg-white p-6 border border-kw-gray-200 shadow-sm transition-all duration-300 hover:shadow-md ${
                  index % 2 === 0 ? 'md:mr-0 md:ml-auto' : 'md:ml-0 md:mr-auto'
                } md:max-w-xl`}>
                  <Collapsible>
                    <div className="flex justify-between items-center">
                      <h3 className="font-montserrat text-xl">{step.title}</h3>
                      <CollapsibleTrigger className="p-2 hover:bg-kw-gray-100 rounded-full transition-colors">
                        <ChevronDown className="h-5 w-5" />
                      </CollapsibleTrigger>
                    </div>
                    
                    <p className="font-garamond text-lg mt-2 text-kw-gray-600">{step.description}</p>
                    
                    <CollapsibleContent>
                      <ul className="space-y-2 mt-4 font-garamond text-lg">
                        {step.items.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <ArrowRight className="h-4 w-4 mt-1.5 mr-2 flex-shrink-0 text-kw-gray-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignFlow;
