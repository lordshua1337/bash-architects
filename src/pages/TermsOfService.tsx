import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft } from 'lucide-react'

const HEADING = 'Impact, "Arial Black", sans-serif'
const MONO = '"Courier New", Courier, Monaco, Consolas, monospace'

export default function TermsOfService() {
  const sectionStyle = { marginBottom: 48 }
  const h2Style = { fontFamily: HEADING, fontSize: 22, marginBottom: 16, lineHeight: 1 }
  const h3Style = { fontFamily: HEADING, fontSize: 18, marginBottom: 12, lineHeight: 1 }
  const pStyle = { fontFamily: MONO, fontSize: 14, lineHeight: 1.8, color: 'var(--text)', marginBottom: 16 }
  const liStyle = { fontFamily: MONO, fontSize: 14, lineHeight: 1.8, marginBottom: 8, marginLeft: 24 }

  return (
    <>
      <Helmet><title>Terms of Service | BASH Architects</title></Helmet>

      <section style={{ padding: '128px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Link to="/" style={{ fontFamily: MONO, fontSize: 14, color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
            <ArrowLeft size={14} /> BACK TO HOME
          </Link>
          <h1 style={{ fontFamily: HEADING, fontSize: 'clamp(36px, 6vw, 56px)', lineHeight: 0.85, marginBottom: 16 }}>TERMS OF SERVICE</h1>
          <p style={{ fontFamily: MONO, fontSize: 14, color: 'var(--text-muted)', marginBottom: 64 }}>Last Updated: March 9, 2026</p>

          <div style={sectionStyle}>
            <h2 style={h2Style}>1. ACCEPTANCE OF TERMS</h2>
            <p style={pStyle}>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
            <p style={pStyle}>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and us, concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>2. USE LICENSE</h2>
            <p style={pStyle}>Permission is granted to temporarily access the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul style={{ listStyleType: 'disc' }}>
              <li style={liStyle}>Modify or copy the materials</li>
              <li style={liStyle}>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial)</li>
              <li style={liStyle}>Attempt to decompile or reverse engineer any software contained on our website</li>
              <li style={liStyle}>Remove any copyright or other proprietary notations from the materials</li>
              <li style={liStyle}>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            <p style={pStyle}>This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>3. SERVICES</h2>
            <p style={pStyle}>We provide AI consultancy services including workflows, APIs, integrations, and product function development. All services are subject to the following terms:</p>
            <h3 style={h3Style}>SCOPE OF WORK</h3>
            <p style={pStyle}>The specific scope of work for each project will be defined in a separate Statement of Work (SOW) or project agreement. All deliverables, timelines, and milestones will be outlined in these documents.</p>
            <h3 style={h3Style}>CLIENT RESPONSIBILITIES</h3>
            <p style={pStyle}>Clients are responsible for providing timely access to necessary systems, data, and personnel required for project completion. Delays caused by client-side dependencies may affect project timelines and deliverables.</p>
            <h3 style={h3Style}>MODIFICATIONS</h3>
            <p style={pStyle}>Any changes to the agreed-upon scope of work must be documented and approved by both parties in writing. Such changes may affect project timelines and costs.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>4. PAYMENT TERMS</h2>
            <p style={pStyle}>Unless otherwise agreed upon in writing:</p>
            <ul style={{ listStyleType: 'disc' }}>
              <li style={liStyle}>Payment terms will be specified in individual project agreements</li>
              <li style={liStyle}>Invoices are due within 30 days of receipt unless otherwise specified</li>
              <li style={liStyle}>Late payments may incur interest charges at a rate of 1.5% per month or the maximum allowed by law</li>
              <li style={liStyle}>We reserve the right to suspend services for accounts with overdue balances</li>
              <li style={liStyle}>All fees are non-refundable unless specified otherwise in the project agreement</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>5. INTELLECTUAL PROPERTY</h2>
            <p style={pStyle}>Upon full payment for services rendered:</p>
            <ul style={{ listStyleType: 'disc' }}>
              <li style={liStyle}>Custom work product created specifically for the client becomes the property of the client</li>
              <li style={liStyle}>We retain ownership of pre-existing intellectual property, tools, methodologies, and frameworks</li>
              <li style={liStyle}>We may use project work for portfolio purposes unless otherwise agreed in writing</li>
              <li style={liStyle}>Clients grant us a license to use their trademarks and logos for portfolio and marketing purposes</li>
            </ul>
            <p style={pStyle}>All rights not expressly granted are reserved.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>6. CONFIDENTIALITY</h2>
            <p style={pStyle}>Both parties agree to maintain the confidentiality of any proprietary or confidential information shared during the course of the engagement. This obligation survives the termination of any agreement.</p>
            <p style={pStyle}>Confidential information does not include information that: (a) is or becomes publicly available through no breach of this agreement, (b) was rightfully in the receiving party's possession before disclosure, or (c) is independently developed without use of confidential information.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>7. WARRANTIES AND DISCLAIMERS</h2>
            <p style={pStyle}>We warrant that services will be performed in a professional and workmanlike manner. However:</p>
            <ul style={{ listStyleType: 'disc' }}>
              <li style={liStyle}>Services are provided "as is" without warranty of any kind</li>
              <li style={liStyle}>We do not warrant that services will be uninterrupted or error-free</li>
              <li style={liStyle}>We are not responsible for issues arising from client-provided materials or information</li>
              <li style={liStyle}>Results may vary and are not guaranteed</li>
            </ul>
            <p style={pStyle}>TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>8. LIMITATION OF LIABILITY</h2>
            <p style={pStyle}>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
            <ul style={{ listStyleType: 'disc' }}>
              <li style={liStyle}>Our total liability for any claim arising from services shall not exceed the amount paid by the client for those specific services</li>
              <li style={liStyle}>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
              <li style={liStyle}>We are not liable for lost profits, lost data, or business interruption</li>
              <li style={liStyle}>These limitations apply regardless of the form of action, whether in contract, tort, negligence, or otherwise</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>9. TERMINATION</h2>
            <p style={pStyle}>Either party may terminate a service agreement:</p>
            <ul style={{ listStyleType: 'disc' }}>
              <li style={liStyle}>For convenience with 30 days written notice</li>
              <li style={liStyle}>Immediately for material breach that remains uncured for 15 days after written notice</li>
              <li style={liStyle}>Immediately if the other party becomes insolvent or files for bankruptcy</li>
            </ul>
            <p style={pStyle}>Upon termination, client shall pay for all services rendered up to the termination date. Any provisions that by their nature should survive termination shall remain in effect.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>10. INDEMNIFICATION</h2>
            <p style={pStyle}>You agree to indemnify, defend, and hold harmless our company, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising from your use of our services or violation of these terms.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>11. GOVERNING LAW</h2>
            <p style={pStyle}>These Terms shall be governed by and construed in accordance with the laws of the applicable jurisdiction, without regard to its conflict of law provisions. Any disputes shall be resolved in the appropriate courts of the applicable jurisdiction.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>12. CHANGES TO TERMS</h2>
            <p style={pStyle}>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.</p>
            <p style={pStyle}>What constitutes a material change will be determined at our sole discretion. By continuing to access or use our services after those revisions become effective, you agree to be bound by the revised terms.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>13. CONTACT US</h2>
            <p style={pStyle}>If you have any questions about these Terms of Service, please contact us:</p>
            <ul style={{ listStyleType: 'disc' }}>
              <li style={liStyle}>By email: legal@yourcompany.com</li>
              <li style={liStyle}>By visiting our <Link to="/contact" style={{ color: 'var(--accent)' }}>contact page</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
