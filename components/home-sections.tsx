import Link from 'next/link'
import { ABOUT } from '@/lib/content'
import { MEDIA, PRICING, PRODUCT } from '@/lib/site'
import { vars } from '@/lib/utils'
import { AnimatedHeading } from './animated-heading'
import { ContactDetails } from './contact-details'
import { Arrow, Cta } from './cta'
import { ImageReveal, Reveal } from './reveal'

/** Sets the quoted words ("Life", "Living One") in italic clay without changing the text. */
export function QuotedEmphasis({ text }: { text: string }) {
  return (
    <>
      {text.split(/("[^"]+")/).map((part, i) =>
        part.startsWith('"') ? (
          <em key={i} className="text-clay-deep">
            {part}
          </em>
        ) : (
          part
        ),
      )}
    </>
  )
}

/** Brand introduction: the meaning of Havah over an oversized drifting watermark. */
export function BrandIntro() {
  return (
    <section id="discover" className="relative isolate overflow-clip py-32 md:py-48">
      <p
        aria-hidden="true"
        data-drift=""
        style={vars({ '--dx': '-5%' })}
        className="pointer-events-none absolute left-[-3vw] top-1/2 -z-10 -translate-y-1/2 select-none font-display text-[34vw] font-light italic leading-none text-blush"
      >
        Havah
      </p>
      <div className="shell grid lg:grid-cols-12">
        <div className="lg:col-span-7 lg:col-start-5">
          <Reveal as="p" variant="track" className="eyebrow text-clay-deep">
            Eve / Havah
          </Reveal>
          <Reveal as="p" variant="blur" className="mt-8 font-display text-[clamp(2.2rem,4.6vw,4.4rem)] font-light leading-[1.08]">
            <QuotedEmphasis text={ABOUT.meaning} />
          </Reveal>
          <Reveal as="p" delay="150ms" className="mt-10 max-w-xl text-muted">
            {ABOUT.symbol}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/** Havah philosophy: arched image + the woman, the home, quality of life. */
export function Philosophy() {
  return (
    <section className="bg-blush/55 py-28 md:py-40">
      <div className="shell grid items-center gap-14 lg:grid-cols-12">
        <ImageReveal
          src="/images/hair-bathroom-woman.png"
          alt="Woman with soft, glossy hair in a warm, light-filled bathroom"
          sizes="(min-width: 1024px) 38vw, 100vw"
          className="arch aspect-[3/4] lg:col-span-5"
        />
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal as="p" variant="track" className="eyebrow text-clay-deep">
            The Havah philosophy
          </Reveal>
          <Reveal as="h2" variant="blur" className="mt-8 font-display text-[clamp(2.3rem,4.4vw,4.2rem)] font-light leading-[1.05]">
            {ABOUT.home}
          </Reveal>
          <span data-reveal="line" aria-hidden="true" className="my-10 block h-px w-24 bg-clay" />
          <Reveal as="p" delay="150ms" className="serif-lead italic text-clay-deep">
            {ABOUT.life}
          </Reveal>
          <Reveal delay="250ms" className="mt-12">
            <Link href="/about" className="link-line eyebrow">
              Learn About Eve <Arrow />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/** Water system showcase — sized for the client's product photography. */
export function SystemShowcase() {
  return (
    <section aria-labelledby="system-title" className="relative overflow-clip bg-stone/35 py-28 md:py-40">
      <div className="shell grid items-center gap-16 lg:grid-cols-12">
        <div className="relative lg:order-2 lg:col-span-6 lg:col-start-7">
          <ImageReveal
            src={MEDIA.system}
            alt="The Eve Water Center™ in a warm stone and oak kitchen"
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="aspect-[4/5]"
            focus="50% 55%"
          />
          <Reveal className="absolute -bottom-8 left-6 bg-porcelain px-7 py-6 shadow-[0_40px_60px_-40px_rgb(42_36_33/0.45)] lg:-left-12" delay="400ms">
            <p className="eyebrow text-clay-deep">Built here in Utah</p>
            <p className="mt-2 font-display text-2xl italic">Lifetime Warranty</p>
          </Reveal>
        </div>
        <div className="lg:order-1 lg:col-span-5">
          <Reveal as="p" variant="track" className="eyebrow text-clay-deep">
            The system
          </Reveal>
          <AnimatedHeading
            id="system-title"
            lines={['The Eve', 'Water Center™']}
            className="display mt-6"
            lineClassNames={[undefined, 'italic']}
          />
          <Reveal as="p" variant="blur" className="serif-lead mt-10">
            {ABOUT.deliver}
          </Reveal>
          <Reveal as="p" delay="120ms" className="mt-6 text-muted">
            {ABOUT.maker} {ABOUT.makerNote}
          </Reveal>
          <Reveal delay="220ms" className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-ink/15 pt-8">
            <p className="font-display text-2xl italic">{PRICING}</p>
            <Cta href="/contact" magnetic>
              Request Pricing
            </Cta>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/** Rotating typographic seal (decorative; restates the supplied warranty + Utah facts). */
function WarrantySeal() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className="size-36 text-clay motion-safe:animate-[spin_40s_linear_infinite] md:size-44">
      <defs>
        <path id="seal" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
      </defs>
      <text className="fill-current font-sans text-[13px] tracking-[0.34em] uppercase">
        <textPath href="#seal">Lifetime Warranty · Built in Utah · </textPath>
      </text>
      <circle cx="100" cy="100" r="46" className="fill-none stroke-current" strokeWidth="0.75" />
    </svg>
  )
}

/** Utah / built-here story + Lifetime Warranty. */
export function UtahWarranty() {
  return (
    <section className="on-dark relative overflow-clip bg-ink py-28 text-porcelain md:py-40">
      <div className="shell relative">
      <ImageReveal
        src="/images/utah-mountain-view.png"
        alt="Utah mountains framed by floor-to-ceiling windows in a stone and oak home"
        sizes="(min-width: 1472px) 1344px, 100vw"
        variant="mask-x"
        className="mb-16 aspect-[4/3] md:mb-24 md:aspect-[21/9]"
        focus="50% 55%"
      />
      <div className="grid gap-px bg-porcelain/15 md:grid-cols-2">
        <Reveal className="flex flex-col justify-between gap-16 bg-ink py-10 md:pr-14">
          <p className="eyebrow text-stone">Utah</p>
          <div>
            <p className="font-display text-[clamp(3rem,6.4vw,6rem)] font-light leading-[0.95]">
              Built here{' '}
              <br />
              <em>in Utah</em>
            </p>
            <p className="mt-8 max-w-sm text-porcelain/80">{ABOUT.makerNote}</p>
          </div>
        </Reveal>
        <Reveal delay="150ms" className="flex flex-col justify-between gap-16 bg-ink py-10 md:pl-14">
          <div className="flex items-start justify-between gap-6">
            <p className="eyebrow text-stone">{PRODUCT}</p>
            <WarrantySeal />
          </div>
          <div>
            <p className="font-display text-[clamp(3rem,6.4vw,6rem)] font-light leading-[0.95]">
              Lifetime{' '}
              <br />
              <em>Warranty</em>
            </p>
            <p className="mt-8 max-w-sm text-porcelain/80">{ABOUT.warranty}</p>
          </div>
        </Reveal>
      </div>
      </div>
    </section>
  )
}

/** Lead-generation CTA + contact preview. */
export function LeadCta() {
  return (
    <section aria-labelledby="lead-title" className="py-28 md:py-40">
      <div className="shell grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal as="p" variant="blur" className="font-display text-xl italic text-clay-deep">
            {PRICING}
          </Reveal>
          <AnimatedHeading
            id="lead-title"
            lines={['Discover your home’s', 'water experience']}
            className="display mt-6"
            lineClassNames={[undefined, 'italic']}
          />
          <Reveal as="p" delay="200ms" className="mt-8 max-w-lg text-muted">
            Share a few details about your home and a member of our team will reach out to walk you through the Eve Water Center™.
          </Reveal>
          <Reveal delay="300ms" className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Cta href="/contact" magnetic>
              Schedule a Consultation
            </Cta>
            <Link href="/eve-benefits" className="link-line eyebrow">
              Experience Better Water
            </Link>
          </Reveal>
        </div>
        <ContactDetails className="lg:col-span-4 lg:col-start-9" />
      </div>
    </section>
  )
}
