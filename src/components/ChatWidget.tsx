import { useState } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'

const HEADING = 'Impact, "Arial Black", sans-serif'
const MONO = '"Courier New", Courier, Monaco, Consolas, monospace'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <>
      {/* FAB */}
      <button
        className="chat-fab"
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'var(--accent)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          transition: 'background 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {open ? <X size={24} color="white" /> : <MessageCircle size={24} color="white" />}
      </button>

      {/* Green dot */}
      {!open && (
        <div
          style={{
            position: 'fixed',
            bottom: 72,
            right: 24,
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: '#22c55e',
            border: '2px solid white',
            zIndex: 101,
          }}
        />
      )}

      {/* Panel */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: 96,
            right: 24,
            width: 380,
            background: 'var(--bg)',
            border: '2px solid var(--border)',
            borderRadius: 0,
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'var(--bg-dark)',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h4
                style={{
                  fontFamily: HEADING,
                  fontSize: 16,
                  color: 'white',
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                BASH ARCHITECTS
              </h4>
              <p style={{ fontFamily: MONO, fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
                We typically reply within minutes
              </p>
            </div>
          </div>

          {/* Messages */}
          <div style={{ padding: 24, flex: 1, minHeight: 200 }}>
            <div
              style={{
                border: '1px solid var(--border)',
                padding: '16px 20px',
                marginBottom: 8,
                background: 'transparent',
              }}
            >
              <p style={{ fontFamily: MONO, fontSize: 14, lineHeight: 1.5 }}>
                Hey there! 👋 How can we help you today?
              </p>
            </div>
          </div>

          {/* Input */}
          <div
            style={{
              padding: '16px 24px 24px',
              display: 'flex',
              gap: 8,
            }}
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              style={{
                flex: 1,
                fontFamily: MONO,
                fontSize: 14,
                padding: '12px 16px',
                border: '1px solid var(--border)',
                background: 'transparent',
                outline: 'none',
              }}
            />
            <button
              style={{
                background: 'var(--accent)',
                border: 'none',
                padding: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Send size={16} color="white" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
