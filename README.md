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
| Client Login destination (Jobber Client Hub URL) — used by every Client Login link | `JOBBER_CLIENT_HUB_URL` in `src/data/business.ts` |
| Services | `src/data/services.ts` |
| FAQs (also feeds FAQ schema) | `src/data/faqs.ts` |
| Photos | `src/data/photos.ts` |
| Colors / fonts / buttons | `src/index.css` (`@theme`) |
| Meta tags | `index.html` (JSON-LD is generated from the data files in `vite.config.ts`) |

## Photos

Every photo slot (`hero`, `gallery[0..7]`, `team`, `emergency`) is filled with real job photos, configured in
`src/data/photos.ts`.

- Originals (straight off the phone, 2–12 MB each) are in `public/photos/`. The site never loads them.
- The site loads resized copies from `public/photos/web/<slug>-<width>.webp` + `.jpg`. They're rotated upright,
  converted to sRGB and have all metadata (including GPS) removed. Landscape copies come in 480/800/1200/1600 px,
  portrait copies in 480/800/1200 px, and the hero in 800/1280/1600/2048/2400 px.
- To swap a photo, export the new copies the same way, point the slot at them with `web('<slug>', …)`, write real
  `alt` text, and set `position` (CSS `object-position`) if the crop cuts off the subject.
- A slot without a `src` falls back to the designed placeholder.

## Contact form

The form has no backend. On submit it opens the visitor's email app (`mailto:`) with the request filled in.
To connect a provider (Formspree, Netlify Forms, etc.), replace `handleSubmit` in
`src/components/ContactSection.tsx` (marked TODO).

## Open items for the client (search the code for `TODO(client)`)

- Production domain (canonical, og:url, schema url) and a 1200×630 share image
- Confirm business hours (copied from the old site)
- Confirm the full service area (old site says only "Columbia and surrounding areas")
- Answers to the unanswered FAQs listed in `src/data/faqs.ts`
- Owner name/story for About; license & insurance details if they want them shown
- Financing partner / application link, if any
- Photos not yet on the site: a service vehicle, a commercial/rooftop job, a before/after swap, and an
  owner/team portrait
