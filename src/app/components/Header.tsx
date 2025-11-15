'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed w-full z-50 bg-transparent mt-6" style={{ height: '90px' }}>
      
      {/* 🌿 TOP BAR (LOGO + HAMBURGER) - ALWAYS VISIBLE */}
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative z-[60]">

        {/* LOGO */}
        <a 
          href="./"
          className="flex items-center justify-center h-14 w-14 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-gray-900">
            <path
              d="M4 14c0-6.5 4.5-10 10-10 1.5 0 3 .5 4 1-1 6-5 11-12 12-1-1-2-2.5-2-3z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* HAMBURGER */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="h-14 w-14 bg-white rounded-2xl shadow flex flex-col items-center justify-center gap-1.5 hover:shadow-lg transition-all"
        >
          <div className="w-7 h-[3px] bg-gray-900 rounded"></div>
          <div className="w-7 h-[3px] bg-gray-900 rounded"></div>
          <div className="w-7 h-[3px] bg-gray-900 rounded"></div>
        </button>
      </div>

      {/* ⭐ FULL SCREEN OVERLAY MENU */}
      <div
        className={`
          fixed top-0 left-0 w-full h-screen 
          bg-white/95 backdrop-blur-xl shadow-xl
          transition-all duration-500 ease-out
          ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
          z-[40]
        `}
      >
        {/* LEFT SIDE MENU */}
        <div className="flex flex-col justify-center items-start h-full pl-12 space-y-10">
          
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-900 text-5xl font-light hover:tracking-[2px] transition-all"
            >
              {item.name}
            </a>
          ))}

          <button className="
            text-gray-800 border border-gray-300 
            px-8 py-3 rounded-xl text-2xl 
            hover:bg-gray-100 transition-all
          ">
            Book a Session
          </button>
        </div>
      </div>
    </nav>
  )
}
