import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import { Footer } from '@/components/footer'
import { MobileCallBar } from '@/components/mobile-call-bar'
import { MotionObserver } from '@/components/motion-observer'
import { SiteNav } from '@/components/site-nav'
import { bootScript, Splash } from '@/components/splash'
import { ADDRESS_LINES, BRAND, PHONE, SITE_URL } from '@/lib/site'
import './globals.css'

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})
const sans = Jost({ subsets: ['latin'], variable: '--font-jost', display: 'swap' })

const DESCRIPTION =
  'Introducing the Eve Water Center™ — the very first home water treatment system specifically designed by a woman for women. Built here in Utah with a Lifetime Warranty.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Havahwater | The Eve Water Center™ — Home Water Treatment in Utah', template: '%s | Havahwater' },
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: BRAND, locale: 'en_US', images: [{ url: '/images/hero-woman-residence.png', width: 3168, height: 1344 }] },
  twitter: { card: 'summary_large_image' },
}

export const viewport: Viewport = {
  themeColor: '#f0e1d8',
  colorScheme: 'light',
}

// Only supplied facts; add sameAs / geo / logo once the client confirms them.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BRAND,
  url: SITE_URL,
  telephone: `+1-${PHONE.slice(0, 3)}-${PHONE.slice(3, 6)}-${PHONE.slice(6)}`,
  image: `${SITE_URL}/images/eve-water-center-kitchen.png`,
  logo: `${SITE_URL}/logo/eve-logo-oval.png`,
  description: DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS_LINES[0],
    addressLocality: 'Lehi',
    addressRegion: 'UT',
    postalCode: '84043',
    addressCountry: 'US',
  },
  areaServed: { '@type': 'State', name: 'Utah' },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  makesOffer: { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'The Eve Water Center™' } },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:bg-ink focus:px-5 focus:py-3 focus:text-porcelain">
          Skip to content
        </a>
        <Splash />
        <SiteNav />
        <main id="main">{children}</main>
        <Footer />
        <MobileCallBar />
        <MotionObserver />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
