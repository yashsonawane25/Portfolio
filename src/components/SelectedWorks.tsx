import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Postmortem AI",
    link: "https://github.com/yashsonawane25/Postmortem-ai",
    image: "/images/postmortem_ai_hero.png",
    span: "md:col-span-12",
    height: "md:min-h-[500px]"
  },
  {
    title: "AWS 3-Tier Architecture",
    link: "https://github.com/yashsonawane25/AWS-3-Tier-Highly-Available-Architecture-using-Terraform",
    image: "/images/aws_3tier.png",
    span: "md:col-span-7",
    height: "md:min-h-[400px]"
  },
  {
    title: "K8s Vote System",
    link: "https://github.com/yashsonawane25/k8s-microservices-vote-system",
    image: "/images/k8s_vote.png",
    span: "md:col-span-5",
    height: "md:min-h-[400px]"
  },
  {
    title: "NotionOps AI",
    link: "https://github.com/yashsonawane25/NotionOps-AI",
    image: "/images/notionops_ai.png",
    span: "md:col-span-4",
    height: "md:min-h-[350px]"
  },
  {
    title: "CloudTalk",
    link: "https://github.com/yashsonawane25/CloudTalk-A-Cloud-Native-3-Tier-Chat-Application-on-Kubernetes",
    image: "/images/cloudtalk.png",
    span: "md:col-span-4",
    height: "md:min-h-[350px]"
  },
  {
    title: "Wanderlust",
    link: "https://github.com/yashsonawane25/Wanderlust_Mega_Project",
    image: "/images/wanderlust.png",
    span: "md:col-span-4",
    height: "md:min-h-[350px]"
  }
];

const ProjectCard = ({ project }: { project: any }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["2deg", "-2deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-2deg", "2deg"]);

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
      href={project.link}
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
      className={`group block relative ${project.span} aspect-square md:aspect-auto ${project.height} cursor-pointer transition-all duration-300 ease-out hover:-translate-y-[6px] hover:scale-[1.01] hover:z-30`}
    >
      {/* Premium Base & Edge Glow */}
      <div className="w-full h-full premium-card">

        {/* Image */}
        <div className="absolute inset-0 rounded-[23px] overflow-hidden z-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out brightness-[0.65] contrast-[1.05] saturate-[0.9] group-hover:brightness-[0.85] group-hover:contrast-[1.1] group-hover:saturate-100 group-hover:scale-105" 
          />
        </div>
        
        {/* Depth Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-10"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0))' }}
        ></div>

        {/* Hover Label */}
        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none z-20">
          <h3 className="text-xl md:text-2xl font-display text-text-primary/90 group-hover:text-text-primary transition-colors duration-300 drop-shadow-lg">
            {project.title}
          </h3>
          
          <div className="flex items-center gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out bg-surface/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <span className="text-xs font-medium text-text-primary uppercase tracking-wider">View Project</span>
            <ArrowRight className="w-4 h-4 text-text-primary" />
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export const SelectedWorks: React.FC = () => {
  return (
    <section id="work" className="bg-bg py-12 md:py-16 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-stroke"></div>
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-text-primary tracking-tight mb-4">
              Featured <span className="italic text-text-primary/80">projects</span>
            </h2>
            <p className="text-muted max-w-sm text-sm md:text-base">
              A selection of high-performance, production-ready systems I've engineered.
            </p>
          </div>
          <button className="hidden md:inline-flex group relative rounded-full p-[1px] overflow-hidden">
             <span className="absolute inset-[-2px] accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
             <div className="relative z-10 bg-bg rounded-full flex items-center gap-2 px-6 py-3">
               <span className="text-sm text-text-primary">View all work</span>
               <ArrowRight className="w-4 h-4 text-text-primary group-hover:translate-x-1 transition-transform" />
             </div>
          </button>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6" style={{ perspective: "1000px" }}>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
