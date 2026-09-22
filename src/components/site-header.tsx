import { useEffect, useState } from 'react'
import { List, Moon, Sun, X } from '@phosphor-icons/react'
import { layer } from '../lib/layer'
import { links } from '../lib/links'
import { useTheme } from '../lib/theme'

const nav = [
  { href: '#work', label: 'Work' },
  { href: '#method', label: 'Method' },
  { href: '#access', label: 'Access' },
]

export function SiteHeader() {
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const dark = theme === 'dark'

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      style={{ zIndex: layer.header }}
      className="sticky top-0 border-b border-line bg-paper"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-5 md:px-8">
        <a href="#top" className="font-serif text-xl tracking-tight text-ink">
          Grok
        </a>
        <nav className="hidden items-center gap-6 text-sm text-ink md:flex" aria-label="Page">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:underline hover:underline-offset-4">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-pressed={dark}
            aria-label={dark ? 'Use light theme' : 'Use dark theme'}
            className="inline-flex size-10 items-center justify-center border border-line text-ink transition-transform active:scale-[0.98]"
          >
            {dark ? <Sun size={18} weight="regular" /> : <Moon size={18} weight="regular" />}
          </button>
          <a
            href={links.chat}
            target="_blank"
            rel="noreferrer"
            className="hidden h-10 items-center bg-copper px-4 text-sm font-medium text-copper-ink transition-transform active:scale-[0.98] md:inline-flex"
          >
            Open Grok
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center border border-line text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <List size={18} />}
          </button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-line px-5 py-4 md:hidden" aria-label="Page">
          <ul className="flex flex-col gap-4 text-lg">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={links.chat} target="_blank" rel="noreferrer" className="text-copper">
                Open Grok
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
