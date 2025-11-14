
'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Content animations
  const textOpacity = useTransform(smooth, [0, 0.15], [0, 1])
  const textY = useTransform(smooth, [0, 0.15], [30, 0])

  const bgOpacity = useTransform(smooth, [0.15, 0.3], [0, 1])
  const bgScale = useTransform(smooth, [0.15, 0.3], [0.3, 1])

  // Shared fade + scale for images
  const imgOpacity = useTransform(smooth, [0.25, 0.5], [0, 1])
  const imgScale = useTransform(smooth, [0.25, 0.5], [0.8, 1])

  return (
    <section
      ref={sectionRef}
      className="bg-[#fafafa] min-h-[300vh] relative overflow-visible"
    >
      <div
        ref={containerRef}
        className="sticky top-0 h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-6xl mx-auto w-full relative">

          {/* White Background */}
          <motion.div
            style={{ opacity: bgOpacity, scale: bgScale }}
            className="absolute left-0 right-0 top-[-160px] bottom-[-160px] bg-white rounded-3xl -z-10"
          />

          {/* ⭐ Floating Images — NOW FIXED POSITIONS */}
          <div className="absolute inset-0 z-20 pointer-events-none">

            {/* Top-left */}
            <motion.div
              style={{
                opacity: imgOpacity,
                scale: imgScale,
              }}
              className="
                absolute 
                w-40 h-40 lg:w-48 lg:h-48 
                rounded-lg overflow-hidden
                left-[50px]
                top-[-60%]
                translate-x-[-10%]
                translate-y-[-10%]
              "
            >
              <img
                src="https://framerusercontent.com/images/wCftnjPaymRQsbJCVIUnkEQVQJY.png"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Top-right */}
            <motion.div
              style={{
                opacity: imgOpacity,
                scale: imgScale,
              }}
              className="
                absolute 
                w-60 h-60 lg:w-72 lg:h-72 
                rounded-lg overflow-hidden
                right-[-110px]
                top-[-40%]
                translate-x-[10%]
                translate-y-[-10%]
              "
            >
              <img
                src="https://framerusercontent.com/images/tvxIdtB7HiMXF5IPWjvrysSAPW4.png"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Bottom-left */}
            <motion.div
              style={{
                opacity: imgOpacity,
                scale: imgScale,
              }}
              className="
                absolute 
                w-40 h-40 lg:w-48 lg:h-48
                rounded-lg overflow-hidden
                left-[-30px]
                bottom-[-30%]
                translate-x-[-10%]
                translate-y-[10%]
              "
            >
              <img
                src="https://framerusercontent.com/images/agvZy0055wDgOBzuPOgp87UQuc.png"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Bottom-right */}
            <motion.div
              style={{
                opacity: imgOpacity,
                scale: imgScale,
              }}
              className="
                absolute 
                w-60 h-60 lg:w-72 lg:h-72 
                rounded-lg overflow-hidden
                right-[-50px]
                bottom-[-60%]
                translate-x-[10%]
                translate-y-[10%]
              "
            >
              <img
                src="https://framerusercontent.com/images/Ww4R4NAPmgJtY4BBSuKPVUzGFM.png"
                className="w-full h-full object-cover"
              />
            </motion.div>

          </div>

          {/* TEXT AREA */}
          <div className="relative z-10 text-center">

            <motion.div style={{ opacity: textOpacity, y: textY }}>
              <header className="mb-8">
                <p className="text-[#333] font-medium text-lg mb-4">
                  About Us
                </p>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#333] leading-tight">
                  Where Luxury <br /> Meets Serenity
                </h2>
              </header>

              <p className="text-lg text-[#666] max-w-xl mx-auto">
                Experience personalized spa treatments that restore balance and elevate self-care
              </p>
            </motion.div>

            {/* Button */}
            <motion.div style={{ opacity: imgOpacity }} className="flex justify-center mt-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/about"
                className="bg-transparent text-[#333] px-8 py-4 rounded-full border border-[#333] font-medium text-lg flex items-center gap-3 hover:bg-[#333] hover:text-white transition-all"
              >
                <span>More About Vistiq</span>
                <svg className="w-5 h-5" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/>
                </svg>
              </motion.a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
