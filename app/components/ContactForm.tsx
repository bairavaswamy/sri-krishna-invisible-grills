'use client'

import { useState } from 'react'
import { FORMSPREE_URL, FORM_NAME } from '../config/form.config'
import Image from 'next/image'

const heroImages = [
  { src: '/images/invisible-grill.webp?size=200w200h', alt: 'Invisible stainless steel grills closeup' },
  { src: '/images/stainless-steel-invisible-grill.jpg?size=200w200h', alt: 'Durable stainless-steel invisible grills' },
  { src: '/images/invisible-grill-for-balcony.webp', alt: 'Anti-bird invisible grills in tellapur hyderabad' },
]

export default function ContactForm(){
  const [formData, setFormData] = useState({
    name: '',
    purpose: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMessage('Please fill in all required fields (Name, Email, Phone)')
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      // Send to Formspree
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          purpose: formData.purpose,
          message: formData.message,
          _subject: `${FORM_NAME} - New Enquiry from ${formData.name}`,
          _replyto: formData.email,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', purpose: '', email: '', phone: '', message: '' })
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Failed to send enquiry. Please try again or contact directly.')
      console.error('Form submission error:', error)
    }
  }

  return (
  <div id="quote" className='flex gap-4 w-full px-4 bg-orange-100 py-6 rounded-lg shadow-sm flex-col lg:flex-row'>
  

    <div className="block sm:hidden bg-white border rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <input 
          name="name" 
          placeholder="Name *" 
          className="border rounded px-3 py-2 focus:outline-none focus:border-primary" 
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input 
          name="purpose" 
          placeholder="Purpose (Invisible Grill / Safety Net / Bird Net)" 
          className="border rounded px-3 py-2 focus:outline-none focus:border-primary"
          value={formData.purpose}
          onChange={handleChange}
        />
        <input 
          name="email" 
          type="email"
          placeholder="Email *" 
          className="border rounded px-3 py-2 focus:outline-none focus:border-primary"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input 
          name="phone" 
          placeholder="Phone *" 
          className="border rounded px-3 py-2 focus:outline-none focus:border-primary"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea 
          name="message" 
          placeholder="Message (optional)" 
          className="col-span-1 sm:col-span-2 border rounded px-3 py-2 focus:outline-none focus:border-primary"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        
        {/* Status messages */}
        {status === 'success' && (
          <div className="col-span-1 sm:col-span-2 p-3 bg-green-100 border border-green-400 rounded text-green-700">
            ✓ Enquiry sent successfully! We'll contact you soon.
          </div>
        )}
        {status === 'error' && (
          <div className="col-span-1 sm:col-span-2 p-3 bg-red-100 border border-red-400 rounded text-red-700">
            ✗ {errorMessage}
          </div>
        )}

        <div className="col-span-1 sm:col-span-2">
          <button 
            type="submit"
            disabled={status === 'loading'}
            className="bg-primary text-white px-4 py-2 rounded hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
          </button>
        </div>
      </form>
    </div>

   
  
 <div className="hidden md:block h-[400px] w-full overflow-hidden relative bg-gray-100 rounded-2xl p-4">
  {/* 1. Background Image */}
  <Image
    src={heroImages[2].src}
    alt={heroImages[2].alt}
    fill
    className="object-cover"
    priority
  />

  {/* 2. Dark Overlay (Helps text/form pop) */}
  <div className="absolute inset-0 bg-black/50" />

  {/* 3. Main Content Container (Form + Text) */}
  <div className="absolute inset-0 z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-10">
    
    {/* LEFT SIDE: Heading Text */}
    <div className="text-center md:text-left flex-1">
      <h2 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
        Premium Invisible Grills
      </h2>
      <p className="mt-4 text-white text-lg sm:text-2xl font-medium drop-shadow-md max-w-lg">
        17 Years Warranty • 304 Grade SS Wire • Child & Bird Safety
      </p>
    </div>

    <div className="relative w-full max-w-md  m-5 my-3">

      {/* METALLIC BLUE GLOW */}
      <div className="absolute -inset-1 rounded-3xl 
        bg-gradient-to-br 
        from-blue-400 
        via-cyan-500 
        to-indigo-700 
        blur-2xl opacity-25">
      </div>

      {/* MAIN CARD */}
      <div
       className="
  relative
  rounded-3xl my-3
  p-7 sm:p-9
  backdrop-blur-xl
  bg-white/15
  border border-white/10
  shadow-[0_25px_70px_rgba(0,40,120,0.15)]
"
      >
        {/* HEADER */}
        <h3
          className="
          text-2xl font-bold text-center mb-7 tracking-wide
          bg-gradient-to-r
          from-yellow-500 via-orange-600 to-indigo-800
          bg-clip-text text-transparent
        "
        >
          Get a Free Quote
        </h3>

        <form
          className="grid grid-cols-1 gap-4"
          onSubmit={handleSubmit}
        >
          {/* ROW 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="inputStyle"
            />

            <input
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              required
              className="inputStyle"
            />
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="email"
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
              className="inputStyle"
            />

            <input
              name="purpose"
              placeholder="Purpose (Balcony / Bird Net / Safety)"
              value={formData.purpose}
              onChange={handleChange}
              className="inputStyle"
            />
          </div>

          {/* MESSAGE */}
          <textarea
            name="message"
            rows={3}
            placeholder="Requirement details..."
            value={formData.message}
            onChange={handleChange}
            className="inputStyle resize-none"
          />

          {/* SUCCESS MESSAGE */}
          {status === "success" && (
            <div className="p-3 text-xs rounded-lg
              bg-blue-50 border border-blue-300 text-blue-700">
              ✓ Enquiry sent successfully!
            </div>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="
              w-full py-3 rounded-xl font-bold text-white
              bg-gradient-to-r
              from-blue-600 via-cyan-500 to-indigo-700
              hover:from-blue-500 hover:to-indigo-800
              shadow-[0_10px_30px_rgba(0,80,200,0.5)]
              transition-all duration-300
              active:scale-95 disabled:opacity-50
            "
          >
            {status === "loading" ? "Sending..." : "Send Enquiry"}
          </button>
        </form>
      </div>

      {/* INPUT STYLE */}
      <style jsx>{`
        .inputStyle {
          border: 1px solid rgba(59, 130, 246, 0.25);
          background: rgba(255, 255, 255, 0.85);
          border-radius: 12px;
          padding: 10px 14px;
          font-size: 14px;
          outline: none;
          transition: all 0.25s ease;
        }

        .inputStyle:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.25);
          background: white;
        }
      `}</style>
    </div> 

  </div>
</div>
    </div>
  )
}
