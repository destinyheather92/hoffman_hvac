import type { Graphic, ServiceGroup, Tone } from '../data/services'
import { ESTIMATE_HREF } from '../data/business'
import { ArrowIcon } from './Icons'
import { Reveal } from './Reveal'

const tones: Record<Tone, { bg: string; text: string; sub: string; num: string; rule: string; graphic: string; hover: string }> = {
  light: { bg: 'bg-white', text: 'text-navy-900', sub: 'text-charcoal/75', num: 'text-ember', rule: 'border-navy-900/20', graphic: 'text-navy-900/[0.09]', hover: 'group-hover:text-ember' },
  navy: { bg: 'bg-navy-900', text: 'text-white', sub: 'text-steel-300', num: 'text-orange', rule: 'border-white/20', graphic: 'text-orange/25', hover: 'group-hover:text-orange' },
  steel: { bg: 'bg-steel-100', text: 'text-navy-900', sub: 'text-navy-800/85', num: 'text-ember', rule: 'border-navy-900/25', graphic: 'text-steel/45', hover: 'group-hover:text-ember' },
  charcoal: { bg: 'bg-charcoal', text: 'text-white', sub: 'text-steel-300', num: 'text-orange', rule: 'border-white/20', graphic: 'text-orange/30', hover: 'group-hover:text-orange' },
  paper: { bg: 'bg-sand', text: 'text-navy-900', sub: 'text-charcoal/80', num: 'text-ember', rule: 'border-navy-900/25', graphic: 'text-navy-900/[0.12]', hover: 'group-hover:text-ember' },
}

const spans: Record<ServiceGroup['span'], string> = {
  5: 'lg:col-span-5',
  6: 'lg:col-span-6',
  7: 'lg:col-span-7',
}

/** Each graphic is a subtle mechanical line drawing tied to the service. */
function ServiceGraphic({ kind, className }: { kind: Graphic; className: string }) {
  const common = { className, fill: 'none', stroke: 'currentColor', strokeWidth: 2, 'aria-hidden': true, viewBox: '0 0 240 160' } as const
  switch (kind) {
    case 'louvers': // vent slats
      return (
        <svg {...common}>
          <rect x="10" y="10" width="220" height="140" />
          {[36, 56, 76, 96, 116].map((y) => (
            <path key={y} d={`M22 ${y + 10} L218 ${y - 6}`} />
          ))}
        </svg>
      )
    case 'flame': // burner / heat arcs
      return (
        <svg {...common}>
          {[0, 1, 2, 3].map((i) => (
            <path key={i} d={`M${30 + i * 50} 150 C${10 + i * 50} 110 ${50 + i * 50} 90 ${30 + i * 50} 40 C${75 + i * 50} 80 ${70 + i * 50} 120 ${30 + i * 50} 150Z`} />
          ))}
        </svg>
      )
    case 'roofline': // rooftop unit on a parapet
      return (
        <svg {...common}>
          <path d="M0 140h240M20 140V110h200v30" />
          <rect x="70" y="60" width="100" height="50" />
          <circle cx="120" cy="85" r="18" />
          <path d="M120 67v36M102 85h36M107 72l26 26M133 72l-26 26" />
          <path d="M180 60v-20h20v20" />
        </svg>
      )
    case 'pulse': // alarm / heartbeat line
      return (
        <svg {...common}>
          <path d="M0 90h60l14-46 22 96 18-70 12 20h114" />
        </svg>
      )
    case 'duct': // trunk + branches
      return (
        <svg {...common}>
          <path d="M0 60h150v-30h90M150 60v70h90M60 60v60H0M100 60v35h20" />
          <path d="M0 76h134v-30M60 76v60" />
          <rect x="200" y="14" width="30" height="32" />
          <rect x="200" y="114" width="30" height="32" />
        </svg>
      )
    case 'gauge': // dial
      return (
        <svg {...common}>
          <path d="M30 130a90 90 0 0 1 180 0" />
          {Array.from({ length: 11 }).map((_, i) => {
            const a = Math.PI + (i * Math.PI) / 10
            return <path key={i} d={`M${120 + Math.cos(a) * 90} ${130 + Math.sin(a) * 90} L${120 + Math.cos(a) * 76} ${130 + Math.sin(a) * 76}`} />
          })}
          <path d="M120 130 L166 78" />
          <circle cx="120" cy="130" r="8" />
        </svg>
      )
  }
}

export function ServiceCard({ group, index }: { group: ServiceGroup; index: number }) {
  const t = tones[group.tone]
  const isEmergency = group.id === 'emergency'
  return (
    <Reveal
      as="article"
      delay={(index % 2) * 90}
      className={`group relative flex min-h-[22rem] flex-col overflow-hidden ${t.bg} ${t.text} ${spans[group.span]} ${isEmergency ? 'border-t-4 border-orange' : ''}`}
    >
      <ServiceGraphic kind={group.graphic} className={`pointer-events-none absolute -bottom-2 -right-2 h-44 w-72 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-1 ${t.graphic}`} />

      <div className="relative flex flex-1 flex-col p-7 md:p-9">
        <div className="flex items-start justify-between">
          <span className={`font-display text-[5.5rem] font-extrabold leading-[0.8] tracking-tight ${t.num}`}>{group.number}</span>
          <span className={`label text-right !text-[0.62rem] ${t.sub}`}>{group.spec}</span>
        </div>

        <p className={`label mt-6 ${t.num}`}>{group.kicker}</p>
        <h3 className="mt-2 text-[2.6rem] md:text-[3.1rem]">{group.title}</h3>
        <p className={`mt-4 max-w-md ${t.sub}`}>{group.description}</p>

        <ul className={`m-0 mt-7 list-none p-0`}>
          {group.items.map((item) => (
            <li key={item.name} className={`border-t py-3 ${t.rule}`}>
              <span className={`flex items-baseline gap-3 font-display text-[1.35rem] font-semibold uppercase leading-tight tracking-wide transition-colors ${t.hover}`}>
                <span className="inline-block h-[3px] w-3 shrink-0 translate-y-[-3px] bg-orange transition-all duration-200 group-hover:w-5" aria-hidden="true" />
                {item.name}
              </span>
              <span className={`mt-1 block pl-6 text-[0.95rem] leading-snug ${t.sub}`}>{item.blurb}</span>
            </li>
          ))}
        </ul>

        <a
          href={isEmergency ? '#emergency' : ESTIMATE_HREF}
          className={`link-line mt-auto flex w-fit items-center gap-2 pt-7 font-display text-lg font-bold uppercase tracking-wider ${t.num}`}
        >
          {isEmergency ? 'Emergency details' : `Estimate for ${group.title.toLowerCase()}`} <ArrowIcon width={16} height={16} />
        </a>
      </div>
    </Reveal>
  )
}
