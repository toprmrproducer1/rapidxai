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
    text: "Honestly? I was skeptical about AI handling our calls. But after seeing our voice agent book 15 qualified meetings in the first week... I'm a believer. It's like having our best SDR working 24/7.",
    image: "https://i.ibb.co/1JZZ0fXb/Screenshot-2025-09-27-at-7-07-45-PM.png",
    name: "Damain Player",
    role: "Founder & CEO at AI Integrator",
  },
  {
    text: "We went from 'maybe we should build something' to having paying customers in 3 weeks. The MVP Shreyas built didn't just validate our idea—it proved we had a real business.",
    image: "https://i.ibb.co/TxwfJw7y/Screenshot-2025-09-27-at-7-07-57-PM.png",
    name: "Amit Kumar",
    role: "Co-Founder & CEO at Investors Propmart",
  },
  {
    text: "The voice agent doesn't just answer calls—it actually understands context. Yesterday it handled a complex rescheduling scenario that would've taken our team 3 back-and-forth emails. Seamless.",
    image: "https://i.ibb.co/6ckrxFFs/Screenshot-2025-09-27-at-7-08-06-PM.png",
    name: "Krish Aggarwal",
    role: "CEO at Rently",
  },
  {
    text: "I've worked with a lot of agencies. Most overpromise and underdeliver. RapidXAI? They delivered exactly what they said, when they said it. No drama, just results.",
    image: "https://i.ibb.co/1tF0kXnQ/Screenshot-2025-09-27-at-7-08-29-PM.png",
    name: "Ganesh Shukla",
    role: "CEO & Founder at ADs For Profit",
  },
  {
    text: "The automation they built saves us 15 hours a week. But more importantly, it never forgets to follow up. That consistency alone has doubled our conversion rate.",
    image: "https://i.ibb.co/nqhTgK1w/Screenshot-2025-09-27-at-7-09-39-PM.png",
    name: "Greg Shore",
    role: "Founder & CEO at Reigershore Consulting",
  },
  {
    text: "What impressed me most? They didn't just build what we asked for—they built what we actually needed. The difference between good developers and great ones.",
    image: "https://i.ibb.co/nMVVmtgf/Screenshot-2025-09-27-at-7-10-49-PM.png",
    name: "Zachery Brown",
    role: "Founder & CEO at DealFinders PR",
  },
  {
    text: "I've been in tech for 15 years. Rarely do you find a team that combines technical excellence with genuine business understanding. RapidXAI gets both.",
    image: "https://i.ibb.co/1JZZ0fXb/Screenshot-2025-09-27-at-7-07-45-PM.png",
    name: "Damain Player",
    role: "Founder & CEO at AI Integrator",
  },
  {
    text: "The voice system they built for us doesn't just work—it learns. Every conversation makes it smarter. It's like having an SDR that gets better every day.",
    image: "https://i.ibb.co/TxwfJw7y/Screenshot-2025-09-27-at-7-07-57-PM.png",
    name: "Amit Kumar",
    role: "Co-Founder & CEO at Investors Propmart",
  },
  {
    text: "Three months ago, we were drowning in manual processes. Today, our AI handles 80% of inquiries automatically. The ROI? We stopped counting after 400%.",
    image: "https://i.ibb.co/6ckrxFFs/Screenshot-2025-09-27-at-7-08-06-PM.png",
    name: "Krish Aggarwal",
    role: "CEO at Rently",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export { testimonials, firstColumn, secondColumn, thirdColumn };