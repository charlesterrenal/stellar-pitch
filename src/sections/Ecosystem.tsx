import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { Modal } from '../components/Modal'
import { ecosystemDetails } from '../data/ecosystemDetails'
import type { EcosystemEntity } from '../data/ecosystemDetails'

type TagVariant = 'stellar' | 'gov' | 'vc' | undefined

interface EcoGroup {
  title: string
  tags: { label: string; variant?: TagVariant }[]
}

const groups: EcoGroup[] = [
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

export function Ecosystem() {
  const ref = useFadeIn()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedEntity, setSelectedEntity] = useState<EcosystemEntity | null>(null)

  const handleCategoryClick = (title: string) => {
    setSelectedCategory(selectedCategory === title ? null : title)
  }

  const handleTagClick = (label: string) => {
    const details = ecosystemDetails[label]
    if (details) {
      setSelectedEntity(details)
    } else {
      // Fallback for tags without data
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
    <section className="section" id="ecosystem" ref={ref}>
      <div className="fade-in">
        <div className="eyebrow">Ecosystem Map</div>
        <h2 className="sec-title">The Philippine startup landscape</h2>
        <p className="sec-sub">
          Key players shaping the PH startup ecosystem &mdash; click on a category to filter, or a company to view details.
        </p>
      </div>

      <div className="eco-grid fade-in">
        {groups.map((g) => {
          const isFaded = selectedCategory && selectedCategory !== g.title
          
          return (
            <div 
              className={`card ${isFaded ? 'eco-faded' : ''}`} 
              key={g.title} 
            >
              <div 
                className="eco-card-title" 
                onClick={() => handleCategoryClick(g.title)}
                style={{ cursor: 'pointer', transition: 'color 0.2s ease' }}
                title="Click to filter by this category"
              >
                {g.title} {selectedCategory === g.title ? '×' : ''}
              </div>
              <div className="eco-tags">
                {g.tags.map((t) => (
                  <span 
                    className={['tag', t.variant, 'clickable'].filter(Boolean).join(' ')} 
                    key={t.label}
                    onClick={() => handleTagClick(t.label)}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <Modal 
        isOpen={!!selectedEntity} 
        onClose={() => setSelectedEntity(null)} 
      >
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
  )
}
