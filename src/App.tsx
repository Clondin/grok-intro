import { Access } from './components/access'
import { Ask } from './components/ask'
import { Hero } from './components/hero'
import { Method } from './components/method'
import { ScrollProgress } from './components/scroll-progress'
import { SiteFooter } from './components/site-footer'
import { SiteHeader } from './components/site-header'
import { Work } from './components/work'

export default function App() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-copper focus:px-3 focus:py-2 focus:text-copper-ink"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <SiteHeader />
      <main>
        <Hero />
        <Work />
        <Method />
        <Access />
        <Ask />
      </main>
      <SiteFooter />
    </>
  )
}
