import React from 'react';
import { useState } from 'react';
import { Check, ArrowRight, Star, Shield, Rocket, Zap, Calendar, Bot, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { SaveButton } from '@/components/ui/save-button';

type ServiceType = 'voice' | 'mvp' | 'both';

interface PricingPlan {
  name: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  gradient: string;
  borderGradient: string;
  features: Record<ServiceType, {
    title: string;
    items: string[];
  }>;
  delivery: string[];
  popular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Launch",
    subtitle: "From Zero to First Wins",
    icon: Rocket,
    description: "Perfect for founders validating demand and getting first wins quickly.",
    gradient: "from-purple-600 to-violet-600",
    borderGradient: "from-purple-500 to-violet-500",
    features: {
      voice: {
        title: "AI Voice & Chat",
        items: [
          "1 inbound agent (phone or WhatsApp/SMS)",
          "Greet → qualify → route → schedule flow",
          "FAQ ingestion (single source)",
          "CRM logging + daily summaries",
          "Weekly reports + DNC/opt-out basics"
        ]
      },
      mvp: {
        title: "MVP & Micro-SaaS",
        items: [
          "MVP v0 with auth + clean UI",
          "1 core workflow + 1–2 integrations",
          "Stripe test + Webhooks setup",
          "Analytics starter (events/funnels)",
          "Staging → production handoff"
        ]
      },
      both: {
        title: "Complete Solution",
        items: [
          "Everything from Voice & Chat",
          "Everything from MVP & Micro-SaaS",
          "Integrated workflow automation",
          "End-to-end customer journey",
          "Unified analytics dashboard"
        ]
      }
    },
    delivery: [
      "2–4 week build window",
      "Slack/WhatsApp project channel",
      "Documentation + handover video"
    ]
  },
  {
    name: "Scale",
    subtitle: "Compounding Growth",
    icon: Zap,
    description: "For teams with traction that need performance and reliability at scale.",
    gradient: "from-violet-600 to-purple-600",
    borderGradient: "from-violet-500 to-purple-500",
    popular: true,
    features: {
      voice: {
        title: "AI Voice & Chat",
        items: [
          "Inbound + outbound campaigns",
          "3–5 advanced flows (A/B scripts, warm transfer)",
          "2-way CRM sync + lead scoring",
          "Auto-notes/recordings/QA/sentiment",
          "Campaign manager (lists, throttling, time-zones)"
        ]
      },
      mvp: {
        title: "MVP & Micro-SaaS",
        items: [
          "Product v1 with billing live",
          "Roles/permissions & workspaces",
          "Robust analytics + in-app experiments",
          "CI/CD + error tracking",
          "3–6 integrations (email, calendars, data)"
        ]
      },
      both: {
        title: "Complete Solution",
        items: [
          "Advanced multi-channel automation",
          "Full-featured SaaS platform",
          "Advanced analytics & experiments",
          "Complete DevOps pipeline",
          "Enterprise integrations"
        ]
      }
    },
    delivery: [
      "4–8 week build window",
      "Weekly show-and-tell & KPI reviews",
      "Runbook + team training"
    ]
  },
  {
    name: "Enterprise",
    subtitle: "Production at Scale",
    icon: Shield,
    description: "For regulated, multi-brand, or high-volume operations requiring enterprise features.",
    gradient: "from-purple-600 to-pink-600",
    borderGradient: "from-purple-500 to-pink-500",
    features: {
      voice: {
        title: "AI Voice & Chat",
        items: [
          "Multi-agent fleets + skill-based routing",
          "Multilingual + SIP trunking & IVR",
          "Data residency + compliance (DNC, audit trails)",
          "SSO/SAML + real-time dashboards",
          "99.9% uptime target with on-call"
        ]
      },
      mvp: {
        title: "MVP & Micro-SaaS",
        items: [
          "Multi-tenant + usage-based billing",
          "Audit logs + feature flags",
          "Performance budgets + disaster recovery",
          "SOC2-ready process guidance",
          "Dedicated environment + roadmap co-planning"
        ]
      },
      both: {
        title: "Enterprise Solution",
        items: [
          "Complete enterprise voice platform",
          "Full multi-tenant SaaS architecture",
          "Enterprise compliance & security",
          "Dedicated infrastructure & support",
          "Custom roadmap & solution architecture"
        ]
      }
    },
    delivery: [
      "PMO cadence + priority support",
      "Incident runbooks",
      "Dedicated solution architect"
    ]
  }
];

interface PricingCardProps {
  plan: PricingPlan;
  selectedService: ServiceType;
  primaryCTA: () => void;
}

const PricingCard = ({ plan, selectedService, primaryCTA }: PricingCardProps) => {
  const IconComponent = plan.icon;
  const currentFeatures = plan.features[selectedService];
  
  return (
    <Card className={`relative overflow-hidden bg-gray-900/50 backdrop-blur-sm border transition-all duration-300 hover:scale-[1.02] ${plan.popular ? 'border-violet-500/50 ring-2 ring-violet-500/20' : 'border-gray-800/50 hover:border-purple-500/50'}`}>
      {plan.popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Star className="w-3 h-3" />
            Most Popular
          </div>
        </div>
      )}
      
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${plan.gradient}`}>
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          <div className="text-right">
            <div className="bg-gray-800/50 rounded-lg px-3 py-1 border border-gray-700/50">
              <span className="text-sm text-purple-400 font-medium">Custom Quote on Call</span>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
        <p className="text-purple-400 font-medium text-sm mb-3">{plan.subtitle}</p>
        <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-purple-400 mb-3 flex items-center gap-2">
            <div className="w-1 h-4 bg-gradient-to-b from-purple-500 to-violet-500 rounded-full"></div>
            {currentFeatures.title}
          </h4>
          <ul className="space-y-2">
            {currentFeatures.items.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
            <div className="w-1 h-4 bg-gradient-to-b from-gray-500 to-gray-600 rounded-full"></div>
            Delivery & Support
          </h4>
          <ul className="space-y-2">
            {plan.delivery.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button
          onClick={primaryCTA}
          className={`w-full px-6 py-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 group ${plan.popular 
            ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white shadow-lg shadow-violet-500/25' 
            : 'bg-gradient-to-r from-gray-800 to-gray-700 hover:from-purple-600 hover:to-violet-600 text-white border border-gray-600'
          }`}
        >
          Book Your Discovery Call
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        <p className="text-xs text-gray-500 text-center">Custom Quote on Call</p>
      </CardContent>
    </Card>
  );
};

interface PricingPageProps {
  primaryCTA: () => void;
  secondaryCTA: () => void;
}

export function PricingPage({ primaryCTA, secondaryCTA }: PricingPageProps) {
  const [selectedService, setSelectedService] = useState<ServiceType>('both');

  return (
    <div className="bg-gray-950 text-white min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950"></div>
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[1200px] h-[800px] bg-purple-600/5 rounded-full blur-3xl"></div>
      
      {/* Hero Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <h1 className="text-6xl md:text-7xl font-display font-bold mb-8 tracking-tight leading-tight">
              Plans that <span className="gradient-text">start where you are</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
              One team. Two capabilities. Three ways to win—AI Voice & Text Automations + MVP/Micro-SaaS, scoped to ROI.
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
                  onClick={() => setSelectedService('voice')}
                  className={`flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-500 font-display font-semibold text-lg ${
                    selectedService === 'voice'
                      ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-2xl shadow-purple-500/40 scale-105'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Phone className="w-5 h-5" strokeWidth={2.5} />
                  AI Voice & Chat
                </button>
                <button
                  onClick={() => setSelectedService('mvp')}
                  className={`flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-500 font-display font-semibold text-lg ${
                    selectedService === 'mvp'
                      ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-2xl shadow-purple-500/40 scale-105'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Rocket className="w-5 h-5" strokeWidth={2.5} />
                  MVP & Micro-SaaS
                </button>
                <button
                  onClick={() => setSelectedService('both')}
                  className={`flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-500 font-display font-semibold text-lg ${
                    selectedService === 'both'
                      ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-2xl shadow-purple-500/40 scale-105'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Star className="w-5 h-5" strokeWidth={2.5} />
                  Complete Solution
                </button>
              </div>
            </div>
          </div>

          <div className="mb-16">
            {selectedService === 'voice' && "AI Voice & Text Automations that book meetings 24/7 and qualify leads automatically."}
            {selectedService === 'mvp' && "MVP & Micro-SaaS solutions that validate markets before you scale."}
            {selectedService === 'both' && "Complete AI Voice + MVP solutions—scoped to ROI, built for growth."}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
                idle: "$250 Deep-Dive",
                saving: "Connecting...",
                saved: "Booked!"
              }}
              onClick={secondaryCTA}
              className="text-lg bg-transparent border-2 border-purple-500 hover:bg-purple-500/10 px-8 py-4"
            />
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <PricingCard key={index} plan={plan} selectedService={selectedService} primaryCTA={primaryCTA} />
            ))}
          </div>
          
          {/* All Plans Include */}
          <div className="bg-gray-900/30 rounded-2xl p-8 border border-gray-800/50 backdrop-blur-sm mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">All Plans Include</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Founder-led collaboration with senior builders",
                "Conversion-grade UI + conversation design",
                "Analytics from day one",
                "CRM/calendar wiring",
                "Security aligned to client policies",
                "Own your code & infrastructure"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Optional Add-ons */}
          <div className="bg-gray-900/20 rounded-2xl p-8 border border-gray-800/30 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Optional Add-ons</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "WhatsApp/SMS broadcasting",
                "Knowledge base buildout", 
                "ELT → warehouse + BI",
                "Human QA for transcripts",
                "Sales ops toolkit"
              ].map((addon, index) => (
                <span key={index} className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-300 border border-gray-700/50">
                  {addon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "How fast can we launch?",
                a: "Launch tier: 2-4 weeks. Scale tier: 4-8 weeks. Enterprise: custom timeline based on complexity."
              },
              {
                q: "What tech stacks do you support?",
                a: "We're stack-agnostic and work with your existing infrastructure, whether modern or legacy systems."
              },
              {
                q: "Do you handle compliance?",
                a: "Yes, we align to your policies and can implement SOC2-ready processes, audit trails, and data residency requirements."
              },
              {
                q: "Do you disclose pricing publicly?",
                a: "We scope to ROI on the discovery call rather than one-size-fits-all packages."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50">
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-2xl p-12 border border-purple-500/30">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Book your discovery call to discuss your specific needs and get a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={primaryCTA}
                className="premium-button text-lg flex items-center gap-3 mx-auto group"
              >
                <Bot className="w-5 h-5" />
                Book Your Discovery Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={secondaryCTA}
                className="premium-button-secondary text-lg flex items-center gap-3 mx-auto group"
              >
                $250 Deep-Dive with Shreyas
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}