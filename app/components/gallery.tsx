"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { selectedWorks } from "./projects-data"

export default function Gallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.45
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="selected-works" className="relative bg-[#fbf9f6] py-24 border-b border-[#e6e0d4] overflow-hidden">
      {/* Top Header Row with Navigation Arrows */}
      <div className="px-6 sm:px-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#78716c] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-sm bg-[#1e3a8a]" />
            <span>Section 02 · Web &amp; 3D Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] uppercase">
            Selected Works
          </h2>
          <p className="mt-3 text-sm text-[#57534e] max-w-md font-normal leading-relaxed">
            E-commerce storefronts, immersive 3D spatial scenes, and creative web solutions.
          </p>
        </div>

        {/* Scroll navigation arrows with spring physics */}
        <div className="flex items-center gap-2">
          <motion.button
            onClick={() => handleScroll("left")}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="p-2.5 rounded bg-[#ffffff] hover:bg-[#faf8f3] border border-[#e6e0d4] text-[#141413] transition-colors hover:border-[#141413] shadow-sm"
            title="Scroll Left"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-4 h-4" />
          </motion.button>
          <motion.button
            onClick={() => handleScroll("right")}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="p-2.5 rounded bg-[#ffffff] hover:bg-[#faf8f3] border border-[#e6e0d4] text-[#141413] transition-colors hover:border-[#141413] shadow-sm"
            title="Scroll Right"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Horizontal Scrollable Container with Tactile Lift */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto custom-scrollbar px-6 sm:px-10 pb-10 pt-2 scroll-smooth snap-x snap-mandatory"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {selectedWorks.map((work, index) => (
          <motion.div
            key={work.id}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col w-[85vw] sm:w-[380px] md:w-[420px] rounded bg-[#ffffff] border border-[#e6e0d4] hover:border-[#141413] transition-all duration-300 snap-start shrink-0 shadow-sm hover:shadow-[0_16px_32px_-8px_rgba(28,25,23,0.12)]"
          >
            {/* Image Preview */}
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full aspect-[16/10] overflow-hidden bg-[#f0ebe0] block border-b border-[#e6e0d4]"
            >
              <img
                src={work.image || "/placeholder.svg"}
                alt={work.title}
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg"
                }}
              />

              {/* Index + Category badge */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
                <span className="text-xs font-bold font-mono text-[#141413] bg-[#ffffff]/92 backdrop-blur-sm px-2.5 py-1 rounded border border-[#e6e0d4] shadow-sm">
                  0{index + 1}
                </span>
                <div className="flex items-center gap-1.5">
                  {work.status === "live" && (
                    <span className="flex items-center gap-1 text-[10px] font-mono font-bold tracking-wider text-white uppercase bg-emerald-700 px-2 py-0.5 rounded shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Live
                    </span>
                  )}
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-[#44403c] uppercase bg-[#ffffff]/92 backdrop-blur-sm px-2.5 py-0.5 rounded border border-[#e6e0d4] shadow-sm">
                    {work.category}
                  </span>
                </div>
              </div>
            </a>

            {/* Content block */}
            <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <a href={work.url} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#141413] group-hover:text-[#c2410c] transition-colors font-mono">
                      {work.title}
                    </h3>
                  </a>
                  <div className="flex items-center gap-1 shrink-0 mt-0.5">
                    {work.github && (
                      <a
                        href={work.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded text-[#78716c] hover:text-[#141413] hover:bg-[#f7f5ef] transition-colors"
                        title="View source on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded text-[#78716c] hover:text-[#c2410c] hover:bg-[#f7f5ef] transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-[#57534e] leading-relaxed line-clamp-3 font-normal">
                  {work.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#e6e0d4]">
                <div className="flex flex-wrap gap-1.5">
                  {work.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono uppercase tracking-wider text-[#57534e] bg-[#f7f5ef] border border-[#e6e0d4] rounded px-2 py-0.5 transition-colors group-hover:border-[#d4ccbe]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* End Spacer */}
        <div className="min-w-[4vw] shrink-0" />
      </div>

      {/* Helper cue */}
      <div className="px-6 sm:px-10 max-w-7xl mx-auto flex items-center justify-between text-xs font-mono text-[#78716c]">
        <span>← Scroll horizontally or use arrows to inspect all selected works →</span>
      </div>
    </section>
  )
}