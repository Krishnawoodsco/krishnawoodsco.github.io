
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { ChevronDown, ChevronUp } from 'lucide-react';

interface MaterialLibraryProps {
  className?: string;
}

const MaterialLibrary: React.FC<MaterialLibraryProps> = ({ className }) => {
  const [expandedCategory, setExpandedCategory] = React.useState<string | null>(null);
  
  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };
  
  const materialCategories = [
    {
      id: "wood",
      name: "Premium Woods",
      image: "/wood-texture.jpg",
      description: "From heritage classics to exotic rarities, our wood selection forms the heart of our craft.",
      subcategories: [
        {
          title: "Core Woods",
          items: ["Walnut", "Oak", "Ash", "Mahogany", "Beech", "Maple"],
          description: "The foundation of traditional craftsmanship, selected for stability and character."
        },
        {
          title: "Exotics & Art Pieces",
          items: ["Ebony", "Bocote", "Cocobolo", "Olive Wood", "Purpleheart", "Rosewood", "Koa", "Snakewood", "Spalted Beech", "Macassar Ebony"],
          description: "Rare finds with extraordinary grain patterns, colors, and stories."
        }
      ]
    },
    {
      id: "metal",
      name: "Metals",
      image: "/metals.jpg",
      description: "Structural elements that complement wood with contrast, strength, and sophistication.",
      subcategories: [
        {
          title: "Premium Metals",
          items: ["Brushed Steel", "Polished Brass", "Black Iron", "Chrome", "Bronze"],
          description: "Carefully selected metals that provide structural integrity with visual elegance."
        }
      ]
    },
    {
      id: "stone",
      name: "Stones & Minerals",
      image: "/stones.jpg",
      description: "Nature's art, incorporated as accents or statement features in our designs.",
      subcategories: [
        {
          title: "Natural Stone",
          items: ["Marble (Carrara, Black Marquina)", "Onyx"],
          description: "Earth's geological masterpieces, each with unique patterns and character."
        },
        {
          title: "Modern Materials",
          items: ["Cement blends for bases", "Resin (transparent, ocean blue, smoky)"],
          description: "Contemporary elements that expand design possibilities while honoring traditional craft."
        }
      ]
    }
  ];

  return (
    <section id="material-library" className={cn("py-20 bg-white overflow-hidden", className)}>
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="font-playfair text-3xl md:text-4xl mb-6 text-center">Material Library</h2>
        <p className="font-garamond text-xl text-center max-w-3xl mx-auto mb-16 italic">
          "The vocabulary of our craft — each material carefully selected to tell a unique story."
        </p>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {materialCategories.map((category) => (
              <CarouselItem key={category.id} className="md:basis-1/2 lg:basis-1/3 pl-6">
                <Card className="border border-kw-gray-200 overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110" 
                      style={{ backgroundImage: `url(${category.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6">
                        <h3 className="font-montserrat text-xl text-white uppercase tracking-wider">
                          {category.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="font-garamond text-lg">{category.description}</p>
                    
                    <div className="mt-6 space-y-4">
                      {category.subcategories.map((subcategory, index) => (
                        <div key={index} className="border-t border-kw-gray-200 pt-4">
                          <div 
                            className="flex justify-between items-center cursor-pointer" 
                            onClick={() => toggleCategory(`${category.id}-${index}`)}
                          >
                            <h4 className="font-montserrat text-lg">{subcategory.title}</h4>
                            {expandedCategory === `${category.id}-${index}` ? 
                              <ChevronUp className="h-5 w-5" /> : 
                              <ChevronDown className="h-5 w-5" />
                            }
                          </div>
                          
                          {expandedCategory === `${category.id}-${index}` && (
                            <div className="mt-4">
                              <p className="font-garamond text-kw-gray-600 mb-2">{subcategory.description}</p>
                              <div className="flex flex-wrap gap-2 mt-3">
                                {subcategory.items.map((item, i) => (
                                  <span 
                                    key={i} 
                                    className="px-3 py-1 bg-kw-gray-100 text-sm font-garamond rounded-full"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 pb-6 px-6">
                    <p className="font-alice text-sm text-kw-gray-600">
                      Every material is sourced with intention and respect for its origin.
                    </p>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex items-center justify-center mt-8">
            <CarouselPrevious className="relative -left-0 mr-4" />
            <CarouselNext className="relative -right-0 ml-4" />
          </div>
        </Carousel>
        
        <div className="mt-16 text-center">
          <p className="font-garamond text-lg max-w-2xl mx-auto">
            Each material in our library has been selected not just for its beauty, but for how it ages, 
            interacts with light, and contributes to the story of the piece it becomes part of.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MaterialLibrary;
