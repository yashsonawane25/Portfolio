import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Server, ShieldCheck } from 'lucide-react';

const stats = [
  { 
    value: "4+", 
    label: "Years Experience", 
    subtext: "Architecting cloud systems",
    icon: <Server className="w-5 h-5 text-[#89AACC]" />
  },
  { 
    value: "50+", 
    label: "Projects Deployed", 
    subtext: "CI/CD & Infrastructure",
    icon: <Activity className="w-5 h-5 text-[#89AACC]" />
  },
  { 
    value: "99.9%", 
    label: "System Reliability", 
    subtext: "Zero-downtime focus",
    icon: <ShieldCheck className="w-5 h-5 text-green-400" />
  }
];

export const Stats: React.FC = () => {
  return (
    <section className="bg-bg py-24 relative z-10 overflow-hidden border-t border-stroke/50">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
            </span>
            <span className="text-xs text-muted uppercase tracking-[0.2em] font-medium">Live Telemetry</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-text-primary tracking-tight">
            Impact by the <span className="italic text-text-primary/70">numbers</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              className="relative group rounded-[24px] bg-surface/30 backdrop-blur-md border border-stroke p-8 hover:border-[#89AACC]/30 transition-colors duration-500 overflow-hidden shadow-lg"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#89AACC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Top Header */}
              <div className="flex items-center justify-between mb-10 relative z-10">
                <span className="text-xs text-muted uppercase tracking-wider font-medium">{stat.label}</span>
                <div className="p-2 rounded-full bg-bg border border-stroke group-hover:border-[#89AACC]/20 transition-colors duration-300 shadow-sm">
                  {stat.icon}
                </div>
              </div>

              {/* Value */}
              <div className="relative z-10">
                <h3 className="text-5xl lg:text-7xl font-display text-text-primary tracking-tight mb-2 drop-shadow-md">
                  {stat.value}
                </h3>
                <p className="text-sm text-muted/90">{stat.subtext}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
