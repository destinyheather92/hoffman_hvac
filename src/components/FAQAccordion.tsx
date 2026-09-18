import { useId, useState } from 'react'
import { faqs } from '../data/faqs'
import { PlusIcon } from './Icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0)
  const uid = useId()

  return (
    <section id="faq" aria-labelledby="faq-title" className="relative bg-paper py-24 md:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            number="07"
            eyebrow="Questions"
            id="faq-title"
            title={
              <>
                Straight
                <br />
                answers.
              </>
            }
            intro="Don’t see your question? Call or send a request and we’ll answer it."
          />
        </div>

        <Reveal delay={100} className="lg:col-span-8">
          <ul className="m-0 list-none border-t-2 border-navy-900 p-0">
            {faqs.map((f, i) => {
              const isOpen = open === i
              const btnId = `${uid}-b${i}`
              const panelId = `${uid}-p${i}`
              return (
                <li key={f.q} className="border-b border-navy-900/25">
                  <h3 className="!text-base !leading-normal">
                    <button
                      type="button"
                      id={btnId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex min-h-[4.5rem] w-full items-center gap-4 py-5 text-left"
                    >
                      <span className="label hidden w-40 shrink-0 text-ember sm:block">{f.category}</span>
                      <span className="flex-1 font-display text-[1.45rem] font-semibold normal-case leading-tight text-navy-900 transition-colors group-hover:text-ember md:text-[1.65rem]">
                        {f.q}
                      </span>
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center border-2 transition-all duration-200 ${isOpen ? 'rotate-45 border-orange bg-orange text-navy-950' : 'border-navy-900 text-navy-900 group-hover:border-ember group-hover:text-ember'}`}
                      >
                        <PlusIcon width={18} height={18} />
                      </span>
                    </button>
                  </h3>
                  <div id={panelId} role="region" aria-labelledby={btnId} data-open={isOpen} className="faq-panel">
                    <div>
                      <p className="m-0 max-w-2xl pb-6 text-[1.1rem] text-charcoal/85 sm:pl-[10.5rem]">{f.a}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
