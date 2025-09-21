import React, { useState } from 'react';
import { Search, Play, Clock, Users, Target, ArrowRight, Bot, Phone, Rocket, Calendar, Globe, Car, Building, Utensils, FileText, Code, Shield, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientButton from '../components/ui/button-1';

interface ContentLibraryPageProps {
  primaryCTA: () => void;
}

interface Service {
  id: string;
  title: string;
  oneLiner: string;
  timeline: string;
  plan: string;
  icon: React.ElementType;
  category: 'voice' | 'mvp' | 'automation';
  gradient: string;
}

interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  duration?: string;
  category: 'voice' | 'mvp' | 'demo' | 'tutorial';
}

const services: Service[] = [
  {
    id: 'inbound-receptionist',
    title: 'AI Receptionist',
    oneLiner: 'Never miss a call. Answer, qualify, book.',
    timeline: '2 weeks',
    plan: 'Launch',
    icon: Phone,
    category: 'voice',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'outbound-callbacks',
    title: 'Voice SDR',
    oneLiner: 'Instant callbacks. Revive cold leads.',
    timeline: '3 weeks',
    plan: 'Scale',
    icon: Target,
    category: 'voice',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'mvp-v0',
    title: 'MVP Launch',
    oneLiner: 'Proof in weeks. Revenue in months.',
    timeline: '3 weeks',
    plan: 'Launch',
    icon: Rocket,
    category: 'mvp',
    gradient: 'from-purple-500 to-violet-500'
  },
  {
    id: 'product-v1',
    title: 'SaaS Platform',
    oneLiner: 'Billing. Roles. Scale.',
    timeline: '6 weeks',
    plan: 'Scale',
    icon: Code,
    category: 'mvp',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'multilingual-agent',
    title: 'Global Voice',
    oneLiner: 'Hindi. English. Hinglish.',
    timeline: '2 weeks',
    plan: 'Scale',
    icon: Globe,
    category: 'voice',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 'enterprise-suite',
    title: 'Enterprise',
    oneLiner: 'Multi-tenant. Compliant. Bulletproof.',
    timeline: '10+ weeks',
    plan: 'Enterprise',
    icon: Shield,
    category: 'mvp',
    gradient: 'from-indigo-500 to-blue-500'
  }
];

const videos: Video[] = [
  {
    id: 'b0bPg_SL4tM',
    title: 'India Phone Numbers for AI',
    description: 'Complete setup guide',
    youtubeId: 'b0bPg_SL4tM',
    duration: '15:42',
    category: 'tutorial'
  },
  {
    id: '4lCMadDNhFU',
    title: 'AI Agent Setup',
    description: 'Ready in minutes',
    youtubeId: '4lCMadDNhFU',
    duration: '12:30',
    category: 'tutorial'
  },
  {
    id: 'qcbnxzsou4w',
    title: 'Cold Calling Demo',
    description: '$10K results',
    youtubeId: 'qcbnxzsou4w',
    duration: '18:25',
    category: 'demo'
  },
  {
    id: 'p63-UK3txHs',
    title: 'AI Agency in 60s',
    description: '3 prompts only',
    youtubeId: 'p63-UK3txHs',
    duration: '1:00',
    category: 'tutorial'
  }
];

export function ContentLibraryPage({ primaryCTA }: ContentLibraryPageProps) {
  const [activeTab, setActiveTab] = useState<'services' | 'videos'>('services');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.oneLiner.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'voice', label: 'Voice' },
    { id: 'mvp', label: 'MVP' },
    { id: 'automation', label: 'Auto' },
    { id: 'demo', label: 'Demo' },
    { id: 'tutorial', label: 'Guide' }
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
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[1200px] h-[800px] bg-purple-600/5 rounded-full blur-3xl"></div>
        
        <motion.div 
          className="max-w-7xl mx-auto relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <div className="inline-flex items-center gap-3 bg-purple-600/20 backdrop-blur-xl rounded-full px-6 py-3 border border-purple-500/30 mb-8">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 font-medium text-sm tracking-wide">KNOWLEDGE BASE</span>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-extralight mb-8 tracking-tighter leading-[0.85]" 
                style={{ fontFamily: '"Fraunces", "Playfair Display", serif', fontWeight: 200 }}>
              <span className="gradient-text">Playbooks</span> & Insights
            </h1>
            <p className="text-3xl md:text-4xl text-gray-300 max-w-3xl mx-auto leading-tight font-extralight mb-8" 
               style={{ fontFamily: '"Newsreader", "Instrument Serif", serif', fontWeight: 200 }}>
              Curated wisdom
            </p>
            <p className="text-xl text-purple-400 max-w-2xl mx-auto font-extralight" 
               style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 200 }}>
              Ship smarter
            </p>
          </motion.div>

          {/* Minimal Tab Navigation */}
          <motion.div className="flex justify-center mb-16" variants={itemVariants}>
            <div className="bg-gray-900/20 backdrop-blur-3xl rounded-full p-1 border border-gray-800/30">
              <div className="flex items-center">
                <button
                  onClick={() => setActiveTab('services')}
                  className={`px-8 py-4 rounded-full transition-all duration-500 font-extralight text-lg tracking-wide ${
                    activeTab === 'services'
                      ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-2xl shadow-purple-500/40'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  style={{ fontFamily: '"Fraunces", serif', fontWeight: 300 }}
                >
                  Services
                </button>
                <button
                  onClick={() => setActiveTab('videos')}
                  className={`px-8 py-4 rounded-full transition-all duration-500 font-extralight text-lg tracking-wide ${
                    activeTab === 'videos'
                      ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-2xl shadow-purple-500/40'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                  style={{ fontFamily: '"Fraunces", serif', fontWeight: 300 }}
                >
                  Videos
                </button>
              </div>
            </div>
          </motion.div>

          {/* Minimal Search */}
          <motion.div className="max-w-2xl mx-auto mb-16" variants={itemVariants}>
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-5 bg-gray-900/20 border border-gray-800/20 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/30 focus:ring-2 focus:ring-purple-500/10 backdrop-blur-xl text-lg font-extralight"
                style={{ fontFamily: '"Instrument Serif", serif' }}
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full text-sm font-extralight transition-all duration-300 tracking-wide ${
                    selectedCategory === category.id
                      ? 'bg-purple-600/30 text-white border border-purple-500/50'
                      : 'bg-gray-800/20 text-gray-400 hover:bg-gray-700/20 hover:text-white backdrop-blur-xl border border-gray-700/20'
                  }`}
                  style={{ fontFamily: '"Fraunces", serif', fontWeight: 300 }}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Content Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'services' ? (
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="group relative"
                >
                  <div className="relative h-full p-8 rounded-3xl bg-gray-900/30 backdrop-blur-xl border border-gray-800/30 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
                    
                    {/* Animated Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                    
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                      </div>
                      <div className={`absolute -inset-2 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-extralight mb-3 text-white group-hover:text-purple-200 transition-colors duration-300 tracking-tight leading-tight" 
                            style={{ fontFamily: '"Fraunces", serif', fontWeight: 200 }}>
                          {service.title}
                        </h3>
                        <p className="text-xl text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed font-extralight" 
                           style={{ fontFamily: '"Newsreader", serif', fontWeight: 200 }}>
                          {service.oneLiner}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-purple-400" />
                          <span className="text-sm text-purple-400 font-light">{service.timeline}</span>
                        </div>
                        <span className={`text-xs px-3 py-1.5 rounded-full font-light tracking-wide ${
                          service.plan === 'Launch' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                          service.plan === 'Scale' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                          'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        }`}>
                          {service.plan}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.03,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedVideo(video.youtubeId)}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-gray-900/30 backdrop-blur-xl border border-gray-800/30 hover:border-purple-500/50 transition-all duration-500">
                    <div className="relative">
                      <img
                        src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-purple-600/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/20">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>
                      {video.duration && (
                        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white font-light">
                          {video.duration}
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="font-extralight text-xl mb-2 text-white leading-tight group-hover:text-purple-200 transition-colors duration-300" 
                          style={{ fontFamily: '"Fraunces", serif', fontWeight: 200 }}>
                        {video.title}
                      </h3>
                      <p className="text-gray-400 text-sm font-extralight leading-relaxed" 
                         style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 200 }}>
                        {video.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-gray-900/95 backdrop-blur-2xl rounded-3xl overflow-hidden max-w-4xl w-full border border-gray-800/50 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
              <h3 className="font-extralight text-xl text-white" style={{ fontFamily: '"Fraunces", serif' }}>Video Player</h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800/50 rounded-lg"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-8 text-center bg-gray-900/50">
              <p className="text-gray-300 mb-6 font-extralight text-lg" style={{ fontFamily: '"Instrument Serif", serif' }}>
                Want this working for you?
              </p>
              <GradientButton
                width="280px"
                height="60px"
                onClick={() => {
                  setSelectedVideo(null);
                  primaryCTA();
                }}
              >
                <div className="flex items-center gap-3 group text-lg font-light text-white">
                  <Bot className="w-5 h-5" />
                  Book Discovery Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </GradientButton>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Floating CTA */}
      <motion.div 
        className="fixed bottom-8 right-8 z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <GradientButton
          width="200px"
          height="60px"
          onClick={primaryCTA}
        >
          <div className="flex items-center gap-2 text-white font-light">
            <Bot className="w-5 h-5" />
            Book Call
            <ArrowRight className="w-4 h-4" />
          </div>
        </GradientButton>
      </motion.div>
    </div>
  );
}