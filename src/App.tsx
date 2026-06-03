import { useEffect, useState } from 'react'
import './index.css'
import { ThemeToggle } from './components/ThemeToggle'
import { Overview }    from './sections/Overview'
import { Ecosystem }   from './sections/Ecosystem'
import { Timeline }    from './sections/Timeline'
import { Future }      from './sections/Future'
import { Content }     from './sections/Content'

const NAV_ITEMS = [
  { id: 'overview',  label: 'Overview'  },
  { id: 'ecosystem', label: 'Ecosystem' },
  { id: 'timeline',  label: 'Timeline'  },
  { id: 'future',    label: 'Future'    },
  { id: 'content',   label: 'Content'   },
]

export default function App() {
  const [progress,      setProgress]      = useState(0)
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const total    = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 84, behavior: 'smooth' })
  }

  return (
    <>
      <div className="progress-bar" style={{ width: `${progress}%` }} aria-hidden="true" />

      <nav className="nav" aria-label="Presentation navigation">
        <a className="nav-logo" href="#overview" onClick={(e) => { e.preventDefault(); scrollTo('overview') }}>
          <img src="/StellarPH-ColoredLogo.svg" alt="StellarPH" style={{ height: '34px', width: 'auto' }} />
        </a>

        <div className="nav-links">
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              className={`nav-link${activeSection === id ? ' active' : ''}`}
              href={`#${id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(id) }}
            >
              <span className="dot" aria-hidden="true" />
              {label}
            </a>
          ))}
          <ThemeToggle />
          <span className="nav-badge">Intern Deck</span>
        </div>
      </nav>

      <main>
        <Overview />
        <Ecosystem />
        <Timeline />
        <Future />
        <Content />
      </main>

      <footer className="footer">
        <p>
          StellarPH Intern Onboarding Deck &middot; June 2026 &middot;{' '}
          <a href="https://stellarph.io" rel="noopener noreferrer">stellarph.io</a>
        </p>
      </footer>
    </>
  )
}
