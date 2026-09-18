import { ESTIMATE_HREF, business } from '../data/business'
import { photos } from '../data/photos'
import { FieldPhoto } from './FieldPhoto'
import { ArrowIcon, PhoneIcon } from './Icons'

export function Hero() {
  return (
    <section id="top" className="bg-grid-dark relative overflow-hidden bg-navy-900 text-white" aria-labelledby="hero-title">
      {/* temperature ruler down the far left edge */}
      <div className="ruler-y absolute inset-y-0 left-0 hidden w-4 text-steel/40 xl:block" aria-hidden="true" />

      <div className="wrap grid items-stretch gap-10 pb-28 pt-12 md:pt-16 lg:grid-cols-12 lg:gap-6 lg:pb-32 lg:pt-20">
        {/* ---------- copy ---------- */}
        <div className="relative z-10 flex flex-col justify-center lg:col-span-7 lg:pr-6">
          <p className="label flex items-center gap-3 text-orange">
            <span className="block h-px w-10 bg-orange" aria-hidden="true" />
            Heating · Cooling · {business.clients}
          </p>

          <h1 id="hero-title" className="display-xl mt-6">
            Your comfort.
            <span className="block text-transparent [-webkit-text-stroke:2px_#fff] sm:[-webkit-text-stroke:3px_#fff]">
              Our craft.
            </span>
          </h1>

          <p className="mt-8 max-w-[34rem] text-[1.2rem] leading-relaxed text-steel-100 md:text-[1.3rem]">
            Air conditioning, heating and ductless mini splits for homes and businesses in {business.serviceArea}. Free
            in-home estimates, financing options, and emergency repair around the clock.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={ESTIMATE_HREF} className="btn btn-primary">
              Get a Free Estimate <ArrowIcon />
            </a>
            <a href={business.phoneHref} className="btn btn-ghost-dark">
              <PhoneIcon /> Call Now
            </a>
          </div>
          <p className="label mt-4 text-steel-300">
            <a href={business.phoneHref} className="link-line text-white">
              {business.phone}
            </a>
          </p>

          {/* verified benefits — set like stamped equipment plates */}
          <ul className="m-0 mt-12 grid list-none grid-cols-1 gap-px border border-white/15 bg-white/15 p-0 sm:grid-cols-3">
            {[
              ['Clients', 'Residential + Commercial'],
              ['Emergency', `${business.emergencyAvailability} Service`],
              ['Payment', 'Financing Available'],
            ].map(([k, v]) => (
              <li key={k} className="bg-navy-900 px-4 py-3">
                <span className="label block !text-[0.62rem] text-steel">{k}</span>
                <span className="mt-1 block font-display text-[1.15rem] font-semibold uppercase tracking-wide">{v}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- photo ---------- */}
        <div className="relative lg:col-span-5 lg:-mr-10 xl:-mr-16">
          <div className="relative h-full min-h-[22rem] lg:pt-10">
            <FieldPhoto {...photos.hero} index="01" priority className="h-full min-h-[24rem] lg:min-h-[34rem]">
              {/* technical labels around the photo */}
              <div className="pointer-events-none absolute left-5 top-5 z-10 border-l-2 border-orange bg-navy-950/85 px-3 py-2 backdrop-blur-sm">
                <p className="label !text-[0.62rem] text-steel-300">Service</p>
                <p className="label text-white">HVAC</p>
              </div>
              <div className="pointer-events-none absolute right-5 top-5 z-10 border-r-2 border-orange bg-navy-950/85 px-3 py-2 text-right backdrop-blur-sm">
                <p className="label !text-[0.62rem] text-steel-300">Availability</p>
                <p className="label text-white">{business.emergencyAvailability}</p>
              </div>
            </FieldPhoto>
            {/* offset outline for depth */}
            <div className="pointer-events-none absolute -bottom-3 -left-3 hidden h-2/3 w-2/3 border-2 border-orange/70 lg:block" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* angled floor into the trust strip */}
      <div className="absolute inset-x-0 bottom-0 h-[3.5vw] min-h-8 bg-paper [clip-path:polygon(0_100%,100%_0,100%_100%)]" aria-hidden="true" />
    </section>
  )
}
