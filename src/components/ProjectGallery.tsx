import { photos } from '../data/photos'
import { FieldPhoto } from './FieldPhoto'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

/** Mixed-size portfolio grid. Column spans per slot — order matches photos.gallery in src/data/photos.ts. */
const spans = [
  'lg:col-span-8',
  'lg:col-span-4',
  'lg:col-span-7',
  'lg:col-span-5',
  'lg:col-span-4',
  'lg:col-span-8',
]

export function ProjectGallery() {
  return (
    <section id="work" aria-labelledby="work-title" className="relative bg-white py-24 md:py-32">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            className="lg:col-span-8"
            number="03"
            eyebrow="Real work"
            id="work-title"
            title={
              <>
                Built in the field.
                <br />
                <span className="text-ember">Proven on the job.</span>
              </>
            }
          />
          <p className="max-w-md text-lg text-charcoal/80 lg:col-span-4 lg:justify-self-end">
            Installs, repairs and replacements from real Hoffman HVAC jobsites — no stock photos.
          </p>
        </div>

        <ul className="m-0 mt-14 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {photos.gallery.map((slot, i) => (
            <li
              key={slot.label}
              className={`${spans[i]} ${i === 2 ? 'md:col-span-2' : ''}`}
            >
              <Reveal delay={(i % 3) * 80} className="h-full">
                <FieldPhoto
                  {...slot}
                  index={String(i + 2).padStart(2, '0')}
                  className="h-full w-full lg:!aspect-auto lg:min-h-[22rem]"
                >
                  {slot.src && (
                    <p className="label absolute bottom-0 left-0 bg-navy-950/90 px-3 py-2 text-white">
                      <span className="text-orange">{String(i + 1).padStart(2, '0')}</span> — {slot.label}
                    </p>
                  )}
                </FieldPhoto>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
