"use client"

import { motion } from "framer-motion"
import { Cpu, Network, Layout, Server, Check, Clock, Globe, Shield, Terminal } from "lucide-react"

const engineeringPillars = [
  {
    icon: Cpu,
    category: "01 // SYSTEM LOGIC",
    title: "Applied AI & Agent Pipelines",
    desc: "Orchestrating autonomous multi-agent systems via LangGraph. Designing context-grounded RAG architectures with ChromaDB, tool-use decision loops, and high-throughput inference using Groq LLaMA-3.1.",
    technologies: ["LangGraph", "Groq (LLaMA-3.1)", "ChromaDB", "RAG Pipelines", "Tool Calling"],
  },
  {
    icon: Network,
    category: "02 // DISTRIBUTED DATA",
    title: "Backends & Stream Ingestion",
    desc: "Building low-latency REST and streaming APIs with FastAPI and Node.js. Ingesting distributed real-time telemetry through Apache Kafka, time-series analysis with TimescaleDB, and WebSockets.",
    technologies: ["FastAPI", "Python", "Node.js", "Apache Kafka", "WebSockets", "MongoDB"],
  },
  {
    icon: Layout,
    category: "03 // USER INTERFACE",
    title: "Interface Craft & Rendering",
    desc: "Developing tactile, accessible, and high-performance client architectures with Next.js 16, React 19, and TypeScript. Crafting custom design systems, Three.js spatial interactions, and sub-second load times.",
    technologies: ["Next.js (App Router)", "React 19", "TypeScript", "Three.js", "Tailwind CSS"],
  },
  {
    icon: Server,
    category: "04 // INFRASTRUCTURE",
    title: "Containerization & Reliability",
    desc: "Packaging reproducible microservices with Docker. Managing decoupled asynchronous task execution via RabbitMQ, automated deployment workflows across Render and Vercel, and continuous integration.",
    technologies: ["Docker", "RabbitMQ", "Render", "Vercel", "Git & CI/CD", "Linux"],
  },
]

const technicalSkills = [
  {
    domain: "Languages & Runtimes",
    skills: ["Python 3", "TypeScript", "JavaScript (ES6+)", "Node.js", "HTML5 / Canvas", "GLSL / Shaders"],
  },
  {
    domain: "Frameworks & AI",
    skills: ["LangGraph", "FastAPI", "Next.js", "React 19", "Express.js", "scikit-learn"],
  },
  {
    domain: "Databases & Storage",
    skills: ["ChromaDB", "TimescaleDB", "PostgreSQL", "MongoDB", "Redis", "Vector Embeddings"],
  },
  {
    domain: "DevOps & Tooling",
    skills: ["Docker", "Apache Kafka", "RabbitMQ", "Vercel / Netlify", "Render", "Figma"],
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 border-b border-[#e6e0d4] bg-[#f7f5ef]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-[#e6e0d4]"
        >
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#78716c] uppercase tracking-widest">
              <span className="w-2 h-2 rounded-sm bg-[#c2410c]" />
              <span>Section 03 · Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] uppercase">
              Engineering Pillars
            </h2>
          </div>
          <p className="text-sm text-[#57534e] max-w-md font-normal leading-relaxed">
            The architectural principles and technical proficiencies underpinning every production deployment.
          </p>
        </motion.div>

        {/* 4 Architectural Pillars with Staggered Fade & Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {engineeringPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="bg-[#ffffff] border border-[#e6e0d4] hover:border-[#141413] rounded p-6 sm:p-8 shadow-sm hover:shadow-[0_16px_32px_-8px_rgba(28,25,23,0.1)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e6e0d4] text-[11px] font-mono text-[#78716c]">
                  <span>{pillar.category}</span>
                  <pillar.icon className="w-4 h-4 text-[#c2410c] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#141413] group-hover:text-[#c2410c] transition-colors mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed mb-6 font-normal">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#e6e0d4]">
                <div className="flex flex-wrap gap-1.5">
                  {pillar.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#f7f5ef] border border-[#e6e0d4] text-[#44403c] text-[10px] font-mono px-2 py-0.5 rounded transition-colors group-hover:border-[#d4ccbe]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Operational Engagement Ledger */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#ffffff] border border-[#e6e0d4] rounded p-6 sm:p-8 shadow-sm mb-16"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-[#e6e0d4]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#141413]">
              <Terminal className="w-4 h-4 text-[#c2410c]" />
              <span>Operational Engagement Parameters</span>
            </div>
            <span className="text-[11px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              READY FOR IMMEDIATE ONBOARDING
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#78716c] mb-1">Contract / Role</p>
              <p className="font-semibold text-[#141413]">Full-Time · Technical Contract · Freelance</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#78716c] mb-1">Geography</p>
              <p className="font-semibold text-[#141413]">Remote Worldwide · Global Teams</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#78716c] mb-1">Timezone Overlap</p>
              <p className="font-semibold text-[#141413]">PKT (UTC+5) · Flexible for US &amp; EU</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#78716c] mb-1">Notice Period</p>
              <p className="font-semibold text-[#141413]">Immediate Availability</p>
            </div>
          </div>
        </motion.div>

        {/* Complete Technical Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-mono text-xs uppercase tracking-widest text-[#78716c] mb-6 font-bold">
            Comprehensive Skill &amp; Technology Index
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {technicalSkills.map((group, gi) => (
              <motion.div
                key={group.domain}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="bg-[#ffffff] border border-[#e6e0d4] hover:border-[#141413] rounded p-5 shadow-sm transition-colors"
              >
                <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-[#141413] pb-2 mb-3 border-b border-[#e6e0d4]">
                  {group.domain}
                </h4>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-xs font-mono text-[#57534e]">
                      <span className="w-1 h-1 rounded-full bg-[#c2410c]" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
