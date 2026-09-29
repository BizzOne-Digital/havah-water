import { PHONE_DISPLAY, PHONE_HREF, PRICING } from '@/lib/site'
import { AnimatedHeading } from './animated-heading'
import { Cta } from './cta'
import { OFFER_A, OFFER_B } from './offer-text'
import { Reveal } from './reveal'

/** Immersive seasonal campaign — the site's main promotional moment. No timers, no expiry. */
export function OfferBanner() {
  return (
    <section aria-labelledby="offer-title" className="relative isolate overflow-clip bg-blush py-28 md:py-40">
      <p
        aria-hidden="true"
        data-drift=""
        className="pointer-events-none absolute -bottom-[7vw] -right-[3vw] -z-10 select-none font-display text-[32vw] italic leading-none text-porcelain/70"
      >
        Fall
      </p>
      <div className="shell grid items-end gap-14 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal as="p" variant="track" className="eyebrow text-clay-deep">
            A seasonal invitation
          </Reveal>
          <AnimatedHeading
            id="offer-title"
            lines={[OFFER_A, `+ ${OFFER_B}`]}
            className="mt-8 font-display text-[clamp(2.8rem,6.4vw,6.4rem)] font-light leading-[0.98]"
            lineClassNames={[undefined, 'italic']}
            renderWord={(w) => (w === '+' ? <span className="text-clay">+</span> : w)}
          />
        </div>
        <Reveal className="space-y-8 lg:col-span-4 lg:pb-3" delay="300ms">
          <p className="font-display text-2xl italic">{PRICING}</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
            <Cta href="/contact" variant="clay" magnetic>
              Schedule a Consultation
            </Cta>
            <a href={PHONE_HREF} className="link-line text-sm tracking-wide">
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
