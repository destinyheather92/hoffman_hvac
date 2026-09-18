import { business } from '../data/business'

/** Spec-plate strip. Every entry is stated on the existing site. */
const specs = [
  { k: 'Emergency', v: `${business.emergencyAvailability} Service` },
  { k: 'Estimates', v: 'Free In-Home' },
  { k: 'Payment', v: 'Financing Available' },
  { k: 'Clients', v: 'Residential & Commercial' },
  { k: 'Coverage', v: 'Heating · Cooling · Ductless' },
]

export function TrustBar() {
  return (
    <section aria-label="At a glance" className="relative bg-paper">
      <div className="wrap">
        <ul className="m-0 grid list-none grid-cols-2 border-y-2 border-navy-900 p-0 md:grid-cols-5">
          {specs.map((s, i) => (
            <li
              key={s.k}
              className={`relative px-4 py-5 md:px-6 ${i > 0 ? 'md:border-l md:border-navy-900/25' : ''} ${i % 2 === 1 ? 'border-l border-navy-900/25 md:border-l' : ''} ${i >= 2 ? 'border-t border-navy-900/25 md:border-t-0' : ''} ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <span className="label block !text-[0.62rem] text-ember">{s.k}</span>
              <span className="mt-1 block font-display text-[1.35rem] font-bold uppercase leading-tight text-navy-900 md:text-[1.5rem]">
                {s.v}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
