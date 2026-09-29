'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { isActive, NAV } from '@/lib/site'
import { Magnetic } from './magnetic'
import { MobileNav } from './mobile-nav'
import { OfferText } from './offer-text'
import { Wordmark } from './wordmark'

/**
 * Glass over the hero, warm porcelain once scrolled. One passive listener writes --p (0→1);
 * CSS interpolates colour, blur and surface from it, and tucks the offer ribbon away.
 */
export function SiteNav() {
  const ref = useRef<HTMLElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const update = () => {
      raf = 0
      el.style.setProperty('--p', String(Math.min(window.scrollY / 260, 1)))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <header ref={ref} className="site-header fixed inset-x-0 top-0 z-50">
      <Link
        href="/contact"
        className="ribbon flex h-9 items-center justify-center border-b border-current/15 bg-ink/25 px-4 text-center text-[0.78rem] tracking-[0.06em] backdrop-blur-md"
      >
        <span>
          <OfferText />
        </span>
      </Link>
      <div className="nav-surface">
        <nav aria-label="Primary" className="shell flex h-20 items-center justify-between gap-6">
          <Link href="/" aria-label="Havahwater — Home" className="shrink-0">
            <Wordmark priority className="h-12 md:h-[3.75rem]" />
          </Link>
          <ul className="hidden items-center gap-9 lg:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(pathname, item.href) ? 'page' : undefined}
                  className="link-line is-quiet eyebrow"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:block">
            <Magnetic>
              <Link href="/contact" className="btn btn-ghost min-h-11 px-6">
                Request Pricing
              </Link>
            </Magnetic>
          </div>
          <MobileNav />
        </nav>
      </div>
    </header>
  )
}
