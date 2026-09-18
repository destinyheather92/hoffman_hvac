import { useState, type FormEvent } from 'react'
import { business } from '../data/business'
import { serviceGroups } from '../data/services'
import { ArrowIcon, ClockIcon, MailIcon, PhoneIcon, PinIcon } from './Icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const field =
  'mt-2 block w-full border-2 border-navy-900/30 bg-white px-4 py-3.5 text-[1.05rem] text-charcoal transition-colors placeholder:text-steel focus:border-orange focus:outline-none'

/**
 * TODO(client / dev): this form has NO backend. It does not submit anywhere.
 * Today it composes an email in the visitor's own mail app (mailto:) so nothing is silently lost.
 * To go live, swap `handleSubmit` for a POST to a form provider (Formspree, Netlify Forms, Getform, etc.)
 * and show a real success state only after the provider confirms.
 */
export function ContactSection() {
  const [opened, setOpened] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    const get = (k: string) => String(d.get(k) ?? '').trim()
    const body = [
      `Name: ${get('name')}`,
      `Phone: ${get('phone')}`,
      `Email: ${get('email')}`,
      `Service needed: ${get('service')}`,
      '',
      get('message'),
    ].join('\n')
    const subject = `Estimate request${get('service') ? ` — ${get('service')}` : ''}`
    window.location.href = `${business.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setOpened(true)
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-grid-light relative bg-paper py-24 md:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            number="08"
            eyebrow="Contact"
            id="contact-title"
            title={
              <>
                Get an estimate.
                <br />
                <span className="text-ember">Or just call.</span>
              </>
            }
            intro="Free in-home estimates. Fastest way to reach us is the phone."
          />

          <Reveal delay={100}>
            <a
              href={business.phoneHref}
              className="mt-10 flex items-center gap-4 bg-navy-900 p-5 text-white no-underline transition-colors hover:bg-navy-700"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center bg-orange text-navy-950">
                <PhoneIcon width={26} height={26} />
              </span>
              <span>
                <span className="label block !text-[0.62rem] text-steel-300">Call {business.emergencyAvailability} for emergencies</span>
                <span className="block font-display text-[2.2rem] font-bold leading-none tracking-wide">{business.phone}</span>
              </span>
            </a>

            <ul className="m-0 mt-8 list-none border-t-2 border-navy-900 p-0">
              <li className="flex gap-4 border-b border-navy-900/20 py-4">
                <MailIcon className="mt-1 shrink-0 text-ember" />
                <div>
                  <p className="label !text-[0.62rem] text-steel">Email</p>
                  <a href={business.emailHref} className="link-line break-all font-medium text-navy-900">{business.email}</a>
                </div>
              </li>
              <li className="flex gap-4 border-b border-navy-900/20 py-4">
                <PinIcon className="mt-1 shrink-0 text-ember" />
                <div>
                  <p className="label !text-[0.62rem] text-steel">Location</p>
                  <address className="not-italic">
                    {business.address.street}
                    <br />
                    {business.address.city}, {business.address.state} {business.address.zip}
                  </address>
                </div>
              </li>
              <li className="flex gap-4 border-b border-navy-900/20 py-4">
                <ClockIcon className="mt-1 shrink-0 text-ember" />
                <div className="w-full">
                  <p className="label !text-[0.62rem] text-steel">Office hours · Emergency {business.emergencyAvailability}</p>
                  <dl className="m-0 mt-1 grid grid-cols-[auto_1fr] gap-x-6 text-[0.98rem]">
                    {business.hours.map((h) => (
                      <div key={h.days} className="contents">
                        <dt className="font-medium">{h.days}</dt>
                        <dd className="m-0">{h.label}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={140} className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="relative border-2 border-navy-900 bg-white p-6 sm:p-10">
            <span className="absolute -top-[2px] left-0 h-[6px] w-28 bg-orange" aria-hidden="true" />
            <p className="label text-ember">Estimate request</p>
            <h3 className="mt-2 text-[2.4rem] text-navy-900">Tell us what’s going on</h3>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="label text-navy-900">Name</span>
                <input name="name" type="text" autoComplete="name" required className={field} />
              </label>
              <label className="block">
                <span className="label text-navy-900">Phone</span>
                <input name="phone" type="tel" autoComplete="tel" required className={field} />
              </label>
              <label className="block sm:col-span-2">
                <span className="label text-navy-900">Email</span>
                <input name="email" type="email" autoComplete="email" className={field} />
              </label>
              <label className="block sm:col-span-2">
                <span className="label text-navy-900">What do you need?</span>
                <select name="service" defaultValue="" className={field}>
                  <option value="">Select a service (optional)</option>
                  {serviceGroups.map((g) => (
                    <option key={g.id} value={g.title}>
                      {g.title} — {g.kicker}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="label text-navy-900">Details</span>
                <textarea name="message" rows={4} className={field} placeholder="System type, what it’s doing, home or business…" />
              </label>
            </div>

            {/* TODO(client / dev): replace this notice + handler when a form endpoint exists. */}
            <p className="mt-6 border-l-4 border-orange bg-paper px-4 py-3 text-[0.95rem] text-charcoal/85">
              Submitting opens your email app with this request filled in, addressed to {business.email}. Prefer
              to talk? Call <a className="link-line font-semibold" href={business.phoneHref}>{business.phone}</a>.
            </p>

            <button type="submit" className="btn btn-navy mt-6 w-full sm:w-auto">
              Send Estimate Request <ArrowIcon />
            </button>
            <p className="mt-4 min-h-6 text-[0.95rem]" role="status" aria-live="polite">
              {opened && 'Your email app should have opened. If nothing happened, email or call us directly using the details on this page.'}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
