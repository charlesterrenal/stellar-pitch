import { useFadeIn } from '../hooks/useFadeIn'

const pillars = [
  {
    icon: '\u2726',
    title: 'Inspire',
    body: "Show what's possible so aspiring founders feel empowered to start and scale their own ventures.",
  },
  {
    icon: '\u25c8',
    title: 'Educate',
    body: 'Provide knowledge, skills, and practical experience needed to build, support, and scale successful startups.',
  },
  {
    icon: '\u2b21',
    title: 'Facilitate',
    body: 'Connect people, resources, and opportunities — turning bold ideas into real businesses that create impact.',
  },
]

const audiences = [
  { label: 'Talents & Founders',     items: ['Aspiring entrepreneurs', 'Early-stage founders', 'Student innovators'] },
  { label: 'Schools & Universities', items: ['Faculty programs', 'Student incubators', 'Technopreneurship courses'] },
  { label: 'Private Sector',         items: ['Corporate hackathons', 'Masterclasses', 'PH100 talent track'] },
  { label: 'Government',             items: ['Policy co-creation', 'Innovation summits', 'Regional acceleration'] },
]

const stats = [
  { num: '1.5M',   lbl: 'Filipinos reached'  },
  { num: '75+',    lbl: 'Startups coached'    },
  { num: '2,453',  lbl: 'Students trained'    },
  { num: '1,105+', lbl: 'Community members'   },
]

export function Overview() {
  const ref = useFadeIn()

  return (
    <section className="section" id="overview" aria-labelledby="overview-title" ref={ref}>
      <div className="hero-bg-glow" aria-hidden="true" />

      <div className="fade-in">
        <div className="hero-tag">
          <div className="pulse" aria-hidden="true" />
          Days 1&ndash;2 Deliverable &middot; StellarPH Introduction
        </div>

        <h1 className="hero-title" id="overview-title">
          Inspiring the next generation of<br />
          <span className="gradient-text">Filipino founders</span>
        </h1>

        <p className="hero-sub">
          StellarPH is a startup enabler based in Cebu, dedicated to removing barriers
          for entrepreneurs through mentorship, education, and community &mdash; from first
          idea to global scale.
        </p>
      </div>

      <div className="stat-strip fade-in" role="list" aria-label="Key statistics">
        {stats.map((s) => (
          <div className="stat-cell" key={s.lbl} role="listitem">
            <div className="stat-num">{s.num}</div>
            <div className="stat-lbl">{s.lbl}</div>
          </div>
        ))}
      </div>

      <div className="fade-in">
        <p className="sec-label">The three pillars</p>
        <div className="pillars-grid">
          {pillars.map((p) => (
            <div className="pillar-card" key={p.title}>
              <span className="pillar-icon" aria-hidden="true">{p.icon}</span>
              <div className="pillar-title">{p.title}</div>
              <p className="pillar-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="fade-in">
        <p className="sec-label">Who StellarPH serves</p>
        <div className="aud-grid">
          {audiences.map((a) => (
            <div className="aud-card" key={a.label}>
              <div className="aud-label">{a.label}</div>
              <div className="aud-items">
                {a.items.map((item, i) => (
                  <span key={i}>{item}<br /></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fade-in">
        <div className="info-grid">
          <div className="info-card">
            <div className="info-label">Headquarters</div>
            <div className="info-val">Cebu, Philippines &mdash; with regional programs nationwide</div>
          </div>
          <div className="info-card">
            <div className="info-label">Co-founders</div>
            <div className="info-val">Pjotr Steinmetz &middot; Tino Zwirs &middot; Xavier Marzan (ex-CEO, GCash)</div>
          </div>
        </div>
        <div className="info-grid">
          <div className="info-card">
            <div className="info-label">Flagship program</div>
            <div className="info-val">PH100 &mdash; annual list spotlighting 100 brightest Filipino minds under 30</div>
          </div>
          <div className="info-card">
            <div className="info-label">Key government partners</div>
            <div className="info-val">DICT &middot; DepEd &middot; DTI &middot; DOST &middot; DOHE &middot; TESDA</div>
          </div>
        </div>
        <div className="vision-card">
          <div className="info-label">Vision</div>
          <div className="info-val">
            &ldquo;A Philippine startup ecosystem that is founder-first, inclusive, decentralized,
            rooted in local context, and globally aware &mdash; with opportunities across provinces,
            not just Metro Manila.&rdquo;
          </div>
        </div>
      </div>
    </section>
  )
}
