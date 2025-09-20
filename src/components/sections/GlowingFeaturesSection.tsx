import React from 'react';
import { Phone, Rocket, Target, Zap, Users, Clock, Star, Shield, TrendingUp, ArrowRight, Bot } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { cn } from '@/lib/utils';

interface GlowingFeaturesSectionProps {
  primaryCTA: () => void;
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-gray-800/50 p-2 md:rounded-[1.5rem] md:p-3 group">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-gray-900/50 backdrop-blur-sm p-6 shadow-xl shadow-purple-500/10 group-hover:shadow-purple-500/20 transition-all duration-500">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-purple-500/30 bg-purple-600/20 p-3 group-hover:bg-purple-600/30 transition-colors duration-300">
              {icon}
            </div>
            <div className="space-y-4">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-bold font-display tracking-[-0.02em] md:text-2xl md:leading-[1.875rem] text-balance text-white group-hover:text-purple-200 transition-colors duration-300">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.375rem] md:text-base md:leading-[1.5rem] text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export function GlowingFeaturesSection({ primaryCTA }: GlowingFeaturesSectionProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-white tracking-tight">
            Why Choose <span className="gradient-text">RapidXAI</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Enterprise-grade solutions built for speed, security, and scalability. Experience the future of AI automation.
          </p>
        </div>
        
        <ul className="grid grid-cols-1 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[40rem] xl:grid-rows-2 mb-16">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Phone className="h-6 w-6 text-purple-400" strokeWidth={2} />}
            title="24/7 AI Voice Agents"
            description="Never miss a lead again. Our AI agents handle inbound calls, qualify prospects, and book meetings around the clock with human-grade conversations."
          />
          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Rocket className="h-6 w-6 text-violet-400" strokeWidth={2} />}
            title="MVP in Weeks, Not Quarters"
            description="Ship production-ready MVPs and micro-SaaS solutions that validate your market before you scale. Clean code, modern UI, built for growth."
          />
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Target className="h-6 w-6 text-purple-400" strokeWidth={2} />}
            title="ROI-Focused Custom Solutions"
            description="No cookie-cutter packages. Every solution is scoped to your specific ROI goals and business outcomes. Custom quotes based on value delivered."
          />
          <GridItem
            area="md:[grid-area:2/7/2/13] xl:[grid-area:1/8/2/13]"
            icon={<Zap className="h-6 w-6 text-violet-400" strokeWidth={2} />}
            title="Founder-Led Excellence"
            description="Direct collaboration with Shreyas Raj and senior builders. No middlemen, faster feedback loops, and founder-grade execution speed."
          />
          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Shield className="h-6 w-6 text-purple-400" strokeWidth={2} />}
            title="Enterprise Security & Scale"
            description="SOC2-ready processes, end-to-end encryption, and compliance-first architecture. Built to scale from startup to enterprise."
          />
        </ul>

        <div className="text-center">
          <button
            onClick={primaryCTA}
            className="premium-button text-xl flex items-center gap-4 mx-auto group px-12 py-6"
          >
            <Bot className="w-6 h-6 drop-shadow-lg" strokeWidth={2.5} />
            Experience RapidXAI
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}