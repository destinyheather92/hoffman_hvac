import { business } from '../data/business'
import { LogoMark } from './Icons'

export function Logo({ onDark = false, compact = false }: { onDark?: boolean; compact?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3 no-underline" aria-label={`${business.businessName} — home`}>
      <LogoMark size={compact ? 36 : 44} onDark={onDark} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.7rem] font-extrabold uppercase tracking-[0.04em] ${onDark ? 'text-white' : 'text-navy-900'}`}
        >
          Hoffman
        </span>
        <span className={`label mt-1 !text-[0.62rem] !tracking-[0.3em] ${onDark ? 'text-steel-300' : 'text-steel'}`}>
          HVAC <span className="text-orange">/</span> LLC
        </span>
      </span>
    </a>
  )
}
