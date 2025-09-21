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
      q: "Is this custom?",
      a: "Yes. We scope to ROI, not retainers. Your stack, your use cases."
    },
    {
      q: "Voice agent or human?",
      a: "Both. AI handles routine volume and instant responses; humans close nuance."
    },
    {
      q: "How fast can we go live?",
      a: "Voice agents: typically 7–14 days. MVPs: 3–6 weeks (scope-dependent)."
    },
    {
      q: "Security & data?",
      a: "We use clean, reviewable workflows and compliance-minded processes. You keep control of data and access."
    },
    {
      q: "Do you disclose pricing?",
      a: "For projects, yes—see plans above. For ongoing ops, we tailor based on usage and outcomes."
    },
    {
      q: "What tech stacks do you support?",
      a: "CRM (HubSpot/Salesforce/Pipedrive, etc.), calendars, telephony/SIP, WhatsApp/SMS, helpdesks, and modern app infra."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>
        <p className="text-lg text-gray-300 text-center mb-12 font-light">(straight talk)</p>
        
        <div className="space-y-3 mb-12">
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
                  <p className="text-gray-300 leading-relaxed text-sm">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <GradientButton
            width="260px"
            height="56px"
            onClick={primaryCTA}
          >
            <div className="flex items-center gap-2 group text-base font-semibold text-white">
              <Bot className="w-5 h-5" />
              Book Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </GradientButton>
        </div>
      </div>
    </section>
  );
}