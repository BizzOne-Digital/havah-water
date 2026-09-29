import Link from 'next/link'
import { PHONE_HREF } from '@/lib/site'

/** Always-reachable click-to-call on phones. */
export function MobileCallBar() {
  return (
    <div className="on-dark fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-porcelain/15 bg-ink/95 pb-[env(safe-area-inset-bottom)] text-porcelain backdrop-blur-md md:hidden">
      <a href={PHONE_HREF} className="eyebrow flex min-h-16 items-center justify-center gap-2 border-r border-porcelain/15">
        Call Now
      </a>
      <Link href="/contact" className="eyebrow flex min-h-16 items-center justify-center bg-clay-deep">
        Request Pricing
      </Link>
    </div>
  )
}
