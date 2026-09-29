import Link from 'next/link'
import { ABOUT } from '@/lib/content'
import { ADDRESS_LINES, HOURS_LINES, MAP_HREF, NAV, PHONE_DISPLAY, PHONE_HREF, PRICING } from '@/lib/site'
import { vars } from '@/lib/utils'
import { AnimatedHeading } from './animated-heading'
import { Cta } from './cta'
import { OfferText } from './offer-text'
import { Wordmark } from './wordmark'

export function Footer() {
  return (
    <footer className="on-dark relative overflow-clip bg-ink text-porcelain">
      <div className="shell pt-24 md:pt-32">
        <div className="grid gap-12 border-b border-porcelain/15 pb-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Link href="/" aria-label="Havahwater — Home" className="mb-12 inline-block">
              <Wordmark className="h-32 md:h-40" />
            </Link>
            <p className="font-display text-xl italic text-blush">
              <OfferText />
            </p>
            <AnimatedHeading
              lines={['Experience', 'Better Water']}
              className="mt-6 text-[clamp(3rem,7vw,6.75rem)] font-light leading-[0.95]"
              lineClassNames={[undefined, 'italic']}
            />
          </div>
          <div className="space-y-6 lg:col-span-4 lg:justify-self-end">
            <p className="text-stone">{PRICING}</p>
            <Cta href="/contact" variant="light" magnetic>
              Request Pricing
            </Cta>
          </div>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
          <nav aria-label="Footer" className="lg:col-span-3">
            <p className="eyebrow text-stone">Explore</p>
            <ul className="mt-5 space-y-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-line is-quiet font-display text-2xl">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lg:col-span-3">
            <p className="eyebrow text-stone">Contact</p>
            <a href={PHONE_HREF} className="mt-5 block font-display text-3xl hover:text-blush">
              {PHONE_DISPLAY}
            </a>
            <a href={MAP_HREF} target="_blank" rel="noopener noreferrer" className="mt-4 block leading-relaxed text-porcelain/85 hover:text-porcelain">
              {ADDRESS_LINES[0]}{' '}
              <br />
              {ADDRESS_LINES[1]}
              <span className="sr-only"> (opens map in a new tab)</span>
            </a>
          </div>
          <div className="lg:col-span-3">
            <p className="eyebrow text-stone">Hours</p>
            <p className="mt-5 leading-relaxed text-porcelain/85">
              {HOURS_LINES.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
          </div>
          <div className="lg:col-span-3">
            <p className="eyebrow text-stone">The system</p>
            <p className="mt-5 leading-relaxed text-porcelain/85">
              {ABOUT.maker} {ABOUT.makerNote}
            </p>
          </div>
        </div>
      </div>

      <p
        aria-hidden="true"
        data-drift=""
        className="select-none whitespace-nowrap text-center font-display text-[21vw] font-light leading-[0.78] tracking-[-0.03em] text-porcelain/[0.09]"
        style={vars({ '--dx': '3%' })}
      >
        Havah<em>water</em>
      </p>
      <div className="shell flex flex-col gap-2 border-t border-porcelain/15 py-8 text-sm text-stone sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Havahwater. All rights reserved.</p>
        <p>The Eve Water Center™</p>
      </div>
    </footer>
  )
}
