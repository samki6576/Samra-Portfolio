"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react"
import { appWorks } from "./projects-data"

const categories = ["all", "AI / Full-Stack", "Apps", "Games"]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const filteredWorks = appWorks.filter((work) =>
    selectedCategory === "all" ? true : work.category === selectedCategory
  )

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
    <section id="work" className="relative bg-[#f7f5ef] py-24 border-b border-[#e6e0d4] overflow-hidden">
      {/* Top Header Row with Category Filters & Navigation Arrows */}
      <div className="px-6 sm:px-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#78716c] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-sm bg-[#c2410c]" />
            <span>Section 01 · Engineering Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] uppercase">
            Web &amp; AI Apps
          </h2>
          <p className="mt-3 text-sm text-[#57534e] max-w-md font-normal leading-relaxed">
            Production-grade systems, autonomous AI agents, and tools built for real users.
          </p>
        </div>

        {/* Controls: Filter Pills + Scroll Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 bg-[#ede6d9]/70 p-1 rounded border border-[#e6e0d4]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-[#ffffff] text-[#141413] font-bold shadow-sm"
                    : "text-[#57534e] hover:text-[#141413]"
                }`}
              >
                {cat === "all" ? "All" : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => handleScroll("left")}
              className="p-2.5 rounded bg-[#ffffff] hover:bg-[#faf8f3] border border-[#e6e0d4] text-[#141413] transition-all hover:border-[#141413] shadow-sm"
              title="Scroll Left"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-2.5 rounded bg-[#ffffff] hover:bg-[#faf8f3] border border-[#e6e0d4] text-[#141413] transition-all hover:border-[#141413] shadow-sm"
              title="Scroll Right"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Manual Scrollable Track */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto custom-scrollbar px-6 sm:px-10 pb-8 pt-2 scroll-smooth snap-x snap-mandatory"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {filteredWorks.map((work) => (
          <div
            key={work.id}
            className="group relative flex flex-col w-[85vw] sm:w-[380px] md:w-[420px] rounded bg-[#ffffff] border border-[#e6e0d4] hover:border-[#141413] transition-all duration-300 snap-start shrink-0 shadow-sm hover:shadow-md"
          >
            {/* Image Preview Banner */}
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full aspect-[16/10] overflow-hidden bg-[#f0ebe0] block border-b border-[#e6e0d4]"
            >
              <img
                src={work.image || "/placeholder.svg"}
                alt={work.title}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg"
                }}
              />

              {/* Badges row */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
                <span className="text-[11px] font-mono font-bold tracking-wider text-[#141413] uppercase bg-[#ffffff]/90 backdrop-blur-sm px-2.5 py-1 rounded border border-[#e6e0d4]">
                  {work.year}
                </span>
                <div className="flex items-center gap-1.5">
                  {work.status === "live" && (
                    <span className="flex items-center gap-1 text-[10px] font-mono font-bold tracking-wider text-white uppercase bg-emerald-700 px-2 py-0.5 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Live
                    </span>
                  )}
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-[#44403c] uppercase bg-[#ffffff]/90 backdrop-blur-sm px-2.5 py-0.5 rounded border border-[#e6e0d4]">
                    {work.category}
                  </span>
                </div>
              </div>

              {/* Impact overlay on hover */}
              {work.impact && (
                <div className="absolute inset-x-0 bottom-0 bg-[#ffffff]/95 backdrop-blur-sm border-t border-[#e6e0d4] p-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="h-3.5 w-3.5 text-[#c2410c] shrink-0 mt-0.5" />
                    <p className="text-xs text-[#141413] leading-relaxed font-mono">{work.impact}</p>
                  </div>
                </div>
              )}
            </a>

            {/* Info block */}
            <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <a href={work.url} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#141413] hover:text-[#c2410c] transition-colors font-mono">
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
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
                      className="text-[10px] font-mono uppercase tracking-wider text-[#57534e] bg-[#f7f5ef] border border-[#e6e0d4] rounded px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* End Spacer */}
        <div className="min-w-[4vw] shrink-0" />
      </div>

      {/* Helper cue */}
      <div className="px-6 sm:px-10 max-w-7xl mx-auto flex items-center justify-between text-xs font-mono text-[#78716c] pt-2">
        <span>← Scroll horizontally or use arrows to view all systems →</span>
      </div>
    </section>
  )
}