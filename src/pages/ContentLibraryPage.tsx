import React, { useState } from 'react';
import { Search, Play, Clock, Users, Target, ArrowRight, Bot, Phone, Rocket, Calendar, Globe, Car, Building, Utensils, FileText, Code, Shield } from 'lucide-react';
import { ArticleCard } from '@/components/ui/card-23';
import { MarketingDashboard } from '@/components/ui/marketing-dashboard';

interface ContentLibraryPageProps {
  primaryCTA: () => void;
}

interface Service {
  id: string;
  title: string;
  oneLiner: string;
  pains: string[];
  deliverables: string[];
  timeline: string;
  kpis: string[];
  plan: string;
  icon: React.ElementType;
  category: 'voice' | 'mvp' | 'automation';
  relatedVideos: string[];
}

interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  platform: 'youtube' | 'instagram';
  duration?: string;
  category: 'voice' | 'mvp' | 'demo' | 'tutorial';
  relatedServices: string[];
}

const services: Service[] = [
  {
    id: 'inbound-receptionist',
    title: 'Inbound AI Voice Receptionist (24/7)',
    oneLiner: 'Never miss a call again—answer, qualify, and book within seconds.',
    pains: ['After-hours voicemail', 'slow callbacks', 'unlogged calls'],
    deliverables: ['Greet→qualify→route→schedule', 'CRM notes', 'reminders & reschedules', 'after-hours coverage'],
    timeline: '2 weeks to first booking',
    kpis: ['answer rate', 'speed-to-lead', 'meetings booked', 'show rate'],
    plan: 'Starter → Growth',
    icon: Phone,
    category: 'voice',
    relatedVideos: ['4lCMadDNhFU', '8DkzkrvswKA']
  },
  {
    id: 'outbound-callbacks',
    title: 'Outbound Callbacks & Win-Backs (Voice SDR)',
    oneLiner: 'Instant callbacks for form fills and missed calls; revive cold leads.',
    pains: ['Web form abandonment', 'stale leads'],
    deliverables: ['Callback logic', 'list throttling', 'time-zone windows', 'warm transfer'],
    timeline: '2–3 weeks',
    kpis: ['callback time', 'connect rate', 'meetings set'],
    plan: 'Growth',
    icon: Target,
    category: 'voice',
    relatedVideos: ['qcbnxzsou4w', 'EgnhuAmy82s']
  },
  {
    id: 'appointment-reminders',
    title: 'Appointment Reminders & No-Show Rescue',
    oneLiner: 'Automated reminder + reschedule flows that protect your calendar.',
    pains: ['No-shows', 'manual follow-ups', 'messy reschedules'],
    deliverables: ['Multichannel reminders', 'auto-reschedule', 'status sync to CRM'],
    timeline: '1–2 weeks',
    kpis: ['show rate', 'rebook rate', 'churned-slot recovery'],
    plan: 'Starter → Growth',
    icon: Calendar,
    category: 'automation',
    relatedVideos: ['LfuDP_gO1X4']
  },
  {
    id: 'multilingual-agent',
    title: 'Multilingual/Hinglish Agent (India-ready)',
    oneLiner: 'Natural Hindi + English (and Hinglish) for real buyer conversations.',
    pains: ['Language mismatch', 'regional calls lost'],
    deliverables: ['Bilingual prompts', 'fallback & escalation', 'DNC/opt-out'],
    timeline: '2 weeks',
    kpis: ['connect & qual rates by language', 'bookings'],
    plan: 'Growth / Scale',
    icon: Globe,
    category: 'voice',
    relatedVideos: ['b0bPg_SL4tM', '4lCMadDNhFU']
  },
  {
    id: 'real-estate-tours',
    title: 'Real Estate Tour-Booking Agent',
    oneLiner: 'From listing Q&A to tour booked—even after hours.',
    pains: ['Missed inquiries', 'poor follow-ups', 'agent time wasted'],
    deliverables: ['Listing Q&A', 'tour-booking', 'WhatsApp confirmations', 'CRM tags'],
    timeline: '2–3 weeks',
    kpis: ['tours booked', 'show rate', 'time-to-tour'],
    plan: 'Starter → Growth',
    icon: Building,
    category: 'voice',
    relatedVideos: []
  },
  {
    id: 'automotive-testdrive',
    title: 'Automotive Test-Drive & Pre-Qual Agent',
    oneLiner: 'Instant callback, vehicle interest capture, test-drive booked.',
    pains: ['Slow response (BDC)', 'low show rates'],
    deliverables: ['Budget/trade-in pre-qual', 'store routing', 'test-drive scheduling'],
    timeline: '2–3 weeks',
    kpis: ['response time', 'test-drives', 'closing %', 'CSAT proxy'],
    plan: 'Growth',
    icon: Car,
    category: 'voice',
    relatedVideos: []
  },
  {
    id: 'clinic-intake',
    title: 'Clinic Intake & Scheduling (Bilingual)',
    oneLiner: 'Intake → insurance checklist → appointment booked—front-desk load drops.',
    pains: ['Busy lines', 'missed calls', 'manual intake'],
    deliverables: ['Bilingual flow', 'reminders/reschedules', 'EHR/PM integration options'],
    timeline: '2–4 weeks',
    kpis: ['answer rate', 'bookings', 'show rate', 'staff time saved'],
    plan: 'Growth / Scale',
    icon: Users,
    category: 'voice',
    relatedVideos: []
  },
  {
    id: 'restaurant-reservations',
    title: 'Restaurant Reservations & Missed-Call Capture',
    oneLiner: 'Never lose walk-ins to voicemail—auto-reservations & confirmations.',
    pains: ['Peak-hour chaos', 'missed calls'],
    deliverables: ['Reservations/waitlist', 'hours/menu FAQs', 'confirmations via WhatsApp/SMS'],
    timeline: '1–2 weeks',
    kpis: ['reservations saved', 'peak overflow handled'],
    plan: 'Starter',
    icon: Utensils,
    category: 'voice',
    relatedVideos: ['dxydxeuttPY']
  },
  {
    id: 'knowledge-faq',
    title: 'Knowledge-Powered FAQ for Voice & Text',
    oneLiner: 'Your policies, pricing models, hours—spoken back accurately.',
    pains: ['Repetitive queries', 'inconsistent answers'],
    deliverables: ['KB ingestion', 'guardrails', 'confidence checks', 'human handoff'],
    timeline: '1 week',
    kpis: ['deflection rate', 'average handle time', 'handoff quality'],
    plan: 'Starter → Growth',
    icon: FileText,
    category: 'automation',
    relatedVideos: []
  },
  {
    id: 'mvp-v0',
    title: 'MVP v0 (Proof in Weeks)',
    oneLiner: 'The smallest product customers will pay for—auth, one core workflow, 1–2 integrations.',
    pains: ['Shipping guesswork', 'long build cycles'],
    deliverables: ['Repo', 'clean UI', 'instrumentation (events/funnels)', 'docs & handover'],
    timeline: '2–3 weeks',
    kpis: ['activation', 'time-to-value', 'first revenue'],
    plan: 'Starter / Growth',
    icon: Rocket,
    category: 'mvp',
    relatedVideos: ['p63-UK3txHs']
  },
  {
    id: 'product-v1',
    title: 'Product v1 (Billing + Roles + Dashboards)',
    oneLiner: 'Turn the MVP that works into a product you can scale.',
    pains: ['no user management', 'limited insights'],
    deliverables: ['Billing live (Stripe/Chargebee)', 'roles/permissions', 'dashboards', 'CI/CD', 'error tracking'],
    timeline: '4–8 weeks',
    kpis: ['MRR', 'retention', 'cohort activation'],
    plan: 'Growth',
    icon: Code,
    category: 'mvp',
    relatedVideos: []
  },
  {
    id: 'multi-tenant',
    title: 'Multi-Tenant & Compliance (Scale)',
    oneLiner: 'Hardened SaaS: multi-tenant, usage-based billing, audit logs, SSO/SAML, DR.',
    pains: ['Enterprise security', 'governance', 'reliability'],
    deliverables: ['Multi-tenant architecture', 'usage billing', 'audit logs', 'SSO/SAML', 'disaster recovery'],
    timeline: '6–10+ weeks (phased)',
    kpis: ['uptime', 'tenant isolation', 'security audits passed'],
    plan: 'Scale',
    icon: Shield,
    category: 'mvp',
    relatedVideos: []
  }
];

const videos: Video[] = [
  {
    id: 'b0bPg_SL4tM',
    title: 'I Got Indian Phone Numbers for AI Agents (After Spending ₹2L+)',
    description: 'India-ready telephony walkthrough showing real routes to working numbers.',
    youtubeId: 'b0bPg_SL4tM',
    platform: 'youtube',
    duration: '15:42',
    category: 'tutorial',
    relatedServices: ['multilingual-agent', 'inbound-receptionist']
  },
  {
    id: '4lCMadDNhFU',
    title: 'Setup AI Voice Agent with India Phone Number — Ready in Minutes',
    description: 'Fast, actionable setup guide perfect for Starter plan customers.',
    youtubeId: '4lCMadDNhFU',
    platform: 'youtube',
    duration: '12:30',
    category: 'tutorial',
    relatedServices: ['inbound-receptionist', 'multilingual-agent']
  },
  {
    id: 'qcbnxzsou4w',
    title: 'AI Cold Calling & SDR System Demo | 16-YO Makes $10K',
    description: 'End-to-end outbound callbacks and meeting-setting mechanics.',
    youtubeId: 'qcbnxzsou4w',
    platform: 'youtube',
    duration: '18:25',
    category: 'demo',
    relatedServices: ['outbound-callbacks']
  },
  {
    id: 'LfuDP_gO1X4',
    title: 'Automate Voice Calls for Appointment Reminders (Calendar-Driven)',
    description: 'Demonstrates reminders and reschedules pipeline automation.',
    youtubeId: 'LfuDP_gO1X4',
    platform: 'youtube',
    duration: '14:15',
    category: 'tutorial',
    relatedServices: ['appointment-reminders']
  },
  {
    id: '8DkzkrvswKA',
    title: 'Automate Customer Support with an AI Voice Agent (Beginner Guide)',
    description: 'Clean "from zero" explainer for inbound FAQ deflection.',
    youtubeId: '8DkzkrvswKA',
    platform: 'youtube',
    duration: '16:45',
    category: 'tutorial',
    relatedServices: ['knowledge-faq', 'inbound-receptionist']
  },
  {
    id: 'EgnhuAmy82s',
    title: 'Live Cold Calling: Books AI Demo with Million-₹ Business',
    description: 'Social proof that voice + hustle fills calendars.',
    youtubeId: 'EgnhuAmy82s',
    platform: 'youtube',
    duration: '22:10',
    category: 'demo',
    relatedServices: ['outbound-callbacks']
  },
  {
    id: 'gov6DBZ9m5c',
    title: 'Goodbye Sora, Hello Veo 2 (Market Commentary)',
    description: 'Thought-leadership piece showing industry range.',
    youtubeId: 'gov6DBZ9m5c',
    platform: 'youtube',
    duration: '8:30',
    category: 'tutorial',
    relatedServices: []
  },
  {
    id: 'WIaRn8-SB_4',
    title: 'Personal Branding, $10K Hustles & Russia (Podcast Ep.)',
    description: 'Founder story content and business insights.',
    youtubeId: 'WIaRn8-SB_4',
    platform: 'youtube',
    duration: '45:20',
    category: 'tutorial',
    relatedServices: []
  },
  {
    id: 'dxydxeuttPY',
    title: 'Day 1: AI Voice Agent for Table Bookings (Restaurant)',
    description: '20-second "it works" demo for restaurant automation.',
    youtubeId: 'dxydxeuttPY',
    platform: 'youtube',
    duration: '0:20',
    category: 'demo',
    relatedServices: ['restaurant-reservations']
  },
  {
    id: '0zq-e40FhgI',
    title: '2 Reasons Why 99% of AI Agencies Fail (Fast Talk)',
    description: 'Snappy positioning content for agency builders.',
    youtubeId: '0zq-e40FhgI',
    platform: 'youtube',
    duration: '0:45',
    category: 'tutorial',
    relatedServices: []
  },
  {
    id: 'p63-UK3txHs',
    title: 'Build an AI Agency Website in 60 Seconds (3 Prompts)',
    description: 'Quick MVP hook for technical audience.',
    youtubeId: 'p63-UK3txHs',
    platform: 'youtube',
    duration: '1:00',
    category: 'tutorial',
    relatedServices: ['mvp-v0']
  }
];

export function ContentLibraryPage({ primaryCTA }: ContentLibraryPageProps) {
  const [activeTab, setActiveTab] = useState<'services' | 'videos'>('services');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.oneLiner.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.pains.some(pain => pain.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'voice', label: 'Voice AI' },
    { id: 'mvp', label: 'MVP/SaaS' },
    { id: 'automation', label: 'Automation' },
    { id: 'demo', label: 'Demos' },
    { id: 'tutorial', label: 'Tutorials' }
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[1200px] h-[800px] bg-purple-600/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-display font-bold mb-8 tracking-tight leading-tight" style={{ fontFamily: '"Fraunces", "Playfair Display", serif' }}>
              <span className="gradient-text">Playbooks</span> & Insights
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-8" style={{ fontFamily: '"Newsreader", "Instrument Serif", serif' }}>
              Curated wisdom from the field
            </p>
            <p className="text-xl text-purple-400 max-w-2xl mx-auto font-light" style={{ fontFamily: '"Instrument Serif", serif' }}>
              Ship smarter with proven strategies
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-900/30 backdrop-blur-xl rounded-2xl p-2 border border-gray-800/30">
              <div className="flex items-center">
                <button
                  onClick={() => setActiveTab('services')}
                  className={`px-8 py-3 rounded-xl transition-all duration-300 font-medium ${
                    activeTab === 'services'
                      ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Services Library
                </button>
                <button
                  onClick={() => setActiveTab('videos')}
                  className={`px-8 py-3 rounded-xl transition-all duration-300 font-medium ${
                    activeTab === 'videos'
                      ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Video Library
                </button>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-900/30 border border-gray-800/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 backdrop-blur-xl"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-gray-800/30 text-gray-300 hover:bg-gray-700/30 hover:text-white backdrop-blur-xl'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'services' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-gray-900/20 backdrop-blur-sm border border-gray-800/20 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-xl border border-purple-500/20">
                      <service.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold text-white mb-1" style={{ fontFamily: '"Fraunces", serif' }}>{service.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        service.plan.includes('Starter') ? 'bg-green-500/20 text-green-400' :
                        service.plan.includes('Growth') ? 'bg-blue-500/20 text-blue-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {service.plan}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed font-light text-lg" style={{ fontFamily: '"Newsreader", serif' }}>{service.oneLiner}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-bold text-red-400 mb-3" style={{ fontFamily: '"Playfair Display", serif' }}>Challenges</h4>
                      <ul className="space-y-1">
                        {service.pains.map((pain, index) => (
                          <li key={index} className="text-sm text-gray-400 flex items-center gap-3">
                            <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                            {pain}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-green-400 mb-3" style={{ fontFamily: '"Playfair Display", serif' }}>Deliverables</h4>
                      <ul className="space-y-1">
                        {service.deliverables.map((deliverable, index) => (
                          <li key={index} className="text-sm text-gray-400 flex items-center gap-3">
                            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-4 text-sm">
                      <div>
                        <span className="text-blue-400 font-bold block mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>Timeline: </span>
                        <p className="text-gray-300 font-medium">{service.timeline}</p>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <span className="text-purple-400 font-bold block mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>Metrics</span>
                      <div className="flex flex-wrap gap-2">
                        {service.kpis.map((kpi, index) => (
                          <span key={index} className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1.5 rounded-full border border-purple-500/30">
                            {kpi}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Related Videos */}
                  {service.relatedVideos.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-purple-400 mb-3" style={{ fontFamily: '"Playfair Display", serif' }}>Content</h4>
                      <div className="space-y-2">
                        {service.relatedVideos.map((videoId) => {
                          const video = videos.find(v => v.youtubeId === videoId);
                          return video ? (
                            <div 
                              key={videoId}
                              className="bg-gray-800/30 rounded-lg p-3 cursor-pointer hover:bg-gray-800/50 transition-all duration-300 hover:scale-[1.02] border border-gray-700/30 hover:border-purple-500/30"
                              onClick={() => setSelectedVideo(videoId)}
                            >
                              <div className="flex items-center gap-3">
                                <div className="relative">
                                  <img 
                                    src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                                    alt={video.title}
                                    className="w-16 h-12 object-cover rounded"
                                  />
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <Play className="w-4 h-4 text-white" />
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm text-white font-semibold line-clamp-2" style={{ fontFamily: '"Playfair Display", serif' }}>{video.title}</p>
                                  <p className="text-xs text-gray-400">{video.duration}</p>
                                </div>
                              </div>
                            </div>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={primaryCTA}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600/60 to-violet-600/60 hover:from-purple-600 hover:to-violet-600 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group border border-purple-500/20 backdrop-blur-xl hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    <Bot className="w-4 h-4" />
                    Book Discovery Call
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="bg-gray-900/20 backdrop-blur-sm border border-gray-800/20 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <div className="relative group cursor-pointer" onClick={() => setSelectedVideo(video.youtubeId)}>
                    <img
                      src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-purple-600/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/20">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    {video.duration && (
                      <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs text-white font-medium">
                        {video.duration}
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        video.category === 'demo' ? 'bg-red-500/80 text-white' :
                        video.category === 'tutorial' ? 'bg-blue-500/80 text-white' :
                        'bg-purple-500/80 text-white'
                      }`}>
                        {video.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display font-bold text-xl mb-4 text-white leading-tight" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}>{video.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed font-light" style={{ fontFamily: '"Instrument Serif", serif', fontWeight: 300 }}>{video.description}</p>
                    
                    {video.relatedServices.length > 0 && (
                      <div className="mb-4">
                        <span className="text-xs text-purple-400 font-bold" style={{ fontFamily: '"Playfair Display", serif' }}>Related</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {video.relatedServices.map((serviceId) => {
                            const relatedService = services.find(s => s.id === serviceId);
                            return relatedService ? (
                              <span key={serviceId} className="text-xs bg-gray-800/30 text-gray-300 px-2 py-1 rounded backdrop-blur-xl">
                                {relatedService.title.split(' ')[0]}
                              </span>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}

                    <button
                      onClick={primaryCTA}
                      className="w-full px-4 py-2 bg-gradient-to-r from-purple-600/60 to-violet-600/60 hover:from-purple-600 hover:to-violet-600 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group border border-purple-500/20 text-sm backdrop-blur-xl hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25"
                    >
                      <Bot className="w-4 h-4" />
                      Book Discovery Call
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}>Featured Content</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ArticleCard
              tag="AI Voice"
              date={{ month: "JAN", day: 15 }}
              title="Voice Agent Success"
              description="AI voice agents transformed lead qualification, booking 3x more tours."
              imageUrl="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop"
              imageAlt="Real estate success story"
              location={{ city: "Mumbai", country: "India" }}
              className="bg-gray-900/50 border-gray-800/50 hover:border-purple-500/50 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
            />
            <ArticleCard
              tag="MVP Launch"
              date={{ month: "JAN", day: 10 }}
              title="SaaS in 3 Weeks"
              description="From concept to paying customers: micro-SaaS generating $5K MRR."
              imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
              imageAlt="SaaS development success"
              location={{ city: "Bangalore", country: "India" }}
              className="bg-gray-900/50 border-gray-800/50 hover:border-purple-500/50 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
            />
            <ArticleCard
              tag="Automation"
              date={{ month: "JAN", day: 5 }}
              title="24/7 Lead Capture"
              description="Restaurant chain reduces missed calls by 95% with AI automation."
              imageUrl="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop"
              imageAlt="Restaurant automation case study"
              location={{ city: "Delhi", country: "India" }}
              className="bg-gray-900/50 border-gray-800/50 hover:border-purple-500/50 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
            />
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900/95 backdrop-blur-2xl rounded-2xl overflow-hidden max-w-4xl w-full border border-gray-800/50 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-800/50">
              <h3 className="font-display font-semibold text-white">Video Player</h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800/50 rounded-lg"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6 text-center bg-gray-900/50">
              <p className="text-gray-300 mb-4 font-light">Want this working for you?</p>
              <button
                onClick={() => {
                  setSelectedVideo(null);
                  primaryCTA();
                }}
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 mx-auto group text-white"
              >
                <Bot className="w-5 h-5" />
                Book Your Discovery Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sticky CTA */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={primaryCTA}
          className="px-6 py-3 bg-gradient-to-r from-purple-600/90 to-violet-600/90 hover:from-purple-600 hover:to-violet-600 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 shadow-2xl shadow-purple-500/25 group backdrop-blur-xl border border-purple-500/20"
        >
          <Bot className="w-5 h-5" />
          Book Discovery Call
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}