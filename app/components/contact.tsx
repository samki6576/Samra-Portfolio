"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { motion } from "framer-motion"

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
      <div className="relative w-full overflow-hidden flex whitespace-nowrap border-y border-white/10 py-6 mb-32">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex whitespace-nowrap items-center text-[8vw] md:text-[6vw] font-bold uppercase tracking-tighter text-transparent"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
        >
          <span>LET'S WORK TOGETHER • LET'S WORK TOGETHER • LET'S WORK TOGETHER • LET'S WORK TOGETHER • LET'S WORK TOGETHER • </span>
        </motion.div>
      </div>

      <div className="site-container px-6 md:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-24 md:gap-16">
          <div className="md:col-span-5">
            <h2 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-[0.9] mb-12">
              Got an idea? <br /><span className="text-white/30">Drop a line.</span>
            </h2>
            <p className="text-xl text-white/50 font-light max-w-sm mb-16 leading-relaxed">
              Available for freelance opportunities and exciting projects. Let's create something extraordinary together.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex gap-3 flex-wrap">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hismm8690@gmail.com" className="text-xl md:text-2xl font-light text-white hover:text-primary transition-colors break-all">
                  MAIL
                </a>
              </div>

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
                          placeholder="Tell me about your project."
                          className="w-full bg-transparent border-0 border-b border-white/20 text-3xl md:text-4xl font-light text-white placeholder:text-white/20 focus:ring-0 focus:border-white focus:outline-none transition-colors pb-4 rounded-none min-h-[150px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-sm mt-2 font-mono uppercase tracking-widest" />
                    </FormItem>
                  )}
                />
                <button
                  type="submit"
                  className="relative overflow-hidden rounded-full bg-white text-black px-16 py-6 font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-colors duration-500 outline-none w-max"
                >
                  Send Message
                </button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}
