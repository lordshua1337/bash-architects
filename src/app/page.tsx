'use client'

import { useState } from 'react'

const HEADING = 'Impact, "Arial Black", sans-serif'
const MONO = '"Courier New", Courier, Monaco, Consolas, monospace'

const NAV_LINKS = ['Home', 'About', 'Services', 'Contact']

const PLATFORMS = ['Stripe', 'Salesforce', 'Shopify', 'HubSpot', 'QuickBooks', 'Slack', 'Notion', 'Airtable']

const STATS = [
  { value: '500+', label: 'Integrations Built' },
  { value: '2M+', label: 'API Calls Monthly' },
  { value: '98%', label: 'Uptime Guarantee' },
  { value: '24/7', label: 'Support Available' },
]

const SERVICES = [
  {
    icon: 'workflow',
    title: 'Workflows',
    desc: "We map your entire operation\u2014from first contact to final delivery. Then we automate what matters and optimize what doesn\u2019t.",
    bullets: ['Process mapping & optimization', 'Automation strategy', 'Cross-team coordination', 'Efficiency audits'],
  },
  {
    icon: 'api',
    title: 'APIs',
    desc: 'Your systems need to talk. We design API architectures that connect your tools, scale with demand, and handle the complexity.',
    bullets: ['API architecture & design', 'Third-party integrations', 'Custom endpoints', 'Documentation & support'],
  },
  {
    icon: 'integration',
    title: 'Integrations',
    desc: "Stop copying data between platforms. We build the bridges between your CRM, payment processor, email, analytics\u2014everything.",
    bullets: ['Platform connectivity', 'Data synchronization', 'Webhook implementations', 'Legacy system modernization'],
  },
  {
    icon: 'product',
    title: 'Product Function',
    desc: "Whether you need a new feature or an entire product, we architect the technical foundation that makes it possible and sustainable.",
    bullets: ['Feature development', 'MVP to production', 'Technical roadmapping', 'Performance optimization'],
  },
]

const STEPS = [
  { num: '01', title: 'Deep Discovery', desc: "We dive into your business\u2014current tools, pain points, goals, and constraints. No surface-level assessments." },
  { num: '02', title: 'Strategic Blueprint', desc: "We design the architecture\u2014workflows, integrations, APIs, features. With or without custom development." },
  { num: '03', title: 'Build or Guide', desc: "Either we build it, or we guide your team through it. You get the roadmap, documentation, and support either way." },
  { num: '04', title: 'Launch & Scale', desc: "Your business runs on it. We ensure it\u2019s production-ready, scalable, and your team can maintain it." },
]

const REASONS = [
  { num: '01', title: 'No Lock-In', desc: "We build systems you own. Whether we continue or you take it in-house, you\u2019re never trapped." },
  { num: '02', title: 'Vendor Agnostic', desc: "We recommend what works for YOUR business, not what pays us the best commission." },
  { num: '03', title: 'Transparent Pricing', desc: "Fixed scopes, clear timelines, no surprise invoices. You know exactly what you\u2019re paying for." },
  { num: '04', title: 'Battle-Tested', desc: "We\u2019ve scaled systems to millions of users. Your growth won\u2019t break what we build." },
]

const CASE_STUDIES = [
  { title: 'Fintech Startup', challenge: 'Manual payment reconciliation', solution: 'Built API-first architecture connecting Stripe, QuickBooks, and internal CRM', result: '10x faster processing' },
  { title: 'E-Commerce Brand', challenge: 'Disconnected sales channels', solution: 'Unified Shopify, Amazon, and wholesale into single inventory system', result: '40% fewer stockouts' },
  { title: 'SaaS Platform', challenge: 'Scaling customer onboarding', solution: 'Automated workflow from signup to first value in under 5 minutes', result: '300% conversion increase' },
]

const TECH_STACKS = [
  { title: 'APIs & Integrations', items: ['REST', 'GraphQL', 'Webhooks', 'WebSockets', 'gRPC', 'OAuth 2.0'] },
  { title: 'Cloud', items: ['AWS', 'Google Cloud', 'Azure', 'Vercel', 'Heroku', 'Digital Ocean'] },
  { title: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB', 'Supabase'] },
  { title: 'Automation', items: ['Zapier', 'Make', 'n8n', 'Temporal', 'Airflow', 'Custom Scripts'] },
]

const TESTIMONIALS = [
  { quote: "They didn\u2019t just build our workflow automation\u2014they completely reimagined how our team operates. The ROI was clear within the first month.", name: 'Sarah Chen', role: 'VP of Operations', company: 'TechFlow Solutions' },
  { quote: "Finally, a consultancy that actually understands both the technical and business sides. Their API integration work saved us months of development time.", name: 'Marcus Rodriguez', role: 'CTO', company: 'DataSync Inc.' },
  { quote: "What sets them apart is their collaborative approach. They guided us through the entire process and made sure our team could maintain everything after launch.", name: 'Emily Thompson', role: 'Product Manager', company: 'CloudVenture' },
]

const FAQS = [
  { q: 'Do you only build, or do you also consult?', a: "Both. We architect the solution whether we build it or guide your team through implementation. You get the roadmap, documentation, and support either way." },
  { q: 'What if we want to take development in-house?', a: "That\u2019s exactly what we prepare for. We document everything, train your team, and build systems designed to be maintained without us." },
  { q: 'How long does a typical project take?', a: "Discovery takes 1\u20132 weeks. Implementation varies from 4 weeks for focused integrations to 3\u20136 months for full platform architecture. We scope everything upfront." },
  { q: 'What industries do you work with?', a: "We work across fintech, e-commerce, SaaS, healthcare, and professional services. If your business runs on software and needs systems to talk to each other, we can help." },
  { q: 'Do you use specific technologies?', a: "We\u2019re platform agnostic. We use whatever technology best solves your problem\u2014whether that\u2019s established enterprise tools or cutting-edge frameworks." },
  { q: 'What does \u201cwith or without us\u201d mean?', a: "It means we design solutions your team can own. We can build and maintain it, or hand off the blueprint so your developers can implement it. No vendor lock-in, ever." },
]

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function ServiceIcon({ type }: { readonly type: string }) {
  if (type === 'workflow') return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      <path d="M14 7h3a2 2 0 0 1 2 2v3" /><path d="M7 14v3a2 2 0 0 0 2 2h3" />
    </svg>
  )
  if (type === 'api') return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" /><path d="M12 3v6" /><path d="M12 15v6" /><path d="M3 12h6" /><path d="M15 12h6" />
    </svg>
  )
  if (type === 'integration') return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
    </svg>
  )
}

function RadialBurst() {
  const lines = Array.from({ length: 72 }, (_, i) => {
    const angle = (i * 5) * (Math.PI / 180)
    const x2 = 400 + Math.cos(angle) * 390
    const y2 = 400 + Math.sin(angle) * 390
    return <line key={i} x1="400" y1="400" x2={x2} y2={y2} stroke="#C4A070" strokeWidth="1" opacity="0.6" />
  })
  return (
    <svg viewBox="0 0 800 800" style={{ position: 'absolute', right: '-10%', top: '50%', transform: 'translateY(-50%)', width: 1000, height: 1000, opacity: 0.65 }}>
      {lines}
      <circle cx="400" cy="400" r="4" fill="#B89860" opacity="0.8" />
    </svg>
  )
}

function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <>
      {open && (
        <div style={{ position: 'fixed', bottom: 96, right: 24, width: 380, maxHeight: 520, background: 'white', borderRadius: 12, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', zIndex: 1000, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ background: 'var(--bg-dark)', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22C55E' }} />
              <div>
                <div style={{ fontFamily: HEADING, fontWeight: 900, fontSize: 16, color: 'white', textTransform: 'uppercase' }}>BASH Architects</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>We&apos;re online now</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', fontSize: 20 }}>&times;</button>
          </div>
          <div style={{ flex: 1, padding: 24, overflowY: 'auto' }}>
            <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: 'white' }}>AI</span>
              </div>
              <div>
                <div style={{ background: '#F5F5F5', padding: '12px 16px', borderRadius: '0 12px 12px 12px', fontSize: 15, lineHeight: 1.5 }}>
                  Hi there! Thanks for your interest. How can we help you today?
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>Just now</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.5, margin: '20px 0' }}>
              To integrate with a live chat service like Intercom, Crisp, or Tawk.to, add your widget code to the index.html file.
            </p>
          </div>
          <div style={{ padding: '16px 24px 20px', borderTop: '1px solid #E5E5E5' }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                style={{ flex: 1, padding: '12px 16px', border: '1px solid #DDD', borderRadius: 4, fontSize: 15, outline: 'none', fontFamily: MONO }}
              />
              <button style={{ width: 44, height: 44, background: 'var(--accent)', border: 'none', borderRadius: 4, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
              </button>
            </div>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 6 }}>Press Enter to send</p>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="chat-fab"
        style={{ position: 'fixed', bottom: 24, right: 24, width: 64, height: 64, borderRadius: '50%', background: open ? 'var(--accent)' : 'var(--accent)', border: 'none', cursor: 'pointer', boxShadow: '0 8px 30px rgba(0,0,0,0.3)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg>
        )}
      </button>
    </>
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0)
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <>
      {/* NAV */}
      <nav style={{ background: 'var(--bg)', borderBottom: '2px solid var(--accent)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#home" className="nav-link" style={{ fontFamily: HEADING, fontWeight: 900, fontSize: 24, letterSpacing: '-0.6px', textTransform: 'uppercase', color: 'var(--text)' }}>BASH Architects</a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
            <div className="hidden md:flex" style={{ gap: 32 }}>
              {NAV_LINKS.map((link, i) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="nav-link" style={{ fontFamily: MONO, fontWeight: 700, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.35px', color: i === 0 ? 'var(--accent)' : 'var(--text)' }}>
                  {link}
                </a>
              ))}
            </div>
            <a href="#contact" className="btn-primary" style={{ padding: '12px 24px' }}>Let&apos;s Talk</a>
            <button className="md:hidden" onClick={() => setMobileNav(!mobileNav)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
            </button>
          </div>
        </div>
        {mobileNav && (
          <div className="md:hidden" style={{ padding: '0 24px 20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {NAV_LINKS.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="nav-link" onClick={() => setMobileNav(false)} style={{ fontFamily: MONO, fontWeight: 700, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.35px', color: 'var(--text)' }}>
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 24px', background: 'var(--bg)' }}>
        <RadialBurst />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'inline-block', background: 'var(--bg-dark)', padding: '12px 24px', marginBottom: 32 }}>
            <span style={{ fontFamily: MONO, fontWeight: 400, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.35px', color: 'white' }}>AI Strategy & Implementation</span>
          </div>
          <h1 style={{ fontSize: 'clamp(72px, 10vw, 140px)', lineHeight: '0.85', marginBottom: 40 }}>
            We&apos;ll Figure<br />Out How to<br />
            <span style={{ color: 'var(--accent)' }}>Bring It to Life</span>
          </h1>
          <div className="divider" style={{ marginBottom: 32 }} />
          <p style={{ maxWidth: 560, fontSize: 24, lineHeight: '39px', marginBottom: 40, color: '#4A4540' }}>
            Not just building tools&#8202;&#8212;&#8202;architecting the workflows, APIs, and integrations that make your business run. With or without us.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary">Start a Conversation <Arrow /></a>
            <a href="#services" className="btn-secondary">See Our Services</a>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section style={{ background: 'var(--bg-dark)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ textAlign: 'center', fontFamily: HEADING, fontWeight: 600, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.35px', color: 'var(--accent)', marginBottom: 12 }}>Integrating With</p>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(28px, 3vw, 30px)', lineHeight: '36px', color: 'white', marginBottom: 48 }}>
            The Platforms You <span style={{ color: 'var(--accent)' }}>Already Use</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 12, maxWidth: 1100, margin: '0 auto' }}>
            {PLATFORMS.map(p => (
              <div key={p} className="platform-card">
                <span style={{ fontFamily: HEADING, fontWeight: 700, fontSize: 14, textTransform: 'uppercase', textAlign: 'center', padding: '0 8px' }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: 'var(--bg-dark)', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, textAlign: 'center' }}>
            {STATS.map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: HEADING, fontWeight: 900, fontSize: 'clamp(56px, 6vw, 80px)', color: 'var(--accent)', lineHeight: '80px' }}>{s.value}</div>
                <div style={{ fontFamily: HEADING, fontWeight: 700, fontSize: 14, textTransform: 'uppercase', color: 'white', marginTop: 8 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE SOLVE */}
      <section id="services" style={{ padding: '128px 24px', background: '#F8F6F1' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(48px, 6vw, 72px)', marginBottom: 16 }}>What We Solve</h2>
          <div className="divider" style={{ marginBottom: 24 }} />
          <p style={{ maxWidth: 600, fontSize: 20, lineHeight: '28px', color: '#4A4540', marginBottom: 60 }}>
            We don&apos;t just build&#8202;&#8212;&#8202;we architect the systems that power your business, whether we&apos;re the ones building it or not.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {SERVICES.map(s => (
              <div key={s.title} className="service-card">
                <div className="icon-box" style={{ marginBottom: 24, color: '#FF5733' }}>
                  <ServiceIcon type={s.icon} />
                </div>
                <h3 style={{ fontSize: 60, lineHeight: '60px', marginBottom: 20 }}>{s.title}</h3>
                <p style={{ fontSize: 18, lineHeight: '29.25px', color: '#4A4540', marginBottom: 24 }}>{s.desc}</p>
                <ul style={{ listStyle: 'none', marginBottom: 32 }}>
                  {s.bullets.map(b => (
                    <li key={b} style={{ display: 'flex', alignItems: 'start', gap: 12, marginBottom: 10, fontSize: 16 }}>
                      <span className="bullet-dot" style={{ color: 'var(--accent)', fontSize: 14, flexShrink: 0, transition: 'color 0.15s' }}>{'\u25AA'}</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="learn-more">Learn More <Arrow /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section style={{ background: 'var(--accent)', padding: '128px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(48px, 6vw, 72px)', color: 'white', marginBottom: 60 }}>Our Approach</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 40 }}>
            {STEPS.map(s => (
              <div key={s.num}>
                <div className="step-number">{s.num}</div>
                <h3 style={{ fontSize: 32, lineHeight: '30.4px', color: 'white', marginBottom: 16 }}>{s.title}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.8)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 96, padding: '48px', background: 'black' }}>
            <h2 style={{ fontSize: 'clamp(30px, 3vw, 40px)', lineHeight: '50px', color: 'white', marginBottom: 16 }}>&ldquo;We don&apos;t disappear after the proposal.&rdquo;</h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', maxWidth: 640 }}>
              Whether we&apos;re building it or guiding your team, we stay until your business is running on the solution we designed together.
            </p>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section id="about" style={{ padding: '128px 24px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(48px, 6vw, 72px)', marginBottom: 0 }}>Why Work</h2>
          <h2 style={{ fontSize: 'clamp(48px, 6vw, 72px)', color: 'var(--accent)', marginBottom: 16 }}>With Us</h2>
          <div className="divider" style={{ marginBottom: 60 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {REASONS.map(r => (
              <div key={r.title} className="reason-card">
                <span className="reason-number">{r.num}</span>
                <h3 style={{ fontSize: 36, lineHeight: '40px', marginBottom: 16, transition: 'color 0.15s' }}>{r.title}</h3>
                <p style={{ fontSize: 18, lineHeight: 1.7, color: '#4A4540', transition: 'color 0.15s' }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section style={{ padding: '128px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(48px, 6vw, 72px)', marginBottom: 16 }}>Case Studies</h2>
          <div className="divider" style={{ marginBottom: 24 }} />
          <p style={{ fontSize: 20, lineHeight: 1.7, color: '#4A4540', marginBottom: 60 }}>Real problems. Real solutions. Real results.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {CASE_STUDIES.map(c => (
              <div key={c.title} className="case-card">
                <div>
                  <h3 className="case-title" style={{ fontSize: 28, marginBottom: 16, transition: 'color 0.15s' }}>{c.title}</h3>
                  <p style={{ fontFamily: HEADING, fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: 4 }}>Challenge</p>
                  <p style={{ fontSize: 16, lineHeight: 1.6 }}>{c.challenge}</p>
                </div>
                <div>
                  <p style={{ fontFamily: HEADING, fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: 4 }}>Solution</p>
                  <p style={{ fontSize: 16, lineHeight: 1.6 }}>{c.solution}</p>
                </div>
                <div>
                  <p style={{ fontFamily: HEADING, fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: 4 }}>Result</p>
                  <p style={{ fontSize: 18, fontWeight: 700, color: 'var(--accent)', fontFamily: HEADING }}>{c.result}</p>
                </div>
                <a href="#contact" className="read-more" style={{ alignSelf: 'center' }}>Read More <Arrow /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section style={{ background: 'var(--accent)', padding: '128px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(56px, 7vw, 90px)', color: 'white', marginBottom: 16 }}>Tech Stack</h2>
          <div className="divider-white" style={{ marginBottom: 24 }} />
          <p style={{ fontSize: 18, lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', marginBottom: 60 }}>
            We&apos;re platform agnostic. We use whatever technology best solves your problem.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {TECH_STACKS.map(col => (
              <div key={col.title} className="tech-column">
                <h4 style={{ fontFamily: HEADING, fontWeight: 700, fontSize: 14, textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20 }}>{col.title}</h4>
                {col.items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                    <span style={{ color: 'var(--accent)', fontSize: 14 }}>{'\u25AA'}</span>
                    <span style={{ color: 'white', fontSize: 16 }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p style={{ fontFamily: HEADING, fontWeight: 700, fontSize: 24, color: 'white', marginTop: 40, textTransform: 'uppercase' }}>+ 100s More Tools in Our Arsenal</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '128px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontFamily: HEADING, fontWeight: 600, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.35px', color: 'var(--accent)', marginBottom: 12 }}>Client Success Stories</p>
          <h2 style={{ fontSize: 'clamp(48px, 5vw, 72px)', lineHeight: '64.8px', marginBottom: 8 }}>They Trusted Us.</h2>
          <h2 style={{ fontSize: 'clamp(48px, 5vw, 72px)', lineHeight: '64.8px', color: 'var(--accent)', fontStyle: 'italic', marginBottom: 60 }}>You Can Too.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, textAlign: 'left' }}>
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="testimonial-card">
                <span className="quote-mark">&ldquo;&rdquo;</span>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: '#4A4540', marginBottom: 24, position: 'relative', zIndex: 1 }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#D5CFC9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: HEADING, fontWeight: 900, fontSize: 16, color: 'var(--bg-dark)' }}>{t.name[0]}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: MONO, fontWeight: 700, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{t.name}</div>
                    <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>{t.role}<br />{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 48, fontSize: 18, color: '#4A4540' }}>Ready to join our growing list of satisfied clients?</p>
          <a href="#contact" className="btn-primary" style={{ marginTop: 20 }}>Start Your Project</a>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ background: 'var(--bg-dark)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" style={{ marginBottom: 20 }}>
            <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <h2 style={{ fontSize: 'clamp(40px, 5vw, 60px)', lineHeight: '54px', color: 'white', marginBottom: 8 }}>
            Stay Ahead of the <span style={{ color: 'var(--accent)' }}>Curve</span>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>Weekly insights on workflow automation, API architecture, and integration strategy.</p>
          <div style={{ display: 'flex', gap: 0, maxWidth: 520, margin: '0 auto' }}>
            <input className="newsletter-input" placeholder="your@email.com" style={{ flex: 1 }} />
            <button className="btn-subscribe">Subscribe</button>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 12 }}>We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '128px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(48px, 6vw, 72px)', textAlign: 'center', marginBottom: 60 }}>
            Common <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Questions</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {FAQS.map((faq, i) => (
              <div key={faq.q} style={{ border: '2px solid var(--border)', background: 'white' }}>
                <button
                  className="faq-button"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <span style={{ fontFamily: MONO, fontWeight: 500, fontSize: 16 }}>{faq.q}</span>
                  <span style={{ fontFamily: HEADING, fontWeight: 900, fontSize: 24, flexShrink: 0, marginLeft: 16 }}>{openFaq === i ? '\u2212' : '+'}</span>
                </button>
                <div className={`faq-answer${openFaq === i ? ' open' : ''}`}>
                  <div style={{ padding: '0 32px 32px', borderTop: '2px solid var(--border)' }}>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: '#4A4540', paddingTop: 20 }}>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" style={{ padding: '128px 24px', background: 'var(--bg)', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'clamp(60px, 7vw, 100px)', lineHeight: '90px', marginBottom: 8 }}>Let&apos;s Figure It</h2>
          <h2 style={{ fontSize: 'clamp(60px, 7vw, 100px)', lineHeight: '90px', color: 'var(--accent)', marginBottom: 16 }}>Out Together</h2>
          <div className="divider" style={{ margin: '0 auto 32px' }} />
          <p style={{ fontSize: 18, lineHeight: 1.7, color: '#4A4540', maxWidth: 520, margin: '0 auto 40px' }}>
            You have an idea, a problem, or a vision. We&apos;ll work with you to architect the technical solution&#8202;&#8212;&#8202;and make sure your business can run on it.
          </p>
          <button className="btn-primary" style={{ fontSize: 20, letterSpacing: '0.5px', padding: '20px 48px' }}>Get in Touch &rarr;</button>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, maxWidth: 800, margin: '96px auto 0', paddingTop: 96, borderTop: '2px solid var(--border)' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: HEADING, fontWeight: 900, fontSize: 'clamp(48px, 5vw, 64px)', color: 'var(--accent)' }}>100%</div>
              <div style={{ fontFamily: HEADING, fontWeight: 700, fontSize: 14, textTransform: 'uppercase' }}>Client Satisfaction</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: HEADING, fontWeight: 900, fontSize: 'clamp(48px, 5vw, 64px)', color: 'var(--accent)' }}>50+</div>
              <div style={{ fontFamily: HEADING, fontWeight: 700, fontSize: 14, textTransform: 'uppercase' }}>Businesses Transformed</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <svg width="48" height="28" viewBox="0 0 48 28" fill="none" stroke="var(--accent)" strokeWidth="2.5" style={{ margin: '0 auto 4px' }}>
                <circle cx="16" cy="14" r="10" /><circle cx="32" cy="14" r="10" />
              </svg>
              <div style={{ fontFamily: HEADING, fontWeight: 700, fontSize: 14, textTransform: 'uppercase', marginTop: 8 }}>Ways to Bring It to Life</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: 'var(--bg-dark)', padding: '80px 24px 40px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 48, marginBottom: 60 }}>
          <div>
            <h3 style={{ fontSize: 20, color: 'var(--accent)', marginBottom: 16 }}>BASH Architects</h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)' }}>Architecting the workflows, APIs, and integrations that make your business run.</p>
          </div>
          <div>
            <h4 style={{ fontFamily: HEADING, fontWeight: 900, fontSize: 16, color: 'white', marginBottom: 16, textTransform: 'uppercase' }}>Navigate</h4>
            {['Home', 'About', 'Services', 'FAQ', 'Blog', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="footer-link">{link}</a>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: HEADING, fontWeight: 900, fontSize: 16, color: 'white', marginBottom: 16, textTransform: 'uppercase' }}>Services</h4>
            {['Workflows', 'APIs', 'Integrations', 'Product Function'].map(link => (
              <a key={link} href="#services" className="footer-link">{link}</a>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: HEADING, fontWeight: 900, fontSize: 16, color: 'white', marginBottom: 16, textTransform: 'uppercase' }}>Connect</h4>
            <a href="mailto:hello@aiarchitects.com" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              hello@aiarchitects.com
            </a>
            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              {['in', 'tw', 'gh'].map(icon => (
                <a key={icon} href="#" className="social-icon">
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>{icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 32, maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>&copy; 2026 BASH Architects. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Service</a>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </>
  )
}
