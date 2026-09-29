'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef, useState } from 'react'
import { isActive, NAV, PHONE_DISPLAY, PHONE_HREF } from '@/lib/site'
import { vars } from '@/lib/utils'
import { Arrow } from './cta'
import { OfferText } from './offer-text'
import { Wordmark } from './wordmark'

/** Fullscreen curtain menu on a native modal <dialog>: focus trap, Esc and inert page come built in. */
export function MobileNav() {
  const ref = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const show = () => {
    ref.current?.showModal()
    setOpen(true)
  }
  const close = () => {
    const d = ref.current
    if (!d?.open) return
    setOpen(false)
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return d.close()
    const done = (e: AnimationEvent) => {
      if (e.target !== d) return
      d.removeEventListener('animationend', done)
      d.removeAttribute('data-closing')
      d.close()
    }
    d.addEventListener('animationend', done)
    d.setAttribute('data-closing', '')
  }

  return (
    <>
      <button
        type="button"
        onClick={show}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="site-menu"
        className="eyebrow -mr-2 flex min-h-11 items-center gap-3 px-2 lg:hidden"
      >
        Menu
        <span aria-hidden="true" className="flex w-6 flex-col gap-1.5">
          <span className="h-px w-full bg-current" />
          <span className="h-px w-2/3 self-end bg-current" />
        </span>
      </button>

      <dialog
        id="site-menu"
        ref={ref}
        aria-label="Site menu"
        className="menu-dialog lg:hidden"
        onCancel={(e) => {
          e.preventDefault()
          close()
        }}
      >
        <div className="shell flex h-full flex-col pb-8 pt-2">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" onClick={close} aria-label="Havahwater — Home">
              <Wordmark className="h-12" />
            </Link>
            <button type="button" onClick={close} className="eyebrow -mr-2 min-h-11 px-2" autoFocus>
              Close
            </button>
          </div>

          <ul className="mt-auto flex flex-col">
            {NAV.map((item, i) => (
              <li key={item.href} className="menu-item border-b border-ink/10" style={vars({ '--i': i })}>
                <Link
                  href={item.href}
                  onClick={close}
                  aria-current={isActive(pathname, item.href) ? 'page' : undefined}
                  className="group flex items-baseline gap-5 py-4 font-display text-[clamp(2.3rem,10vw,3.4rem)] font-light leading-none aria-[current=page]:italic"
                >
                  <span className="eyebrow w-6 text-clay-deep">0{i + 1}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="menu-item mt-10 space-y-5" style={vars({ '--i': NAV.length })}>
            <p className="font-display text-xl italic text-clay-deep">
              <OfferText />
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link href="/contact" onClick={close} className="btn btn-clay">
                Request Pricing <Arrow />
              </Link>
              <a href={PHONE_HREF} className="link-line text-sm tracking-wide">
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}
