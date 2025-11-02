import React, { useState } from 'react'
import { User, Mail, Phone, GitBranch, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Contact({ contactRef }) {
  const [email, setEmail] = useState('')
  const [note, setNote] = useState('')
  const [message, setMessage] = useState('')
  const [alertColor, setAlertColor] = useState('') // "green" | "red"
  const [visible, setVisible] = useState(false)
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

  const submit = async (e) => {
    e.preventDefault()
    if (email && note && regex.test(email)) {
      try {
        const res = await fetch('http://localhost:5000/message', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, note }),
        })

        const data = await res.json()

        if (data.success) {
          setMessage('✅ Message sent successfully!')
          setAlertColor('green')
          setEmail('')
          setNote('')
        } else {
          setMessage('❌ Failed to send message. Please try again.')
          setAlertColor('red')
        }
      } catch (error) {
        console.error('Error:', error)
        setMessage('❌ Server error. Please try again later.')
        setAlertColor('red')
      }
    } else {
      setMessage('Please enter a valid email and message.')
      setAlertColor('red')
    }
    setVisible(true)
  }

  return (
    <motion.section
      id="contact"
      ref={contactRef}
      className="my-8 py-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:grid-cols-2">
        {/* Contact Info */}
        <motion.div
          className="space-y-3 text-white"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <User /> Shadrach Chukwukere
          </div>
          <div className="flex items-center gap-2">
            <Mail /> chispecialshadrach@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <Phone /> +234908030895
          </div>
          <Link
            to="https://github.com/shadrach-chukwukere"
            target="_blank"
            className="flex items-center gap-2 hover:text-green-400"
          >
            <GitBranch /> ShadrachChukwukere.git
          </Link>
        </motion.div>

        {/* Message Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-3 text-lg font-semibold text-white">Message Me</h3>

          {/* Alert Box */}
          {visible && (
            <div
              className={`mb-3 rounded-md px-4 py-2 text-sm ${
                alertColor === 'green'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {message}
              <button
                className="ml-2 font-bold hover:underline"
                onClick={() => setVisible(false)}
              >
                ✖
              </button>
            </div>
          )}

          <form onSubmit={submit} className="space-y-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border-2 border-gray-300 bg-white p-2 text-black focus:border-green-500 focus:outline-none"
              placeholder="Your Email .."
            />
            <textarea
              required
              maxLength={500}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full rounded-md border-2 border-gray-300 bg-white p-2 text-black focus:border-green-500 focus:outline-none"
              placeholder="Note .."
              rows={4}
            ></textarea>
            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 font-medium text-white transition hover:bg-green-700"
              >
                Message <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  )
}
