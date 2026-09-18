import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'
import { business } from './src/data/business.ts'
import { faqs } from './src/data/faqs.ts'

/**
 * Builds the JSON-LD from the same data files the UI uses, so schema can never drift from the page.
 * Only verified facts are emitted — no reviews, ratings, or invented service areas.
 */
function schemaPlugin(): Plugin {
  return {
    name: 'hoffman-schema',
    transformIndexHtml(html) {
      const b = business
      const localBusiness = {
        '@context': 'https://schema.org',
        '@type': ['HVACBusiness', 'LocalBusiness'],
        '@id': b.siteUrl ? `${b.siteUrl}/#business` : undefined,
        name: b.businessName,
        url: b.siteUrl || undefined,
        telephone: '+18034570268',
        email: b.email,
        image: b.ogImage || undefined,
        description:
          'Residential and commercial heating, air conditioning and ductless mini split service with free in-home estimates, financing options and 24/7 emergency HVAC repair.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: b.address.street,
          addressLocality: b.address.city,
          addressRegion: b.address.state,
          postalCode: b.address.zip,
          addressCountry: 'US',
        },
        areaServed: { '@type': 'City', name: 'Columbia' },
        openingHoursSpecification: b.hours
          .filter((h) => h.open && h.close)
          .map((h) => ({
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: h.schemaDays,
            opens: h.open,
            closes: h.close,
          })),
        sameAs: [b.facebook],
        makesOffer: [
          'Air Conditioning',
          'Ductless Mini Splits',
          'Heating Repair',
          'Heating Maintenance',
          'Commercial HVAC Installation and Service',
          'Emergency HVAC Repair',
          'Ductwork Installation',
          'Gas Line Installation',
          'HVAC Maintenance',
          'HVAC Tune-Ups',
          'HVAC Inspections',
          'HVAC System Design',
        ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
      }
      const faqPage = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
      const tag = (o: unknown) =>
        `<script type="application/ld+json">${JSON.stringify(o)}</script>`
      const canonical = b.siteUrl
        ? `<link rel="canonical" href="${b.siteUrl}/" />\n    <meta property="og:url" content="${b.siteUrl}/" />`
        : '<!-- TODO(client): add canonical + og:url once the production domain is set in src/data/business.ts -->'
      const ogImage = b.ogImage
        ? `<meta property="og:image" content="${b.ogImage}" />\n    <meta name="twitter:image" content="${b.ogImage}" />`
        : '<!-- TODO(client): add og:image once a branded share image exists -->'
      return html
        .replace('<!--SCHEMA-->', `${tag(localBusiness)}\n    ${tag(faqPage)}`)
        .replace('<!--CANONICAL-->', canonical)
        .replace('<!--OGIMAGE-->', ogImage)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), schemaPlugin()],
})
