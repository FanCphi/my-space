import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#f4f4f0] flex items-center justify-center px-6 md:px-12 lg:px-24">
      {/* Abstract Background Shapes */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 w-16 md:w-32 lg:w-64 h-full bg-[#e4002b] -z-10"
      />
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute top-10 right-10 md:top-20 md:right-20 w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#004f9f] -z-10 opacity-80 mix-blend-multiply"
      />
      <motion.div 
        initial={{ rotate: -45, y: 100, opacity: 0 }}
        animate={{ rotate: 15, y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#f7d917] -z-10 opacity-60 mix-blend-multiply rounded-tl-[100px]"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-7xl z-10">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[#1a1a1a] leading-[0.9]">
            Hello，<br/>
            I‘m <br/>
            <span className="text-[#004f9f]">Versace</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-lg font-medium border-l-4 border-[#1a1a1a] pl-6 py-2">
            Welcome to my own space
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-[#1a1a1a] hover:bg-[#333] text-white rounded-none px-10 py-8 text-xl font-bold transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_#e4002b]">
              VIEW WORK
            </Button>
            <Button size="lg" variant="outline" className="border-4 border-[#1a1a1a] text-[#1a1a1a] bg-transparent hover:bg-[#1a1a1a] hover:text-white rounded-none px-10 py-8 text-xl font-bold transition-all">
              CONTACT
            </Button>
          </div>

          <div className="flex gap-8 pt-8 items-center">
            <div className="h-1 w-24 bg-[#1a1a1a]"></div>
            <div className="flex gap-6">
                <SocialIcon icon={<Github size={28} />} href="#" delay={0.1} />
                <SocialIcon icon={<Twitter size={28} />} href="#" delay={0.2} />
                <SocialIcon icon={<Linkedin size={28} />} href="#" delay={0.3} />
            </div>
          </div>
        </motion.div>

        {/* Visual/Image Area - Abstract Composition */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative h-[400px] md:h-[600px] w-full hidden md:flex items-center justify-center"
        >
          <div className="relative w-full max-w-md aspect-[3/4] bg-white border-4 border-[#1a1a1a] shadow-[15px_15px_0px_0px_#1a1a1a] p-8 flex flex-col justify-between overflow-hidden">
             
             {/* Decorative lines */}
             <div className="absolute top-1/3 left-0 w-full h-1 bg-[#1a1a1a] z-0"></div>
             <div className="absolute top-0 right-1/3 w-1 h-full bg-[#1a1a1a] z-0"></div>

             <div className="relative z-10 w-24 h-24 bg-[#e4002b] rounded-full border-2 border-[#1a1a1a]"></div>
             
             <div className="relative z-10 self-center">
                <div className="w-40 h-40 border-4 border-[#1a1a1a] bg-[#f7d917] rotate-12 flex items-center justify-center">
                    <div className="w-20 h-20 bg-[#1a1a1a] rounded-full"></div>
                </div>
             </div>

             <div className="relative z-10 self-end w-full">
                 <div className="w-full h-12 bg-[#004f9f] mb-2"></div>
                 <h2 className="text-4xl font-black text-right">2026</h2>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialIcon = ({ icon, href, delay }) => (
  <motion.a 
    href={href}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 + delay }}
    whileHover={{ scale: 1.2, rotate: 10, color: "#e4002b" }}
    className="text-[#1a1a1a] transition-colors"
  >
    {icon}
  </motion.a>
);

export default Hero;
