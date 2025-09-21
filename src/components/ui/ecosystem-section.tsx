import React from 'react';
import { Cpu, Zap, Target, Users } from 'lucide-react';

export default function EcosystemSection() {
  return (
    <section className="py-16 md:py-32 bg-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-600/5 rounded-full blur-3xl"></div>
      
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 relative z-10">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white font-display">
          The RapidXAI ecosystem brings together <span className="gradient-text">AI Voice</span> and <span className="gradient-text">MVP development</span>.
        </h2>
        
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative space-y-4">
            <p className="text-gray-300 font-light leading-relaxed">
              RapidXAI is evolving to be more than just voice agents. <span className="text-white font-semibold">It supports an entire automation ecosystem</span> — from AI voice systems to production-ready MVPs.
            </p>
            <p className="text-gray-300 font-light leading-relaxed">
              It supports an entire ecosystem — from voice automation products to the APIs and platforms helping founders and businesses innovate faster.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4 text-purple-400" />
                  <h3 className="text-sm font-medium text-white">Lightning Fast</h3>
                </div>
                <p className="text-gray-300 text-sm font-light">
                  Voice agents live in 7-14 days. MVPs in 3-6 weeks. No quarters-long timelines.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Target className="size-4 text-violet-400" />
                  <h3 className="text-sm font-medium text-white">ROI-Focused</h3>
                </div>
                <p className="text-gray-300 text-sm font-light">
                  Every solution scoped to measurable business outcomes and revenue impact.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative mt-6 sm:mt-0">
            <div className="bg-gradient-to-b aspect-[67/34] relative rounded-2xl from-purple-600/20 to-transparent p-px border border-purple-500/30">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop" 
                className="rounded-[15px] shadow-2xl shadow-purple-500/20 w-full h-full object-cover" 
                alt="AI automation dashboard" 
                width={1206} 
                height={612} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent rounded-[15px]"></div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="pt-12">
          <blockquote className="border-l-4 border-purple-500 pl-6 bg-gray-900/30 rounded-r-2xl p-6 backdrop-blur-sm">
            <p className="text-gray-300 text-lg leading-relaxed font-light italic">
              "Using RapidXAI has been like unlocking a secret automation superpower. It's the perfect fusion of AI voice intelligence and rapid MVP development, enabling us to create systems that are as powerful as they are user-friendly."
            </p>

            <div className="mt-6 space-y-3">
              <cite className="block font-medium text-white font-display">Jahmai Nicome, Real Estate Investor</cite>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 text-sm font-medium">Real Estate Automation Client</span>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}