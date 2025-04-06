
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Map, Phone, Mail, MapPin } from 'lucide-react';

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
    <section id="contact" className={cn("py-20 bg-kw-black text-white dark:bg-kw-gray-900", className)}>
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl mb-16 text-center">Book a Consultation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div 
              className="space-y-10"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="font-alice text-2xl mb-6">Get in Touch</h3>
                <p className="font-garamond text-xl mb-10">
                  Begin your journey with Krishna Woods Co. Schedule a consultation to discuss your custom table or furniture piece.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 text-white/70" />
                  <div>
                    <h4 className="font-montserrat text-sm tracking-wider mb-1">STUDIO LOCATION</h4>
                    <p className="font-alice text-lg text-white/80">42 Craftsman Avenue, London, UK</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 text-white/70" />
                  <div>
                    <h4 className="font-montserrat text-sm tracking-wider mb-1">TELEPHONE</h4>
                    <p className="font-alice text-lg text-white/80">+44 20 7123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 text-white/70" />
                  <div>
                    <h4 className="font-montserrat text-sm tracking-wider mb-1">EMAIL</h4>
                    <p className="font-alice text-lg text-white/80">inquiries@krishnawoodsc.co.uk</p>
                  </div>
                </div>
              </div>
              
              <div className="h-64 md:h-72 rounded-lg overflow-hidden border border-white/20">
                {/* Map placeholder - would be replaced with actual map integration */}
                <div className="w-full h-full bg-kw-gray-800 flex items-center justify-center">
                  <Map className="h-10 w-10 text-white/40" />
                  <span className="sr-only">Map location</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
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
                    className="bg-transparent border-white/30 focus:border-white placeholder:text-white/50 text-white resize-none"
                  />
                </div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-white text-kw-black hover:bg-white/80 font-montserrat mt-4"
                  >
                    {isSubmitting ? "SUBMITTING..." : "REQUEST CONSULTATION"}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
