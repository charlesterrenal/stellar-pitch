import { useFadeIn } from '../hooks/useFadeIn'

const stats = [
  { num: '1.5M',   lbl: 'Filipinos reached' },
  { num: '75+',    lbl: 'Startups coached'   },
  { num: '2,453',  lbl: 'Students trained'   },
  { num: '1,105+', lbl: 'Community members'  },
]

const pillars = [
  { title: 'Navigate', body: 'Discover VCs, accelerators, and government grants.' },
  { title: 'Accelerate', body: 'Build practical skills from idea to scale with our playbooks.' },
  { title: 'Connect', body: 'Join a decentralized network of founders across the Philippines.' },
]

export function Overview() {
  const ref = useFadeIn()

  return (
    <section className="section" id="overview" ref={ref}>
      <div className="fade-in">
        <div className="hero-tag">
          <div className="pulse" aria-hidden="true" />
          Welcome, Founder
        </div>

        <h1 className="hero-title">
          Navigate the Philippine<br />
          <span className="gradient-text">Startup Ecosystem</span>
        </h1>

        <p className="hero-sub">
          Your ideas are limitless. We are your launchpad. Explore the landscape, find resources, and connect with the right people to scale your startup.
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
