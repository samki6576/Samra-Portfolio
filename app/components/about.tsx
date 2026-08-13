"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Zap, Globe, Brain, Code2 } from "lucide-react"

const skillCategories = [
  {
    label: "Frontend",
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    accent: "text-blue-400",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    label: "Backend",
    color: "from-violet-500/20 to-purple-500/20 border-violet-500/30",
    accent: "text-violet-400",
    skills: ["Node.js", "Express", "Python", "MongoDB", "REST APIs", "WebSockets"],
  },
  {
    label: "AI / Cloud",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    accent: "text-emerald-400",
    skills: ["LangGraph", "Groq (Llama-3.1)", "ChromaDB", "Docker", "RabbitMQ", "AI API Integration"],
  },
  {
    label: "Tools & Deploy",
    color: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
    accent: "text-amber-400",
    skills: ["Git & GitHub", "Vercel", "Netlify", "Render", "Figma", "Socket.IO"],
  },
]

const valueProps = [
  { icon: Zap, title: "Fast Delivery", desc: "Ship polished, production-ready products quickly without cutting corners." },
  { icon: Code2, title: "Clean Code", desc: "Structured, maintainable codebases that teams can build on confidently." },
  { icon: Brain, title: "AI Integration", desc: "Hands-on experience embedding LLMs and multi-agent systems into real apps." },
  { icon: Globe, title: "Full-Stack Coverage", desc: "End-to-end ownership from UI design to cloud deployment." },
]

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1500
    const step = 16
    const totalSteps = duration / step
    const increment = target / totalSteps
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function About() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="relative bg-[#070710] py-32 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-700/10 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-700/10 filter blur-[100px] pointer-events-none" />

      <div className="relative z-10 px-6 sm:px-12 md:px-24 max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-primary/60 mb-4">About Me</p>
          <h2 className="text-[8vw] sm:text-[5vw] font-bold uppercase tracking-tighter leading-[0.9] text-white">
            Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">Am</span>
          </h2>
        </motion.div>

        {/* Bio + Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-xl text-white/70 leading-relaxed mb-8 font-light">
              I&apos;m a <span className="text-white font-medium">Full Stack Developer & AI Engineer</span> who builds
              things that actually ship — from sleek e-commerce platforms and social networks to multi-agent AI systems
              that automate real workflows.
            </p>
            <p className="text-xl text-white/70 leading-relaxed font-light">
              I care deeply about clean architecture, fast delivery, and creating experiences that feel{" "}
              <span className="text-primary font-medium">effortlessly good</span>. I&apos;m ready to bring the same
              energy to a team that ships and iterates fast.
            </p>

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 rounded-2xl border border-emerald-500/25 bg-emerald-500/8 backdrop-blur-sm p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">Currently Available</span>
              </div>
              <div className="grid grid-cols-2 gap-y-3 gap-x-8 text-sm">
                <div>
                  <p className="text-white/40 uppercase text-[10px] tracking-widest mb-0.5">Role Type</p>
                  <p className="text-white/80 font-medium">Full-time · Contract · Freelance</p>
                </div>
                <div>
                  <p className="text-white/40 uppercase text-[10px] tracking-widest mb-0.5">Location</p>
                  <p className="text-white/80 font-medium">Remote · Worldwide</p>
                </div>
                <div>
                  <p className="text-white/40 uppercase text-[10px] tracking-widest mb-0.5">Notice Period</p>
                  <p className="text-white/80 font-medium">Immediately Available</p>
                </div>
                <div>
                  <p className="text-white/40 uppercase text-[10px] tracking-widest mb-0.5">Timezone</p>
                  <p className="text-white/80 font-medium">PKT (UTC+5) · Flexible</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Value props */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {valueProps.map((prop, i) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="group rounded-2xl border border-white/8 bg-white/3 hover:bg-white/6 hover:border-primary/30 transition-all duration-500 p-6 backdrop-blur-sm"
              >
                <prop.icon className="h-6 w-6 text-primary/70 mb-4 group-hover:text-primary transition-colors" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">{prop.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{prop.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Animated Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          {[
            { target: 15, suffix: "+", label: "Projects Shipped", color: "text-violet-400" },
            { target: 8, suffix: "+", label: "Tech Stacks Mastered", color: "text-blue-400" },
            { target: 70, suffix: "%", label: "Migration Time Saved (AI)", color: "text-emerald-400" },
            { target: 100, suffix: "%", label: "Remote Ready", color: "text-amber-400" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 hover:border-white/40 p-8 backdrop-blur-lg text-center transition-all shadow-lg hover:shadow-2xl cursor-none view-project overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
              <p className={`text-5xl md:text-6xl font-bold tracking-tight mb-3 ${stat.color} relative z-10`}>
                <Counter target={stat.target} suffix={stat.suffix} />
              </p>
              <p className="text-[11px] text-white/50 uppercase tracking-widest leading-tight relative z-10">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-primary/60 mb-8">Technical Skills</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + ci * 0.1 }}
                className={`rounded-2xl border bg-gradient-to-br backdrop-blur-sm p-6 ${cat.color}`}
              >
                <p className={`text-xs font-bold uppercase tracking-[0.25em] mb-5 ${cat.accent}`}>{cat.label}</p>
                <div className="flex flex-col gap-2.5">
                  {cat.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className={`w-1 h-1 rounded-full bg-current ${cat.accent}`} />
                      <span className="text-sm text-white/75 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
