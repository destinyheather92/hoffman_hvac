import { business } from '../data/business'
import { photos } from '../data/photos'
import { FieldPhoto } from './FieldPhoto'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

/**
 * TODO(client): the existing site has no real "about" copy (only "Our promise / About Hoffman HVAC LLC" headings).
 * Everything below restates verified facts only. Ask the owner for: their name, how the company started,
 * years in business, licensing/insurance, and what they actually want customers to know — then expand.
 */
export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-navy-900 py-24 text-white md:py-32">
      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
      <div className="wrap relative grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5 lg:pt-16">
          <Reveal>
            <FieldPhoto {...photos.team} index="08" className="w-full" />
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pl-10">
          <SectionHeading
            dark
            number="04"
            eyebrow="About us"
            id="about-title"
            title={
              <>
                A local shop
                <br />
                that shows up.
              </>
            }
          />

          <Reveal delay={100} className="mt-8 max-w-2xl space-y-5 text-[1.15rem] leading-relaxed text-steel-100">
            <p>
              {business.businessName} installs, repairs and maintains heating and cooling systems for homes and
              businesses in {business.serviceArea}. Central air, ductless mini splits, heating systems, ductwork, gas lines —
              if it moves air or makes heat, it’s in our lane.
            </p>
            <p>
              You get a free in-home estimate, a straight recommendation, and options to finance the work. And when
              the system dies at 2 a.m., there’s a number to call.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <dl className="mt-12 grid max-w-2xl grid-cols-1 gap-px border border-white/15 bg-white/15 sm:grid-cols-3">
              {[
                ['Based in', `${business.address.city}, ${business.address.state}`],
                ['Serving', business.serviceArea],
                ['Reach us', business.emergencyAvailability + ' emergency'],
              ].map(([k, v]) => (
                <div key={k} className="bg-navy-900 px-5 py-4">
                  <dt className="label !text-[0.62rem] text-orange">{k}</dt>
                  <dd className="m-0 mt-1 font-display text-[1.25rem] font-semibold uppercase leading-tight">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
