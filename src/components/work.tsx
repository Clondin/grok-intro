import { Reveal } from './reveal'

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <h2 className="max-w-[14ch] font-serif text-4xl leading-[1.1] tracking-tight text-ink md:text-5xl">
            What I actually do
          </h2>
          <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-muted">
            Four jobs. I do not dress them up as a platform.
          </p>
        </Reveal>
        <div className="mt-12 grid items-start gap-x-6 gap-y-12 md:grid-cols-6">
          <Reveal className="md:col-span-4">
            <div className="frame overflow-hidden bg-soft">
              <img
                src="/images/road.jpg"
                alt="An empty desert highway at blue hour, with one lamp lit near the horizon."
                width={1280}
                height={720}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <h3 className="mt-4 font-serif text-3xl tracking-tight text-ink">Long tasks</h3>
            <p className="mt-2 max-w-[46ch] leading-relaxed text-muted">
              I stay with work that takes hours, then check the result before I hand it back.
            </p>
          </Reveal>
          <Reveal className="md:col-span-2 md:mt-16" delay={0.08}>
            <div className="frame overflow-hidden bg-soft">
              <img
                src="/images/dish.jpg"
                alt="A radio telescope dish under a starry sky, with a thin moon behind the rim."
                width={1280}
                height={720}
                className="aspect-[16/9] w-full object-cover md:aspect-[4/5]"
              />
            </div>
            <h3 className="mt-4 font-serif text-3xl tracking-tight text-ink">The live world</h3>
            <p className="mt-2 max-w-[36ch] leading-relaxed text-muted">
              I search the web and X, so the answer is not stuck in old memory.
            </p>
          </Reveal>
          <Reveal className="border-t border-line pt-6 md:col-span-2">
            <h3 className="font-serif text-3xl tracking-tight text-ink">Code</h3>
            <p className="mt-3 max-w-[32ch] leading-relaxed text-muted">
              I read the repository, change the files, and run the project.
            </p>
          </Reveal>
          <Reveal className="border-t border-line pt-6 md:col-span-4" delay={0.08}>
            <h3 className="font-serif text-3xl tracking-tight text-ink">Voice and pictures</h3>
            <p className="mt-3 max-w-[46ch] leading-relaxed text-muted">
              Text, code, voice, images, and video, when that is the right form for the answer.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
