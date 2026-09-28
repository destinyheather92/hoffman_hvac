/**
 * FIELD PHOTOS — real Hoffman HVAC job photos.
 *
 * Originals live in /public/photos/. The site serves resized, metadata-free sRGB copies from
 * /public/photos/web/<slug>-<width>.{webp,jpg} (see `web()` below), never the multi-MB originals.
 *
 * To add or swap a photo:
 *   1. Export web copies of the original at the widths below (WebP + JPEG) into /public/photos/web/.
 *   2. Point the slot at them with `...web('<slug>', LANDSCAPE | PORTRAIT)` and write real alt text.
 *   3. Set `position` (CSS object-position) if the slot's crop cuts off the subject.
 * Any slot without a `src` falls back to the designed placeholder automatically.
 */
export type Orientation = 'landscape' | 'portrait' | 'square' | 'wide' | 'tall'

export interface PhotoSlot {
  src?: string
  srcSet?: string
  /** Same widths as `srcSet`, as WebP. Browsers without WebP fall back to the JPEG `srcSet`. */
  webpSrcSet?: string
  sizes?: string
  /** CSS object-position — keeps the subject in frame when the slot crops the photo. */
  position?: string
  /** Real alt text — describe what is actually in the photo once it exists. */
  alt: string
  label: string
  description: string
  orientation: Orientation
}

const LANDSCAPE = [480, 800, 1200, 1600]
const PORTRAIT = [480, 800, 1200]
const HERO = [800, 1280, 1600, 2048, 2400]

function web(slug: string, widths: number[]) {
  const set = (ext: string) => widths.map((w) => `/photos/web/${slug}-${w}.${ext} ${w}w`).join(', ')
  return { src: `/photos/web/${slug}-800.jpg`, srcSet: set('jpg'), webpSrcSet: set('webp') }
}

export const photos = {
  /** Original: hero.jpeg. Layout and crop are handled in Hero.tsx. */
  hero: {
    ...web('hero-equipment-lineup', HERO),
    // Rendered image width (object-fit: cover of a ~2.07:1 photo) for Hero.tsx's band / backdrop.
    sizes: '(min-width: 1024px) max(100vw, 1550px), (min-width: 768px) 104vw, (min-width: 640px) 116vw, 155vw',
    alt: 'Outdoor condensers, refrigerant gauges, a recovery machine, vacuum pump and refrigerant tanks lined up along a jobsite retaining wall',
    label: 'Hero',
    description: 'HVAC equipment and tools lined up on a jobsite.',
    orientation: 'wide',
  },
  gallery: [
    {
      ...web('attic-furnace-ductwork', LANDSCAPE), // IMG_0538
      position: '50% 80%',
      alt: 'Horizontal gas furnace and coil installed in an attic, connected to insulated flex ductwork',
      label: 'Furnace + Ductwork',
      description: 'Attic furnace install with new flex duct.',
      orientation: 'landscape',
    },
    {
      ...web('technician-diagnosing-condenser', PORTRAIT), // IMG_0608
      position: '50% 20%',
      alt: 'Hoffman HVAC technician leaning over a Goodman condenser with a digital refrigerant manifold connected',
      label: 'Technician At Work',
      description: 'Technician working on a condenser with gauges connected.',
      orientation: 'portrait',
    },
    {
      ...web('ductless-mini-split-head', LANDSCAPE), // darius1
      position: '50% 45%',
      alt: 'Ductless mini split mounted high on a white beadboard wall between two porthole windows',
      label: 'Ductless Mini Split',
      description: 'Wall-mounted ductless mini split head.',
      orientation: 'landscape',
    },
    {
      ...web('residential-condenser', PORTRAIT), // IMG_7216
      position: '50% 58%',
      alt: 'Ducane outdoor condenser on an equipment pad beside a vinyl-sided brick home in warm sunlight',
      label: 'Residential Condenser',
      description: 'Outdoor condenser at a home.',
      orientation: 'portrait',
    },
    {
      ...web('packaged-unit-gas-line', PORTRAIT), // IMG_7628
      position: '50% 55%',
      alt: 'Packaged heating and cooling unit beside a brick home, with black iron gas piping and a condensate drain',
      label: 'Packaged Unit + Gas Line',
      description: 'Packaged unit with gas piping.',
      orientation: 'portrait',
    },
    {
      ...web('attic-air-handler', LANDSCAPE), // IMG_9877
      position: '50% 45%',
      alt: 'Air handler on a metal drain pan in an attic, connected to insulated supply ductwork',
      label: 'Attic Air Handler',
      description: 'Air handler with drain pan and ductwork.',
      orientation: 'landscape',
    },
    {
      ...web('condenser-service-gauges', PORTRAIT), // IMG_0743
      position: '50% 55%',
      alt: 'Ducane condenser with refrigerant gauges and hoses connected during service',
      label: 'Condenser Service',
      description: 'Condenser with gauges and hoses connected.',
      orientation: 'portrait',
    },
    {
      ...web('mini-split-outdoor-unit', LANDSCAPE), // IMG_0545
      position: '50% 75%',
      alt: 'Gree inverter mini split outdoor unit installed beside a home with a covered line set',
      label: 'Mini Split Outdoor Unit',
      description: 'Ductless mini split outdoor unit.',
      orientation: 'landscape',
    },
  ],
  team: {
    ...web('technician-hoffman-shirt', PORTRAIT), // field2
    sizes: '(min-width: 1024px) 36vw, 100vw',
    position: '50% 20%',
    alt: 'Hoffman HVAC technician in a company shirt servicing a wall-mounted HVAC unit',
    label: 'Team',
    description: 'Technician in a Hoffman HVAC shirt at work.',
    orientation: 'portrait',
  },
  emergency: {
    ...web('technician-condenser-gauges', PORTRAIT), // field1
    sizes: '(min-width: 1024px) 36vw, 100vw',
    position: '50% 36%',
    alt: 'Hoffman HVAC technician kneeling beside a Goodman condenser, checking the system with refrigerant gauges',
    label: 'Technician On Site',
    description: 'Technician checking a condenser with gauges.',
    orientation: 'landscape',
  },
} satisfies Record<string, PhotoSlot | PhotoSlot[]>
