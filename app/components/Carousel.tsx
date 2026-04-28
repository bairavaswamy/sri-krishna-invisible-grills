'use client'
import { useEffect, useRef, useState } from 'react'

const heroImages = [
  {
    src: '/images/balcony-invisible-safety-installation.webp',
    mobileSrc: '/cards/balcony-safety-invisible-grills-installation-near-me.webp',
    alt: 'Anti-bird invisible grills in tellapur hyderabad',
    dec: 'Protect your balcony with strong invisible grills in Tellapur Hyderabad. Keep birds out, kids safe, and enjoy fresh air without compromising view.'
  },
  {
    src: '/images/invisible-grill.webp',
    alt: 'Invisible stainless steel grills closeup in Hyderabad',
    dec: 'See our invisible stainless steel grills up close. Stylish, strong, and safe for kids and pets. Perfect for homes needing safety without ugly bars.'
  },
  {
    src: '/images/children-safety-invisible-grills-for-balcony.webp',
    alt: 'Durable stainless-steel invisible grills',
    dec: 'Keep children safe on your balcony with durable invisible grills. Made of stainless steel, these grills are strong, safe, and look elegant too.'
  },
]

export default function Carousel(){
  const [index, setIndex] = useState(0)
  const intervalRef = useRef<number | null>(null)

  // Rotate slides automatically after the first paint.
  useEffect(() => {
    const advance = () => setIndex((i) => (i + 1) % heroImages.length)
    let startTimer: number | null = null

    startTimer = window.setTimeout(() => {
      intervalRef.current = window.setInterval(advance, 4500)
    }, 15000)

    return () => {
      if (startTimer) window.clearTimeout(startTimer)
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <section className="-mx-4 md:-mx-6 w-[calc(100%+2rem)] md:w-[calc(100%+3rem)] lg:w-[calc(100%+4rem)]">
      
      <div className="w-full h-[380px] sm:h-[390px] md:h-[440px] lg:h-[460px] relative overflow-hidden">

        {/* Slides */}
        <div
          className="flex h-full w-full transition-transform duration-700"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {heroImages.map((item, i) => {

            return (
              <div key={i} className="w-full h-full flex-shrink-0 relative">
                <picture className="absolute inset-0 block">
                  {item.mobileSrc && (
                    <source media="(max-width: 767px)" srcSet={item.mobileSrc} />
                  )}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover"
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding={i === 0 ? "sync" : "async"}
                    fetchPriority={i === 0 ? "high" : "auto"}
                  />
                </picture>

                {/* Caption Overlay */}
                <div className="absolute inset-0 flex items-center justify-start md:justify-center bg-black/15 text-left md:text-center">
                  
                  <div
                    className={`px-6 sm:px-10 text-white transition-all duration-700 ${
                      i === index
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-10 opacity-0"
                    }`}
                  >
                    <h2 className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
                      {item.alt}
                    </h2>

                    <p className="mt-4 text-gray-300 text-lg sm:text-xl font-medium drop-shadow-md">
                      {item.dec}
                    </p>

                    <a
                      href="tel:+918790518724"
                      className="mt-4 inline-flex px-4 py-2 md:px-8 md:py-3 border-2 hover:bg-gray-800 md:border-4 border-[#C9A227] text-[#C9A227] font-semibold hover:scale-105 transition"
                    >
                      Call Now
                    </a>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-4 h-4 rounded-full ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>

      {/* No JS fallback */}
      <noscript>
        <div>
          {heroImages[0] && (
            <img
              src={heroImages[0].mobileSrc || heroImages[0].src}
              alt={heroImages[0].alt}
              loading="eager"
            />
          )}
        </div>
      </noscript>
    </section>
  )
}
