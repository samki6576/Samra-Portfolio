"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16 text-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
      <div className="site-container relative z-10">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <p className="text-sm text-muted-foreground font-medium">
            © {new Date().getFullYear()} Samra Safdar. All rights reserved.
          </p>
          <div className="flex gap-8">
            <motion.a
              href="https://www.linkedin.com/in/samra-safdar-16833b30b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/samki6576"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}
