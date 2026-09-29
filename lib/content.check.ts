// Content-integrity check: `node lib/content.check.ts` (Node 22.18+ strips types natively).
// Source strings below are pasted verbatim from the client brief.
import assert from 'node:assert/strict'
import { ABOUT, BEAUTY, HEADLINE, HEALTH, HOME, SAVINGS } from './content.ts'
import { ADDRESS, ADDRESS_LINES, HOURS, HOURS_LINES } from './site.ts'

const SOURCE = {
  headline: 'Introducing the Eve Water Center™ The very first home water treatment system specifically designed by a woman for women.',
  about:
    'Havah or Eve Water EVE/HAVAH. The Hebrew translation for Eve is Havah, meaning "Life" or "Living One" We chose this symbolically because of the importance and central role of the woman in every home. Just as the woman plays a vital role in her home, we believe water impacts every aspect of every home! We also believe that the quality of water greatly determines your quality of life! The Eve Water Center™ will deliver high quality, great tasting water throughout your home. The Eve Water Center™ is exclusively built and distributed by Clear Water Solutions. (A 28-year-old Utah water industry leader) Every Eve Water Center is built here in Utah and comes with a Lifetime Warranty. Learn more about the benefits of the Eve Water Center™',
  beauty:
    'Eve beauty starts with your skin! Enjoy softer, clearer, glowing skin when you bathe in Eve Water. Kids love non itchy skin dry skin. Better water is the #1 doctor recommended solution for Psoriasis. When you pamper your hair with Eve Water you will see softer, shinier, heathier, easier to brush out results. How will Eve Water improve your family’s beauty?',
  healthQuote: '“Buy a filter or be a filter”- Michael Hanks, Founder Clear Water Solutions',
  health:
    'Our bodies are over 60% water. Do you drink enough water? Quality is just as important as quantity. The Eve Water Center™ was specifically designed for convenience, purity, and unmatched performance. Your family will enjoy drinking more great-tasting, high-quality Eve Water—and the health benefits that come with it.',
  home: 'Eve Water delivers cleaner, softer, brighter clothes and linens. No more crusty, nasty, hard water stains and deposits. No more countless hours scrubbing tubs, toilets, sinks and showers. Spotless dishes and utensils. Dramatically extend the life of all your appliances. (Dishwasher, Washing Machine, Tubs, Toilets, Hot Water Heater, and More)',
  savings:
    'Eve Water will save your family money! Soaps- Eve Water users save as much as 75% on soaps, detergents, lotions and cleaning supplies. Utilities- Eve customers see a dramatic decrease in hot water heating costs. Time- Time is money. Spend less time cleaning and scrubbing and more time making memories with your family. Repair Costs- Hard water is the #1 cause for premature appliance repairs with water utilizing products.(Dishwasher, Washing Machine, Faucets etc.) Protect and extend the life of your home with a Eve Water Center™',
}

const j = (...parts: readonly string[]) => parts.join(' ')

assert.equal(j(...HEADLINE), SOURCE.headline)
assert.equal(
  j(ABOUT.title, ABOUT.meaning, ABOUT.symbol, ABOUT.home, ABOUT.life, ABOUT.deliver, ABOUT.maker, ABOUT.makerNote, ABOUT.warranty, ABOUT.link),
  SOURCE.about,
)
assert.equal(j(BEAUTY.lead, ...BEAUTY.body, BEAUTY.close), SOURCE.beauty)
assert.equal(HEALTH.quote + HEALTH.attribution, SOURCE.healthQuote)
assert.equal(j(HEALTH.lead, ...HEALTH.body), SOURCE.health)
assert.equal(j(HOME.lead, ...HOME.items, HOME.note), SOURCE.home)
assert.equal(j(SAVINGS.lead, ...SAVINGS.rows.map((r) => `${r.label} ${r.text}`), SAVINGS.close), SOURCE.savings)
assert.equal(j(...ADDRESS_LINES), ADDRESS)
assert.equal(j(...HOURS_LINES), HOURS)

console.log('content check passed: all client copy is verbatim')
