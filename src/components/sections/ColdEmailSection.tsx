import React from 'react';
import { Mail, ArrowRight, CheckCircle, Target, Zap } from 'lucide-react';
import { CloudinaryVideoPlayer } from '../ui/cloudinary-video-player';
import GradientButton from '../ui/button-1';

interface ColdEmailSectionProps {
  primaryCTA: () => void;
}

export const ColdEmailSection: React.FC<ColdEmailSectionProps> = ({ primaryCTA }) => {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-900/20">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-violet-950/10 to-gray-950"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-violet-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
            <CloudinaryVideoPlayer
              cloudName="dptbywvgi"
              publicId="video-clips/Comp_1_18_ujyhgh"
              profile="cld-default"
              className="relative z-10"
            />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-3 bg-violet-600/20 backdrop-blur-xl rounded-full px-6 py-3 border border-violet-500/30">
              <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
              <span className="text-violet-300 font-medium text-sm tracking-wide font-premium">
                AI COLD EMAIL SYSTEM
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-tight text-white">
              AI-Powered Cold Emails That <span className="gradient-text">Actually Get Replies</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans">
              Reach decision-makers directly. No gatekeepers. No wasted time.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed font-sans">
              RapidX uses AI to personalize every email like it was handcrafted — tracking intent so only the right leads get your message.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: Target, text: '3x more replies' },
                { icon: Zap, text: 'Full ROI in under 3 months' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 group p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:border-violet-500/50 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-600/30 to-purple-600/30 flex items-center justify-center border border-violet-500/30 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-violet-400" />
                  </div>
                  <span className="text-lg text-gray-200 font-medium font-sans">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <GradientButton
                width="380px"
                height="60px"
                onClick={primaryCTA}
              >
                <div className="flex items-center gap-3 text-lg font-semibold text-white">
                  <Mail className="w-6 h-6" />
                  <span>Try the RapidX AI Cold Email System</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
