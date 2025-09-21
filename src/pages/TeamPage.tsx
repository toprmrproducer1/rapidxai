import React from 'react';
import { ArrowRight, Bot, Code, Youtube, Instagram, Twitter, ExternalLink, Award, Target, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { SaveButton } from '@/components/ui/save-button';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { Timeline } from '@/components/ui/timeline';
import ContentSection from '@/components/ui/content-section';

interface TeamPageProps {
  primaryCTA: () => void;
  secondaryCTA: () => void;
}

export function TeamPage({ primaryCTA, secondaryCTA }: TeamPageProps) {
  const achievements = [
    {
      metric: "≈9.7K",
      label: "YouTube Subscribers",
      description: "Growing community of AI builders",
      icon: Youtube,
      color: "text-red-400"
    },
    {
      metric: "7.2K+",
      label: "Instagram Followers", 
      description: "Daily behind-the-scenes content",
      icon: Instagram,
      color: "text-pink-400"
    },
    {
      metric: "50+",
      label: "Tutorial Videos",
      description: "Comprehensive AI automation guides",
      icon: Target,
      color: "text-purple-400"
    },
    {
      metric: "100+",
      label: "Successful Projects",
      description: "Voice agents and MVPs delivered",
      icon: Award,
      color: "text-violet-400"
    }
  ];

  const timeline = [
    {
      milestone: "First AI outbound demos",
      result: "First booked meetings",
      year: "2023"
    },
    {
      milestone: "Early MVPs launched", 
      result: "First paid pilots",
      year: "2024"
    },
    {
      milestone: "Vertical specializations",
      result: "RE/Auto/Restaurants/Clinics focus",
      year: "2024"
    },
    {
      milestone: "RapidXAI founded",
      result: "Scaling AI automation solutions",
      year: "2025"
    }
  ];

  const callExpectations = [
    "Understand your goals and constraints",
    "Define success metrics together", 
    "Outline potential solutions",
    "Discuss next steps and timeline"
  ];

  const expertise = [
    {
      area: "AI Voice Systems",
      description: "24/7 agents that book meetings and qualify leads",
      icon: Bot,
      projects: "50+ voice agents deployed"
    },
    {
      area: "MVP Development", 
      description: "Production-ready products in weeks, not quarters",
      icon: Code,
      projects: "30+ MVPs launched"
    },
    {
      area: "Growth Strategy",
      description: "Data-driven approaches to scaling automation",
      icon: Zap,
      projects: "100+ growth experiments"
    }
  ];

  const timelineData = [
    {
      title: "2023",
      content: (
        <div>
          <p className="text-gray-300 text-xs md:text-sm font-light mb-8 leading-relaxed">
            Started building AI voice automation systems and documenting the journey on YouTube. 
            First successful voice agent deployments for real estate and automotive clients.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=500&fit=crop"
              alt="AI voice automation setup"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(139,92,246,0.15)] border border-purple-500/20"
            />
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop"
              alt="Dashboard analytics"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(139,92,246,0.15)] border border-purple-500/20"
            />
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop"
              alt="Business automation"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(139,92,246,0.15)] border border-purple-500/20"
            />
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=500&fit=crop"
              alt="Team collaboration"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(139,92,246,0.15)] border border-purple-500/20"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <p className="text-gray-300 text-xs md:text-sm font-light mb-8 leading-relaxed">
            Expanded into MVP and micro-SaaS development. Built production-ready systems for multiple industries 
            including restaurants, clinics, and service businesses.
          </p>
          <p className="text-gray-300 text-xs md:text-sm font-light mb-8 leading-relaxed">
            Developed comprehensive automation frameworks that integrate voice AI with business workflows, 
            creating end-to-end solutions that drive measurable ROI.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop"
              alt="MVP development"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(139,92,246,0.15)] border border-purple-500/20"
            />
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=500&fit=crop"
              alt="Restaurant automation"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(139,92,246,0.15)] border border-purple-500/20"
            />
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=500&fit=crop"
              alt="Healthcare automation"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(139,92,246,0.15)] border border-purple-500/20"
            />
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"
              alt="Business growth"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(139,92,246,0.15)] border border-purple-500/20"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-gray-300 text-xs md:text-sm font-light mb-4 leading-relaxed">
            Founded RapidXAI and scaled to enterprise-grade solutions
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              ✅ Enterprise voice agent deployments
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              ✅ Multi-tenant SaaS platforms launched
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              ✅ 99.9% uptime targets achieved
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              ✅ SOC2-ready compliance frameworks
            </div>
            <div className="flex gap-2 items-center text-gray-300 text-xs md:text-sm mb-2">
              ✅ YouTube community of 9.7K+ subscribers
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop"
              alt="Enterprise solutions"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(139,92,246,0.15)] border border-purple-500/20"
            />
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=500&fit=crop"
              alt="Team scaling"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(139,92,246,0.15)] border border-purple-500/20"
            />
            <img
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=500&fit=crop"
              alt="AI technology"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(139,92,246,0.15)] border border-purple-500/20"
            />
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=500&fit=crop"
              alt="Global reach"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(139,92,246,0.15)] border border-purple-500/20"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen relative overflow-hidden font-sans">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950"></div>
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[1200px] h-[800px] bg-purple-600/5 rounded-full blur-3xl"></div>
      
      {/* Hero Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-display font-bold mb-8 tracking-tight leading-tight">
                <span className="gradient-text">Founder-led.</span> Builder-operated. Outcome-obsessed.
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                Shreyas Raj — Founder &amp; Lead Builder
              </p>
              <p className="text-lg text-purple-400 max-w-3xl mx-auto font-light mt-4">
                Turns ambiguous ideas into production systems—fast. Known for ruthless scoping, clean execution, and an allergy to "integration theater."
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <SaveButton
                  text={{
                    idle: "Book Your Discovery Call",
                    saving: "Booking...",
                    saved: "Booked!"
                  }}
                  onClick={primaryCTA}
                  className="text-lg bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 px-8 py-4"
                />
                <SaveButton
                  text={{
                    idle: "$250 Deep-Dive with Shreyas",
                    saving: "Connecting...",
                    saved: "Booked!"
                  }}
                  onClick={secondaryCTA}
                  className="text-lg bg-transparent border-2 border-purple-500 hover:bg-purple-500/10 px-8 py-4"
                />
              </div>
            </div>
            
            {/* Portrait with Enhanced Bio */}
            <div className="relative group">
              <div className="relative">
                <GlowingEffect
                  spread={60}
                  glow={true}
                  disabled={false}
                  proximity={80}
                  inactiveZone={0.1}
                  borderWidth={3}
                  className="rounded-3xl"
                />
                <img 
                  src="https://i.ibb.co/G4BSYvPR/Whats-App-Image-2025-09-15-at-10-35-00.jpg"
                  alt="Shreyas Raj - Founder of RapidXAI"
                  className="w-full max-w-md mx-auto rounded-3xl hover:scale-[1.02] transition-all duration-700 shadow-2xl shadow-purple-500/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-2 border border-purple-500/30">
                    <h3 className="text-lg font-brand font-bold mb-1 gradient-text" style={{ fontFamily: '"Source Serif Pro", "Libre Baskerville", Georgia, serif', letterSpacing: '-0.01em' }}>Shreyas Raj</h3>
                    <p className="text-gray-300 text-xs font-elegant font-light mb-1" style={{ fontFamily: '"Merriweather", "Crimson Text", Georgia, serif' }}>Founder & AI Systems Builder</p>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1 font-premium" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                        <Youtube className="w-4 h-4" />
                        9.7K
                      </span>
                      <span className="flex items-center gap-1 font-premium" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                        <Instagram className="w-4 h-4" />
                        7.2K
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Bio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p className="text-xl font-light">
                Founder & operator of RapidXAI; public journey documented on YouTube @AIwithShreyasRaj (≈9.7K subscribers).
              </p>
              <p>
                Creator of hands-on playbooks for AI voice SDRs, receptionists, and micro-SaaS validation. 
                Building in public and sharing real implementations that drive revenue.
              </p>
              <p>
                From first demos to scaling systems across Real Estate, Automotive, Restaurants, and Clinics—
                focused on ROI-driven automation that pays for itself in weeks, not quarters.
              </p>
            </div>
            
            <div className="space-y-6">
              {expertise.map((item, index) => (
                <div key={index} className="glossy-card p-6 group hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-xl border border-purple-500/20 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-semibold mb-2 text-white">{item.area}</h3>
                      <p className="text-gray-300 mb-2 font-light">{item.description}</p>
                      <p className="text-sm text-purple-400 font-medium">{item.projects}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <Timeline data={timelineData} />

      {/* Content Ecosystem Section */}
      <ContentSection />

      {/* Achievement Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">By the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="glossy-card p-8 text-center group hover:scale-[1.02] transition-all duration-300">
                <achievement.icon className={`w-12 h-12 ${achievement.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                <div className="text-3xl font-display font-bold mb-2 text-white">{achievement.metric}</div>
                <h3 className="text-lg font-semibold mb-2 text-purple-400">{achievement.label}</h3>
                <p className="text-gray-400 text-sm font-light">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Journey Milestones</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
                  <span className="text-white font-bold text-lg">{item.year}</span>
                </div>
                <div className="flex-1">
                  <div className="glossy-card p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-lg text-white">{item.milestone}</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-400 font-medium">{item.result}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Panel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glossy-card p-12">
            <h2 className="text-3xl font-bold text-center mb-6">What to Expect in Your Call</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {callExpectations.map((expectation, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-300 font-light">{expectation}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={primaryCTA}
                className="px-12 py-5 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 rounded-2xl text-white font-bold transition-all duration-300 flex items-center gap-3 group shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 hover:scale-105"
              >
                <Bot className="w-5 h-5" />
                Book Your Discovery Call
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={secondaryCTA}
                className="premium-button-secondary text-lg flex items-center gap-3 mx-auto group font-brand"
                style={{ fontFamily: '"Source Serif Pro", serif' }}
              >
                <Code className="w-5 h-5" />
                $250 Deep-Dive with Shreyas
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}