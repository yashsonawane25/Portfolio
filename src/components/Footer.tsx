import React, { useEffect, useRef, useState } from 'react';
import { VideoBackground } from './VideoBackground';
import gsap from 'gsap';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.marquee-inner', {
        xPercent: -50,
        ease: "none",
        duration: 50,
        repeat: -1,
      });
    }, marqueeRef);
    return () => ctx.revert();
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('yashsonawane235@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    window.location.href = "mailto:yashsonawane235@gmail.com";
  };

  return (
    <section id="contact" className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden z-10">
      {/* Background Video with Grid Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <VideoBackground src="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8" flipY={true} playbackRate={0.6} />
        <div className="absolute inset-0 bg-black/60" />
        {/* Subtle Grid Overlay */}
        <div
          className="absolute inset-0 opacity-10 mix-blend-screen"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        {/* Subtle Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(137,170,204,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Marquee */}
        <div ref={marqueeRef} className="w-[200vw] overflow-hidden whitespace-nowrap mb-16 md:mb-24 opacity-15 blur-[1px] -ml-[50vw] pointer-events-none">
          <div className="marquee-inner inline-block text-7xl md:text-9xl font-display italic text-text-primary tracking-tight">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="px-4">BUILDING REAL SYSTEMS • AUTOMATING WORKFLOWS • CI/CD • KUBERNETES • CLOUD • READY FOR PRODUCTION • </span>
            ))}
          </div>
        </div>

        {/* CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-24 md:mb-32 flex flex-col items-center relative w-full"
        >
          {/* Subtle Radial Glow behind heading */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square bg-accent/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-text-primary tracking-tight mb-6 max-w-3xl hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-text-primary hover:to-accent transition-all duration-1000 cursor-default">
            Let's build <span className="italic text-text-primary/80">scalable cloud systems</span> together.
          </h2>

          <p className="text-muted max-w-xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
            I’m a fresher DevOps engineer focused on CI/CD, Kubernetes, and cloud infrastructure. Open to internships and entry-level roles.
          </p>

          {/* Buttons above email */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto">
            <a href="mailto:yashsonawane235@gmail.com" className="group relative inline-flex rounded-full text-sm transition-all duration-300 hover:scale-105 bg-text-primary text-bg overflow-hidden active:scale-95 shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full sm:w-auto">
              <span className="absolute inset-[-2px] accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <div className="relative z-10 rounded-full px-8 py-3.5 m-[1px] group-hover:bg-bg group-hover:text-text-primary transition-colors flex items-center justify-center gap-2 w-full h-full bg-text-primary text-bg font-medium tracking-wide">
                Hire Me <span>→</span>
              </div>
            </a>

            <a href="#work" className="group relative inline-flex rounded-full text-sm transition-all duration-300 hover:scale-105 bg-bg text-text-primary border border-stroke overflow-hidden hover:border-transparent active:scale-95 w-full sm:w-auto">
              <span className="absolute inset-[-2px] accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <div className="relative z-10 rounded-full px-8 py-3.5 m-[1px] bg-bg flex items-center justify-center gap-2 w-full h-full font-medium tracking-wide">
                View Projects <span>→</span>
              </div>
            </a>
          </div>

          {/* Email CTA */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex group relative rounded-full p-[1px] overflow-hidden active:scale-95 transition-transform duration-300 cursor-pointer shadow-lg hover:shadow-2xl"
          >
            <span className="absolute inset-[-2px] accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

            {/* Glow effect on hover */}
            <div className="absolute inset-[-10px] rounded-full accent-gradient opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 pointer-events-none -z-10"></div>

            <div className="relative z-10 bg-surface/80 backdrop-blur-md rounded-full flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 border border-stroke group-hover:border-transparent transition-colors">
              <span className="text-sm sm:text-lg text-text-primary font-medium tracking-wide break-all text-center">yashsonawane235@gmail.com</span>
              <div className="hidden sm:flex w-8 h-8 rounded-full bg-text-primary items-center justify-center text-bg group-hover:bg-accent transition-colors shadow-sm shrink-0">
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                )}
              </div>

              {/* Tooltip */}
              <div className={`absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-text-primary text-bg text-xs rounded-full font-medium shadow-xl transition-all duration-300 ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                Copied to clipboard!
              </div>
            </div>
          </button>
        </motion.div>

        {/* Footer Bar */}
        <div className="w-full flex flex-col items-center justify-center gap-6 border-t border-stroke/50 pt-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted hover:text-text-primary transition-colors text-xs sm:text-sm">
              Twitter
            </a>
            <a href="https://www.linkedin.com/in/yash-sonwane01?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="text-muted hover:text-text-primary transition-colors text-xs sm:text-sm">
              LinkedIn
            </a>
            <a href="https://github.com/yashsonawane25" target="_blank" rel="noreferrer" className="text-muted hover:text-text-primary transition-colors text-xs sm:text-sm">
              GitHub
            </a>
            <a href="https://dev.to/yash_sonawane25" target="_blank" rel="noreferrer" className="text-muted hover:text-text-primary transition-colors font-display italic text-base sm:text-lg">
              DEV
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 bg-surface/50 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 border border-stroke/50 backdrop-blur-sm relative overflow-hidden group shadow-sm text-center">
            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center justify-center w-2 h-2 shrink-0">
              <div className="absolute w-4 h-4 rounded-full bg-green-500/40 animate-ping"></div>
              <div className="relative w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
            </div>
            <span className="text-[10px] sm:text-xs text-text-primary/90 uppercase tracking-wider font-medium leading-tight">Open to DevOps Internships & Entry-Level Roles</span>
          </div>

          <div className="text-xs text-muted">
            © {new Date().getFullYear()} Yash Sonawane. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};
