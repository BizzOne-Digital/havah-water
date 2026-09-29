import type { Metadata } from 'next'
import { ContactDetails } from '@/components/contact-details'
import { ContactForm } from '@/components/contact-form'
import { OfferText } from '@/components/offer-text'
import { PageHero } from '@/components/page-hero'
import { PageTransition } from '@/components/page-transition'
import { Reveal } from '@/components/reveal'
import { PHONE_DISPLAY, PHONE_HREF, PRICING } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact — Request Pricing for the Eve Water Center™',
  description: `Contact for pricing. Call ${PHONE_DISPLAY} or visit 3300 N Triumph Blvd, Lehi, Utah 84043. Monday through Saturday 9am to 6pm, evenings by appointment.`,
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <PageTransition>
      <PageHero eyebrow="Contact" title={['Request', 'Pricing']} image="/images/home-dining-linens.png" alt="Sunlit home with soft linens and a dining table set with glassware" focus="55% 50%">
        <p className="font-display text-2xl italic text-porcelain/90">{PRICING}</p>
        <a href={PHONE_HREF} className="btn btn-light mt-8 md:hidden">
          Call {PHONE_DISPLAY}
        </a>
      </PageHero>

      <section className="py-24 md:py-36">
        <div className="shell grid gap-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal as="h2" variant="blur" className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-light leading-[1.05]">
              Discover your home’s <em>water experience</em>
            </Reveal>
            <Reveal as="p" delay="120ms" className="mb-14 mt-6 max-w-lg text-muted">
              Share a few details and a member of our team will reach out to schedule your consultation.
            </Reveal>
            <ContactForm />
          </div>

          <aside className="space-y-14 lg:col-span-4 lg:col-start-9" aria-label="Contact details">
            <ContactDetails />
            <Reveal className="bg-blush p-8">
              <p className="eyebrow text-clay-deep">Seasonal offer</p>
              <p className="mt-4 font-display text-3xl font-light leading-tight">
                <OfferText />
              </p>
            </Reveal>
          </aside>
        </div>
      </section>
    </PageTransition>
  )
}
