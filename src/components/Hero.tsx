import { ESTIMATE_HREF, business } from '../data/business'
import { photos } from '../data/photos'
import { ArrowIcon, PhoneIcon } from './Icons'

const { hero } = photos

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-900 text-white" aria-labelledby="hero-title">
      {/* ---------- photo ----------
          The photo is a ~2:1 panorama of the whole equipment lineup, so it never goes in a tall frame.
          < lg: full-bleed band above the copy, close to its native ratio.
          lg+:  bottom-anchored backdrop behind the copy; the gauges and tanks stay clear on the right. */}
      <figure className="relative m-0 aspect-[4/3] sm:aspect-[16/9] md:aspect-[2/1] lg:absolute lg:inset-x-0 lg:bottom-0 lg:aspect-auto lg:h-[74%]">
        <picture>
          <source type="image/webp" srcSet={hero.webpSrcSet} sizes={hero.sizes} />
          <img
            src={hero.src}
            srcSet={hero.srcSet}
            sizes={hero.sizes}
            alt={hero.alt}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[72%_50%] sm:object-[60%_50%] lg:object-[100%_50%]"
          />
        </picture>
        <div className="hero-scrim absolute inset-0" aria-hidden="true" />

        {/* technical labels — hidden on phones, where they'd cover the equipment (the plates below repeat them) */}
        <div className="pointer-events-none absolute inset-x-0 top-5 hidden sm:block lg:top-[14%]">
          <div className="wrap flex justify-between gap-3 lg:justify-end">
            <div className="border-l-2 border-orange bg-navy-950/85 px-3 py-2 backdrop-blur-sm">
              <p className="label !text-[0.62rem] text-steel-300">Service</p>
              <p className="label text-white">HVAC</p>
            </div>
            <div className="border-r-2 border-orange bg-navy-950/85 px-3 py-2 text-right backdrop-blur-sm">
              <p className="label !text-[0.62rem] text-steel-300">Availability</p>
              <p className="label text-white">{business.emergencyAvailability}</p>
            </div>
          </div>
        </div>
      </figure>

      <div className="wrap grid items-stretch gap-10 pb-28 pt-4 md:pt-6 lg:grid-cols-12 lg:gap-6 lg:pb-32 lg:pt-20">
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
      </div>

      {/* angled floor into the trust strip */}
      <div className="absolute inset-x-0 bottom-0 h-[3.5vw] min-h-8 bg-paper [clip-path:polygon(0_100%,100%_0,100%_100%)]" aria-hidden="true" />
    </section>
  )
}
