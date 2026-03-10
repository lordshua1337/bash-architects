import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Target, Handshake, Cpu, TrendingUp } from 'lucide-react'

const HEADING = 'Impact, "Arial Black", sans-serif'
const MONO = '"Courier New", Courier, Monaco, Consolas, monospace'

const VALUES = [
  { icon: <Target size={24} />, title: 'FOCUS ON OUTCOMES', desc: 'We measure success by your business results, not lines of code or hours billed.' },
  { icon: <Handshake size={24} />, title: 'PARTNERSHIP, NOT VENDOR', desc: 'We become an extension of your team, invested in your long-term success.' },
  { icon: <Cpu size={24} />, title: 'TECHNOLOGY AGNOSTIC', desc: 'No preferred vendors. No hidden kickbacks. Just the right tool for your job.' },
  { icon: <TrendingUp size={24} />, title: 'BUILT TO SCALE', desc: 'Everything we architect is designed to grow with you, not hold you back.' },
]

const TEAM_STATS = [
  { num: '12+', label: 'ENGINEERING', desc: 'Full-stack developers, API architects, and DevOps engineers' },
  { num: '5+', label: 'STRATEGY', desc: 'Business analysts, workflow designers, and technical consultants' },
  { num: '8+', label: 'INTEGRATION', desc: 'Specialists in connecting platforms, APIs, and legacy systems' },
]

export default function About() {
  return (
    <>
      <Helmet><title>About Us | BASH Architects</title></Helmet>

      {/* HERO */}
      <section style={{ padding: '128px 24px 80px', background: 'var(--bg-dark)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h1 style={{ fontFamily: HEADING, fontSize: 'clamp(48px, 8vw, 96px)', color: 'white', lineHeight: 0.85, marginBottom: 24 }}>ABOUT US</h1>
          <div style={{ width: 80, height: 4, background: 'var(--accent)', marginBottom: 32 }} />
          <p style={{ fontFamily: MONO, fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 700, lineHeight: 1.6 }}>
            We're not your typical consultancy. We're technical architects who've been in the trenches— building, breaking, and rebuilding systems at scale. Now we help others do it right the first time.
          </p>
        </div>
      </section>

      {/* OUR STORY + MISSION */}
      <section style={{ padding: '128px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 64 }}>
          <div>
            <h2 style={{ fontFamily: HEADING, fontSize: 48, lineHeight: 0.85, marginBottom: 32 }}>
              OUR <span style={{ color: 'var(--accent)' }}>STORY</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ fontFamily: MONO, fontSize: 15, lineHeight: 1.7 }}>
                We started because we kept seeing the same problem: businesses drowning in disconnected tools, manual workflows, and systems that couldn't talk to each other.
              </p>
              <p style={{ fontFamily: MONO, fontSize: 15, lineHeight: 1.7 }}>
                Every consultant they hired would hand them a fancy PDF and disappear. Every agency they worked with would build something custom that broke the moment they tried to scale.
              </p>
              <p style={{ fontFamily: MONO, fontSize: 15, lineHeight: 1.7 }}>
                We knew there was a better way. Not just building tools, but architecting systems. Not just making recommendations, but ensuring your business could actually run on time.
              </p>
            </div>
          </div>
          <div style={{ background: 'var(--accent)', padding: 48 }}>
            <h3 style={{ fontFamily: HEADING, fontSize: 32, color: 'white', lineHeight: 1, marginBottom: 24 }}>OUR MISSION</h3>
            <p style={{ fontFamily: MONO, fontSize: 15, color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, marginBottom: 24 }}>
              To help every business architect the technical foundation they need to scale— whether we build it, guide it, or both.
            </p>
            <p style={{ fontFamily: HEADING, fontSize: 14, color: 'white', textTransform: 'uppercase', letterSpacing: 1 }}>
              NO VENDOR LOCK-IN. NO HIDDEN AGENDAS. JUST RESULTS.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: '128px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{ fontFamily: HEADING, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 0.85 }}>
              OUR <span style={{ color: 'var(--accent)' }}>VALUES</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {VALUES.map((v, i) => (
              <div key={i} className="values-card">
                <div style={{ marginBottom: 20 }}>{v.icon}</div>
                <h3 style={{ fontFamily: HEADING, fontSize: 22, lineHeight: 1, marginBottom: 12 }}>{v.title}</h3>
                <p style={{ fontFamily: MONO, fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: '128px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontFamily: HEADING, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 0.85, marginBottom: 16 }}>OUR TEAM</h2>
          <p style={{ fontFamily: MONO, fontSize: 16, color: 'var(--text-muted)', marginBottom: 48 }}>
            25+ technical experts across engineering, strategy, and integration.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {TEAM_STATS.map((stat) => (
              <div key={stat.label} style={{ background: 'var(--accent)', padding: 40 }}>
                <h3 style={{ fontFamily: HEADING, fontSize: 48, color: 'white', lineHeight: 1, marginBottom: 8 }}>{stat.num}</h3>
                <h4 style={{ fontFamily: HEADING, fontSize: 18, color: 'white', lineHeight: 1, marginBottom: 12 }}>{stat.label}</h4>
                <p style={{ fontFamily: MONO, fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--accent)', padding: '96px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontFamily: HEADING, fontSize: 'clamp(36px, 5vw, 56px)', color: 'white', lineHeight: 0.85, marginBottom: 32 }}>
            LET'S BUILD SOMETHING TOGETHER
          </h2>
          <Link to="/contact" className="btn-outline-white" style={{ background: 'white', color: 'black', border: '2px solid white' }}>
            GET IN TOUCH <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
