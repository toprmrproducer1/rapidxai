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
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <Logo size="lg" className="mb-2" />
            <p className="text-gray-400 text-sm">
              AI-powered solutions that accelerate growth.
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm mb-4">
              <button onClick={() => setCurrentPage('services')} className="text-gray-400 hover:text-purple-400 transition-colors">Services</button>
              <button onClick={() => setCurrentPage('case-studies')} className="text-gray-400 hover:text-purple-400 transition-colors">Case Studies</button>
              <button onClick={() => setCurrentPage('content')} className="text-gray-400 hover:text-purple-400 transition-colors">Content</button>
              <button onClick={() => setCurrentPage('pricing')} className="text-gray-400 hover:text-purple-400 transition-colors">Pricing</button>
              <button onClick={() => setCurrentPage('team')} className="text-gray-400 hover:text-purple-400 transition-colors">Team</button>
              <button onClick={() => setCurrentPage('socials')} className="text-gray-400 hover:text-purple-400 transition-colors">Socials</button>
            </div>
            <p className="text-sm text-purple-400 font-light italic mb-4">
              "We build what moves numbers."
            </p>
          </div>
          
          <div className="flex justify-end gap-3">
            <SaveButton
              text={{
                idle: "Book Call",
                saving: "Booking...",
                saved: "Booked!"
              }}
              onClick={primaryCTA}
              className="text-sm bg-gradient-to-r from-purple-600 to-violet-600"
            />
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-6">
              <button onClick={() => setCurrentPage('terms')} className="text-gray-400 hover:text-purple-400 transition-colors text-sm font-medium">
                Terms of Service
              </button>
              <button onClick={() => setCurrentPage('privacy')} className="text-gray-400 hover:text-purple-400 transition-colors text-sm font-medium">
                Privacy Policy
              </button>
              <a href="tel:+919307512816" className="text-gray-400 hover:text-purple-400 transition-colors text-sm font-medium">
                +91 9307512816
              </a>
              <a href="https://wa.me/919307512816" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium">
                WhatsApp
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Logo size="sm" showText={false} />
              <p className="font-mono">© 2025 RapidXAI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}