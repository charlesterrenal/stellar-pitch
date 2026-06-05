import { BrowserRouter, Routes, Route, NavLink, Link, useLocation } from 'react-router-dom'
import './index.css'
import { ThemeToggle } from './components/ThemeToggle'
import { GalaxyBackground } from './components/GalaxyBackground'
import { Overview }    from './sections/Overview'
import { Storyteller } from './sections/Storyteller'
import { JoinUs }      from './sections/JoinUs'
import { Content }     from './sections/Content'

const NAV_ITEMS = [
  { path: '/',  label: 'Home'  },
  { path: '/landscape', label: 'The Landscape' },
  { path: '/resources',   label: 'Founder Resources'   },
  { path: '/join',    label: 'Join Us'    },
]

function Footer() {
  const location = useLocation();
  if (location.pathname === '/landscape') return null;

  return (
    <footer className="footer">
      <p>
        StellarPH Intern Onboarding Deck &middot; June 2026 &middot;{' '}
        <a href="https://stellarph.io" rel="noopener noreferrer">stellarph.io</a>
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <GalaxyBackground />
      <nav className="nav" aria-label="Presentation navigation">
        <Link className="nav-logo" to="/">
          <img src="/StellarPH-ColoredLogo.svg" alt="StellarPH" style={{ height: '34px', width: 'auto' }} />
        </Link>

        <div className="nav-links">
          {NAV_ITEMS.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              <span className="dot" aria-hidden="true" />
              {label}
            </NavLink>
          ))}
          <ThemeToggle />
          <span className="nav-badge">Founder's Field Guide</span>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/landscape" element={<Storyteller />} />
          <Route path="/resources" element={<Content />} />
          <Route path="/join" element={<JoinUs />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}
