import { clsx, type ClassValue } from 'clsx'
import type { CSSProperties } from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Typed inline CSS custom properties, e.g. vars({ '--d': '120ms' }). */
export const vars = (v: Record<`--${string}`, string | number>) => v as CSSProperties
