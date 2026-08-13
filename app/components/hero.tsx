"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail, Briefcase } from "lucide-react"

const stats = [
  { value: "38+", label: "Public Repos" },
  { value: "8+", label: "Tech Stacks" },
  { value: "2024", label: "GitHub Since" },
  { value: "100%", label: "Remote Ready" },
]

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#050505] text-white">

      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-violet-900/40 mix-blend-screen filter blur-[120px] opacity-70"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -150, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/30 mix-blend-screen filter blur-[100px] opacity-70"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], y: [0, -100, 0], x: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] left-[20%] w-[70vw] h-[70vw] rounded-full bg-indigo-900/30 mix-blend-screen filter blur-[140px] opacity-70"
        />
      </div>

      {/* Main content — vertically centered */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-12 md:px-24 pt-20">

        {/* Open to Work badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 flex items-center gap-3"
        >
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-400">Open to Work</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-3 w-3 text-white/30" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
              Full Stack · AI Engineer · Available Worldwide
            </span>
          </div>
        </motion.div>

        {/* Big Name */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <h1 className="text-[14vw] sm:text-[12vw] leading-[0.85] font-bold tracking-tighter uppercase font-sans text-white mix-blend-difference">
            Samra
            <br />
            Safdar<span className="text-primary/80">.</span>
          </h1>
        </motion.div>

        {/* Tagline + links + stats */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col md:flex-row gap-8 md:gap-24"
        >
          {/* Left */}
          <div className="max-w-md">
            <p className="text-lg sm:text-2xl font-light tracking-wide text-white/90 leading-snug">
              Full Stack Developer &amp; Cloud{" "}
              <br className="hidden sm:block" />AI Enthusiast
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <motion.a
                href="https://www.linkedin.com/in/samra-safdar-16833b30b"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-medium uppercase tracking-[0.25em] text-white/90 backdrop-blur-md transition-all hover:border-cyan-400/50 hover:bg-cyan-400/10"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
                <ArrowUpRight className="h-4 w-4 opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>

              <motion.a
                href="https://github.com/samki6576"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-medium uppercase tracking-[0.25em] text-white/90 backdrop-blur-md transition-all hover:border-violet-400/50 hover:bg-violet-400/10"
              >
                <Github className="h-4 w-4" />
                GitHub
                <ArrowUpRight className="h-4 w-4 opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>

              <motion.a
                href="mailto:hismm8690@gmail.com"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-sm font-medium uppercase tracking-[0.25em] text-emerald-400 backdrop-blur-md transition-all hover:border-emerald-400/60 hover:bg-emerald-400/15"
              >
                <Mail className="h-4 w-4" />
                Hire Me
              </motion.a>
            </div>
          </div>

          {/* Right: stats */}
          <div className="flex flex-col gap-4 max-w-xs">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex flex-col"
              >
                <span className="text-2xl font-bold text-white tracking-tight">{stat.value}</span>
                <span className="text-[10px] text-white/40 uppercase tracking-[0.2em]">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-8 md:bottom-12 md:right-24 z-20 mix-blend-difference hidden sm:flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-[0.3em] text-white/60 rotate-90 origin-right translate-y-8">Scroll</span>
        <div className="w-[1px] h-24 bg-white/20 relative overflow-hidden">
          <motion.div
            className="w-full h-1/3 bg-white absolute top-0"
            animate={{ top: ["-33%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </div>
  )
}
