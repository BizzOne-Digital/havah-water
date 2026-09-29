import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedHeading } from '@/components/animated-heading'
import { Cta } from '@/components/cta'
import { PageTransition } from '@/components/page-transition'
import { Reveal } from '@/components/reveal'
import { vars } from '@/lib/utils'

export const metadata: Metadata = { title: 'Not Found', robots: { index: false } }

export default function NotFound() {
  return (
    <PageTransition>
      <section className="on-dark relative isolate grid min-h-svh place-items-center overflow-clip bg-ink px-4 text-center text-porcelain">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          {[0, 1, 2].map((i) => (
            <span key={i} className="ripple" style={vars({ '--i': i })} />
          ))}
        </div>
        <div className="max-w-3xl pt-24">
          <Reveal as="p" variant="track" className="eyebrow text-stone">
            Error 404
          </Reveal>
          <AnimatedHeading
            as="h1"
            lines={['Not', 'Found']}
            className="mt-8 text-[clamp(4.5rem,16vw,13rem)] font-light leading-[0.85]"
            lineClassNames={[undefined, 'italic text-clay']}
          />
          <Reveal as="p" delay="400ms" className="mx-auto mt-10 max-w-md text-porcelain/80">
            This page has drifted away. Let’s bring you back to calmer water.
          </Reveal>
          <Reveal delay="550ms" className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
            <Cta href="/" variant="light" magnetic>
              Return Home
            </Cta>
            <Link href="/contact" className="link-line eyebrow">
              Contact Us
            </Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
