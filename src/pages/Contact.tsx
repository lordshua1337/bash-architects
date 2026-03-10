import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react'

const HEADING = 'Impact, "Arial Black", sans-serif'
const MONO = '"Courier New", Courier, Monaco, Consolas, monospace'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <Helmet><title>Contact | BASH Architects</title></Helmet>

      {/* HERO */}
      <section style={{ padding: '128px 24px 80px', background: 'var(--bg-dark)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h1 style={{ fontFamily: HEADING, fontSize: 'clamp(48px, 8vw, 96px)', color: 'white', lineHeight: 0.85, marginBottom: 24 }}>LET'S TALK</h1>
          <div style={{ width: 80, height: 4, background: 'var(--accent)', marginBottom: 32 }} />
          <p style={{ fontFamily: MONO, fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 700, lineHeight: 1.6 }}>
            Have a project in mind? Need to optimize your workflows? Looking to integrate your systems? Let's figure it out together.
          </p>
        </div>
      </section>

      {/* FORM + CONTACT INFO */}
      <section style={{ padding: '128px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 64 }}>
          {/* Form */}
          <div>
            <h2 style={{ fontFamily: HEADING, fontSize: 36, lineHeight: 0.85, marginBottom: 32 }}>
              SEND US A <span style={{ color: 'var(--accent)' }}>MESSAGE</span>
            </h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <label style={{ fontFamily: HEADING, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 8 }}>YOUR NAME *</label>
                <input className="form-input" type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
              </div>
              <div>
                <label style={{ fontFamily: HEADING, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 8 }}>EMAIL *</label>
                <input className="form-input" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
              </div>
              <div>
                <label style={{ fontFamily: HEADING, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 8 }}>COMPANY</label>
                <input className="form-input" type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
              </div>
              <div>
                <label style={{ fontFamily: HEADING, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 8 }}>INTERESTED IN</label>
                <select className="form-input" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                  <option value="">Select a service</option>
                  <option value="workflows">Workflows</option>
                  <option value="apis">APIs</option>
                  <option value="integrations">Integrations</option>
                  <option value="product-function">Product Function</option>
                  <option value="general">General Consultation</option>
                </select>
              </div>
              <div>
                <label style={{ fontFamily: HEADING, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 8 }}>MESSAGE *</label>
                <textarea className="form-input" rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required style={{ resize: 'vertical' }} />
              </div>
              <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                SEND MESSAGE <ArrowRight size={16} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 style={{ fontFamily: HEADING, fontSize: 36, lineHeight: 0.85, marginBottom: 32 }}>
              GET IN <span style={{ color: 'var(--accent)' }}>TOUCH</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div className="icon-box" style={{ width: 40, height: 40, padding: 10 }}><Mail size={16} color="white" /></div>
                <div>
                  <p style={{ fontFamily: HEADING, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 2 }}>EMAIL</p>
                  <a href="mailto:hello@aiarchitects.com" style={{ fontFamily: MONO, fontSize: 14, color: 'var(--text)', textDecoration: 'none' }}>hello@aiarchitects.com</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div className="icon-box" style={{ width: 40, height: 40, padding: 10 }}><Phone size={16} color="white" /></div>
                <div>
                  <p style={{ fontFamily: HEADING, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 2 }}>PHONE</p>
                  <a href="tel:+15551234567" style={{ fontFamily: MONO, fontSize: 14, color: 'var(--text)', textDecoration: 'none' }}>+1 (555) 123-4567</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div className="icon-box" style={{ width: 40, height: 40, padding: 10 }}><MapPin size={16} color="white" /></div>
                <div>
                  <p style={{ fontFamily: HEADING, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 2 }}>LOCATION</p>
                  <p style={{ fontFamily: MONO, fontSize: 14 }}>San Francisco, CA<br />Remote-First Team</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 40, background: 'var(--accent)', padding: 32 }}>
              <h3 style={{ fontFamily: HEADING, fontSize: 20, color: 'white', lineHeight: 1, marginBottom: 16 }}>RESPONSE TIME</h3>
              <p style={{ fontFamily: MONO, fontSize: 14, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, marginBottom: 16 }}>
                We typically respond within 24 hours during business days. For urgent inquiries, please call us directly.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Clock size={14} color="white" />
                <p style={{ fontFamily: MONO, fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREFER A CALL */}
      <section style={{ background: 'var(--accent)', padding: '96px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontFamily: HEADING, fontSize: 'clamp(36px, 5vw, 56px)', color: 'white', lineHeight: 0.85, marginBottom: 16 }}>PREFER A CALL?</h2>
          <p style={{ fontFamily: MONO, fontSize: 16, color: 'rgba(255,255,255,0.9)', marginBottom: 32 }}>
            Schedule a 30-minute consultation to discuss your project.
          </p>
          <button className="btn-outline-white" style={{ background: 'white', color: 'black', border: '2px solid white' }}>
            BOOK A CALL <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </>
  )
}
