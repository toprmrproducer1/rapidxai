"use client";
import React from "react";
import { motion } from "motion/react";
import { TestimonialsColumn, firstColumn, secondColumn, thirdColumn } from "./testimonials-columns-1";
import { Star, Quote } from "lucide-react";

interface TestimonialsSectionProps {
  className?: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ className }) => {
  return (
    <section className={`bg-gray-950 py-16 relative overflow-hidden ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-purple-600/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-center text-white mb-4" style={{ fontFamily: '"Fraunces", "Playfair Display", serif' }}>
            <span className="gradient-text">Client</span> Results
          </h2>
        </motion.div>

        <div className="flex justify-center gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        {/* Floating Quote Icons */}
        <div className="absolute top-20 left-10 opacity-20">
          <Quote className="w-16 h-16 text-purple-400 rotate-12" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Quote className="w-20 h-20 text-violet-400 -rotate-12" />
        </div>
      </div>
    </section>
  );
};