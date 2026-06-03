import { useFadeIn } from '../hooks/useFadeIn'

interface Milestone {
  date: string
  event: string
  desc: string
  isNow?: boolean
}

const milestones: Milestone[] = [
  { date: 'Early 2020s', event: 'StellarPH founded in Cebu', desc: 'Pjotr Steinmetz and Tino Zwirs establish StellarPH to bridge the gap for Filipino entrepreneurs, starting with workshops and community events in Cebu.' },
  { date: 'Jun 2024', event: 'Academy content and Business Model Canvas series launches', desc: 'StellarPH begins publishing free educational articles for founders. The Academy framework — Spark, Validate, Build, Launch, Grow, Formalize, Fuel, Ready — takes shape.' },
  { date: 'Aug 2024', event: 'Xavier Marzan joins as co-founder', desc: 'Xavier, former CEO of GCash and TrueMoney, brings deep experience in building impactful businesses in the Philippines — strengthening StellarPH\'s executive bench significantly.' },
  { date: 'Oct 2024', event: 'PH100 list announced for the first time', desc: 'StellarPH launches its flagship recognition program, spotlighting 100 of the Philippines\' brightest young minds under 30. The list spans design, engineering, media, academia, and more.' },
  { date: 'Apr 2025', event: 'Ecosystem partnership with Foxmont Capital', desc: 'StellarPH and Foxmont Capital publish a co-authored view of the Philippine startup scene, formalizing StellarPH\'s role as an ecosystem voice alongside major investors.' },
  { date: 'May 2025', event: 'PH100 2025 applications open', desc: 'The second edition of PH100 opens nationwide applications, expanding reach beyond Cebu to recognize talent from all regions of the Philippines.' },
  { date: 'Aug 2025', event: 'MOA signed with DOST — Region VII', desc: 'StellarPH formalizes its government partnership with the Department of Science and Technology, cementing its role in the regional innovation ecosystem.' },
  { date: 'Sep 2025', event: 'PH100 2025 class of 100 announced', desc: '100 of the Philippines\' brightest young talents are officially recognized. The event becomes a high-profile fixture in the Filipino startup calendar.' },
  { date: 'Oct 2025', event: 'Stellar Island Retreat & Stellar Spark Radio', desc: 'StellarPH launches a flagship immersive retreat for founders, and introduces Stellar Spark — a weekly radio show and podcast featuring in-depth founder conversations.' },
  { date: 'Oct–Nov 2025', event: 'GOAB Conference and Soft Landing Bootcamp', desc: 'StellarPH co-anchors Geeks on a Beach (Cebu\'s premier tech conference) and runs the Soft Landing Bootcamp across Filipino cities, expanding its regional acceleration reach.' },
  { date: 'Feb 2026', event: 'Thought leadership: fundraising and startup-building content', desc: 'StellarPH publishes a series of high-impact articles on startup fundraising, establishing its Academy as a top PH founder resource.' },
  { date: 'May 2026', event: 'Safe Space Pitch Event + ecosystem stories', desc: 'StellarPH hosts its Safe Space Pitch Event and publishes ecosystem spotlights featuring KMC Solutions and 917Ventures — signaling a deeper media and community role.' },
  { date: 'June 2026', event: 'PH100 2026 applications officially open', desc: 'The third edition of PH100 is now accepting applications, with a larger profile, expanded media presence, and stronger government and corporate backing than ever before.', isNow: true },
]

export function Timeline() {
  const ref = useFadeIn()

  return (
    <section className="section" id="timeline" aria-labelledby="timeline-title" ref={ref}>
      <div className="glow-br" aria-hidden="true" />

      <div className="fade-in">
        <div className="eyebrow">Days 1–2 Deliverable · Visual Timeline</div>
        <h2 className="sec-title" id="timeline-title">StellarPH: from founding to future</h2>
        <p className="sec-sub">
          A chronological view of key milestones, program launches, and ecosystem moments
          that shaped StellarPH into what it is today.
        </p>
      </div>

      <div className="timeline-wrap fade-in" role="list" aria-label="StellarPH milestones">
        {milestones.map((m) => (
          <div className="tl-item" key={m.date} role="listitem">
            <div className={['tl-dot', m.isNow ? 'now' : ''].filter(Boolean).join(' ')} aria-hidden="true" />
            {m.isNow && <div className="tl-now-badge"><span>●</span> Now</div>}
            <div className="tl-date">{m.date}</div>
            <div className="tl-event">{m.event}</div>
            <p className="tl-desc">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
