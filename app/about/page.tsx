import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedHeading } from '@/components/animated-heading'
import { Arrow } from '@/components/cta'
import { LeadCta, QuotedEmphasis, UtahWarranty } from '@/components/home-sections'
import { PageHero } from '@/components/page-hero'
import { PageTransition } from '@/components/page-transition'
import { ImageReveal, Reveal } from '@/components/reveal'
import { ABOUT } from '@/lib/content'
import { MEDIA } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About Us — Havah, Eve & the Eve Water Center™',
  description:
    'Havah is the Hebrew translation for Eve, meaning "Life" or "Living One". The Eve Water Center™ is exclusively built and distributed by Clear Water Solutions, built here in Utah with a Lifetime Warranty.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHero eyebrow="Our story" title={['About', 'Us']} image="/images/utah-mountain-view.png" alt="Utah mountains seen through floor-to-ceiling windows" focus="50% 45%" />

      {/* The supplied About paragraph, set in reading order across an editorial spread. */}
      <section className="py-28 md:py-44">
        <div className="shell">
          <AnimatedHeading
            lines={[ABOUT.title]}
            className="text-[clamp(2.6rem,7vw,7rem)] font-light leading-[0.95] tracking-[-0.01em]"
          />
          <div className="mt-16 grid gap-14 md:mt-24 lg:grid-cols-12">
            <Reveal as="p" variant="blur" className="font-display text-[clamp(2rem,3.8vw,3.6rem)] font-light leading-[1.1] lg:col-span-8">
              <QuotedEmphasis text={ABOUT.meaning} />
            </Reveal>
            <Reveal as="p" delay="150ms" className="max-w-md text-muted lg:col-span-4 lg:self-end">
              {ABOUT.symbol}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-blush/55 py-28 md:py-40">
        <div className="shell grid items-center gap-14 lg:grid-cols-12">
          <ImageReveal
            src="/images/hair-bathroom-woman.png"
            alt="Woman with soft, glossy hair in a warm, light-filled bathroom"
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="arch aspect-[3/4] lg:col-span-5"
            focus="55% 40%"
          />
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal as="p" variant="blur" className="font-display text-[clamp(2.2rem,4.2vw,4rem)] font-light leading-[1.05]">
              {ABOUT.home}
            </Reveal>
            <span data-reveal="line" aria-hidden="true" className="my-10 block h-px w-24 bg-clay" />
            <Reveal as="p" delay="150ms" className="serif-lead italic text-clay-deep">
              {ABOUT.life}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-40">
        <div className="shell grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal as="p" variant="blur" className="serif-lead">
              {ABOUT.deliver}
            </Reveal>
            <Reveal as="p" delay="120ms" className="mt-8 text-muted">
              {ABOUT.maker}
            </Reveal>
            <Reveal as="p" delay="200ms" className="mt-3 font-display text-xl italic text-clay-deep">
              {ABOUT.makerNote}
            </Reveal>
          </div>
          <ImageReveal
            src={MEDIA.system}
            alt="The Eve Water Center™ in a warm stone and oak kitchen"
            sizes="(min-width: 1024px) 45vw, 100vw"
            variant="mask-x"
            className="aspect-[4/5] lg:col-span-6 lg:col-start-7"
          />
        </div>
      </section>

      <UtahWarranty />

      <section className="py-24 md:py-32">
        <div className="shell">
          <Link href="/eve-benefits" className="group flex flex-wrap items-end justify-between gap-6 border-y border-ink/15 py-12">
            <em className="font-display text-[clamp(2rem,4.4vw,4rem)] font-light leading-[1.05] transition-[translate] duration-700 ease-soft group-hover:translate-x-3">
              {ABOUT.link}
            </em>
            <Arrow className="size-8 transition-[translate] duration-500 ease-soft group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>

      <LeadCta />
    </PageTransition>
  )
}
