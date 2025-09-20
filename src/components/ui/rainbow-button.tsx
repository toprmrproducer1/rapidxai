import React from 'react';
import { cn } from '@/lib/utils';

interface RainbowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const RainbowButton: React.FC<RainbowButtonProps> = ({ 
  children, 
  onClick, 
  className,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-32 h-8 text-sm px-3',
    md: 'w-40 h-10 text-base px-4',
    lg: 'w-48 h-12 text-lg px-6'
  };

  return (
    <div className="flex items-center justify-center">
      <button 
        onClick={onClick}
        className={cn(
          "rainbow-border relative flex items-center justify-center gap-2.5 bg-black rounded-xl border-none text-white cursor-pointer font-black transition-all duration-200 hover:scale-105 active:scale-95",
          sizeClasses[size],
          className
        )}
        style={{ fontFamily: '"Source Serif Pro", "Libre Baskerville", Georgia, serif', fontWeight: 700 }}
      >
        {children}
        
        <style jsx>{`
          .rainbow-border::before,
          .rainbow-border::after {
            content: '';
            position: absolute;
            left: -2px;
            top: -2px;
            border-radius: 12px;
            background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000);
            background-size: 400%;
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            z-index: -1;
            animation: rainbow 20s linear infinite;
          }
          .rainbow-border::after {
            filter: blur(50px);
          }
          @keyframes rainbow {
            0% { background-position: 0 0; }
            50% { background-position: 400% 0; }
            100% { background-position: 0 0; }
          }
        `}</style>
      </button>
    </div>
  );
};