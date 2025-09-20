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
        <img 
          src="https://i.ibb.co/d0kMkYC4/61e9828a-6914-4cd9-8558-b241067a8e1d.png" 
          alt="RapidXAI Logo" 
          className={`${sizeClasses[size]} object-contain hover:scale-105 transition-transform duration-300 drop-shadow-lg group-hover:drop-shadow-2xl filter brightness-110 relative z-10`}
          onError={(e) => {
            console.log('Logo failed to load, using fallback');
            e.currentTarget.style.display = 'none';
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        {/* Fallback logo if image fails */}
        <div className={`${sizeClasses[size]} bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700 rounded-2xl flex items-center justify-center text-white font-bold hidden shadow-2xl shadow-purple-500/50 border-2 border-purple-400/30`} style={{ aspectRatio: '1' }}>
          <span className="text-2xl font-black tracking-tight" style={{ fontFamily: '"Playfair Display", serif', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>R</span>
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