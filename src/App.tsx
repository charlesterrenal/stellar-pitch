import { useEffect, useState } from 'react'
import './index.css'
import { Overview }  from './sections/Overview'
import { Ecosystem } from './sections/Ecosystem'
import { Timeline }  from './sections/Timeline'
import { Future }    from './sections/Future'
import { Content }   from './sections/Content'

const NAV_ITEMS = [
  { id: 'overview',  label: 'Overview'  },
  { id: 'ecosystem', label: 'Ecosystem' },
  { id: 'timeline',  label: 'Timeline'  },
  { id: 'future',    label: 'Future'    },
  { id: 'content',   label: 'Content'   },
]

export default function App() {
  const [progress,       setProgress]       = useState(0)
  const [activeSection,  setActiveSection]  = useState('overview')

  // Scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const total    = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active nav highlight on scroll
  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[]

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  // Smooth scroll with offset
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 84
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <>
      {/* Progress bar */}
      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      {/* Sticky nav */}
      <nav className="nav" aria-label="Presentation navigation">
        <a className="nav-logo" href="#overview" onClick={(e) => { e.preventDefault(); scrollTo('overview') }} aria-label="StellarPH home">
          <div className="nav-logo-mark" aria-hidden="true">S</div>
          <span className="nav-logo-text">StellarPH</span>
        </a>

        <div className="nav-links" role="list">
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              className={`nav-link${activeSection === id ? ' active' : ''}`}
              href={`#${id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(id) }}
              role="listitem"
            >
              <span className="dot" aria-hidden="true" />
              {label}
            </a>
          ))}
          <span className="nav-badge">Intern Deck</span>
        </div>
      </nav>

      <main>
        <Overview />
        <hr className="section-divider" />
        <Ecosystem />
        <hr className="section-divider" />
        <Timeline />
        <hr className="section-divider" />
        <Future />
        <hr className="section-divider" />
        <Content />
      </main>

      <footer className="footer">
        <p>
          StellarPH Intern Onboarding Deck · June 2026 ·{' '}
          <a href="https://stellarph.io" rel="noopener noreferrer">stellarph.io</a>
        </p>
      </footer>
    </>
  )
}
