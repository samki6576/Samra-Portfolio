"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, Github, ExternalLink, TrendingUp } from "lucide-react"
import { appWorks } from "./projects-data"

export default function Portfolio() {
  const [selectedCategory] = useState("all")
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

  const filteredWorks = appWorks.filter((work) =>
    selectedCategory === "all" ? true : work.category === selectedCategory
  )

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#020202]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex w-max gap-16 px-12 md:px-32">

          {/* Title Section */}
          <div className="min-w-[70vw] md:min-w-[40vw] flex flex-col justify-center pr-20">
            <h2 className="text-[10vw] leading-[0.85] font-bold uppercase tracking-tighter text-white mix-blend-difference">
              Web<br /><span className="text-blue-500/90">Apps</span>
            </h2>
            <p className="mt-8 text-xl text-white/50 max-w-sm uppercase tracking-widest leading-relaxed">
              Production-grade tools built for real users.
            </p>
          </div>

          {/* Horizontal Items */}
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className="group relative flex flex-col min-w-[80vw] sm:min-w-[60vw] md:min-w-[36vw] h-[65vh]"
            >
              {/* Image */}
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full h-[52%] overflow-hidden bg-zinc-900/50 rounded-lg block cursor-none view-project"
              >
                <motion.img
                  src={work.image || "/placeholder.svg"}
                  alt={work.title}
                  className="h-full w-full object-cover origin-center opacity-80 transition-all duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105 group-hover:opacity-100"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg"
                  }}
                />
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />

                {/* Badges row */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-white/80 uppercase bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                    {work.year}
                  </span>
                  <div className="flex items-center gap-2">
                    {work.status === "live" && (
                      <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                        </span>
                        Live
                      </span>
                    )}
                    <span className="text-[10px] font-bold tracking-widest text-white/60 uppercase bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                      {work.category}
                    </span>
                  </div>
                </div>

                {/* Impact overlay on hover */}
                {work.impact && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-white/90 leading-relaxed">{work.impact}</p>
                    </div>
                  </div>
                )}
              </a>

              {/* Info block */}
              <div className="flex flex-col flex-1 pt-6">
                <div className="flex items-start justify-between gap-4">
                  <a href={work.url} target="_blank" rel="noopener noreferrer" className="cursor-none view-project">
                    <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-white hover:text-primary transition-colors">
                      {work.title}
                    </h3>
                  </a>
                  <div className="flex items-center gap-2 shrink-0 mt-1">
                    {work.github && (
                      <a
                        href={work.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-none view-project text-white/30 hover:text-white transition-colors"
                        title="View source"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-none view-project"
                    >
                      <ArrowUpRight className="w-6 h-6 text-white/40 transition-all duration-500 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>
                </div>

                <p className="mt-3 text-sm md:text-base text-white/60 leading-relaxed max-w-md">
                  {work.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {work.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] uppercase tracking-wider font-semibold text-white/70 border border-white/15 rounded-full px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="w-full h-px bg-white/10 mt-auto pt-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
              </div>
            </div>
          ))}

          {/* End padding block */}
          <div className="min-w-[15vw]"></div>
        </motion.div>
      </div>
    </section>
  )
}