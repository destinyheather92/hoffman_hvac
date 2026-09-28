/**
 * Single source of truth for business facts.
 * Every value below was taken from https://hoffmanhvac.jobbersites.com/ (audited 2026-09-18)
 * unless marked TODO. Nothing here is invented.
 */

export interface HoursRow {
  days: string
  /** schema.org day names */
  schemaDays: string[]
  open: string | null
  close: string | null
  label: string
}

export const business = {
  businessName: 'Hoffman HVAC LLC',
  shortName: 'Hoffman HVAC',
  phone: '(803) 457-0268',
  phoneHref: 'tel:+18034570268',
  email: 'hoffmanhvac431@gmail.com',
  emailHref: 'mailto:hoffmanhvac431@gmail.com',

  /** Provided by the client 2026-09-28 (replaces the old site's address). */
  address: {
    street: '2421 Robin Crest',
    city: 'West Columbia',
    state: 'SC',
    stateName: 'South Carolina',
    zip: '29069',
  },

  /** The current site's service pages say "Columbia and surrounding areas". */
  serviceArea: 'Columbia and surrounding areas',
  // TODO(client): confirm the full list of towns/counties served before adding a city list or per-city SEO pages.

  emergencyAvailability: '24/7',
  financingAvailable: true,
  freeEstimates: 'Free in-home estimates',
  clients: 'Residential + Commercial',

  /** Provided by the client 2026-09-28. */
  facebook: 'https://www.facebook.com/profile.php?id=100090534527688',

  // TODO(client): confirm the production domain (used for canonical, og:url, schema url).
  siteUrl: '' as string,
  // TODO(client): add a real branded share image at /public/og-image.jpg (1200x630) and set it here.
  ogImage: '' as string,

  // TODO(client): confirm hours are still accurate. Copied from the existing site's footer.
  hours: [
    { days: 'Mon – Fri', schemaDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], open: '07:30', close: '17:00', label: '7:30 AM – 5:00 PM' },
    { days: 'Saturday', schemaDays: ['Saturday'], open: '08:00', close: '12:00', label: '8:00 AM – 12:00 PM' },
    { days: 'Sunday', schemaDays: ['Sunday'], open: null, close: null, label: 'Closed' },
  ] satisfies HoursRow[],

  // TODO(client): not stated on the existing site, so NOT claimed anywhere: license numbers, insurance,
  // years in business, team size, certifications/manufacturer affiliations, warranties, reviews/ratings,
  // financing partner and terms, response-time promises, exact service-area towns.
} as const

export const nav = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Financing', href: '#financing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const

export const ESTIMATE_HREF = '#contact'

/**
 * Jobber Client Hub — where existing customers log in to their account. Every "Client Login" link on the site
 * points here (via ClientHubLink); change it in this one place.
 * This is the public login link the old site's "Client Login" button used — not a credential. The site only
 * links out: it never collects, stores or forwards customer logins or account data, and holds no Jobber API keys.
 * TODO(client): confirm this is still the Client Hub login link shown in the company's Jobber account.
 */
export const JOBBER_CLIENT_HUB_URL =
  'https://clienthub.getjobber.com/client_hubs/1b66c823-1625-436f-a37d-da64643ddeaa/login/new?source=share_login'
