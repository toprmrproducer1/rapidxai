import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, Database } from 'lucide-react';

interface PrivacyPageProps {
  onBack?: () => void;
}

export function PrivacyPage({ onBack }: PrivacyPageProps) {
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
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
              Privacy <span className="gradient-text">Policy</span>
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
              <h2 className="text-2xl font-display font-bold mb-4 text-white flex items-center gap-3">
                <Eye className="w-6 h-6 text-purple-400" />
                Information We Collect
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Schedule discovery calls or consultations</li>
                <li>Engage with our AI voice agents for demonstrations</li>
                <li>Subscribe to our content or social media channels</li>
                <li>Contact us for support or inquiries</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold mb-4 text-white flex items-center gap-3">
                <Database className="w-6 h-6 text-purple-400" />
                How We Use Your Information
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Develop new products and services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold mb-4 text-white flex items-center gap-3">
                <Lock className="w-6 h-6 text-purple-400" />
                Data Security
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. All client projects include security 
                measures aligned with your specific policies and compliance requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold mb-4 text-white">Information Sharing</h2>
              <p className="text-gray-300 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this policy. We may share information with trusted service providers who assist us in 
                operating our website and conducting our business, provided they agree to keep this information confidential.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold mb-4 text-white">AI Voice Agent Data</h2>
              <p className="text-gray-300 leading-relaxed">
                When you interact with our AI voice agents, conversations may be recorded for quality assurance and 
                improvement purposes. All voice data is processed securely and in accordance with applicable privacy laws. 
                You can request deletion of your voice data at any time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold mb-4 text-white">Cookies and Tracking</h2>
              <p className="text-gray-300 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold mb-4 text-white">Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold mb-4 text-white">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                <p className="text-white font-medium">RapidXAI Privacy Team</p>
                <p className="text-gray-300">Phone/WhatsApp: +91 9307512816</p>
                <p className="text-gray-300">Response time: Within 48 hours</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}