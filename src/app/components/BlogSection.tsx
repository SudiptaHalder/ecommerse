'use client'

import { motion } from "framer-motion"
import Link from "next/link"

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of the Evening Ritual",
      description: "How to wind down with intention and reset your nervous system",
      image: "https://framerusercontent.com/images/0scl7N6jd8Q2kbaGUxxEVenrSWk.png",
      href: "/blog/evening-ritual",
    },
    {
      id: 2,
      title: "What Your Skin Really Needs This Season",
      description: "Gentle tips to transition your skincare as the weather changes",
      image: "https://framerusercontent.com/images/Cf9LrezKZhORBXlgnUhrBuXKLXs.png",
      href: "/blog/skin-needs",
    },
    {
      id: 3,
      title: "5 Spa-Inspired Ways to De-Stress at Home",
      description: "Turn your space into a sanctuary with simple sensory rituals",
      image: "https://framerusercontent.com/images/MQIdRBlBitkvKRO0nNUQrpYJjYs.png",
      href: "/blog/spa-at-home",
    },
    {
      id: 4,
      title: "The Glow Guide: Pre- and Post-Facial Care",
      description: "Everything you should (and shouldn't) do to maintain your radiant results",
      image: "https://framerusercontent.com/images/eaqrLsUE5ZooJLB1ueFFPfj1gY.png",
      href: "/blog/glow-guide",
    },
  ]

  return (
    <section className="w-full bg-[#fafafa] py-20 px-2">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <h2 className="text-left text-4xl font-light text-[#333] mb-12 px-2">
          Thoughts That Glow
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-6">

          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex gap-6 items-start px-2"
            >
              {/* IMAGE */}
              <div className="w-40 h-40 rounded-3xl overflow-hidden flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-[#333] mb-2 leading-tight">
                  {post.title}
                </h3>

                <p className="text-sm text-[#666] leading-relaxed mb-3">
                  {post.description}
                </p>

                {/* ✅ NEXT LINK */}
                <Link
                  href={post.href}
                  className="text-sm font-medium text-[#333] underline-offset-4 hover:underline"
                >
                  Read Article →
                </Link>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
