import React from 'react';
import { Phone, Rocket, Target, Zap, Users, Clock, Star, Shield, TrendingUp, ArrowRight, Bot, Code, Play } from 'lucide-react';
import { AnimatedCard, CardBody, CardDescription, CardTitle, CardVisual, Visual2 } from '../ui/animated-card-diagram';
import { GlowingEffect } from '../ui/glowing-effect';
import { SaveButton } from '../ui/save-button';
import { EvervaultCard } from '../ui/evervault-card';

interface ServicesSectionProps {
  activeService: 'voice' | 'mvp';
  setActiveService: (service: 'voice' | 'mvp') => void;
  scrollToBooking: () => void;
}

export function ServicesSection({ activeService, setActiveService, scrollToBooking }: ServicesSectionProps) {
  return (
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-violet-600/5"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-white tracking-tight">
            Our <span className="gradient-text">Core Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Two pillars. One goal: revenue momentum.
          </p>
        </div>
        
        {/* Service Toggle */}
        <div className="flex justify-center mb-20">
          <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-3 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
            <GlowingEffect
              spread={60}
              glow={true}
              disabled={false}
              proximity={80}
              inactiveZone={0.1}
              borderWidth={2}
            />
            <div className="flex items-center">
              <button
                onClick={() => setActiveService('voice')}
                className={`flex items-center gap-4 px-8 py-4 rounded-2xl transition-all duration-500 font-display font-semibold text-lg ${
                  activeService === 'voice'
                    ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-2xl shadow-purple-500/40 scale-105'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Phone className="w-6 h-6" strokeWidth={2.5} />
                <span className="font-medium">AI Voice Agents</span>
              </button>
              <button
                onClick={() => setActiveService('mvp')}
                className={`flex items-center gap-4 px-8 py-4 rounded-2xl transition-all duration-500 font-display font-semibold text-lg ${
                  activeService === 'mvp'
                    ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-2xl shadow-purple-500/40 scale-105'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Rocket className="w-6 h-6" strokeWidth={2.5} />
                <span className="font-medium">MVP & Micro-SaaS</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className={`transition-all duration-700 ${activeService === 'voice' ? 'opacity-100 transform-none' : 'opacity-0 absolute transform translate-x-8'}`}>
            {activeService === 'voice' && (
              <>
                <div className="relative">
                  <div className="relative w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-purple-500/40">
                    <Phone className="w-8 h-8 text-white" strokeWidth={2.5} />
                    <div className="absolute -inset-2 bg-purple-500/20 rounded-3xl animate-pulse"></div>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 tracking-tight leading-tight">
                    AI Voice Agents <span className="gradient-text">(Inbound + Outbound)</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-light">
                    Your always-on receptionist + SDR—polite, persistent, and impossible to "forget to follow up."
                  </p>
                  
                  <div className="space-y-6 mb-12">
                    {[
                      { icon: Target, text: "Inbound that never misses: greet → qualify → route → schedule" },
                      { icon: Phone, text: "Outbound that performs: targeted campaigns, callbacks, re-engagement" },
                      { icon: Zap, text: "Follow-ups on rails: multistep cadences across phone/SMS/WhatsApp/email" },
                      { icon: Users, text: "CRM-native: notes, statuses, tasks—no data dead-ends" },
                      { icon: Clock, text: "Human-grade: natural dialogue, context memory, graceful handoff to your team" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 group">
                        <div className="relative p-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-violet-600/20 hover:from-purple-600/30 hover:to-violet-600/30 transition-all duration-300 border border-purple-500/20 group-hover:border-purple-500/40">
                          <item.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" strokeWidth={2.5} />
                          <div className="absolute -inset-1 bg-purple-500/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <p className="text-lg text-gray-300 group-hover:text-gray-200 transition-colors font-light leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <SaveButton
                    text={{
                      idle: "Go-live speed: typically 7–14 days • See it in action on your discovery call",
                      saving: "Connecting...",
                      saved: "Booked!"
                    }}
                    onClick={scrollToBooking}
                    className="text-lg bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500"
                  />
                </div>
              </>
            )}
          </div>

          <div className={`transition-all duration-700 ${activeService === 'mvp' ? 'opacity-100 transform-none' : 'opacity-0 absolute transform translate-x-8'}`}>
            {activeService === 'mvp' && (
              <>
                <div className="relative">
                  <div className="relative w-16 h-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-violet-500/40">
                    <Rocket className="w-8 h-8 text-white" strokeWidth={2.5} />
                    <div className="absolute -inset-2 bg-violet-500/20 rounded-3xl animate-pulse"></div>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 tracking-tight leading-tight">
                    MVP & Micro-SaaS <span className="gradient-text">(Validation &gt; Vanity)</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-light">
                    Ship the smallest thing that proves the biggest thing.
                  </p>
                  
                  <div className="space-y-6 mb-12">
                    {[
                      { icon: Target, text: "Scope to signal: features that actually test demand" },
                      { icon: Star, text: "Production feel: clean UI, auth, 1 core workflow, 1–2 key integrations" },
                      { icon: Shield, text: "Data-ready: analytics + feedback hooks from day one" },
                      { icon: TrendingUp, text: "Deploy anywhere: your subdomain or your infra, with docs & handover" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 group">
                        <div className="relative p-3 rounded-xl bg-gradient-to-r from-violet-600/20 to-purple-600/20 hover:from-violet-600/30 hover:to-purple-600/30 transition-all duration-300 border border-violet-500/20 group-hover:border-violet-500/40">
                          <item.icon className="w-6 h-6 text-violet-400 group-hover:text-violet-300 transition-colors" strokeWidth={2.5} />
                          <div className="absolute -inset-1 bg-violet-500/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <p className="text-lg text-gray-300 group-hover:text-gray-200 transition-colors font-light leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <SaveButton
                    text={{
                      idle: "Time-to-live: typically 3–6 weeks • Discuss your MVP on the discovery call",
                      saving: "Connecting...",
                      saved: "Booked!"
                    }}
                    onClick={scrollToBooking}
                    className="text-lg bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500"
                  />
                </div>
              </>
            )}
          </div>
          
          {/* Animated Card Section */}
          <div className="relative flex justify-center group">
            <div className="relative">
              <GlowingEffect
                spread={80}
                glow={true}
                disabled={false}
                proximity={100}
                inactiveZone={0.1}
                borderWidth={3}
                className="rounded-3xl"
              />
              <AnimatedCard>
                <CardVisual>
                  <Visual2 
                    mainColor={activeService === 'voice' ? "#8b5cf6" : "#a855f7"} 
                    secondaryColor={activeService === 'voice' ? "#a855f7" : "#8b5cf6"} 
                  />
                </CardVisual>
                <CardBody>
                  <CardTitle className="font-display text-2xl">
                    {activeService === 'voice' ? 'AI Voice Performance' : 'MVP Dashboard'}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {activeService === 'voice' 
                      ? 'Real-time analytics and conversation intelligence'
                      : 'Production-ready with analytics and user insights'
                    }
                  </CardDescription>
                </CardBody>
              </AnimatedCard>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}