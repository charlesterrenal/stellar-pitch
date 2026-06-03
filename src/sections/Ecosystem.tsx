import { useFadeIn } from '../hooks/useFadeIn'

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
    title: 'Events & Media',
    tags: [
      { label: 'Stellar Island Retreat', variant: 'stellar' },
      { label: 'Safe Space Pitch', variant: 'stellar' },
      { label: 'Stellar Spark Radio', variant: 'stellar' },
      { label: 'PH Startup Week' },
      { label: 'Geeks on a Beach' },
      { label: 'Techstars Startup Weekend' },
      { label: 'e27' },
      { label: 'BackScoop' },
    ],
  },
]

export function Ecosystem() {
  const ref = useFadeIn()

  return (
    <section className="section" id="ecosystem" ref={ref}>
      <div className="fade-in">
        <div className="eyebrow">Ecosystem Map</div>
        <h2 className="sec-title">The Philippine startup landscape</h2>
        <p className="sec-sub">
          Key players shaping the PH startup ecosystem &mdash; with StellarPH at the center.
        </p>
      </div>

      <div className="eco-grid fade-in">
        {groups.map((g) => (
          <div className="card" key={g.title}>
            <div className="eco-card-title">{g.title}</div>
            <div className="eco-tags">
              {g.tags.map((t) => (
                <span className={['tag', t.variant].filter(Boolean).join(' ')} key={t.label}>
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
