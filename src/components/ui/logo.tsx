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
        {/* Custom RapidXAI SVG Logo */}
        <div className={`${sizeClasses[size]} relative hover:scale-105 transition-transform duration-300 drop-shadow-lg`} style={{ aspectRatio: '1' }}>
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
              <linearGradient id="logoGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
              <filter id="logoGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="url(#logoGradient)"
              className="group-hover:fill-[url(#logoGradientHover)] transition-all duration-300"
              filter="url(#logoGlow)"
            />
            
            {/* Inner Circle */}
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="rgba(255,255,255,0.1)"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
            />
            
            {/* R Letter */}
            <text
              x="50"
              y="65"
              textAnchor="middle"
              className="fill-white font-bold text-[36px]"
              style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700 }}
            >
              R
            </text>
            
            {/* Accent Lines */}
            <path
              d="M20 30 L80 30"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M25 75 L75 75"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            
            {/* AI Circuit Pattern */}
            <circle cx="25" cy="25" r="2" fill="rgba(255,255,255,0.6)" />
            <circle cx="75" cy="25" r="2" fill="rgba(255,255,255,0.6)" />
            <circle cx="25" cy="75" r="2" fill="rgba(255,255,255,0.6)" />
            <circle cx="75" cy="75" r="2" fill="rgba(255,255,255,0.6)" />
            
            <path
              d="M25 25 L35 35 M65 35 L75 25 M25 75 L35 65 M65 65 L75 75"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </div>
        
        <div className="absolute -inset-1 bg-purple-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {showText && (
        <span className={`${textSizeClasses[size]} font-brand font-bold tracking-tight text-white drop-shadow-lg`} style={{ fontFamily: '"Source Serif Pro", "Libre Baskerville", Georgia, serif', fontWeight: 700, letterSpacing: '-0.02em', textShadow: '0 0 20px rgba(139, 92, 246, 0.8), 0 2px 4px rgba(0,0,0,0.5)' }}>
          <span className="text-white font-bold bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">RapidXAI</span>
        </span>
      )}
    </div>
  );
}

export function LogoMark({ className = '', size = 'md' }: Omit<LogoProps, 'showText'>) {
  return <Logo className={className} size={size} showText={false} />;
}