import { business } from '../data/business'

interface Props {
  /** Render the white-on-transparent version for use on navy/charcoal backgrounds. */
  onDark?: boolean
  /** Slightly smaller mark for the scrolled header state. */
  compact?: boolean
}

export function Logo({ onDark = false, compact = false }: Props) {
  return (
    <a href="#top" className="flex items-center no-underline" aria-label={`${business.businessName} — home`}>
      <img
        src="/logo.png"
        alt={`${business.businessName} logo`}
        width={311}
        height={100}
        className={compact ? 'h-11 w-auto md:h-12' : 'h-12 w-auto md:h-16'}
        style={onDark ? { filter: 'invert(1) brightness(1.6)' } : undefined}
      />
    </a>
  )
}
