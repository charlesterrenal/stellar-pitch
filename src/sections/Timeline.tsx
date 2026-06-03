import { useFadeIn } from '../hooks/useFadeIn'

interface Milestone {
  date: string
  event: string
  desc: string
  isNow?: boolean
}

const milestones: Milestone[] = [
  { date: 'Early 2020s', event: 'StellarPH founded in Cebu',            desc: 'Workshops and community events for Filipino entrepreneurs.' },
  { date: 'Jun 2024',    event: 'Academy & BMC series launches',        desc: 'Free educational content for founders goes live.' },
  { date: 'Aug 2024',    event: 'Xavier Marzan joins as co-founder',    desc: 'Former CEO of GCash strengthens the leadership bench.' },
  { date: 'Oct 2024',    event: 'PH100 announced for the first time',   desc: '100 brightest Filipino minds under 30, recognized.' },
  { date: 'Apr 2025',    event: 'Partnership with Foxmont Capital',     desc: 'Co-authored view of the PH startup scene.' },
  { date: 'May 2025',    event: 'PH100 2025 applications open',        desc: 'Expanding nationwide beyond Cebu.' },
  { date: 'Aug 2025',    event: 'MOA signed with DOST Region VII',     desc: 'Government partnership formalized.' },
  { date: 'Sep 2025',    event: 'PH100 2025 class announced',          desc: 'Second cohort officially recognized.' },
  { date: 'Oct 2025',    event: 'Island Retreat & Stellar Spark Radio', desc: 'Flagship retreat + weekly podcast launch.' },
  { date: 'Nov 2025',    event: 'GOAB & Soft Landing Bootcamp',        desc: 'Regional acceleration across Filipino cities.' },
  { date: 'Feb 2026',    event: 'Fundraising content series',           desc: 'Academy becomes a top PH founder resource.' },
  { date: 'May 2026',    event: 'Safe Space Pitch Event',              desc: 'Ecosystem spotlights with KMC & 917Ventures.' },
  { date: 'Jun 2026',    event: 'PH100 2026 applications open',        desc: 'Third edition with strongest backing yet.', isNow: true },
]

export function Timeline() {
  const ref = useFadeIn()

  return (
    <section className="section" id="timeline" ref={ref}>
      <div className="fade-in">
        <div className="eyebrow">Visual Timeline</div>
        <h2 className="sec-title">From founding to future</h2>
        <p className="sec-sub">
          Key milestones that shaped StellarPH.
        </p>
      </div>

      <div className="timeline-wrap fade-in">
        {milestones.map((m) => (
          <div className="tl-item" key={m.date}>
            <div className={['tl-dot', m.isNow ? 'now' : ''].filter(Boolean).join(' ')} />
            {m.isNow && <div className="tl-now-badge">● Now</div>}
            <div className="tl-date">{m.date}</div>
            <div className="tl-event">{m.event}</div>
            <p className="tl-desc">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
