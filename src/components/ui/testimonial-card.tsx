"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// --- Type Definitions for props ---
export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  title: string;
  quote?: string;
  avatarSrc: string;
  rating: number;
}

export interface ClientsSectionProps {
  tagLabel: string;
  title: string;
  description: string;
  stats: Stat[];
  testimonials: Testimonial[];
  primaryActionLabel: string;
  secondaryActionLabel: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  className?: string;
}

// --- Internal Sub-Components ---

// StatCard using shadcn variables with dark theme
const StatCard = ({ value, label }: Stat) => (
  <Card className="bg-gray-800/50 border-gray-700/50 text-center rounded-xl backdrop-blur-sm">
    <CardContent className="p-4">
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="text-sm text-gray-400">{label}</p>
    </CardContent>
  </Card>
);

// A sticky testimonial card for the stacking effect.
const StickyTestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  return (
    <motion.div
      className="sticky w-full"
      style={{ top: `${20 + index * 24}px` }} // Staggered top position for stacking
    >
      <div className={cn(
        "p-6 rounded-2xl shadow-lg flex flex-col h-auto w-full",
        "bg-gray-900/50 border border-gray-800/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
      )}>
        {/* Top section: Image and Author */}
        <div className="flex items-center gap-4">
          <div
            className="w-14 h-14 rounded-xl bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: `url(${testimonial.avatarSrc})` }}
            aria-label={`Photo of ${testimonial.name}`}
          />
          <div className="flex-grow">
            <p className="font-semibold text-lg text-white">{testimonial.name}</p>
            <p className="text-sm text-gray-400">{testimonial.title}</p>
          </div>
        </div>

        {/* Middle section: Rating */}
        <div className="flex items-center gap-2 my-4">
          <span className="font-bold text-base text-white">{testimonial.rating.toFixed(1)}</span>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < Math.floor(testimonial.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-600"
                )}
              />
            ))}
          </div>
        </div>

        {/* Bottom section: Quote */}
        {testimonial.quote && (
          <p className="text-base text-gray-300">&ldquo;{testimonial.quote}&rdquo;</p>
        )}
      </div>
    </motion.div>
  );
};

// --- Main Exported Component ---

export const ClientsSection = ({
  tagLabel,
  title,
  description,
  stats,
  testimonials,
  primaryActionLabel,
  secondaryActionLabel,
  onPrimaryAction,
  onSecondaryAction,
  className,
}: ClientsSectionProps) => {
  // Calculate a height for the scroll container to ensure all cards can stack
  const scrollContainerHeight = `calc(100vh + ${testimonials.length * 100}px)`;

  return (
    <section className={cn("w-full bg-gray-950 text-white py-20 md:py-28", className)}>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start px-4 sm:px-6 lg:px-8">
        
        {/* Left Column: Sticky Content */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-20">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-gray-700/50 bg-gray-800/50 px-3 py-1 text-sm backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-gray-400">{tagLabel}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">{title}</h2>
          <p className="text-lg text-gray-300">{description}</p>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
          <div className="flex items-center gap-4 mt-6">
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300"
              onClick={onSecondaryAction}
            >
              {secondaryActionLabel}
            </Button>
            <Button 
              size="lg" 
              className="rounded-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500"
              onClick={onPrimaryAction}
            >
              {primaryActionLabel}
            </Button>
          </div>
        </div>

        {/* Right Column: Container for the sticky card stack */}
        <div className="relative flex flex-col gap-4" style={{ height: scrollContainerHeight }}>
          {testimonials.map((testimonial, index) => (
            <StickyTestimonialCard
              key={testimonial.name}
              index={index}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};