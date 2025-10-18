import React from 'react';
import { Phone, ArrowRight, CheckCircle, Clock, Target, Zap, Users, Shield } from 'lucide-react';
import { InboundAgentsSection } from '../components/sections/InboundAgentsSection';
import GradientButton from '../components/ui/button-1';

interface AIVoiceAgentsPageProps {
  primaryCTA: () => void;
  secondaryCTA: () => void;
}

export function AIVoiceAgentsPage({ primaryCTA, secondaryCTA }: AIVoiceAgentsPageProps) {
  const features = [
    {
      icon: Phone,
      title: "24/7 Availability",
      description: "Never miss a call. Our AI agents work around the clock to capture every opportunity.",
      color: "from-purple-600 to-violet-600"
    },
    {
      icon: Target,
      title: "Lead Qualification",
      description: "Intelligent screening and routing based on your criteria. Only qualified leads reach your team.",
      color: "from-violet-600 to-purple-600"
    },
    {
      icon: Zap,
      title: "Instant Response",
      description: "Zero wait times. Engage prospects immediately when interest is highest.",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Users,
      title: "CRM Integration",
      description: "Seamless sync with your existing tools. All conversations logged and tracked automatically.",
      color: "from-pink-600 to-purple-600"
    },
    {
      icon: Clock,
      title: "Smart Scheduling",
      description: "Automated appointment booking that respects your calendar and time zones.",
      color: "from-purple-600 to-violet-600"
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "DNC list management, call recording, and audit trails included.",
      color: "from-violet-600 to-purple-600"
    }
  ];

  const useCases = [
    {
      title: "Real Estate",
      description: "Handle property inquiries, schedule tours, and qualify buyers 24/7"
    },
    {
      title: "Healthcare",
      description: "Appointment scheduling, patient intake, and follow-up reminders"
    },
    {
      title: "Professional Services",
      description: "Client onboarding, consultation booking, and service inquiries"
    },
    {
      title: "E-commerce",
      description: "Order support, product questions, and return management"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "Custom Quote",
      description: "Perfect for small teams testing AI voice",
      features: [
        "Up to 500 calls/month",
        "Basic CRM integration",
        "Email support",
        "Standard voice quality"
      ]
    },
    {
      name: "Professional",
      price: "Custom Quote",
      description: "For growing businesses scaling operations",
      features: [
        "Up to 2,000 calls/month",
        "Advanced CRM integration",
        "Priority support",
        "Premium voice quality",
        "Custom conversation flows",
        "Analytics dashboard"
      ],
      featured: true
    },
    {
      name: "Enterprise",
      price: "Custom Quote",
      description: "For high-volume operations",
      features: [
        "Unlimited calls",
        "Full CRM & tool integration",
        "Dedicated support team",
        "Custom voice training",
        "Advanced analytics",
        "Multi-language support",
        "White-label options"
      ]
    }
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[1200px] h-[800px] bg-purple-600/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-purple-600/20 backdrop-blur-xl rounded-full px-6 py-3 border border-purple-500/30 mb-8">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-purple-300 font-medium text-sm tracking-wide font-premium">
                AI VOICE AGENTS
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-tight leading-tight">
              Never Miss a Call. <span className="gradient-text">Never Lose a Lead.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              AI voice agents that answer every call, qualify every lead, and book every meeting — 24/7/365.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <GradientButton
                width="320px"
                height="60px"
                onClick={primaryCTA}
              >
                <div className="flex items-center gap-3 text-lg font-semibold text-white">
                  <Phone className="w-6 h-6" />
                  Book Your Discovery Call
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </GradientButton>
            </div>
          </div>
        </div>
      </section>

      <InboundAgentsSection primaryCTA={primaryCTA} />

      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Features That <span className="gradient-text">Drive Results</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to automate your phone operations and scale your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glossy-card p-8 text-center group hover:scale-[1.02] transition-all duration-500">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20`}>
                  <feature.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Industry <span className="gradient-text">Use Cases</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI voice agents customized for your specific industry needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {useCases.map((useCase, index) => (
              <div key={index} className="glossy-card p-8 hover:scale-[1.02] transition-all duration-500">
                <h3 className="text-2xl font-display font-semibold mb-4 text-white">{useCase.title}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{useCase.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <GradientButton
              width="320px"
              height="60px"
              onClick={primaryCTA}
            >
              <div className="flex items-center gap-3 text-lg font-semibold text-white">
                <Phone className="w-6 h-6" />
                Discuss Your Use Case
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </GradientButton>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Custom quotes based on your volume and needs. No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`glossy-card p-8 ${tier.featured ? 'border-purple-500/50 bg-purple-600/10' : ''} hover:scale-[1.02] transition-all duration-500`}>
                <h3 className="text-2xl font-display font-bold mb-2 text-white">{tier.name}</h3>
                <div className="text-3xl font-display font-bold mb-4 text-purple-400">{tier.price}</div>
                <p className="text-gray-400 mb-8">{tier.description}</p>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={primaryCTA}
                  className={`w-full ${tier.featured ? 'premium-button' : 'premium-button-secondary'} text-center`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-400 mb-8">
              Need a custom solution? Let's build it together.
            </p>
            <GradientButton
              width="320px"
              height="60px"
              onClick={secondaryCTA}
            >
              <div className="flex items-center gap-3 text-lg font-semibold text-white">
                $250 Deep-Dive with Shreyas
              </div>
            </GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
}
