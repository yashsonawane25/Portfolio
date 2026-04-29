import React, { useEffect, useRef, useState } from 'react';
import { Navbar } from './Navbar';
import gsap from 'gsap';
import { X, Download, ExternalLink, Terminal, Cloud, Server, Activity, Database } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const resumeUrl = "https://drive.google.com/file/d/1VgXuwUZT798OA3eOl6AJQ8j32usdS4TK/preview";
  const rawResumeUrl = "https://drive.google.com/file/d/1VgXuwUZT798OA3eOl6AJQ8j32usdS4TK/view?usp=sharing";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to('.reveal-item', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.2
      }, 0);

      // Subtle float for the background panels
      gsap.to('.float-panel-1', { y: -15, duration: 4, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.to('.float-panel-2', { y: 15, duration: 5, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1 });
      gsap.to('.float-panel-3', { y: -10, duration: 6, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 2 });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden flex flex-col bg-black font-sans" ref={heroRef}>

      {/* --- VIDEO BACKGROUND --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]"
        >
          <source src="/Video/backgorund.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay for Text Readability (Dark on left, light on right) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.4)_40%,transparent_100%)] z-10" />

        {/* Slow Light Trail (System flow) */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0070F3]/30 to-transparent blur-sm z-10 animate-[data-flow_12s_linear_infinite]" />
      </div>

      <Navbar />

      {/* --- HERO CONTENT --- */}
      <div className="relative z-20 flex-1 flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 max-w-7xl mx-auto w-full pt-32 pb-24">

        {/* Left Side: Text */}
        <div className="w-full lg:w-[60%] flex flex-col items-start text-left z-30">

          <h1 className="reveal-item opacity-0 translate-y-8 text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] font-display font-bold text-white mb-6 -tracking-[0.04em] leading-[0.9]">
            Yash Sonawane
          </h1>

          <div className="reveal-item opacity-0 translate-y-8 text-lg sm:text-xl md:text-2xl text-gray-400 font-medium mb-6 tracking-tight flex items-center gap-3">
            DevOps Engineer <span className="text-gray-600">•</span> Cloud <span className="text-gray-600">•</span> Kubernetes
          </div>

          <div className="reveal-item opacity-0 translate-y-8 flex flex-col items-start mb-10 w-full max-w-2xl space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-sans font-light">
              I design CI/CD pipelines, deploy scalable applications on Kubernetes, and automate cloud infrastructure using AWS and Terraform.
            </p>
            <p className="text-sm md:text-base text-gray-400 font-mono flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] animate-pulse" />
              Built with performance, reliability, and production mindset.
            </p>
          </div>

          {/* --- CTA BUTTONS --- */}
          <div className="reveal-item opacity-0 translate-y-8 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto mt-2">

            {/* Primary CTA */}
            <a href="#work" className="group relative inline-flex rounded-full text-sm transition-all duration-300 bg-white text-black overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto px-8 py-3.5">
              <div className="relative z-10 flex items-center justify-center gap-2 w-full h-full font-semibold tracking-wide">
                View Projects <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>

            {/* Secondary CTA */}
            <a href="mailto:yashsonawane235@gmail.com" className="group relative inline-flex rounded-full text-sm transition-all duration-300 bg-white/[0.03] border border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto px-8 py-3.5 backdrop-blur-md">
              <div className="relative z-10 flex items-center justify-center gap-2 w-full h-full font-medium tracking-wide">
                Hire Me <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>

            {/* Ghost CTA */}
            <button onClick={() => setIsResumeOpen(true)} className="group relative inline-flex rounded-md text-sm transition-all duration-300 text-gray-400 hover:text-white active:scale-95 cursor-pointer w-full sm:w-auto px-4 py-3.5">
              <div className="relative z-10 flex items-center justify-center gap-1.5 w-full h-full font-medium tracking-wide">
                Resume <span className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">↗</span>
              </div>
              <div className="absolute bottom-2 left-4 right-4 h-[1px] bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>

          </div>
        </div>

        {/* Right Side: Floating Panels */}
        <div className="hidden lg:flex w-[40%] relative h-[450px] items-center justify-center z-20">
          {/* AWS Panel */}
          <div className="float-panel-1 absolute top-12 right-16 w-52 bg-white/[0.02] border border-white/5 rounded-2xl p-4 backdrop-blur-2xl flex items-center gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white text-sm font-semibold tracking-tight">AWS Cloud</div>
              <div className="text-gray-400 text-xs font-mono mt-0.5">us-east-1</div>
            </div>
          </div>

          {/* K8s Panel */}
          <div className="float-panel-2 absolute top-1/2 -translate-y-1/2 left-4 w-60 bg-white/[0.02] border border-white/5 rounded-2xl p-4 backdrop-blur-2xl flex items-center gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
              <Server className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white text-sm font-semibold tracking-tight">Kubernetes</div>
              <div className="text-gray-400 text-xs font-mono flex items-center gap-1.5 mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> 3 Nodes Active</div>
            </div>
          </div>

          {/* CI/CD Panel */}
          <div className="float-panel-3 absolute bottom-12 right-12 w-56 bg-white/[0.02] border border-white/5 rounded-2xl p-5 backdrop-blur-2xl flex flex-col gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <div className="text-white text-sm font-semibold tracking-tight">CI/CD Pipeline</div>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
              <div className="bg-white w-[85%] h-full rounded-full" />
            </div>
            <div className="text-gray-400 text-[10px] font-mono text-right">Deploying... 85%</div>
          </div>
        </div>
      </div>

      {/* --- METRICS SECTION (BOTTOM) --- */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 pb-12 mt-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">

          <div className="reveal-item opacity-0 translate-y-8 bg-white/[0.02] border border-white/5 backdrop-blur-2xl rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.04] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all border border-white/5">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-white font-semibold text-lg leading-tight">6+</div>
              <div className="text-gray-400 text-[10px] font-mono tracking-wide mt-0.5">PROJECTS</div>
            </div>
          </div>

          <div className="reveal-item opacity-0 translate-y-8 bg-white/[0.02] border border-white/5 backdrop-blur-2xl rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.04] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all border border-white/5">
              <Server className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm leading-tight">Kubernetes</div>
              <div className="text-gray-400 text-[10px] font-mono tracking-wide mt-0.5">ORCHESTRATION</div>
            </div>
          </div>

          <div className="reveal-item opacity-0 translate-y-8 bg-white/[0.02] border border-white/5 backdrop-blur-2xl rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.04] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all border border-white/5">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm leading-tight">CI/CD</div>
              <div className="text-gray-400 text-[10px] font-mono tracking-wide mt-0.5">AUTOMATION</div>
            </div>
          </div>

          <div className="reveal-item opacity-0 translate-y-8 bg-white/[0.02] border border-white/5 backdrop-blur-2xl rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.04] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all border border-white/5">
              <Database className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm leading-tight">Terraform</div>
              <div className="text-gray-400 text-[10px] font-mono tracking-wide mt-0.5">IAC</div>
            </div>
          </div>

        </div>
      </div>

      {/* --- RESUME MODAL --- */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsResumeOpen(false)}></div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl h-[85vh] bg-[#050505] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col z-10"
            >
              <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10 bg-black/50 z-20">
                <h3 className="font-display italic text-lg sm:text-xl text-white">Yash Sonawane Resume</h3>

                <div className="flex items-center gap-3 sm:gap-4">
                  <a href={rawResumeUrl} download className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                  <a href={resumeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span className="hidden sm:inline">Fullscreen</span>
                  </a>
                  <button
                    onClick={() => setIsResumeOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors ml-1 sm:ml-2"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex-1 w-full relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-40 z-0">
                  <p className="text-gray-400 text-sm mb-2">Loading Resume...</p>
                  <p className="text-gray-500 text-xs text-center max-w-xs">If it doesn't load automatically, please use the Fullscreen button above.</p>
                </div>
                <iframe
                  src={resumeUrl}
                  width="100%"
                  height="100%"
                  className="w-full h-full border-none relative z-10 bg-transparent"
                  title="Resume PDF"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
