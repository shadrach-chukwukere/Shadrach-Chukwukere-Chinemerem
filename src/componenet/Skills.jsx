import React from 'react'
import { motion } from 'framer-motion'
import {
  Monitor,
  Database,
  FileCode,
  Server,
  Zap,
} from 'lucide-react'

const skills = [
  { name: 'HTML', icon: <FileCode size={32} />, type: 'Frontend' },
  { name: 'CSS', icon: <FileCode size={32} />, type: 'Frontend' },
  { name: 'JavaScript', icon: <Zap size={32} />, type: 'Frontend' },
  { name: 'Bootstrap', icon: <FileCode size={32} />, type: 'Frontend' },
  { name: 'React.js', icon: <Monitor size={32} />, type: 'Frontend' },
  { name: 'Node.js', icon: <Server size={32} />, type: 'Backend' },
  { name: 'MySQL', icon: <Database size={32} />, type: 'Backend' },
  { name: 'PHP', icon: <Server size={32} />, type: 'Backend' },
]

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-12 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h2
        className="mb-10 text-center text-3xl font-bold"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="h-full"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex h-full flex-col items-center justify-center rounded-lg bg-gray-100 p-6 text-gray-800 shadow-md transition hover:scale-105 hover:shadow-lg">
              <div className="mb-3 text-green-600">{skill.icon}</div>
              <h5 className="mb-1 font-semibold">{skill.name}</h5>
              <small className="text-gray-500">{skill.type}</small>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
