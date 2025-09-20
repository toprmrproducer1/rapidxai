import React from 'react';
import { ArrowLeft, Shield, FileText, Scale } from 'lucide-react';

interface TermsPageProps {
  onBack?: () => void;
}

export function TermsPage({ onBack }: TermsPageProps) {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* Header */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[800px] h-[600px] bg-purple-600/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
          )}
          
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-violet-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-purple-500/30">
              <Scale className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glossy-card p-12 space-y-8">
            
            <div>
              <h2 className="text-2xl font-display font-bold mb-4 text-white">1. Agreement to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using RapidXAI services, you accept and agree to be bound by the terms and provision of this agreement. 
                These Terms of Service govern your use of our AI voice automation and MVP development services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold mb-4 text-white">2. Services Description</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                RapidXAI provides custom AI voice automation solutions and MVP/Micro-SaaS development services including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>AI voice agents for inbound and outbound call handling</li>
                <li>MVP and micro-SaaS development and deployment</li>
                <li>CRM integration and automation workflows</li>
                <li>Custom consultation and strategy sessions</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold mb-4 text-white">3. Payment Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                All pricing is custom-quoted based on project scope and ROI objectives. Payment terms are established 
                during the discovery call and outlined in the project agreement. Deep-dive consultations are $250 USD.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold mb-4 text-white">4. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                Upon full payment, clients own all custom code, configurations, and deliverables created specifically 
                for their project. RapidXAI retains rights to general methodologies, frameworks, and non-client-specific innovations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold mb-4 text-white">5. Data Privacy & Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement security measures aligned with client policies and industry standards. Client data is processed 
                only as necessary to deliver services. See our Privacy Policy for detailed information handling practices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold mb-4 text-white">6. Service Level Commitments</h2>
              <p className="text-gray-300 leading-relaxed">
                We commit to delivery timelines established in project agreements. Enterprise clients receive 99.9% uptime 
                targets with on-call support. All plans include documentation and team training upon delivery.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold mb-4 text-white">7. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                RapidXAI's liability is limited to the amount paid for services. We are not liable for indirect, 
                incidental, or consequential damages. Clients are responsible for compliance with applicable laws and regulations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold mb-4 text-white">8. Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                Either party may terminate services with written notice. Upon termination, clients receive all 
                completed deliverables and documentation. Refunds are handled according to project-specific agreements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold mb-4 text-white">9. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                For questions about these Terms of Service, contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                <p className="text-white font-medium">RapidXAI</p>
                <p className="text-gray-300">Phone/WhatsApp: +91 9307512816</p>
                <p className="text-gray-300">Email: Available upon request</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}