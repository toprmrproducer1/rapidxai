import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
  primaryCTA: () => void;
  secondaryCTA: () => void;
}

export function Navbar({ isScrolled, primaryCTA, secondaryCTA }: NavbarProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-950/95 backdrop-blur-lg border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold gradient-text">
              RapidXAI
            </h1>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQs</a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={secondaryCTA}
              className="hidden sm:inline-flex tech-button text-sm"
            >
              $250 Deep-Dive
            </button>
            <button
              onClick={primaryCTA}
              className="premium-button px-6 py-3 text-sm"
            >
              Book Discovery Call
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}