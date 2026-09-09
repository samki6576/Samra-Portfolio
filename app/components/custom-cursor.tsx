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
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block rounded-full border border-[#141413]/40 bg-[#141413]/5 backdrop-blur-[0.5px]"
      animate={{
        x: mousePosition.x - (isPointer ? 16 : 6),
        y: mousePosition.y - (isPointer ? 16 : 6),
        width: isPointer ? 32 : 12,
        height: isPointer ? 32 : 12,
        borderColor: isPointer ? "rgba(194, 65, 12, 0.6)" : "rgba(20, 20, 19, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 600, damping: 35, mass: 0.1 }}
    />
  )
}
