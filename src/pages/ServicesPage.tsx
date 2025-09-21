import React, { useState } from 'react';
import { Phone, Rocket, Target, Zap, Users, Clock, Star, Shield, TrendingUp, ArrowRight, Bot, Code, CheckCircle, Calendar, Globe, Car, Building, Utensils, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import RadialOrbitalTimeline from '@/components/ui/radial-orbital-timeline';
import { MarketingDashboard } from '@/components/ui/marketing-dashboard';

interface ServicesPageProps {
  primaryCTA: () => void;
  secondaryCTA: () => void;
}

export function ServicesPage({ primaryCTA, secondaryCTA }: ServicesPageProps) {
  const [activeDemo, setActiveDemo] = useState<number | null>(null);

  const timelineData = [
    {
      id: 1,
      title: "Discovery",
      date: "Week 1",
      content: "Deep dive into your business goals, current challenges, and success metrics. We map out the complete automation strategy.",
      category: "Planning",
      icon: Target,
      relatedIds: [2],
      status: "completed" as const,
      energy: 100,
    },
    {
      id: 2,
      title: "Design",
      date: "Week 1-2",
      content: "Conversation flows and product architecture designed for maximum conversion and user experience.",
      category: "Design",
      icon: Star,
      relatedIds: [1, 3],
      status: "completed" as const,
      energy: 90,
    },
    {
      id: 3,
      title: "Build",
      date: "Week 2-4",
      content: "Rapid development with weekly demos. AI voice agents and MVP built in parallel for faster time-to-market.",
      category: "Development",
      icon: Code,
      relatedIds: [2, 4],
      status: "in-progress" as const,
      energy: 75,
    },
    {
      id: 4,
      title: "Deploy",
      date: "Week 4",
      content: "Production deployment with monitoring, analytics, and performance optimization.",
      category: "Deployment",
      icon: Rocket,
      relatedIds: [3, 5],
      status: "in-progress" as const,
      energy: 60,
    },
    {
      id: 5,
      title: "Scale",
      date: "Ongoing",
      content: "Continuous optimization based on real data. Scale what works, iterate what doesn't.",
      category: "Growth",
      icon: TrendingUp,
      relatedIds: [4],
      status: "pending" as const,
      energy: 40,
    },
  ];

  const microDemos = [
    {
      title: "Inbound Lead Qualification",
      scenario: "Caller: 'Hi, I'm interested in your services...'",
      result: "Agent qualifies budget, timeline, and books meeting with sales team",
      outcome: "3x more qualified meetings booked",
      phone: "+91 9307512816"
    },
    {
      title: "Outbound Follow-up",
      scenario: "Agent: 'Hi John, following up on your inquiry about...'",
      result: "Warm conversation leads to scheduled demo",
      outcome: "85% callback success rate",
      phone: "+91 9307512816"
    },
    {
      title: "FAQ & Routing",
      scenario: "Caller: 'What are your pricing options?'",
      result: "Agent provides info and routes to appropriate specialist",
      outcome: "24/7 availability, zero missed calls",
      phone: "+91 9307512816"
    }
  ];

  const architectures = [
    {
      title: "Lead → App → Billing",
      description: "Capture leads, qualify through app, convert to paying customers",
      flow: ["Lead Capture", "Qualification", "Payment", "Onboarding"]
    },
    {
      title: "Content → KB → Agent",
      description: "Content management system feeding knowledge base for AI agents",
      flow: ["Content CMS", "Knowledge Base", "AI Agent", "Customer"]
    },
    {
      title: "POS → Middleware → Reporting",
      description: "Point of sale integration with analytics and reporting dashboard",
      flow: ["POS System", "Data Pipeline", "Analytics", "Dashboard"]
    }
  ];

  const industries = [
    { name: "Real Estate", useCase: "Automated tour booking and lead qualification for property inquiries", icon: Building },
    { name: "Automotive", useCase: "Test drive scheduling and inventory inquiries with CRM integration", icon: Car },
    { name: "Restaurants", useCase: "Reservation management and customer feedback collection systems", icon: Utensils },
    { name: "Clinics", useCase: "Appointment scheduling and patient intake automation", icon: Users },
    { name: "Education", useCase: "Student inquiry handling and enrollment process automation", icon: FileText },
    { name: "Services", useCase: "Service booking and customer support automation", icon: Zap }
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[1200px] h-[800px] bg-purple-600/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-tight leading-tight">
              Build Faster. <span className="gradient-text">Sell Smarter.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed font-light">
              AI Voice & Text that books meetings 24/7 + MVP/Micro-SaaS that validates markets before you scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={primaryCTA}
                className="glossy-button text-lg flex items-center gap-3 group"
              >
                <Bot className="w-5 h-5" />
                Book Your Discovery Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={secondaryCTA}
                className="premium-button-secondary text-lg flex items-center gap-3 group"
              >
                <Code className="w-5 h-5" />
                $250 Deep-Dive
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="relative">
        <div className="text-center py-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Interactive timeline showing how we transform your ideas into revenue-generating systems
          </p>
        </div>
        <RadialOrbitalTimeline timelineData={timelineData} />
      </section>

      {/* Pillar A - AI Voice & Text Automations */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-violet-600/5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-violet-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-purple-500/30">
              <Phone className="w-10 h-10 text-white" strokeWidth={2} />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white tracking-tight">
              AI Voice & Text <span className="gradient-text">Automations</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Inbound reception, outbound SDR, callbacks, reminders; qualifies leads, answers FAQs, routes & schedules, logs to CRM.
            </p>
            <p className="text-lg text-purple-400 max-w-3xl mx-auto font-light">
              Human-grade conversations with context memory and graceful escalation.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Target, title: "Inbound", desc: "Greet → qualify → route → schedule", color: "from-purple-600 to-violet-600" },
              { icon: Phone, title: "Outbound", desc: "List manager, throttling, timezone windows", color: "from-violet-600 to-purple-600" },
              { icon: Users, title: "Knowledge", desc: "KB ingestion & guardrails", color: "from-purple-600 to-pink-600" },
              { icon: Zap, title: "CRM", desc: "2-way sync, tags, lead scoring", color: "from-pink-600 to-purple-600" },
              { icon: Clock, title: "QA", desc: "Transcripts, sentiment, outcome tracking", color: "from-purple-600 to-violet-600" },
              { icon: Shield, title: "Compliance", desc: "DNC, audit trails, redaction options", color: "from-violet-600 to-purple-600" }
            ].map((capability, index) => (
              <div key={index} className="glossy-card p-8 text-center group hover:scale-[1.02] transition-all duration-500">
                <div className={`w-16 h-16 bg-gradient-to-r ${capability.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20`}>
                  <capability.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-white">{capability.title}</h3>
                <p className="text-gray-300 leading-relaxed">{capability.desc}</p>
              </div>
            ))}
          </div>

          {/* Micro Demos */}
          <div className="mb-16">
            <h3 className="text-3xl font-display font-bold text-center mb-12 text-white">See It In Action</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {microDemos.map((demo, index) => (
                <div 
                  key={index} 
                  className={`glossy-card p-8 cursor-pointer transition-all duration-500 hover:scale-[1.02] ${
                    activeDemo === index ? 'border-purple-500/50 bg-purple-600/10' : ''
                  }`}
                  onClick={() => setActiveDemo(activeDemo === index ? null : index)}
                >
                  <h4 className="font-display font-semibold text-xl mb-4 text-white">{demo.title}</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/30">
                      <p className="text-sm text-gray-300 leading-relaxed">{demo.scenario}</p>
                    </div>
                    {activeDemo === index && (
                      <div className="animate-slide-up space-y-3">
                        <div className="bg-purple-600/20 rounded-xl p-4 border border-purple-500/30">
                          <p className="text-sm text-white leading-relaxed">{demo.result}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-sm text-green-400 font-medium">{demo.outcome}</span>
                        </div>
                        <div className="flex items-center gap-3 pt-2">
                          <Phone className="w-4 h-4 text-purple-400" />
                          <a href={`tel:${demo.phone}`} className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-mono">
                            {demo.phone}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={primaryCTA}
              className="premium-button text-xl flex items-center gap-3 mx-auto group"
            >
              <Phone className="w-6 h-6" />
              Book Your Discovery Call
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Pillar B - MVPs & Micro-SaaS */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 via-transparent to-purple-600/5"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="w-20 h-20 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-violet-500/30">
              <Rocket className="w-10 h-10 text-white" strokeWidth={2} />
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-white tracking-tight">
              One team. <span className="gradient-text">Two unfair advantages.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Voice agents that never "forget to follow up."
            </p>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              MVPs that validate before you scale.
            </p>
          </div>

          {/* Scope Modules */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: Target, title: "Scope to signal", desc: "one core job-to-be-done, not 20 features", color: "from-violet-600 to-purple-600" },
              { icon: Star, title: "Production feel", desc: "auth, roles, clean UI, analytics", color: "from-purple-600 to-violet-600" },
              { icon: TrendingUp, title: "Integrations that matter", desc: "payments, CRM, data sources", color: "from-violet-600 to-pink-600" },
              { icon: Shield, title: "Experiment plan", desc: "what to measure, how to iterate", color: "from-pink-600 to-purple-600" }
            ].map((module, index) => (
              <div key={index} className="glossy-card p-8 text-center group hover:scale-[1.02] transition-all duration-500">
                <div className={`w-16 h-16 bg-gradient-to-r ${module.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-violet-500/20`}>
                  <module.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-white">{module.title}</h3>
                <p className="text-gray-300 leading-relaxed">{module.desc}</p>
              </div>
            ))}
          </div>

          {/* Sample Architectures */}
          <div className="mb-16">
            <h3 className="text-3xl font-display font-bold text-center mb-12 text-white">Sample Architectures</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {architectures.map((arch, index) => (
                <div key={index} className="glossy-card p-8 hover:scale-[1.02] transition-all duration-500">
                  <h4 className="font-display font-semibold text-xl mb-3 text-white">{arch.title}</h4>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">{arch.description}</p>
                  <div className="flex items-center justify-between">
                    {arch.flow.map((step, stepIndex) => (
                      <React.Fragment key={stepIndex}>
                        <div className="text-xs text-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-violet-600/30 to-purple-600/30 rounded-full flex items-center justify-center mb-2 border border-violet-500/30">
                            <span className="text-violet-400 font-semibold">{stepIndex + 1}</span>
                          </div>
                          <span className="text-gray-400 font-medium">{step}</span>
                        </div>
                        {stepIndex < arch.flow.length - 1 && (
                          <ArrowRight className="w-4 h-4 text-purple-400" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={primaryCTA}
              className="premium-button text-xl flex items-center gap-3 mx-auto group"
            >
              <Rocket className="w-6 h-6" />
              Discuss Your MVP Plan
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-white">
            Industries We <span className="gradient-text">Serve</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {industries.map((industry, index) => (
              <div key={index} className="glossy-card p-8 group cursor-pointer hover:scale-[1.02] transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600/30 to-violet-600/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-purple-500/20">
                  <industry.icon className="w-8 h-8 text-purple-400" strokeWidth={2} />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-purple-400 transition-colors text-white">{industry.name}</h3>
                <p className="text-gray-300 leading-relaxed">{industry.useCase}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button
              onClick={primaryCTA}
              className="premium-button text-xl flex items-center gap-3 mx-auto group"
            >
              <Bot className="w-6 h-6" />
              Book Your Discovery Call
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-900/20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-purple-600/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-purple-600/20 backdrop-blur-xl rounded-full px-6 py-3 border border-purple-500/30 mb-8">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-purple-300 font-medium text-sm tracking-wide">OUR BATTLE STACK</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-white tracking-tight" style={{ fontFamily: '"Fraunces", "Playfair Display", serif' }}>
              Fast to ship. <span className="gradient-text">Hard to break.</span> Easy to scale.
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed mb-8" style={{ fontFamily: '"Newsreader", "Crimson Text", serif' }}>
              Voice + automations + product—stitched together for speed, reliability, and ROI.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light leading-relaxed" style={{ fontFamily: '"Instrument Serif", serif' }}>
              From telephony to TTS, from calendars to CRM—we pick what works and ditch what doesn't.
            </p>
          </div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-20">
            {[
              { name: "Vapi", logo: "https://i.ibb.co/DnsNf0g/6566c84fb8540b509c9899f5-18.png", category: "Voice Infrastructure" },
              { name: "OpenAI", logo: "https://i.ibb.co/cKF0FHfh/1088307881504-5d41c65f1d58ab969c5b-512.png", category: "AI Models" },
              { name: "Supabase", logo: "https://i.ibb.co/VcxQQw0X/download-7-copy.png", category: "Database & Auth" },
              { name: "Twilio", logo: "https://i.ibb.co/jkY6bD6h/download-7.png", category: "Communications" },
              { name: "LangChain", logo: "https://i.ibb.co/m5p65K70/fc116b3e3ca6d86f7a6b366597a6da47png.png", category: "AI Orchestration" },
              { name: "Google Gemini", logo: "https://i.ibb.co/1YvPc88B/google-bard-icon-filled-256.png", category: "AI Models" },
              { name: "LangSmith", logo: "https://i.ibb.co/JjFY0jht/Lang-Square.png", category: "AI Development" },
              { name: "n8n", logo: "https://i.ibb.co/TMQC8C0Z/n8n-plugin.png", category: "Automation" },
              { name: "Stripe", logo: "https://i.ibb.co/23Hg5xrL/unnamed-1.png", category: "Payments" },
              { name: "HubSpot", logo: "https://i.ibb.co/rRwj8C8V/unnamed-2.png", category: "CRM" }
            ].map((tech, index) => (
              <div key={index} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative p-6 rounded-3xl bg-transparent backdrop-blur-xl border border-gray-800/50 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
                  
                  {/* Animated Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  {/* Logo Container */}
                  <div className="relative w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <img
                      src={tech.logo}
                      alt={`${tech.name} Logo`}
                      className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                      onError={(e) => {
                        console.log('Tech logo failed to load:', tech.logo);
                        e.currentTarget.style.display = 'none';
                      }}
                      onLoad={() => {
                        console.log('Tech logo loaded successfully:', tech.logo);
                      }}
                    />
                    <div className="absolute -inset-2 bg-purple-500/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Tech Name */}
                  <h3 className="text-sm font-medium text-center text-gray-300 group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </h3>
                  
                  {/* Category Badge */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30">
                      {tech.category}
                    </span>
                  </div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="text-center mb-16">
            <p className="text-lg text-gray-300 max-w-5xl mx-auto leading-relaxed mb-8" style={{ fontFamily: '"Instrument Serif", serif' }}>
              We orchestrate with n8n / Make / Zapier, speak through Vapi + Twilio, think with OpenAI (ChatGPT) + Google Gemini/Vertex, 
              build with LangChain, and tie it all to your business in HubSpot/Salesforce, Stripe, Calendly, Pinecone/Qdrant, Supabase/Postgres/Redis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-purple-400 font-medium">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Rule #1: lower latency, cleaner data, fewer clicks
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                Rule #2: you own the code and infra
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-300 mb-8">Want this wired to your stack?</p>
            <button
              onClick={primaryCTA}
              className="premium-button text-xl flex items-center gap-3 mx-auto group"
            >
              <Bot className="w-6 h-6" />
              Book Your Discovery Call
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glossy-card p-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Call or WhatsApp us directly, or book a discovery call to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a 
                href="tel:+919307512816"
                className="flex items-center gap-3 text-lg text-purple-400 hover:text-purple-300 transition-colors font-mono"
              >
                <Phone className="w-5 h-5" />
                +91 9307512816
              </a>
              <a 
                href="https://wa.me/919307512816"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg text-green-400 hover:text-green-300 transition-colors font-mono"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                </svg>
                WhatsApp
              </a>
            </div>
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
                <Code className="w-5 h-5" />
                $250 Deep-Dive
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}