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
      <g weight="regular">
        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
      </g>
    </svg>
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribing email:', email)
  }

  return (
    <div className="framer-1fjx2p3-container">
      <section 
        className="framer-WN432 framer-iHmdq framer-Ot2y0 framer-s5wRh framer-zvkvif framer-v-zvkvif" 
        data-framer-name="Desktop"
        style={{
          backgroundColor: '#fafafa',
          height: '100vh',
          width: '100%',
          opacity: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          fontSize: '12px',
          boxSizing: 'border-box',
          WebkitFontSmoothing: 'inherit',
          position: 'relative'
        }}
      >
        {/* MAIN NEWSLETTER CARD */}
        <motion.div 
          className="framer-1sc45bz" 
          data-framer-name="Content"
          style={{
            backgroundColor: '#fff',
            borderRadius: '48px',
            opacity: 1,
            padding: '90px 48px',
            position: 'relative',
            overflow: 'hidden',

            /* ⬇️ WIDER SECTION HERE */
            maxWidth: '1100px',
            width: '100%',

            textAlign: 'center'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Leafs */}
          <div 
            className="framer-10vxgfb" 
            data-framer-name="Bottom leafs"
            style={{
              filter: 'saturate(2)',
              mask: 'linear-gradient(0deg, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0) 90%)',
              willChange: 'transform',
              opacity: 1,
              transform: 'translateY(12.5377px)',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '90%',
              zIndex: 1
            }}
          >
            <div style={{
              position: 'absolute',
              borderRadius: 'inherit',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }}>
              <img 
                decoding="auto"
                src="/spa12.jpg"
                alt="Leafs"
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  borderRadius: 'inherit',
                  objectPosition: 'center',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>

          {/* Header Content */}
          <div 
            className="framer-8lmpji" 
            data-framer-name="Header Content"
            style={{
              opacity: 1,
              position: 'relative',
              zIndex: 2
            }}
          >
            <header 
              className="framer-1azh09c" 
              data-framer-name="Header"
              style={{
                opacity: 1,
                marginBottom: '48px'
              }}
            >
              <div 
                className="framer-scacko" 
                data-framer-name="Wellness and spa" 
                data-framer-component-type="RichTextContainer"
                style={{
                  transform: 'none',
                  opacity: 1,
                  marginBottom: '16px'
                }}
              >
                <p 
                  className="framer-text framer-styles-preset-1e15hu7" 
                  data-styles-preset="YxqFnMjeX"
                  style={{
                    color: '#333',
                    margin: 0,
                    fontSize: '16px',
                    lineHeight: '1.5',
                    fontWeight: 500
                  }}
                >
                  Wellness Delivered
                </p>
              </div>

              <div 
                className="framer-m4zdas"
                data-framer-component-type="RichTextContainer"
                style={{
                  transform: 'none',
                  opacity: 1,
                  marginBottom: '24px'
                }}
              >
                <h2 
                  className="framer-text framer-styles-preset-1hqoa5k" 
                  data-styles-preset="r5oBA7fod"
                  style={{
                    margin: 0,
                    fontSize: '48px',
                    fontWeight: 300,
                    lineHeight: '1.1',
                    color: '#333'
                  }}
                >
                  Subscribe &<br />Stay Inspired
                </h2>
              </div>

              <div 
                className="framer-vk10y8" 
                data-framer-component-type="RichTextContainer"
                style={{
                  transform: 'none',
                  opacity: 1
                }}
              >
                <p 
                  className="framer-text framer-styles-preset-1bcwwhy"
                  style={{
                    textAlign: 'center',
                    color: '#666',
                    margin: 0,
                    fontSize: '18px',
                    lineHeight: '1.5',
                    maxWidth: '500px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}
                >
                  Fresh updates, self-care rituals & special rewards — straight to your inbox
                </p>
              </div>
            </header>

            {/* Newsletter Form */}
            <div className="framer-1jba0u9-container" style={{ opacity: 1 }}>
              <motion.form 
                className="framer-q8TNb framer-kA2Ru framer-6wi7lo framer-v-6wi7lo" 
                data-framer-name="Default"
                style={{
                  maxWidth: '100%',
                  width: '100%',
                  opacity: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '24px'
                }}
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <label style={{ opacity: 1, width: '100%', maxWidth: '400px' }}>
                  <div 
                    style={{
                      borderBottom: '1px solid #e6e6e6',
                      opacity: 1,
                      padding: '16px 0',
                      width: '100%'
                    }}
                  >
                    <input 
                      type="email"
                      required
                      placeholder="jane@framer.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: '100%',
                        border: 'none',
                        outline: 'none',
                        fontSize: '16px',
                        color: '#333',
                        backgroundColor: 'transparent'
                      }}
                    />
                  </div>
                </label>

                <motion.button 
                  type="submit"
                  style={{
                    backgroundColor: '#333',
                    borderRadius: '24px',
                    border: 'none',
                    padding: '16px 32px',
                    cursor: 'pointer'
                  }}
                  whileHover={{ backgroundColor: '#555', scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span style={{ color: '#fff', fontSize: '16px', fontWeight: 500 }}>
                    Subscribe
                  </span>
                </motion.button>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </section>

      <style jsx>{`
        .framer-form-input::placeholder {
          color: #666;
          opacity: 1;
        }

        @media (max-width: 768px) {
          .framer-1sc45bz {
            padding: 60px 24px;
            margin: 0 20px;
          }
        }
      `}</style>
    </div>
  )
}
