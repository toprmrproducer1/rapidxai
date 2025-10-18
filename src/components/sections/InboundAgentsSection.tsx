import React from 'react';
import { Bot, ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { CloudinaryVideoPlayer } from '../ui/cloudinary-video-player';
import GradientButton from '../ui/button-1';

interface InboundAgentsSectionProps {
  primaryCTA: () => void;
}

export const InboundAgentsSection: React.FC<InboundAgentsSectionProps> = ({ primaryCTA }) => {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-purple-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-purple-600/20 backdrop-blur-xl rounded-full px-6 py-3 border border-purple-500/30">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-purple-300 font-medium text-sm tracking-wide font-premium">
                AI VOICE AGENTS
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-tight text-white">
              AI that never <span className="gradient-text">clocks out.</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans">
              RapidX inbound agents handle every call instantly — no waiting, no missed leads, no lost revenue.
            </p>

            <div className="space-y-4">
              {[
                'Faster response',
                'Higher show-up rates',
                'More deals closed'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600/30 to-violet-600/30 flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-lg text-gray-200 font-medium font-sans">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <GradientButton
                width="320px"
                height="60px"
                onClick={primaryCTA}
              >
                <div className="flex items-center gap-3 text-lg font-semibold text-white">
                  <Phone className="w-6 h-6" />
                  <span>Book a Call</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </GradientButton>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-3xl blur-2xl"></div>
            <CloudinaryVideoPlayer
              cloudName="dptbywvgi"
              publicId="Comp_1_17_meoswp"
              profile="cld-default"
              className="relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
