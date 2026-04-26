"use client"

import React, { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"

export default function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring physics for smooth tilt return
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    // Calculate rotation percentage (-0.5 to 0.5)
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: useMotionTemplate`calc(${mouseYSpring} * -15deg)`,
        rotateY: useMotionTemplate`calc(${mouseXSpring} * 15deg)`,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <div 
        style={{ 
          transform: "translateZ(30px)", 
          width: "100%", 
          height: "100%", 
          transformStyle: "preserve-3d" 
        }}
      >
        {children}
      </div>
    </motion.div>
  )
}
