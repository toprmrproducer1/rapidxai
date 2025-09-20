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
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-300 mb-4">
                Interactive AI Experience
              </h2>
              <p className="mt-4 text-gray-300 max-w-lg leading-relaxed">
                Experience the future of AI-powered automation. Our voice agents and MVP solutions 
                create immersive experiences that capture attention and drive conversions.
              </p>
              <button
                onClick={primaryCTA}
                className="mt-8 premium-button text-lg flex items-center gap-3 w-fit"
              >
                <Bot className="w-5 h-5" />
                Explore Our Solutions
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