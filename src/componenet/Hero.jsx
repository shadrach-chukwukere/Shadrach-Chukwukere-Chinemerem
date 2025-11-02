import React from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import resume from '../assets/reume.pdf'

export default function Hero() {
  return (
    <motion.div
      className="mt-4 w-full pt-4 pb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Top Console Text */}
      <div className="w-full text-center">
        <div className="hero fixed top-2 left-1/2 -translate-x-1/2 text-sm text-gray-400">
          {`console.log("hello world!")`}
        </div>
      </div>

      {/* Main Hero Heading */}
      <motion.div
        className="mx-auto max-w-3xl pt-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h1 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Building Exceptional Website Applications that Exceed Clients’ Expectations
        </h1>
      </motion.div>

      {/* About Section */}
      <section id="about">
        {/* Resume Button */}
        <motion.div
          className="w-full pt-6 text-center"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href={resume}
            download
            className="inline-flex items-center gap-2 rounded-full border-2 border-green-500 px-6 py-2 text-lg text-green-500 transition hover:bg-green-500 hover:text-white"
          >
            Download Resume <Download className="w-5 h-5" />
          </a>
        </motion.div>

        {/* About Text */}
        <motion.div
          className="mx-auto max-w-2xl pt-6"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="pb-4 text-center text-base text-gray-200 sm:text-lg">
            I'm <span className="text-green-500 font-semibold">Shadrach</span>, a
            passionate web developer dedicated to building clean, responsive, and
            high-performance websites. I thrive on solving complex problems,
            crafting intuitive user experiences, and transforming ideas into
            real-world digital solutions. With a strong eye for detail and a love
            for innovation, I aim to create web applications that are not just
            functional, but delightful to use.
          </p>
        </motion.div>
      </section>
    </motion.div>
  )
}
