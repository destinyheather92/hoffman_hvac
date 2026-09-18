import { useEffect, useRef } from 'react'
import { ESTIMATE_HREF, business, nav } from '../data/business'
import { ArrowIcon, CloseIcon, PhoneIcon } from './Icons'
import { Logo } from './Logo'

interface Props {
  open: boolean
  onClose: () => void
  id: string
}

/** Full-screen mobile menu: focus moves in, Tab is trapped, Esc closes, background scroll locked. */
export function MobileNavigation({ open, onClose, id }: Props) {
  const panel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusables = () =>
      Array.from(panel.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [])
    focusables()[0]?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return onClose()
      if (e.key !== 'Tab') return
      const f = focusables()
      if (!f.length) return
      const first = f[0]
      const last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <div
      id={id}
      ref={panel}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!open}
      className={`bg-grid-dark fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-navy-950 text-white transition-[opacity,visibility] duration-200 lg:hidden ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
    >
      <div className="wrap flex h-[4.5rem] shrink-0 items-center justify-between">
        <Logo onDark />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="-mr-3 grid h-14 w-14 place-items-center text-white"
        >
          <CloseIcon width={28} height={28} />
        </button>
      </div>

      <nav aria-label="Mobile" className="wrap mt-4 flex-1">
        <ul className="m-0 list-none p-0">
          {nav.map((item, i) => (
            <li key={item.href} className="border-t border-white/10 last:border-b">
              <a
                href={item.href}
                onClick={onClose}
                className="group flex items-baseline justify-between py-4 font-display text-[2.6rem] font-bold uppercase leading-none no-underline"
              >
                <span>
                  <span className="mr-4 font-mono text-xs font-medium tracking-widest text-orange">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </span>
                <ArrowIcon className="text-steel" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="wrap grid gap-3 py-8">
        <a href={business.phoneHref} className="btn btn-primary" onClick={onClose}>
          <PhoneIcon /> Call {business.phone}
        </a>
        <a href={ESTIMATE_HREF} className="btn btn-ghost-dark" onClick={onClose}>
          Get an Estimate <ArrowIcon />
        </a>
        <p className="label mt-2 text-steel-300">
          {business.emergencyAvailability} Emergency Service · Financing Available
        </p>
      </div>
    </div>
  )
}
