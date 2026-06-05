import { useFadeIn } from '../hooks/useFadeIn'

const options = [
  {
    label: 'For Startups',
    title: 'Apply to the Accelerator',
    items: ['Equity-free mentorship', 'Access to top-tier VCs', 'Cloud credits & perks', '12-week intensive program'],
  },
  {
    label: 'For Individuals',
    title: 'Join the Community',
    items: ['Exclusive founder events', 'Discord workspace access', 'Find a co-founder', 'Access to resource library'],
  },
  {
    label: 'For Investors',
    title: 'Partner with Us',
    items: ['Curated deal flow', 'Co-investment opportunities', 'Ecosystem data access', 'VIP event invites'],
  },
]

export function JoinUs() {
  const ref = useFadeIn()

  return (
    <section className="section" id="join" ref={ref}>
      <div className="fade-in">
        <div className="eyebrow">Get Involved</div>
        <h2 className="sec-title">
          Ready for Liftoff?
        </h2>
        <p className="sec-sub">
          Whether you are just starting out or looking to scale, there is a place for you in the StellarPH network.
        </p>
      </div>

      <div className="future-grid fade-in">
        {options.map((o) => (
          <div className="fut-card" key={o.label}>
            <div className="fut-horizon">{o.label}</div>
            <div className="fut-title">{o.title}</div>
            <ul className="fut-items">
              {o.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="fade-in">
        <div className="pitch-card" style={{ marginTop: '40px' }}>
          <div className="pitch-label">Contact Us</div>
          <p className="pitch-text">
            Drop us an email at <a href="mailto:hello@stellarph.io" style={{color: 'inherit', textDecoration: 'underline'}}>hello@stellarph.io</a> to start your journey.
          </p>
        </div>
      </div>
    </section>
  )
}
