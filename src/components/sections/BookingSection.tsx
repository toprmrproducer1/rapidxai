import React from 'react';
import { CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import { StarBorder } from '../ui/star-border';
import PremiumButton from '../ui/button-premium';

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
            <h2 className="text-4xl font-bold mb-6">Ready to turn "we should automate this" into "it's already handled"?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a 30-minute discovery call or start with a $250 Deep-Dive with Shreyas.
            </p>
            <p className="text-lg text-purple-400 mb-8 font-light italic">
              Worst case: clarity. Best case: compound advantage.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-purple-400 font-medium mb-4">
              Prefer a founder session? 
              <button 
                onClick={secondaryCTA}
                className="ml-2 underline hover:text-purple-300 transition-colors"
              >
                $250 Deep-Dive with Shreyas
              </button>
            </p>
          </div>

          {/* Simulated Calendly Embed */}
          <div className="tech-card p-8">
            <div className="text-center mb-6">
              <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Discovery Call</h3>
              <p className="text-gray-300">30 minutes • Free consultation</p>
            </div>

            <div className="space-y-3 mb-6">
              {timeSlots.map((time, index) => (
                <PremiumButton
                  key={index}
                  onClick={primaryCTA}
                  width="100%"
                  height="50px"
                  variant="secondary"
                  size="sm"
                >
                  <div className="text-center font-medium">
                    {time}
                  </div>
                </PremiumButton>
              ))}
            </div>

            <PremiumButton
              onClick={primaryCTA}
              width="100%"
              height="60px"
              variant="primary"
              size="md"
            >
              <div className="flex items-center justify-center gap-3 group">
                <Calendar className="w-5 h-5" />
                Open Full Calendar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </PremiumButton>
          </div>
        </div>
      </div>
    </section>
  );
}