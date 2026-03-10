import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft } from 'lucide-react'

const HEADING = 'Impact, "Arial Black", sans-serif'
const MONO = '"Courier New", Courier, Monaco, Consolas, monospace'

const FAQ_SECTIONS = [
  {
    title: 'GENERAL',
    items: [
      { q: 'What makes your consultancy different from others?', a: 'We don\'t just consult—we architect. Most consultancies hand you a PDF and disappear. We design the system, build or guide the implementation, and stay until your business is running on it. And everything we build, you own.' },
      { q: 'Do you only build solutions, or do you also provide guidance?', a: 'Both. We can build the entire solution, guide your team through implementation, or a combination of both. You get the architecture, documentation, and support either way.' },
      { q: 'What industries do you work with?', a: 'We work across industries—fintech, e-commerce, SaaS, healthcare, logistics, education, and more. If your business has systems that need to work together, we can help.' },
      { q: 'How long does a typical project take?', a: 'Most projects range from 4-12 weeks depending on complexity and scope. Discovery takes 1-2 weeks, design 2-3 weeks, and implementation varies. We\'ll give you a clear timeline during our initial consultation.' },
    ],
  },
  {
    title: 'SERVICES',
    items: [
      { q: 'What is included in your Workflows service?', a: 'Our Workflows service includes process mapping, automation strategy, workflow design and implementation, cross-team coordination systems, and efficiency audits. We analyze your entire operation and build the automation layer.' },
      { q: 'Can you integrate with our existing systems?', a: 'Absolutely. Integration is one of our core services. We connect your existing tools—CRM, payment processors, email platforms, analytics, and more—so they work together seamlessly.' },
      { q: 'Do you provide API development or just integration?', a: 'Both. We design and build custom APIs, integrate with third-party APIs, and create the documentation your team needs. Our API service covers architecture, implementation, and ongoing support.' },
      { q: 'What does "Product Function" development include?', a: 'Product Function covers feature development, MVP to production pipelines, technical roadmapping, performance optimization, and scalability architecture. Whether it\'s a new feature or an entire product, we architect the technical foundation.' },
    ],
  },
  {
    title: 'PROCESS',
    items: [
      { q: 'How does the initial consultation work?', a: 'We start with a free 30-minute call to understand your needs. From there, we do a deeper discovery session where we map out your current systems, identify pain points, and outline potential solutions.' },
      { q: 'What information do you need to get started?', a: 'We need an understanding of your current tech stack, business goals, pain points, and any documentation you have about your existing systems. Don\'t worry if you don\'t have everything—we\'ll help you identify what matters.' },
      { q: 'How involved do we need to be during the project?', a: 'We keep you informed with regular updates and check-ins. Typically we need access to key stakeholders for questions and feedback, but we handle the heavy lifting. Your involvement scales based on your preference.' },
      { q: 'What happens after the project is completed?', a: 'You get full ownership of everything we build, including documentation and knowledge transfer. We offer ongoing support packages, but you\'re never locked in. Your team can maintain and extend everything independently.' },
    ],
  },
  {
    title: 'PRICING & CONTRACTS',
    items: [
      { q: 'How do you structure your pricing?', a: 'We offer fixed-scope pricing based on project requirements. No hourly billing surprises. During discovery, we define the scope clearly and provide a detailed quote before any work begins.' },
      { q: 'Do you require payment upfront?', a: 'We typically structure payments in milestones—a portion upfront, with the remainder tied to deliverables. The exact structure depends on project size and duration.' },
      { q: 'What is your refund policy?', a: 'We stand behind our work. If we haven\'t delivered what was agreed upon in the scope, we\'ll make it right. Specific refund terms are outlined in each project agreement.' },
      { q: 'Can we start with a small project before committing to larger work?', a: 'Absolutely. Many of our long-term clients started with a single workflow audit or API integration. It\'s a great way to experience our process before committing to larger engagements.' },
    ],
  },
  {
    title: 'TECHNICAL',
    items: [
      { q: 'What technologies and platforms do you work with?', a: 'We\'re technology agnostic. Our team works with AWS, Google Cloud, Azure, various databases, API technologies (REST, GraphQL, WebSockets), and automation platforms. We choose the best tool for your specific needs.' },
      { q: 'Do you handle data migration?', a: 'Yes. Data migration is often a critical part of system integration. We plan and execute migrations carefully, ensuring data integrity and minimal downtime.' },
      { q: 'How do you ensure security and compliance?', a: 'Security is built into our architecture from day one. We follow industry best practices, implement proper authentication and authorization, encrypt sensitive data, and can work within specific compliance frameworks (HIPAA, SOC 2, GDPR, etc.).' },
      { q: 'Do you provide ongoing maintenance and support?', a: 'Yes. We offer maintenance and support packages for ongoing needs. However, we design everything so your team can maintain it independently if preferred. You\'re never dependent on us.' },
    ],
  },
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, number | null>>({})

  const toggle = (section: string, index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [section]: prev[section] === index ? null : index,
    }))
  }

  return (
    <>
      <Helmet><title>FAQ | BASH Architects</title></Helmet>

      <section style={{ padding: '128px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <Link to="/" style={{ fontFamily: MONO, fontSize: 14, color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
            <ArrowLeft size={14} /> BACK TO HOME
          </Link>
          <h1 style={{ fontFamily: HEADING, fontSize: 'clamp(36px, 6vw, 64px)', lineHeight: 0.85, marginBottom: 24 }}>FREQUENTLY ASKED QUESTIONS</h1>
          <p style={{ fontFamily: MONO, fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 64 }}>
            Got questions? We've got answers. Find everything you need to know about our services, process, and how we can help bring your vision to life.
          </p>

          {FAQ_SECTIONS.map((section) => (
            <div key={section.title} style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: HEADING, fontSize: 28, marginBottom: 16, lineHeight: 1 }}>{section.title}</h2>
              <div style={{ border: '2px solid var(--border)' }}>
                {section.items.map((item, i) => (
                  <div key={i} style={{ borderBottom: i < section.items.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <button
                      className="faq-button"
                      onClick={() => toggle(section.title, i)}
                      style={{ fontFamily: HEADING, fontSize: 14, textTransform: 'uppercase', letterSpacing: 0.5 }}
                    >
                      <span>{item.q}</span>
                      <span style={{ fontSize: 24, fontWeight: 300, flexShrink: 0, marginLeft: 16 }}>
                        {openItems[section.title] === i ? '−' : '+'}
                      </span>
                    </button>
                    <div className={`faq-answer ${openItems[section.title] === i ? 'open' : ''}`}>
                      <div style={{ padding: '0 32px 32px' }}>
                        <p style={{ fontFamily: MONO, fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>{item.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STILL HAVE QUESTIONS */}
      <section style={{ background: 'var(--accent)', padding: '96px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontFamily: HEADING, fontSize: 'clamp(36px, 5vw, 56px)', color: 'white', lineHeight: 0.85, marginBottom: 16 }}>STILL HAVE QUESTIONS?</h2>
          <p style={{ fontFamily: MONO, fontSize: 16, color: 'rgba(255,255,255,0.9)', marginBottom: 32 }}>
            Can't find the answer you're looking for? We're here to help. Reach out and let's start a conversation.
          </p>
          <Link to="/contact" className="btn-secondary">CONTACT US</Link>
        </div>
      </section>
    </>
  )
}
