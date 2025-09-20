import React, { useState, useEffect } from 'react';
import { Bot, Code, ArrowRight, Menu, X, Mic, MessageCircle } from 'lucide-react';
import { Logo } from './components/ui/logo';
import { SaveButton } from './components/ui/save-button';
import { EvervaultCard } from './components/ui/evervault-card';
import { RainbowButton } from './components/ui/rainbow-button';
import { ShimmerButton } from './components/ui/shimmer-button';
import { StarBorder } from './components/ui/star-border';
import { Features } from './components/ui/features-8';

// Import all section components
import { Navbar } from './components/sections/Navbar';
import { OutcomeBar } from './components/sections/OutcomeBar';
import { ServicesSection } from './components/sections/ServicesSection';
import { InteractiveSection } from './components/sections/InteractiveSection';
import { FeaturesSection } from './components/ui/features-section';
import { CaseStudiesSection } from './components/sections/CaseStudiesSection';
import { PricingSection } from './components/ui/pricing-section';
import { StaggerTestimonials } from './components/ui/stagger-testimonials';
import { ProcessSection } from './components/sections/ProcessSection';
import { WhyRapidXAISection } from './components/sections/WhyRapidXAISection';
import { GlowingFeaturesSection } from './components/sections/GlowingFeaturesSection';
import AboutUsSection from './components/ui/about-us-section';
import { BookingSection } from './components/sections/BookingSection';
import { FAQSection } from './components/sections/FAQSection';
import { LampDemo } from './components/ui/lamp';
import { Footer } from './components/sections/Footer';
import { HeroSection } from './components/ui/hero-odyssey';
import PricingSection4 from './components/ui/pricing-section-4';
import VapiWidget from './components/ui/vapi-widget';
import { FeaturesEnhanced } from './components/ui/features-enhanced';
import { PricingPage } from './pages/PricingPage';
import { ServicesPage } from './pages/ServicesPage';
import { TeamPage } from './pages/TeamPage';
import { SocialsPage } from './pages/SocialsPage';
import { ContentLibraryPage } from './pages/ContentLibraryPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';

type PageType = 'home' | 'pricing' | 'services' | 'content' | 'team' | 'socials' | 'terms' | 'privacy' | 'case-studies';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeService, setActiveService] = useState<'voice' | 'mvp'>('voice');
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAIConsultant, setShowAIConsultant] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleNavigate = (event: CustomEvent) => {
      setCurrentPage(event.detail as PageType);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('navigate', handleNavigate as EventListener);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('navigate', handleNavigate as EventListener);
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const primaryCTA = () => {
    window.open('https://calendly.com/shreyasrajsony11/30min', '_blank');
  };

  const secondaryCTA = () => {
    window.open('https://calendly.com/shreyasrajsony11/consultation-with-shreyas-raj', '_blank');
  };

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigation = [
    { name: 'Home', page: 'home' as PageType },
    { name: 'Services', page: 'services' as PageType },
    { name: 'Case Studies', page: 'case-studies' as PageType },
    { name: 'Content', page: 'content' as PageType },
    { name: 'Pricing', page: 'pricing' as PageType },
    { name: 'Team', page: 'team' as PageType },
    { name: 'Socials', page: 'socials' as PageType },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'pricing':
        return <PricingPage primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />;
      case 'services':
        return <ServicesPage primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />;
      case 'content':
        return <ContentLibraryPage primaryCTA={primaryCTA} />;
      case 'team':
        return <TeamPage primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />;
      case 'socials':
        return <SocialsPage primaryCTA={primaryCTA} />;
      case 'case-studies':
        return <CaseStudiesPage primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />;
      case 'terms':
        return <TermsPage />;
      case 'privacy':
        return <PrivacyPage />;
      default:
        return renderHomePage();
    }
  };

  const renderHomePage = () => (
    <>
      {/* Hero Odyssey Section */}
      <HeroSection
        primaryCTA={primaryCTA}
        secondaryCTA={secondaryCTA}
      />

      {/* Enhanced Features Section */}
      <FeaturesEnhanced />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't take our word for it—hear from founders and teams who've transformed their businesses with RapidXAI.
            </p>
          </div>
          
          <StaggerTestimonials />
        </div>
      </section>

      {/* How We Work */}
      <ProcessSection primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />

      {/* Interactive Section with Robot */}
      <InteractiveSection primaryCTA={primaryCTA} />

      {/* Live Booking */}
      <BookingSection primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />

      {/* FAQ */}
      <FAQSection 
        openFaq={openFaq}
        toggleFaq={toggleFaq}
        primaryCTA={primaryCTA}
      />

      {/* Call to Action with Lamp Effect */}
      <section className="relative">
        <LampDemo />
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-4">
          <StarBorder
            as="button"
            onClick={primaryCTA}
            color="#8b5cf6"
            speed="5s"
            className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-semibold transition-all duration-300 shadow-2xl shadow-purple-500/40"
          >
            <div className="flex items-center gap-3 group text-lg">
              <Bot className="w-5 h-5" />
              Book Your Discovery Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </StarBorder>
          
          <StarBorder
            as="button"
            onClick={secondaryCTA}
            color="#ffffff"
            speed="7s"
            className="bg-white/5 backdrop-blur-sm border-2 border-white/30 hover:border-purple-400/50 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center gap-3 group text-lg">
              <Code className="w-5 h-5" />
              $250 Deep-Dive with Shreyas
            </div>
          </StarBorder>
        </div>
      </section>
    </>
  );

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Vapi AI Widget */}
      <VapiWidget 
        apiKey="5f993de5-d691-4f30-be7d-bc085d7c6bf2"
        assistantId="edf8fbad-3aaa-4785-99d6-c3811611a529"
      />

      {/* Enhanced Navbar with Navigation */}
      <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500">
        <div className="flex items-center gap-4">
          {/* Logo Pill */}
          <div className={`relative transition-all duration-500 group hover:scale-105 ${
            isScrolled 
              ? 'bg-gray-900/95 backdrop-blur-3xl border border-gray-600/60 shadow-2xl shadow-purple-500/30' 
              : 'bg-gray-900/70 backdrop-blur-2xl border border-gray-700/50'
          } rounded-full px-3 py-1.5 hover:bg-gray-900/98 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/40`}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-violet-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <button
              onClick={() => setCurrentPage('home')}
              className="relative z-10 hover:scale-105 transition-all duration-300 group-hover:drop-shadow-2xl"
            >
              <Logo size="lg" showText={false} />
            </button>
          </div>

          {/* Navigation Pill */}
          <div className={`hidden xl:flex relative transition-all duration-500 group hover:scale-105 ${
            isScrolled 
              ? 'bg-gray-900/95 backdrop-blur-3xl border border-gray-600/60 shadow-2xl shadow-purple-500/30' 
              : 'bg-gray-900/70 backdrop-blur-2xl border border-gray-700/50'
          } rounded-full px-1 py-0.5 hover:bg-gray-900/98 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/40`}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-violet-600/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-center space-x-0.5">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setCurrentPage(item.page)}
                  className={`relative px-3 py-1.5 rounded-full transition-all duration-300 font-semibold text-sm group/nav ${
                    currentPage === item.page 
                      ? 'text-white bg-gradient-to-r from-purple-600/50 to-violet-600/50 shadow-lg shadow-purple-500/30 border border-purple-500/30' 
                      : 'text-gray-300 hover:text-white hover:bg-white/15 hover:shadow-lg hover:shadow-white/10'
                  }`}
                  style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, system-ui, sans-serif', fontWeight: 600, letterSpacing: '-0.01em' }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {currentPage !== item.page && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-violet-600/30 rounded-full opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button Pill - Only Book Discovery Call */}
          <div className={`relative transition-all duration-300 group hover:scale-105 active:scale-95 ${
            isScrolled 
              ? 'shadow-2xl shadow-purple-500/40' 
              : 'shadow-xl shadow-purple-500/30'
          } rounded-full hover:shadow-3xl hover:shadow-purple-500/60`}>
            <StarBorder
              as="button"
              onClick={primaryCTA}
              color="#8b5cf6"
              speed="4s"
             className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-semibold transition-all duration-300 shadow-lg"
            >
             <div className="flex items-center justify-center gap-2 text-sm px-4 py-2">
                <Bot className="w-4 h-4" />
                Book Discovery Call
              </div>
            </StarBorder>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <div className={`relative transition-all duration-500 hover:scale-105 ${
              isScrolled 
                ? 'bg-gray-900/95 backdrop-blur-3xl border border-gray-600/60 shadow-2xl shadow-purple-500/30' 
                : 'bg-gray-900/70 backdrop-blur-2xl border border-gray-700/50'
            } rounded-full p-1.5 hover:bg-gray-900/98 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/30`}>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white p-1 rounded-full hover:bg-white/15 transition-all duration-300 hover:scale-110"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-1/2 transform -translate-x-1/2 mt-2 border border-gray-700/60 bg-gray-900/98 backdrop-blur-3xl rounded-2xl shadow-2xl shadow-purple-500/30 min-w-[280px]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setCurrentPage(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`block px-4 py-2 text-sm font-semibold transition-all duration-300 w-full text-left rounded-xl hover:scale-[1.02] ${
                    currentPage === item.page 
                      ? 'text-white bg-gradient-to-r from-purple-600/40 to-violet-600/40 shadow-lg shadow-purple-500/20' 
                      : 'text-gray-300 hover:text-white hover:bg-white/15'
                  }`}
                  style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2 pb-1 space-y-2">
                <SaveButton
                  text={{
                    idle: "Book Discovery Call",
                    saving: "Booking...",
                    saved: "Booked!"
                  }}
                  onClick={async () => {
                    primaryCTA();
                    setMobileMenuOpen(false);
                    await new Promise(resolve => setTimeout(resolve, 1000));
                  }}
                  className="text-sm w-full bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl hover:from-purple-500 hover:to-violet-500 font-bold shadow-lg shadow-purple-500/30"
                />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* AI Consultant Button - Corner with Attention Animation */}

      {/* Page Content */}
      {renderPage()}

      {/* Footer */}
      <Footer primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;