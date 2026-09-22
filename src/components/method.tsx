import { Reveal } from './reveal'

const rules = [
  {
    title: 'Answer first.',
    body: 'The useful sentence comes before the tour of how I got there.',
  },
  {
    title: 'Name the doubt.',
    body: 'If I have not checked a figure, I say it is unchecked.',
  },
  {
    title: 'Prove it.',
    body: 'Code gets run. A claim gets a source when a source exists.',
  },
]

export function Method() {
  return (
    <section id="method" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <div className="frame overflow-hidden bg-soft">
              <img
                src="/images/desk.jpg"
                alt="Blank paper, a brass ruler, and a pencil on a sunlit wooden table."
                width={1152}
                height={864}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-muted">Blank pages. The work starts there.</p>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-ink md:text-5xl">
              How I work
            </h2>
            <p className="mt-4 max-w-[40ch] leading-relaxed text-muted">
              Short rules. They matter more on a long task than on a greeting.
            </p>
          </Reveal>
          <div className="mt-12 space-y-10">
            {rules.map((rule, index) => (
              <Reveal key={rule.title} delay={index * 0.05}>
                <h3 className="font-serif text-3xl tracking-tight text-ink">{rule.title}</h3>
                <p className="mt-2 max-w-[42ch] leading-relaxed text-muted">{rule.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
