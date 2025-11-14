'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer 
      className="framer-FAvFW framer-iHmdq framer-15xz0ro framer-v-15xz0ro" 
      data-framer-name="Desktop"
      style={{
        backgroundColor: '#fafafa',
        height: '100%',
        width: '100%',
        opacity: 1,
        fontFamily: 'sans-serif',
        fontSize: '12px',
        boxSizing: 'border-box',
        WebkitFontSmoothing: 'inherit',
        display: 'flex',
        flexFlow: 'column',
        placeContent: 'center flex-start',
        alignItems: 'center',
        gap: '10px',
        padding: '144px 24px 24px',
        position: 'relative'
      }}
    >
      {/* Main Footer Content */}
      <div 
        className="framer-q2vmic" 
        data-framer-name="Contact Us"
        style={{
          opacity: 1,
          width: '100%',
          maxWidth: '1200px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '60px',
          marginBottom: '60px'
        }}
      >
        {/* Contact Us Section */}
        <div 
          className="framer-1qwm1jp" 
          data-framer-name="Contact Us"
          style={{ opacity: 1 }}
        >
          <div 
            className="framer-1fz0hs8" 
            data-framer-component-type="RichTextContainer"
            style={{
              transform: 'none',
              opacity: 1,
              marginBottom: '24px'
            }}
          >
            <p 
              className="framer-text framer-styles-preset-1e15hu7" 
              data-styles-preset="YxqFnMjeX"
              style={{
                color: '#333',
                margin: 0,
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '1.5'
              }}
            >
              Contact Us
            </p>
          </div>

          {/* Email */}
          <div 
            className="framer-27drl4-container" 
            data-framer-name="About"
            name="About"
            style={{ opacity: 1, marginBottom: '16px' }}
          >
            <motion.a
              name="About"
              className="framer-jVdHG framer-J26LC framer-vAMNx framer-7clor2 framer-v-293z68 framer-1bmjr7m"
              data-framer-name="Big"
              href="mailto:hello@vistiq.spa"
              target="_blank"
              rel="noopener"
              style={{
                opacity: 1,
                textDecoration: 'none',
                color: 'inherit',
                display: 'block'
              }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="framer-sqb7ys" 
                data-framer-component-type="RichTextContainer"
                style={{
                  transform: 'none',
                  opacity: 1
                }}
              >
                <p 
                  className="framer-text framer-styles-preset-1wj6euv" 
                  data-styles-preset="wIqSiH5mY"
                  style={{
                    margin: 0,
                    fontSize: '18px',
                    lineHeight: '1.5',
                    color: '#333'
                  }}
                >
                  hello@vistiq.spa
                </p>
              </div>
              <div 
                className="framer-wo2z3y" 
                data-framer-name="Line"
                style={{
                  backgroundColor: '#333',
                  opacity: 0,
                  height: '1px',
                  marginTop: '4px'
                }}
              />
            </motion.a>
          </div>

          {/* Call Us */}
          <div 
            className="framer-4zs1a3-container" 
            data-framer-name="Services"
            name="Services"
            style={{ opacity: 1 }}
          >
            <motion.a
              name="Services"
              className="framer-jVdHG framer-J26LC framer-vAMNx framer-7clor2 framer-v-293z68 framer-1bmjr7m"
              data-framer-name="Big"
              href="https://calendly.com/pricing"
              target="_blank"
              rel="noopener"
              style={{
                opacity: 1,
                textDecoration: 'none',
                color: 'inherit',
                display: 'block'
              }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="framer-sqb7ys" 
                data-framer-component-type="RichTextContainer"
                style={{
                  transform: 'none',
                  opacity: 1
                }}
              >
                <p 
                  className="framer-text framer-styles-preset-1wj6euv" 
                  data-styles-preset="wIqSiH5mY"
                  style={{
                    margin: 0,
                    fontSize: '18px',
                    lineHeight: '1.5',
                    color: '#333'
                  }}
                >
                  Call Us
                </p>
              </div>
              <div 
                className="framer-wo2z3y" 
                data-framer-name="Line"
                style={{
                  backgroundColor: '#333',
                  opacity: 0,
                  height: '1px',
                  marginTop: '4px'
                }}
              />
            </motion.a>
          </div>
        </div>

        {/* Useful Links Section */}
        <div 
          className="framer-1su44f3" 
          data-framer-name="Menu"
          style={{ opacity: 1 }}
        >
          <div 
            className="framer-vhpnvb" 
            data-framer-name="Useful links"
            style={{ opacity: 1 }}
          >
            <div 
              className="framer-14u3yxw" 
              data-framer-component-type="RichTextContainer"
              style={{
                transform: 'none',
                opacity: 1,
                marginBottom: '24px'
              }}
            >
              <p 
                className="framer-text framer-styles-preset-1e15hu7" 
                data-styles-preset="YxqFnMjeX"
                style={{
                  color: '#333',
                  margin: 0,
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '1.5'
                }}
              >
                Useful Links
              </p>
            </div>

            {/* Navigation Links */}
            {[
              { name: 'About', href: './about' },
              { name: 'Services', href: './services' },
              { name: 'Packages', href: './packages' },
              { name: 'Shop', href: './shop' },
              { name: 'Blog', href: './blog' },
              { name: 'Contact', href: './contact' }
            ].map((link, index) => (
              <div 
                key={link.name}
                className={`framer-${['190uqfa', '70j60d', '15yvx8f', 'u6ix4h', '1h6iks3', '1ly2cas'][index]}-container`}
                data-framer-name={link.name}
                name={link.name}
                style={{ opacity: 1, marginBottom: '12px' }}
              >
                <motion.a
                  name={link.name}
                  className="framer-jVdHG framer-J26LC framer-vAMNx framer-7clor2 framer-v-7clor2 framer-1bmjr7m"
                  data-framer-name="Small"
                  href={link.href}
                  style={{
                    opacity: 1,
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block'
                  }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="framer-sqb7ys" 
                    data-framer-component-type="RichTextContainer"
                    style={{
                      transform: 'none',
                      opacity: 1
                    }}
                  >
                    <p 
                      className="framer-text framer-styles-preset-12kbavm" 
                      data-styles-preset="emo8XXQ5R"
                      style={{
                        margin: 0,
                        fontSize: '14px',
                        lineHeight: '1.5',
                        color: '#333'
                      }}
                    >
                      {link.name}
                    </p>
                  </div>
                  <div 
                    className="framer-wo2z3y" 
                    data-framer-name="Line"
                    style={{
                      backgroundColor: '#333',
                      opacity: 0,
                      height: '1px',
                      marginTop: '2px'
                    }}
                  />
                </motion.a>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Section */}
        <div 
          className="framer-10krast" 
          data-framer-name="Legal"
          style={{ opacity: 1 }}
        >
          <div 
            className="framer-1poezk5" 
            data-framer-component-type="RichTextContainer"
            style={{
              transform: 'none',
              opacity: 1,
              marginBottom: '24px'
            }}
          >
            <p 
              className="framer-text framer-styles-preset-1e15hu7" 
              data-styles-preset="YxqFnMjeX"
              style={{
                color: '#333',
                margin: 0,
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '1.5'
              }}
            >
              Legal
            </p>
          </div>

          <div 
            className="framer-12obnm0" 
            style={{ opacity: 1 }}
          >
            {[
              { name: 'Privacy Policy', href: './legal/privacy-policy' },
              { name: 'Cookie Policy', href: './legal/cookie-policy' },
              { name: 'Terms and Conditions', href: './legal/terms-and-conditions' },
              { name: 'Delivery and Return', href: './legal/delivery-and-return' }
            ].map((link, index) => (
              <motion.a
                key={link.name}
                className="framer-k5fijs framer-jxesvc"
                href={link.href}
                style={{
                  opacity: 1,
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block',
                  marginBottom: '12px'
                }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="framer-1t6djn-container" 
                  style={{ opacity: 1 }}
                >
                  <div 
                    className="framer-WGqkr framer-J26LC framer-1i2la7a framer-v-1i2la7a" 
                    style={{ opacity: 1 }}
                    data-framer-name="Default"
                  >
                    <div 
                      className="framer-5a9asv" 
                      data-framer-name="Title" 
                      data-framer-component-type="RichTextContainer"
                      style={{
                        transform: 'none',
                        opacity: 1,
                        willChange: 'auto'
                      }}
                    >
                      <p 
                        className="framer-text framer-styles-preset-12kbavm" 
                        data-styles-preset="emo8XXQ5R"
                        style={{
                          margin: 0,
                          fontSize: '14px',
                          lineHeight: '1.5',
                          color: '#333'
                        }}
                      >
                        {link.name}
                      </p>
                    </div>
                    <div 
                      className="framer-vwfopp" 
                      data-framer-name="Line"
                      style={{
                        backgroundColor: '#333',
                        opacity: 0,
                        height: '1px',
                        marginTop: '2px'
                      }}
                    />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Social Media and Copyright Section */}
        <div 
          className="framer-1oq7c12" 
          data-framer-name="Social Media and Copyright"
          style={{ opacity: 1 }}
        >
          {/* Social Media */}
          <div 
            className="framer-8gw7x4" 
            data-framer-name="Social Media"
            style={{ opacity: 1, marginBottom: '40px' }}
          >
            <div 
              className="framer-4y93n3" 
              data-framer-component-type="RichTextContainer"
              style={{
                transform: 'none',
                opacity: 1,
                marginBottom: '24px'
              }}
            >
              <p 
                className="framer-text framer-styles-preset-1e15hu7" 
                data-styles-preset="YxqFnMjeX"
                style={{
                  color: '#333',
                  margin: 0,
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '1.5'
                }}
              >
                Social Media
              </p>
            </div>

            {/* Social Media Links */}
            {[
              { name: 'X Network', href: 'https://x.com/CristianMielu' },
              { name: 'Instagram', href: 'https://www.instagram.com/cristian_mielu/' },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/notifications/?filter=all' },
              { name: 'Framer', href: 'https://framer.link/UdEP7eA' }
            ].map((link, index) => (
              <div 
                key={link.name}
                className={`framer-${['451xyu', '4hskfa', '1kzkbya', '1n6w6ss'][index]}-container`}
                data-framer-name={link.name}
                name={link.name}
                style={{ opacity: 1, marginBottom: '12px' }}
              >
                <motion.a
                  name={link.name}
                  className="framer-jVdHG framer-J26LC framer-vAMNx framer-7clor2 framer-v-7clor2 framer-1bmjr7m"
                  data-framer-name="Small"
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  style={{
                    opacity: 1,
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block'
                  }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="framer-sqb7ys" 
                    data-framer-component-type="RichTextContainer"
                    style={{
                      transform: 'none',
                      opacity: 1
                    }}
                  >
                    <p 
                      className="framer-text framer-styles-preset-12kbavm" 
                      data-styles-preset="emo8XXQ5R"
                      style={{
                        margin: 0,
                        fontSize: '14px',
                        lineHeight: '1.5',
                        color: '#333'
                      }}
                    >
                      {link.name}
                    </p>
                  </div>
                  <div 
                    className="framer-wo2z3y" 
                    data-framer-name="Line"
                    style={{
                      backgroundColor: '#333',
                      opacity: 0,
                      height: '1px',
                      marginTop: '2px'
                    }}
                  />
                </motion.a>
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div 
            className="framer-1d888m6-container" 
            style={{ opacity: 1 }}
          >
            <div 
              className="framer-gBNgW framer-iHmdq framer-QVkYa framer-1udc56e framer-v-1udc56e" 
              data-framer-name="Variant 1"
              style={{
                opacity: 1,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12px',
                color: '#666'
              }}
            >
              <div 
                className="framer-9mm6zj" 
                data-framer-component-type="RichTextContainer"
                style={{
                  transform: 'none',
                  opacity: 1
                }}
              >
                <p 
                  className="framer-text framer-styles-preset-1e15hu7" 
                  data-styles-preset="YxqFnMjeX"
                  style={{
                    color: '#666',
                    margin: 0
                  }}
                >
                  ©
                </p>
              </div>
              <div 
                className="framer-162jz13-container" 
                style={{ opacity: 1 }}
              >
                <p style={{
                  margin: 0,
                  padding: 0,
                  color: '#666',
                  fontFamily: '"Kumbh Sans", "Kumbh Sans Placeholder", sans-serif',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '1.2em',
                  visibility: 'visible',
                  fontStyle: 'normal',
                  letterSpacing: '0em',
                  fontVariantNumeric: 'tabular-nums',
                  whiteSpace: 'nowrap'
                }}>
                  2025
                </p>
              </div>
              <div 
                className="framer-xb6uv2" 
                data-framer-component-type="RichTextContainer"
                style={{
                  transform: 'none',
                  opacity: 1
                }}
              >
                <p 
                  className="framer-text framer-styles-preset-1e15hu7" 
                  data-styles-preset="YxqFnMjeX"
                  style={{
                    color: '#666',
                    margin: 0
                  }}
                >
                  <a 
                    className="framer-text framer-styles-preset-1pyy1mn" 
                    data-styles-preset="WxNbywKa4" 
                    href="https://www.uihub.design/" 
                    target="_blank" 
                    rel="noopener"
                    style={{
                      color: 'inherit',
                      textDecoration: 'none'
                    }}
                  >
                    UIhub.design
                  </a>
                </p>
              </div>
              <div 
                className="framer-b06kxx" 
                data-framer-component-type="RichTextContainer"
                style={{
                  transform: 'none',
                  opacity: 1
                }}
              >
                <p 
                  className="framer-text framer-styles-preset-1e15hu7" 
                  data-styles-preset="YxqFnMjeX"
                  style={{
                    color: '#666',
                    margin: 0
                  }}
                >
                  —
                </p>
              </div>
              <div 
                className="framer-1098d3o" 
                data-framer-component-type="RichTextContainer"
                style={{
                  transform: 'none',
                  opacity: 1
                }}
              >
                <p 
                  className="framer-text framer-styles-preset-1e15hu7" 
                  data-styles-preset="YxqFnMjeX"
                  style={{
                    color: '#666',
                    margin: 0
                  }}
                >
                  <a 
                    className="framer-text framer-styles-preset-1pyy1mn" 
                    data-styles-preset="WxNbywKa4" 
                    href="https://framer.link/cristianmielu" 
                    target="_blank" 
                    rel="noopener"
                    style={{
                      color: 'inherit',
                      textDecoration: 'none'
                    }}
                  >
                    Framer
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo */}
      <motion.div 
        className="framer-bwpx0x" 
        data-framer-name="Logo"
        style={{
          willChange: 'transform',
          opacity: 1,
          transform: 'none'
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div 
          className="framer-1ao15z9" 
          data-framer-component-type="RichTextContainer"
          style={{
            transform: 'none',
            opacity: 1
          }}
        >
          <h1 
            style={{
              fontFamily: '"Playfair Display", "Playfair Display Placeholder", serif',
              fontSize: '48px',
              fontWeight: 500,
              lineHeight: '1em',
              textAlign: 'center',
              color: '#333',
              margin: 0
            }}
          >
            VISTIQ
          </h1>
        </div>
      </motion.div>
    </footer>
  )
}