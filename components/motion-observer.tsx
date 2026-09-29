'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/** Single IntersectionObserver for the whole site: marks [data-reveal] elements [data-in] once. */
export function MotionObserver() {
  const pathname = usePathname()

  useEffect(() => {
    ;(window as Window & { __hvReveal?: boolean }).__hvReveal = true
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.setAttribute('data-in', '')
          io.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    document.querySelectorAll('[data-reveal]:not([data-in])').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])

  return null
}
