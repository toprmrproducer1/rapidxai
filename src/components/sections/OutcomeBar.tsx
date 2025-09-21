import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Clock, Users, Target, Zap } from 'lucide-react';

export function OutcomeBar() {
  const outcomes = [
    {
      title: "3x More Meetings",
      subtitle: "same team size",
      icon: Users,
      metric: "3x",
      description: "qualified meetings",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Never Miss Calls",
      subtitle: "24/7 availability",
      icon: Clock,
      metric: "100%",
      description: "answer rate",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Follow-ups Work",
      subtitle: "automated",
      icon: Target,
      metric: "85%",
      description: "callback success",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      title: "Fast MVPs",
      subtitle: "weeks not quarters",
      icon: Zap,
      metric: "3-6",
      description: "weeks to live",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Strong ROI",
      subtitle: "first quarter",
      icon: TrendingUp,
      metric: "300%",
      description: "average ROI",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-600/5 via-violet-600/10 to-purple-600/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf610_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf610_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-violet-600/20 backdrop-blur-xl rounded-full px-6 py-3 border border-purple-500/30 mb-8">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-purple-300 font-medium text-sm tracking-wide">PROVEN RESULTS</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-white tracking-tight leading-tight">
            <span className="gradient-text">Results</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed px-4">
            Real outcomes from clients who automated instead of hiring.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-4"
        >
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -4, 
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative"
            >
              {/* Premium Card Container */}
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
                
                {/* Animated Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${outcome.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                
                {/* Icon Container */}
                <div className="relative mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${outcome.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <outcome.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <div className={`absolute -inset-1 bg-gradient-to-br ${outcome.gradient} rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                </div>

                {/* Metric Display */}
                <div className="mb-4">
                  <div className="text-2xl sm:text-3xl font-display font-bold text-white mb-1 group-hover:scale-105 transition-transform duration-300">
                    {outcome.metric}
                  </div>
                  <div className={`text-xs font-medium bg-gradient-to-r ${outcome.gradient} bg-clip-text text-transparent`}>
                    {outcome.description}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-purple-200 transition-colors duration-300 leading-tight">
                    {outcome.title}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-light">
                    {outcome.subtitle}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${outcome.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>

              {/* Connection Lines (for larger screens) */}
              {index < outcomes.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-purple-500/50 to-transparent z-10"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl px-8 py-4 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium text-sm">LIVE RESULTS</span>
            </div>
            <div className="w-px h-6 bg-gray-600"></div>
            <p className="text-gray-300 font-light">
              Ready to see these outcomes for your business?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}