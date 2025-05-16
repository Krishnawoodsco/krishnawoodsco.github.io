import React from 'react';
import { cn } from '@/lib/utils';  // Make sure this utility is correctly implemented
import { Separator } from '@/components/ui/separator';  // Ensure this is correctly imported

interface CSRProps {
  className?: string;
}

const CSR: React.FC<CSRProps> = ({ className }) => {
  console.log("CSR component mounted ✅");

  return (
    <section 
      id="csr" 
      className={cn("py-20 bg-kw-gray-100 dark:bg-kw-gray-900", "bg-red-500", className)}  // Adding red background temporarily
    >
      <div className="container mx-auto px-6 md:px-10">
        
        <h2 className="font-playfair text-3xl md:text-4xl mb-6 text-center">
          Corporate Social Responsibility
        </h2>

        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <p className="font-garamond text-xl leading-relaxed mb-6">
            At Krishna Woods Co., we believe that the soul of a company is not just measured by its profits or prestige—but by the depth of its impact.
          </p>

          <p className="font-garamond text-lg leading-relaxed mb-6">
            While our designs stand proudly as symbols of craftsmanship, elegance, and refinement, our true foundation lies in purpose. That's why we are committing ourselves to a cause rooted in education and equity and inaugurating this initiative by donating school furniture and essential supplies to underfunded schools in the Kodaikanal region.
          </p>

          <div className="my-10 bg-white/50 dark:bg-kw-black/50 p-8 rounded-lg border border-kw-gray-300 dark:border-kw-gray-700 italic">
            <p className="font-alice text-xl text-center">
              "We aren't doing this for applause. We're doing it because a beautiful table in a wealthy home means little if a child elsewhere has nowhere to sit, nowhere to learn, and no tools to rise."
            </p>
          </div>

          <p className="font-garamond text-lg leading-relaxed mb-6">
            Our business may be rooted in luxury, but our values are grounded in empathy. It's this balance—between aesthetic excellence and meaningful change—that defines who we are.
          </p>

          <p className="font-garamond text-lg leading-relaxed mb-6">
            Each order placed with Krishna Woods contributes 25% of each table's earning toward this mission. Every bench we place in a classroom echoes our belief that business can do more than create—it can uplift. It can serve.
          </p>

          <Separator className="my-8 bg-kw-gray-300 dark:bg-kw-gray-700" />

          <p className="font-garamond text-lg leading-relaxed mb-6">
            We've chosen this path because we want to be known not only for our design sensibility, but for the sincerity of our hearts. A strong brand identity makes you memorable. But goodwill makes you unforgettable—and unshakeable in your hardest hour. It builds community, trust, and a sense of belonging among our team, partners, and customers.
          </p>

          <p className="font-garamond text-lg leading-relaxed mb-6">
            This initiative is not just charity. It's insurance for the soul of the company. It's a reminder to every artisan, designer, and collaborator that they are building not just furniture, but futures.
          </p>

          <p className="font-alice text-xl text-center mt-12">
            Let this be the legacy of Krishna Woods Co.—beautiful forms, built on a foundation of purpose.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CSR;
