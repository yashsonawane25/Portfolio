import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const journalEntries = [
  {
    title: <>How to Set Up <span className="font-display italic text-accent">GitHub Actions</span> for Any Project (Step-by-Step)</>,
    link: "https://dev.to/yash_sonawane25/how-to-set-up-github-actions-for-any-project-step-by-step-8ga",
    readTime: "6 min read",
    date: "Apr 21, 2025",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop",
    category: "CI/CD"
  },
  {
    title: <>How to Build a Self-Service <span className="font-display italic text-accent">DevOps</span> Platform (<span className="font-display italic text-accent">Platform Engineering</span> Explained)</>,
    link: "https://dev.to/yash_sonawane25/how-to-build-a-self-service-devops-platform-platform-engineering-explained-4fe0",
    readTime: "8 min read",
    date: "Apr 11, 2025",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=800&auto=format&fit=crop",
    category: "Platform Engineering"
  },
  {
    title: <><span className="font-display italic text-accent">DevOps</span> Made Simple: <span className="font-display italic text-accent">DevSecOps</span> in Action - Securing Your <span className="font-display italic text-accent">CI/CD</span> Pipeline</>,
    link: "https://dev.to/yash_sonawane25/devops-made-simple-a-beginners-guide-to-devsecops-in-action-securing-your-cicd-pipeline-39i1",
    readTime: "7 min read",
    date: "Mar 22, 2025",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
    category: "Security"
  },
  {
    title: <>Beginner’s Guide to <span className="font-display italic text-accent">CI/CD</span> Pipelines with <span className="font-display italic text-accent">GitHub Actions</span> & <span className="font-display italic text-accent">Kubernetes</span></>,
    link: "https://dev.to/yash_sonawane25/devops-made-simple-a-beginners-guide-to-setting-up-cicd-pipelines-with-github-actions--4143",
    readTime: "7 min read",
    date: "Mar 21, 2025",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    category: "CI/CD"
  },
  {
    title: <>WebAssembly (<span className="font-display italic text-accent">Wasm</span>) in <span className="font-display italic text-accent">DevOps</span>: Why It’s the Next Big Thing</>,
    link: "https://dev.to/yash_sonawane25/webassembly-wasm-in-devops-why-its-the-next-big-thing-4m76",
    readTime: "5 min read",
    date: "Apr 16, 2025",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
    category: "Future Tech"
  },
  {
    title: <><span className="font-display italic text-accent">AI</span>-Driven <span className="font-display italic text-accent">DevOps</span>: How <span className="font-display italic text-accent">AI</span> is Changing <span className="font-display italic text-accent">CI/CD</span> and Automation</>,
    link: "https://dev.to/yash_sonawane25/ai-driven-devops-how-ai-is-changing-cicd-and-automation-3dmd",
    readTime: "6 min read",
    date: "Apr 2, 2025",
    image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=800&auto=format&fit=crop",
    category: "AI"
  }
];

export const Journal: React.FC = () => {
  return (
    <section id="journal" className="bg-bg min-h-screen flex items-center py-16 md:py-24 relative z-10 overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="https://res.cloudinary.com/dfonotyfb/video/upload/v1775585556/dds3_1_rqhg7x.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-0"></div>
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Journal</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-text-primary tracking-tight mb-4">
              Recent <span className="italic text-text-primary/80">thoughts</span>
            </h2>
            <p className="text-muted max-w-sm text-sm md:text-base">
              Articles and guides on DevOps, Cloud, and SRE.
            </p>
          </div>
          <button className="hidden md:inline-flex group relative rounded-full p-[1px] overflow-hidden">
             <span className="absolute inset-[-2px] accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
             <div className="relative z-10 bg-bg rounded-full flex items-center gap-2 px-6 py-3">
               <span className="text-sm text-text-primary">View all posts</span>
               <ArrowRight className="w-4 h-4 text-text-primary group-hover:translate-x-1 transition-transform" />
             </div>
          </button>
        </motion.div>

        <div className="flex flex-col gap-5">
          {journalEntries.map((entry, i) => (
            <motion.a 
              key={i}
              href={entry.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group relative rounded-[40px] sm:rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-10"
            >
              {/* Subtle Gradient Border on Hover */}
              <div className="absolute inset-[-1px] rounded-[40px] sm:rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              
              {/* Inner Card Content */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 p-4 sm:px-5 sm:py-4 bg-surface/30 group-hover:bg-surface border border-stroke group-hover:border-transparent rounded-[32px] sm:rounded-full w-full h-full transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full">
                  <div className="w-full sm:w-20 h-40 sm:h-20 rounded-[20px] sm:rounded-full overflow-hidden shrink-0 border border-stroke/50">
                    <img src={entry.image} alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] md:text-xs text-muted uppercase tracking-[0.2em] bg-bg/50 border border-stroke/50 rounded-full px-3 py-1">{entry.category}</span>
                    </div>
                    <h3 className="text-lg md:text-xl text-text-primary font-medium transition-colors leading-snug pr-4 mb-2">
                      {entry.title}
                    </h3>
                    <div className="flex items-center gap-3 text-[11px] sm:text-xs text-muted">
                      <span>{entry.readTime}</span>
                      <span className="w-1 h-1 rounded-full bg-stroke"></span>
                      <span>{entry.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="hidden sm:flex w-12 h-12 rounded-full border border-stroke items-center justify-center group-hover:bg-text-primary group-hover:text-bg transition-colors shrink-0 mr-2 shadow-sm">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 group-hover:translate-x-0.5 transition-all duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
