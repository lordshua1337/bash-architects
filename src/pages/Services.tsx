import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Workflow, Code2, Plug, Box } from 'lucide-react'

const HEADING = 'Impact, "Arial Black", sans-serif'
const MONO = '"Courier New", Courier, Monaco, Consolas, monospace'

const SERVICES = [
  {
    icon: <Workflow size={24} color="var(--accent)" />,
    title: 'WORKFLOWS',
    tagline: 'Automate what matters. Optimize what doesn\'t.',
    desc: 'We map your entire operation and build the automation layer that makes it run smoothly.',
    capabilities: ['Process mapping & optimization', 'Business automation strategy', 'Workflow design & implementation', 'Cross-team coordination systems', 'Efficiency audits & improvements'],
  },
  {
    icon: <Code2 size={24} color="var(--accent)" />,
    title: 'APIS',
    tagline: 'Connect everything. Scale infinitely.',
    desc: 'We design API architectures that make your systems talk, scale with demand, and handle complexity.',
    capabilities: ['API architecture & design', 'REST, GraphQL, WebSocket implementation', 'Third-party API integrations', 'Custom endpoint development', 'Documentation & developer support'],
  },
  {
    icon: <Plug size={24} color="var(--accent)" />,
    title: 'INTEGRATIONS',
    tagline: 'Stop copying. Start connecting.',
    desc: 'We build the bridges between your CRM, payment processor, email, analytics—everything.',
    capabilities: ['Platform connectivity', 'Real-time data synchronization', 'Webhook implementations', 'Legacy system modernization', 'iPaaS solutions (Zapier, Make, n8n)'],
  },
  {
    icon: <Box size={24} color="var(--accent)" />,
    title: 'PRODUCT FUNCTION',
    tagline: 'From idea to production.',
    desc: 'Whether you need a new feature or an entire product, we architect the technical foundation.',
    capabilities: ['Feature development & implementation', 'MVP to production pipeline', 'Technical roadmapping', 'Performance optimization', 'Scalability architecture'],
  },
]

const STEPS = [
  { num: '01', label: 'DISCOVER' },
  { num: '02', label: 'DESIGN' },
  { num: '03', label: 'DELIVER' },
  { num: '04', label: 'SCALE' },
]

export default function Services() {
  return (
    <>
      <Helmet><title>Services | BASH Architects</title></Helmet>

      {/* HERO */}
      <section style={{ padding: '128px 24px 80px', background: 'var(--bg-dark)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h1 style={{ fontFamily: HEADING, fontSize: 'clamp(48px, 8vw, 96px)', color: 'white', lineHeight: 0.85, marginBottom: 24 }}>SERVICES</h1>
          <div style={{ width: 80, height: 4, background: 'var(--accent)', marginBottom: 32 }} />
          <p style={{ fontFamily: MONO, fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 700, lineHeight: 1.6 }}>
            We architect the technical systems that power modern businesses. Whether we build it or guide your team through it—your business runs on the solution.
          </p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section style={{ padding: '128px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
          {SERVICES.map((s, i) => (
            <div key={i} className="service-page-card">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
                <div>
                  <h2 style={{ fontFamily: HEADING, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 0.85, marginBottom: 12 }}>{s.title}</h2>
                  <p style={{ fontFamily: MONO, fontSize: 16, color: 'var(--accent)', marginBottom: 16, fontWeight: 700 }}>{s.tagline}</p>
                  <p style={{ fontFamily: MONO, fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 24 }}>{s.desc}</p>
                  <Link to="/contact" className="btn-primary" style={{ fontSize: 14, padding: '16px 32px' }}>
                    LEARN MORE <ArrowRight size={14} />
                  </Link>
                </div>
                <div>
                  <h3 style={{ fontFamily: HEADING, fontSize: 18, marginBottom: 20, lineHeight: 1 }}>CAPABILITIES</h3>
                  <ul style={{ listStyle: 'none' }}>
                    {s.capabilities.map((c, j) => (
                      <li key={j} style={{ fontFamily: MONO, fontSize: 14, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span style={{ color: 'var(--accent)', fontWeight: 700 }}>&#9642;</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section style={{ background: 'var(--accent)', padding: '96px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontFamily: HEADING, fontSize: 'clamp(36px, 5vw, 56px)', color: 'white', lineHeight: 0.85, marginBottom: 48 }}>HOW WE WORK</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {STEPS.map((step) => (
              <div key={step.num} style={{ background: 'white', border: '2px solid black', padding: 32, textAlign: 'center' }}>
                <h3 style={{ fontFamily: HEADING, fontSize: 48, color: 'var(--accent)', lineHeight: 1, marginBottom: 8 }}>{step.num}</h3>
                <p style={{ fontFamily: HEADING, fontSize: 16 }}>{step.label}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48 }}>
            <Link to="/contact" className="btn-outline-white" style={{ background: 'white', color: 'black', border: '2px solid white' }}>
              START A PROJECT <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
