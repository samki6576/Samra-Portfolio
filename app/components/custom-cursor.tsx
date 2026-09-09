"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return
    }

    const updateMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const updateTarget = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const clickable = target.closest("a, button, input, textarea, [role='button']")
      setIsPointer(!!clickable)
    }

    window.addEventListener("mousemove", updateMouse, { passive: true })
    window.addEventListener("mouseover", updateTarget, { passive: true })

    return () => {
      window.removeEventListener("mousemove", updateMouse)
      window.removeEventListener("mouseover", updateTarget)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <>
      {/* Center ink pinpoint */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block rounded-full bg-[#141413]"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          width: 4,
          height: 4,
          backgroundColor: isPointer ? "#c2410c" : "#141413",
        }}
        transition={{ type: "spring", stiffness: 1200, damping: 50, mass: 0.05 }}
      />

      {/* Outer drafting ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[99] hidden md:block rounded-full border border-[#141413]/30"
        animate={{
          x: mousePosition.x - (isPointer ? 18 : 12),
          y: mousePosition.y - (isPointer ? 18 : 12),
          width: isPointer ? 36 : 24,
          height: isPointer ? 36 : 24,
          borderColor: isPointer ? "rgba(194, 65, 12, 0.6)" : "rgba(20, 20, 19, 0.25)",
          backgroundColor: isPointer ? "rgba(194, 65, 12, 0.05)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 30, mass: 0.15 }}
      />
    </>
  )
}
