'use client'

import { motion } from 'framer-motion'

export default function SpecialSpaPackages() {
  const packages = [
    {
      title: "The Glow Ritual",
      duration: "2 hrs 30 min",
      price: "$240",
      image: "/spa1.jpg",
      services: [
        "Radiance Boost Facial",
        "Eloria Gua Sha Facial Ritual",
        "Eye & Lip Revival Add-On"
      ],
      href: "#"
    },
    {
      title: "Hot Stone Harmony",
      duration: "2 hrs 30 min",
      price: "$265",
      image: "/spa2.jpg",
      services: [
        "Eloria Signature Hot Stone Massage",
        "Upper Body Hot Stone Therapy",
        "Hot Stone Scalp & Neck Ritual"
      ],
      href: "#"
    },
    {
      title: "Hand & Foot Spa Ritual",
      duration: "3 hrs",
      price: "$255",
      image: "/spa3.jpg",
      services: [
        "Eloria Signature Manicure",
        "Eloria Signature Pedicure",
        "Aromatherapy Spa Pedicure"
      ],
      href: "#"
    },
    {
      title: "Relax & Reset Package",
      duration: "3 hrs",
      price: "$295",
      image: "/spa4.jpg",
      services: [
        "Deep Tissue & Hot Towel Ritual",
        "Aromatherapy Hot Stone Massage",
        "Express Glow Facial"
      ],
      href: "#"
    },
    {
      title: "Weekend Wellness Escape",
      duration: "4 hrs 15 min",
      price: "$540",
      image: "/spa5.jpg",
      services: [
        "Couples Deep Tissue Experience",
        "Couples Hot Stone Escape",
        "Detox & Clear Purifying Facial"
      ],
      href: "#"
    },
    {
      title: "The Ultimate Reset",
      duration: "4 hrs 15 min",
      price: "$410",
      image: "/spa6.jpg",
      services: [
        "Full-Body Aroma Detox",
        "Charcoal & Sea Salt Detox Ritual",
        "Detox & Clear Purifying Facial"
      ],
      href: "#"
    }
  ]

  return (
    <section className="bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-20">
          <header className="mb-8">
            <div className="mb-4">
              <p className="text-white font-medium text-lg">Exclusive Packages</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="lg:flex-1 text-center lg:text-left">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
                  Indulge in Our Signature Packages
                </h2>
              </div>
              <div className="lg:flex-1 text-center lg:text-right">
                <p className="text-lg text-gray-300">
                  Elevate your wellness ritual with our best-loved treatments
                </p>
              </div>
            </div>
          </header>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Package Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-800 h-full flex flex-col">
                {/* Image and Title Section */}
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/90 to-white z-10" />
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Header Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        {pkg.title}
                      </h3>
                      <div className="flex justify-between items-center">
                        <p className="text-gray-600 text-sm">{pkg.duration}</p>
                        <p className="text-gray-900 font-semibold text-lg">{pkg.price}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services and Button Section */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Services Included */}
                  <div className="mb-6 flex-1">
                    <p className="text-gray-900 font-medium mb-4">Included services:</p>
                    <div className="space-y-3">
                      {pkg.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-700 text-sm leading-relaxed">{service}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Book Button */}
                  <motion.a
                    href={pkg.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gray-900 text-white py-4 px-6 rounded-2xl font-medium text-center flex items-center justify-center gap-3 group/btn hover:bg-gray-800 transition-all duration-300"
                  >
                    <span>Book this Package</span>
                    <div className="w-5 h-5 transform rotate-45 group-hover/btn:translate-x-1 transition-transform duration-300">
                      <svg 
                        fill="currentColor" 
                        viewBox="0 0 256 256"
                      >
                        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                      </svg>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Packages Button */}
        <div className="text-center">
          <motion.a
            href="./packages"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-2xl font-medium text-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            <span>View All Packages</span>
            <div className="w-5 h-5 transform rotate-45">
              <svg 
                fill="currentColor" 
                viewBox="0 0 256 256"
              >
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}