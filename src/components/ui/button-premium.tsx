'use client';

import React, { useRef, useEffect } from 'react';
import type { HTMLAttributes } from 'react';

interface PremiumButtonProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
}

const PremiumButton = ({
  children,
  width,
  height,
  className = '',
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'md',
  glow = true,
  ...props
}: PremiumButtonProps) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: { width: '200px', height: '45px', text: 'text-sm', padding: 'px-6 py-3' },
    md: { width: '280px', height: '60px', text: 'text-base', padding: 'px-8 py-4' },
    lg: { width: '320px', height: '70px', text: 'text-lg', padding: 'px-10 py-5' }
  };

  const currentSize = sizeClasses[size];
  const buttonWidth = width || currentSize.width;
  const buttonHeight = height || currentSize.height;

  useEffect(() => {
    const button = buttonRef.current;
    if (!button || disabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      button.style.setProperty('--mouse-x', `${x}px`);
      button.style.setProperty('--mouse-y', `${y}px`);
    };

    button.addEventListener('mousemove', handleMouseMove);
    return () => button.removeEventListener('mousemove', handleMouseMove);
  }, [disabled]);

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return `
          bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600
          hover:from-purple-500 hover:via-violet-500 hover:to-purple-500
          text-white shadow-2xl shadow-purple-500/40
          hover:shadow-purple-500/60 hover:shadow-3xl
          border border-purple-400/30 hover:border-purple-300/50
        `;
      case 'secondary':
        return `
          bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800
          hover:from-purple-600 hover:via-violet-600 hover:to-purple-600
          text-white shadow-xl shadow-gray-900/50
          hover:shadow-purple-500/40 hover:shadow-2xl
          border border-gray-600/50 hover:border-purple-400/50
        `;
      case 'outline':
        return `
          bg-transparent border-2 border-purple-500/60
          hover:bg-purple-500/10 hover:border-purple-400/80
          text-purple-400 hover:text-purple-300
          shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40
        `;
      default:
        return '';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div className="relative inline-block">
      <div
        ref={buttonRef}
        role="button"
        tabIndex={disabled ? -1 : 0}
        className={`
          relative overflow-hidden rounded-2xl cursor-pointer
          transition-all duration-300 ease-out
          transform-gpu will-change-transform
          hover:scale-[1.02] active:scale-[0.98]
          focus:outline-none focus:ring-4 focus:ring-purple-500/30
          ${getVariantStyles()}
          ${currentSize.padding}
          ${currentSize.text}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          ${className}
        `}
        style={{
          minWidth: buttonWidth,
          height: buttonHeight,
          '--mouse-x': '50%',
          '--mouse-y': '50%'
        } as React.CSSProperties}
        onClick={disabled ? undefined : onClick}
        onKeyDown={handleKeyDown}
        aria-disabled={disabled}
        {...props}
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
        
        {/* Mouse Follow Spotlight */}
        {!disabled && glow && (
          <div 
            className="absolute inset-0 opacity-0 hover:opacity-30 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle 100px at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.3), transparent 70%)`
            }}
          />
        )}
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-out"></div>
        
        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-3 font-semibold tracking-tight">
          {children}
        </span>
        
        {/* Border Glow */}
        {!disabled && glow && (
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-300 blur-sm -z-10"></div>
        )}
      </div>
    </div>
  );
};

export default PremiumButton;