import React from 'react';
import { Logo } from '../ui/logo';
import { SaveButton } from '../ui/save-button';

interface FooterProps {
  primaryCTA: () => void;
  secondaryCTA: () => void;
  setCurrentPage: (page: string) => void;
}

export function Footer({ primaryCTA, secondaryCTA, setCurrentPage }: FooterProps) {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
          <div>
            <Logo size="lg" className="mb-2" />
            <p className="text-gray-400 text-xs sm:text-sm">
              AI automation.
            </p>
          </div>
          
          <div className="text-center order-3 md:order-2">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm mb-3 sm:mb-4">
              <button onClick={() => setCurrentPage('services')} className="text-gray-400 hover:text-purple-400 transition-colors">Services</button>
              <button onClick={() => setCurrentPage('case-studies')} className="text-gray-400 hover:text-purple-400 transition-colors">Cases</button>
              <button onClick={() => setCurrentPage('pricing')} className="text-gray-400 hover:text-purple-400 transition-colors">Pricing</button>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end order-2 md:order-3">
            <SaveButton
              text={{
                idle: "Book Call",
                saving: "Booking...",
                saved: "Booked!"
              }}
              onClick={primaryCTA}
              className="text-xs sm:text-sm bg-gradient-to-r from-purple-600 to-violet-600"
            />
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800 text-center text-gray-400 text-xs sm:text-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <button onClick={() => setCurrentPage('terms')} className="text-gray-400 hover:text-purple-400 transition-colors text-xs sm:text-sm font-medium">
                Terms
              </button>
              <button onClick={() => setCurrentPage('privacy')} className="text-gray-400 hover:text-purple-400 transition-colors text-xs sm:text-sm font-medium">
                Privacy
              </button>
              <a href="tel:+919307512816" className="text-gray-400 hover:text-purple-400 transition-colors text-xs sm:text-sm font-medium">
                +91 9307512816
              </a>
            </div>
            <div className="flex items-center justify-center gap-1 sm:gap-2">
              <Logo size="sm" showText={false} />
              <p className="font-mono text-xs">© 2025</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}