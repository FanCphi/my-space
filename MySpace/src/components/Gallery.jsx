import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

const Gallery = () => {
  return (
    <section className="w-full bg-[#f4f4f0] py-24 px-6 md:px-12 lg:px-24 border-t-4 border-[#1a1a1a]">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black tracking-tighter text-[#1a1a1a]"
        >
          SELECTED <br/>
          <span className="text-[#e4002b]">WORKS</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex gap-2 items-center"
        >
          <div className="w-4 h-4 bg-[#004f9f] rounded-full"></div>
          <div className="w-4 h-4 bg-[#f7d917] rotate-45"></div>
          <div className="w-4 h-4 bg-[#e4002b]"></div>
          <span className="ml-2 font-mono text-sm font-bold">2023 — 2025</span>
        </motion.div>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
