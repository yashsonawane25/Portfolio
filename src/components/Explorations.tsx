import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { VideoBackground } from './VideoBackground';

gsap.registerPlugin(ScrollTrigger);

const books = [
  {
    title: "Mastering Go: The Complete Developer's Masterclass",
    link: "https://yashsonawane1.gumroad.com/l/mastering-go-complete",
    image: "/images/book_go.png"
  },
  {
    title: "Terraform Associate (003) Crash Course",
    link: "https://yashsonawane1.gumroad.com/l/TerraformAssociate",
    image: "/images/book_terraform.png"
  },
  {
    title: "CKA Complete Study Guide",
    link: "https://yashsonawane1.gumroad.com/l/cka-study-guide",
    image: "/images/book_cka.png"
  },
  {
    title: "Mastering Python",
    link: "https://yashsonawane1.gumroad.com/l/mastering-python-complete-masterclass",
    image: "/images/book_python.png"
  },
  {
    title: "Git Mastery: From Zero to Expert",
    link: "https://yashsonawane1.gumroad.com/l/Gitmastery",
    image: "/images/book_git.png"
  },
  {
    title: "Docker Mastery: From Zero to Certified",
    link: "https://yashsonawane1.gumroad.com/l/docker-mastery-dca-2026",
    image: "/images/book_docker.png"
  }
];

const BookCard = ({ book, index, className }: { book: any, index: number, className: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);

    ref.current.style.setProperty('--x', `${mouseX}px`);
    ref.current.style.setProperty('--y', `${mouseY}px`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={book.link}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className={`group block relative aspect-[3/4] w-full max-w-[320px] rounded-[24px] cursor-pointer hover:z-30 transition-transform duration-500 hover:-translate-y-[6px] ${className}`}
    >
      {/* Depth Layer Wrapper with Shadows and Borders */}
      <div 
        className="w-full h-full premium-card"
        style={{ backdropFilter: 'blur(10px)' }}
      >
        {/* Image Container */}
        <div className="relative w-full h-full overflow-hidden rounded-[23px] z-10">
          <img 
            src={book.image} 
            alt={book.title} 
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out brightness-[0.7] contrast-[1.1] saturate-[.9] group-hover:brightness-[0.9] group-hover:saturate-100" 
          />
          
          {/* Dark Overlay + Vignette */}
          <div 
            className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2))',
              boxShadow: 'inset 0 -40px 80px rgba(0,0,0,0.6)'
            }}
          ></div>
          
          {/* Text Content Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
             <h3 className="text-xl md:text-2xl font-display italic text-text-primary mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-90 group-hover:opacity-100">
               {book.title}
             </h3>
             <div className="flex items-center gap-2 text-[#89AACC] font-medium text-sm translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
               <span>View Product</span>
               <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
             </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export const Explorations: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: contentRef.current,
          pinSpacing: false,
        });

        gsap.to(col1Ref.current, {
          y: "-50%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          }
        });

        gsap.to(col2Ref.current, {
          y: "-80%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="library" ref={containerRef} className="relative bg-[#070612] min-h-screen md:min-h-[300vh] z-10 overflow-hidden md:overflow-visible">
      {/* Pinned Content */}
      <div ref={contentRef} className="md:h-screen w-full flex flex-col items-center justify-center md:pointer-events-none z-10 relative pt-24 pb-12 md:py-0 bg-[#070612] overflow-hidden">
        
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <VideoBackground 
            src="https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8"
            className="ml-[200px] scale-[1.2] origin-left object-cover h-full"
          />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#070612] to-transparent z-10" />
        </div>

        <div className="flex flex-col items-center text-center px-6 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-stroke"></div>
            <span className="text-xs text-muted uppercase tracking-[0.3em]">DevOps Library</span>
            <div className="w-8 h-px bg-stroke"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display text-text-primary tracking-tight mb-6">
            Premium <span className="italic text-text-primary/80">books & guides</span>
          </h2>
          <p className="text-muted max-w-sm text-sm md:text-base mb-8">
            Master cloud infrastructure, automation, and programming with my curated masterclasses.
          </p>
          <button className="pointer-events-auto group relative rounded-full p-[1px] overflow-hidden">
             <span className="absolute inset-[-2px] accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
             <div className="relative z-10 bg-bg rounded-full flex items-center gap-2 px-6 py-3.5 md:py-3 active:scale-95 transition-transform">
               <span className="text-sm text-text-primary">View all on Gumroad</span>
               <ArrowRight className="w-4 h-4 text-text-primary group-hover:translate-x-1 transition-transform" />
             </div>
          </button>
        </div>
      </div>

      {/* Parallax Columns */}
      <div className="md:absolute inset-0 z-20 md:pointer-events-none flex justify-center overflow-hidden">
        <div className="w-full max-w-[1400px] md:h-[300vh] relative">
          <div className="md:absolute md:top-1/4 md:left-1/2 md:-translate-x-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-32 w-full max-w-6xl px-4 md:px-6 mb-24 md:mb-0" style={{ perspective: "1000px" }}>
            <div ref={col1Ref} className="flex flex-col gap-8 md:gap-24 md:mt-32 pointer-events-auto items-center">
              {[0, 2, 4].map(i => (
                <BookCard key={i} book={books[i]} index={i} className="md:even:rotate-3 md:odd:-rotate-2 hover:rotate-0" />
              ))}
            </div>
            <div ref={col2Ref} className="flex flex-col gap-8 md:gap-32 pointer-events-auto items-center">
              {[1, 3, 5].map(i => (
                <BookCard key={i} book={books[i]} index={i} className="md:even:-rotate-2 md:odd:rotate-3 hover:rotate-0" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
