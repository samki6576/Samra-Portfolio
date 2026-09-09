"use client"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Mail } from "lucide-react"

export default function Nav() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    setIsScrolled(latest > 40)
    if (previous !== undefined && latest > previous && latest > 180) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-300 ${
        isScrolled
          ? "bg-[#f7f5ef]/95 backdrop-blur-md border-b border-[#e6e0d4] py-3.5 shadow-[0_2px_12px_-2px_rgba(28,25,23,0.06)]"
          : "bg-transparent py-5 border-b border-[#e6e0d4]/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand / Colophon with Micro-Animation */}
        <button
          onClick={() => scrollToSection("home")}
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <motion.div
            whileHover={{ rotate: 90, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="w-8 h-8 rounded-sm bg-[#141413] text-[#f7f5ef] font-mono text-xs font-bold flex items-center justify-center shadow-sm group-hover:bg-[#c2410c] transition-colors"
          >
            SS
          </motion.div>
          <div>
            <span className="text-sm font-semibold tracking-tight text-[#141413] block group-hover:text-[#c2410c] transition-colors">
              Samra Safdar
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#78716c] block">
              Folio 2026 · Systems &amp; AI
            </span>
          </div>
        </button>

        {/* Center navigation links */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs tracking-wider uppercase">
          {[
            { label: "Systems", id: "work" },
            { label: "Archive", id: "selected-works" },
            { label: "Expertise", id: "about" },
            { label: "Inquiry", id: "contact" },
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ y: -1 }}
              className="px-3.5 py-1.5 rounded text-[#44403c] hover:text-[#141413] hover:bg-[#ede6d9]/70 transition-all relative group"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-1 left-3.5 right-3.5 h-[1px] bg-[#c2410c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.button>
          ))}
        </nav>

        {/* Right CTA / Status with Spring */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 border border-[#e6e0d4] bg-[#ffffff] px-2.5 py-1 rounded-full text-[11px] font-mono text-[#57534e]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>Available for Hire</span>
          </div>

          <motion.a
            href="mailto:samrasdra@gmail.com"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-1.5 bg-[#141413] hover:bg-[#2d2925] text-[#f7f5ef] px-4 py-2 rounded font-mono text-xs font-medium uppercase tracking-wider transition-colors shadow-sm"
          >
            <Mail className="w-3.5 h-3.5 text-[#c2410c]" />
            <span>Get in Touch</span>
          </motion.a>
        </div>
      </div>
    </motion.header>
  )
}
