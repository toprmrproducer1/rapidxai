import React from 'react';
import { ArrowRight, Bot, Code, ExternalLink, Play, Phone, Rocket, Target, TrendingUp, Users, Clock, Star, Shield, CheckCircle, Calendar } from 'lucide-react';
import { ClientsSection } from '@/components/ui/testimonial-card';
import { MinimalStepsCard } from '@/components/ui/card-6';

interface CaseStudiesPageProps {
  primaryCTA: () => void;
  secondaryCTA: () => void;
}

export function CaseStudiesPage({ primaryCTA, secondaryCTA }: CaseStudiesPageProps) {
  const statsData = [
    { value: "100%", label: "Delivery Track Record" },
    { value: "2-4mo", label: "Average Payback" },
    { value: "10×", label: "Capacity Gains" },
  ];

  const testimonialsData = [
    {
      name: "Jahmai Nicome",
      title: "Real Estate Investor",
      quote: "Absolutely game-changing automation for my business. The voice agent calls 250 brokers twice weekly with better quality than our previous solution—and at 7¢ per connected minute.",
      avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5.0,
    },
    {
      name: "Justin Cohen",
      title: "Founder, Exsportium",
      quote: "Revolutionized our curriculum process. 5 hours per plan is now 10 minutes with better quality. We scaled offerings 4× without adding planning staff.",
      avatarSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
    },
    {
      name: "MMG Digital Team",
      title: "Leadership Team",
      quote: "We went from 50 to 500 freelancers coached, without expanding the team. 70% overhead reduction. ROI in under 3 months.",
      avatarSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
    },
    {
      name: "Restaurant Ops Lead",
      title: "Multi-Location Chain",
      quote: "Reservations saved during peak hours, staff freed up, and confirmations handled automatically. The agent never sleeps—our host stand finally can.",
      avatarSrc: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 4.7,
    },
    {
      name: "VEDA Stakeholder",
      title: "Lead Conversion Team",
      quote: "From 4 hours to 30 seconds response time. 25–40% lift in qualified bookings and $3–5k/mo saved. We actually see where the revenue comes from.",
      avatarSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
    },
  ];

  const flagshipCases = [
    {
      title: "DialEstatePro",
      subtitle: "Real-Estate Calling, Done Right",
      description: "Cold-calling at scale with AI Voice that books more meetings, logs everything, and never needs a coffee.",
      metrics: [
        { label: "Brokers served", value: "250", unit: "twice weekly" },
        { label: "Connect time", value: "2s", unit: "max" },
        { label: "Cost per minute", value: "7¢", unit: "connected" },
        { label: "Availability", value: "24/7", unit: "" }
      ],
      impact: "Power dialer + compliant DNC handling, predictive call distribution, CRM sync, analytics, and AI Voice that outperformed the previous stack on call quality and latency.",
      recordingUrl: "https://drive.google.com/file/d/1Gc9_b2owUL9fupVh9Fmnr3B7YSbDQoCk/view",
      platformUrl: "https://dialestatepro.xyz",
      icon: Phone,
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "VEDA",
      subtitle: "Lead Conversion Dashboard (Voice-First Response)",
      description: "Turn slow, leaky lead handling into sub-minute response and higher-quality bookings.",
      metrics: [
        { label: "Response time", value: "4h → 30s", unit: "" },
        { label: "Booking increase", value: "25-40%", unit: "" },
        { label: "Conversion lift", value: "74%", unit: "average" },
        { label: "Monthly savings", value: "$3-5k", unit: "" }
      ],
      impact: "Unified lead capture (multi-channel) + AI Voice callbacks, automated reminders/reschedules, and a conversion dashboard.",
      recordingUrl: "https://drive.google.com/file/d/1E70wQNmW8QVuyMazcbATSThoLS4ghltD/view",
      icon: Target,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "EduForge AI",
      subtitle: "Curriculum & School Ops, Reinvented",
      description: "Lesson planning in 10 minutes (not 5 hours), consistent quality across instructors, and instant resource discovery.",
      metrics: [
        { label: "Planning time", value: "95%", unit: "reduction" },
        { label: "Output lift", value: "400%", unit: "" },
        { label: "Resource discovery", value: "99%", unit: "time saved" },
        { label: "Student engagement", value: "+31%", unit: "" }
      ],
      impact: "AI lesson generator, assessment builder, resource finder, progress tracking, curriculum mapping—the minimum lovable system for educators.",
      icon: Rocket,
      gradient: "from-purple-500 to-violet-500"
    },
    {
      title: "MMG Digital",
      subtitle: "Agent Swarm for Freelancer Coaching",
      description: "Scale coaching from 50 → 500 freelancers without 10× coaching headcount.",
      metrics: [
        { label: "Coaching overhead", value: "70%", unit: "reduction" },
        { label: "ROI timeline", value: "2-3", unit: "months" },
        { label: "Annual savings", value: "$60k+", unit: "" },
        { label: "Coverage", value: "24/7", unit: "expert-level" }
      ],
      impact: "'Master' PPC agent distilled from 15 years of expertise, 100+ personalized coaching agents, auto daily analysis, Babkee/Telegram access, and a living knowledge base.",
      icon: Users,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const snapshots = [
    {
      name: "ContentForge",
      description: "AI content engine for a marketing agency",
      results: "80% cost reduction; 10× speed; 85% first-draft acceptance; 300–500% ROI in 3 months",
      url: "contentforge.pro"
    },
    {
      name: "AdScripts.co",
      description: "AI video ad scripting with Kevin Anson",
      results: "90% cost reduction; weeks → hours; +60% conversion; 10+ variants per concept",
      url: "adscripts.co"
    }
  ];

  // Generate sample data for the performance card
  const generatePerformanceData = (days: number) => {
    return Array.from({ length: days }, () => ({
      value: Math.floor(Math.random() * 500) + 100, // Calls between 100-600
    }));
  };

  const performanceData = generatePerformanceData(30);

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[1200px] h-[800px] bg-purple-600/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-8 tracking-tight">
              Case Studies & <span className="gradient-text">Client Results</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light mb-8">
              From first pilot to enterprise-grade automation
            </p>
            <p className="text-lg text-gray-300 max-w-5xl mx-auto leading-relaxed">
              We build AI Voice Agents that pick up in seconds and MVP/Micro-SaaS that prove what works fast. Pilots start lean; full programs scale past $100k+ when we take a business line from manual to automated—24/7, instrumented, and revenue-accountable.
            </p>
          </div>

          {/* At a Glance Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            <div className="tech-card p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <p className="text-gray-400">delivery track record with measurable ROI</p>
            </div>
            <div className="tech-card p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">2–4mo</div>
              <p className="text-gray-400">average payback after go-live</p>
            </div>
            <div className="tech-card p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">10×</div>
              <p className="text-gray-400">capacity gains without proportional headcount</p>
            </div>
            <div className="tech-card p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <p className="text-gray-400">uptime targets; &lt;2s response times</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}>Flagship Cases</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {flagshipCases.map((caseStudy, index) => (
              <div key={index} className="tech-card p-8 group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${caseStudy.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <caseStudy.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}>{caseStudy.title}</h3>
                    <p className="text-purple-400 font-medium" style={{ fontFamily: '"Instrument Serif", serif' }}>{caseStudy.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed font-light" style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 300 }}>{caseStudy.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {caseStudy.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="bg-gray-800/30 rounded-lg p-3">
                      <div className="text-lg font-bold text-white">{metric.value}</div>
                      <div className="text-sm text-gray-400">{metric.label}</div>
                      {metric.unit && <div className="text-xs text-purple-400">{metric.unit}</div>}
                    </div>
                  ))}
                </div>

                <p className="text-gray-300 mb-6 text-sm leading-relaxed">{caseStudy.impact}</p>

                <div className="flex flex-col gap-3">
                  {caseStudy.recordingUrl && (
                    <a
                      href={caseStudy.recordingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Play className="w-4 h-4" />
                      Watch Recording
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {caseStudy.platformUrl && (
                    <a
                      href={caseStudy.platformUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {caseStudy.platformUrl.replace('https://', '')}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics Card */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-16">
            <MinimalStepsCard
              title="Monthly Calls"
              subtitle="January 2025"
              totalSteps={12450}
              stepsUnit="calls handled"
              icon={<Phone className="h-5 w-5 text-purple-400" />}
              data={performanceData}
              className="bg-gray-900/50 border-gray-800/50"
            />
          </div>
        </div>
      </section>

      {/* Why It's Worth $100k+ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Why It's Worth $100k+ at Enterprise Scale</h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Once this stack runs across multiple markets, teams, and compliance regimes, you're not buying a dialer—you're buying always-on pipeline: orchestration, QA, analytics, governance, and continuous optimization.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="tech-card p-8">
              <h3 className="text-xl font-bold mb-4 text-white">What You Get</h3>
              <ul className="space-y-3 text-left">
                {[
                  "24/7 voice coverage (inbound + outbound + callbacks)",
                  "Calendar + CRM + compliance + audit trails",
                  "Analytics that explain where revenue is coming from",
                  "Productization (auth, billing, roles, dashboards, CI/CD)",
                  "Rollout, training, and hardening for enterprise scale"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="tech-card p-8">
              <h3 className="text-xl font-bold mb-4 text-white">Typical Investment</h3>
              <div className="text-left space-y-4">
                <div className="bg-purple-600/20 rounded-lg p-4 border border-purple-500/30">
                  <div className="text-2xl font-bold text-white mb-2">$100k+</div>
                  <p className="text-purple-400 text-sm">Enterprise programs (phased)</p>
                </div>
                <div className="bg-green-600/20 rounded-lg p-4 border border-green-500/30">
                  <div className="text-xl font-bold text-white mb-2">2–4 months</div>
                  <p className="text-green-400 text-sm">Payback timeline once live</p>
                </div>
                <p className="text-gray-400 text-sm">
                  Speed-to-lead and no-show rescue translate directly to revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Snapshots */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Snapshots (Fast Wins We Like to Show)</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {snapshots.map((snapshot, index) => (
              <div key={index} className="tech-card p-8">
                <h3 className="text-xl font-bold text-white mb-2">{snapshot.name}</h3>
                <p className="text-gray-400 mb-4">{snapshot.description}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">{snapshot.results}</p>
                <a
                  href={`https://${snapshot.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {snapshot.url}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <ClientsSection
        tagLabel="Client Results"
        title="What Buyers Say After Go-Live"
        description="Real feedback from founders and teams who've transformed their businesses with RapidXAI automation."
        stats={statsData}
        testimonials={testimonialsData}
        primaryActionLabel="Book Discovery Call"
        secondaryActionLabel="$250 Deep-Dive"
        onPrimaryAction={primaryCTA}
        onSecondaryAction={secondaryCTA}
        className="bg-gray-950"
      />

      {/* Our Playbook */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Playbook (Why Results Repeat)</h2>
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {[
              { step: "01", title: "Discover", desc: "the leak (missed calls, slow callbacks, no-shows, messy handoffs)", icon: Target },
              { step: "02", title: "Design", desc: "flows that collapse to one outcome: qualified meetings on the calendar", icon: Star },
              { step: "03", title: "Build & Integrate", desc: "telephony/SIP, ASR/NLU/TTS, calendars, CRM, WhatsApp/SMS", icon: Code },
              { step: "04", title: "Deploy & Learn", desc: "instrument speed-to-lead, bookings, show rate; iterate weekly", icon: Rocket },
              { step: "05", title: "Productize", desc: "when the voice loop works, ship the MVP → v1 with auth, billing, analytics", icon: TrendingUp }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <phase.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <div className="text-lg font-bold text-purple-400 mb-2">{phase.step}</div>
                <h3 className="text-lg font-bold mb-3 text-white">{phase.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-900/30 rounded-2xl p-8 border border-gray-800/50 backdrop-blur-sm text-center">
            <p className="text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">Operating standards:</span> 99.9% uptime target, sub-2s responses, 400+ integrations, DNC/opt-out guardrails, and documentation + handover included.
            </p>
          </div>
        </div>
      </section>

      {/* Ready to See It Work */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to See It Work?</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="https://drive.google.com/file/d/1Gc9_b2owUL9fupVh9Fmnr3B7YSbDQoCk/view"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-card p-6 hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <Play className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-bold text-white">DialEstatePro Recording</h3>
              </div>
              <p className="text-gray-400 text-sm">Real estate voice SDR in action</p>
              <div className="flex items-center gap-2 mt-4 text-purple-400 group-hover:text-purple-300 transition-colors">
                <span className="text-sm">Watch Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
            
            <a
              href="https://drive.google.com/file/d/1E70wQNmW8QVuyMazcbATSThoLS4ghltD/view"
              target="_blank"
              rel="noopener noreferrer"
              className="tech-card p-6 hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <Play className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-bold text-white">VEDA Recording</h3>
              </div>
              <p className="text-gray-400 text-sm">Lead conversion dashboard + voice callbacks</p>
              <div className="flex items-center gap-2 mt-4 text-purple-400 group-hover:text-purple-300 transition-colors">
                <span className="text-sm">Watch Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
          
          <p className="text-gray-400 mb-8">(Recordings: functioning projects; more on request.)</p>
          
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
              $250 Deep-Dive with Shreyas
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}