'use client';

import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center animate-gradient">
      <div className="text-center">
        <div className="mb-8 animate-float">
          <h1 className="text-6xl font-bold text-white mb-4">SS</h1>
          <p className="text-white text-xl">Shafiqul Islam Sakib</p>
        </div>
        
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="text-white/80 mt-4 text-sm">{progress}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
