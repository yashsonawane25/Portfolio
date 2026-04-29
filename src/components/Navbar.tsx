import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ["Home", "Work", "Library", "Skills", "Journal", "Contact"];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <div 
        className={`inline-flex items-center justify-between rounded-full backdrop-blur-2xl border border-white/10 bg-black/40 transition-all duration-300 ${
          scrolled ? 'py-2 px-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-3xl' : 'py-3 px-4 shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
        }`}
        style={{ width: "fit-content", minWidth: "360px" }}
      >
        {/* Logo */}
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-transparent mr-6 cursor-pointer">
          <span className="font-display text-[16px] text-white tracking-widest font-bold">YS</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1 mr-6">
          {navLinks.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setActive(item)}
              className="relative px-3.5 py-1.5 text-sm transition-colors group flex items-center justify-center"
            >
              <span className={`relative z-10 transition-colors duration-300 font-medium tracking-wide ${active === item ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                {item}
              </span>
              
              {/* Active Dot / Underline */}
              <span className={`absolute bottom-0 left-0 w-full h-[1px] transition-all duration-300 origin-center ${active === item ? 'bg-white scale-x-100' : 'bg-white/50 scale-x-0 group-hover:scale-x-50'}`} />
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <a 
          href="https://drive.google.com/file/d/1VgXuwUZT798OA3eOl6AJQ8j32usdS4TK/view?usp=sharing" 
          target="_blank" 
          rel="noreferrer"
          className="relative rounded-full px-5 py-2 bg-white text-black text-sm font-semibold overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:scale-95 flex items-center gap-1.5"
        >
          <span className="relative z-10">Resume</span>
          <ArrowUpRight className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </a>
      </div>
    </motion.nav>
  );
};
