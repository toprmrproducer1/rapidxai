import React, { useState, useEffect } from 'react';
import { ArrowRight, Bot, Youtube, Instagram, Twitter, ExternalLink, Play, Heart, MessageCircle, TrendingUp, Users, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { SaveButton } from '@/components/ui/save-button';
import { RainbowButton } from '@/components/ui/rainbow-button';

interface SocialsPageProps {
  primaryCTA: () => void;
}

export function SocialsPage({ primaryCTA }: SocialsPageProps) {
  const [youtubeCount, setYoutubeCount] = useState(0);
  const [instagramCount, setInstagramCount] = useState(0);

  useEffect(() => {
    const animateCounter = (target: number, setter: (value: number) => void) => {
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 20);
    };

    animateCounter(9700, setYoutubeCount);
    animateCounter(7200, setInstagramCount);
  }, []);

  const channels = [
    {
      platform: "YouTube",
      handle: "@AIwithShreyasRaj",
      description: "Deep dives, demos, and full tutorials on AI voice agents and MVP development.",
      count: youtubeCount,
      countLabel: "subscribers",
      icon: Youtube,
      color: "text-red-400",
      bgGradient: "from-red-600/20 via-red-500/10 to-transparent",
      borderColor: "border-red-500/30",
      link: "https://youtube.com/@AIwithShreyasRaj",
      buttonText: "Subscribe on YouTube",
      stats: "≈9.7K subscribers • 50+ tutorials"
    },
    {
      platform: "Instagram", 
      handle: "@shreyasrajthe1st",
      description: "Daily clips, founder routines, and quick wins from building in public.",
      count: instagramCount,
      countLabel: "followers",
      icon: Instagram,
      color: "text-pink-400",
      bgGradient: "from-pink-600/20 via-purple-500/10 to-transparent",
      borderColor: "border-pink-500/30",
      link: "https://instagram.com/shreyasrajthe1st",
      buttonText: "Follow on Instagram",
      stats: "7.2K+ followers • Daily content"
    },
    {
      platform: "X (Twitter)",
      handle: "@TopR9595",
      description: "Live thoughts, threads on AI automation, and real-time building updates.",
      count: null,
      countLabel: "Active Daily",
      icon: Twitter,
      color: "text-blue-400",
      bgGradient: "from-blue-600/20 via-blue-500/10 to-transparent", 
      borderColor: "border-blue-500/30",
      link: "https://x.com/TopR9595",
      buttonText: "Follow on X",
      stats: "Active daily • Industry insights"
    }
  ];

  const featuredContent = [
    {
      type: "video",
      title: "I Got Indian Phone Numbers for AI Agents (After Spending ₹2L+)",
      platform: "YouTube",
      thumbnail: "https://i.ytimg.com/vi/b0bPg_SL4tM/hqdefault.jpg",
      views: "15K views",
      duration: "15:42",
      videoId: "b0bPg_SL4tM",
      description: "Complete walkthrough of getting working phone numbers in India for AI voice agents."
    },
    {
      type: "video",
      title: "Setup AI Voice Agent with India Phone Number — Ready in Minutes",
      platform: "YouTube",
      thumbnail: "https://i.ytimg.com/vi/4lCMadDNhFU/hqdefault.jpg",
      views: "8.2K views",
      duration: "12:30",
      videoId: "4lCMadDNhFU",
      description: "Fast setup guide perfect for getting started with AI voice agents."
    },
    {
      type: "video",
      title: "AI Cold Calling & SDR System Demo | 16-YO Makes $10K",
      platform: "YouTube",
      thumbnail: "https://i.ytimg.com/vi/qcbnxzsou4w/hqdefault.jpg",
      views: "22K views",
      duration: "18:25",
      videoId: "qcbnxzsou4w",
      description: "End-to-end outbound system that books meetings and generates revenue."
    },
    {
      type: "post",
      title: "Daily routine: Ship → Measure → Iterate",
      platform: "Instagram", 
      thumbnail: "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?w=400&h=400&fit=crop",
      likes: "234 likes",
      duration: null,
      description: "Behind-the-scenes look at the founder routine that drives results."
    },
    {
      type: "video",
      title: "Build an AI Agency Website in 60 Seconds (3 Prompts)",
      platform: "YouTube",
      thumbnail: "https://i.ytimg.com/vi/p63-UK3txHs/hqdefault.jpg",
      views: "5.1K views",
      duration: "1:00",
      videoId: "p63-UK3txHs",
      description: "Quick MVP demonstration for technical audience."
    },
    {
      type: "thread",
      title: "Why most AI automations fail (and how to fix them)",
      platform: "X",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop",
      replies: "47 replies",
      duration: null,
      description: "Thread breaking down common AI automation mistakes and solutions."
    }
  ];

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const socialProof = [
    "Booked tours up 2x in 3 weeks",
    "Pilot validated in 14 days", 
    "Revenue up 300% first quarter",
    "24/7 coverage with zero missed calls",
    "Lead qualification improved 5x",
    "Customer support costs down 60%"
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen relative overflow-hidden font-sans">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950"></div>
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[1200px] h-[800px] bg-purple-600/5 rounded-full blur-3xl"></div>
      
      {/* Hero Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-display font-bold mb-8 tracking-tight leading-tight">
            Follow the <span className="gradient-text">builds</span>. Steal the playbooks.
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Zero fluff. Real demos. Come say hi.
          </p>
        </div>
      </section>

      {/* Enhanced Channel Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 tracking-tight">
            Connect on <span className="gradient-text">Social</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {channels.map((channel, index) => (
              <div key={index} className="glossy-card p-8 text-center group hover:scale-[1.02] transition-all duration-500">
                  <div className="relative">
                    <channel.icon className={`w-20 h-20 ${channel.color} mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg`} strokeWidth={1.5} />
                    <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <h3 className="text-3xl font-display font-bold mb-3 text-white" style={{ fontFamily: '"Playfair Display", serif' }}>{channel.platform}</h3>
                  <p className="text-gray-400 mb-3 font-mono text-lg" style={{ fontFamily: '"JetBrains Mono", monospace' }}>{channel.handle}</p>
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg font-elegant" style={{ fontFamily: '"Merriweather", serif' }}>{channel.description}</p>
                
                  <div className="mb-8">
                    {channel.count !== null ? (
                      <div>
                        <div className="text-4xl font-display font-bold text-white mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
                          {channel.count.toLocaleString()}
                        </div>
                        <div className="text-lg text-gray-400 font-elegant" style={{ fontFamily: '"Merriweather", serif' }}>{channel.countLabel}</div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xl font-display font-semibold text-green-400" style={{ fontFamily: '"Playfair Display", serif' }}>{channel.countLabel}</span>
                      </div>
                    )}
                    <p className="text-sm text-gray-500 mt-2 font-elegant" style={{ fontFamily: '"Merriweather", serif' }}>{channel.stats}</p>
                  </div>
                
                  <RainbowButton
                    onClick={() => {
                      window.open(channel.link, '_blank');
                    }}
                    size="md"
                  >
                    {channel.buttonText}
                  </RainbowButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}>Latest Content</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredContent.map((content, index) => (
              <div 
                key={index} 
                className="glossy-card group overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
                onClick={() => content.videoId && setSelectedVideo(content.videoId)}
              >
                <div className="relative">
                  <img 
                    src={content.thumbnail}
                    alt={content.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  
                  {content.type === 'video' && (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-red-600/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/20">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white">
                        {content.duration}
                      </div>
                    </>
                  )}
                  
                  <div className="absolute top-2 left-2">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      content.platform === 'YouTube' ? 'bg-red-600/80 text-white' :
                      content.platform === 'Instagram' ? 'bg-pink-600/80 text-white' :
                      'bg-blue-600/80 text-white'
                    }`}>
                      {content.platform}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl mb-4 text-white leading-tight" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}>{content.title}</h3>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-2">{content.description}</p>
                  <div className="text-sm text-gray-500">
                    {content.views || content.likes || content.replies}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Community Wins</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {socialProof.map((quote, index) => (
              <div key={index} className="glossy-card p-6 text-center group hover:scale-[1.02] transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <p className="text-gray-300 font-medium">"{quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900/95 backdrop-blur-2xl rounded-2xl overflow-hidden max-w-4xl w-full border border-gray-800/50 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-800/50">
              <h3 className="font-display font-semibold text-white">Video Player</h3>
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
            <div className="p-6 text-center bg-gray-900/50">
              <p className="text-gray-300 mb-4 font-light">Want this working for you?</p>
              <button
                onClick={() => {
                  setSelectedVideo(null);
                  primaryCTA();
                }}
                className="glossy-button flex items-center justify-center gap-2 mx-auto group text-white"
              >
                <Bot className="w-5 h-5" />
                Book Your Discovery Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glossy-card p-12">
            <h2 className="text-3xl font-bold mb-6">
              Let's build something that sells itself
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to turn your ideas into revenue-generating systems?
            </p>
            <button
              onClick={primaryCTA}
              className="premium-button text-lg flex items-center gap-3 mx-auto group"
            >
              <Bot className="w-5 h-5" />
              Book Your Discovery Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}