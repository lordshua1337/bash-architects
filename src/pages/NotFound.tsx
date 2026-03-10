import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Home, ArrowLeft } from 'lucide-react'

const HEADING = 'Impact, "Arial Black", sans-serif'
const MONO = '"Courier New", Courier, Monaco, Consolas, monospace'

export default function NotFound() {
  return (
    <>
      <Helmet><title>404 | BASH Architects</title></Helmet>

      <section style={{ minHeight: 'calc(100vh - 200px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '128px 24px', textAlign: 'center' }}>
        <div>
          <h1 style={{ fontFamily: HEADING, fontSize: 'clamp(80px, 15vw, 200px)', color: 'var(--accent)', lineHeight: 0.85, marginBottom: 16 }}>404</h1>
          <h2 style={{ fontFamily: HEADING, fontSize: 'clamp(24px, 4vw, 48px)', marginBottom: 24, lineHeight: 0.85 }}>PAGE NOT FOUND</h2>
          <p style={{ fontFamily: MONO, fontSize: 16, color: 'var(--text-muted)', marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>
            Looks like this page doesn't exist. But we can help you build one that does.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <Link to="/" className="btn-primary">
              <Home size={16} /> GO HOME
            </Link>
            <Link to="/contact" className="btn-secondary" style={{ background: 'white', color: 'black', border: '2px solid black' }}>
              <ArrowLeft size={16} /> CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
