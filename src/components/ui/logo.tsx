import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function Logo({ className = '', size = 'md', showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-14'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative group">
        {/* RapidXAI Logo Image */}
        <div className={`${sizeClasses[size]} relative hover:scale-105 transition-transform duration-300 drop-shadow-lg`} style={{ aspectRatio: '1' }}>
          <img
            src="https://i.ibb.co/TBP2P3jM/61e9828a-6914-4cd9-8558-b241067a8e1d.png"
            alt="RapidXAI Logo"
            className="w-full h-full object-contain rounded-full"
            onError={(e) => {
              // Fallback to SVG if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'block';
            }}
          />
          
          {/* SVG Fallback */}
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-contain"
            style={{ display: 'none' }}
          >
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="30%" stopColor="#8b5cf6" />
                <stop offset="70%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
              <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#e0e7ff" />
                <stop offset="100%" stopColor="#c7d2fe" />
              </linearGradient>
              <filter id="logoGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="textShadow">
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.3"/>
              </filter>
            </defs>
            
            {/* Enhanced Background Circle */}
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="url(#logoGradient)"
              filter="url(#logoGlow)"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
            />
            
            {/* RapidXAI Logo Design */}
            <g transform="translate(50,50)">
              {/* Central R */}
              <text
                x="0"
                y="8"
                textAnchor="middle"
                fill="url(#textGradient)"
                filter="url(#textShadow)"
                className="font-bold text-[32px]"
                style={{ fontFamily: '"Playfair Display", serif', fontWeight: 800 }}
              >
                R
              </text>
              
              {/* AI Circuit Pattern */}
              <g opacity="0.6">
                <circle cx="-15" cy="-10" r="2" fill="rgba(255,255,255,0.8)">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="15" cy="-10" r="1.5" fill="rgba(255,255,255,0.6)">
                  <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite"/>
                </circle>
}
  )
}