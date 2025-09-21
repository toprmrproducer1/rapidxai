import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Zap, Code, Database, Phone, Brain } from 'lucide-react';
import GradientButton from '../ui/button-1';

interface TechStackSectionProps {
  primaryCTA: () => void;
}

export function TechStackSection({ primaryCTA }: TechStackSectionProps) {
  const techStack = [
    {
      name: "Vapi",
      logo: "https://i.ibb.co/DnsNf0g/6566c84fb8540b509c9899f5-18.png",
      alt: "Vapi Logo",
      category: "Voice Infrastructure"
    },
    {
      name: "OpenAI",
      logo: "https://i.ibb.co/cKF0FHfh/1088307881504-5d41c65f1d58ab969c5b-512.png",
      alt: "OpenAI Logo",
      category: "AI Models"
    },
    {
      name: "Supabase",
      logo: "https://i.ibb.co/VcxQQw0X/download-7-copy.png",
      alt: "Supabase Logo",
      category: "Database & Auth"
    },
    {
      name: "Twilio",
      logo: "https://i.ibb.co/jkY6bD6h/download-7.png",
      alt: "Twilio Logo",
      category: "Communications"
    },
    {
      name: "LangChain",
      logo: "https://i.ibb.co/m5p65K70/fc116b3e3ca6d86f7a6b366597a6da47png.png",
      alt: "LangChain Logo",
      category: "AI Orchestration"
    },
    {
      name: "Google Gemini",
      logo: "https://i.ibb.co/1YvPc88B/google-bard-icon-filled-256.png",
      alt: "Google Gemini Logo",
      category: "AI Models"
    },
    {
      name: "LangSmith",
      logo: "https://i.ibb.co/JjFY0jht/Lang-Square.png",
      alt: "LangSmith Logo",
      category: "AI Development"
    },
    {
      name: "n8n",
      logo: "https://i.ibb.co/TMQC8C0Z/n8n-plugin.png",
      alt: "n8n Logo",
      category: "Automation"
    },
    {
      name: "n8n Workflows",
      logo: "https://i.ibb.co/xSgPdcBk/N8n-logo-new-copy-svg.png",
      alt: "n8n Workflows Logo",
      category: "Automation"
    },
    {
      name: "Stripe",
      logo: "https://i.ibb.co/23Hg5xrL/unnamed-1.png",
      alt: "Stripe Logo",
      category: "Payments"
    },
    {
      name: "HubSpot",
      logo: "https://i.ibb.co/rRwj8C8V/unnamed-2.png",
      alt: "HubSpot Logo",
      category: "CRM"
    }
  ];

  const techCategories = [
    {
      title: "Automations",
      tools: "n8n, Make, Zapier",
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Voice infra",
      tools: "Vapi, Twilio",
      icon: Phone,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "LLMs",
      tools: "OpenAI (ChatGPT), Google Gemini / Vertex",
      icon: Brain,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Orchestration & RAG",
      tools: "LangChain, Pinecone, Qdrant",
      icon: Code,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Speech",
      tools: "Whisper, AssemblyAI (STT); ElevenLabs, MiniMax (TTS)",
      icon: Phone,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Product plumbing",
      tools: "Supabase, Postgres, Redis, Stripe, Calendly",
      icon: Database,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-purple-600/5 rounded-full blur-3xl"></div>
      
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
            <span className="text-purple-300 font-medium text-sm tracking-wide">OUR BATTLE STACK</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-white tracking-tight" style={{ fontFamily: '"Fraunces", "Playfair Display", serif' }}>
            Fast to ship. <span className="gradient-text">Hard to break.</span> Easy to scale.
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed mb-8" style={{ fontFamily: '"Newsreader", "Crimson Text", serif' }}>
            Voice + automations + product—stitched together for speed, reliability, and ROI.
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light leading-relaxed" style={{ fontFamily: '"Instrument Serif", serif' }}>
            From telephony to TTS, from calendars to CRM—we pick what works and ditch what doesn't.
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-20"
        >
          {techStack.map((tech, index) => (
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
              <div className="relative p-6 rounded-3xl bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
                
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Logo Container */}
                <div className="relative w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img
                    src={tech.logo}
                    alt={tech.alt}
                    className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                  <div className="absolute -inset-2 bg-purple-500/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Tech Name */}
                <h3 className="text-sm font-medium text-center text-gray-300 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </h3>
                
                {/* Category Badge */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30">
                    {tech.category}
                  </span>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gray-900/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-800/50">
            <div className="grid md:grid-cols-2 gap-6">
              {techCategories.map((category, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 border border-gray-700/30`}>
                    <category.icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {category.tools}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-lg text-gray-300 max-w-5xl mx-auto leading-relaxed mb-8" style={{ fontFamily: '"Instrument Serif", serif' }}>
            We orchestrate with n8n / Make / Zapier, speak through Vapi + Twilio, think with OpenAI (ChatGPT) + Google Gemini/Vertex, 
            build with LangChain, and tie it all to your business in HubSpot/Salesforce, Stripe, Calendly, Pinecone/Qdrant, Supabase/Postgres/Redis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-purple-400 font-medium">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              Rule #1: lower latency, cleaner data, fewer clicks
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
              Rule #2: you own the code and infra
            </span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-300 mb-8">Want this wired to your stack?</p>
          <GradientButton
            width="320px"
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