import { business, nav } from '../data/business'
import { serviceGroups } from '../data/services'
import { FacebookIcon } from './Icons'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-charcoal text-steel-300">
      <div
        className="h-2"
        style={{ background: 'repeating-linear-gradient(-45deg, #f26a1b 0 14px, #1c2026 14px 28px)' }}
        aria-hidden="true"
      />
      <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo onDark />
          <p className="mt-6 max-w-xs">
            Residential and commercial heating &amp; cooling. {business.emergencyAvailability} emergency service.
            Financing available.
          </p>
          <a
            href={business.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-white no-underline hover:text-orange"
          >
            <FacebookIcon /> <span className="label">Facebook</span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className="label !font-mono !normal-case !tracking-[0.14em] text-orange">Navigate</h2>
          <ul className="m-0 mt-4 list-none space-y-1 p-0">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="link-line inline-block py-1.5 text-white">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services" className="lg:col-span-3">
          <h2 className="label !font-mono !normal-case !tracking-[0.14em] text-orange">Services</h2>
          <ul className="m-0 mt-4 list-none space-y-1 p-0">
            {serviceGroups.map((g) => (
              <li key={g.id}>
                <a href={g.id === 'emergency' ? '#emergency' : '#services'} className="link-line inline-block py-1.5 text-white">
                  {g.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="label !font-mono !normal-case !tracking-[0.14em] text-orange">Contact</h2>
          <address className="mt-4 space-y-2 not-italic">
            <p className="m-0 font-semibold text-white">{business.businessName}</p>
            <p className="m-0">
              <a href={business.phoneHref} className="link-line font-display text-[1.6rem] font-bold tracking-wide text-white">
                {business.phone}
              </a>
            </p>
            <p className="m-0">
              <a href={business.emailHref} className="link-line break-all text-white">{business.email}</a>
            </p>
            <p className="m-0">
              {business.address.street}
              <br />
              {business.address.city}, {business.address.state} {business.address.zip}
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-2 py-6 sm:flex-row sm:justify-between">
          <p className="label m-0 !text-[0.66rem]">
            © {new Date().getFullYear()} {business.businessName}. All rights reserved.
          </p>
          <p className="label m-0 !text-[0.66rem] text-steel">
            {/* TODO(client): add license / insurance numbers here once provided. */}
            {business.serviceArea}
          </p>
        </div>
      </div>
    </footer>
  )
}
