"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "RapidXAI's voice agents transformed our lead qualification process. We're booking 3x more meetings without hiring more staff.",
    by: "Sarah, CEO at TechScale",
    imgSrc: "https://i.pravatar.cc/150?img=1"
  },
  {
    tempId: 1,
    testimonial: "The MVP they built for us validated our market in just 3 weeks. Now we have paying customers and clear product-market fit.",
    by: "Mike, Founder at DataFlow",
    imgSrc: "https://i.pravatar.cc/150?img=2"
  },
  {
    tempId: 2,
    testimonial: "Shreyas and his team delivered exactly what we needed. Our AI voice system handles 80% of inbound calls flawlessly.",
    by: "Jennifer, CTO at CallCare",
    imgSrc: "https://i.pravatar.cc/150?img=3"
  },
  {
    tempId: 3,
    testimonial: "From concept to production MVP in 4 weeks. The code quality and architecture are enterprise-grade.",
    by: "David, Head of Product at StartupLab",
    imgSrc: "https://i.pravatar.cc/150?img=4"
  },
  {
    tempId: 4,
    testimonial: "The voice AI integration with our CRM is seamless. Our sales team loves the automatic lead scoring and notes.",
    by: "Lisa, Sales Director at GrowthCo",
    imgSrc: "https://i.pravatar.cc/150?img=5"
  },
  {
    tempId: 5,
    testimonial: "ROI was immediate. Our voice agents work 24/7 and never miss a lead. Best investment we've made this year!",
    by: "Alex, Operations Manager at LeadGen Pro",
    imgSrc: "https://i.pravatar.cc/150?img=6"
  },
  {
    tempId: 6,
    testimonial: "The micro-SaaS they built is generating $5K MRR after just 2 months. Clean code, great UX, perfect execution.",
    by: "Emma, Founder at AutoTools",
    imgSrc: "https://i.pravatar.cc/150?img=7"
  },
  {
    tempId: 7,
    testimonial: "Finally, a team that understands both AI automation AND product development. They delivered exactly what we envisioned.",
    by: "Ryan, CTO at InnovateAI",
    imgSrc: "https://i.pravatar.cc/150?img=8"
  },
  {
    tempId: 8,
    testimonial: "The voice agent handles complex qualification scenarios better than our junior SDRs. Incredible natural language processing.",
    by: "Maria, Head of Sales at B2B Solutions",
    imgSrc: "https://i.pravatar.cc/150?img=9"
  },
  {
    tempId: 9,
    testimonial: "From prototype to production in record time. The MVP launch exceeded all our conversion targets.",
    by: "James, Product Lead at FastTrack",
    imgSrc: "https://i.pravatar.cc/150?img=10"
  },
  {
    tempId: 10,
    testimonial: "Working with RapidXAI felt like having a senior engineering team on-demand. Professional, fast, and results-driven.",
    by: "Sophie, Founder at DevTools Plus",
    imgSrc: "https://i.pravatar.cc/150?img=11"
  },
  {
    tempId: 11,
    testimonial: "The voice AI system integrates perfectly with our existing stack. No disruption, just enhanced performance.",
    by: "Tom, Engineering Director at TechFlow",
    imgSrc: "https://i.pravatar.cc/150?img=12"
  },
  {
    tempId: 12,
    testimonial: "Customer support is outstanding. They're always available when we need technical guidance or updates.",
    by: "Rachel, Customer Success at ClientFirst",
    imgSrc: "https://i.pravatar.cc/150?img=13"
  },
  {
    tempId: 13,
    testimonial: "The efficiency gains from their voice automation are incredible. We're processing 5x more leads with the same team.",
    by: "Carlos, COO at StreamlineOps",
    imgSrc: "https://i.pravatar.cc/150?img=14"
  },
  {
    tempId: 14,
    testimonial: "They built our SaaS platform with perfect scalability in mind. Handles thousands of users without breaking a sweat.",
    by: "Nina, Founder at ScaleUp Solutions",
    imgSrc: "https://i.pravatar.cc/150?img=15"
  },
  {
    tempId: 15,
    testimonial: "The MVP validation process was brilliant. We pivoted based on real user data and now have a profitable business.",
    by: "Kevin, CEO at ValidateFirst",
    imgSrc: "https://i.pravatar.cc/150?img=16"
  },
  {
    tempId: 16,
    testimonial: "RapidXAI stays ahead of AI trends. They implemented features we didn't even know we needed.",
    by: "Anna, Innovation Lead at FutureTech",
    imgSrc: "https://i.pravatar.cc/150?img=17"
  },
  {
    tempId: 17,
    testimonial: "The ROI on our voice automation project was 300% in the first quarter. Phenomenal results.",
    by: "Daniel, Finance Director at ProfitMax",
    imgSrc: "https://i.pravatar.cc/150?img=18"
  },
  {
    tempId: 18,
    testimonial: "Their platform is incredibly robust yet easy to use. Perfect balance of power and simplicity.",
    by: "Grace, Tech Lead at BalancedSys",
    imgSrc: "https://i.pravatar.cc/150?img=19"
  },
  {
    tempId: 19,
    testimonial: "We've tried other AI voice solutions, but RapidXAI's reliability and performance are unmatched.",
    by: "Ben, Performance Manager at ReliableTech",
    imgSrc: "https://i.pravatar.cc/150?img=20"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-gradient-to-br from-purple-600 to-violet-600 text-white border-purple-500" 
          : "z-0 bg-gray-900/50 text-white border-gray-700/50 hover:border-purple-500/50 backdrop-blur-sm"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(139, 92, 246, 0.3)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-700"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-gray-700 object-cover object-top rounded"
        style={{
          boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.3)"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-lg font-medium mb-4",
        isCenter ? "text-white" : "text-gray-100"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-white/90" : "text-gray-300"
      )}>
        — {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-gray-900/20 border border-gray-800/30 rounded-3xl backdrop-blur-sm"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors rounded-xl",
            "bg-gray-900/80 border-2 border-gray-700/50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-violet-600 hover:text-white hover:border-purple-500 backdrop-blur-sm",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors rounded-xl",
            "bg-gray-900/80 border-2 border-gray-700/50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-violet-600 hover:text-white hover:border-purple-500 backdrop-blur-sm",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};