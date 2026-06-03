import { useFadeIn } from '../hooks/useFadeIn'

const insights = [
  {
    num: '01',
    title: 'Innovation is decentralizing',
    body: 'Founders in Cebu, Davao, and Iloilo are building without waiting for Manila. Remote work, digital payments, and regional programs make geography irrelevant.',
  },
  {
    num: '02',
    title: 'Regional = competitive edge',
    body: 'Lower burn rates, underserved markets, less talent competition. Building outside Metro Manila is no longer a disadvantage \u2014 in many verticals, it\'s the edge.',
  },
  {
    num: '03',
    title: 'The connective tissue exists',
    body: 'StellarPH, PH100 alumni, QBO, and TechShake are bridging regional founders to the broader ecosystem. The infrastructure is real and growing.',
  },
]

export function Content() {
  const ref = useFadeIn()

  return (
    <section className="section" id="content" ref={ref}>
      <div className="fade-in">
        <div className="eyebrow">Startup Content Piece</div>
        <h2 className="sec-title">
          Why the next Philippine unicorns<br />
          won't come from Manila
        </h2>
        <p className="sec-sub">Three insights for regional founders.</p>
      </div>

      <div className="insights-grid fade-in">
        {insights.map((ins) => (
          <div className="insight-card" key={ins.num}>
            <div className="insight-num">{ins.num}</div>
            <div className="insight-title">{ins.title}</div>
            <p className="insight-body">{ins.body}</p>
          </div>
        ))}
      </div>

      <div className="pull-quote-card fade-in">
        <p>
          The founders who will define the Philippine startup decade are solving real
          problems for real Filipinos &mdash; not imitating Silicon Valley playbooks
          in a BGC high-rise.
        </p>
      </div>

      <p className="repurpose-note fade-in">
        Repurposable as a LinkedIn article, Academy post, or social thread.
      </p>
    </section>
  )
}
