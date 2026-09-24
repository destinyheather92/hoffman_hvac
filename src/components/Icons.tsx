import type { SVGProps } from 'react'

const base: SVGProps<SVGSVGElement> = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'square',
  'aria-hidden': true,
  focusable: false,
}

export const ArrowIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} className={`arrow ${p.className ?? ''}`} {...p}>
    <path d="M3 12h17M14 5l7 7-7 7" />
  </svg>
)

export const PhoneIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />
  </svg>
)

export const MailIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M3 5h18v14H3zM3 6l9 7 9-7" />
  </svg>
)

export const PinIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.500 7 12 7 12Z" />
    <circle cx="12" cy="10" r="2.500" />
  </svg>
)

export const ClockIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const MenuIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} strokeWidth={2.5} {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
)

export const CloseIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} strokeWidth={2.5} {...p}>
    <path d="M5 5l14 14M19 5 5 19" />
  </svg>
)

export const PlusIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} strokeWidth={2.5} {...p}>
    <path d="M12 4v16M4 12h16" />
  </svg>
)

export const FacebookIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M13.500 22v-8h2.700l.5-3.300h-3.200V8.600c0-1 .4-1.700 1.800-1.700h1.500V4.100C16.100 4 15.200 4 14.200 4 11.900 4 10.300 5.400 10.300 8v2.700H7.600V14h2.700v8Z" />
  </svg>
)
