import React from 'react';
import { motion } from 'framer-motion';
import { Waves } from '../ui/waves-background';
import { Bot, ArrowRight, Zap, Target, Code } from 'lucide-react';
import GradientButton from '../ui/button-1';

interface InteractiveWavesSectionProps {
  primaryCTA: () => void;
}

export function InteractiveWavesSection({ primaryCTA }: InteractiveWavesSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-950 relative overflow-hidden">
      {/* Interactive Waves Background */}
      <div className="absolute inset-0">
        <Waves
          lineColor="rgba(139, 92, 246, 0.3)"
          backgroundColor="transparent"
          waveSpeedX={0.015}
          waveSpeedY={0.008}
          waveAmpX={45}
          waveAmpY={25}
          friction={0.92}
          tension={0.008}
          maxCursorMove={150}
          xGap={15}
          yGap={40}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-transparent to-gray-950/80"></div>
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-3 bg-purple-600/20 backdrop-blur-xl rounded-full px-8 py-4 border border-purple-500/30 mb-12">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-purple-300 font-medium text-sm tracking-[0.2em] uppercase">INTERACTIVE EXPERIENCE</span>
            </div>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-6xl md:text-7xl font-display font-bold mb-12 text-white tracking-tight leading-tight" 
            style={{ fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif' }}
          >
            Experience the <span className="gradient-text">Future</span> of AI
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed mb-8" 
            style={{ fontFamily: '"Crimson Text", "Cormorant Garamond", Georgia, serif' }}
          >
            Move your cursor to interact with our AI-powered visualization
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-purple-400 max-w-3xl mx-auto font-light mb-16" 
            style={{ fontFamily: '"Merriweather", "Crimson Text", Georgia, serif' }}
          >
            Just like our voice agents adapt to conversations, this visualization responds to your every move
          </motion.p>

          {/* Feature Cards */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                icon: Zap,
                title: "Real-time Response",
                description: "Instant adaptation to user interaction",
                gradient: "from-purple-600 to-violet-600"
              },
              {
                icon: Target,
                title: "Precision Tracking",
                description: "Accurate cursor detection and smooth following",
                gradient: "from-violet-600 to-purple-600"
              },
              {
                icon: Code,
                title: "Advanced Physics",
                description: "Realistic wave dynamics and fluid motion",
                gradient: "from-purple-600 to-pink-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-3xl bg-gray-900/30 backdrop-blur-xl border border-gray-800/30 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
                  
                  {/* Animated Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                      <feature.icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 text-center">
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-light">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <GradientButton
              width="350px"
              height="70px"
              onClick={primaryCTA}
            >
              <div className="flex items-center gap-4 group text-xl font-bold text-white">
                <Bot className="w-6 h-6 drop-shadow-lg" strokeWidth={2.5} />
                Experience Our AI Solutions
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2.5} />
              </div>
            </GradientButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}