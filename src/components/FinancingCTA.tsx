import { ESTIMATE_HREF } from '../data/business'
import { ArrowIcon } from './Icons'
import { Reveal } from './Reveal'

/**
 * TODO(client): the existing site only says financing is available "for all services" / installations and
 * repairs / commercial projects. No lender, rates, terms, promo periods or credit info is published, so none
 * appears here. Add a financing link or application URL here when the client provides one.
 */
export function FinancingCTA() {
  return (
    <section id="financing" aria-labelledby="financing-title" className="relative bg-white py-24 md:py-32">
      <div className="wrap">
        <div className="relative grid overflow-hidden bg-navy-800 text-white lg:grid-cols-12">
          {/* angled orange edge */}
          <div className="absolute inset-y-0 right-[41.6%] hidden w-1.5 origin-top skew-x-[-8deg] bg-orange lg:block" aria-hidden="true" />
          <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />

          <Reveal className="relative p-8 sm:p-12 lg:col-span-7 lg:p-16">
            <p className="label flex items-center gap-3 text-orange">
              <span className="font-display text-lg font-bold tracking-widest">06</span>
              <span className="block h-px w-10 bg-orange" aria-hidden="true" />
              Financing
            </p>
            <h2 id="financing-title" className="display-lg mt-5">
              Comfort now.
              <br />
              <span className="text-orange">Options to pay.</span>
            </h2>
            <p className="mt-7 max-w-lg text-[1.15rem] leading-relaxed text-steel-100">
              A dead system doesn’t wait for payday. Hoffman HVAC offers financing options to make installations and
              repairs more affordable — residential and commercial.
            </p>
            <a href={ESTIMATE_HREF} className="btn btn-primary mt-9">
              Ask About Financing <ArrowIcon />
            </a>
          </Reveal>

          <Reveal delay={120} className="relative flex flex-col justify-center p-8 sm:p-12 lg:col-span-5 lg:p-14">
            <p className="label text-steel-300">Financing / At a glance</p>
            <dl className="m-0 mt-5">
              {[
                ['Available for', 'Installations + repairs'],
                ['Clients', 'Residential + commercial'],
                ['Estimates', 'Free, in-home'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-6 border-t border-white/20 py-4 last:border-b">
                  <dt className="label !text-[0.68rem] text-steel-300">{k}</dt>
                  <dd className="m-0 text-right font-display text-[1.5rem] font-semibold uppercase leading-none tracking-wide">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-[0.95rem] text-steel-300">
              Ask for details when you request your estimate.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
