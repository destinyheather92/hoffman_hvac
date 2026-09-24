import type { PhotoSlot } from '../data/photos'

interface Props extends Partial<PhotoSlot> {
  /** Slot id shown on the placeholder, e.g. "01". */
  index?: string
  className?: string
  /** Above-the-fold photos: skip lazy loading and hint high priority. */
  priority?: boolean
  /** Extra overlay content (spec labels etc.) — rendered on top of photo OR placeholder. */
  children?: React.ReactNode
}

const ratio: Record<NonNullable<PhotoSlot['orientation']>, string> = {
  landscape: 'aspect-[3/2]',
  portrait: 'aspect-[4/5]',
  square: 'aspect-square',
  wide: 'aspect-[16/8]',
  tall: 'aspect-[4/5] md:aspect-auto',
}

/**
 * Renders the real photograph when `src` exists, otherwise the designed "field photo" placeholder.
 * To swap in a photo: set `src` on the slot in src/data/photos.ts — nothing else changes.
 */
export function FieldPhoto({
  src,
  srcSet,
  sizes,
  alt = '',
  label = 'Field Photo',
  description = 'Replace with a real Hoffman HVAC job photo',
  orientation = 'landscape',
  index,
  className = '',
  priority = false,
  children,
}: Props) {
  const box = `field-photo group relative isolate overflow-hidden ${ratio[orientation]} ${className}`

  if (src) {
    return (
      <figure className={`${box} m-0 bg-navy-900`}>
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {children}
      </figure>
    )
  }

  return (
    <figure
      className={`${box} m-0 bg-navy-800 text-steel-300`}
      role="img"
      aria-label={`Photo placeholder: ${label}. ${description}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgb(23_53_86/0.9),transparent_65%)]" />
      {/* viewfinder frame */}
      <div className="fp-frame absolute inset-3 border border-dashed border-steel/60" />
      {/* corner crop marks */}
      {['left-3 top-3 border-l-2 border-t-2', 'right-3 top-3 border-r-2 border-t-2', 'left-3 bottom-3 border-b-2 border-l-2', 'right-3 bottom-3 border-b-2 border-r-2'].map((c) => (
        <span key={c} className={`absolute h-5 w-5 border-orange ${c}`} />
      ))}
      {/* crosshair */}
      <svg className="fp-cross absolute left-1/2 top-1/2 hidden h-14 w-14 sm:block -translate-x-1/2 -translate-y-[70%] text-steel/70" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="28" cy="28" r="12" />
        <path d="M28 2v16M28 38v16M2 28h16M38 28h16" />
      </svg>
      {/* caption */}
      <figcaption className="absolute inset-x-0 bottom-0 p-6 pb-7 md:p-8">
        <p className="label !text-[0.68rem] text-orange">
          [HOFFMAN FIELD PHOTO — {label.toUpperCase()}]
        </p>
        <p className="mt-2 max-w-[34ch] text-[0.95rem] leading-snug text-steel-300">
          <span className="text-white/90">Suggested:</span> {description}
        </p>
        <p className="label mt-3 !text-[0.62rem] text-steel">
          {index ? `SLOT ${index} · ` : ''}
          {orientation.toUpperCase()}
        </p>
      </figcaption>
      {children}
    </figure>
  )
}
