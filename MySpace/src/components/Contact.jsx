import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <footer className="w-full bg-[#1a1a1a] text-[#f0f0f0] pt-24 pb-12 px-4 md:px-12 relative overflow-hidden">
      {/* Abstract Background Shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2D5D9B] rounded-bl-full opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[60vh]">
        
        {/* Call to Action */}
        <div className="space-y-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-medium text-[#888]"
          >
            HAVE AN IDEA?
          </motion.p>
          
          <motion.a 
            href="mailto:hello@versace.design" 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter hover:text-[#E94B35] transition-colors duration-300 group leading-none"
          >
            LET'S TALK
            <ArrowUpRight className="inline-block w-12 h-12 md:w-24 md:h-24 ml-4 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300" />
          </motion.a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-end border-t border-[#333] pt-8">
          
          {/* Copyright */}
          <div>
            <h3 className="text-2xl font-black mb-2">VERSACE</h3>
            <p className="text-[#666] text-sm">
              © {new Date().getFullYear()} My Space. All Rights Reserved. <br/>
              Built with React & Passion.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 md:justify-end">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "mailto:hello@versace.design", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-3 bg-[#333] rounded-full hover:bg-[#E94B35] transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
