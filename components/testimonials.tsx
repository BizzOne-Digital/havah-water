import { TESTIMONIALS } from '@/lib/content'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

/**
 * Editorial testimonials. Renders real entries from lib/content.ts; until the client supplies
 * them, shows clearly-labelled placeholder frames in the same layout (nothing is invented).
 */
export function Testimonials({ limit = 3, className }: { limit?: number; className?: string }) {
  const real = TESTIMONIALS.slice(0, limit)
  const slots = real.length ? real : Array.from({ length: limit }, () => null)

  return (
    <div className={cn('grid gap-px bg-ink/12 md:grid-cols-2', className)}>
      {slots.map((t, i) => (
        <Reveal
          as="figure"
          key={i}
          delay={`${i * 120}ms`}
          className={cn('flex min-h-[24rem] flex-col justify-between gap-10 bg-porcelain p-8 md:p-10', i === 0 && 'md:col-span-2 md:min-h-[28rem]')}
        >
          <span aria-hidden="true" className="font-display text-[7rem] leading-[0.6] text-clay/70">
            “
          </span>
          {t ? (
            <>
              <blockquote className={cn('font-display font-light leading-[1.15]', i === 0 ? 'text-[clamp(1.9rem,3.2vw,3rem)]' : 'text-2xl')}>
                <p>{t.quote}</p>
              </blockquote>
              <figcaption className="eyebrow text-muted">
                {t.name}
                {t.location && <span className="text-clay-deep"> · {t.location}</span>}
              </figcaption>
            </>
          ) : (
            <>
              <p className={cn('font-display font-light italic leading-[1.15] text-muted', i === 0 ? 'text-[clamp(1.9rem,3.2vw,3rem)]' : 'text-2xl')}>
                Reserved for a Havahwater homeowner’s story.
              </p>
              <figcaption className="eyebrow text-muted">Testimonial coming soon</figcaption>
            </>
          )}
        </Reveal>
      ))}
    </div>
  )
}
