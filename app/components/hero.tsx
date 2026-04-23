"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#050505] text-white">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-violet-900/40 mix-blend-screen filter blur-[120px] opacity-70"
        />
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/30 mix-blend-screen filter blur-[100px] opacity-70"
        />
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            y: [0, -100, 0],
            x: [0, 50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] left-[20%] w-[70vw] h-[70vw] rounded-full bg-indigo-900/30 mix-blend-screen filter blur-[140px] opacity-70"
        />
      </div>

      {/* Massive Typography overlay with mix-blend-difference */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-12 md:px-24 pt-20">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mix-blend-difference z-20"
        >
          <h1 className="text-[14vw] sm:text-[12vw] leading-[0.85] font-bold tracking-tighter uppercase font-sans text-white">
            Samra
            <br />
            Safdar<span className="text-primary/80">.</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col md:flex-row gap-8 md:gap-24 mix-blend-difference z-20"
        >
          <p className="text-xl sm:text-3xl font-light tracking-wide max-w-md text-white/90 leading-snug">
            Full Stack Developer <br className="hidden sm:block" />& Creative Technologist
          </p>
          <div className="flex flex-col gap-4 max-w-xs">
            <p className="text-sm text-white/60 leading-relaxed uppercase tracking-widest font-semibold">
              Location
            </p>
            <p className="text-sm text-white/80 leading-relaxed uppercase tracking-widest mb-4">
              Available Worldwide
            </p>
            <p className="text-sm text-white/60 leading-relaxed uppercase tracking-widest font-semibold">
              Mission
            </p>
            <p className="text-sm text-white/80 leading-relaxed">
              Crafting premium digital experiences through hyper-minimal design and robust engineering.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - absolute positioned */}
      <motion.div 
        className="absolute bottom-8 right-8 md:bottom-12 md:right-24 z-20 mix-blend-difference flex items-center gap-4 hidden sm:flex"
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
