import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Network,
  Layers,
  Cloud,
  GitBranch,
  Terminal,
  Command,
  Workflow,
  Anchor,
  Activity,
  Server,
  Code
} from 'lucide-react';

const stats = [
  {
    title: "TECHNOLOGIES",
    value: "20+",
    subtext: "Mastered across the stack",
    icon: <Code size={18} />
  },
  {
    title: "EXPERIENCE",
    value: "4+",
    subtext: "Years of production builds",
    icon: <Activity size={18} />
  },
  {
    title: "SYSTEMS",
    value: "50+",
    subtext: "Automated pipelines & clusters",
    icon: <Server size={18} />
  }
];

const skills = [
  { name: "Docker", desc: "Containerization", category: "Compute", icon: <Box className="w-5 h-5" /> },
  { name: "Kubernetes", desc: "Orchestration", category: "Compute", icon: <Network className="w-5 h-5" /> },
  { name: "Terraform", desc: "Infrastructure as Code", category: "Automation", icon: <Layers className="w-5 h-5" /> },
  { name: "AWS", desc: "Cloud Provider", category: "Infrastructure", icon: <Cloud className="w-5 h-5" /> },
  { name: "Git", desc: "Version Control", category: "Workflow", icon: <GitBranch className="w-5 h-5" /> },
  { name: "Python", desc: "Scripting & Automation", category: "Language", icon: <Terminal className="w-5 h-5" /> },
  { name: "Linux", desc: "OS & Administration", category: "Core", icon: <Command className="w-5 h-5" /> },
  { name: "CI/CD", desc: "Deployment Pipelines", category: "Workflow", icon: <Workflow className="w-5 h-5" /> },
  { name: "Helm", desc: "K8s Package Manager", category: "Deployment", icon: <Anchor className="w-5 h-5" /> },
  { name: "Prometheus", desc: "Observability", category: "Monitoring", icon: <Activity className="w-5 h-5" /> }
];

const extraSkills = [
  "Jenkins", "GitHub Actions", "Ansible", "NGINX", "Grafana", "MySQL", "PostgreSQL", "Bash", "Redis", "ArgoCD"
];

const FadingBackgroundVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationFrameId: number;

    const updateOpacity = () => {
      if (!video) return;
      const { currentTime, duration } = video;
      
      if (!duration) {
        animationFrameId = requestAnimationFrame(updateOpacity);
        return;
      }

      // Fade in over 0.5s at the start
      if (currentTime < 0.5) {
        video.style.opacity = (currentTime / 0.5).toString();
      } 
      // Fade out over 0.5s at the end
      else if (duration - currentTime < 0.5) {
        video.style.opacity = ((duration - currentTime) / 0.5).toString();
      } 
      // Fully visible in the middle
      else {
        video.style.opacity = '1';
      }

      animationFrameId = requestAnimationFrame(updateOpacity);
    };

    const handleEnded = () => {
      if (!video) return;
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
      }, 100);
    };

    video.addEventListener('ended', handleEnded);
    video.play().catch(() => {});
    animationFrameId = requestAnimationFrame(updateOpacity);

    return () => {
      video.removeEventListener('ended', handleEnded);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0 }}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260308_114720_3dabeb9e-2c39-4907-b747-bc3544e2d5b7.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      {/* Subtle Dot Grid Overlay for texture */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)', 
          backgroundSize: '28px 28px' 
        }} 
      />
    </div>
  );
};

export const Skills: React.FC = () => {
  return (
    <section className="bg-black py-32 relative z-10 overflow-hidden border-t border-white/5 font-sans" id="skills">
      {/* Animated Background Layer */}
      <FadingBackgroundVideo />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start md:items-center text-left md:text-center mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] text-gray-400 font-mono uppercase tracking-[0.2em] border border-white/10 bg-white/5 px-4 py-1.5 rounded-full backdrop-blur-md">
              Engineering Arsenal
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tighter mb-6">
            Built with <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">precision.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg font-light leading-relaxed">
            The core technologies and frameworks I use to architect, automate, and scale resilient cloud-native infrastructure.
          </p>
        </motion.div>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] hover:border-white/10 group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="text-xs text-gray-400 uppercase tracking-widest font-mono mb-6 flex items-center justify-between">
                {stat.title}
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 group-hover:text-white group-hover:scale-110 transition-all border border-white/5">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-6xl font-display font-bold text-white mb-3 tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-400 font-light">{stat.subtext}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Skills Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-24">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
              className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.04] hover:border-white/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between min-h-[160px]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-300 group-hover:text-white group-hover:bg-white/10 transition-colors">
                  {skill.icon}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 group-hover:text-gray-400 transition-colors">
                  {skill.category}
                </span>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-1 tracking-tight">{skill.name}</h4>
                <p className="text-sm text-gray-400 font-light">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Section (Marquee / Flex Wrap) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <p className="text-xs text-gray-500 uppercase tracking-widest font-mono mb-8">
            Also Experienced In
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
            {extraSkills.map((extra, i) => (
              <div
                key={i}
                className="px-5 py-2.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md text-sm text-gray-300 font-medium hover:text-white hover:bg-white/[0.05] hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 cursor-default"
              >
                {extra}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
