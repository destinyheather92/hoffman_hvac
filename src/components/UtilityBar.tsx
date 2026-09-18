import { business } from '../data/business'
import { PhoneIcon } from './Icons'

/** Thin spec-strip above the header. Hidden on small screens (the mobile action bar covers it). */
export function UtilityBar() {
  return (
    <div className="hidden bg-navy-950 text-steel-300 md:block">
      <div className="wrap flex h-10 items-center justify-between">
        <p className="label flex items-center gap-3 !text-[0.68rem]">
          <span className="beat inline-block h-2 w-2 bg-orange" aria-hidden="true" />
          {business.emergencyAvailability} Emergency HVAC Service
        </p>
        <div className="label flex items-center gap-6 !text-[0.68rem]">
          {business.financingAvailable && <span className="hidden lg:inline">Financing Available</span>}
          <span className="hidden lg:inline text-steel/60" aria-hidden="true">|</span>
          <a href={business.phoneHref} className="link-line flex items-center gap-2 text-white">
            <PhoneIcon width={14} height={14} />
            {business.phone}
          </a>
        </div>
      </div>
    </div>
  )
}
