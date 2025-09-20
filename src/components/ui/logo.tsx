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
            className="w-full h-full object-contain rounded-full"
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
            
            {/* Enhanced R Letter */}
            <text
              x="50"
              y="68"
              textAnchor="middle"
              fill="url(#textGradient)"
              filter="url(#textShadow)"
              className="font-bold text-[42px]"
              style={{ fontFamily: '"Playfair Display", serif', fontWeight: 800 }}
            >
              R
            </text>
            
            {/* Accent Elements */}
            <circle cx="75" cy="25" r="2" fill="rgba(255,255,255,0.6)" opacity="0.8">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="25" cy="75" r="1.5" fill="rgba(255,255,255,0.4)" opacity="0.6">
              <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite"/>
            </circle>
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