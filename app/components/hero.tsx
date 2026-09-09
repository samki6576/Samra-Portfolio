"use client"

import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Terminal, Cpu, Database, Layers } from "lucide-react"

const stats = [
  { value: "15+", label: "Production Deployments", desc: "Live apps & tools with real users" },
  { value: "LangGraph", label: "Multi-Agent AI", desc: "Autonomous migration & RAG pipelines" },
  { value: "Full-Stack", label: "Backend to Interface", desc: "FastAPI, Kafka, Next.js, Node.js" },
  { value: "Immediate", label: "Availability", desc: "Remote worldwide · UTC+5 flexible" },
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

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-[#e6e0d4]">
      {/* Editorial Watermark Background */}
      <div className="absolute top-12 right-6 md:right-16 text-[18vw] font-mono font-bold text-[#141413]/[0.03] select-none pointer-events-none tracking-tighter leading-none">
        2026
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Top Dateline / Spec Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 border-b border-[#e6e0d4] text-xs font-mono text-[#78716c]"
        >
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-sm bg-[#c2410c]" />
            <span className="uppercase tracking-widest text-[#44403c] font-semibold">
              Specification Sheet · Folio No. 01
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px] tracking-wider uppercase">
            <span>Role: Full Stack &amp; AI Systems</span>
            <span className="hidden sm:inline text-[#d4ccbe]">|</span>
            <span className="hidden sm:inline">Status: Open for Contract &amp; Full-Time</span>
          </div>
        </motion.div>

        {/* Main Title & Editorial Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#141413] leading-[1.05] uppercase">
              Samra Safdar
              <span className="text-[#c2410c]">.</span>
            </h1>

            <p className="mt-4 text-xl sm:text-2xl font-normal text-[#44403c] tracking-tight">
              Full Stack Developer &amp; Applied AI Systems Engineer
            </p>

            <p className="mt-6 text-base sm:text-lg text-[#57534e] leading-relaxed max-w-2xl font-normal">
              Architecting resilient distributed backends, autonomous multi-agent pipelines with LangGraph,
              and tactile, high-performance web applications. Focused on engineering production-grade software
              that solves intricate domain challenges.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => scrollTo("work")}
                className="inline-flex items-center gap-2 bg-[#141413] hover:bg-[#2e2a25] text-[#f7f5ef] px-6 py-3.5 rounded text-xs font-mono font-semibold uppercase tracking-wider transition-all shadow-sm group"
              >
                <span>Examine Systems</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#c2410c] group-hover:translate-y-0.5 transition-transform" />
              </button>

              <a
                href="https://github.com/samki6576"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#ffffff] hover:bg-[#faf8f3] text-[#141413] border border-[#e6e0d4] hover:border-[#141413]/40 px-5 py-3.5 rounded text-xs font-mono font-medium uppercase tracking-wider transition-all shadow-sm group"
              >
                <Github className="w-3.5 h-3.5 text-[#57534e] group-hover:text-[#141413]" />
                <span>GitHub Repos</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#a8a29e] group-hover:text-[#141413] transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/samra-safdar-16833b30b"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#ffffff] hover:bg-[#faf8f3] text-[#141413] border border-[#e6e0d4] hover:border-[#141413]/40 px-5 py-3.5 rounded text-xs font-mono font-medium uppercase tracking-wider transition-all shadow-sm group"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#1e3a8a] group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#a8a29e] group-hover:text-[#141413] transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Right: Technical Stamp & Core Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="bg-[#ffffff] border border-[#e6e0d4] rounded p-6 shadow-sm relative">
              {/* Stamp aesthetic badge */}
              <div className="absolute -top-3 right-4 bg-[#f7f5ef] border border-[#d8cfc0] text-[#c2410c] px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest font-bold">
                VERIFIED ARCHIVE
              </div>

              <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-[#e6e0d4]">
                <Terminal className="w-4 h-4 text-[#141413]" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#141413]">
                  Technical Dossier Summary
                </h3>
              </div>

              <div className="space-y-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="font-mono text-base font-bold text-[#141413] tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#78716c]">
                      {stat.label}
                    </span>
                    <span className="text-xs text-[#57534e] mt-0.5">
                      {stat.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stack Stamp Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-6 border-t border-[#e6e0d4]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#78716c] shrink-0 font-medium">
              Core Architecture Stack:
            </span>
            <div className="flex flex-wrap gap-2">
              {stackPills.map((pill) => (
                <span
                  key={pill}
                  className="bg-[#ffffff] border border-[#e6e0d4] hover:border-[#b8aea0] text-[#44403c] text-[11px] font-mono px-2.5 py-1 rounded transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
