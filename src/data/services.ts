/**
 * Services verified against the existing site (homepage service list + 5 service pages).
 * Descriptions are rewritten in a plainer voice; they only restate what the site claims.
 */

export type Tone = 'light' | 'navy' | 'steel' | 'charcoal' | 'paper'
export type Graphic = 'louvers' | 'flame' | 'roofline' | 'pulse' | 'duct' | 'gauge'

export interface ServiceItem {
  name: string
  blurb: string
}

export interface ServiceGroup {
  id: string
  number: string
  title: string
  kicker: string
  description: string
  items: ServiceItem[]
  tone: Tone
  graphic: Graphic
  /** grid span on the desktop 12-col grid */
  span: 5 | 6 | 7
  spec: string
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'cooling',
    number: '01',
    title: 'Cooling',
    kicker: 'Air conditioning + ductless',
    description:
      'New systems, repairs and upkeep for central air and ductless mini splits — for homes and businesses.',
    items: [
      { name: 'Air Conditioning', blurb: 'Installation, repair and maintenance.' },
      { name: 'Ductless Mini Splits', blurb: 'Flexible installs with efficient, room-by-room comfort control.' },
    ],
    tone: 'light',
    graphic: 'louvers',
    span: 7,
    spec: 'SYS-01 / COOLING',
  },
  {
    id: 'heating',
    number: '02',
    title: 'Heating',
    kicker: 'Repair + upkeep',
    description: 'Get the heat back on, then keep it running safely and efficiently.',
    items: [
      { name: 'Heating Repair', blurb: 'Fast, dependable repairs from experienced technicians.' },
      { name: 'Heating Maintenance', blurb: 'Regular service that keeps your system safe and efficient.' },
      { name: 'Residential HVAC Repair', blurb: 'For the home comfort system that just quit.' },
    ],
    tone: 'navy',
    graphic: 'flame',
    span: 5,
    spec: 'SYS-02 / HEATING',
  },
  {
    id: 'commercial',
    number: '03',
    title: 'Commercial',
    kicker: 'Installation + service',
    description:
      'Heating and cooling for businesses: installation, maintenance, inspection and certification, sized to the building.',
    items: [
      { name: 'Commercial HVAC Installation', blurb: 'Customized solutions for your space.' },
      { name: 'Commercial HVAC Service', blurb: 'Ongoing support after the install. Financing and free estimates available.' },
    ],
    tone: 'steel',
    graphic: 'roofline',
    span: 5,
    spec: 'SYS-03 / COMMERCIAL',
  },
  {
    id: 'emergency',
    number: '04',
    title: 'Emergency',
    kicker: 'Available 24/7',
    description: 'Heating or cooling down? Rapid response and full repairs, day or night.',
    items: [{ name: 'Emergency HVAC Repair', blurb: 'Rapid response and comprehensive repairs.' }],
    tone: 'charcoal',
    graphic: 'pulse',
    span: 7,
    spec: 'SYS-04 / EMERGENCY',
  },
  {
    id: 'airflow',
    number: '05',
    title: 'Airflow & Infrastructure',
    kicker: 'Ductwork + gas lines',
    description: 'The parts you don’t see decide how well the parts you do see perform.',
    items: [
      { name: 'Ductwork', blurb: 'Custom installation for better comfort and improved indoor air quality.' },
      { name: 'Gas Line Installation', blurb: 'Installed with safety and efficiency first.' },
    ],
    tone: 'paper',
    graphic: 'duct',
    span: 6,
    spec: 'SYS-05 / AIRFLOW',
  },
  {
    id: 'care',
    number: '06',
    title: 'System Care',
    kicker: 'Maintenance + planning',
    description:
      'A maintenance visit covers inspection, cleaning, tune-ups and recommendations to keep the system running efficiently.',
    items: [
      { name: 'HVAC Maintenance Agreement', blurb: 'Scheduled care instead of surprise breakdowns.' },
      { name: 'HVAC Tune-Up', blurb: 'Keep the system running the way it should.' },
      { name: 'HVAC Inspection', blurb: 'A clear look at what’s working and what isn’t.' },
      { name: 'HVAC System Design', blurb: 'The right system, planned before it’s installed.' },
    ],
    tone: 'light',
    graphic: 'gauge',
    span: 6,
    spec: 'SYS-06 / CARE',
  },
]
