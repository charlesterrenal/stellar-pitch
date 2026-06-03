import { useFadeIn } from '../hooks/useFadeIn'

const horizons = [
  {
    label: 'Now (2026)',
    title: 'Inspire, educate, facilitate',
    items: ['Programs for talents, schools, gov, corps', 'PH100 recognition list', 'Stellar Spark media & Academy', 'Cebu-based, growing regionally'],
  },
  {
    label: '2027\u20132028',
    title: 'Ecosystem infrastructure',
    items: ['Nationwide acceleration (5+ regions)', 'StellarPH Ventures seed fund', 'Digital founder OS platform', 'PH100 alumni as deal flow'],
  },
  {
    label: '2029\u20132030',
    title: "SE Asia's founder platform",
    items: ['Cross-border soft landing (SG, ID, VN)', 'StellarPH University online', 'Real-time PH startup data layer', 'Lighthouse fund for global expansion'],
  },
]

const bets = [
  { name: 'AI-powered Academy',         desc: 'Personalized founder learning paths.' },
  { name: 'Decentralized hubs',          desc: 'Davao, Iloilo, CDO co-working nodes.' },
  { name: 'PH100 talent marketplace',    desc: 'Curated hiring & co-founder pipeline.' },
  { name: 'Inclusive community programs', desc: 'Rural, PWD, LGBTQ+ founders at scale.' },
]

export function Future() {
  const ref = useFadeIn()

  return (
    <section className="section" id="future" ref={ref}>
      <div className="fade-in">
        <div className="eyebrow">Future Concept</div>
        <h2 className="sec-title">
          StellarPH 2030
        </h2>
        <p className="sec-sub">
          From program-based enabler to the founder operating system for the Philippines.
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
        <div className="sec-label">Strategic bets</div>
        <div className="bets-grid">
          {bets.map((b) => (
            <div className="bet-card" key={b.name}>
              <div className="bet-name">{b.name}</div>
              <p className="bet-desc">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="pitch-card">
          <div className="pitch-label">One-line pitch</div>
          <p className="pitch-text">
            &ldquo;By 2030, StellarPH is the operating system for building a startup
            in the Philippines &mdash; from Batanes to Tawi-Tawi.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
