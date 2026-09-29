import Image from 'next/image'
import type { ElementType, ReactNode } from 'react'
import { cn, vars } from '@/lib/utils'

type Variant = 'rise' | 'blur' | 'fade' | 'track' | 'line'

/** Section/content reveal. Motion lives in globals.css; components/motion-observer.tsx triggers it. */
export function Reveal({
  as: Tag = 'div',
  variant = 'rise',
  delay,
  className,
  children,
  ...rest
}: { as?: ElementType; variant?: Variant; delay?: string; className?: string; children?: ReactNode } & Record<string, unknown>) {
  return (
    <Tag data-reveal={variant} className={className} style={delay ? vars({ '--d': delay }) : undefined} {...rest}>
      {children}
    </Tag>
  )
}

type ImageRevealProps = {
  src: string
  alt: string
  sizes: string
  className?: string
  /** Curtain direction: rises from below, or wipes from the left. */
  variant?: 'mask' | 'mask-x'
  arch?: boolean
  parallax?: boolean
  hover?: boolean
  priority?: boolean
  delay?: string
  focus?: string
}

/** Image behind a clip-path curtain that settles from a slight zoom; optional scroll parallax. */
export function ImageReveal({ src, alt, sizes, className, variant = 'mask', arch, parallax = true, hover, priority, delay, focus }: ImageRevealProps) {
  return (
    <div
      data-reveal={variant}
      className={cn('frame', arch && 'arch', hover && 'frame-hover', className)}
      style={delay ? vars({ '--d': delay }) : undefined}
    >
      <div className={parallax ? 'frame-inner' : 'absolute inset-0'} data-parallax={parallax ? '' : undefined}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" style={focus ? { objectPosition: focus } : undefined} />
      </div>
    </div>
  )
}
