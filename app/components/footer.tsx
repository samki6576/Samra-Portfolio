"use client"

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-16 bg-[#f7f5ef] text-[#141413] border-t border-[#e6e0d4]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#e6e0d4] items-start">
          {/* Brand Colophon */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#141413] text-[#f7f5ef] font-mono text-[9px] font-bold flex items-center justify-center">
                SS
              </span>
              <span className="font-mono text-sm font-bold uppercase tracking-tight text-[#141413]">
                Samra Safdar · Folio 2026
              </span>
            </div>
            <p className="text-xs text-[#57534e] max-w-md leading-relaxed font-normal">
              Full Stack Developer &amp; Applied AI Systems Engineer. Specializing in autonomous multi-agent systems,
              distributed backend services, and high-precision web software.
            </p>
            <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-[#78716c]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Operating from Islamabad, PK (UTC+5) · Available Worldwide</span>
            </div>
          </div>

          {/* Quick Links & Repositories */}
          <div className="md:col-span-3 font-mono text-xs">
            <span className="uppercase tracking-widest text-[#78716c] block mb-3 font-semibold">
              Indexed Profiles
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/samki6576"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#44403c] hover:text-[#c2410c] transition-colors inline-flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub (@samki6576)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/samra-safdar-16833b30b"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#44403c] hover:text-[#1e3a8a] transition-colors inline-flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn (Samra Safdar)</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:samrasdra@gmail.com"
                  className="text-[#44403c] hover:text-[#c2410c] transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>samrasdra@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Colophon Metadata */}
          <div className="md:col-span-3 font-mono text-xs">
            <span className="uppercase tracking-widest text-[#78716c] block mb-3 font-semibold">
              Colophon
            </span>
            <p className="text-[11px] text-[#78716c] leading-relaxed">
              Typeset in Geist Sans &amp; Geist Mono. Crafted with Next.js 16, React 19, and Tailwind CSS. Tactile paper theme.
            </p>
            <button
              onClick={scrollToTop}
              className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#141413] hover:text-[#c2410c] transition-colors border border-[#e6e0d4] bg-[#ffffff] px-2.5 py-1 rounded"
            >
              <ArrowUp className="w-3 h-3" />
              <span>Return to top</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#78716c]">
          <p>© {new Date().getFullYear()} Samra Safdar. All rights reserved.</p>
          <p className="text-[11px]">VERIFIED FOLIO SPECIFICATION</p>
        </div>
      </div>
    </footer>
  )
}
