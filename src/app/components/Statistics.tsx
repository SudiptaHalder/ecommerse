// 'use client'

// import { motion } from 'framer-motion'

// export default function Statistics() {
//   const stats = [
//     {
//       title: "Customer Satisfaction",
//       value: "98%",
//       description: "98% of our clients leave feeling deeply relaxed, refreshed, and rejuvenated after their visit"
//     },
//     {
//       title: "Annual Treatments",
//       value: "5k+",
//       description: "Over 5,000 luxury spa treatments performed every year, ensuring top-tier wellness experiences"
//     },
//     {
//       title: "Happy Clients",
//       value: "10k+",
//       description: "With over 10,000 satisfied clients worldwide, we are your trusted destination for luxury self-care"
//     },
//     {
//       title: "Excellence Rating",
//       value: "4.9/5",
//       description: "Our services are rated 4.9/5 stars by thousands of delighted guests, reflecting our commitment to excellence"
//     }
//   ]

//   return (
//     <section className="bg-spa-fafa py-24 px-6 my-16">
//       <div className="max-w-6xl mx-auto">
//         {/* Header Content */}
//         <div className="text-center mb-16">
//           <header className="mb-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="mb-4"
//             >
//               <p className="text-spa-dark font-medium text-lg">Statistics</p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-spa-dark leading-tight">
//                 Health that Speaks<br />
//                 in Numbers
//               </h2>
//             </motion.div>
//           </header>
          
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <p className="text-lg text-spa-gray max-w-2xl mx-auto">
//               See how our expertise and dedication have transformed thousands of lives
//             </p>
//           </motion.div>
//         </div>

//         {/* Statistics Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={stat.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white border border-spa-fafa rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
//             >
//               <div className="text-center">
//                 {/* Stat Title */}
//                 <p className="text-spa-dark font-medium text-lg mb-4">
//                   {stat.title}
//                 </p>
                
//                 {/* Stat Value */}
//                 <p className="text-4xl sm:text-5xl font-light text-spa-dark mb-4">
//                   {stat.value}
//                 </p>
                
//                 {/* Stat Description */}
//                 <p className="text-spa-gray text-sm leading-relaxed">
//                   {stat.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'

import { motion } from 'framer-motion'

export default function Statistics() {
  const stats = [
    {
      title: "Customer Satisfaction",
      value: "98%",
      description: "98% of our clients leave feeling deeply relaxed, refreshed, and rejuvenated after their visit"
    },
    {
      title: "Annual Treatments",
      value: "5k+",
      description: "Over 5,000 luxury spa treatments performed every year, ensuring top-tier wellness experiences"
    },
    {
      title: "Happy Clients",
      value: "10k+",
      description: "With over 10,000 satisfied clients worldwide, we are your trusted destination for luxury self-care"
    },
    {
      title: "Excellence Rating",
      value: "4.9/5",
      description: "Our services are rated 4.9/5 stars by thousands of delighted guests, reflecting our commitment to excellence"
    }
  ]

  return (
    <section 
      style={{ backgroundColor: "#f8f5f0" }}   // ⭐ YOUR NEW BACKGROUND COLOR
      className="py-24 px-6 my-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-16">
          <header className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <p className="text-spa-dark font-medium text-lg">Statistics</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-spa-dark leading-tight">
                Health that Speaks<br />
                in Numbers
              </h2>
            </motion.div>
          </header>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-spa-gray max-w-2xl mx-auto">
              See how our expertise and dedication have transformed thousands of lives
            </p>
          </motion.div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-spa-fafa rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-center">
                <p className="text-spa-dark font-medium text-lg mb-4">
                  {stat.title}
                </p>

                <p className="text-4xl sm:text-5xl font-light text-spa-dark mb-4">
                  {stat.value}
                </p>

                <p className="text-spa-gray text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
