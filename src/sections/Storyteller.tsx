import { useState, useEffect, useMemo, useRef } from 'react'
import { fetchTimelineData, fetchEcosystemData } from '../services/airtable'
import type { TimelineMilestone } from '../services/airtable'
import type { EcosystemEntity } from '../data/ecosystemDetails'
import { ecosystemDetails } from '../data/ecosystemDetails'
import { Modal } from '../components/Modal'
import { useFadeIn } from '../hooks/useFadeIn'

type TagVariant = 'stellar' | 'gov' | 'vc' | undefined

interface EcoGroup {
  title: string
  tags: { label: string; variant?: TagVariant }[]
}

const hardcodedGroups: EcoGroup[] = [
  {
    title: 'Enablers & Accelerators',
    tags: [
      { label: 'StellarPH', variant: 'stellar' },
      { label: 'StellarPH Accelerator', variant: 'stellar' },
      { label: 'QBO Innovation Hub' },
      { label: 'TechShake' },
      { label: 'Ideaspace' },
      { label: 'Founder Institute PH' },
      { label: 'Plug and Play PH' },
      { label: 'Brainsparks' },
    ],
  },
  {
    title: 'Venture Builders',
    tags: [
      { label: '917Ventures' },
      { label: 'Talino Venture Studios' },
      { label: 'Pulse63' },
      { label: 'AHG Lab' },
      { label: 'Embiggen Ventures' },
      { label: 'Machine Ventures' },
    ],
  },
  {
    title: 'Investors',
    tags: [
      { label: 'Kaya Founders', variant: 'vc' },
      { label: 'Foxmont Capital', variant: 'vc' },
      { label: 'Kickstart Ventures', variant: 'vc' },
      { label: 'Gobi Partners', variant: 'vc' },
      { label: 'Quest Ventures', variant: 'vc' },
      { label: 'Buko Ventures', variant: 'vc' },
      { label: 'Gentree Fund', variant: 'vc' },
      { label: 'Narra VC', variant: 'vc' },
      { label: 'Endeavor PH', variant: 'vc' },
    ],
  },
  {
    title: 'Government',
    tags: [
      { label: 'DTI', variant: 'gov' },
      { label: 'DICT', variant: 'gov' },
      { label: 'DOST', variant: 'gov' },
      { label: 'TESDA', variant: 'gov' },
      { label: 'National Innovation Council', variant: 'gov' },
      { label: 'SB Corp', variant: 'gov' },
    ],
  },
  {
    title: 'Universities & Spaces',
    tags: [
      { label: 'UPSCALE (UP Diliman)' },
      { label: 'Animo Labs (DLSU)' },
      { label: 'Wildcat Labs (CIT-U)' },
      { label: 'KMC' },
      { label: 'Impact Hub Manila' },
      { label: 'enspace Cebu' },
    ],
  },
  {
    title: 'Events, Awards & Competitions',
    tags: [
      { label: 'Filipinnovation' },
      { label: 'PH Startup Week' },
      { label: 'Slingshot' },
      { label: 'Geeks on a Beach' },
      { label: 'IGNITE' },
      { label: 'Techstars Startup Weekend' },
      { label: 'She Loves Tech' },
      { label: 'KMC Startup Awards' },
      { label: 'e27' },
    ],
  },
  {
    title: 'Startup Communities, Media & Resources',
    tags: [
      { label: 'StellarPH Community', variant: 'stellar' },
      { label: 'StartupnewsPH' },
      { label: 'Sinigang Valley' },
      { label: 'Rappler' },
      { label: 'Philippine Daily Inquirer' },
      { label: 'Esquire Philippines' },
      { label: 'GMA News' },
    ],
  },
]

export function Storyteller() {
  const [milestones, setMilestones] = useState<TimelineMilestone[]>([])
  const [airtableData, setAirtableData] = useState<Record<string, EcosystemEntity>>({})
  const [activeDate, setActiveDate] = useState<string | null>(null)
  const [activeMode, setActiveMode] = useState<'timeline' | 'map' | null>(null)
  const [hasSelectedMode, setHasSelectedMode] = useState(false)
  
  // Modal State
  const [selectedEntity, setSelectedEntity] = useState<EcosystemEntity | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  
  const timelineRef = useRef<HTMLDivElement>(null)
  const fadeRef = useFadeIn()

  useEffect(() => {
    async function loadData() {
      setIsLoading(true)
      const [tlData, ecoData] = await Promise.all([
        fetchTimelineData(),
        fetchEcosystemData()
      ])
      
      // Fallback timeline data if empty — sort chronologically by date
      const sorted = tlData.slice().sort((a, b) => {
        // Custom parser to handle 'Early 2020s'
        const parseDate = (d: string) => {
          if (d.toLowerCase().includes('early 2020')) return new Date('2020-01-01').getTime()
          return new Date(d).getTime()
        }
        const da = parseDate(a.date) || 0
        const db = parseDate(b.date) || 0
        return da - db
      })
      setMilestones(sorted.length > 0 ? sorted : [])
      setAirtableData(ecoData)
      setIsLoading(false)
    }
    loadData()
  }, [])

  // Reset to hero mode when scrolled to absolute top (no longer applies since body can't scroll, but kept as a fallback)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setHasSelectedMode(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body and html scroll for the landscape page
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    return () => { 
      document.body.style.overflow = '' 
      document.documentElement.style.overflow = '' 
    }
  }, [])

  // Setup Intersection Observer for the timeline cards
  useEffect(() => {
    if (!timelineRef.current || milestones.length === 0 || !hasSelectedMode || activeMode !== 'timeline') return;

    // Delay to ensure cards are fully rendered in DOM
    const timer = setTimeout(() => {
      const container = timelineRef.current
      if (!container) return

      // Active date observer — fires when card hits the center of the container
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const date = entry.target.getAttribute('data-date')
            setActiveDate(date)
          }
        })
      }, {
        root: container,
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0
      })

      // Reveal animation observer
      const visObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            visObserver.unobserve(e.target)
          }
        })
      }, { root: container, threshold: 0 })

      const cards = container.querySelectorAll('.st-timeline-item')
      cards.forEach(card => {
        observer.observe(card)
        visObserver.observe(card)
      })

      return () => {
        observer.disconnect()
        visObserver.disconnect()
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [milestones, hasSelectedMode, activeMode])

  // Process Ecosystem Data
  const displayGroups = useMemo(() => {
    const newGroups = hardcodedGroups.map(g => ({ ...g, tags: [...g.tags] }));

    Object.values(airtableData).forEach(entity => {
      const cat = entity.category || 'Other';
      let group = newGroups.find(g => g.title === cat);
      
      if (!group) {
        group = { title: cat, tags: [] };
        newGroups.push(group);
      }

      if (!group.tags.some(t => t.label === entity.name)) {
        group.tags.push({ label: entity.name });
      }
    });

    return newGroups;
  }, [airtableData]);

  // Handle Map interactions
  const handleTagClick = (label: string) => {
    const details = airtableData[label] || ecosystemDetails[label]
    if (details) {
      setSelectedEntity(details)
    } else {
      setSelectedEntity({
        name: label,
        location: 'Coming Soon',
        category: 'TBD',
        role: 'Details are being updated.',
        whatTheyDo: 'More information will be added soon.',
        focusArea: 'N/A',
        programs: 'N/A',
        lifecycleStage: 'N/A'
      })
    }
  }

  return (
    <div className="storyteller-page" ref={fadeRef}>

      <div className={`st-focus-controls ${!hasSelectedMode ? 'hero-mode' : ''}`}>
        <div className="st-focus-center">
          <button 
            className={`st-focus-btn st-btn-entrance ${activeMode === 'timeline' ? 'active' : ''}`}
            style={{ animationDelay: '0.05s' }}
            onClick={() => {
              setHasSelectedMode(true)
              setActiveMode('timeline')
              setActiveDate(null)
            }}
          >
            Timeline Story
          </button>
          <button 
            className={`st-focus-btn st-btn-entrance ${activeMode === 'map' ? 'active' : ''}`}
            style={{ animationDelay: '0.18s' }}
            onClick={() => {
              setHasSelectedMode(true)
              setActiveMode('map')
              setActiveDate(null)
            }}
          >
            Ecosystem Map
          </button>
        </div>
      </div>

      {hasSelectedMode && (
        <section className="st-wrapper st-animate-in" key={activeMode} id="storyteller">
        
        {/* LEFT SIDE: Timeline Story — only rendered when active */}
        {activeMode === 'timeline' && (
        <div className="st-left st-focused" ref={timelineRef}>
        <div className="st-intro">
          <div className="eyebrow">The Journey</div>
          <h2 className="sec-title">Enabling the Ecosystem</h2>
          <p className="sec-sub">
            Scroll down to see how StellarPH evolved and the startups that grew alongside us.
          </p>
        </div>

        <div className="st-timeline-list">
          {milestones.map((m, idx) => {
            const isActive = activeDate === m.date
            const isLast = idx === milestones.length - 1
            return (
              <div 
                className={`st-timeline-item ${isActive ? 'active' : ''}`}
                key={idx}
                data-date={m.date}
              >
                {/* Dot + vertical connector */}
                <div className="st-timeline-stem">
                  <div className="st-date">{m.date}</div>
                  <div className={`st-timeline-dot ${isActive ? 'active' : ''}`} />
                  {!isLast && <div className="st-timeline-connector" />}
                </div>
                {/* Card content */}
                <div className={`st-timeline-card ${isActive ? 'active' : ''}`}>
                  {m.isNow && <div className="st-badge">● Now</div>}
                  <div className="st-event">{m.event}</div>
                  <div className="st-desc">{m.desc}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
        )}

        {/* RIGHT SIDE: Ecosystem Map — only rendered when active */}
        {activeMode === 'map' && (
        <div className="st-right st-focused">
        <div className="st-map-sticky">
          <div className="st-map-header">
            <div className="eyebrow">The Landscape</div>
            <h3>Ecosystem Map</h3>
            <p className="sec-sub" style={{ marginBottom: '16px', maxWidth: '400px' }}>
              Explore the key players and partners active in the PH startup ecosystem during this era.
            </p>
            {isLoading && <span className="st-loading">Syncing data...</span>}
            {!isLoading && activeDate && <span className="st-active-date">Showing era: {activeDate}</span>}
          </div>

          <div className="st-eco-grid">
            {displayGroups.map((g) => {
              // Check if any tag in this group matches the active milestone date
              // If activeDate is null, everything is active.
              let groupHasActiveEntity = false;

              const renderedTags = g.tags.map((t) => {
                const details = airtableData[t.label] || ecosystemDetails[t.label]
                const isEntityActive = !activeDate || (details?.milestoneDate === activeDate)
                if (isEntityActive) groupHasActiveEntity = true;

                return (
                  <span 
                    className={`tag ${t.variant || ''} clickable ${!isEntityActive && activeDate ? 'dimmed' : 'highlighted'}`} 
                    key={t.label}
                    onClick={() => handleTagClick(t.label)}
                  >
                    {t.label}
                  </span>
                )
              })

              // If the group has NO active entities and we have an active date, dim the whole card
              const isGroupDimmed = activeDate && !groupHasActiveEntity;

              return (
                <div className={`card st-eco-card ${isGroupDimmed ? 'st-faded' : ''}`} key={g.title}>
                  <div className="eco-card-title">{g.title}</div>
                  <div className="eco-tags">
                    {renderedTags}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        </div>
        )}

        {/* Modal for Details */}
      <Modal isOpen={!!selectedEntity} onClose={() => setSelectedEntity(null)}>
        {selectedEntity && (
          <div className="entity-details">
            <div className="entity-header">
              {selectedEntity.logo && (
                <img src={selectedEntity.logo} alt={selectedEntity.name} className="entity-logo" />
              )}
              <div className="entity-title-group">
                <h3 className="modal-title">{selectedEntity.name}</h3>
                <span className="entity-location">{selectedEntity.location}</span>
              </div>
            </div>
            <p><strong>Category:</strong> {selectedEntity.category}</p>
            <p><strong>Role in ecosystem:</strong> {selectedEntity.role}</p>
            <p><strong>What they do:</strong> {selectedEntity.whatTheyDo}</p>
            <p><strong>Focus area:</strong> {selectedEntity.focusArea}</p>
            <p><strong>Programs:</strong> {selectedEntity.programs}</p>
            <p><strong>Lifecycle stage:</strong> {selectedEntity.lifecycleStage}</p>
          </div>
        )}
      </Modal>
      </section>
      )}
    </div>
  )
}
