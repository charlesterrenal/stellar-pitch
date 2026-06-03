import { useFadeIn } from '../hooks/useFadeIn'

type TagVariant = 'stellar' | 'gov' | 'vc' | undefined

interface EcoCategory {
  cat: string
  tags: { label: string; variant?: TagVariant }[]
}

const categories: EcoCategory[] = [
  {
    cat: 'Ecosystem builders & enablers',
    tags: [
      { label: 'StellarPH', variant: 'stellar' },
      { label: 'QBO Innovation Hub' },
      { label: 'TechShake' },
      { label: 'Startup Village' },
    ],
  },
  {
    cat: 'Incubators & accelerators',
    tags: [
      { label: 'StellarPH Accelerator', variant: 'stellar' },
      { label: 'Ideaspace Foundation' },
      { label: 'Founder Institute PH' },
      { label: 'AIM-Dado Banatao Incubator' },
      { label: 'Plug and Play PH' },
      { label: 'Launchgarage' },
      { label: 'Brainsparks' },
      { label: 'Impact Hub' },
      { label: 'xchange' },
    ],
  },
  {
    cat: 'Venture builders',
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
    cat: 'Seed & venture capital',
    tags: [
      { label: 'Kaya Founders', variant: 'vc' },
      { label: 'Foxmont Capital Partners', variant: 'vc' },
      { label: 'Kickstart Ventures', variant: 'vc' },
      { label: 'Gobi Partners', variant: 'vc' },
      { label: 'Quest Ventures', variant: 'vc' },
      { label: 'Buko Ventures', variant: 'vc' },
      { label: 'Ignite Impact Fund', variant: 'vc' },
      { label: 'Founders Launchpad', variant: 'vc' },
      { label: 'Endeavor Philippines', variant: 'vc' },
    ],
  },
  {
    cat: 'Later-stage capital',
    tags: [
      { label: 'Gentree Fund' },
      { label: 'Narra Venture Capital' },
      { label: 'ICCP SBI Venture Partners' },
      { label: 'Navegar' },
    ],
  },
  {
    cat: 'Government & policy enablers',
    tags: [
      { label: 'DTI', variant: 'gov' },
      { label: 'DICT', variant: 'gov' },
      { label: 'DOST', variant: 'gov' },
      { label: 'TESDA', variant: 'gov' },
      { label: 'National Innovation Council', variant: 'gov' },
      { label: 'SB Corp', variant: 'gov' },
      { label: 'NDC', variant: 'gov' },
      { label: 'NEDA', variant: 'gov' },
    ],
  },
  {
    cat: 'University TBIs',
    tags: [
      { label: 'UPSCALE (UP Diliman)' },
      { label: 'Animo Labs (DLSU)' },
      { label: 'UP Cebu inIT' },
      { label: 'Wildcat Innovation Labs (CIT-U)' },
      { label: 'Navigatu (Caraga State)' },
      { label: 'Smart City TBI' },
      { label: 'PITBI (Palawan)' },
      { label: 'Benguet State TBI' },
    ],
  },
  {
    cat: 'Co-working spaces',
    tags: [
      { label: 'Common Ground' },
      { label: 'KMC' },
      { label: 'WeWork PH' },
      { label: 'Impact Hub Manila' },
      { label: 'enspace Cebu' },
      { label: 'The Company Cebu' },
    ],
  },
  {
    cat: 'Events, awards & competitions',
    tags: [
      { label: 'Stellar Island Retreat', variant: 'stellar' },
      { label: 'Soft Landing Bootcamp', variant: 'stellar' },
      { label: 'Safe Space Pitch Event', variant: 'stellar' },
      { label: 'PH Startup Week' },
      { label: 'Geeks on a Beach (GOAB)' },
      { label: 'Filipinnovation' },
      { label: 'Techstars Startup Weekend' },
      { label: 'She Loves Tech PH' },
      { label: 'KMC Startup Awards' },
    ],
  },
  {
    cat: 'Media & startup community',
    tags: [
      { label: 'StellarPH Community', variant: 'stellar' },
      { label: 'StartupnewsPH' },
      { label: 'BackScoop' },
      { label: 'e27' },
      { label: 'The Business Manual' },
      { label: 'Sinigang Valley' },
      { label: 'BusinessWorld' },
    ],
  },
]

export function Ecosystem() {
  const ref = useFadeIn()

  return (
    <section className="section" id="ecosystem" aria-labelledby="ecosystem-title" ref={ref}>
      <div className="glow-tl" aria-hidden="true" />

      <div className="fade-in">
        <div className="eyebrow">Days 1–2 Deliverable · Philippine Startup Ecosystem</div>
        <h2 className="sec-title" id="ecosystem-title">The Philippine startup ecosystem</h2>
        <p className="sec-sub">
          A map of the key players, organizations, and support structures that make up
          the PH startup landscape — with StellarPH's position at the center.
        </p>
      </div>

      <div className="fade-in">
        {categories.map((cat) => (
          <div className="eco-row" key={cat.cat}>
            <div className="eco-cat">{cat.cat}</div>
            <div className="eco-tags">
              {cat.tags.map((t) => (
                <span className={['tag', t.variant].filter(Boolean).join(' ')} key={t.label}>
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="eco-note">
          <div className="info-label">StellarPH's position in the ecosystem</div>
          <div className="info-val" style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-2)' }}>
            StellarPH operates across multiple layers — as an enabler, accelerator, event organizer,
            media producer (Stellar Spark radio), and education partner. It is uniquely positioned to
            connect the talent pipeline (schools) with the capital pipeline (VC/gov) and the community
            layer, making it the <em>connective tissue</em> across the entire ecosystem.
          </div>
        </div>
      </div>
    </section>
  )
}
