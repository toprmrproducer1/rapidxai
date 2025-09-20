import React from 'react';
import { Users, Zap, Shield, Target, Code } from 'lucide-react';

interface WhyRapidXAISectionProps {
  secondaryCTA: () => void;
}

export function WhyRapidXAISection({ secondaryCTA }: WhyRapidXAISectionProps) {
  const advantages = [
    {
      title: "Founder-grade speed",
      description: "We cut scope, not corners",
      icon: Users
    },
    {
      title: "Outcome-first",
      description: "We design for booked calls, lower CAC, and faster payback",
      icon: Zap
    },
    {
      title: "Stack-agnostic",
      description: "We fit your reality (CRM, calendar, telephony, WhatsApp, helpdesk)",
      icon: Shield
    },
    {
      title: "Security-serious",
      description: "Compliance-minded process and clean, reviewable workflows",
      icon: Target
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">Why Choose RapidXAI</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {advantages.map((advantage, index) => (
            <div key={index} className="tech-card p-6 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <advantage.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold mb-2">{advantage.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>

        <button
          onClick={secondaryCTA}
          className="premium-button-secondary text-lg flex items-center gap-3 mx-auto group"
        >
          <Code className="w-5 h-5" />
          $250 Deep-Dive with Shreyas
        </button>
      </div>
    </section>
  );
}