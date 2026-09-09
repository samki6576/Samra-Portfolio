"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Terminal, Sparkles } from "lucide-react"

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1400
    const stepTime = 16
    const totalSteps = duration / stepTime
    const increment = target / totalSteps
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { target: 15, suffix: "+", label: "Production Deployments", desc: "Live apps & tools with active users" },
  { isText: true, text: "LangGraph", label: "Multi-Agent AI", desc: "Autonomous migration & RAG pipelines" },
  { isText: true, text: "Full-Stack", label: "Backend to Interface", desc: "FastAPI, Kafka, Next.js, Node.js" },
  { isText: true, text: "Immediate", label: "Availability", desc: "Remote worldwide · UTC+5 flexible" },
]

const stackPills = [
  "Python / FastAPI",
  "LangGraph & Groq",
  "Next.js 16 & React 19",
  "TypeScript",
  "Apache Kafka",
  "Docker",
  "ChromaDB (RAG)",
  "Tailwind CSS",
  "PostgreSQL / MongoDB",
]

const tickerItems = [
  "LANGGRAPH MULTI-AGENT SYSTEMS",
  "APACHE KAFKA TELEMETRY",
  "FASTAPI REST & STREAMING",
  "NEXT.JS 16 APP ROUTER",
  "CHROMADB VECTOR SEARCH",
  "DOCKER REPRODUCIBLE BUILDS",
  "TIMESCALE TIME-SERIES",
  "WEBSOCKET REAL-TIME FEEDS",
]

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-[#e6e0d4]">
      {/* Editorial Watermark Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-12 right-6 md:right-16 text-[18vw] font-mono font-bold text-[#141413]/[0.03] select-none pointer-events-none tracking-tighter leading-none"
      >
        2026
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Top Dateline / Spec Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-[#e6e0d4] text-xs font-mono text-[#78716c]"
        >
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-2 h-2 rounded-sm bg-[#c2410c] animate-pulse" />
            <span className="uppercase tracking-widest text-[#44403c] font-semibold">
              Specification Sheet · Folio No. 01
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px] tracking-wider uppercase">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Role: Full Stack &amp; AI Systems
            </span>
            <span className="hidden sm:inline text-[#d4ccbe]">|</span>
            <span className="hidden sm:inline">Status: Open for Contract &amp; Full-Time</span>
          </div>
        </motion.div>

        {/* Main Title & Editorial Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            {/* Title with Masking Reveal */}
            <div className="overflow-hidden pb-1">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#141413] leading-[1.05] uppercase"
              >
                Samra Safdar
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="text-[#c2410c] inline-block"
                >
                  .
                </motion.span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-xl sm:text-2xl font-normal text-[#44403c] tracking-tight"
            >
              Full Stack Developer &amp; Applied AI Systems Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-base sm:text-lg text-[#57534e] leading-relaxed max-w-2xl font-normal"
            >
              Architecting resilient distributed backends, autonomous multi-agent pipelines with LangGraph,
              and tactile, high-performance web applications. Focused on engineering production-grade software
              that solves intricate domain challenges.
            </motion.p>

            {/* Action Buttons with Spring Micro-Hover */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <motion.button
                onClick={() => scrollTo("work")}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-[#141413] hover:bg-[#2e2a25] text-[#f7f5ef] px-6 py-3.5 rounded text-xs font-mono font-semibold uppercase tracking-wider transition-colors shadow-sm group"
              >
                <span>Examine Systems</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#c2410c] group-hover:translate-y-1 transition-transform" />
              </motion.button>

              <motion.a
                href="https://github.com/samki6576"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-[#ffffff] hover:bg-[#faf8f3] text-[#141413] border border-[#e6e0d4] hover:border-[#141413] px-5 py-3.5 rounded text-xs font-mono font-medium uppercase tracking-wider transition-colors shadow-sm group"
              >
                <Github className="w-3.5 h-3.5 text-[#57534e] group-hover:text-[#141413]" />
                <span>GitHub Repos</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#a8a29e] group-hover:text-[#141413] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/samra-safdar-16833b30b"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-[#ffffff] hover:bg-[#faf8f3] text-[#141413] border border-[#e6e0d4] hover:border-[#141413] px-5 py-3.5 rounded text-xs font-mono font-medium uppercase tracking-wider transition-colors shadow-sm group"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#1e3a8a]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#a8a29e] group-hover:text-[#141413] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Technical Stamp Card with Physical Stamp Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <div className="bg-[#ffffff] border border-[#e6e0d4] rounded p-6 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.06)] relative group hover:shadow-[0_8px_30px_-4px_rgba(28,25,23,0.1)] transition-shadow duration-300">
              {/* Animated physical ink stamp */}
              <motion.div
                initial={{ scale: 1.6, opacity: 0, rotate: -8 }}
                animate={{ scale: 1, opacity: 1, rotate: 2 }}
                transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 350, damping: 20 }}
                className="absolute -top-3.5 right-4 bg-[#f7f5ef] border-2 border-[#c2410c] text-[#c2410c] px-3 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest font-bold shadow-sm select-none"
              >
                VERIFIED ARCHIVE
              </motion.div>

              <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-[#e6e0d4]">
                <Terminal className="w-4 h-4 text-[#141413]" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#141413]">
                  Technical Dossier Summary
                </h3>
              </div>

              <div className="space-y-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    className="flex flex-col"
                  >
                    <span className="font-mono text-base font-bold text-[#141413] tracking-tight">
                      {stat.isText ? (
                        stat.text
                      ) : (
                        <Counter target={stat.target || 0} suffix={stat.suffix} />
                      )}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#78716c]">
                      {stat.label}
                    </span>
                    <span className="text-xs text-[#57534e] mt-0.5">
                      {stat.desc}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stack Stamp Bar with Micro-Hovers */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-6 border-t border-[#e6e0d4]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#78716c] shrink-0 font-medium">
              Core Architecture Stack:
            </span>
            <div className="flex flex-wrap gap-2">
              {stackPills.map((pill, idx) => (
                <motion.span
                  key={pill}
                  whileHover={{ y: -2, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="bg-[#ffffff] border border-[#e6e0d4] hover:border-[#141413] text-[#44403c] hover:text-[#141413] text-[11px] font-mono px-2.5 py-1 rounded transition-colors cursor-default shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                >
                  {pill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Luxury Slow Infinite Broadsheet Ticker */}
      <div className="mt-14 py-3 border-y border-[#e6e0d4] bg-[#faf8f3] overflow-hidden whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
          className="inline-flex gap-8 items-center text-[11px] font-mono tracking-[0.25em] uppercase text-[#78716c]"
        >
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <span key={idx} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c2410c]/60" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
