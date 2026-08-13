"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-[#050505] to-[#000000] py-16 text-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,_var(--tw-gradient-stops))] from-primary/20 via-[#050505] to-[#000000] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/10 filter blur-[150px] pointer-events-none" />
      <div className="site-container px-6 md:px-24 relative z-10">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">

          {/* Left: tagline */}
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-widest mb-1">Samra Safdar</p>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Full Stack Developer · AI Engineer · Open to Opportunities
            </p>
          </div>

          {/* Right: availability pill */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 rounded-full border border-emerald-400/60 bg-emerald-500/20 px-5 py-2.5 hover:bg-emerald-500/30 transition-all shadow-lg shadow-emerald-500/20 cursor-none view-project"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-300">Available for Hire</span>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/8 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground font-medium">
            © {new Date().getFullYear()} Samra Safdar. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            <motion.a
              href="https://www.linkedin.com/in/samra-safdar-16833b30b/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-white/60 hover:text-cyan-400 transition-colors text-xs font-bold uppercase tracking-widest cursor-none view-project px-4 py-2 rounded-full hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/samki6576"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-white/60 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest cursor-none view-project px-4 py-2 rounded-full hover:bg-primary/10 border border-transparent hover:border-primary/30"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
              GitHub
            </motion.a>
            <motion.a
              href="mailto:samrasdra@gmail.com"
              className="group flex items-center gap-2 text-white/60 hover:text-emerald-400 transition-colors text-xs font-bold uppercase tracking-widest cursor-none view-project px-4 py-2 rounded-full hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/30"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
              Email
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}
