import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const steps = [
  { n: '01', title: 'Tell us what’s going on', body: 'Call or send a request. Describe what the system is doing — or not doing.' },
  { n: '02', title: 'We assess your system', body: 'We look the equipment over and find what’s wrong or what it needs.' },
  { n: '03', title: 'Get clear recommendations', body: 'Straight options and a free in-home estimate. Financing is available if you want it.' },
  { n: '04', title: 'Get comfortable again', body: 'We do the work and get the system running the way it should.' },
]

export function ProcessSection() {
  return (
    <section id="process" aria-labelledby="process-title" className="relative bg-paper py-24 md:py-32">
      <div className="wrap">
        <SectionHeading
          number="05"
          eyebrow="How it works"
          id="process-title"
          title={
            <>
              Four steps.
              <br />
              No runaround.
            </>
          }
        />

        <ol className="m-0 mt-16 grid list-none grid-cols-1 p-0 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 110} className="group relative border-t-2 border-navy-900 pb-10 pr-6 pt-6 md:pr-8 lg:border-l lg:pl-6 lg:first:border-l-0 lg:first:pl-0">
              <span className="draw-line absolute -top-[2px] left-0 block h-[2px] w-16 bg-orange" aria-hidden="true" />
              <span
                className="block font-display text-[8rem] font-extrabold leading-[0.8] text-transparent transition-colors duration-300 [-webkit-text-stroke:2px_var(--color-navy-900)] group-hover:text-orange group-hover:[-webkit-text-stroke-color:var(--color-orange)] md:text-[9rem]"
                aria-hidden="true"
              >
                {s.n}
              </span>
              <h3 className="mt-6 text-[1.9rem] text-navy-900">{s.title}</h3>
              <p className="mt-3 max-w-[26ch] text-charcoal/80">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
