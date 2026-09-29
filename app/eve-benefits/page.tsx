import type { Metadata } from 'next'
import { BeautyChapter, ChapterNav, HealthChapter, HomeChapter, SavingsChapter } from '@/components/benefit-chapters'
import { LeadCta } from '@/components/home-sections'
import { OfferBanner } from '@/components/offer'
import { PageHero } from '@/components/page-hero'
import { PageTransition } from '@/components/page-transition'
import { BENEFITS_TITLE } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Eve Benefits — Beauty, Health, Home & Savings',
  description:
    'Eve Beauty, Eve Health, Eve Home and Eve Savings: how the Eve Water Center™ brings softer skin and hair, great-tasting water, a cleaner home and family savings to Utah homes.',
  alternates: { canonical: '/eve-benefits' },
}

export default function EveBenefitsPage() {
  return (
    <PageTransition>
      <PageHero eyebrow="Four chapters" title={[BENEFITS_TITLE]} image="/images/kitchen-glass-woman.png" alt="Woman filling a glass of water at a stone kitchen island" focus="30% 40%" />
      <ChapterNav />
      <BeautyChapter />
      <HealthChapter />
      <HomeChapter />
      <SavingsChapter />
      <OfferBanner />
      <LeadCta />
    </PageTransition>
  )
}
