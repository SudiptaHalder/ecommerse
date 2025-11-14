'use client'

import { motion } from 'framer-motion'

export default function TextReveal() {
  return (
    <section className="py-32 bg-essentia-beige">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-center leading-tight"
        >
          <span className="text-essentia-light-gray">
            Five proven ingredients that actually work.
          </span>
          <br />
          <span className="text-essentia-gray">Less bottles. Better skin. </span>
          <strong className="text-essentia-dark">Smarter routine.</strong>
        </motion.h2>
      </div>
    </section>
  )
}