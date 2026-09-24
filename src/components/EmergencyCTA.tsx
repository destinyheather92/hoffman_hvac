import { business } from '../data/business'
import { photos } from '../data/photos'
import { FieldPhoto } from './FieldPhoto'
import { PhoneIcon } from './Icons'
import { Reveal } from './Reveal'

export function EmergencyCTA() {
  return (
    <section
      id="emergency"
      aria-labelledby="emergency-title"
      className="relative overflow-hidden bg-charcoal py-28 text-white md:py-36"
    >
      {/* hazard-tape edge */}
      <div
        className="absolute inset-x-0 top-0 h-2"
        style={{ background: 'repeating-linear-gradient(-45deg, #f26a1b 0 14px, #1c2026 14px 28px)' }}
        aria-hidden="true"
      />
      <div className="absolute -right-40 top-1/2 h-[46rem] w-[46rem] -translate-y-1/2 rounded-full border border-orange/20" aria-hidden="true" />
      <div className="absolute -right-24 top-1/2 h-[38rem] w-[38rem] -translate-y-1/2 rounded-full border border-orange/10" aria-hidden="true" />

      <div className="wrap relative grid gap-14 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-7">
          <p className="label flex items-center gap-3 text-orange">
            <span className="beat inline-block h-2.5 w-2.5 bg-orange" aria-hidden="true" />
            02 — Emergency HVAC · {business.emergencyAvailability}
          </p>
          <h2 id="emergency-title" className="display-xl mt-6">
            No heat?
            <br />
            No AC?
            <br />
            <span className="text-orange">Don’t wait.</span>
          </h2>
          <p className="mt-8 max-w-lg text-[1.2rem] leading-relaxed text-steel-100">
            When the system quits, you need someone who picks up. Emergency HVAC repair is available{' '}
            {business.emergencyAvailability}. Call, tell us what’s happening, and we’ll get started on it.
          </p>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a href={business.phoneHref} className="btn btn-primary !min-h-[4.5rem] !px-8 !text-[1.6rem]">
              <PhoneIcon width={26} height={26} /> Call Now
            </a>
            <a
              href={business.phoneHref}
              className="link-line font-display text-[clamp(2rem,5vw,3rem)] font-bold leading-none tracking-wide text-white"
            >
              {business.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5">
          <FieldPhoto {...photos.emergency} index="07" className="w-full" />
          <p className="label mt-4 text-steel">Heating emergencies · Cooling emergencies</p>
        </Reveal>
      </div>
    </section>
  )
}
