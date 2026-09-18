import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface Props {
  number: string
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  dark?: boolean
  id?: string
  className?: string
}

/** Oversized section number + mono eyebrow + display headline. Used for every major section. */
export function SectionHeading({ number, eyebrow, title, intro, dark = false, id, className = '' }: Props) {
  return (
    <Reveal className={`relative ${className}`}>
      <div className="flex items-center gap-4">
        <span className={`font-display text-[1.1rem] font-bold tracking-widest ${dark ? 'text-orange' : 'text-ember'}`}>
          {number}
        </span>
        <span className={`draw-line block h-px w-12 ${dark ? 'bg-orange' : 'bg-ember'}`} />
        <span className={`label ${dark ? 'text-steel-300' : 'text-steel'}`}>{eyebrow}</span>
      </div>
      <h2 id={id} className={`display-lg mt-5 ${dark ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-6 max-w-xl text-lg ${dark ? 'text-steel-300' : 'text-charcoal/80'}`}>{intro}</p>
      )}
    </Reveal>
  )
}
