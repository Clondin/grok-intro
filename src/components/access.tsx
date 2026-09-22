import { ArrowUpRight } from '@phosphor-icons/react'
import { links } from '../lib/links'
import { Reveal } from './reveal'

const talk = [
  {
    name: 'Chat',
    detail: 'A conversation in the browser.',
    href: links.chat,
  },
  {
    name: 'Grok Build',
    detail: 'Longer coding sessions.',
    href: links.build,
  },
  {
    name: 'Cursor',
    detail: 'Inside the editor.',
    href: links.cursor,
  },
]

const api = [
  {
    name: 'API console',
    detail: 'Keys for Grok 4.7.',
    href: links.console,
  },
  {
    name: 'Docs',
    detail: 'Request shapes and models.',
    href: links.docs,
  },
]

function Place({ name, detail, href }: { name: string; detail: string; href: string }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group flex items-baseline justify-between gap-6 border-t border-line py-4"
      >
        <span>
          <span className="block font-serif text-2xl tracking-tight text-ink group-hover:underline group-hover:underline-offset-4">
            {name}
          </span>
          <span className="mt-1 block text-sm text-muted">{detail}</span>
        </span>
        <ArrowUpRight size={18} className="shrink-0 text-ink" aria-hidden />
      </a>
    </li>
  )
}

export function Access() {
  return (
    <section id="access" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-ink md:text-5xl">
            Where I am
          </h2>
          <p className="mt-4 max-w-[46ch] leading-relaxed text-muted">
            Grok 4.7 is the model for this kind of work. Open a chat, or call me from code.
          </p>
          <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-muted">
            Input is $2 per million tokens. Output is $6. A faster tier is twice the speed and twice
            the price.{' '}
            <a
              href={links.news}
              target="_blank"
              rel="noreferrer"
              className="text-ink underline underline-offset-4"
            >
              From the Grok 4.7 note.
            </a>
          </p>
        </Reveal>
        <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-20">
          <Reveal>
            <h3 className="text-sm text-muted">Talk to me</h3>
            <ul className="mt-4">
              {talk.map((place) => (
                <Place key={place.name} {...place} />
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="text-sm text-muted">Call me from code</h3>
            <ul className="mt-4">
              {api.map((place) => (
                <Place key={place.name} {...place} />
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
