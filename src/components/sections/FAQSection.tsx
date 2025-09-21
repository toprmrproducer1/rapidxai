import React from 'react';
import { ChevronDown, ChevronUp, Bot, ArrowRight } from 'lucide-react';
import GradientButton from '../ui/button-1';

interface FAQSectionProps {
  openFaq: number | null;
  toggleFaq: (index: number) => void;
}

export function FAQSection({ openFaq, toggleFaq }: FAQSectionProps) {
  const faqs = [
    {
      q: "How fast can we launch?",
      a: "Voice agents: 1-2 weeks. MVPs: 3-4 weeks."
    },
    {
      q: "Is this custom built?",
      a: "Yes. Tailored to your stack and use cases."
    },
    {
      q: "What about pricing?",
      a: "Custom quotes based on scope and ROI goals."
    },
  ];

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Quick Questions</h2>
        
        <div className="space-y-3">
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
                  <p className="text-gray-300 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}