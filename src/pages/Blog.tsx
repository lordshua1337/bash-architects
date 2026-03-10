import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react'

const HEADING = 'Impact, "Arial Black", sans-serif'
const MONO = '"Courier New", Courier, Monaco, Consolas, monospace'

const FEATURED = [
  {
    tag: 'WORKFLOWS',
    title: 'WHY AI WORKFLOWS FAIL (AND HOW TO FIX THEM)',
    desc: 'Most AI workflow implementations fail not because of the technology, but because of poor planning and unrealistic expectations. Here\'s what actually works.',
    date: 'March 1, 2026',
    read: '8 MIN READ',
  },
  {
    tag: 'APIS',
    title: 'API-FIRST ARCHITECTURE: A PRACTICAL GUIDE',
    desc: 'Building scalable products starts with thoughtful API design. Learn how to architect APIs that grow with your business and keep technical debt low.',
    date: 'February 15, 2026',
    read: '6 MIN READ',
  },
]

const ALL_ARTICLES = [
  {
    tag: 'INTEGRATIONS',
    title: 'ESCAPING INTEGRATION HELL',
    desc: 'Juggling multiple SaaS tools without a clear integration strategy leads to chaos. Here\'s how to build a cohesive tech stack that actually works together.',
    date: 'March 5, 2026',
    read: '7 MIN READ',
  },
  {
    tag: 'STRATEGY',
    title: 'BUILD VS GUIDE: WHEN TO DO IT YOURSELF',
    desc: 'Not every project needs a consultant to build it. Sometimes you just need the right guidance. Here\'s how to decide what\'s right for your team.',
    date: 'February 18, 2026',
    read: '5 MIN READ',
  },
  {
    tag: 'PRODUCT',
    title: 'ADDING AI TO YOUR PRODUCT WITHOUT THE HYPE',
    desc: 'AI features can genuinely improve products, but only when implemented thoughtfully. Skip the buzzwords and focus on actual value for users.',
    date: 'February 1, 2026',
    read: '6 MIN READ',
  },
  {
    tag: 'WORKFLOWS',
    title: 'CALCULATING REAL ROI ON WORKFLOW AUTOMATION',
    desc: 'Automation saves time and money—but how much? A practical framework for measuring the actual return on your workflow automation investments.',
    date: 'January 15, 2026',
    read: '8 MIN READ',
  },
]

export default function Blog() {
  return (
    <>
      <Helmet><title>Blog | BASH Architects</title></Helmet>

      <section style={{ padding: '128px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Link to="/" style={{ fontFamily: MONO, fontSize: 14, color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
            <ArrowLeft size={14} /> BACK TO HOME
          </Link>
          <h1 style={{ fontFamily: HEADING, fontSize: 'clamp(36px, 6vw, 64px)', lineHeight: 0.85, marginBottom: 24 }}>INSIGHTS & RESOURCES</h1>
          <p style={{ fontFamily: MONO, fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: 700, marginBottom: 64 }}>
            Practical advice, real-world case studies, and honest insights about AI implementation, workflow automation, and building products that actually solve problems.
          </p>

          {/* FEATURED */}
          <h2 style={{ fontFamily: HEADING, fontSize: 20, marginBottom: 24, lineHeight: 1 }}>FEATURED ARTICLES</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginBottom: 64 }}>
            {FEATURED.map((article, i) => (
              <div key={i} className="blog-card">
                <div style={{ height: 200, background: '#d4d0c4' }} />
                <div style={{ padding: 32 }}>
                  <span style={{ fontFamily: HEADING, fontSize: 11, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: 1 }}>{article.tag}</span>
                  <h3 style={{ fontFamily: HEADING, fontSize: 22, lineHeight: 1, marginTop: 8, marginBottom: 12 }}>{article.title}</h3>
                  <p style={{ fontFamily: MONO, fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 16 }}>{article.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                    <span style={{ fontFamily: MONO, fontSize: 12, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}><Calendar size={12} /> {article.date}</span>
                    <span style={{ fontFamily: MONO, fontSize: 12, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={12} /> {article.read}</span>
                  </div>
                  <span className="read-more" style={{ fontFamily: HEADING, fontSize: 14, textTransform: 'uppercase', cursor: 'pointer' }}>
                    READ MORE <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ALL ARTICLES */}
          <h2 style={{ fontFamily: HEADING, fontSize: 20, marginBottom: 24, lineHeight: 1 }}>ALL ARTICLES</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {ALL_ARTICLES.map((article, i) => (
              <div key={i} className="blog-card">
                <div style={{ height: 160, background: '#d4d0c4' }} />
                <div style={{ padding: 24 }}>
                  <span style={{ fontFamily: HEADING, fontSize: 11, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: 1 }}>{article.tag}</span>
                  <h3 style={{ fontFamily: HEADING, fontSize: 18, lineHeight: 1, marginTop: 8, marginBottom: 12 }}>{article.title}</h3>
                  <p style={{ fontFamily: MONO, fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 16 }}>{article.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <span style={{ fontFamily: MONO, fontSize: 12, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}><Calendar size={12} /> {article.date}</span>
                    <span style={{ fontFamily: MONO, fontSize: 12, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={12} /> {article.read}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ background: 'var(--bg-dark)', padding: '96px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontFamily: HEADING, fontSize: 'clamp(36px, 5vw, 56px)', color: 'white', lineHeight: 0.85, marginBottom: 16 }}>STAY IN THE LOOP</h2>
          <p style={{ fontFamily: MONO, fontSize: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 600, margin: '0 auto 32px' }}>
            Get practical insights on AI, automation, and product development delivered to your inbox. No fluff, just actionable advice.
          </p>
          <div style={{ maxWidth: 500, margin: '0 auto', display: 'flex', gap: 0 }}>
            <input type="email" className="newsletter-input" placeholder="Enter your email" />
            <button className="btn-subscribe">SUBSCRIBE</button>
          </div>
        </div>
      </section>
    </>
  )
}
