"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 text-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
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
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-400">Available for Hire</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/8 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground font-medium">
            © {new Date().getFullYear()} Samra Safdar. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <motion.a
              href="https://www.linkedin.com/in/samra-safdar-16833b30b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors text-xs font-bold uppercase tracking-widest"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/samki6576"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-4 w-4" />
              GitHub
            </motion.a>
            <motion.a
              href="mailto:samrasdra@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-emerald-400 transition-colors text-xs font-bold uppercase tracking-widest"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-4 w-4" />
              Email
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}
