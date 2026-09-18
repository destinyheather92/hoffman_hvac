/**
 * FAQs. Only answers the existing site actually provides (or directly states elsewhere) are used.
 *
 * TODO(client): the existing service pages list these questions but publish NO answers, so they are
 * intentionally omitted until the client supplies answers:
 *  - Ductless: advantages / can they heat / install time / suitable buildings / maintenance
 *  - Heating: how often to service / signs it needs repair / all system types / savings from maintenance
 *  - Commercial: system types installed / install duration / post-install maintenance / new-building design
 *  - Emergency: what to do when a system stops / after-hours / response time / emergency types
 *  - Ductwork & gas line: duration / "licensed and insured?" / safety measures / design help
 */
export interface Faq {
  category: string
  q: string
  a: string
}

export const faqs: Faq[] = [
  {
    category: 'Financing',
    q: 'Do you offer financing options for HVAC installations?',
    a: 'Yes. We provide financing options to help make HVAC installations and repairs more affordable.',
  },
  {
    category: 'Estimates',
    q: 'Are estimates free?',
    a: 'Free in-home estimates are available for all services.',
  },
  {
    category: 'Residential + Commercial',
    q: 'Can you service both residential and commercial HVAC systems?',
    a: 'Absolutely. We work on HVAC for both homes and businesses, with a tailored solution for each.',
  },
  {
    category: 'Maintenance',
    q: 'What should I expect during an HVAC maintenance visit?',
    a: 'Our maintenance visits include system inspection, cleaning, tune-ups, and recommendations to keep your HVAC running efficiently.',
  },
  {
    category: 'Ductless',
    q: 'Do you install ductless mini splits?',
    a: 'Yes. Ductless mini split installation, repair and maintenance are part of our air conditioning work, for homes and businesses.',
  },
  {
    category: 'Emergency',
    q: 'Do you handle emergency heating and cooling problems?',
    a: 'Yes. Emergency HVAC repair is available 24/7. Call (803) 457-0268.',
  },
  {
    category: 'Commercial',
    q: 'Is financing available for commercial projects?',
    a: 'Yes. Flexible financing and free estimates are available for commercial HVAC work.',
  },
]
