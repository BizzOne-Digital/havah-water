import { ADDRESS_LINES, HOURS_LINES, MAP_HREF, PHONE_DISPLAY, PHONE_HREF } from '@/lib/site'
import { cn } from '@/lib/utils'
import { Arrow } from './cta'
import { Reveal } from './reveal'

/** Phone, studio address and hours as an editorial ledger. */
export function ContactDetails({ className, tone = 'light' }: { className?: string; tone?: 'light' | 'dark' }) {
  const rule = tone === 'dark' ? 'border-porcelain/20' : 'border-ink/15'
  const label = cn('eyebrow', tone === 'dark' ? 'text-stone' : 'text-muted')
  return (
    <dl className={cn('border-t', rule, className)}>
      <Reveal className={cn('border-b py-7', rule)}>
        <dt className={label}>Call</dt>
        <dd className="mt-3">
          <a href={PHONE_HREF} className="font-display text-[clamp(2rem,3.4vw,2.9rem)] font-light leading-none hover:text-clay">
            {PHONE_DISPLAY}
          </a>
        </dd>
      </Reveal>
      <Reveal className={cn('border-b py-7', rule)} delay="100ms">
        <dt className={label}>Visit</dt>
        <dd className="mt-3">
          <address className="font-display text-2xl not-italic leading-snug">
            {ADDRESS_LINES[0]}{' '}
            <br />
            {ADDRESS_LINES[1]}
          </address>
          <a href={MAP_HREF} target="_blank" rel="noopener noreferrer" className="link-line is-quiet mt-3 text-sm tracking-wide">
            Open in Maps <Arrow className="size-3.5" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </dd>
      </Reveal>
      <Reveal className={cn('border-b py-7', rule)} delay="200ms">
        <dt className={label}>Hours</dt>
        <dd className="mt-3 space-y-1 leading-relaxed">
          {HOURS_LINES.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </dd>
      </Reveal>
    </dl>
  )
}
