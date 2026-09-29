'use client'

import { useEffect, useRef, type ReactNode } from 'react'

/** Pulls its child gently toward the cursor. Fine pointers only; off for reduced motion. */
export function Magnetic({ children, strength = 0.28 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return
    let raf = 0
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left - r.width / 2) * strength
      const y = (e.clientY - r.top - r.height / 2) * strength
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => (el.style.translate = `${x}px ${y}px`))
    }
    const leave = () => {
      cancelAnimationFrame(raf)
      el.style.translate = ''
    }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', leave)
    }
  }, [strength])

  return (
    <span ref={ref} className="inline-flex transition-[translate] duration-700 ease-soft">
      {children}
    </span>
  )
}
