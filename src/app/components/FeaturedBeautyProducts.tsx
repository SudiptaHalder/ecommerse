'use client'

import { motion } from 'framer-motion'

export default function FeaturedBeautyProducts() {
  const products = [
    {
      title: "Vistiq Signature Scented Candle",
      price: "$46",
      image: "/spa8.jpg", // Luxury candle
      href: "./shop/vistiq-signature-scented-candle"
    },
    {
      title: "Botanical Room & Linen Mist",
      price: "$28",
      image: "/spa9.jpg", // Room spray
      href: "./shop/botanical-room-linen-mist"
    },
    {
      title: "Essential Oil Roller Trio",
      price: "$44",
      image: "/spa10.jpg", // Essential oils
      href: "./shop/essential-oil-roller-trio"
    }
  ]

  return (
    <section className="bg-[#fafafa] py-32 px-6 my-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-20">
          <header className="mb-8">
            <div className="mb-4">
              <p className="text-[#333] font-medium text-lg">Vistiq Picks</p>
            </div>
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#333] leading-tight">
                Handpicked<br />
                for Your Ritual
              </h2>
            </div>
          </header>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-[#666]">
              From skin to soul, everything you need for your self-care ritual
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="group"
              whileHover={{ scale: 1.02 }}
            >
              {/* Image Container - Extra large width and height */}
              <motion.a
                href={product.href}
                className="block mb-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-[500px] w-full">
                  <div className="relative h-full w-full overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Price Tag */}
                    <div className="absolute top-6 right-6">
                      <div className="bg-white rounded-xl px-4 py-2 shadow-lg">
                        <span className="text-[#333] font-semibold text-sm">
                          {product.price}
                        </span>
                      </div>
                    </div>
                    
                    {/* Arrow Button */}
                    <div className="absolute bottom-6 right-6">
                      <div className="w-12 h-12 rounded-full border border-white bg-white/80 backdrop-blur-sm flex items-center justify-center transform rotate-45 group-hover:bg-[#333] group-hover:text-white group-hover:border-[#333] transition-all duration-300">
                        <svg 
                          className="w-5 h-5" 
                          fill="currentColor" 
                          viewBox="0 0 256 256"
                        >
                          <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
              
              {/* Text Below Image */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-[#333] mb-2 leading-tight">
                  {product.title}
                </h3>
                <p className="text-[#666] text-sm">
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visit Shop Button */}
        <div className="text-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="./shop"
            className="inline-flex items-center gap-3 bg-transparent text-[#333] px-8 py-4 rounded-full border border-[#333] font-medium text-lg transition-all duration-200 hover:bg-[#333] hover:text-white"
          >
            <span>Visit Shop</span>
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 256 256"
            >
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  )
}