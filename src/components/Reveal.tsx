import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface Props {
  children: ReactNode
  as?: ElementType
  delay?: number
  className?: string
}

/** Gentle fade/rise on scroll. Respects prefers-reduced-motion via CSS. */
export function Reveal({ children, as: Tag = 'div', delay = 0, className = '' }: Props) {
  const ref = useReveal<HTMLElement>()
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ '--d': `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  )
}
