
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Consultation Request Submitted",
        description: "We will contact you shortly to schedule your consultation.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className={cn("py-20 bg-kw-black text-white", className)}>
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="font-playfair text-3xl md:text-4xl mb-16 text-center">Book a Consultation</h2>
        
        <div className="max-w-2xl mx-auto">
          <p className="font-alice text-xl mb-10 text-center">
            Begin your journey with Krishna Woods Co. Schedule a consultation to discuss your custom table or furniture piece.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="font-montserrat text-sm block mb-2">NAME</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-transparent border-white/30 focus:border-white placeholder:text-white/50 text-white"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="font-montserrat text-sm block mb-2">EMAIL</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-transparent border-white/30 focus:border-white placeholder:text-white/50 text-white"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="font-montserrat text-sm block mb-2">PHONE (OPTIONAL)</label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-transparent border-white/30 focus:border-white placeholder:text-white/50 text-white"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="font-montserrat text-sm block mb-2">PROJECT DETAILS</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-transparent border-white/30 focus:border-white placeholder:text-white/50 text-white"
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-white text-kw-black hover:bg-white/80 font-montserrat"
            >
              {isSubmitting ? "SUBMITTING..." : "REQUEST CONSULTATION"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
