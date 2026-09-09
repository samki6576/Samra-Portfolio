"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Linkedin, Github, Check, Copy, Send, ShieldCheck } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "Valid email is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const copyEmail = () => {
    navigator.clipboard.writeText("samrasdra@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    setStatus("submitting")
    fetch("https://formspree.io/f/mjkwdwye", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.ok) {
          setStatus("success")
          form.reset()
        } else {
          setStatus("error")
        }
      })
      .catch(() => {
        setStatus("error")
      })
  }

  return (
    <section id="contact" className="py-24 border-b border-[#e6e0d4] bg-[#fbf9f6]">
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
              <span>Section 04 · Direct Correspondence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] uppercase">
              Initiate Inquiry
            </h2>
          </div>
          <p className="text-sm text-[#57534e] max-w-md font-normal leading-relaxed">
            Open for full-time engineering roles, technical contract consultations, and high-impact software systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Communication Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#ffffff] border border-[#e6e0d4] rounded p-6 sm:p-7 shadow-sm">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#78716c] block mb-2 font-semibold">
                Direct Electronic Mail
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href="mailto:samrasdra@gmail.com"
                  className="font-mono text-sm sm:text-base font-bold text-[#141413] hover:text-[#c2410c] transition-colors break-all"
                >
                  samrasdra@gmail.com
                </a>
                <motion.button
                  onClick={copyEmail}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 border border-[#e6e0d4] hover:border-[#141413] rounded text-[#57534e] hover:text-[#141413] transition-all shrink-0 bg-[#f7f5ef] relative"
                  title="Copy email to clipboard"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span
                        key="check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="flex items-center text-emerald-700"
                      >
                        <Check className="w-4 h-4" />
                      </motion.span>
                    ) : (
                      <motion.span key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Copy className="w-4 h-4" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
              {copied && (
                <motion.p
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[11px] font-mono text-emerald-700 mt-2"
                >
                  ✓ Address copied to clipboard
                </motion.p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.a
                href="https://www.linkedin.com/in/samra-safdar-16833b30b"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.01 }}
                className="bg-[#ffffff] border border-[#e6e0d4] hover:border-[#141413] rounded p-5 shadow-sm transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-[#78716c] mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider">Professional Profile</span>
                  <Linkedin className="w-4 h-4 text-[#1e3a8a] group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold text-[#141413] uppercase">LinkedIn</h4>
                  <p className="text-xs text-[#57534e] mt-0.5">Samra Safdar</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/samki6576"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.01 }}
                className="bg-[#ffffff] border border-[#e6e0d4] hover:border-[#141413] rounded p-5 shadow-sm transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-[#78716c] mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider">Code Repositories</span>
                  <Github className="w-4 h-4 text-[#141413] group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold text-[#141413] uppercase">GitHub</h4>
                  <p className="text-xs text-[#57534e] mt-0.5">@samki6576</p>
                </div>
              </motion.a>
            </div>

            <div className="bg-[#ffffff] border border-[#e6e0d4] rounded p-6 shadow-sm space-y-3.5 text-xs text-[#57534e]">
              <div className="flex items-center gap-2.5 font-mono text-xs font-semibold text-[#141413] pb-2 border-b border-[#e6e0d4]">
                <ShieldCheck className="w-4 h-4 text-[#c2410c]" />
                <span>Response &amp; Collaboration Guarantee</span>
              </div>
              <p className="leading-relaxed">
                Direct inquiries receive a response within 24 business hours. Prepared to sign mutual NDAs for proprietary architectures or early-stage technical prototypes.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Tactile Dispatch Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-[#ffffff] border border-[#e6e0d4] rounded-lg p-6 sm:p-10 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#e6e0d4]">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#141413]">
                  Transmission Console · Message Slip
                </span>
                <span className="font-mono text-[10px] uppercase text-[#78716c]">
                  [STATUS: READY]
                </span>
              </div>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-mono text-base font-bold text-[#141413] uppercase">
                    Transmission Dispatched
                  </h4>
                  <p className="text-xs text-[#57534e] mt-2 max-w-sm mx-auto">
                    Your correspondence has been received. I will review your requirements and respond promptly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 font-mono text-xs text-[#c2410c] hover:underline uppercase"
                  >
                    Send another dispatch
                  </button>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <label className="font-mono text-[11px] uppercase tracking-wider text-[#44403c] block mb-1">
                            Your Name / Organization
                          </label>
                          <FormControl>
                            <input
                              placeholder="e.g. Alex Chen (Horizon AI Labs)"
                              {...field}
                              className="w-full bg-[#f7f5ef] border border-[#e6e0d4] focus:border-[#141413] focus:bg-[#ffffff] focus:outline-none text-sm text-[#141413] placeholder:text-[#a8a29e] p-3 rounded font-mono transition-colors"
                            />
                          </FormControl>
                          <FormMessage className="text-red-600 text-xs font-mono" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <label className="font-mono text-[11px] uppercase tracking-wider text-[#44403c] block mb-1">
                            Return Email Address
                          </label>
                          <FormControl>
                            <input
                              type="email"
                              placeholder="e.g. alex@horizonlabs.ai"
                              {...field}
                              className="w-full bg-[#f7f5ef] border border-[#e6e0d4] focus:border-[#141413] focus:bg-[#ffffff] focus:outline-none text-sm text-[#141413] placeholder:text-[#a8a29e] p-3 rounded font-mono transition-colors"
                            />
                          </FormControl>
                          <FormMessage className="text-red-600 text-xs font-mono" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <label className="font-mono text-[11px] uppercase tracking-wider text-[#44403c] block mb-1">
                            Project Scope / Inquiry Details
                          </label>
                          <FormControl>
                            <textarea
                              placeholder="Provide an overview of the system, role, or technical challenge you are seeking to address..."
                              rows={5}
                              {...field}
                              className="w-full bg-[#f7f5ef] border border-[#e6e0d4] focus:border-[#141413] focus:bg-[#ffffff] focus:outline-none text-sm text-[#141413] placeholder:text-[#a8a29e] p-3 rounded font-mono transition-colors resize-none"
                            />
                          </FormControl>
                          <FormMessage className="text-red-600 text-xs font-mono" />
                        </FormItem>
                      )}
                    />

                    <motion.button
                      type="submit"
                      disabled={status === "submitting"}
                      whileHover={{ scale: 1.01, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#141413] hover:bg-[#2d2925] disabled:opacity-50 text-[#f7f5ef] py-3.5 px-6 rounded font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm group"
                    >
                      <Send className="w-3.5 h-3.5 text-[#c2410c] group-hover:translate-x-1 transition-transform" />
                      <span>{status === "submitting" ? "Transmitting..." : "Dispatch Message Slip"}</span>
                    </motion.button>

                    {status === "error" && (
                      <p className="text-center text-xs font-mono text-red-600 mt-2">
                        Transmission failed. Please reach out directly to samrasdra@gmail.com.
                      </p>
                    )}
                  </form>
                </Form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
