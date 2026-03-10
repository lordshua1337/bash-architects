import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Workflow, Code2, Plug, Box } from 'lucide-react'

const HEADING = 'Impact, "Arial Black", sans-serif'
const MONO = '"Courier New", Courier, Monaco, Consolas, monospace'

const PLATFORMS = ['STRIPE', 'SALESFORCE', 'SHOPIFY', 'HUBSPOT', 'QUICKBOOKS', 'SLACK', 'NOTION', 'AIRTABLE']

const SERVICES = [
  {
    icon: <Workflow size={24} color="white" />,
    title: 'WORKFLOWS',
    desc: 'We map your entire operation—from first contact to final delivery. Then we automate what matters and optimize what doesn\'t.',
    bullets: ['Process mapping & optimization', 'Automation strategy', 'Cross-team coordination', 'Efficiency audits'],
    link: '/services',
  },
  {
    icon: <Code2 size={24} color="white" />,
    title: 'APIs',
    desc: 'Your systems need to talk. We design API architectures that connect your tools, scale with demand, and handle the complexity.',
    bullets: ['API architecture & design', 'Third-party integrations', 'Custom endpoints', 'Documentation & support'],
    link: '/services',
  },
  {
    icon: <Plug size={24} color="white" />,
    title: 'INTEGRATIONS',
    desc: 'Stop copying data between platforms. We build the bridges between your CRM, payment processor, email, analytics—everything.',
    bullets: ['Platform connectivity', 'Data synchronization', 'Webhook implementations', 'Legacy system modernization'],
    link: '/services',
  },
  {
    icon: <Box size={24} color="white" />,
    title: 'PRODUCT FUNCTION',
    desc: 'Whether you need a new feature or an entire product, we architect the technical foundation that makes it possible and sustainable.',
    bullets: ['Feature development', 'MVP to production', 'Technical roadmapping', 'Performance optimization'],
    link: '/services',
  },
]

const STEPS = [
  { num: '01', title: 'DEEP DISCOVERY', desc: 'We dive into your business—current tools, pain points, goals, and constraints. No surface-level assessments.' },
  { num: '02', title: 'STRATEGIC BLUEPRINT', desc: 'We design the architecture—workflows, integrations, APIs, features. With or without custom development.' },
  { num: '03', title: 'BUILD OR GUIDE', desc: 'Either we build it, or we guide your team through it. You get the roadmap, documentation, and support either way.' },
  { num: '04', title: 'LAUNCH & SCALE', desc: 'Your business runs on it. We ensure it\'s production-ready, scalable, and your team can maintain it.' },
]

const REASONS = [
  { title: 'NO LOCK-IN', desc: 'We build systems you own. Whether we continue or you take it in-house, you\'re never trapped.' },
  { title: 'VENDOR AGNOSTIC', desc: 'We recommend what works for YOUR business, not what pays us the best commission.' },
  { title: 'TRANSPARENT PRICING', desc: 'Fixed scopes, clear timelines, no surprise invoices. You know exactly what you\'re paying for.' },
  { title: 'BATTLE-TESTED', desc: 'We\'ve scaled systems to millions of users. Your growth won\'t break what we build.' },
]

const CASE_STUDIES = [
  { title: 'FINTECH STARTUP', problem: 'Manual payment reconciliation', solution: 'Built API-first architecture connecting Stripe, QuickBooks, and internal CRM', result: '10x faster processing' },
  { title: 'E-COMMERCE BRAND', problem: 'Disconnected inventory systems', solution: 'Integrated Shopify, warehouse management, and shipping APIs', result: '99.9% order accuracy' },
  { title: 'SAAS PLATFORM', problem: 'Scaling customer onboarding', solution: 'Automated workflow from signup to first value in under 5 minutes', result: '300% conversion increase' },
]

const TECH_STACKS = [
  { title: 'APIs & INTEGRATIONS', items: ['REST', 'GraphQL', 'Webhooks', 'WebSockets', 'gRPC', 'OAuth 2.0'] },
  { title: 'PLATFORMS', items: ['AWS', 'Google Cloud', 'Azure', 'Vercel', 'Heroku', 'Digital Ocean'] },
  { title: 'DATABASES', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB', 'Supabase'] },
  { title: 'AUTOMATION', items: ['Zapier', 'Make', 'n8n', 'Temporal', 'Airflow', 'Custom Scripts'] },
]

const TESTIMONIALS = [
  '"They didn\'t just build our workflow automation—they completely reimagined how our team operates. The ROI was clear within the first month."',
  '"Finally, a consultancy that actually understands both the technical and business sides. Their API integration work saved us months of development time."',
  '"What sets them apart is their collaborative approach. They guided us through the entire process and made sure our team could maintain everything after."',
]

const FAQS = [
  { q: 'Do you only build, or do you also consult?', a: 'Both. We architect the solution whether we build it or guide your team through implementation. You get the roadmap, documentation, and support either way.' },
  { q: 'What if we want to take development in-house later?', a: 'That\'s the whole point. We build systems you own with full documentation. Your team can maintain and extend everything we create.' },
  { q: 'How long does a typical project take?', a: 'Most projects range from 4-12 weeks depending on scope. We\'ll give you a clear timeline during discovery.' },
  { q: 'What industries do you work with?', a: 'We work across industries—fintech, e-commerce, SaaS, healthcare, logistics, and more. If you have systems that need to work together, we can help.' },
  { q: 'Do you use specific technologies?', a: 'We\'re technology agnostic. We use whatever best solves your problem, whether that\'s established enterprise tools or cutting-edge solutions.' },
  { q: 'What does "with or without us" mean?', a: 'It means we design solutions that don\'t depend on us. You can have us build it, or use our blueprints to build it yourself.' },
]

function RadialBurst() {
  const lines = []
  for (let i = 0; i < 72; i++) {
    const angle = i * 5
    const rad = (angle * Math.PI) / 180
    const x2 = 500 + Math.cos(rad) * 500
    const y2 = 500 + Math.sin(rad) * 500
    lines.push(<line key={i} x1="500" y1="500" x2={x2} y2={y2} stroke="#C4A070" strokeWidth="1" />)
  }
  return (
    <svg viewBox="0 0 1000 1000" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%', opacity: 0.65 }}>
      <g opacity="0.6">{lines}</g>
    </svg>
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <>
      <Helmet><title>BASH Architects | We'll Figure Out How to Bring It to Life</title></Helmet>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '128px 24px' }}>
        <RadialBurst />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, width: '100%' }}>
          <p style={{ fontFamily: MONO, fontSize: 14, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 24, color: 'var(--text-muted)' }}>AI STRATEGY & IMPLEMENTATION</p>
          <h1 style={{ fontFamily: HEADING, fontSize: 'clamp(48px, 8vw, 96px)', lineHeight: 0.85, marginBottom: 32 }}>
            WE'LL FIGURE<br />OUT HOW TO<br /><span style={{ color: 'var(--accent)' }}>BRING IT TO LIFE</span>
          </h1>
          <p style={{ fontFamily: MONO, fontSize: 18, maxWidth: 600, lineHeight: 1.6, marginBottom: 40 }}>
            Not just building tools—architecting the workflows, APIs, and integrations that make your business run. With or without us.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">START A CONVERSATION <ArrowRight size={16} /></Link>
            <Link to="/services" className="btn-secondary">SEE OUR SERVICES <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section style={{ background: 'var(--bg-dark)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ fontFamily: MONO, fontSize: 14, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 2 }}>INTEGRATING WITH</p>
            <h3 style={{ fontFamily: HEADING, fontSize: 32, color: 'white', lineHeight: 1 }}>THE PLATFORMS YOU<br /><span style={{ color: 'var(--accent)' }}>ALREADY USE</span></h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 8 }}>
            {PLATFORMS.map((p) => (
              <div key={p} className="platform-card"><span style={{ fontFamily: MONO, fontSize: 11, fontWeight: 700, textTransform: 'uppercase' }}>{p}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE SOLVE (SERVICES) */}
      <section id="services" style={{ padding: '128px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontFamily: HEADING, fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: 16, lineHeight: 0.85 }}>WHAT WE SOLVE</h2>
          <p style={{ fontFamily: MONO, fontSize: 16, color: 'var(--text-muted)', marginBottom: 8 }}>
            We don't just build—we architect the systems that power your business, whether we're the ones building it or not.
          </p>
          <div className="divider" style={{ marginBottom: 48 }} />
          <div className="service-grid-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, border: '2px solid var(--border)' }}>
            {SERVICES.map((s, i) => (
              <div key={i} className="service-card" style={{ borderWidth: 0, borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none', borderBottom: i < 2 ? '1px solid var(--border)' : 'none' }}>
                <div className="icon-box" style={{ marginBottom: 24 }}>{s.icon}</div>
                <h3 style={{ fontFamily: HEADING, fontSize: 28, marginBottom: 16, lineHeight: 1 }}>{s.title}</h3>
                <p style={{ fontFamily: MONO, fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 20 }}>{s.desc}</p>
                <ul style={{ listStyle: 'none', marginBottom: 24 }}>
                  {s.bullets.map((b, j) => (
                    <li key={j} style={{ fontFamily: MONO, fontSize: 14, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span className="bullet-dot" style={{ color: 'var(--accent)', fontWeight: 700 }}>&#9642;</span> {b}
                    </li>
                  ))}
                </ul>
                <Link to={s.link} className="learn-more">LEARN MORE <ArrowRight size={14} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section style={{ background: 'var(--bg-dark)', padding: '128px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{ fontFamily: HEADING, fontSize: 'clamp(36px, 5vw, 56px)', color: 'white', marginBottom: 16, lineHeight: 0.85 }}>OUR APPROACH</h2>
            <p style={{ fontFamily: MONO, fontSize: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 700, margin: '0 auto' }}>
              We're not just consultants who hand you a PDF. We're architects who ensure your business can actually run off what we design.
            </p>
            <div className="divider-white" style={{ marginTop: 24 }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {STEPS.map((step) => (
              <div key={step.num} style={{ padding: 40, borderRight: step.num !== '04' ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                <div className="step-number">{step.num}</div>
                <h3 style={{ fontFamily: HEADING, fontSize: 20, color: 'white', marginTop: 16, marginBottom: 12, lineHeight: 1 }}>{step.title}</h3>
                <p style={{ fontFamily: MONO, fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 64, padding: '40px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ fontFamily: HEADING, fontSize: 24, color: 'white', fontStyle: 'italic', marginBottom: 16 }}>"We don't disappear after the proposal."</p>
            <p style={{ fontFamily: MONO, fontSize: 14, color: 'rgba(255,255,255,0.6)', maxWidth: 600, margin: '0 auto' }}>
              Whether we're building it or guiding your team, we stay until your business is running on the solution we designed together.
            </p>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section id="about" style={{ padding: '128px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontFamily: HEADING, fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: 48, lineHeight: 0.85 }}>
            WHY WORK<br /><span style={{ color: 'var(--accent)' }}>WITH US</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {REASONS.map((r, i) => (
              <div key={i} className="reason-card">
                <span className="reason-number">{String(i + 1).padStart(2, '0')}</span>
                <h3 style={{ fontFamily: HEADING, fontSize: 24, marginBottom: 12, lineHeight: 1 }}>{r.title}</h3>
                <p style={{ fontFamily: MONO, fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section style={{ padding: '128px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontFamily: HEADING, fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: 16, lineHeight: 0.85 }}>CASE STUDIES</h2>
          <p style={{ fontFamily: MONO, fontSize: 16, color: 'var(--text-muted)', marginBottom: 48 }}>Real problems. Real solutions. Real results.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {CASE_STUDIES.map((cs, i) => (
              <div key={i} className="case-card">
                <div>
                  <h3 className="case-title" style={{ fontFamily: HEADING, fontSize: 20, lineHeight: 1, marginBottom: 8 }}>{cs.title}</h3>
                  <p style={{ fontFamily: MONO, fontSize: 13, color: 'var(--text-muted)' }}>{cs.problem}</p>
                </div>
                <div>
                  <p style={{ fontFamily: MONO, fontSize: 13, lineHeight: 1.5 }}>{cs.solution}</p>
                </div>
                <div>
                  <p style={{ fontFamily: HEADING, fontSize: 20, color: 'var(--accent)', lineHeight: 1 }}>{cs.result}</p>
                </div>
                <Link to="/contact" className="read-more" style={{ fontFamily: MONO, fontSize: 14 }}>
                  <span>READ MORE</span> <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section style={{ background: 'var(--bg-dark)', padding: '128px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{ fontFamily: HEADING, fontSize: 'clamp(36px, 5vw, 56px)', color: 'white', marginBottom: 16, lineHeight: 0.85 }}>TECH STACK</h2>
            <p style={{ fontFamily: MONO, fontSize: 16, color: 'rgba(255,255,255,0.6)' }}>
              We're platform agnostic. We use whatever technology best solves your problem.
            </p>
            <div className="divider-white" style={{ marginTop: 24 }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {TECH_STACKS.map((stack) => (
              <div key={stack.title} className="tech-column">
                <h3 style={{ fontFamily: HEADING, fontSize: 18, color: 'white', marginBottom: 24, lineHeight: 1 }}>{stack.title}</h3>
                <ul style={{ listStyle: 'none' }}>
                  {stack.items.map((item) => (
                    <li key={item} style={{ fontFamily: MONO, fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 700 }}>&#9642;</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: MONO, fontSize: 14, color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginTop: 32, textTransform: 'uppercase', letterSpacing: 2 }}>
            + 100s MORE TOOLS IN OUR ARSENAL
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '128px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{ fontFamily: HEADING, fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: 16, lineHeight: 0.85 }}>
              THEY TRUSTED US.<br /><span style={{ color: 'var(--accent)' }}>YOU CAN TOO.</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card">
                <span className="quote-mark">"</span>
                <p style={{ fontFamily: MONO, fontSize: 14, lineHeight: 1.7, position: 'relative', zIndex: 1 }}>{t}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <p style={{ fontFamily: MONO, fontSize: 16, marginBottom: 24 }}>Ready to join our growing list of satisfied clients?</p>
            <Link to="/contact" className="btn-primary">START YOUR PROJECT <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ background: 'var(--bg-dark)', padding: '128px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: HEADING, fontSize: 'clamp(36px, 5vw, 56px)', color: 'white', marginBottom: 16, lineHeight: 0.85 }}>
            STAY AHEAD OF THE<br /><span style={{ color: 'var(--accent)' }}>CURVE</span>
          </h2>
          <p style={{ fontFamily: MONO, fontSize: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 600, margin: '0 auto 32px' }}>
            Get practical insights on AI implementation, workflow automation, and product development. No fluff, no spam—just actionable advice delivered monthly.
          </p>
          <div style={{ maxWidth: 500, margin: '0 auto', display: 'flex', gap: 0 }}>
            <input type="email" className="newsletter-input" placeholder="Enter your email" />
            <button className="btn-subscribe">SUBSCRIBE</button>
          </div>
          <p style={{ fontFamily: MONO, fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 16 }}>We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '128px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{ fontFamily: HEADING, fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: 16, lineHeight: 0.85 }}>
              COMMON<br /><span style={{ color: 'var(--accent)' }}>QUESTIONS</span>
            </h2>
          </div>
          <div style={{ border: '2px solid var(--border)' }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ borderBottom: i < FAQS.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <button
                  className="faq-button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ fontFamily: HEADING, fontSize: 16, textTransform: 'uppercase' }}
                >
                  <span>{faq.q}</span>
                  <span style={{ fontSize: 24, fontWeight: 300 }}>{openFaq === i ? '−' : '+'}</span>
                </button>
                <div className={`faq-answer ${openFaq === i ? 'open' : ''}`}>
                  <div style={{ padding: '0 32px 32px' }}>
                    <p style={{ fontFamily: MONO, fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--accent)', padding: '128px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: HEADING, fontSize: 'clamp(36px, 5vw, 56px)', color: 'white', marginBottom: 16, lineHeight: 0.85 }}>
            LET'S FIGURE IT<br /><span style={{ color: 'black' }}>OUT TOGETHER</span>
          </h2>
          <p style={{ fontFamily: MONO, fontSize: 16, color: 'rgba(255,255,255,0.9)', maxWidth: 600, margin: '0 auto 32px', lineHeight: 1.6 }}>
            You have an idea, a problem, or a vision. We'll work with you to architect the technical solution—and make sure your business can run on it.
          </p>
          <Link to="/contact" className="btn-primary" style={{ background: 'black' }}>GET IN TOUCH <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  )
}
