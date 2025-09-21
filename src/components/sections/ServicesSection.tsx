import React from 'react';
import { Phone, Rocket, Target, Zap, Users, Clock, Star, Shield, TrendingUp, ArrowRight, Bot, Code, Play } from 'lucide-react';
import { AnimatedCard, CardBody, CardDescription, CardTitle, CardVisual, Visual2 } from '../ui/animated-card-diagram';
import { GlowingEffect } from '../ui/glowing-effect';
import { SaveButton } from '../ui/save-button';
import { EvervaultCard } from '../ui/evervault-card';

interface ServicesSectionProps {
  activeService: 'voice' | 'mvp';
  setActiveService: (service: 'voice' | 'mvp') => void;
}

export function ServicesSection({ activeService, setActiveService }: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-violet-600/5"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white tracking-tight">
            <span className="gradient-text">Core Services</span>
          </h2>
        </div>
        
        {/* Service Toggle */}
        <div className="flex justify-center mb-12">
          <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-2 border border-purple-500/30 shadow-xl shadow-purple-500/20">
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
                className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-500 font-display font-semibold text-sm ${
                  activeService === 'voice'
                    ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-2xl shadow-purple-500/40 scale-105'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                <span className="font-medium">Voice</span>
              </button>
              <button
                onClick={() => setActiveService('mvp')}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-500 font-display font-semibold text-sm ${
                  activeService === 'mvp'
                    ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-2xl shadow-purple-500/40 scale-105'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Rocket className="w-4 h-4" strokeWidth={2.5} />
                <span className="font-medium">MVP</span>
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
                    Voice Agents
                  </h2>
                  <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed font-light">
                    24/7 reception. Never miss leads.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {[
                      { icon: Target, text: "Qualify & schedule" },
                      { icon: Phone, text: "Campaigns & callbacks" },
                      { icon: Zap, text: "Auto follow-ups" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 group">
                        <div className="relative p-2 rounded-lg bg-gradient-to-r from-purple-600/20 to-violet-600/20 hover:from-purple-600/30 hover:to-violet-600/30 transition-all duration-300 border border-purple-500/20 group-hover:border-purple-500/40">
                          <item.icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" strokeWidth={2} />
                          <div className="absolute -inset-1 bg-purple-500/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <p className="text-base text-gray-300 group-hover:text-gray-200 transition-colors font-light leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>

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
                    MVP Development
                  </h2>
                  <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed font-light">
                    Validate fast. Scale smart.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {[
                      { icon: Target, text: "Test demand fast" },
                      { icon: Star, text: "Clean UI + auth" },
                      { icon: Shield, text: "Built-in analytics" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 group">
                        <div className="relative p-2 rounded-lg bg-gradient-to-r from-violet-600/20 to-purple-600/20 hover:from-violet-600/30 hover:to-purple-600/30 transition-all duration-300 border border-violet-500/20 group-hover:border-violet-500/40">
                          <item.icon className="w-5 h-5 text-violet-400 group-hover:text-violet-300 transition-colors" strokeWidth={2} />
                          <div className="absolute -inset-1 bg-violet-500/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <p className="text-base text-gray-300 group-hover:text-gray-200 transition-colors font-light leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>

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
                    {activeService === 'voice' ? 'Voice Analytics' : 'MVP Dashboard'}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {activeService === 'voice' 
                      ? 'Real-time call analytics'
                      : 'User insights & metrics'
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