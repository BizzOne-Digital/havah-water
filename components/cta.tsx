import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Magnetic } from './magnetic'

type Props = {
  href: string
  children: ReactNode
  variant?: 'solid' | 'light' | 'clay' | 'ghost'
  magnetic?: boolean
  className?: string
}

export function Arrow({ className }: { className?: string }) {
  return <ArrowUpRight aria-hidden="true" strokeWidth={1.25} className={cn('size-4 shrink-0', className)} />
}

/** Primary call to action: tactile fill wipe, arrow nudge, optional magnetic pull. */
export function Cta({ href, children, variant = 'solid', magnetic, className }: Props) {
  const isExternal = href.startsWith('tel:') || href.startsWith('http')
  const cls = cn('btn', variant !== 'solid' && `btn-${variant}`, className)
  const inner = (
    <>
      {children}
      <Arrow />
    </>
  )
  const el = isExternal ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  )
  return magnetic ? <Magnetic>{el}</Magnetic> : el
}
