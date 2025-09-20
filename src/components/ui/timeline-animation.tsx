'use client'

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, ReactNode, ElementType } from "react"
import { cn } from "@/lib/utils"

interface TimelineContentProps {
  children: ReactNode
  animationNum: number
  timelineRef: React.RefObject<HTMLElement>
  customVariants?: any
  className?: string
  as?: ElementType
}

export function TimelineContent({
  children,
  animationNum,
  timelineRef,
  customVariants,
  className,
  as: Component = "div",
  ...props
}: TimelineContentProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const defaultVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const variants = customVariants || defaultVariants

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      custom={animationNum}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}