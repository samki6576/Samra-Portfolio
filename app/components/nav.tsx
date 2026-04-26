"use client"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

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

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-1/2 -translate-x-1/2 z-[90] transition-all duration-700 ease-[0.16,1,0.3,1] ${isTop ? 'w-full px-6 md:px-12 top-0 py-8' : 'w-max top-6'}`}
    >
      <div className={`flex items-center justify-between mx-auto transition-all duration-700 ease-[0.16,1,0.3,1] ${isTop ? 'max-w-7xl' : 'bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-full px-10 py-5 shadow-2xl gap-16'}`}>
        
        <div className={`transition-all duration-700 ${!isTop ? 'hidden' : 'mix-blend-difference'}`}>
          <img src="/logo.png" alt="Samra Portfolio" className="h-8 w-auto" />
        </div>

        <div className={`flex items-center gap-10 transition-all duration-700 ${isTop ? 'mix-blend-difference' : ''}`}>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white text-xs font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors outline-none cursor-none view-project">
            Home
          </button>
          <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} className="text-white text-xs font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors outline-none cursor-none view-project">
            Work
          </button>
          <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="text-white text-xs font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors outline-none cursor-none view-project">
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
