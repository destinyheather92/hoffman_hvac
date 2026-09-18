/**
 * FIELD PHOTO SLOTS — how to replace a placeholder:
 *   1. Drop the photo into /public/photos/  (e.g. hero-condenser.jpg, ~1600px wide, JPG/WebP)
 *   2. Set `src` below to '/photos/hero-condenser.jpg' and write real alt text.
 *   3. (Optional) add `srcSet` + `sizes` for responsive variants.
 * The designed placeholder disappears automatically for any slot that has a `src`.
 */
export type Orientation = 'landscape' | 'portrait' | 'square' | 'wide' | 'tall'

export interface PhotoSlot {
  src?: string
  srcSet?: string
  sizes?: string
  /** Real alt text — describe what is actually in the photo once it exists. */
  alt: string
  label: string
  description: string
  orientation: Orientation
}

export const photos = {
  hero: {
    src: undefined,
    alt: 'Hoffman HVAC technician servicing an outdoor condenser',
    label: 'Hero',
    description: 'Technician actively servicing an outdoor condenser.',
    orientation: 'tall',
  },
  gallery: [
    { src: undefined, alt: 'Hoffman HVAC technician at work', label: 'Technician At Work', description: 'Technician actively working — hands, tools, real jobsite.', orientation: 'landscape' },
    { src: undefined, alt: 'Completed residential HVAC installation', label: 'Residential Installation', description: 'Clean completed residential install — condenser and line set.', orientation: 'portrait' },
    { src: undefined, alt: 'Commercial rooftop HVAC unit', label: 'Commercial Rooftop', description: 'Commercial rooftop HVAC project.', orientation: 'wide' },
    { src: undefined, alt: 'Hoffman HVAC service vehicle', label: 'Service Vehicle', description: 'Hoffman HVAC truck on a jobsite or in a driveway.', orientation: 'landscape' },
    { src: undefined, alt: 'Ductwork installation', label: 'Ductwork', description: 'Ductwork in progress or freshly finished.', orientation: 'square' },
    { src: undefined, alt: 'Equipment replacement before and after', label: 'Equipment Replacement', description: 'Before / after of an old unit swapped for a new one.', orientation: 'landscape' },
  ],
  team: {
    src: undefined,
    alt: 'Owner and technician beside the Hoffman HVAC service vehicle',
    label: 'Team',
    description: 'Owner / technician beside the Hoffman HVAC service vehicle.',
    orientation: 'portrait',
  },
  emergency: {
    src: undefined,
    alt: 'Hoffman HVAC technician responding to an after-hours call',
    label: 'Emergency Call',
    description: 'Technician on an after-hours call — headlamp, van, night.',
    orientation: 'landscape',
  },
} satisfies Record<string, PhotoSlot | PhotoSlot[]>
