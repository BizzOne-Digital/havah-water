'use client'

import { useEffect, useRef, useState, type ReactNode, type SyntheticEvent } from 'react'
import { CONTACT_METHODS } from '@/lib/lead'
import { OFFER, PHONE_DISPLAY, PHONE_HREF, PRICING } from '@/lib/site'
import { Arrow } from './cta'

type Status = { state: 'idle' | 'sending' | 'sent' } | { state: 'error'; message: string }

const METHOD_LABEL: Record<(typeof CONTACT_METHODS)[number], string> = { email: 'Email', phone: 'Phone call', text: 'Text message' }

function Field({ id, label, error, optional, children }: { id: string; label: string; error?: string; optional?: boolean; children: ReactNode }) {
  return (
    <div className="field">
      <label htmlFor={id} className="eyebrow flex justify-between text-muted">
        {label}
        {optional && <span className="normal-case tracking-normal">Optional</span>}
      </label>
      <div className="field-control">{children}</div>
      {error && (
        <p id={`${id}-error`} className="field-error">
          {error}
        </p>
      )}
    </div>
  )
}

/** Keep aria-invalid in step with the visual :user-invalid state (errors only after interaction). */
function syncInvalid(e: SyntheticEvent) {
  const el = e.target as HTMLElement
  if (!el.matches?.('input, textarea')) return
  if (el.matches(':user-invalid')) el.setAttribute('aria-invalid', 'true')
  else el.removeAttribute('aria-invalid')
}

/** Lead form → POST /api/contact. Real states only: sending, sent, or an honest error with a phone fallback. */
export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: 'idle' })
  const [preferred, setPreferred] = useState<(typeof CONTACT_METHODS)[number]>('email')
  const doneRef = useRef<HTMLHeadingElement>(null)
  const sending = status.state === 'sending'

  useEffect(() => {
    if (status.state === 'sent') doneRef.current?.focus()
  }, [status.state])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus({ state: 'sending' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      form.reset()
      setStatus({ state: 'sent' })
    } catch (err) {
      setStatus({ state: 'error', message: err instanceof Error ? err.message : 'Something went wrong.' })
    }
  }

  if (status.state === 'sent') {
    return (
      <div role="status" className="border-t border-ink/15 pt-12">
        <p className="eyebrow text-clay-deep">Request received</p>
        <h3 ref={doneRef} tabIndex={-1} className="mt-6 font-display text-[clamp(2.4rem,4vw,3.6rem)] font-light leading-none outline-none">
          Thank you.
        </h3>
        <p className="mt-6 max-w-md text-muted">
          Your request is with our team. We’ll reach out by your preferred contact method. Prefer to talk now? Call{' '}
          <a href={PHONE_HREF} className="link-line text-ink">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
        <p className="mt-10 font-display text-xl italic text-clay-deep">{OFFER}</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} onBlur={syncInvalid} onInput={syncInvalid} className="space-y-9" aria-describedby="form-note">
      <div className="grid gap-9 sm:grid-cols-2">
        <Field id="name" label="Name" error="Please share your name.">
          <input id="name" name="name" autoComplete="name" required maxLength={120} aria-describedby="name-error" placeholder="Your full name" />
        </Field>
        <Field id="email" label="Email" error="Please enter a valid email, like you@example.com.">
          <input id="email" name="email" type="email" autoComplete="email" required maxLength={200} aria-describedby="email-error" placeholder="you@example.com" />
        </Field>
        <Field id="phone" label="Phone" optional={preferred === 'email'} error="Please add a phone number so we can reach you that way.">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required={preferred !== 'email'}
            pattern="[\d\s\(\)\+\.\-]{10,}"
            maxLength={40}
            aria-describedby="phone-error"
            placeholder="(801) 555-0100"
          />
        </Field>
        <Field id="address" label="Home address" optional>
          <input id="address" name="address" autoComplete="street-address" maxLength={240} placeholder="Street, city" />
        </Field>
      </div>

      <fieldset>
        <legend className="eyebrow text-muted">Preferred contact method</legend>
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
          {CONTACT_METHODS.map((m) => (
            <label key={m} className="choice flex min-h-11 cursor-pointer items-center gap-3">
              <input type="radio" name="preferred" value={m} checked={preferred === m} onChange={() => setPreferred(m)} />
              <span className="font-display text-xl">{METHOD_LABEL[m]}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <Field id="message" label="Tell us about your home" optional>
        <textarea id="message" name="message" rows={4} maxLength={4000} placeholder="What would you love to change about your water?" />
      </Field>

      {/* Honeypot: hidden from people and assistive tech, bots fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status.state === 'error' && (
        <div role="alert" className="border-l-2 border-clay-deep bg-clay/10 px-5 py-4">
          <p className="font-medium text-clay-deep">{status.message}</p>
          <p className="mt-1 text-sm text-muted">
            Please call{' '}
            <a href={PHONE_HREF} className="link-line text-ink">
              {PHONE_DISPLAY}
            </a>{' '}
            and we’ll gladly help directly.
          </p>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-2">
        <button type="submit" className="btn btn-clay min-w-56" disabled={sending} aria-disabled={sending}>
          {sending ? (
            <span className="flex w-32 flex-col items-center gap-2">
              Sending
              <span className="sending-line w-full" aria-hidden="true" />
            </span>
          ) : (
            <>
              Request Pricing <Arrow />
            </>
          )}
        </button>
        <p id="form-note" className="text-sm text-muted">
          {PRICING}
        </p>
      </div>
      <p className="sr-only" aria-live="polite">
        {sending ? 'Sending your request' : ''}
      </p>
    </form>
  )
}
