import React from 'react';
import { Mail, ArrowRight, CheckCircle, Target, Zap, Users, TrendingUp, Brain, Database } from 'lucide-react';
import { ColdEmailSection } from '../components/sections/ColdEmailSection';
import GradientButton from '../components/ui/button-1';

interface ColdEmailAIPageProps {
  primaryCTA: () => void;
  secondaryCTA: () => void;
}

export function ColdEmailAIPage({ primaryCTA, secondaryCTA }: ColdEmailAIPageProps) {
  const features = [
    {
      icon: Brain,
      title: "AI Personalization",
      description: "Every email is uniquely crafted using AI to match the recipient's profile and interests.",
      color: "from-violet-600 to-purple-600"
    },
    {
      icon: Target,
      title: "Intent Tracking",
      description: "Track engagement and intent signals to know exactly when to follow up.",
      color: "from-purple-600 to-violet-600"
    },
    {
      icon: Database,
      title: "Smart List Building",
      description: "AI-powered prospect research finds your ideal customers automatically.",
      color: "from-violet-600 to-pink-600"
    },
    {
      icon: Zap,
      title: "Automated Follow-ups",
      description: "Multi-touch sequences that adapt based on recipient behavior.",
      color: "from-pink-600 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "A/B Testing",
      description: "Continuously optimize subject lines, copy, and timing for maximum replies.",
      color: "from-purple-600 to-violet-600"
    },
    {
      icon: Users,
      title: "CRM Integration",
      description: "Seamlessly sync with your existing sales tools and workflows.",
      color: "from-violet-600 to-purple-600"
    }
  ];

  const benefits = [
    {
      metric: "3x",
      description: "More replies than traditional cold email"
    },
    {
      metric: "85%",
      description: "Reduction in manual outreach time"
    },
    {
      metric: "< 3 months",
      description: "Full ROI on your investment"
    },
    {
      metric: "24/7",
      description: "Continuous optimization and sending"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Define Your ICP",
      description: "We work with you to identify your ideal customer profile and target criteria."
    },
    {
      number: "02",
      title: "AI Research & List Building",
      description: "Our AI researches prospects and builds a qualified list matching your criteria."
    },
    {
      number: "03",
      title: "Personalized Campaigns",
      description: "AI crafts unique, personalized emails for each prospect based on their profile."
    },
    {
      number: "04",
      title: "Intelligent Follow-ups",
      description: "Automated sequences adapt based on engagement, with graceful exit paths."
    },
    {
      number: "05",
      title: "Continuous Optimization",
      description: "AI learns from results and continuously improves messaging and targeting."
    }
  ];

  const pricingTiers = [
    {
      name: "Launch",
      price: "Custom Quote",
      description: "Perfect for testing AI-powered outreach",
      features: [
        "Up to 1,000 emails/month",
        "Basic personalization",
        "Standard templates",
        "Email support",
        "Performance analytics"
      ]
    },
    {
      name: "Growth",
      price: "Custom Quote",
      description: "For scaling your outbound engine",
      features: [
        "Up to 5,000 emails/month",
        "Advanced AI personalization",
        "Custom sequences",
        "A/B testing",
        "Priority support",
        "CRM integration",
        "Intent tracking"
      ],
      featured: true
    },
    {
      name: "Enterprise",
      price: "Custom Quote",
      description: "For high-volume operations",
      features: [
        "Unlimited emails",
        "Full AI customization",
        "Multi-channel campaigns",
        "Dedicated account manager",
        "Custom integrations",
        "White-label options",
        "Advanced analytics",
        "Team training"
      ]
    }
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-violet-950/10 to-gray-950"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[1200px] h-[800px] bg-violet-600/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-violet-600/20 backdrop-blur-xl rounded-full px-6 py-3 border border-violet-500/30 mb-8">
              <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
              <span className="text-violet-300 font-medium text-sm tracking-wide font-premium">
                AI COLD EMAIL SYSTEM
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-tight leading-tight">
              Cold Emails That <span className="gradient-text">Actually Get Replies</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              Reach decision-makers directly with AI-powered personalization that feels handcrafted.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <GradientButton
                width="380px"
                height="60px"
                onClick={primaryCTA}
              >
                <div className="flex items-center gap-3 text-lg font-semibold text-white">
                  <Mail className="w-6 h-6" />
                  Try the RapidX AI Cold Email System
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </GradientButton>
            </div>
          </div>
        </div>
      </section>

      <ColdEmailSection primaryCTA={primaryCTA} />

      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              The Numbers <span className="gradient-text">Don't Lie</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from businesses using RapidX AI Cold Email System
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="glossy-card p-8 text-center hover:scale-[1.02] transition-all duration-500">
                <div className="text-5xl font-display font-bold gradient-text mb-4">{benefit.metric}</div>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Features That <span className="gradient-text">Drive Results</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glossy-card p-8 text-center group hover:scale-[1.02] transition-all duration-500">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-violet-500/20`}>
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
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From setup to success in 5 simple steps
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="glossy-card p-8 hover:scale-[1.01] transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="text-6xl font-display font-bold gradient-text flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-3 text-white">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <GradientButton
              width="320px"
              height="60px"
              onClick={primaryCTA}
            >
              <div className="flex items-center gap-3 text-lg font-semibold text-white">
                <Mail className="w-6 h-6" />
                Get Started Today
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
              <div key={index} className={`glossy-card p-8 ${tier.featured ? 'border-violet-500/50 bg-violet-600/10' : ''} hover:scale-[1.02] transition-all duration-500`}>
                <h3 className="text-2xl font-display font-bold mb-2 text-white">{tier.name}</h3>
                <div className="text-3xl font-display font-bold mb-4 text-violet-400">{tier.price}</div>
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
