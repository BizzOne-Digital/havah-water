'use client'

import { useEffect, useRef, useState } from 'react'

/** Muted ambient video with a visible pause control (WCAG 2.2.2). Paused for reduced motion. */
export function HeroVideo({ src, type, poster, focus }: { src: string; type: string; poster: string; focus: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ref.current?.pause()
      setPlaying(false)
    }
  }, [])

  const toggle = () => {
    const v = ref.current
    if (!v) return
    const play = v.paused
    if (play) v.play().catch(() => setPlaying(false))
    else v.pause()
    setPlaying(play)
  }

  return (
    <>
      <div className="hero-media absolute inset-0 -z-20">
        <video
          ref={ref}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover"
          style={{ objectPosition: focus }}
        >
          <source src={src} type={type} />
        </video>
      </div>
      <button
        type="button"
        onClick={toggle}
        className="eyebrow absolute bottom-6 left-1/2 z-10 min-h-11 -translate-x-1/2 px-3 text-porcelain/80 hover:text-porcelain"
      >
        {playing ? 'Pause film' : 'Play film'}
      </button>
    </>
  )
}
