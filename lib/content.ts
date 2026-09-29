// Client-supplied copy. Every string here is verbatim — segments exist only so the
// layout can set them editorially. `lib/content.check.ts` asserts the joins still
// equal the original source text. Do not edit wording; edit layout instead.

export const HEADLINE = [
  'Introducing the Eve Water Center™',
  'The very first home water treatment system specifically designed by a woman for women.',
] as const

export const ABOUT = {
  title: 'Havah or Eve Water EVE/HAVAH.',
  meaning: 'The Hebrew translation for Eve is Havah, meaning "Life" or "Living One"',
  symbol: 'We chose this symbolically because of the importance and central role of the woman in every home.',
  home: 'Just as the woman plays a vital role in her home, we believe water impacts every aspect of every home!',
  life: 'We also believe that the quality of water greatly determines your quality of life!',
  deliver: 'The Eve Water Center™ will deliver high quality, great tasting water throughout your home.',
  maker: 'The Eve Water Center™ is exclusively built and distributed by Clear Water Solutions.',
  makerNote: '(A 28-year-old Utah water industry leader)',
  warranty: 'Every Eve Water Center is built here in Utah and comes with a Lifetime Warranty.',
  link: 'Learn more about the benefits of the Eve Water Center™',
} as const

export const BENEFITS_TITLE = 'EVE BENEFITS'

export const BEAUTY = {
  id: 'beauty',
  title: 'EVE BEAUTY',
  lead: 'Eve beauty starts with your skin!',
  body: [
    'Enjoy softer, clearer, glowing skin when you bathe in Eve Water.',
    'Kids love non itchy skin dry skin.',
    'Better water is the #1 doctor recommended solution for Psoriasis.',
    'When you pamper your hair with Eve Water you will see softer, shinier, heathier, easier to brush out results.',
  ],
  close: 'How will Eve Water improve your family’s beauty?',
} as const

export const HEALTH = {
  id: 'health',
  title: 'EVE HEALTH',
  quote: '“Buy a filter or be a filter”',
  attribution: '- Michael Hanks, Founder Clear Water Solutions',
  lead: 'Our bodies are over 60% water.',
  body: [
    'Do you drink enough water?',
    'Quality is just as important as quantity.',
    'The Eve Water Center™ was specifically designed for convenience, purity, and unmatched performance.',
    'Your family will enjoy drinking more great-tasting, high-quality Eve Water—and the health benefits that come with it.',
  ],
} as const

export const HOME = {
  id: 'home',
  title: 'EVE HOME',
  lead: 'Eve Water delivers cleaner, softer, brighter clothes and linens.',
  items: [
    'No more crusty, nasty, hard water stains and deposits.',
    'No more countless hours scrubbing tubs, toilets, sinks and showers.',
    'Spotless dishes and utensils.',
    'Dramatically extend the life of all your appliances.',
  ],
  note: '(Dishwasher, Washing Machine, Tubs, Toilets, Hot Water Heater, and More)',
} as const

export const SAVINGS = {
  id: 'savings',
  title: 'EVE SAVINGS',
  lead: 'Eve Water will save your family money!',
  rows: [
    { label: 'Soaps-', text: 'Eve Water users save as much as 75% on soaps, detergents, lotions and cleaning supplies.' },
    { label: 'Utilities-', text: 'Eve customers see a dramatic decrease in hot water heating costs.' },
    { label: 'Time-', text: 'Time is money. Spend less time cleaning and scrubbing and more time making memories with your family.' },
    {
      label: 'Repair Costs-',
      text: 'Hard water is the #1 cause for premature appliance repairs with water utilizing products.(Dishwasher, Washing Machine, Faucets etc.)',
    },
  ],
  close: 'Protect and extend the life of your home with a Eve Water Center™',
} as const

export const CHAPTERS = [
  { ...BEAUTY, numeral: 'I', image: '/images/hero-water.png', alt: 'Stone soaking tub filling with clear water beneath an arched window' },
  { ...HEALTH, numeral: 'II', image: '/images/water-pour-glass.png', alt: 'Clear water pouring into a glass on a stone counter' },
  { ...HOME, numeral: 'III', image: '/images/home-dining-linens.png', alt: 'Sunlit home with soft linens and spotless glassware' },
  { ...SAVINGS, numeral: 'IV', image: '/images/woman-window-glass.png', alt: 'Woman holding a glass of water by a window with a mountain view' },
] as const

export type Testimonial = { quote: string; name: string; location?: string }

// Add real, client-approved testimonials here. While empty, the site shows
// clearly-labelled placeholder frames — never invent entries.
export const TESTIMONIALS: Testimonial[] = []
