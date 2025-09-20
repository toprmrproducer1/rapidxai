import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Check, ArrowRight, Star, Shield, Rocket, Zap } from 'lucide-react'

interface PricingPlan {
  name: string;
  icon: React.ElementType;
  description: string;
  gradient: string;
  borderGradient: string;
  features: {
    voiceAutomations: string[];
    mvpSaas: string[];
  };
  delivery: string[];
  popular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Launch",
    icon: Rocket,
    description: "For founders validating demand in weeks, not quarters.",
    gradient: "from-purple-600 to-violet-600",
    borderGradient: "from-purple-500 to-violet-500",
    features: {
      voiceAutomations: [
        "1 AI agent (inbound) — phone or WhatsApp/SMS",
        "Core call/chat flows (greet → qualify → route → schedule)", 
        "Basic CRM logging + 1 calendar integration",
        "FAQ/knowledge base ingestion (single source)",
        "Daily call/chat summaries + weekly report",
        "Compliance basics (DNC handling, opt-out)"
      ],
      mvpSaas: [
        "MVP v0 with auth + clean, responsive UI",
        "1 core workflow + 1–2 integrations (e.g., Stripe test, Webhooks)",
        "Analytics starter (events + funnels)",
        "Clickable prototype → working MVP handoff in sprints",
        "Deployment to staging + production"
      ]
    },
    delivery: [
      "2–4 week build window (agile sprints)",
      "Slack/WhatsApp project channel", 
      "Documentation + handover video"
    ]
  },
  {
    name: "Scale",
    icon: Zap,
    description: "For teams with traction that need performance and reliability.",
    gradient: "from-violet-600 to-purple-600",
    borderGradient: "from-violet-500 to-purple-500",
    popular: true,
    features: {
      voiceAutomations: [
        "Inbound and outbound agents (multi-channel: phone, WhatsApp, SMS)",
        "3–5 advanced flows (A/B scripts, warm transfer, callback rules)",
        "2-way CRM sync, lead scoring, pipeline tags",
        "Auto-notes, call recordings, QA summaries, sentiment flags",
        "Campaign manager (lists, throttling, time-zone windows)"
      ],
      mvpSaas: [
        "Product v1 with live billing (Stripe/Chargebee)",
        "Roles & permissions, organizations/workspaces", 
        "Robust analytics + in-app experiments (A/B)",
        "CI/CD, staging→prod promotion, error tracking",
        "3–6 integrations (email, calendars, data, webhooks)"
      ]
    },
    delivery: [
      "4–8 week build window",
      "Weekly show-and-tell, KPI reviews",
      "Runbook, playbooks, training for your team"
    ]
  },
  {
    name: "Enterprise",
    icon: Shield,
    description: "For regulated, multi-brand, or high-volume operations.",
    gradient: "from-purple-600 to-pink-600",
    borderGradient: "from-purple-500 to-pink-500",
    features: {
      voiceAutomations: [
        "Multi-agent suite, skill-based routing, queues, multilingual",
        "SIP trunking, IVR trees, data residency options",
        "Compliance: DNC, audit trails; IP allow-listing, SSO/SAML",
        "Real-time dashboards (SLAs, CSAT proxies, conversion)",
        "99.9% uptime target with on-call escalation"
      ],
      mvpSaas: [
        "Multi-tenant architecture, usage-based billing",
        "Audit logs, advanced permissions, feature flags",
        "Performance budgets, load testing, disaster recovery",
        "SOC2-ready process guidance (policies & controls)",
        "Dedicated environment, roadmap co-creation"
      ]
    },
    delivery: [
      "Program plan + milestones, PMO cadence",
      "Priority support, incident response runbooks",
      "Dedicated solution architect"
    ]
  }
];

interface PricingCardProps {
  plan: PricingPlan;
  primaryCTA: () => void;
}

const PricingCard = ({ plan, primaryCTA }: PricingCardProps) => {
  const IconComponent = plan.icon;
  
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
        
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-purple-400 mb-3 flex items-center gap-2">
            <div className="w-1 h-4 bg-gradient-to-b from-purple-500 to-violet-500 rounded-full"></div>
            Voice & Text Automations
          </h4>
          <ul className="space-y-2">
            {plan.features.voiceAutomations.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-violet-400 mb-3 flex items-center gap-2">
            <div className="w-1 h-4 bg-gradient-to-b from-violet-500 to-purple-500 rounded-full"></div>
            MVP / Micro-SaaS
          </h4>
          <ul className="space-y-2">
            {plan.features.mvpSaas.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
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
      </CardContent>
    </Card>
  );
};

interface PricingSectionProps {
  primaryCTA: () => void;
  secondaryCTA: () => void;
}

export function PricingSection({ primaryCTA, secondaryCTA }: PricingSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">Pricing</h2>
          <p className="text-xl text-gray-300 mb-4 max-w-4xl mx-auto">
            One team. Two capabilities. Three ways to start.
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto">
            All plans include AI Voice & Text Automations + MVP/Micro-SaaS workstreams—scoped to your stage. 
            We quote on the discovery call to match ROI, not a template.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} primaryCTA={primaryCTA} />
          ))}
        </div>
        
        <div className="bg-gray-900/30 rounded-2xl p-8 border border-gray-800/50 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">What's Included in Every Plan</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Founder-led collaboration with Shreyas Raj and senior builders",
              "Discovery workshop (goals, constraints, ROI model)",
              "Design → Build → Deploy agile loop with measurable KPIs",
              "Own your code & infra (no lock-in)",
              "Security alignment to your policies and stack", 
              "Clear documentation + team training"
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Prefer 1:1 strategy discussion?
          </p>
          <button
            onClick={secondaryCTA}
            className="px-8 py-4 text-violet-400 border-2 border-violet-400 rounded-xl hover:bg-violet-400/10 transition-all duration-200 font-medium text-lg"
          >
            $250 Deep-Dive with Shreyas
          </button>
        </div>
      </div>
    </section>
  );
}