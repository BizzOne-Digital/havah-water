import { BEAUTY, HEALTH, HOME, SAVINGS } from '@/lib/content'
import { cn, vars } from '@/lib/utils'
import { ImageReveal, Reveal } from './reveal'

/** Shared chapter mark: roman numeral, drawn rule, split-scale title ("EVE" small, category large). */
function ChapterTitle({ numeral, title, id, className }: { numeral: string; title: string; id: string; className?: string }) {
  const [eve, ...rest] = title.split(' ')
  return (
    <div className={className}>
      <div className="flex items-center gap-5">
        <span className="font-display text-3xl italic text-clay">{numeral}</span>
        <span data-reveal="line" className="h-px w-16 bg-current opacity-40" aria-hidden="true" />
      </div>
      <h2 id={id} className="mt-8">
        <Reveal as="span" variant="track" className="eyebrow block">
          {eve}
        </Reveal>{' '}
        <Reveal as="span" variant="blur" delay="120ms" className="mt-2 block text-[clamp(3.2rem,8vw,7.5rem)] font-light leading-[0.9] tracking-[0.02em]">
          {rest.join(' ')}
        </Reveal>
      </h2>
    </div>
  )
}

/** I — Beauty: blush, arched bath imagery, a beauty-editorial pull question. */
export function BeautyChapter() {
  return (
    <section id={BEAUTY.id} aria-labelledby="beauty-title" className="relative isolate overflow-clip bg-blush py-28 md:py-40">
      <p aria-hidden="true" data-drift="" className="pointer-events-none absolute -right-[4vw] top-8 -z-10 select-none font-display text-[26vw] italic leading-none text-porcelain/60">
        Beauty
      </p>
      <div className="shell grid items-end gap-14 lg:grid-cols-12 lg:gap-10">
        <ImageReveal
          src="/images/hero-water.png"
          alt="Stone soaking tub filling with clear water beneath an arched window"
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="arch aspect-[3/4] lg:col-span-5"
          focus="38% 50%"
        />
        <div className="lg:col-span-6 lg:col-start-7">
          <ChapterTitle numeral="I" title={BEAUTY.title} id="beauty-title" />
          <Reveal as="p" variant="blur" className="serif-lead mt-12 max-w-xl">
            {BEAUTY.lead}
          </Reveal>
          <Reveal as="p" delay="120ms" className="mt-6 max-w-xl text-muted">
            {BEAUTY.body.join(' ')}
          </Reveal>
          <Reveal as="p" delay="240ms" className="mt-12 max-w-lg border-l border-clay pl-6 font-display text-[clamp(1.6rem,2.6vw,2.4rem)] italic leading-tight text-clay-deep">
            {BEAUTY.close}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/** II — Health: the founder statement set as a full-width quotation, then the drinking-water story. */
export function HealthChapter() {
  return (
    <section id={HEALTH.id} aria-labelledby="health-title" className="py-28 md:py-44">
      <div className="shell">
        <ChapterTitle numeral="II" title={HEALTH.title} id="health-title" />
        <figure className="mt-20 max-w-6xl md:mt-28">
          <blockquote>
            <Reveal
              as="p"
              variant="blur"
              className="font-display text-[clamp(2.7rem,7.2vw,7.25rem)] font-light italic leading-[0.96] tracking-[-0.01em] first-letter:text-clay md:-indent-[0.42em]"
            >
              {HEALTH.quote}
            </Reveal>
          </blockquote>
          <Reveal as="figcaption" delay="200ms" className="mt-10 flex items-center gap-5 text-sm tracking-[0.08em] text-muted">
            <span aria-hidden="true" className="h-px w-12 bg-clay" />
            {HEALTH.attribution}
          </Reveal>
        </figure>

        <div className="mt-24 grid items-center gap-14 md:mt-32 lg:grid-cols-12">
          <ImageReveal
            src="/images/water-pour-glass.png"
            alt="Clear water pouring into a glass on a stone counter"
            sizes="(min-width: 1024px) 45vw, 100vw"
            variant="mask-x"
            className="aspect-[4/5] lg:order-2 lg:col-span-6 lg:col-start-7"
          />
          <div className="lg:col-span-5">
            <Reveal as="p" variant="blur" className="font-display text-[clamp(2.6rem,5.4vw,5rem)] font-light leading-[1]">
              {HEALTH.lead}
            </Reveal>
            <Reveal as="p" delay="150ms" className="mt-10 max-w-md text-muted">
              {HEALTH.body.join(' ')}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/** III — Home: stone, architectural ledger lines, the well-kept home. */
export function HomeChapter() {
  return (
    <section id={HOME.id} aria-labelledby="home-title" className="bg-stone/35 py-28 md:py-40">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <ChapterTitle numeral="III" title={HOME.title} id="home-title" />
            <Reveal as="p" variant="blur" className="serif-lead mt-12 max-w-md">
              {HOME.lead}
            </Reveal>
          </div>
          <div className="relative lg:col-span-6 lg:col-start-7">
            <ImageReveal
              src="/images/home-dining-linens.png"
              alt="Sunlit home with soft linens, spotless glassware and a clean bath beyond"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="aspect-[4/5] md:aspect-[5/4]"
              focus="62% 50%"
            />
            <div aria-hidden="true" className="absolute -bottom-6 -left-6 -z-10 hidden h-2/3 w-2/3 border border-ink/20 lg:block" />
          </div>
        </div>
        <ol className="mt-20 grid border-t border-ink/15 md:mt-28 md:grid-cols-2">
          {HOME.items.map((t, i) => (
            <Reveal
              as="li"
              key={t}
              delay={`${i * 90}ms`}
              className={cn('flex gap-6 border-b border-ink/15 py-9 md:px-8', i % 2 === 0 && 'md:border-r md:pl-0')}
            >
              <span className="font-display text-2xl italic text-clay-deep" aria-hidden="true">
                0{i + 1}
              </span>
              <span className="font-display text-[clamp(1.5rem,2.3vw,2rem)] leading-snug">{t}</span>
            </Reveal>
          ))}
        </ol>
        <Reveal as="p" className="mt-8 max-w-2xl text-sm text-muted">
          {HOME.note}
        </Reveal>
      </div>
    </section>
  )
}

/** IV — Savings: ink, a ledger of four value lines, the one supplied figure set large. */
export function SavingsChapter() {
  return (
    <section id={SAVINGS.id} aria-labelledby="savings-title" className="on-dark relative bg-ink py-28 text-porcelain md:py-44">
      <div className="shell grid gap-16 lg:grid-cols-12">
        <div className="self-start lg:sticky lg:top-32 lg:col-span-5">
          <ChapterTitle numeral="IV" title={SAVINGS.title} id="savings-title" />
          <Reveal as="p" variant="blur" className="serif-lead mt-12">
            {SAVINGS.lead}
          </Reveal>
          {/* Visual echo of the "as much as 75%" line below (read there by screen readers). */}
          <p aria-hidden="true" className="mt-12 font-display text-[clamp(7rem,15vw,14rem)] font-light leading-[0.8] text-clay">
            75<span className="align-top text-[0.4em]">%</span>
          </p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <dl className="border-t border-porcelain/20">
            {SAVINGS.rows.map((r, i) => (
              <Reveal key={r.label} delay={`${i * 80}ms`} className="grid gap-3 border-b border-porcelain/20 py-10 md:grid-cols-[11rem_1fr] md:gap-8">
                <dt className="font-display text-3xl italic text-blush">{r.label}</dt>
                <dd className="leading-relaxed text-porcelain/85">{r.text}</dd>
              </Reveal>
            ))}
          </dl>
          <Reveal as="p" variant="blur" className="mt-14 font-display text-[clamp(1.8rem,3vw,2.75rem)] italic leading-tight">
            {SAVINGS.close}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/** Sticky chapter index for the Eve Benefits page. */
export function ChapterNav() {
  const items = [BEAUTY, HEALTH, HOME, SAVINGS]
  return (
    <nav aria-label="Eve Benefits chapters" className="sticky top-[5rem] z-30 border-b border-ink/10 bg-porcelain/85 backdrop-blur-md">
      <ol className="shell flex gap-8 overflow-x-auto py-4 [scrollbar-width:none]">
        {items.map((c, i) => (
          <li key={c.id} className="shrink-0" style={vars({ '--i': i })}>
            <a href={`#${c.id}`} className="link-line is-quiet eyebrow">
              <span className="font-display text-base normal-case italic tracking-normal text-clay-deep">{['I', 'II', 'III', 'IV'][i]}</span>
              {c.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
