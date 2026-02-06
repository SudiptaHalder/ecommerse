'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')

  const ArrowIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 256 256" 
      focusable="false" 
      style={{
        userSelect: 'none',
        width: '100%',
        height: '100%',
        display: 'inline-block',
        fill: 'currentColor',
        color: 'currentColor',
        flexShrink: 0
      }}
    >
      {/* ✅ FIXED: removed weight="regular" */}
      <g>
        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
      </g>
    </svg>
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribing email:', email)
  }

  return (
    <div>
      <section 
        style={{
          backgroundColor: '#fafafa',
          paddingTop: '40px',
          height: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        {/* MAIN CARD */}
        <motion.div 
          style={{
            backgroundColor: '#fff',
            borderRadius: '48px',
            padding: '120px 64px',
            position: 'relative',
            overflow: 'hidden',
            maxWidth: '1300px',
            width: '95%',
            textAlign: 'center'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* BACKGROUND IMAGE */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '90%',
              zIndex: 1
            }}
          >
            <img 
              src="/spa12.jpg"   // ⚠️ MAKE SURE THIS EXISTS IN /public
              alt="Leafs"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* CONTENT */}
          <div style={{ position: 'relative', zIndex: 2 }}>

            <header style={{ marginBottom: '48px' }}>
              <p style={{ color: '#333', fontSize: '16px', fontWeight: 500 }}>
                Wellness Delivered
              </p>

              <h2 
                style={{
                  fontSize: '48px',
                  fontWeight: 300,
                  lineHeight: '1.1',
                  color: '#333',
                  margin: '16px 0'
                }}
              >
                Subscribe &<br />Stay Inspired
              </h2>

              <p 
                style={{
                  color: '#666',
                  fontSize: '18px',
                  maxWidth: '500px',
                  margin: '0 auto'
                }}
              >
                Fresh updates, self-care rituals & special rewards — straight to your inbox
              </p>
            </header>

            {/* FORM */}
            <motion.form 
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '24px'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <input 
                type="email"
                required
                placeholder="jane@framer.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  borderBottom: '1px solid #e6e6e6',
                  padding: '16px',
                  width: '400px',
                  maxWidth: '90%',
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  outline: 'none'
                }}
              />

              <motion.button 
                type="submit"
                style={{
                  backgroundColor: '#333',
                  borderRadius: '24px',
                  border: 'none',
                  padding: '16px 32px',
                  cursor: 'pointer',
                  color: '#fff'
                }}
                whileHover={{ backgroundColor: '#555', scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.form>

          </div>
        </motion.div>
      </section>
    </div>
  )
}
