export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const BRAND = 'Havahwater'
export const PRODUCT = 'The Eve Water Center™'
export const OFFER = 'Fall Installation Special + We pay your sales tax.'
export const PRICING = 'Contact for pricing'

export const PHONE = '8018931750'
export const PHONE_DISPLAY = '(801) 893-1750'
export const PHONE_HREF = `tel:+1${PHONE}`

export const ADDRESS = '3300 N Triumph Blvd Lehi Utah 84043'
export const ADDRESS_LINES = ['3300 N Triumph Blvd', 'Lehi Utah 84043'] as const
export const MAP_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`

export const HOURS = 'Monday through Saturday 9am to 6pm Closed Sundays. Open evenings by appointment.'
export const HOURS_LINES = ['Monday through Saturday 9am to 6pm', 'Closed Sundays.', 'Open evenings by appointment.'] as const

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/eve-benefits', label: 'Eve Benefits' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
] as const

export const isActive = (pathname: string, href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

// Client media slots. Drop files in /public and fill these in — no layout changes needed.
export const MEDIA = {
  // e.g. { src: '/media/eve-hero.mp4', type: 'video/mp4' }. Keep it muted-friendly, 10–20s, ~1080p, < 8 MB.
  heroVideo: null as null | { src: string; type: string },
  heroPoster: '/images/hero-woman-residence.png',
  // object-position for the cinematic crop; keeps the subject in frame from phone to ultrawide.
  heroFocus: '30% 45%',
  system: '/images/eve-water-center-kitchen.png',
  // Transparent oval crop of /logo/evelogo.png (original kept untouched). Set to null for the typographic wordmark.
  logo: { src: '/logo/eve-logo-oval.png', width: 900, height: 714 } as null | { src: string; width: number; height: number },
} as const
