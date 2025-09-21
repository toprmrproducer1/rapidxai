import React from 'react';
import { CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import { StarBorder } from '../ui/star-border';
import GradientButton from '../ui/button-1';

interface BookingSectionProps {
  primaryCTA: () => void;
  secondaryCTA: () => void;
}

export function BookingSection({ primaryCTA, secondaryCTA }: BookingSectionProps) {
  const features = [
    "Understand your current challenges",
    "Identify automation opportunities",
    "Discuss MVP validation strategies", 
    "Outline potential solutions and timelines"
  ];

  const timeSlots = ['Today 2:00 PM', 'Today 4:30 PM', 'Tomorrow 10:00 AM', 'Tomorrow 2:00 PM'];

  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-5xl md:text-6xl font-display font-extralight mb-8 tracking-tighter leading-tight">Ready to <span className="gradient-text">automate</span>?</h2>
            <p className="text-2xl text-gray-200 mb-12 font-extralight leading-relaxed">
              30-minute discovery call. Or $250 deep-dive.
            </p>
            <p className="text-xl text-purple-300 mb-12 font-extralight italic">
              Clarity guaranteed. Advantage likely.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-200 font-light">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-purple-300 font-light mb-4 text-lg">
              Prefer founder-to-founder? 
              <button 
                onClick={secondaryCTA}
                className="ml-2 underline hover:text-purple-200 transition-colors font-medium"
              >
                $250 Deep-Dive
              </button>
            </p>
          </div>

          {/* Simulated Calendly Embed */}
          <div className="tech-card p-8">
            <div className="text-center mb-6">
              <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-3xl font-display font-light mb-3">Discovery Call</h3>
              <p className="text-gray-200 font-light">30 minutes • Free</p>
            </div>

            <div className="space-y-3 mb-6">
              {timeSlots.map((time, index) => (
                <GradientButton
                  key={index}
                  width="100%"
                  height="50px"
                  onClick={primaryCTA}
                  className="border border-gray-600/50 bg-gray-800/30"
                >
                  <div className="text-center font-medium text-white">
                    {time}
                  </div>
                </GradientButton>
              ))}
            </div>

            <GradientButton
              width="100%"
              height="60px"
              onClick={primaryCTA}
            >
              <div className="flex items-center justify-center gap-3 group text-white">
                <Calendar className="w-5 h-5" />
                Open Full Calendar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}