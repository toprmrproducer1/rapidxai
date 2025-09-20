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
        {/* Primary logo using CSS gradient */}
        <div className={`${sizeClasses[size]} bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl flex items-center justify-center text-white font-bold hover:scale-105 transition-transform duration-300 drop-shadow-lg group-hover:drop-shadow-2xl relative z-10`} style={{ aspectRatio: '1' }}>
          R
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