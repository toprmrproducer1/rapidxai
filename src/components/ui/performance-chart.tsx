import React from 'react';
import { motion } from 'framer-motion';

interface PerformanceChartProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function PerformanceChart({ 
  title, 
  subtitle, 
  className = '' 
}: PerformanceChartProps) {
  // Generate sample data points for the chart
  const dataPoints = [
    { x: 0, y: 60 },
    { x: 15, y: 45 },
    { x: 30, y: 35 },
    { x: 45, y: 85 },
    { x: 60, y: 90 },
    { x: 75, y: 75 },
    { x: 90, y: 65 },
    { x: 105, y: 70 },
    { x: 120, y: 55 },
    { x: 135, y: 60 },
    { x: 150, y: 80 },
    { x: 165, y: 75 },
    { x: 180, y: 85 }
  ];

  const dataPoints2 = [
    { x: 0, y: 40 },
    { x: 15, y: 30 },
    { x: 30, y: 25 },
    { x: 45, y: 35 },
    { x: 60, y: 45 },
    { x: 75, y: 40 },
    { x: 90, y: 35 },
    { x: 105, y: 30 },
    { x: 120, y: 40 },
    { x: 135, y: 45 },
    { x: 150, y: 50 },
    { x: 165, y: 55 },
    { x: 180, y: 60 }
  ];

  // Create SVG path from data points
  const createPath = (points: typeof dataPoints) => {
    return points.reduce((path, point, index) => {
      if (index === 0) {
        return `M ${point.x} ${point.y}`;
      }
      return `${path} L ${point.x} ${point.y}`;
    }, '');
  };

  const path1 = createPath(dataPoints);
  const path2 = createPath(dataPoints2);

  return (
    <div className={`bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 ${className}`}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
      
      <div className="relative w-full h-32">
        <svg
          viewBox="0 0 200 100"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="20" height="10" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 10" fill="none" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Chart lines */}
          <motion.path
            d={path1}
            fill="none"
            stroke="rgba(139, 92, 246, 0.8)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          <motion.path
            d={path2}
            fill="none"
            stroke="rgba(168, 85, 247, 0.6)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
          />
          
          {/* Data points */}
          {dataPoints.map((point, index) => (
            <motion.circle
              key={`point1-${index}`}
              cx={point.x}
              cy={point.y}
              r="3"
              fill="rgba(139, 92, 246, 1)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 2 + index * 0.1 }}
            />
          ))}
          
          {dataPoints2.map((point, index) => (
            <motion.circle
              key={`point2-${index}`}
              cx={point.x}
              cy={point.y}
              r="2.5"
              fill="rgba(168, 85, 247, 1)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 2.5 + index * 0.1 }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}