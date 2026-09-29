import type { Metadata } from 'next'
import { AnimatedHeading } from '@/components/animated-heading'
import { Cta } from '@/components/cta'
import { LeadCta } from '@/components/home-sections'
import { PageHero } from '@/components/page-hero'
import { PageTransition } from '@/components/page-transition'
import { Reveal } from '@/components/reveal'
import { Testimonials } from '@/components/testimonials'

export const metadata: Metadata = {
  title: 'Testimonials — Eve Water Center™ Homes in Utah',
  description: 'Stories from Utah homeowners living with the Eve Water Center™.',
  alternates: { canonical: '/testimonials' },
}

export default function TestimonialsPage() {
  return (
    <PageTransition>
      <PageHero eyebrow="Testimonials" title={['In their', 'own homes']} image="/images/woman-window-glass.png" alt="Woman holding a glass of water by a window with a Utah mountain view" focus="68% 35%" />
      <section className="py-28 md:py-40">
        <div className="shell">
          <Testimonials limit={5} />
          <div className="mt-24 grid gap-10 border-t border-ink/15 pt-14 lg:grid-cols-12 lg:items-end">
            <AnimatedHeading
              lines={['Living with', 'Eve Water?']}
              className="font-display text-[clamp(2.4rem,4.6vw,4.4rem)] font-light leading-none lg:col-span-7"
              lineClassNames={[undefined, 'italic']}
            />
            <Reveal className="space-y-6 lg:col-span-4 lg:col-start-9">
              <p className="text-muted">We would love to hear how the Eve Water Center™ has changed your home.</p>
              <Cta href="/contact">Share Your Story</Cta>
            </Reveal>
          </div>
        </div>
      </section>
      <LeadCta />
    </PageTransition>
  )
}
