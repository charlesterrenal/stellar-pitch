import { useState, useEffect } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { useDraggableScroll } from '../hooks/useDraggableScroll'
import { fetchTimelineData } from '../services/airtable'
import type { TimelineMilestone } from '../services/airtable'

const staticMilestones: TimelineMilestone[] = [
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

const StartNode = () => (
  <div className="tl-start-node">
    <div className="tl-start-roots">
      <svg viewBox="0 0 100 120">
        <path d="M0,20 C40,20 60,60 100,60" />
        <path d="M0,60 C40,60 60,60 100,60" />
        <path d="M0,100 C40,100 60,60 100,60" />
      </svg>
    </div>
    <div className="tl-orb"></div>
  </div>
)

const EndNode = () => (
  <div className="tl-end-node">
    <div className="tl-end-branches">
      <svg viewBox="0 0 120 120">
        <path d="M0,60 C40,60 80,20 120,20" />
        <path d="M0,60 C50,60 80,60 120,60" />
        <path d="M0,60 C40,60 80,100 120,100" />
      </svg>
    </div>
    <div className="tl-tbc-card">
      To Be Continued<span className="cursor"></span>
    </div>
  </div>
)

export function Timeline() {
  const ref = useFadeIn()
  const scrollRef = useDraggableScroll<HTMLDivElement>()
  const [milestones, setMilestones] = useState<TimelineMilestone[]>([])
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  useEffect(() => {
    async function loadData() {
      const data = await fetchTimelineData()
      setMilestones(data.length > 0 ? data : staticMilestones)
    }
    loadData()
  }, [])

  // Show static data while loading to prevent layout shifts
  const displayMilestones = milestones.length > 0 ? milestones : staticMilestones;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' })
    }
  }

  return (
    <section className="section" id="timeline" ref={ref}>
      <div className="fade-in">
        <div className="eyebrow">Visual Timeline</div>
        <h2 className="sec-title">From founding to future</h2>
        <p className="sec-sub">
          Key milestones that shaped StellarPH. <strong>Drag, scroll, or use the arrows to explore.</strong>
        </p>
      </div>

      <div className="timeline-section-container fade-in">
        <button className="tl-nav-btn left" onClick={scrollLeft} aria-label="Scroll left">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className="tl-nav-btn right" onClick={scrollRight} aria-label="Scroll right">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <div className="timeline-horizontal-wrap" ref={scrollRef}>
          <div className="tl-track-container">
            <StartNode />

            {displayMilestones.map((m, index) => {
              const position = index % 2 === 0 ? 'top' : 'bottom'
              const isExpanded = expandedIndex === index

              return (
                <div className={`tl-item-horiz ${position}`} key={index}>
                  <div className="tl-card-container">
                    <div 
                      className={`tl-card-inner ${isExpanded ? 'expanded' : ''}`}
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    >
                      {m.isNow && <div className="tl-badge-horiz">● Now</div>}
                      <div className="tl-date-horiz">{m.date}</div>
                      <div className="tl-event-horiz">{m.event}</div>
                      <div className="tl-desc-horiz">{m.desc}</div>
                    </div>
                    <div className={['tl-dot-horiz', m.isNow ? 'now' : ''].filter(Boolean).join(' ')} />
                  </div>
                </div>
              )
            })}

            <EndNode />
          </div>
        </div>
      </div>
    </section>
  )
}
