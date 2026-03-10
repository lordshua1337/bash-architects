import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Github, Mail } from 'lucide-react'

const HEADING = 'Impact, "Arial Black", sans-serif'
const MONO = '"Courier New", Courier, Monaco, Consolas, monospace'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const SERVICE_ITEMS = [
  { label: 'Workflows', href: '/services' },
  { label: 'APIs', href: '/services' },
  { label: 'Integrations', href: '/services' },
  { label: 'Product Function', href: '/services' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-dark)', color: 'white', padding: '80px 24px 40px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 48, marginBottom: 60 }}>
          {/* Brand */}
          <div>
            <h3 style={{ fontFamily: HEADING, fontSize: 20, marginBottom: 16, lineHeight: 1 }}>BASH ARCHITECTS</h3>
            <p style={{ fontFamily: MONO, fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
              Architecting the workflows, APIs, and integrations that make your business run.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 style={{ fontFamily: HEADING, fontSize: 16, marginBottom: 20, lineHeight: 1 }}>NAVIGATE</h4>
            <ul style={{ listStyle: 'none' }}>
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="footer-link" style={{ fontFamily: MONO }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: HEADING, fontSize: 16, marginBottom: 20, lineHeight: 1 }}>SERVICES</h4>
            <ul style={{ listStyle: 'none' }}>
              {SERVICE_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="footer-link" style={{ fontFamily: MONO }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{ fontFamily: HEADING, fontSize: 16, marginBottom: 20, lineHeight: 1 }}>CONNECT</h4>
            <a
              href="mailto:hello@aiarchitects.com"
              className="footer-link"
              style={{ fontFamily: MONO, display: 'flex', alignItems: 'center', gap: 8 }}
            >
              <Mail size={16} /> hello@aiarchitects.com
            </a>
            <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
              <div className="social-icon"><Linkedin size={16} color="white" /></div>
              <div className="social-icon"><Twitter size={16} color="white" /></div>
              <div className="social-icon"><Github size={16} color="white" /></div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p style={{ fontFamily: MONO, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
            &copy; 2026 BASH Architects. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link to="/privacy-policy" className="footer-bottom-link" style={{ fontFamily: MONO }}>
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="footer-bottom-link" style={{ fontFamily: MONO }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
