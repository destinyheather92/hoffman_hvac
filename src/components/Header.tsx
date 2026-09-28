import { useCallback, useEffect, useState } from 'react'
import { ESTIMATE_HREF, business, nav } from '../data/business'
import { ClientHubLink } from './ClientHubLink'
import { ArrowIcon, MenuIcon, PhoneIcon, UserIcon } from './Icons'
import { Logo } from './Logo'
import { MobileNavigation } from './MobileNavigation'
import { UtilityBar } from './UtilityBar'

const MENU_ID = 'mobile-menu'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a
        href="#main"
        className="fixed left-3 top-3 z-[100] -translate-y-24 bg-orange px-4 py-3 font-display text-lg font-bold uppercase text-navy-950 focus:translate-y-0"
      >
        Skip to content
      </a>
      <UtilityBar />
      <header
        className={`sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-200 ${
          scrolled ? 'border-navy-900/15 bg-white/95 shadow-[0_6px_24px_-12px_rgb(7_18_31/0.35)] backdrop-blur' : 'border-navy-900/10 bg-paper'
        }`}
      >
        <div className={`wrap flex items-center justify-between gap-6 transition-[height] duration-200 ${scrolled ? 'h-16' : 'h-[4.5rem] md:h-20'}`}>
          <Logo compact={scrolled} />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="m-0 flex list-none items-center gap-5 p-0 xl:gap-8 hd:gap-9">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="link-line font-display text-[0.98rem] font-semibold uppercase tracking-[0.08em] text-navy-900 hover:text-ember xl:text-[1.05rem] xl:tracking-[0.1em]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2 md:gap-4">
            {/* desktop has no room for the number next to Client Login until `hd`; the utility bar above carries it */}
            <a
              href={business.phoneHref}
              className="hidden items-center gap-2 font-display text-[1.35rem] font-bold tracking-wide text-navy-900 no-underline hover:text-ember md:flex lg:hidden hd:flex"
              aria-label={`Call ${business.phone}`}
            >
              <PhoneIcon className="text-ember" /> {business.phone}
            </a>
            {/* existing customers — outlined navy so it never competes with the orange estimate CTA */}
            <ClientHubLink className="btn btn-ghost-light !hidden !min-h-12 !gap-2 !px-4 !text-base md:!inline-flex">
              <UserIcon width={18} height={18} /> Client Login
            </ClientHubLink>
            <a href={ESTIMATE_HREF} className="btn btn-primary !hidden !min-h-12 !px-5 !text-base lg:!inline-flex">
              Get an Estimate <ArrowIcon width={16} height={16} />
            </a>
            {/* account glyph button for small screens */}
            <ClientHubLink
              aria-label="Client Login (opens our secure Jobber Client Hub in a new tab)"
              className="grid h-12 w-12 place-items-center border-2 border-navy-900 text-navy-900 md:hidden"
            >
              <UserIcon width={22} height={22} />
            </ClientHubLink>
            {/* phone glyph button for small screens */}
            <a
              href={business.phoneHref}
              aria-label={`Call ${business.phone}`}
              className="grid h-12 w-12 place-items-center bg-orange text-navy-950 md:hidden"
            >
              <PhoneIcon width={22} height={22} />
            </a>
            <button
              type="button"
              className="grid h-12 w-12 place-items-center text-navy-900 lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls={MENU_ID}
              onClick={() => setOpen(true)}
            >
              <MenuIcon width={28} height={28} />
            </button>
          </div>
        </div>
        {/* orange progress rule */}
        <span className={`absolute bottom-[-1px] left-0 h-[2px] bg-orange transition-[width] duration-300 ${scrolled ? 'w-24' : 'w-0'}`} />
      </header>
      <MobileNavigation id={MENU_ID} open={open} onClose={close} />
    </>
  )
}
