import { useFadeIn } from '../hooks/useFadeIn'

const horizons = [
  {
    label: 'Now (2026)',
    title: 'Inspire, educate, facilitate',
    items: ['Programs for talents, schools, govs, corps', 'PH100 recognition list', 'Stellar Spark media & Academy', 'Cebu-based with growing regional footprint'],
  },
  {
    label: 'Near term (2027–2028)',
    title: 'Ecosystem infrastructure layer',
    items: ['Nationwide acceleration network (5+ regions)', 'StellarPH Ventures — direct seed fund', 'Digital platform: founder OS (tools + community)', 'PH100 alumni network as deal flow source'],
  },
  {
    label: 'Long term (2029–2030)',
    title: 'Southeast Asia\'s founder platform',
    items: ['Cross-border soft landing (SG, ID, VN)', 'StellarPH University — accredited online programs', 'Ecosystem data layer — real-time PH startup map', 'Lighthouse fund: PH startups entering global markets'],
  },
]

const bets = [
  { name: 'AI-powered Academy', desc: 'Personalized learning paths for founders using AI tools to accelerate the Spark → Validate → Build cycle.' },
  { name: 'Decentralized ecosystem hubs', desc: 'Physical or hybrid co-working nodes in Davao, Iloilo, Cagayan de Oro — connecting provincial talent to Cebu and Manila networks.' },
  { name: 'PH100 as a talent marketplace', desc: 'Leverage the alumni network as a curated hiring and co-founder pipeline for corporations and early-stage startups.' },
  { name: 'Prison & community programs at scale', desc: 'Scaling to underserved communities (rural, PWD, LGBTQ+ founders) would align with the Inclusive Ecosystem vision.' },
]

export function Future() {
  const ref = useFadeIn()

  return (
    <section className="section" id="future" aria-labelledby="future-title" ref={ref}>
      <div className="glow-tl" aria-hidden="true" />

      <div className="fade-in">
        <div className="eyebrow">Days 1–2 Deliverable · Future Concept</div>
        <h2 className="sec-title" id="future-title">
          StellarPH 2030 — the founder's operating system for the Philippines
        </h2>
        <p className="sec-sub">
          A concept for how StellarPH could evolve over the next four years, moving from
          a program-based enabler to a full-stack platform powering the Philippine startup
          ecosystem at every stage.
        </p>
      </div>

      <div className="future-grid fade-in">
        {horizons.map((h) => (
          <div className="fut-card" key={h.label}>
            <div className="fut-horizon">{h.label}</div>
            <div className="fut-title">{h.title}</div>
            <ul className="fut-items">
              {h.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="fade-in">
        <p className="sec-label" style={{ marginBottom: 16 }}>Strategic bets worth watching</p>
        <div className="bets-grid">
          {bets.map((b) => (
            <div className="bet-card" key={b.name}>
              <div className="bet-aud">Opportunity</div>
              <div className="bet-name">{b.name}</div>
              <p className="bet-desc">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="pitch-card">
          <div className="pitch-label">One-line future pitch</div>
          <p className="pitch-text">
            "By 2030, StellarPH is the operating system for building a startup in the
            Philippines — the place every founder goes to learn, connect, raise, and grow,
            from Batanes to Tawi-Tawi."
          </p>
        </div>
      </div>
    </section>
  )
}
