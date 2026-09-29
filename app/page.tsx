import Link from 'next/link'
import { AnimatedHeading } from '@/components/animated-heading'
import { BenefitIndex } from '@/components/benefit-index'
import { Hero } from '@/components/hero'
import { BrandIntro, LeadCta, Philosophy, SystemShowcase, UtahWarranty } from '@/components/home-sections'
import { OfferBanner } from '@/components/offer'
import { PageTransition } from '@/components/page-transition'
import { Reveal } from '@/components/reveal'
import { Testimonials } from '@/components/testimonials'

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <BrandIntro />
      <Philosophy />
      <BenefitIndex />
      <SystemShowcase />
      <UtahWarranty />
      <section aria-labelledby="stories-title" className="py-28 md:py-40">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <Reveal as="p" variant="track" className="eyebrow text-clay-deep">
                Testimonials
              </Reveal>
              <AnimatedHeading id="stories-title" lines={['In their', 'own homes']} className="display mt-6" lineClassNames={[undefined, 'italic']} />
            </div>
            <Link href="/testimonials" className="link-line eyebrow">
              All testimonials
            </Link>
          </div>
          <Testimonials className="mt-16 md:mt-20" />
        </div>
      </section>
      <OfferBanner />
      <LeadCta />
    </PageTransition>
  )
}
