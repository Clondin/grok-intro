import { links } from '../lib/links'

const items = [
  { href: links.home, label: 'x.ai' },
  { href: links.news, label: 'Grok 4.7' },
  { href: links.company, label: 'Company' },
  { href: links.docs, label: 'Docs' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-ink">Grok, by xAI</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Elsewhere">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-ink hover:underline hover:underline-offset-4"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
