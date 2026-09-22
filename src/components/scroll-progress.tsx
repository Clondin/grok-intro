import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react'
import { layer } from '../lib/layer'

export function ScrollProgress() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 })

  if (reduce) return null

  return (
    <motion.div
      aria-hidden
      style={{ scaleX, zIndex: layer.progress }}
      className="pointer-events-none fixed inset-x-0 top-0 h-0.5 origin-left bg-copper"
    />
  )
}
