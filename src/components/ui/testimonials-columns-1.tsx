"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className="p-8 rounded-3xl border border-gray-800/50 bg-gray-900/50 backdrop-blur-sm shadow-xl shadow-purple-500/10 max-w-xs w-full hover:border-purple-500/50 transition-all duration-300 group" 
                  key={i}
                >
                  <div className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 font-light" style={{ fontFamily: '"Instrument Serif", serif' }}>
                    "{text}"
                  </div>
                  <div className="flex items-center gap-3 mt-6">
                    <img
                      width={48}
                      height={48}
                      src={image}
                      alt={name}
                      className="h-12 w-12 rounded-full border-2 border-purple-500/30 group-hover:border-purple-400/50 transition-colors duration-300"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold tracking-tight leading-5 text-white group-hover:text-purple-200 transition-colors duration-300" style={{ fontFamily: '"Playfair Display", serif' }}>
                        {name}
                      </div>
                      <div className="leading-5 text-purple-400 tracking-tight text-sm font-light" style={{ fontFamily: '"Inter", sans-serif' }}>
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const testimonials = [
  {
    text: "RapidXAI's voice agents transformed our lead qualification process. We're booking 3x more meetings without hiring more staff.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Sarah Chen",
    role: "CEO at TechScale",
  },
  {
    text: "The MVP they built for us validated our market in just 3 weeks. Now we have paying customers and clear product-market fit.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Mike Rodriguez",
    role: "Founder at DataFlow",
  },
  {
    text: "Shreyas and his team delivered exactly what we needed. Our AI voice system handles 80% of inbound calls flawlessly.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    name: "Jennifer Park",
    role: "CTO at CallCare",
  },
  {
    text: "From concept to production MVP in 4 weeks. The code quality and architecture are enterprise-grade.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    name: "David Kim",
    role: "Head of Product at StartupLab",
  },
  {
    text: "The voice AI integration with our CRM is seamless. Our sales team loves the automatic lead scoring and notes.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Lisa Thompson",
    role: "Sales Director at GrowthCo",
  },
  {
    text: "ROI was immediate. Our voice agents work 24/7 and never miss a lead. Best investment we've made this year!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Alex Johnson",
    role: "Operations Manager at LeadGen Pro",
  },
  {
    text: "The micro-SaaS they built is generating $5K MRR after just 2 months. Clean code, great UX, perfect execution.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Emma Wilson",
    role: "Founder at AutoTools",
  },
  {
    text: "Finally, a team that understands both AI automation AND product development. They delivered exactly what we envisioned.",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    name: "Ryan Martinez",
    role: "CTO at InnovateAI",
  },
  {
    text: "The voice agent handles complex qualification scenarios better than our junior SDRs. Incredible natural language processing.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    name: "Maria Garcia",
    role: "Head of Sales at B2B Solutions",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export { testimonials, firstColumn, secondColumn, thirdColumn };