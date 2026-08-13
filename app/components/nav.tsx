"use client"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { FileText } from "lucide-react"

export default function Nav() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [isTop, setIsTop] = useState(true)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > 50) {
      setIsTop(false)
    } else {
      setIsTop(true)
    }

    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll("section, div[data-section]")
    if (index === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (sections[index - 1]) {
      sections[index - 1].scrollIntoView({ behavior: "smooth" })
    } else {
      window.scrollTo({ top: window.innerHeight * index, behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-1/2 -translate-x-1/2 z-[90] transition-all duration-700 ease-[0.16,1,0.3,1] ${
        isTop ? "w-full px-6 md:px-12 top-0 py-8" : "w-max top-6"
      }`}
    >
      <div
        className={`flex items-center justify-between mx-auto transition-all duration-700 ease-[0.16,1,0.3,1] ${
          isTop
            ? "max-w-7xl"
            : "bg-[#111111]/70 backdrop-blur-2xl border border-white/20 rounded-full px-10 py-5 shadow-2xl shadow-black/50 gap-10"
        }`}
      >
        <div className={`transition-all duration-700 ${!isTop ? "hidden" : "mix-blend-difference"}`}>
          <img src="/logo.png" alt="Samra Portfolio" className="h-8 w-auto" />
        </div>

        <div className={`flex items-center gap-8 transition-all duration-700 ${isTop ? "mix-blend-difference" : ""}`}>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group text-white text-xs font-bold uppercase tracking-[0.2em] hover:text-primary transition-all relative cursor-none view-project px-3 py-2 rounded-lg hover:bg-primary/10 outline-none"
            whileHover={{ y: -2 }}
          >
            <span className="relative z-10">Home</span>
            <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform rounded-full" />
          </motion.button>
          <motion.button
            onClick={() => scrollToSection(1)}
            className="group text-white text-xs font-bold uppercase tracking-[0.2em] hover:text-primary transition-all relative cursor-none view-project px-3 py-2 rounded-lg hover:bg-primary/10 outline-none"
            whileHover={{ y: -2 }}
          >
            <span className="relative z-10">About</span>
            <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform rounded-full" />
          </motion.button>
          <motion.button
            onClick={() => scrollToSection(2)}
            className="group text-white text-xs font-bold uppercase tracking-[0.2em] hover:text-primary transition-all relative cursor-none view-project px-3 py-2 rounded-lg hover:bg-primary/10 outline-none"
            whileHover={{ y: -2 }}
          >
            <span className="relative z-10">Work</span>
            <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform rounded-full" />
          </motion.button>
          <motion.button
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
            className="group text-white text-xs font-bold uppercase tracking-[0.2em] hover:text-primary transition-all relative cursor-none view-project px-3 py-2 rounded-lg hover:bg-primary/10 outline-none"
            whileHover={{ y: -2 }}
          >
            <span className="relative z-10">Contact</span>
            <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform rounded-full" />
          </motion.button>
          <motion.a
            href="mailto:samrasdra@gmail.com"
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500/40 to-emerald-400/40 border border-emerald-400/60 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300 hover:from-emerald-500/60 hover:to-emerald-400/60 hover:border-emerald-300 transition-all cursor-none view-project shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-300/20 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            <FileText className="h-3.5 w-3.5 relative z-10" />
            <span className="relative z-10">Hire Me</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}
