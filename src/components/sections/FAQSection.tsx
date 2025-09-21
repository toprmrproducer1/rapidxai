import React from 'react';
import { ChevronDown, ChevronUp, Bot, ArrowRight } from 'lucide-react';
import GradientButton from '../ui/button-1';

interface FAQSectionProps {
  openFaq: number | null;
  toggleFaq: (index: number) => void;
  primaryCTA: () => void;
}

export function FAQSection({ openFaq, toggleFaq, primaryCTA }: FAQSectionProps) {
  const faqs = [
    {
      q: "How fast can we launch?",
      a: "Voice agents: 7–14 days. MVPs: 3–6 weeks."
    },
    {
      q: "Is this custom built?",
      a: "Yes. We scope to your ROI goals and existing stack."
    },
    {
      q: "What about pricing?",
      a: "Custom quotes based on scope and ROI targets."
    },
    {
      q: "Do you handle security?",
      a: "Yes. SOC2-ready processes and compliance alignment."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQs</h2>
        
        <div className="space-y-3 mb-12 px-4">
          {faqs.map((faq, index) => (
            <div key={index} className="tech-card overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-800/30 transition-all duration-200"
              >
                <span className="font-medium text-base">{faq.q}</span>
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-purple-400" />
                )}
              </button>
              
              {openFaq === index && (
                <div className="px-4 pb-4 animate-slide-up">
                  <p className="text-sm text-gray-300 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <GradientButton
            width="200px"
            height="50px"
            onClick={primaryCTA}
          >
            <div className="flex items-center gap-2 group text-base font-semibold text-white">
              <Bot className="w-5 h-5" />
              Book Call
            </div>
          </GradientButton>
        </div>
      </div>
    </section>
  );
}