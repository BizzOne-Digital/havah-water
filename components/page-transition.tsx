import { ViewTransition, type ReactNode } from 'react'

/** Editorial crossfade between routes (View Transitions; browsers without it navigate instantly). */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-in" exit="page-out" default="none">
      {children}
    </ViewTransition>
  )
}
