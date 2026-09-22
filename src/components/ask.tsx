import { useState } from 'react'
import type { FormEvent } from 'react'
import { links } from '../lib/links'

type Status = 'idle' | 'error' | 'copy-error' | 'loading' | 'ready'

export function Ask() {
  const [question, setQuestion] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const text = question.trim()
    if (!text) {
      setStatus('error')
      return
    }
    setStatus('loading')
    try {
      await navigator.clipboard.writeText(text)
      setStatus('ready')
    } catch {
      setStatus('copy-error')
    }
  }

  const message =
    status === 'error'
      ? 'Write a question first.'
      : status === 'copy-error'
        ? 'Could not copy from this browser. Open Grok and type it there.'
        : status === 'ready'
          ? 'Copied. Paste it into Grok.'
          : 'This page does not answer. Copy puts the question on your clipboard.'

  return (
    <section id="ask" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <h2 className="max-w-[16ch] font-serif text-4xl leading-[1.1] tracking-tight text-ink md:text-6xl">
          Bring the hard question.
        </h2>
        <form onSubmit={onSubmit} className="mt-10 max-w-3xl" noValidate>
          <label htmlFor="question" className="block text-sm text-ink">
            Question
          </label>
          <textarea
            id="question"
            name="question"
            value={question}
            rows={4}
            placeholder="What should I work through?"
            aria-invalid={status === 'error' || status === 'copy-error'}
            aria-describedby="question-status"
            onChange={(event) => {
              setQuestion(event.target.value)
              if (status === 'error' || status === 'copy-error' || status === 'ready') {
                setStatus('idle')
              }
            }}
            className="mt-2 min-h-32 w-full resize-y border border-line bg-paper px-3 py-3 text-base text-ink placeholder:text-muted"
          />
          <p
            id="question-status"
            role={status === 'error' || status === 'copy-error' ? 'alert' : undefined}
            className={`mt-2 max-w-[58ch] text-sm leading-relaxed ${
              status === 'error' || status === 'copy-error' ? 'text-copper' : 'text-muted'
            }`}
          >
            {message}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex h-11 items-center bg-copper px-4 text-sm font-medium text-copper-ink transition-transform active:scale-[0.98] disabled:cursor-wait"
            >
              {status === 'loading' ? 'Copying' : 'Copy question'}
            </button>
            {status === 'ready' || status === 'copy-error' ? (
              <a
                href={links.chat}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center border border-ink px-4 text-sm font-medium text-ink transition-transform active:scale-[0.98]"
              >
                Open Grok
              </a>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  )
}
