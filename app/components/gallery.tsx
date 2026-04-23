"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Gallery() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Smooth translation for the horizontal scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"])

  const images = [
    {
      src: "/7.png",
      alt: "Art piece 1",
      title: "Ecommerce-Website",
      link: "https://elegance-ecommerce-website-git-f3c38a-samras-projects-c05660e5.vercel.app",
    },
    {
      src: "/lol.png",
      alt: "Breakfast Blitz",
      title: "Breakfast Blitz Game",
      link: "https://breakfast-v8a1.vercel.app/",
    },

    {
      src: "/8.png",
      alt: "Art piece 2",
      title: "Ocean-Explorer",
      link: "https://ocean-explorer-git-main-samras-projects-c05660e5.vercel.app",
    },
    {
      src: "/6.png",
      alt: "Art piece 3",
      title: "Blog-Website",
      link: "https://blog-space-git-main-samras-projects-c05660e5.vercel.app",
    },
    {
      src: "/9.png",
      alt: "Art piece 4",
      title: "Golden Crust",
      link: "https://bakery-git-main-samras-projects-c05660e5.vercel.app",
    },
    {
      src: "/5.png",
      alt: "Art piece 5",
      title: "Space 3D",
      link: "https://3-d-space-explorer-git-main-samras-projects-c05660e5.vercel.app",
    },
    {
      src: "/a.png",
      alt: "Bella Vista Pizzeria",
      title: "Bella Vista",
      link: "https://bella-vista-pizzeria-git-main-samras-projects-c05660e5.vercel.app",
    },]


  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#050505]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex w-max gap-16 px-12 md:px-32">

          {/* Title Section */}
          <div className="min-w-[70vw] md:min-w-[40vw] flex flex-col justify-center pr-20">
            <h2 className="text-[10vw] leading-[0.85] font-bold uppercase tracking-tighter text-white mix-blend-difference">
              Selected<br /><span className="text-primary/90">Works</span>
            </h2>
            <p className="mt-8 text-xl text-white/50 max-w-sm uppercase tracking-widest leading-relaxed">
              A collection of e-commerce platforms, immersive 3D experiences, and creative web solutions.
            </p>
          </div>

          {/* Horizontal Items */}
          {images.map((image, index) => (
            <div key={index} className="min-w-[85vw] md:min-w-[50vw] h-[60vh] sm:h-[70vh] flex flex-col justify-center">
              <a
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full h-full overflow-hidden cursor-none view-project outline-none"
              >
                <div className="w-full h-full relative overflow-hidden bg-zinc-900">
                  <motion.img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="h-full w-full object-cover origin-center opacity-80 transition-all duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105 group-hover:opacity-100"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg"
                    }}
                  />
                  {/* Subtle Dark Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                </div>

                {/* Floating Hidden Title that reveals on hover */}
                <div className="absolute bottom-10 left-10 overflow-hidden mix-blend-difference">
                  <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                    {image.title}
                  </h3>
                </div>
                {/* Index Number */}
                <div className="absolute top-10 left-10 mix-blend-difference">
                  <span className="text-2xl font-light text-white/70">
                    0{index + 1}
                  </span>
                </div>
              </a>
            </div>
          ))}

          {/* End padding block */}
          <div className="min-w-[10vw]"></div>
        </motion.div>
      </div>
    </section>
  )
}
