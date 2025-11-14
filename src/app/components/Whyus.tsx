'use client'

import { motion } from 'framer-motion'

export default function WhyUs() {
  return (
    <section className="bg-[#fafafa] py-16 px-2 sm:px-4">
      <div className="max-w mx-auto">
        {/* Header Content */}
        <div className="text-center mb-12">
          <header className="mb-6">
            <div className="mb-3">
              <p className="text-[#333] font-medium text-lg">The Vistiq Experience</p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#333] leading-tight">
                Where Expertise<br />
                Meets Indulgence
              </h2>
            </div>
          </header>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-base text-[#666] text-center">
              We blend science and serenity to deliver meaningful results every time
            </p>
          </div>
        </div>

        {/* 3-Column Grid Section with Equal Heights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-[800px]">
          {/* Left Column - Crafted for Calm + Community Love */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* Crafted for Calm Card */}
            <div className="bg-white rounded-3xl border border-[#fafafa] overflow-hidden relative flex-1">
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/zyncRzRifG0NcYQDIQdx3Udbw.png"
                  alt="Leafs"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-white/80 rounded-2xl p-4">
                <div className="text-center">
                  <p className="text-[#333] font-medium mb-2 text-sm">Our Philosophy</p>
                  <h3 className="text-lg font-semibold text-[#333] mb-2">Crafted for Calm</h3>
                  <p className="text-[#333] text-xs">
                    We create more than treatments—we create space to breathe.
                  </p>
                </div>
              </div>
            </div>

            {/* Community Love Card */}
            <div className="bg-white rounded-3xl border border-[#fafafa] p-4 flex-1 flex flex-col">
              {/* 5-star rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3 h-3 fill-[#333]"
                    viewBox="0 0 256 256"
                  >
                    <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
                  </svg>
                ))}
              </div>

              <div className="mb-4 flex-1">
                <h3 className="text-lg font-semibold text-[#333] mb-2">Community Love</h3>
                <p className="text-[#666] text-xs leading-relaxed">
                  Vistiq is more than a spa — it's a part of our clients' self-care rituals. 
                  From first-time guests to loyal regulars, our community keeps coming back 
                  for the warmth, the care, and the calm.
                </p>
              </div>

              {/* User Avatars */}
              <div className="flex -space-x-2 mb-4">
                {[
                  "https://framerusercontent.com/images/Yj75uUzBke8UeYiRKxUE2jnj2Y.png",
                  "https://framerusercontent.com/images/cjqP7NAZxNJpuIUQWPyS3SpJdg.png",
                  "https://framerusercontent.com/images/gcD4NuEA5uXgg7CNoYjHMWxr8M.png",
                  "https://framerusercontent.com/images/QatWPokTyqZXDiIrJEyV7q9nZA.png",
                  "https://framerusercontent.com/images/sOQ0aoMIs9IuhMYqCagryQ41os.png"
                ].map((src, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-xl bg-white border border-white overflow-hidden"
                  >
                    <img
                      src={src}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Read Testimonials Button */}
              <motion.a
                href="./#testimonials-scroll-section"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 text-[#333] font-medium text-xs group mt-auto"
              >
                <span>Read Testimonials</span>
                <div className="w-5 h-5 rounded-full border border-[#333] flex items-center justify-center transform rotate-45 group-hover:bg-[#333] group-hover:text-white transition-all duration-300">
                  <svg 
                    className="w-2 h-2" 
                    fill="currentColor" 
                    viewBox="0 0 256 256"
                  >
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                  </svg>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Middle Column - Wider Professionals You Can Trust */}
          <div className="lg:col-span-6">
            {/* Professionals You Can Trust Card */}
            <div className="bg-white rounded-3xl border border-[#fafafa] overflow-hidden relative h-full">
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/spa11.jpg"
                  alt="Treatment Spa"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-black/80 rounded-2xl p-4">
                <header className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-3">Professionals You Can Trust</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    At Vistiq, our team consists of highly trained, certified spa and wellness professionals. 
                    From licensed massage therapists to expert estheticians, every practitioner is 
                    hand-selected for their skill, experience, and intuitive care.
                  </p>
                </header>

                {/* Meet Our Team Button */}
                <motion.a
                  href="./about#our-team"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 text-white font-medium text-sm group"
                >
                  <span>Meet Our Team</span>
                  <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center transform rotate-45 group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <svg 
                      className="w-2 h-2" 
                      fill="currentColor" 
                      viewBox="0 0 256 256"
                    >
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                    </svg>
                  </div>
                </motion.a>
              </div>
            </div>
          </div>

          {/* Right Column - Real Results + Our Promise */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* Real Results Card */}
            <div className="bg-white rounded-3xl border border-[#fafafa] p-4 flex-1 flex flex-col">
              <div className="backdrop-blur-md bg-[#fafafa] rounded-xl p-3 mb-3">
                <h3 className="text-lg font-semibold text-[#333]">Real Results</h3>
              </div>

              {/* Statistics */}
              <div className="space-y-2 flex-1">
                <div className="bg-[#fafafa] rounded-lg p-2 border border-[#fafafa]">
                  <p className="text-[#333] font-medium text-xs mb-1">Repeat Visits</p>
                  <p className="text-lg font-bold text-[#333]">82%</p>
                </div>
                <div className="bg-[#fafafa] rounded-lg p-2 border border-[#fafafa]">
                  <p className="text-[#333] font-medium text-xs mb-1">Therapist Experience</p>
                  <p className="text-lg font-bold text-[#333]">9+ years</p>
                </div>
                <div className="bg-[#fafafa] rounded-lg p-2 border border-[#fafafa]">
                  <p className="text-[#333] font-medium text-xs mb-1">Product Repurchase</p>
                  <p className="text-lg font-bold text-[#333]">72%</p>
                </div>
              </div>
            </div>

            {/* Our Promise to You Card */}
            <div className="bg-white rounded-3xl border border-[#fafafa] overflow-hidden relative flex-1">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/MLpblQfTYN57CoQ1J8dy3pbiUs.png"
                  alt="Relaxation"
                  className="w-full h-full object-cover saturate-200"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black" />
              </div>
              
              {/* Content */}
              <div className="relative p-4 flex flex-col justify-end h-full">
                <div className="text-center mb-4">
                  <p className="text-white font-medium text-xs mb-2">Our Promise to You</p>
                  <p className="text-white text-xs">
                    This isn't just a spa treatment—it's a reset for your mind, body, and soul.
                  </p>
                </div>

                {/* Book Your Escape Button */}
                <motion.a
                  href="https://www.zoho.com/bookings/industries/massage-therapy-scheduling-software.html"
                  target="_blank"
                  rel="noopener"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full bg-[#333] text-white text-center py-2 rounded-xl font-medium text-xs border border-[#333] hover:bg-white hover:text-[#333] transition-all duration-300"
                >
                  Book Your Escape
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}