import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot } from 'lucide-react';
import GradientButton from '../ui/button-1';

interface ClientsSectionProps {
  primaryCTA: () => void;
}

export function ClientsSection({ primaryCTA }: ClientsSectionProps) {
  const clients = [
    {
      name: "Algo Vision",
      logo: "https://i.ibb.co/zTnczmSR/Algo-Vision-Logo-1.png",
      alt: "Algo Vision Logo"
    },
    {
      name: "Client",
      logo: "https://i.ibb.co/3yyM8Qz5/download-7.png",
      alt: "Client Logo"
    },
    {
      name: "Client", 
      logo: "https://i.ibb.co/cXNDzHWm/logo-ce6bde16-0254-4627-980d-0d0cea0103d9.jpg",
      alt: "Client Logo"
    },
    {
      name: "Client",
      logo: "https://i.ibb.co/wZDMbRv0/Logo-2.png",
      alt: "Client Logo"
    },
    {
      name: "Client",
      logo: "https://i.ibb.co/KzmZc21k/logo-black.png",
      alt: "Client Logo"
    },
    {
      name: "Moko",
      logo: "https://i.ibb.co/q3gvWRmh/Moko-White-transparent-background.webp",
      alt: "Moko Logo"
    },
    {
      name: "Varhity Ventures",
      logo: "https://i.ibb.co/rGSwFjRY/Varhity-Ventures-100-copy-Transparent-2.png",
      alt: "Varhity Ventures Logo"
    },
    {
      name: "Client",
      logo: "https://i.ibb.co/ch1YwkR6/Whats-App-Image-2025-08-26-at-06-36-04.jpg",
      alt: "Client Logo"
    }
  ];

  // Duplicate the array multiple times for seamless infinite scroll
  const extendedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-900/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-purple-600/20 backdrop-blur-xl rounded-full px-6 py-3 border border-purple-500/30 mb-8">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-purple-300 font-medium text-sm tracking-wide">TRUSTED BY</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-white tracking-tight" style={{ fontFamily: '"Fraunces", "Playfair Display", serif' }}>
            Who We've <span className="gradient-text">Worked With</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed" style={{ fontFamily: '"Newsreader", "Crimson Text", serif' }}>
            Founders and teams who chose automation over hiring
          </p>
        </motion.div>

        {/* Rotating Carousel */}
        <div className="relative overflow-hidden mb-16">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Infinite Scrolling Container */}
          <div className="flex animate-infinite-scroll">
            {extendedClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % clients.length) * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 mx-8 group"
                whileHover={{ scale: 1.1, y: -10 }}
              >
                <div className="relative w-40 h-32 flex items-center justify-center">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Transparent Logo Container */}
                  <div className="relative w-full h-28 bg-transparent backdrop-blur-sm border border-gray-600/30 rounded-2xl flex items-center justify-center p-4 group-hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
                    <img
                      src={client.logo}
                      alt={client.alt}
                      className="max-w-full max-h-full object-contain transition-all duration-300 filter brightness-90 group-hover:brightness-110"
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                      onError={(e) => {
                        console.error('Client logo failed to load:', client.logo);
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        // Show fallback text
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="text-white font-bold text-lg">${client.name}</div>`;
                        }
                      }}
                      onLoad={() => {
                        console.log('Client logo loaded successfully:', client.logo);
                      }}
                    />
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            From startups to enterprises, we've helped teams automate their way to growth
          </p>
          
          <GradientButton
            width="280px"
            height="60px"
            onClick={primaryCTA}
          >
            <div className="flex items-center gap-3 group text-lg font-semibold text-white">
              <Bot className="w-5 h-5 drop-shadow-lg" strokeWidth={2} />
              Book Your Discovery Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2} />
            </div>
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
}