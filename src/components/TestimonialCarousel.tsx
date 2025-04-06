
import React, { useState, useCallback, useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from '@/components/ui/avatar';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emma Johnson",
    role: "Interior Designer",
    company: "Modern Living",
    image: "/placeholder.svg",
    content: "Krishna Woods Co. transformed my design concepts into stunning reality. Their craftsmanship and attention to detail exceeded all expectations. My clients are absolutely thrilled with the results."
  },
  {
    id: 2,
    name: "David Chen",
    role: "Homeowner",
    company: "",
    image: "/placeholder.svg",
    content: "The dining table created for our family is not just a piece of furniture but a work of art. Every guest compliments the exquisite craftsmanship and unique design. Worth every penny."
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Creative Director",
    company: "Artisan Spaces",
    image: "/placeholder.svg",
    content: "Working with Krishna Woods Co. has been a seamless experience. Their ability to turn abstract ideas into functional, beautiful pieces is remarkable. I highly recommend them for custom projects."
  }
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaApi, setEmblaApi] = useState<any>(null);

  // Fixed: This is the correct way to handle the onSelect callback with Embla Carousel
  const handleSelect = useCallback(() => {
    if (!emblaApi) return;
    
    // Use the selectedScrollSnap method from the Embla API object, not from the event
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      // Set up the initial active index and event listeners
      handleSelect();
      emblaApi.on('select', handleSelect);
      
      // Clean up event listeners
      return () => {
        emblaApi.off('select', handleSelect);
      };
    }
  }, [emblaApi, handleSelect]);

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <Carousel 
        opts={{
          loop: true,
          align: 'center',
        }}
        setApi={setEmblaApi}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <Card className="h-full bg-kw-cream/10 border border-kw-cream/20">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </Avatar>
                    <div>
                      <h4 className="font-montserrat font-medium text-kw-cream">{testimonial.name}</h4>
                      <p className="text-sm text-kw-cream/70">{testimonial.role}{testimonial.company && `, ${testimonial.company}`}</p>
                    </div>
                  </div>
                  
                  <p className="font-garamond text-lg text-kw-cream/90 italic flex-grow">{testimonial.content}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                activeIndex === index ? 'bg-kw-cream' : 'bg-kw-cream/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <CarouselPrevious className="left-2 lg:-left-12" />
        <CarouselNext className="right-2 lg:-right-12" />
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
