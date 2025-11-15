// 'use client'

// import { motion } from 'framer-motion'

// export default function SignatureSpaServices() {
//   const keywords = [
//     ["Luxury Spa", "Wellness Retreat", "Mind Body Soul", "Relaxation Time"],
//     ["Spa Day", "Holistic Healing", "Pamper Yourself", "Luxury Lifestyle"],
//     ["Luxury Facial", "Glowing Skin", "Hydrating Facial", "Anti Aging Treatment"]
//   ]

//   const services = [
//     {
//       title: "Luxury Facials",
//       description: "Hydrating, anti-aging, and brightening facials for radiant skin.",
//       image: "/spa3.jpg", // Spa facial
//       href: "./services#luxury-facials"
//     },
//     {
//       title: "Deep Tissue Massage",
//       description: "Relieve tension and stress with expert deep tissue techniques that promote relaxation.",
//       image: "/spa2.jpg", // Massage
//       href: "./services#deep-tissue-massage"
//     },
//     {
//       title: "Aromatherapy Rituals",
//       description: "Immerse yourself in calming essential oils and holistic techniques for full-body renewal.",
//       image: "/spa4.jpg", // Aromatherapy
//       href: "./services#aromatherapy-rituals"
//     },
//     {
//       title: "Full-Body Detox Wrap",
//       description: "Detoxify, exfoliate, and hydrate your skin with our signature mineral-rich body wrap.",
//       image: "/spa5.jpg", // Spa treatment
//       href: "./services#full-body-detox-wrap"
//     },
//     {
//       title: "Hot Stone Therapy",
//       description: "Experience deep relaxation and muscle relief through soothing heated stone treatments.",
//       image: "/spa6.jpg", // Hot stones
//       href: "./services#hot-stone-therapy"
//     },
//     {
//       title: "Spa Manicure & Pedicure",
//       description: "Luxury nail care services that nourish, shape, and beautify your hands and feet.",
//       image: "/spa7.jpg", // Nail care
//       href: "./services#spa-manicure-pedicure"
//     }
//   ]

//   return (
//     <section className="bg-[#fafafa] min-h-screen relative overflow-visible py-20">
//       <div className="flex px-6">
//         {/* Left Side - Static Text Content */}
//         <div className="w-2/5 pr-12">
//           <div className="text-left max-w-md sticky top-24">
//             <header className="mb-8">
//               <div className="mb-4">
//                 <p className="text-[#333] font-medium text-lg">Luxury Treatments</p>
//               </div>
//               <div>
//                 <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#333] leading-tight">
//                   Healing Hands,<br />
//                   Lasting Benefits
//                 </h2>
//               </div>
//             </header>
            
//             <div className="mb-8">
//               <p className="text-lg text-[#666]">
//                 Feel the difference with expert care that restores and revitalizes
//               </p>
//             </div>

//             {/* Keywords Grid */}
//             <div className="space-y-4 mb-8">
//               {keywords.map((row, rowIndex) => (
//                 <div key={rowIndex} className="flex flex-wrap gap-3">
//                   {row.map((keyword, index) => (
//                     <div
//                       key={index}
//                       className="bg-white rounded-xl px-4 py-2 text-[#666] font-medium text-sm border border-gray-200 shadow-sm"
//                     >
//                       {keyword}
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>

//             {/* Button */}
//             <div className="flex justify-start">
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href="./services"
//                 className="bg-transparent text-[#333] px-8 py-4 rounded-full border border-[#333] font-medium text-lg flex items-center gap-3 transition-all duration-200 hover:bg-[#333] hover:text-white"
//               >
//                 <span>Full Services List</span>
//                 <svg 
//                   className="w-5 h-5" 
//                   fill="currentColor" 
//                   viewBox="0 0 256 256"
//                 >
//                   <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
//                 </svg>
//               </motion.a>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Static Service Cards */}
//         <div className="w-3/5">
//           <div className="flex flex-col gap-16">
//             {services.map((service, index) => (
//               <motion.a
//                 key={index}
//                 href={service.href}
//                 className="group block w-full"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <div className=" rounded-3xl overflow-hidden  h-full w-[80%] max-w-4xl ml-20">
//                   <div className="flex h-full">
//                     {/* Image with Border Radius */}
//                     <div className="w-3/5">
//                       <div className="h-full relative">
//                         <img
//                           src={service.image}
//                           alt={service.title}
//                           className="w-full h-full object-cover rounded-3xl group-hover:scale-105 transition-transform duration-300"
//                         />
//                       </div>
//                     </div>
                    
//                     {/* Content */}
//                     <div className="w-3/5 p-8 flex flex-col justify-between">
//                       <div>
//                         <h3 className="text-2xl font-semibold text-[#333] mb-4">
//                           {service.title}
//                         </h3>
//                         <p className="text-[#666] text-base leading-relaxed">
//                           {service.description}
//                         </p>
//                       </div>
                      
//                       {/* View Details Button */}
//                       <div className="flex items-center justify-between mt-6">
//                         <span className="text-[#333] text-base font-medium">View details</span>
//                         <div className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center transform rotate-45 group-hover:bg-[#333] group-hover:text-white transition-all duration-200">
//                           <svg 
//                             className="w-5 h-5" 
//                             fill="currentColor" 
//                             viewBox="0 0 256 256"
//                           >
//                             <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'

import { motion } from 'framer-motion'

export default function SignatureSpaServices() {
  const keywords = [
    ["Luxury Spa", "Wellness Retreat", "Mind Body Soul", "Relaxation Time"],
    ["Spa Day", "Holistic Healing", "Pamper Yourself", "Luxury Lifestyle"],
    ["Luxury Facial", "Glowing Skin", "Hydrating Facial", "Anti Aging Treatment"]
  ]

  const services = [
    {
      title: "Luxury Facials",
      description: "Hydrating, anti-aging, and brightening facials for radiant skin.",
      image: "/spa3.jpg",
      href: "./services#luxury-facials"
    },
    {
      title: "Deep Tissue Massage",
      description: "Relieve tension and stress with expert deep tissue techniques that promote relaxation.",
      image: "/spa2.jpg",
      href: "./services#deep-tissue-massage"
    },
    {
      title: "Aromatherapy Rituals",
      description: "Immerse yourself in calming essential oils and holistic techniques for full-body renewal.",
      image: "/spa4.jpg",
      href: "./services#aromatherapy-rituals"
    },
    {
      title: "Full-Body Detox Wrap",
      description: "Detoxify, exfoliate, and hydrate your skin with our signature mineral-rich body wrap.",
      image: "/spa5.jpg",
      href: "./services#full-body-detox-wrap"
    },
    {
      title: "Hot Stone Therapy",
      description: "Experience deep relaxation and muscle relief through soothing heated stone treatments.",
      image: "/spa6.jpg",
      href: "./services#hot-stone-therapy"
    },
    {
      title: "Spa Manicure & Pedicure",
      description: "Luxury nail care services that nourish, shape, and beautify your hands and feet.",
      image: "/spa7.jpg",
      href: "./services#spa-manicure-pedicure"
    }
  ]

  return (
    <section
      style={{ backgroundColor: "#f8f5f0" }}   // ⭐ NEW SPA BACKGROUND COLOR
      className="min-h-screen relative overflow-visible py-20 mt-40" // ⭐ ADDED TOP MARGIN
    >
      <div className="flex px-6">
        
        {/* ---------------- LEFT SIDE ---------------- */}
        <div className="w-2/5 pr-12">
          <div className="text-left max-w-md sticky top-24">
            
            <header className="mb-8">
              <div className="mb-4">
                <p className="text-[#333] font-medium text-lg">Luxury Treatments</p>
              </div>
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#333] leading-tight">
                  Healing Hands,<br />
                  Lasting Benefits
                </h2>
              </div>
            </header>
            
            <div className="mb-8">
              <p className="text-lg text-[#666]">
                Feel the difference with expert care that restores and revitalizes
              </p>
            </div>

            {/* KEYWORDS */}
            <div className="space-y-4 mb-8">
              {keywords.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-wrap gap-3">
                  {row.map((keyword, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl px-4 py-2 text-[#666] font-medium text-sm border border-gray-200 shadow-sm"
                    >
                      {keyword}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <div className="flex justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="./services"
                className="bg-transparent text-[#333] px-8 py-4 rounded-full border border-[#333] font-medium text-lg flex items-center gap-3 transition-all duration-200 hover:bg-[#333] hover:text-white"
              >
                <span>Full Services List</span>
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
        </div>

        {/* ---------------- RIGHT SIDE ---------------- */}
        <div className="w-3/5">
          <div className="flex flex-col gap-16">
            {services.map((service, index) => (
              <motion.a
                key={index}
                href={service.href}
                className="group block w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="rounded-3xl overflow-hidden h-full w-[80%] max-w-4xl ml-20">
                  
                  <div className="flex h-full">
                    
                    {/* IMAGE */}
                    <div className="w-3/5">
                      <div className="h-full relative">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover rounded-3xl group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    
                    {/* CONTENT */}
                    <div className="w-3/5 p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold text-[#333] mb-4">
                          {service.title}
                        </h3>
                        <p className="text-[#666] text-base leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      
                      {/* BUTTON */}
                      <div className="flex items-center justify-between mt-6">
                        <span className="text-[#333] text-base font-medium">View details</span>
                        <div className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center transform rotate-45 group-hover:bg-[#333] group-hover:text-white transition-all duration-200">
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

                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
