import { OFFER } from '@/lib/site'

export const [OFFER_A, OFFER_B] = OFFER.split(' + ') // 'Fall Installation Special' · 'We pay your sales tax.'

/** The exact offer line with a tinted "+". Text content is unchanged. */
export function OfferText() {
  return (
    <>
      {OFFER_A} <span className="text-clay">+</span> {OFFER_B}
    </>
  )
}
