'use client';

import { useState, useEffect, useRef } from 'react';
import TechIcon from './TechIcon';

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  delay?: number;
}

const SkillBar = ({ name, level, color, delay = 0 }: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setTimeout(() => {
              setIsVisible(true);
              setWidth(level);
            }, delay);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isVisible, level, delay]);

  return (
    <div ref={elementRef} className="group">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3">
          <div className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
            <TechIcon name={name} className="w-6 h-6" />
          </div>
          <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {name}
          </span>
        </div>
        <span className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
          {level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
          style={{ width: `${width}%` }}
        >
          <div className="absolute inset-0 animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
