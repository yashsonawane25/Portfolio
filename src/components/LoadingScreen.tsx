import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check initial window size
    setIsMobile(window.innerWidth < 768);
    
    // Add event listener for resize
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const duration = 5000;
    const start = performance.now();

    const animate = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * 100);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(onComplete, 400);
      }
    };
    requestAnimationFrame(animate);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-bg overflow-hidden flex flex-col justify-between p-6">
      
      {/* Z-INDEX 1: Video Background (or Image Fallback for Mobile) */}
      {isMobile ? (
        <div 
          className="absolute inset-0 z-[1] bg-cover bg-center intro-video-fallback"
          style={{ 
            backgroundImage: "url('/Video/video_thumbnail.jpg')"
          }}
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="intro-video"
        >
          <source src="/Video/video.mp4" type="video/mp4" />
        </video>
      )}

      {/* Z-INDEX 2: Dark Overlay */}
      <div className="intro-overlay pointer-events-none" />

      {/* Z-INDEX 3: UI Text & Countdown */}
      {/* Top Left Label */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xs text-muted uppercase tracking-[0.3em] relative z-[3]"
      >
        Portfolio
      </motion.div>

      {/* Bottom Right Counter and Progress */}
      <div className="flex flex-col items-end gap-2 w-full mt-auto relative z-[3]">
        <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums leading-none drop-shadow-lg">
          {String(count).padStart(3, "0")}
        </div>
        <div className="w-full h-[3px] bg-stroke/50 overflow-hidden mt-4 relative">
          <div
            className="h-full accent-gradient origin-left"
            style={{ 
              transform: `scaleX(${count / 100})`,
              boxShadow: '0 0 8px rgba(137, 170, 204, 0.35)'
            }}
          />
        </div>
      </div>
      
    </div>
  );
};
