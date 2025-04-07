
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Krishna Woods created a table that feels like it's been in our family for generations, yet is distinctly modern. Remarkable craftsmanship.",
    author: "Alexandra Miller",
    position: "Interior Designer, London",
  },
  {
    id: 2,
    quote: "The attention to detail in their work is unparalleled. Our walnut dining table has become the centerpiece of our home.",
    author: "James Harrington",
    position: "Private Client, Edinburgh",
  },
  {
    id: 3,
    quote: "Working with Krishna Woods was effortless. They translated our vision into a stunning reality with meticulous precision.",
    author: "Olivia Thompson",
    position: "Architectural Firm Partner",
  },
  {
    id: 4,
    quote: "The quality of materials and craftsmanship at Krishna Woods Co. exceeds anything I've encountered in twenty years of design consulting.",
    author: "Richard Bennett",
    position: "Design Consultant",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-20 bg-kw-gray-100 dark:bg-kw-gray-900">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl mb-16 text-center text-kw-black dark:text-kw-white">
            Client Reflections
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
              onSelect={(api) => {
                if (api) {
                  setCurrentIndex(api.selectedScrollSnap());
                }
              }}
            >
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="md:basis-full">
                    <div className="p-4 md:p-6">
                      <div className="bg-white dark:bg-kw-gray-800 p-8 md:p-12 rounded-lg shadow-lg">
                        <Quote size={32} className="text-kw-gray-400 mb-4" />
                        <p className="font-alice text-xl md:text-2xl mb-8 text-kw-gray-800 dark:text-kw-gray-200">
                          "{testimonial.quote}"
                        </p>
                        <div>
                          <p className="font-montserrat font-semibold text-kw-black dark:text-kw-white">
                            {testimonial.author}
                          </p>
                          <p className="font-garamond text-kw-gray-600 dark:text-kw-gray-400">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="relative static mr-2 translate-y-0 left-0" />
                <div className="flex items-center gap-2 mx-4">
                  {testimonials.map((_, index) => (
                    <span
                      key={index}
                      className={`block h-2 w-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "w-8 bg-kw-black dark:bg-kw-white"
                          : "bg-kw-gray-300 dark:bg-kw-gray-700"
                      }`}
                    />
                  ))}
                </div>
                <CarouselNext className="relative static ml-2 translate-y-0 right-0" />
              </div>
            </Carousel>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
