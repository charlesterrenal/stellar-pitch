import { useFadeIn } from '../hooks/useFadeIn'

export function Content() {
  const ref = useFadeIn()

  return (
    <section className="section" id="content" aria-labelledby="content-title" ref={ref}>
      <div className="glow-br" aria-hidden="true" />

      <div className="fade-in">
        <div className="eyebrow">Days 1–2 Deliverable · Startup Content Piece</div>
      </div>

      <article className="fade-in" aria-labelledby="content-title">
        <div className="article-header">
          <div className="article-tag">Ecosystem insight</div>
          <h2 className="article-title" id="content-title">
            Why the next 500 Philippine unicorns won't come from Manila
          </h2>
          <div className="article-meta">
            <span>By StellarPH Intern</span>
            <span>June 2026</span>
            <span>4 min read</span>
          </div>
        </div>

        <div className="article-body">
          <p>
            There's a comfortable myth in the Philippine startup world: that innovation is
            a Metro Manila sport. The funding rounds happen in BGC. The co-working spaces
            cluster in Makati. The press covers the Metro founders. And for a long time,
            that was mostly true.
          </p>

          <div className="pull-quote">
            <p>
              The infrastructure is shifting. And the founders who recognize the shift first
              will build the most durable companies.
            </p>
          </div>

          <p>
            But something has changed — quietly and then, suddenly, all at once. A new
            generation of Filipino founders is building from Cebu, Davao, Iloilo, and
            Cagayan de Oro, and they're not waiting for a one-way ticket to the capital
            before they start.
          </p>

          <h3>The decentralization of Filipino talent</h3>
          <p>
            Organizations like StellarPH have been building this shift deliberately. With
            programs now running across multiple regions — from the Soft Landing Bootcamp
            to the DOST Region VII partnership — the infrastructure for non-Manila founders
            is becoming real. The data backs this up: of the 100 young Filipinos recognized
            on the PH100 2025 list, talent came from institutions and companies scattered
            across the archipelago. The pattern is clear.
          </p>
          <p>
            What's driving the shift? Three forces are converging at once: remote work
            normalizing distributed teams; improved logistics and digital payments making
            it possible to sell anywhere from anywhere; and a generation of founders who've
            seen their international peers build from Chiang Mai or Medellín and realized
            geography was never the moat.
          </p>

          <h3>What this means for founders outside the capital</h3>
          <p>
            Building outside Metro Manila is no longer a disadvantage — in many verticals,
            it's an edge. Lower burn rates. Access to underserved markets. Less competition
            for talent. Problems that Metro Manila startups haven't even noticed yet.
          </p>
          <p>
            The founders who will define the Philippine startup decade ahead are the ones
            building for Filipino realities — not imitating Silicon Valley playbooks in a
            BGC high-rise, but solving real problems for real Filipinos, in the places
            where most Filipinos actually live.
          </p>
          <p>
            StellarPH's vision puts it plainly: an ecosystem that is decentralized, with
            opportunities across provinces, not just in Metro Manila. For any young founder
            reading this from outside the capital — that's not a consolation prize.
            It's a starting gun.
          </p>

          <h3>Three questions every regional founder should ask right now</h3>
          <p>
            <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>
              1. What problem exists here that Manila hasn't solved?
            </strong>{' '}
            Proximity to underserved markets is a real advantage. Use it.
          </p>
          <p>
            <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>
              2. Who in the ecosystem can I connect with?
            </strong>{' '}
            The StellarPH network, PH100 alumni, and organizations like QBO and TechShake
            exist precisely to bridge regional founders to the broader ecosystem.
          </p>
          <p>
            <strong style={{ color: 'var(--text-1)', fontWeight: 600 }}>
              3. What would I build if I stopped waiting for permission?
            </strong>{' '}
            The next Philippine unicorn won't ask Manila for a green light. Neither should you.
          </p>
        </div>

        <p className="repurpose-note">
          This piece can be repurposed as a LinkedIn article, StellarPH Academy post, or social thread.
        </p>
      </article>
    </section>
  )
}
