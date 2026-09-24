import { ESTIMATE_HREF, business } from '../data/business'
import { ArrowIcon, PhoneIcon } from './Icons'
import { Reveal } from './Reveal'

/** Closing call-to-action. */
export function EstimateCTA() {
  return (
    <section aria-labelledby="final-cta-title" className="relative overflow-hidden bg-navy-950 py-28 text-white md:py-40">
      <span
        className="pointer-events-none absolute -bottom-10 right-0 select-none font-display text-[22rem] font-extrabold leading-none text-white/[0.03] md:text-[34rem]"
        aria-hidden="true"
      >
        H
      </span>
      <div className="wrap relative">
        <Reveal>
          <p className="label flex items-center gap-3 text-orange">
            <span className="block h-px w-10 bg-orange" aria-hidden="true" />
            Free in-home estimates
          </p>
          <h2 id="final-cta-title" className="display-xl mt-6 max-w-5xl">
            Comfort shouldn’t be <span className="text-orange">complicated.</span>
          </h2>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <a href={ESTIMATE_HREF} className="btn btn-primary">
              Get a Free Estimate <ArrowIcon />
            </a>
            <a href={business.phoneHref} className="btn btn-ghost-dark">
              <PhoneIcon /> Call {business.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
