import Image from 'next/image'
import type { ReactNode } from 'react'
import { AnimatedHeading } from './animated-heading'
import { Reveal } from './reveal'

type Props = { eyebrow: string; title: readonly string[]; image: string; alt: string; focus?: string; children?: ReactNode }

/** Inner-page opener: same cinematic language as the home hero, shorter. */
export function PageHero({ eyebrow, title, image, alt, focus = '50% 50%', children }: Props) {
  return (
    <section className="on-dark relative isolate flex min-h-[78svh] items-end overflow-clip text-porcelain">
      <div className="hero-media absolute inset-0 -z-20">
        <Image src={image} alt={alt} fill priority sizes="100vw" quality={75} className="object-cover" style={{ objectPosition: focus }} />
      </div>
      <div aria-hidden="true" className="hero-wash absolute inset-0 -z-10" />
      <div className="shell pb-16 pt-48 md:pb-20">
        <Reveal as="p" variant="track" delay="var(--intro)" className="eyebrow text-porcelain/85">
          {eyebrow}
        </Reveal>
        <AnimatedHeading
          as="h1"
          lines={title}
          delay="calc(var(--intro) + 120ms)"
          className="mt-6 text-[clamp(3.2rem,9vw,8.75rem)] font-light leading-[0.92] tracking-[-0.015em]"
          lineClassNames={[undefined, 'italic']}
        />
        {children && (
          <Reveal delay="calc(var(--intro) + 700ms)" className="mt-10 max-w-xl">
            {children}
          </Reveal>
        )}
      </div>
    </section>
  )
}
