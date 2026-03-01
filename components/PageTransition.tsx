'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {isTransitioning && (
        <div className="fixed inset-0 z-[99] bg-gradient-to-br from-blue-600 to-purple-600 animate-fadeIn pointer-events-none"></div>
      )}
      <div className={`${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        {children}
      </div>
    </>
  );
};

export default PageTransition;
