"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { motion } from "framer-motion"
import { Linkedin, Mail, MapPin, Clock, Briefcase } from "lucide-react"

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name is required.",
  }),
  email: z.string().email({
    message: "Valid email is required.",
  }),
  message: z.string().min(10, {
    message: "Message is required.",
  }),
})

const hiringInfo = [
  {
    icon: Briefcase,
    label: "Role Type",
    value: "Full-time · Contract · Freelance",
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/25",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote · Worldwide",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/25",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Immediately Available",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/25",
  },
]

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    fetch("https://formspree.io/f/mjkwdwye", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.ok) {
          alert("Message sent successfully!")
          form.reset()
        } else {
          alert("Failed to send message.")
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error)
      })
  }

  return (
    <section className="relative overflow-hidden bg-[#050505] pt-32 pb-48">
      {/* Marquee Header */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap border-y border-white/10 py-6 mb-24">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex whitespace-nowrap items-center text-[8vw] md:text-[6vw] font-bold uppercase tracking-tighter text-transparent"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
        >
          <span>AVAILABLE FOR HIRE • OPEN TO WORK • LET&apos;S BUILD TOGETHER • AVAILABLE FOR HIRE • OPEN TO WORK • LET&apos;S BUILD TOGETHER • </span>
        </motion.div>
      </div>

      <div className="site-container px-6 md:px-24 relative z-10">

        {/* Section Title */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400">Currently Available</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-[0.9] mb-6">
            Available <br /><span className="text-white/30">for Hire.</span>
          </h2>
          <p className="text-xl text-white/50 font-light max-w-xl leading-relaxed">
            Open to full-time positions, contract roles, and freelance projects. Whether you need a feature shipped fast or an AI system built from scratch  let&apos;s talk.
          </p>
        </div>

        {/* Hiring Info Cards */}
        <div className="flex flex-wrap gap-4 mb-16">
          {hiringInfo.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-3 rounded-2xl border ${item.bg} backdrop-blur-sm px-5 py-3`}
            >
              <item.icon className={`h-4 w-4 ${item.color}`} />
              <div>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">{item.label}</p>
                <p className={`text-sm font-semibold ${item.color}`}>{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-24 md:gap-16">
          <div className="md:col-span-5">
            <div className="flex flex-col gap-5">
              <a
                href="mailto:samrasdra@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/3 hover:bg-white/6 hover:border-primary/30 transition-all duration-500 p-5"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 border border-primary/20">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">Email</p>
                  <p className="text-base font-medium text-white group-hover:text-primary transition-colors">samrasdra@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/samra-safdar-16833b30b"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/3 hover:bg-white/6 hover:border-cyan-400/30 transition-all duration-500 p-5"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500/15 border border-cyan-500/20">
                  <Linkedin className="h-4 w-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">LinkedIn</p>
                  <p className="text-base font-medium text-white group-hover:text-cyan-400 transition-colors">Samra Safdar</p>
                </div>
              </a>
            </div>
          </div>

          <div className="md:col-span-7">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-16">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <input
                          placeholder="What's your name?"
                          {...field}
                          className="w-full bg-transparent border-0 border-b border-white/20 text-3xl md:text-4xl font-light text-white placeholder:text-white/20 focus:ring-0 focus:border-white focus:outline-none transition-colors pb-4 rounded-none"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-sm mt-2 font-mono uppercase tracking-widest" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <input
                          placeholder="Your email address?"
                          {...field}
                          className="w-full bg-transparent border-0 border-b border-white/20 text-3xl md:text-4xl font-light text-white placeholder:text-white/20 focus:ring-0 focus:border-white focus:outline-none transition-colors pb-4 rounded-none"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-sm mt-2 font-mono uppercase tracking-widest" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <textarea
                          placeholder="Tell me about the role or project."
                          className="w-full bg-transparent border-0 border-b border-white/20 text-3xl md:text-4xl font-light text-white placeholder:text-white/20 focus:ring-0 focus:border-white focus:outline-none transition-colors pb-4 rounded-none min-h-[150px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-sm mt-2 font-mono uppercase tracking-widest" />
                    </FormItem>
                  )}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-500/40 to-teal-500/40 border border-emerald-400/60 text-emerald-300 font-bold py-6 px-16 uppercase tracking-[0.15em] text-sm transition-all hover:from-emerald-500/60 hover:to-teal-500/60 cursor-none view-project shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-300/30 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10">Send Message</span>
                </motion.button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}
