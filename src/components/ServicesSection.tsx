import { serviceGroups } from '../data/services'
import { SectionHeading } from './SectionHeading'
import { ServiceCard } from './ServiceCard'

export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative bg-paper py-24 md:py-32">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            className="lg:col-span-8"
            number="01"
            eyebrow="What we do"
            id="services-title"
            title={
              <>
                Heating &amp; cooling,
                <br />
                start to finish.
              </>
            }
          />
          <p className="max-w-md text-lg text-charcoal/80 lg:col-span-4 lg:justify-self-end">
            Install it, fix it, keep it running. Residential and commercial, with free in-home estimates on every
            service.
          </p>
        </div>

        {/* hairline-joined spec sheet, not floating cards */}
        <div className="mt-14 grid grid-cols-1 gap-px border border-navy-900/25 bg-navy-900/25 lg:grid-cols-12">
          {serviceGroups.map((g, i) => (
            <ServiceCard key={g.id} group={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
