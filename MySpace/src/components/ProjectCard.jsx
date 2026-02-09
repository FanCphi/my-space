import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProjectCard = ({ project }) => {
  const isLarge = project.size === 'large';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative border-4 border-[#1a1a1a] p-6 flex flex-col justify-between transition-all duration-300",
        project.color,
        project.textColor,
        isLarge ? "md:col-span-2 md:row-span-1" : "col-span-1 row-span-1",
        "min-h-[300px]"
      )}
    >
      {/* Hover Effect Background Layer */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Header */}
      <div className="flex justify-between items-start z-10">
        <span className="text-sm font-bold tracking-widest uppercase border-b-2 border-current pb-1">
          {project.category}
        </span>
        <span className="text-sm font-bold">{project.year}</span>
      </div>

      {/* Content */}
      <div className="space-y-4 z-10 mt-auto">
        <h3 className="text-4xl font-black leading-tight tracking-tighter">
          {project.title}
        </h3>
        <p className={cn(
          "text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0",
          project.textColor === 'text-white' ? 'text-white/90' : 'text-black/80'
        )}>
          {project.description}
        </p>
      </div>

      {/* Action Button */}
      <motion.a
        href={project.link}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "absolute top-6 right-6 w-12 h-12 flex items-center justify-center border-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300",
          project.textColor === 'text-white' ? 'border-white bg-white text-black' : 'border-black bg-black text-white'
        )}
      >
        <ArrowUpRight size={24} />
      </motion.a>

      {/* Decorative Geometric Elements based on index/id could go here */}
    </motion.div>
  );
};

export default ProjectCard;
