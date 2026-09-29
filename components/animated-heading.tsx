import { Fragment, type ReactNode } from 'react'
import { cn, vars } from '@/lib/utils'

type Props = {
  as?: 'h1' | 'h2' | 'h3' | 'p'
  /** Editorial line breaks. Lines are joined by a space, so the text content stays verbatim. */
  lines: readonly string[]
  className?: string
  lineClassNames?: (string | undefined)[]
  delay?: string
  id?: string
  /** Optional per-word decoration (e.g. tint a "+"). Must return the same text. */
  renderWord?: (word: string) => ReactNode
}

/** Masked word-by-word reveal. Words rise from behind a clip line, staggered 55ms apart. */
export function AnimatedHeading({ as: Tag = 'h2', lines, className, lineClassNames = [], delay, id, renderWord }: Props) {
  let i = 0
  return (
    <Tag id={id} data-reveal="words" className={className} style={delay ? vars({ '--d': delay }) : undefined}>
      {lines.map((line, li) => (
        <Fragment key={li}>
          {li > 0 && ' '}
          <span className={cn('block', lineClassNames[li])}>
            {line.split(' ').map((word, wi) => (
              <Fragment key={wi}>
                {wi > 0 && ' '}
                <span className="w">
                  <span style={vars({ '--i': i++ })}>{renderWord ? renderWord(word) : word}</span>
                </span>
              </Fragment>
            ))}
          </span>
        </Fragment>
      ))}
    </Tag>
  )
}
