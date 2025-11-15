'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer 
      style={{
        backgroundColor: '#fafafa',
        width: '100%',
        opacity: 1,
        fontFamily: 'sans-serif',
        boxSizing: 'border-box',
        padding: '144px 24px 40px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '60px'
      }}
    >

      {/* ========================= MAIN GRID ========================= */}
      <div 
        style={{
          width: '100%',
          maxWidth: '1200px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '60px'
        }}
      >

        {/* ========================= CONTACT ========================= */}
        <div>
          <p style={{ fontSize: '16px', fontWeight: 500, color: '#333', marginBottom: '24px' }}>
            Contact Us
          </p>

          <motion.a 
            href="mailto:hello@Eloria.spa"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
            style={{ textDecoration: 'none', color: '#333', display: 'block', marginBottom: '12px' }}
          >
            <p style={{ fontSize: '18px', margin: 0 }}>hello@Eloria.spa</p>
          </motion.a>

          <motion.a 
            href="https://calendly.com/pricing"
            target="_blank"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
            style={{ textDecoration: 'none', color: '#333', display: 'block' }}
          >
            <p style={{ fontSize: '18px', margin: 0 }}>Call Us</p>
          </motion.a>
        </div>

        {/* ========================= USEFUL LINKS ========================= */}
        <div>
          <p style={{ fontSize: '16px', fontWeight: 500, color: '#333', marginBottom: '24px' }}>
            Useful Links
          </p>

          {[
            { name: 'About', href: './about' },
            { name: 'Services', href: './services' },
            { name: 'Packages', href: './packages' },
            { name: 'Shop', href: './shop' },
            { name: 'Blog', href: './blog' },
            { name: 'Contact', href: './contact' }
          ].map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
              style={{
                textDecoration: 'none',
                color: '#333',
                fontSize: '14px',
                display: 'block',
                marginBottom: '12px'
              }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* ========================= LEGAL ========================= */}
        <div>
          <p style={{ fontSize: '16px', fontWeight: 500, color: '#333', marginBottom: '24px' }}>
            Legal
          </p>

          {[
            { name: 'Privacy Policy', href: './legal/privacy-policy' },
            { name: 'Cookie Policy', href: './legal/cookie-policy' },
            { name: 'Terms and Conditions', href: './legal/terms-and-conditions' },
            { name: 'Delivery and Return', href: './legal/delivery-and-return' }
          ].map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
              style={{
                textDecoration: 'none',
                color: '#333',
                fontSize: '14px',
                display: 'block',
                marginBottom: '12px'
              }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* ========================= SOCIAL MEDIA ========================= */}
        <div>
          <p style={{ fontSize: '16px', fontWeight: 500, color: '#333', marginBottom: '24px' }}>
            Social Media
          </p>

          {[
            { name: 'X Network', href: 'https://x.com/CristianMielu' },
            { name: 'Instagram', href: 'https://www.instagram.com/cristian_mielu/' },
            { name: 'LinkedIn', href: 'https://www.linkedin.com/notifications/?filter=all' },
            { name: 'Framer', href: 'https://framer.link/UdEP7eA' }
          ].map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
              style={{
                textDecoration: 'none',
                color: '#333',
                fontSize: '14px',
                display: 'block',
                marginBottom: '12px'
              }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>

      {/* ========================= COPYRIGHT ========================= */}
      <div style={{ textAlign: 'center', color: '#666', fontSize: '12px' }}>
        © 2025 — UIhub.design — Framer
      </div>

      {/* ====================================================== */}
      {/* HUGE Eloria LOGO — SCROLL REVEAL ONLY ONCE            */}
      {/* ====================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{
          width: '100%',
          textAlign: 'center',
          marginTop: '-150px',
          paddingTop: '0px'
        }}
      >
        <motion.h1
          style={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 500,
            fontSize: 'clamp(140px, 30vw, 380px)',
            lineHeight: '0.9',
            color: '#333',
            margin: 0,
            letterSpacing: '0.03em',
            textTransform: 'uppercase',
            width: '100%',
            textAlign: 'center',
          }}
          initial={{ y: 40 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          Eloria
        </motion.h1>
      </motion.div>

    </footer>
  )
}
