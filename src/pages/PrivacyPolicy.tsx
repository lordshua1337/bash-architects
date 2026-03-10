import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft } from 'lucide-react'

const HEADING = 'Impact, "Arial Black", sans-serif'
const MONO = '"Courier New", Courier, Monaco, Consolas, monospace'

export default function PrivacyPolicy() {
  const sectionStyle = { marginBottom: 48 }
  const h2Style = { fontFamily: HEADING, fontSize: 22, marginBottom: 16, lineHeight: 1 }
  const h3Style = { fontFamily: HEADING, fontSize: 18, marginBottom: 12, lineHeight: 1 }
  const pStyle = { fontFamily: MONO, fontSize: 14, lineHeight: 1.8, color: 'var(--text)', marginBottom: 16 }
  const liStyle = { fontFamily: MONO, fontSize: 14, lineHeight: 1.8, marginBottom: 8, marginLeft: 24 }

  return (
    <>
      <Helmet><title>Privacy Policy | BASH Architects</title></Helmet>

      <section style={{ padding: '128px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Link to="/" style={{ fontFamily: MONO, fontSize: 14, color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
            <ArrowLeft size={14} /> BACK TO HOME
          </Link>
          <h1 style={{ fontFamily: HEADING, fontSize: 'clamp(36px, 6vw, 56px)', lineHeight: 0.85, marginBottom: 16 }}>PRIVACY POLICY</h1>
          <p style={{ fontFamily: MONO, fontSize: 14, color: 'var(--text-muted)', marginBottom: 64 }}>Last Updated: March 9, 2026</p>

          <div style={sectionStyle}>
            <h2 style={h2Style}>1. INTRODUCTION</h2>
            <p style={pStyle}>Welcome to our Privacy Policy. Your privacy is critically important to us. This Privacy Policy document contains types of information that is collected and recorded by BASH Architects and how we use it.</p>
            <p style={pStyle}>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>2. INFORMATION WE COLLECT</h2>
            <p style={pStyle}>We collect several types of information for various purposes to provide and improve our service to you.</p>
            <h3 style={h3Style}>PERSONAL DATA</h3>
            <p style={pStyle}>While using our website, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This may include, but is not limited to:</p>
            <ul style={{ listStyleType: 'disc' }}>
              <li style={liStyle}>Email address</li>
              <li style={liStyle}>First name and last name</li>
              <li style={liStyle}>Phone number</li>
              <li style={liStyle}>Company name</li>
            </ul>
            <h3 style={h3Style}>USAGE DATA</h3>
            <p style={pStyle}>We may also collect information on how the website is accessed and used. This Usage Data may include information such as your computer's Internet Protocol address, browser type, browser version, the pages of our website that you visit, the time and date of your visit, time spent on those pages, and other diagnostic data.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>3. HOW WE USE YOUR INFORMATION</h2>
            <p style={pStyle}>We use the collected data for various purposes:</p>
            <ul style={{ listStyleType: 'disc' }}>
              <li style={liStyle}>To provide and maintain our service</li>
              <li style={liStyle}>To notify you about changes to our service</li>
              <li style={liStyle}>To allow you to participate in interactive features when you choose to do so</li>
              <li style={liStyle}>To provide customer support</li>
              <li style={liStyle}>To gather analysis or valuable information so that we can improve our service</li>
              <li style={liStyle}>To monitor the usage of our service</li>
              <li style={liStyle}>To detect, prevent and address technical issues</li>
              <li style={liStyle}>To provide you with news, special offers and general information about other services which we offer</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>4. DATA SECURITY</h2>
            <p style={pStyle}>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>5. COOKIES</h2>
            <p style={pStyle}>We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.</p>
            <p style={pStyle}>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>6. THIRD-PARTY SERVICES</h2>
            <p style={pStyle}>We may employ third-party companies and individuals to facilitate our website, provide the website on our behalf, perform website-related services or assist us in analyzing how our website is used.</p>
            <p style={pStyle}>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>7. YOUR RIGHTS</h2>
            <p style={pStyle}>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul style={{ listStyleType: 'disc' }}>
              <li style={liStyle}>The right to access - You have the right to request copies of your personal data</li>
              <li style={liStyle}>The right to rectification - You have the right to request that we correct any information you believe is inaccurate</li>
              <li style={liStyle}>The right to erasure - You have the right to request that we erase your personal data, under certain conditions</li>
              <li style={liStyle}>The right to restrict processing - You have the right to request that we restrict the processing of your personal data, under certain conditions</li>
              <li style={liStyle}>The right to data portability - You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions</li>
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>8. CHILDREN'S PRIVACY</h2>
            <p style={pStyle}>Our website does not address anyone under the age of 18. We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>9. CHANGES TO THIS PRIVACY POLICY</h2>
            <p style={pStyle}>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.</p>
            <p style={pStyle}>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>10. CONTACT US</h2>
            <p style={pStyle}>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul style={{ listStyleType: 'disc' }}>
              <li style={liStyle}>By email: privacy@yourcompany.com</li>
              <li style={liStyle}>By visiting our <Link to="/contact" style={{ color: 'var(--accent)' }}>contact page</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
