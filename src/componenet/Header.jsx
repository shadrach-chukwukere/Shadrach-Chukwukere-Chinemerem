import React from 'react'
import { motion } from 'framer-motion'
import { Contact as ContactIcon } from 'lucide-react'
import hat from '../assets/hat.png'

export default function Header({ isContactVisible }) {
  return (
    <motion.div
      className="sticky top-0 mt-3 px-1"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto flex items-center justify-between rounded-full bg-gray-900 p-2 shadow-lg">
        {/* Brand */}
        <a href="/portfolio">
          <div className="ps-3 text-white">
            <img
              src={hat}
              alt="hat"
              title="magician hat"
              className="w-20 h-20 object-contain"
            />
          </div>
        </a>

        {/* Nav Links */}
        <div className="flex items-center gap-4 md:gap-8">
          <a href="#about">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="cursor-pointer text-white hover:text-gray-300"
            >
              About
            </motion.div>
          </a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`flex items-center rounded-full border-2 px-4 py-2 transition-colors ${
              isContactVisible
                ? 'border-blue-500 text-blue-500'
                : 'border-white text-white hover:border-gray-300 hover:text-gray-300'
            }`}
          >
            <ContactIcon className="mr-1 bg-transparent" />
            <span className="hidden bg-transparent md:inline">Get in Touch</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
