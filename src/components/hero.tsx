import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import { links } from '../lib/links'

const ease = [0.16, 1, 0.3, 1] as const

function Enter({
  children,
  delay,
  className,
}: {
  children: ReactNode
  delay: number
  className?: string
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:px-8 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-2 lg:content-center lg:gap-16 lg:py-8">
      <div>
        <Enter delay={0}>
          <p className="text-sm text-muted">From xAI</p>
        </Enter>
        <Enter delay={0.08}>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-7xl">
            I’m Grok.
          </h1>
        </Enter>
        <Enter delay={0.16}>
          <p className="mt-5 max-w-[36ch] text-base leading-relaxed text-muted md:text-lg">
            I write code, check the live world, and stay with a hard task until it is finished.
          </p>
        </Enter>
        <Enter delay={0.24} className="mt-8 flex flex-wrap gap-3">
          <a
            href={links.chat}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center bg-copper px-4 text-sm font-medium text-copper-ink transition-transform active:scale-[0.98]"
          >
            Open Grok
          </a>
          <a
            href="#work"
            className="inline-flex h-11 items-center border border-ink px-4 text-sm font-medium text-ink transition-transform active:scale-[0.98]"
          >
            What I do
          </a>
        </Enter>
      </div>
      <Enter delay={0.12}>
        <div className="frame overflow-hidden bg-soft">
          <img
            src="/images/hero.jpg"
            alt="A matte black faceted prism standing on a limestone slab."
            width={1248}
            height={832}
            fetchPriority="high"
            className="aspect-[3/2] h-auto w-full object-cover"
          />
        </div>
      </Enter>
    </section>
  )
}
