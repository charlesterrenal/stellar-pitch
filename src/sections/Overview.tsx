import { useFadeIn } from '../hooks/useFadeIn'

const stats = [
  { num: '1.5M',   lbl: 'Filipinos reached' },
  { num: '75+',    lbl: 'Startups coached'   },
  { num: '2,453',  lbl: 'Students trained'   },
  { num: '1,105+', lbl: 'Community members'  },
]

const pillars = [
  { icon: '01', title: 'Inspire',    body: 'Empower aspiring founders to take the leap.' },
  { icon: '02', title: 'Educate',    body: 'Build practical skills from idea to scale.' },
  { icon: '03', title: 'Facilitate', body: 'Connect people, resources, and capital.' },
]

export function Overview() {
  const ref = useFadeIn()

  return (
    <section className="section" id="overview" ref={ref}>
      <div className="fade-in">
        <div className="hero-tag">
          <div className="pulse" aria-hidden="true" />
          StellarPH Introduction
        </div>

        <h1 className="hero-title">
          Inspiring the next generation of<br />
          <span className="gradient-text">Filipino founders</span>
        </h1>

        <p className="hero-sub">
          A Cebu-based startup enabler removing barriers through
          mentorship, education, and community.
        </p>
      </div>

      <div className="stat-strip fade-in">
        {stats.map((s) => (
          <div className="stat-cell" key={s.lbl}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-lbl">{s.lbl}</div>
          </div>
        ))}
      </div>

      <div className="fade-in">
        <div className="sec-label">Three pillars</div>
        <div className="pillars-grid">
          {pillars.map((p) => (
            <div className="card" key={p.title}>
              <span className="pillar-icon" aria-hidden="true">{p.icon}</span>
              <div className="pillar-title">{p.title}</div>
              <p className="pillar-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="fade-in">
        <div className="info-row">
          <div className="card-sm">
            <div className="info-label">Headquarters</div>
            <div className="info-val">Cebu, Philippines</div>
          </div>
          <div className="card-sm">
            <div className="info-label">Co-founders</div>
            <div className="info-val">Pjotr Steinmetz &middot; Tino Zwirs &middot; Xavier Marzan</div>
          </div>
          <div className="card-sm">
            <div className="info-label">Flagship</div>
            <div className="info-val">PH100 &mdash; top 100 Filipino minds under 30</div>
          </div>
          <div className="card-sm">
            <div className="info-label">Gov. partners</div>
            <div className="info-val">DICT &middot; DTI &middot; DOST &middot; TESDA</div>
          </div>
        </div>

        <div className="vision-card">
          <div className="info-label">Vision</div>
          <div className="info-val">
            &ldquo;A founder-first, inclusive, decentralized ecosystem with opportunities
            across provinces &mdash; not just Metro Manila.&rdquo;
          </div>
        </div>
      </div>
    </section>
  )
}
