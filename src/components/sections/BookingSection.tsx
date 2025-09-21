import React from 'react';
import { CheckCircle, Calendar, ArrowRight, Bot, Phone, Clock, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientButton from '../ui/button-1';

interface BookingSectionProps {
  primaryCTA: () => void;
  secondaryCTA: () => void;
}

export function BookingSection({ primaryCTA, secondaryCTA }: BookingSectionProps) {
  const features = [
    "Understand your current challenges and goals",
    "Identify automation opportunities in your workflow", 
    "Discuss MVP validation strategies for your market",
    "Outline potential solutions and realistic timelines",
    "Define success metrics and ROI expectations"
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
    <section id="booking" className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-purple-600/5 via-violet-600/10 to-purple-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-violet-600/20 backdrop-blur-xl rounded-full px-8 py-4 border border-purple-500/30 mb-12">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 font-medium text-sm tracking-[0.2em] uppercase">READY TO START</span>
            </div>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-6xl md:text-7xl font-display font-bold mb-12 text-white tracking-tight leading-tight" 
            style={{ fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif' }}
          >
            Ready to turn <span className="gradient-text">"we should automate this"</span> into <span className="gradient-text">"it's already handled"</span>?
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto font-light leading-relaxed mb-8" 
            style={{ fontFamily: '"Crimson Text", "Cormorant Garamond", Georgia, serif' }}
          >
            Book a 30-minute discovery call or start with a $250 Deep-Dive with Shreyas.
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-purple-400 max-w-3xl mx-auto font-light italic mb-16" 
            style={{ fontFamily: '"Merriweather", "Crimson Text", Georgia, serif' }}
          >
            Worst case: clarity. Best case: compound advantage.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-display font-bold mb-8 text-white" style={{ fontFamily: '"Playfair Display", serif' }}>
              What to Expect in Your Call
            </h3>
            
            <div className="space-y-6 mb-12">
              {features.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="relative p-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-violet-600/20 hover:from-purple-600/30 hover:to-violet-600/30 transition-all duration-300 border border-purple-500/20 group-hover:border-purple-500/40 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" strokeWidth={2} />
                    <div className="absolute -inset-1 bg-purple-500/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <p className="text-lg text-gray-300 group-hover:text-gray-200 transition-colors font-light leading-relaxed" style={{ fontFamily: '"Merriweather", serif' }}>
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-2xl p-6 border border-purple-500/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-medium">Direct Contact</span>
              </div>
              <p className="text-gray-300 mb-4 font-light">
                Prefer to call directly? Reach Shreyas at:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+919307512816"
                  className="flex items-center gap-3 text-lg text-white hover:text-purple-300 transition-colors font-mono bg-gray-800/50 rounded-xl px-4 py-3 hover:bg-gray-700/50"
                >
                  <Phone className="w-5 h-5" />
                  +91 9307512816
                </a>
                <a 
                  href="https://wa.me/919307512816"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg text-white hover:text-green-300 transition-colors font-mono bg-gray-800/50 rounded-xl px-4 py-3 hover:bg-gray-700/50"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Simplified Booking */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/50 hover:border-purple-500/50 transition-all duration-500 overflow-hidden group">
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-3 text-white group-hover:text-purple-200 transition-colors duration-300" style={{ fontFamily: '"Playfair Display", serif' }}>
                    Discovery Call
                  </h3>
                  <p className="text-gray-300 text-lg font-light" style={{ fontFamily: '"Merriweather", serif' }}>
                    30 minutes • Free consultation
                  </p>
                </div>

                <div className="space-y-6">
                  <GradientButton
                    width="100%"
                    height="60px"
                    onClick={primaryCTA}
                  >
                    <div className="flex items-center justify-center gap-3 group text-lg font-semibold text-white">
                      <Bot className="w-6 h-6" strokeWidth={2} />
                      Book Discovery Call
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                    </div>
                  </GradientButton>

                  <div className="text-center">
                    <p className="text-gray-400 mb-4 font-light">
                      Prefer a founder session?
                    </p>
                    <button
                      onClick={secondaryCTA}
                      className="text-purple-400 hover:text-purple-300 transition-colors font-medium underline decoration-purple-400/50 hover:decoration-purple-300/50"
                    >
                      $250 Deep-Dive with Shreyas
                    </button>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700/30">
                  <div className="flex items-center justify-center gap-3 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>Usually responds within 2 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}