'use client'

import { useState } from 'react'
import { FORMSPREE_URL, FORM_NAME } from '../config/form.config'
import Image from 'next/image'

const heroImages = [
  { src: '/images/invisible-grill.webp?size=200w200h', alt: 'Invisible stainless steel grills closeup' },
  { src: '/images/stainless-steel-invisible-grill.jpg?size=200w200h', alt: 'Durable stainless-steel invisible grills' },
  { src: '/images/invisible-grill-for-balcony.webp', alt: 'Anti-bird invisible grills in tellapur hyderabad' },
]

export default function Contact(){
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
    <>
   <section className="max-w-5xl mx-auto text-center py-12 px-4">
  <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
    Invisible Grills in Hyderabad – Safe & Strong
  </h1>

  <p className="mt-4 text-gray-600 text-lg">
    We install premium 304 Grade stainless steel invisible grills for balconies and windows.
    Our grills protect children and stop birds. They are strong, safe, and look modern.
  </p>

  <p className="mt-4 text-gray-600">
    ✔ 17 Years Warranty  
    ✔ Rust-Free Stainless Steel  
    ✔ Free Site Visit  
    ✔ Same Day Quotation  
  </p>
</section>

              
        <div id="quote" className='flex gap-4 px-4 bg-orange-100 py-6 rounded-lg shadow-sm flex-col lg:flex-row'>
        

            <div className="block sm:hidden bg-white border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
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

            <div className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 sm:block hidden rounded-2xl p-8 shadow-lg">

        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Get a Free Quote
        </h3>

        <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            onSubmit={handleSubmit}
        >
            <input
            name="name"
            placeholder="Full Name *"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            value={formData.name}
            onChange={handleChange}
            required
            />

            <input
            name="purpose"
            placeholder="Purpose (Balcony / Bird Net / Safety)"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            value={formData.purpose}
            onChange={handleChange}
            />

            <input
            name="email"
            type="email"
            placeholder="Email Address *"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            value={formData.email}
            onChange={handleChange}
            required
            />

            <input
            name="phone"
            placeholder="Phone Number *"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            value={formData.phone}
            onChange={handleChange}
            required
            />

            <textarea
            name="message"
            placeholder="Tell us about your requirement..."
            className="col-span-1 sm:col-span-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            ></textarea>

            {/* Status messages */}
            {status === "success" && (
            <div className="col-span-1 sm:col-span-2 p-4 bg-green-50 border border-green-300 rounded-lg text-green-700 text-sm">
                ✓ Enquiry sent successfully! Our team will contact you shortly.
            </div>
            )}

            {status === "error" && (
            <div className="col-span-1 sm:col-span-2 p-4 bg-red-50 border border-red-300 rounded-lg text-red-600 text-sm">
                ✗ {errorMessage}
            </div>
            )}

            <div className="col-span-1 sm:col-span-2">
            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === "loading" ? "Sending..." : "Send Enquiry"}
            </button>
            </div>
        </form>
        </div>
        
        <div className="h-90 sm:h-90 w-full overflow-hidden relative bg-gray-100 sm:block hidden">
        <Image
            src={heroImages[2].src}
            alt={heroImages[2].alt}
            fill
            className="object-cover rounded-lg"
            priority
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent rounded-lg" />

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            
            <h2 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
            Premium Invisible Grills
            </h2>

            <p className="mt-4 text-white text-lg sm:text-xl font-medium drop-shadow-md">
            17 Years Warranty • 304 Grade SS Wire • Child & Bird Safety
            </p>

        </div>
        </div>
            </div>

             <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <h4 className="text-lg font-bold text-gray-800">Our Location</h4>
            <p className="text-gray-600 mt-2">Tellapur, Ramachandrapuram, Hyderabad, Telangana 502032</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-800">Call Us</h4>
            <p className="text-gray-600 mt-2">+91 8790518724<br/>+91 8481008380</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-800">Working Hours</h4>
            <p className="text-gray-600 mt-2">Mon - Sun: 9:00 AM - 8:00 PM</p>
          </div>
        </div>
        </div>
    </>
  )
}
