'use client'
import { useState } from "react"

const serviceList = [
  'Invisible Grills',
  'Balcony Safety Invisible Grills',
  'Anti Bird Invisible Grills',
  'Sports Nets',
  'Duct Area Safety Invisible Grills',
  'Children Safety Invisible Grills'
]

const serviceImages: Record<string, string> = {
  'Invisible Grills': '/images/invisible-grill.webp',
  'Balcony Safety Invisible Grills': '/images/Balcony-Invisible-Grills-1.webp',
  'Anti Bird Invisible Grills': '/images/anti-bird-invisible-grills.webp',
  'Sports Nets': '/images/sport-nets-installation-hyderabad.webp',
  'Duct Area Safety Invisible Grills': '/images/drybalcony-invisible-grills-near-me.webp',
  'Children Safety Invisible Grills': '/images/children-safety-invisible-grills-for-balcony.webp'
}

const serviceDescriptions: Record<string, string> = {
  'Invisible Grills':
    'Invisible grills are strong stainless steel safety wires fixed on balconies and windows. They keep children safe, stop pigeons, and keep your open view. Perfect safety solution for apartments and homes in Hyderabad.',

  'Balcony Safety Invisible Grills':
    'Balcony safety invisible grills protect families from accidental falls. The thin stainless wires look almost invisible but are very strong. Ideal for apartments and high-rise buildings.',

  'Anti Bird Invisible Grills':
    'Anti bird invisible grills stop pigeons and birds from entering balconies. They keep your home clean and safe without blocking light or view.',

  'Sports Nets':
    'Sports nets are used for cricket practice nets, terrace play areas, and indoor sports courts. These strong nets protect people and stop balls from going outside.',

  'Duct Area Safety Invisible Grills':
    'Duct area invisible grills cover open duct spaces in apartments. They prevent birds, pests, and accidental falls while allowing fresh air and light.',

  'Children Safety Invisible Grills':
    'Children safety invisible grills protect kids from falling from balconies or windows. Strong stainless wires keep the area safe while keeping the outside view clear.'
}

export default function Services(){
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  return (
    <div className="py-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {serviceList.map((s) => {
          const desc = serviceDescriptions[s]
          const isExpanded = expanded[s]

          return (
            <article key={s} className="bg-white border rounded-lg p-4 shadow-soft shadow-soft transform transition-transform hover:scale-105 overflow-hidden">
              <div className="flex gap-4">
                <div className="w-20 h-16 sm:w-28 sm:h-20 flex-shrink-0 overflow-hidden rounded-md">
                  <img
                    src={serviceImages[s] ?? '/images/service-placeholder.svg'}
                    alt={s}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{s}</h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {isExpanded ? desc : `${desc.slice(0,80)}`}
                    {desc.length > 80 && !isExpanded && (
                      <span
                        className="cursor-pointer text-gray-900"
                        onClick={() =>
                          setExpanded((prev) => ({ ...prev, [s]: true }))
                        }
                      >
                        ...read more
                      </span>
                    )}
                  </p>

                  <div className="mt-3 flex gap-2">
                    <a href="tel:+919900000000" className="inline-flex items-center gap-2 px-3 py-2 bg-primary text-white rounded-md text-sm">
                      Call
                    </a>

                    <a href="https://wa.me/919900000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 bg-green-700 text-white rounded-md text-sm">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}