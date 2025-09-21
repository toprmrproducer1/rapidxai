import React from 'react';
import { Bot, ArrowRight } from 'lucide-react';
import { Card } from '../ui/card';
import { Spotlight } from '../ui/spotlight';
import { SplineScene } from '../ui/spline';

interface InteractiveSectionProps {
  primaryCTA: () => void;
}

export function InteractiveSection({ primaryCTA }: InteractiveSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Card className="w-full h-[500px] bg-gray-950/95 relative overflow-hidden border border-gray-800/50">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="purple"
          />
          
          <div className="flex h-full">
            {/* Left content */}
            <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
              <h2 className="text-5xl md:text-6xl font-display font-extralight bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-300 mb-6 tracking-tighter">
                Experience <span className="gradient-text">AI</span>
              </h2>
              <p className="mt-6 text-gray-200 max-w-lg leading-relaxed text-xl font-extralight">
                Voice agents that convert. MVPs that validate.
              </p>
              <button
                onClick={primaryCTA}
                className="mt-12 premium-button text-xl flex items-center gap-3 w-fit"
              >
                <Bot className="w-5 h-5" />
                Explore
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right content - 3D Scene */}
            <div className="flex-1 relative">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}