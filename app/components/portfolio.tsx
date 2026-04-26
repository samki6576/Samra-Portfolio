"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Portfolio() {
  const [selectedCategory] = useState("all")
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Smooth translation for horizontal scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

  const works = [
    {
      id: 5,
      src: "/lol.png",
      category: "Games",
      alt: "Breakfast Blitz",
      title: "Breakfast Blitz Game",
      link: "https://breakfast-v8a1.vercel.app/",


    },
    {
      id: 1,
      title: "Habit Tracker",
      category: "Apps",
      url: "https://habit-tracker-git-main-samras-projects-c05660e5.vercel.app",
      year: "2025",
      image: "t.png",
    },
    {
      id: 2,
      title: "Zizy PDF Maker",
      category: "Apps",
      url: "https://pdfmakerzizy.netlify.app",
      year: "2025",
      image: "1.png",
    },
    {
      id: 3,
      title: "Bank App",
      category: "Apps",
      url: "https://secure-bank-git-main-samras-projects-c05660e5.vercel.app",
      year: "2025",
      image: "0.png",
    },
    {
      id: 4,
      title: "OpenClaw AI Guardian",
      category: "Apps",
      url: "https://open-claw-sigma.vercel.app/",
      year: "2025",
      image: "https://images.seeklogo.com/logo-png/66/1/openclaw-logo-png_seeklogo-665449.png?v=1971850109529183720",
    },
  ]

  const filteredWorks = works.filter((work) => (selectedCategory === "all" ? true : work.category === selectedCategory))

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
          {filteredWorks.map((work, index) => (
            <div key={work.id} className="min-w-[70vw] md:min-w-[40vw] h-[55vh] flex flex-col justify-center">
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full h-full overflow-hidden cursor-none view-project outline-none"
              >
                <div className="w-full h-full relative overflow-hidden bg-zinc-900/50 rounded-lg">
                  <motion.img
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    className="h-full w-full object-cover origin-center opacity-70 transition-all duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg"
                    }}
                  />
                  <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
                </div>

                {/* Floating Hidden Info that reveals on hover */}
                <div className="absolute top-8 right-8 overflow-hidden mix-blend-difference">
                  <span className="text-xl font-bold tracking-widest text-white translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] inline-block">
                    {work.year}
                  </span>
                </div>

                <div className="absolute bottom-10 left-10 overflow-hidden mix-blend-difference w-full pr-10">
                  <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                    {work.title}
                  </h3>
                  <div className="w-full h-[2px] bg-white mt-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-[0.16,1,0.3,1] delay-100 max-w-[80%]"></div>
                </div>
              </a>
            </div>
          ))}

          {/* End padding block */}
          <div className="min-w-[15vw]"></div>
        </motion.div>
      </div>
    </section>
  )
}
