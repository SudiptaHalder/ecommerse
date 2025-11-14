'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function SpaHero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Background image scroll effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const borderRadius = useTransform(scrollYProgress, [0, 1], ['32px', '0px'])

  return (
    <section 
      ref={containerRef} 
      className="min-h-screen bg-spa-fafa relative overflow-hidden flex items-center justify-start px-6 py-24"
    >
      {/* Background Image with Scroll Effect and Border Radius */}
      <motion.div 
        style={{ 
          y: backgroundY,
          borderRadius: borderRadius
        }}
        className="absolute inset-6 mx-6 overflow-hidden"
      >
        <img
          src="/spa1.jpg"
          alt="Luxury spa interior with warm lighting and natural elements"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/30" />
      </motion.div>

      {/* Header Content */}
      <div className="relative z-10 text-left text-spa-white max-w-2xl ml-6 sm:ml-12 lg:ml-24">
        
        {/* Main Heading - Different Text */}
        <header className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.9] mb-4"
          >
            <span className="block">Your Sanctuary</span>
            <span className="block">For Renewal</span>
            <span className="block">&amp; Radiance</span>
          </motion.h1>
        </header>

        {/* Subtitle - Different Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-xl leading-relaxed"
        >
          Experience transformative wellness journeys that restore balance and reveal your natural glow
        </motion.p>

        {/* Buttons - Same Structure, Different Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-start items-start"
        >
          
          {/* Book Appointment Button - Different Text */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.zoho.com/bookings/industries/massage-therapy-scheduling-software.html"
            target="_blank"
            rel="noopener"
            className="bg-spa-white text-spa-black px-8 py-4 rounded-full border border-spa-white font-medium text-lg flex items-center gap-3 transition-all duration-200 hover:shadow-lg"
          >
            <span>Reserve Your Session</span>
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 256 256"
            >
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
            </svg>
          </motion.a>

          {/* Shop Products Button - Different Text */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="./shop"
            className="bg-transparent text-spa-white px-8 py-4 rounded-full border border-spa-white font-medium text-lg flex items-center gap-3 transition-all duration-200 hover:bg-white/10"
          >
            <span>Discover Our Products</span>
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 256 256"
            >
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}