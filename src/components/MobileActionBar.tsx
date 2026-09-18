import { ESTIMATE_HREF, business } from '../data/business'
import { PhoneIcon } from './Icons'

/** Sticky two-button bar for phones. Body gets bottom padding (index.css) so it never covers content. */
export function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t-2 border-orange bg-navy-950 md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <a
        href={business.phoneHref}
        className="flex h-16 items-center justify-center gap-2 bg-orange font-display text-[1.3rem] font-bold uppercase tracking-wider text-navy-950 no-underline"
      >
        <PhoneIcon width={20} height={20} /> Call Now
      </a>
      <a
        href={ESTIMATE_HREF}
        className="flex h-16 items-center justify-center font-display text-[1.3rem] font-bold uppercase tracking-wider text-white no-underline"
      >
        Get Estimate
      </a>
    </div>
  )
}
