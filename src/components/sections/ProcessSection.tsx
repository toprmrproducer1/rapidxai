import React from 'react';
import { Bot, Code, ArrowRight, Target, Star, Rocket, TrendingUp, Zap } from 'lucide-react';
import { StarBorder } from '../ui/star-border';
import { motion } from 'framer-motion';
import GradientButton from '../ui/button-1';

interface ProcessSectionProps {
  primaryCTA: () => void;
  secondaryCTA: () => void;
}

export function ProcessSection({ primaryCTA, secondaryCTA }: ProcessSectionProps) {
  const phases = [
    { 
      step: "01", 
      title: "Discover", 
      description: "Goals, users, jobs-to-be-done. We define success and economics, not just features.", 
      color: "from-purple-600 to-violet-600",
      icon: Target
    },
    { 
      step: "02", 
      title: "Design", 
      description: "Conversation maps or product flows that remove friction. Scripts that sell. Metrics that matter.", 
      color: "from-violet-600 to-purple-600",
      icon: Star
    },
    { 
      step: "03", 
      title: "Build", 
      description: "Tight sprints. Early demos. Your stack, your rules. No \"integration theater.\"", 
      color: "from-purple-600 to-pink-600",
      icon: Code
    },
    { 
      step: "04", 
      title: "Deploy & Learn", 
      description: "Ship, instrument, review weekly, iterate. Keep what converts, cut what doesn't.", 
      color: "from-pink-600 to-purple-600",
      icon: Rocket
    }
  ];

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="process" className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-900/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
        <div className="text-center mb-16 px-4">
          <div className="inline-flex items-center gap-3 bg-purple-600/20 backdrop-blur-xl rounded-full px-6 py-3 border border-purple-500/30 mb-8">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-purple-300 font-medium text-sm tracking-wide">HOW WE WORK</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6 text-white tracking-tight" style={{ fontFamily: '"Fraunces", "Playfair Display", serif' }}>
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed" style={{ fontFamily: '"Newsreader", "Crimson Text", serif' }}>
          Ship. Measure. Iterate.
          </p>
        </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {phases.map((phase, index) => (
            <motion.div 
              key={index} 
              className="relative group text-center"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Enhanced Card Container */}
              <div className="relative h-full p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
                
                {/* Animated Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Icon Container */}
                <div className="relative mb-6 sm:mb-8">
                  <div className={`w-16 sm:w-20 h-16 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                    <phase.icon className="w-8 sm:w-10 h-8 sm:h-10 text-white" strokeWidth={2} />
                  </div>
                  <div className={`absolute -inset-2 bg-gradient-to-br ${phase.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-gray-900">{phase.step}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 sm:space-y-4 text-center">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-purple-200 transition-colors duration-300" style={{ fontFamily: '"Fraunces", serif' }}>
                    {phase.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed font-light" style={{ fontFamily: '"Newsreader", serif' }}>
                    {phase.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${phase.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
              
              {/* Connection Lines (for larger screens) */}
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-purple-500/50 to-transparent z-10"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}