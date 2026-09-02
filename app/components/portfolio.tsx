"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, TrendingUp, ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react"
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
    <section id="work" className="relative bg-[#020202] py-24 border-t border-white/5 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-blue-600/10 filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] rounded-full bg-violet-600/10 filter blur-[140px] pointer-events-none" />

      {/* Top Header Row with Category Filters & Navigation Arrows */}
      <div className="px-6 sm:px-12 md:px-24 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h2 className="text-[12vw] sm:text-[8vw] md:text-[6vw] leading-[0.85] font-bold uppercase tracking-tighter text-white mix-blend-difference">
            Web<br /><span className="text-blue-500/90">Apps</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/50 max-w-md uppercase tracking-widest leading-relaxed font-light">
            Production-grade tools built for real users.
          </p>
        </div>

        {/* Controls: Filter Pills + Scroll Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "text-white/60 hover:text-white"
                  }`}
              >
                {cat === "all" ? "All" : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll("left")}
              className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-white transition-all hover:scale-105 active:scale-95"
              title="Scroll Left"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-white transition-all hover:scale-105 active:scale-95"
              title="Scroll Right"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Manual Scrollable Track */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 sm:gap-8 overflow-x-auto custom-scrollbar px-6 sm:px-12 md:px-24 pb-8 pt-4 scroll-smooth snap-x snap-mandatory"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {filteredWorks.map((work) => (
          <div
            key={work.id}
            className="group relative flex flex-col w-[85vw] sm:w-[420px] md:w-[460px] lg:w-[480px] rounded-3xl overflow-hidden bg-gradient-to-b from-zinc-900/90 via-zinc-950/90 to-black/95 border border-white/10 hover:border-blue-500/40 transition-all duration-500 snap-start shrink-0 shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 backdrop-blur-xl"
          >
            {/* Image Preview Banner */}
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900 block"
            >
              <img
                src={work.image || "/placeholder.svg"}
                alt={work.title}
                className="h-full w-full object-cover origin-center opacity-85 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent group-hover:opacity-60 transition-opacity duration-500" />

              {/* Badges row */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                <span className="text-xs font-bold tracking-widest text-white uppercase bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-lg">
                  {work.year}
                </span>
                <div className="flex items-center gap-2">
                  {work.status === "live" && (
                    <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-emerald-300 uppercase bg-emerald-500/20 border border-emerald-400/40 backdrop-blur-md px-3 py-1 rounded-full shadow-lg shadow-emerald-500/20">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                      </span>
                      Live
                    </span>
                  )}
                  <span className="text-[10px] font-bold tracking-widest text-white/80 uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 shadow-lg">
                    {work.category}
                  </span>
                </div>
              </div>

              {/* Impact overlay on hover */}
              {work.impact && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent backdrop-blur-sm p-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-start gap-2.5">
                    <TrendingUp className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-white/90 leading-relaxed font-medium">{work.impact}</p>
                  </div>
                </div>
              )}
            </a>

            {/* Info block */}
            <div className="flex flex-col flex-1 p-6 sm:p-7 justify-between">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <a href={work.url} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white hover:text-blue-400 transition-colors">
                      {work.title}
                    </h3>
                  </a>
                  <div className="flex items-center gap-2 shrink-0 mt-0.5">
                    {work.github && (
                      <a
                        href={work.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                        title="View source on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full text-white/50 hover:text-blue-400 hover:bg-blue-500/10 transition-colors"
                    >
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-white/60 leading-relaxed line-clamp-3">
                  {work.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {work.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-wider font-medium text-white/70 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 hover:border-white/20 transition-colors"
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
      <div className="px-6 sm:px-12 md:px-24 max-w-7xl mx-auto flex items-center justify-between text-xs text-white/40 pt-2">
        <span>← Scroll horizontally or use arrows to view all projects →</span>
      </div>
    </section>
  )
}