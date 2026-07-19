"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { appWorks } from "./projects-data"

export default function Portfolio() {
  const [selectedCategory] = useState("all")
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Smooth translation for horizontal scroll
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
              Functional digital tools built for speed and utility.
            </p>
          </div>

          {/* Horizontal Items */}
          {filteredWorks.map((work) => (
            <a
              key={work.id}
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col min-w-[80vw] sm:min-w-[60vw] md:min-w-[36vw] h-[65vh] outline-none cursor-none view-project"
            >
              {/* Image */}
              <div className="relative w-full h-[52%] overflow-hidden bg-zinc-900/50 rounded-lg">
                <motion.img
                  src={work.image || "/placeholder.svg"}
                  alt={work.title}
                  className="h-full w-full object-cover origin-center opacity-80 transition-all duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105 group-hover:opacity-100"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg"
                  }}
                />
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
                <span className="absolute top-4 right-4 text-xs font-bold tracking-widest text-white/80 uppercase bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                  {work.year}
                </span>
              </div>

              {/* Persistent info block - always visible, no hover required */}
              <div className="flex flex-col flex-1 pt-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-white">
                    {work.title}
                  </h3>
                  <ArrowUpRight className="w-6 h-6 text-white/40 shrink-0 mt-1 transition-all duration-500 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1" />
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
            </a>
          ))}

          {/* End padding block */}
          <div className="min-w-[15vw]"></div>
        </motion.div>
      </div>
    </section>
  )
}