# Hoffman HVAC LLC — marketing site

Static React + TypeScript + Tailwind (Vite). No backend, no accounts, no CMS.

```
npm install
npm run dev      # local dev
npm run build    # outputs /dist — upload to any static host (Netlify, Cloudflare Pages, GitHub Pages, S3…)
```

## Where things live

| Change this | Edit this |
| --- | --- |
| Phone, email, address, hours, service area, Facebook | `src/data/business.ts` |
| Services | `src/data/services.ts` |
| FAQs (also feeds FAQ schema) | `src/data/faqs.ts` |
| Photos | `src/data/photos.ts` |
| Colors / fonts / buttons | `src/index.css` (`@theme`) |
| Meta tags | `index.html` (JSON-LD is generated from the data files in `vite.config.ts`) |

## Replacing a photo placeholder

1. Put the image in `public/photos/` (e.g. `hero-condenser.jpg`, ~1600px wide).
2. In `src/data/photos.ts`, set that slot's `src: '/photos/hero-condenser.jpg'` and write real `alt` text.

The placeholder disappears automatically. Slots: `hero`, `gallery[0..5]`, `team`, `emergency`.

## Contact form

The form has no backend. On submit it opens the visitor's email app (`mailto:`) with the request filled in.
To connect a provider (Formspree, Netlify Forms, etc.), replace `handleSubmit` in
`src/components/ContactSection.tsx` (marked TODO).

## Open items for the client (search the code for `TODO(client)`)

- Production domain (canonical, og:url, schema url) and a 1200×630 share image
- Confirm business hours and street address (copied from the old site)
- Confirm the full service area (old site says only "Columbia and surrounding areas")
- Answers to the unanswered FAQs listed in `src/data/faqs.ts`
- Owner name/story for About; license & insurance details if they want them shown
- Financing partner / application link, if any
- Real field photos
