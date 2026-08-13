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
            : "bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-full px-10 py-5 shadow-2xl gap-10"
        }`}
      >
        <div className={`transition-all duration-700 ${!isTop ? "hidden" : "mix-blend-difference"}`}>
          <img src="/logo.png" alt="Samra Portfolio" className="h-8 w-auto" />
        </div>

        <div className={`flex items-center gap-8 transition-all duration-700 ${isTop ? "mix-blend-difference" : ""}`}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-white text-xs font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors outline-none cursor-none view-project"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection(1)}
            className="text-white text-xs font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors outline-none cursor-none view-project"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(2)}
            className="text-white text-xs font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors outline-none cursor-none view-project"
          >
            Work
          </button>
          <button
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
            className="text-white text-xs font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors outline-none cursor-none view-project"
          >
            Contact
          </button>
          <motion.a
            href="mailto:hismm8690@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:bg-primary/80 transition-colors cursor-none view-project"
          >
            <FileText className="h-3 w-3" />
            Hire Me
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}
