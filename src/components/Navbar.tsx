import { Link, useLocation } from 'react-router-dom'

const HEADING = 'Impact, "Arial Black", sans-serif'
const MONO = '"Courier New", Courier, Monaco, Consolas, monospace'

const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'SERVICES', href: '/services' },
  { label: 'CONTACT', href: '/contact' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--bg)',
        borderBottom: '2px solid var(--accent)',
        padding: '0 24px',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 72,
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: HEADING,
            fontSize: 20,
            fontWeight: 900,
            textTransform: 'uppercase',
            color: 'var(--text)',
            textDecoration: 'none',
            letterSpacing: '0.5px',
          }}
        >
          BASH ARCHITECTS
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="nav-link"
              style={{
                fontFamily: MONO,
                fontSize: 14,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                color:
                  location.pathname === link.href
                    ? 'var(--accent)'
                    : 'var(--text)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary" style={{ padding: '12px 24px', fontSize: 14 }}>
            LET'S TALK
          </Link>
        </div>
      </div>
    </nav>
  )
}
