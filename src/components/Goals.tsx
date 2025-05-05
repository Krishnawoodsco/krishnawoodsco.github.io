
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface GoalsProps {
  className?: string;
}

const Goals: React.FC<GoalsProps> = ({ className }) => {
  const goals = [
    {
      category: "Infrastructure",
      description: "Build high-end, multi-material workshop with design suite"
    },
    {
      category: "Talent",
      description: "Hire/train artisans across wood, stone, metal, finishing"
    },
    {
      category: "Design & Process",
      description: "Develop unique, repeatable fabrication techniques"
    },
    {
      category: "Systems",
      description: "Streamline client-facing design-to-delivery workflow"
    },
    {
      category: "Marketing",
      description: "Build a luxury branding experience"
    },
    {
      category: "Partnerships",
      description: "Secure supply chain and service alliances"
    },
    {
      category: "Financial",
      description: "Create sustainable pricing, quoting, and legal structures"
    }
  ];

  return (
    <section id="goals" className={cn("py-20 bg-white dark:bg-kw-black", className)}>
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl mb-6 text-center">Key Goals</h2>
          <h3 className="font-alice text-xl md:text-2xl mb-12 text-center text-kw-gray-600 dark:text-kw-gray-300">Building Foundations for Excellence</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-kw-gray-300 dark:border-kw-gray-700 bg-white/50 dark:bg-kw-gray-800/50 backdrop-blur-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-montserrat text-lg font-semibold mb-3 text-kw-black dark:text-white">{goal.category}</h4>
                    <p className="font-garamond text-kw-gray-800 dark:text-kw-gray-200">{goal.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Goals;
