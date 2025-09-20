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
        {/* Custom RapidXAI Logo */}
        <img 
          src="https://i.ibb.co/d0kMkYC4/61e9828a-6914-4cd9-8558-b241067a8e1d.png"
          alt="RapidXAI Logo"
          className={`${sizeClasses[size]} relative hover:scale-105 transition-transform duration-300 drop-shadow-lg object-contain`}
          onError={(e) => {
            // Fallback to SVG if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'block';
          }}
        />
        
        {/* Fallback SVG Logo */}
        <div className={`${sizeClasses[size]} relative hover:scale-105 transition-transform duration-300 drop-shadow-lg hidden`} style={{ aspectRatio: '1' }}>
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
              filter="url(#logoGlow)"
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