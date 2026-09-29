import Image from 'next/image'
import { MEDIA } from '@/lib/site'
import { cn } from '@/lib/utils'

/** Official logo from MEDIA.logo; falls back to the typographic wordmark. Size it with a height class. */
export function Wordmark({ className, priority }: { className?: string; priority?: boolean }) {
  if (MEDIA.logo)
    return (
      <Image
        src={MEDIA.logo.src}
        width={MEDIA.logo.width}
        height={MEDIA.logo.height}
        alt="Eve Water Center by Havahwater"
        sizes="(min-width: 768px) 240px, 160px"
        priority={priority}
        className={cn('h-14 w-auto', className)}
      />
    )
  return (
    <span className={cn('font-display text-[1.7rem] leading-none tracking-[-0.01em]', className)}>
      Havah<em className="font-light italic">water</em>
    </span>
  )
}
