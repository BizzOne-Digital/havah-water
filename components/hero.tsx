import Image, { getImageProps } from 'next/image'
import Link from 'next/link'
import { HEADLINE } from '@/lib/content'
import { MEDIA } from '@/lib/site'
import { AnimatedHeading } from './animated-heading'
import { Cta } from './cta'
import { HeroVideo } from './hero-video'
import { Reveal } from './reveal'

const HERO_ALT = 'Woman holding a glass of water in a sunlit Utah residence with mountain views'

/**
 * Full-viewport cinematic hero. Uses MEDIA.heroVideo when supplied (optimized poster from
 * next/image), otherwise the priority-loaded still. Intro timing waits for the splash (--intro).
 */
export function Hero() {
  const { heroVideo, heroPoster, heroFocus } = MEDIA
  const poster = getImageProps({ src: heroPoster, alt: '', width: 1920, height: 815, quality: 70 }).props.src

  return (
    <section className="on-dark relative isolate flex min-h-svh items-end overflow-clip text-porcelain">
      {heroVideo ? (
        <HeroVideo src={heroVideo.src} type={heroVideo.type} poster={poster} focus={heroFocus} />
      ) : (
        <div className="hero-media absolute inset-0 -z-20">
          <Image src={heroPoster} alt={HERO_ALT} fill priority sizes="100vw" quality={78} className="object-cover" style={{ objectPosition: heroFocus }} />
        </div>
      )}
      <div aria-hidden="true" className="hero-wash absolute inset-0 -z-10" />

      <div className="shell grid gap-12 pb-24 pt-44 md:pb-20 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-9">
          <Reveal as="p" variant="track" delay="var(--intro)" className="eyebrow text-porcelain/85">
            Havahwater · Utah
          </Reveal>
          <AnimatedHeading
            as="h1"
            lines={HEADLINE}
            delay="calc(var(--intro) + 150ms)"
            className="mt-7 font-light"
            lineClassNames={[
              'text-[clamp(2.9rem,7.6vw,7.6rem)] leading-[0.94] tracking-[-0.02em]',
              'mt-7 max-w-[30ch] text-[clamp(1.35rem,2.3vw,2.15rem)] italic leading-[1.28] text-porcelain/90',
            ]}
          />
          <Reveal delay="calc(var(--intro) + 1.2s)" className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6">
            <Cta href="/eve-benefits" variant="light" magnetic>
              Discover Eve
            </Cta>
            <Link href="/contact" className="link-line eyebrow">
              Request Pricing
            </Link>
          </Reveal>
        </div>

        <Reveal
          variant="fade"
          delay="calc(var(--intro) + 1.5s)"
          className="flex items-end justify-between gap-8 border-t border-porcelain/25 pt-6 lg:col-span-3 lg:flex-col lg:items-end lg:border-0 lg:pt-0"
        >
          <ul className="space-y-1 text-sm tracking-wide text-porcelain/85 lg:text-right">
            <li>Built here in Utah</li>
            <li>Lifetime Warranty</li>
          </ul>
          <a href="#discover" className="flex items-center gap-4 lg:flex-col" aria-label="Scroll to discover">
            <span className="eyebrow [writing-mode:vertical-rl]" aria-hidden="true">
              Scroll
            </span>
            <span className="scroll-cue-line" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
