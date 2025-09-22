import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, ArrowRight, Menu, X } from 'lucide-react';
import { Logo } from './logo';
import GradientButton from './button-1';
import ShaderBackground from './shader-background';

interface FeatureItemProps {
  name: string;
  value: string;
  position: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ name, value, position }) => {
  return (
    <div className={`absolute ${position} z-10 group transition-all duration-300 hover:scale-110`}>
      <div className="flex items-center gap-2 relative">
        <div className="relative">
          <div className="w-2 h-2 bg-white rounded-full group-hover:animate-pulse"></div>
          <div className="absolute -inset-1 bg-white/20 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="text-white relative">
          <div className="font-medium group-hover:text-white transition-colors duration-300">{name}</div>
          <div className="text-white/70 text-sm group-hover:text-white/70 transition-colors duration-300">{value}</div>
          <div className="absolute -inset-2 bg-white/10 rounded-lg blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>
      </div>
    </div>
  );
};

interface HeroSectionProps {
  primaryCTA: () => void;
  secondaryCTA: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ primaryCTA, secondaryCTA }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative w-full bg-black text-white overflow-hidden">
      {/* Shader Background */}
      <ShaderBackground />
      
      {/* Main container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full z-200 top-[4%] relative"
        >
          <motion.div variants={itemVariants}>
            <FeatureItem name="AI Voice" value="24/7 agents" position="left-0 sm:left-10 top-24" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureItem name="MVP/SaaS" value="weeks not quarters" position="left-1/4 top-8" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureItem name="Production" value="ready systems" position="right-1/4 top-8" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureItem name="ROI-focused" value="custom quotes" position="right-0 sm:right-10 top-24" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-30 flex flex-col items-center text-center max-w-5xl mx-auto pt-28"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-light mb-8 tracking-tight leading-[0.85] drop-shadow-2xl text-white"
            style={{ fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif', letterSpacing: '-0.03em', fontWeight: 300 }}
          >
            Build Faster.
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-light bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent mb-12 tracking-tight leading-[0.85] drop-shadow-lg"
            style={{ fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif', letterSpacing: '-0.03em', fontWeight: 300 }}
          >
            Sell Smarter.
          </motion.h2>

          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-light text-gray-200 mb-12 tracking-tight leading-[0.85] drop-shadow-lg"
            style={{ fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif', letterSpacing: '-0.03em', fontWeight: 300 }}
          >
            Sleep Better.
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 mb-8 max-w-4xl text-lg md:text-xl leading-relaxed font-elegant font-light tracking-wide drop-shadow-sm"
            style={{ fontFamily: '"Crimson Text", "Cormorant Garamond", Georgia, serif', lineHeight: '1.8', letterSpacing: '0.01em' }}
          >
            AI Voice agents + MVP/Micro-SaaS. We turn "we should" into "we shipped."
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 mb-16 max-w-3xl text-base md:text-lg leading-relaxed font-elegant font-light italic drop-shadow-sm"
            style={{ fontFamily: '"Crimson Text", "Cormorant Garamond", Georgia, serif', lineHeight: '1.9', letterSpacing: '0.005em' }}
          >
            Worst case: clarity. Best case: compound advantage.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 mb-20"
          >
            <GradientButton
              width="280px"
              height="56px"
              onClick={primaryCTA}
            >
              <div className="flex items-center gap-2 text-base font-semibold text-white">
                <Bot className="w-6 h-6 drop-shadow-lg" strokeWidth={2} />
                <span>Book Discovery Call</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2} />
              </div>
            </GradientButton>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};