import Image from 'next/image'
import Link from 'next/link'
import { BENEFITS_TITLE, CHAPTERS } from '@/lib/content'
import { AnimatedHeading } from './animated-heading'
import { Arrow, Cta } from './cta'
import { Reveal } from './reveal'

/** Home-page Benefit Section: the four chapters as an editorial index with hover image reveals. */
export function BenefitIndex() {
  return (
    <section aria-labelledby="benefits-title" className="py-28 md:py-40">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <div>
            <Reveal as="p" variant="track" className="eyebrow text-clay-deep">
              Four chapters
            </Reveal>
            <AnimatedHeading id="benefits-title" lines={[BENEFITS_TITLE]} className="display mt-6" />
          </div>
          <Cta href="/eve-benefits" variant="solid">
            Discover Eve
          </Cta>
        </div>

        <ol className="mt-16 border-t border-ink/15 md:mt-24">
          {CHAPTERS.map((c, i) => (
            <Reveal as="li" key={c.id} delay={`${i * 90}ms`} className="border-b border-ink/15">
              <Link
                href={`/eve-benefits#${c.id}`}
                className="group grid grid-cols-[3rem_1fr_auto] items-center gap-x-5 gap-y-3 py-9 md:grid-cols-[5rem_minmax(0,1.1fr)_minmax(0,1fr)_11rem_auto] md:gap-x-8 md:py-11"
              >
                <span className="font-display text-2xl italic text-clay-deep">{c.numeral}</span>
                <span className="font-display text-[clamp(2rem,4.6vw,4.2rem)] font-light leading-none transition-[translate] duration-700 ease-soft group-hover:translate-x-3">
                  {c.title}
                </span>
                <span className="col-span-full col-start-2 text-[0.95rem] text-muted md:col-span-1 md:col-start-auto">{c.lead}</span>
                <span className="frame relative hidden aspect-[4/3] w-44 [clip-path:inset(0_0_0_100%)] transition-[clip-path] duration-700 ease-silk group-hover:[clip-path:inset(0)] group-focus-visible:[clip-path:inset(0)] md:block">
                  <Image src={c.image} alt="" fill sizes="176px" className="object-cover" />
                </span>
                <Arrow className="col-start-3 row-start-1 size-5 transition-[translate] duration-500 ease-soft group-hover:-translate-y-1 group-hover:translate-x-1 md:col-start-auto md:row-start-auto" />
              </Link>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
