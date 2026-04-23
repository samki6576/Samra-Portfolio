"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isViewProject, setIsViewProject] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return
    }
    setIsVisible(true)

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      const isProject = target.closest(".view-project")
      if (isProject) {
        setIsViewProject(true)
        setIsHovering(true)
        return
      } else {
        setIsViewProject(false)
      }

      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "input" ||
        target.tagName.toLowerCase() === "textarea" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", handleMouseOver)

    document.body.style.cursor = 'none'
    const style = document.createElement('style')
    style.innerHTML = `* { cursor: none !important; }`
    document.head.appendChild(style)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", handleMouseOver)
      document.body.style.cursor = 'auto'
      if(document.head.contains(style)) document.head.removeChild(style)
    }
  }, [])

  if (!isVisible) return null

  let size = 16
  if (isHovering) size = 48
  if (isViewProject) size = 100

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] mix-blend-difference hidden md:flex items-center justify-center rounded-full bg-white text-black font-bold tracking-widest text-xs overflow-hidden"
        animate={{
          x: mousePosition.x - size / 2,
          y: mousePosition.y - size / 2,
          width: size,
          height: size,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.5 }}
      >
        <AnimatePresence>
          {isViewProject && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute"
            >
              VIEW
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
