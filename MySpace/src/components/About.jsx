import { motion } from 'framer-motion';
import { timelineData, skillsData } from '../data/timeline';

const About = () => {
  return (
    <section className="w-full min-h-screen bg-[#f0f0f0] py-20 px-4 md:px-12 overflow-hidden relative">
      {/* Background Decorative Shapes */}
      <div className="absolute top-20 left-[-50px] w-40 h-40 rounded-full bg-[#E94B35] opacity-10 mix-blend-multiply" />
      <div className="absolute bottom-40 right-[-50px] w-60 h-60 bg-[#2D5D9B] opacity-10 rotate-12" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        
        {/* Left Column: Intro & Skills */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-[#1a1a1a]">
              WHO <br />
              <span className="text-[#E94B35]">I AM</span>
            </h2>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-[#4a4a4a]">
              A creative developer obsessed with the intersection of <span className="bg-[#FFD700] px-2 text-black">design</span> and <span className="bg-[#2D5D9B] px-2 text-white">technology</span>. 
              I build digital experiences that are not just functional, but memorable.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-6 border-b-4 border-black inline-block pb-2">TECH STACK</h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-white border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-default"
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Timeline */}
        <div className="relative pl-8 md:pl-16 border-l-4 border-black">
          <h3 className="text-3xl font-black mb-12 bg-black text-white inline-block px-4 py-2 transform -rotate-2 origin-top-left">
            JOURNEY
          </h3>

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-[45px] md:-left-[78px] w-6 h-6 border-4 border-black ${item.type === 'work' ? 'bg-[#E94B35]' : 'bg-[#FFD700]'} rounded-full`} />
                
                <span className="text-sm font-bold tracking-widest text-[#666] mb-2 block uppercase">
                  {item.year}
                </span>
                <h4 className="text-2xl font-black text-[#1a1a1a] mb-1">
                  {item.title}
                </h4>
                {item.company && (
                  <p className="text-lg font-bold text-[#2D5D9B] mb-2">{item.company}</p>
                )}
                <p className="text-base text-[#4a4a4a] leading-relaxed max-w-md">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
