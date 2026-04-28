'use client'
import Link from "next/link"
import { useState } from "react"

const serviceList = [
  'Invisible Grills',
  'Balcony Safety Invisible Grills',
  'Anti Bird Invisible Grills',
  'Sports Nets',
  'Windows Invisible Grills',
  'Children Safety Invisible Grills'
]

const slugs = [
  "/services/invisible-grills",
  "/services/balcony-safety-invisible-grills",
  "/services/anti-bird-invisible-grills",
  "/services/sports-nets",
  "/services/windows-invisible-grills",
  "/services/children-safety-invisible-grills"
]
const serviceImages: Record<string, string> = {
  'Invisible Grills': '/images/invisible-grill.webp',
  'Balcony Safety Invisible Grills': '/cards/Balcony-Invisible-Grills-1.webp',
  'Anti Bird Invisible Grills': '/cards/anti-bird-invisible-grills.webp',
  'Sports Nets': '/images/sport-nets-installation-hyderabad.webp',
  'Windows Invisible Grills': '/cards/window-anti-bird-invisible-grills-installation-near-me.webp',
  'Children Safety Invisible Grills': '/cards/children-safety-invisible-grills-for-balcony.webp'
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

  'Windows Invisible Grills':
  'Windows invisible grills provide strong safety protection without blocking your outside view. Designed with high-tensile stainless steel cables, they prevent accidental falls, enhance child safety, and keep birds away while allowing maximum airflow, sunlight, and modern aesthetics for homes and apartments.',

  'Children Safety Invisible Grills':
    'Children safety invisible grills protect kids from falling from balconies or windows. Strong stainless wires keep the area safe while keeping the outside view clear.'
}

export default function Services(){
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  return (
    <div className="py-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {serviceList.map((s,i) => {
          const desc = serviceDescriptions[s];
          const isExpanded = expanded[s];
          const slug = slugs[i]

          return (
            <article key={s} className="bg-white border rounded-lg p-4 shadow-soft shadow-soft transform transition-transform hover:scale-105 overflow-hidden">
              <div className="flex gap-4">
                <div className=" flex flex-col">
                <div className="w-20 h-16 sm:w-28 sm:h-20 flex-shrink-0 overflow-hidden rounded-md">
                  <img
                    src={serviceImages[s] ?? '/images/service-placeholder.svg'}
                    alt={s}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                </div>
                <a 
                  href={slug} 
                  className="block lg:hidden mt-auto inline-flex items-center justify-center gap-2 px-2 py-2 bg-transparent border border-primary text-primary  rounded-md text-sm transition-transform active:scale-95"
                  aria-label={`Call to know more about ${s}`}
                >
                  Know More <span className="sr-only">about {s}</span>
                </a>
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
                    <a href="tel:+918790518724" className="inline-flex items-center gap-2 px-3 py-2 bg-primary text-white rounded-md text-sm">
                      Call
                    </a>

                    <a href="https://wa.me/919491008380" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 bg-green-700 text-white rounded-md text-sm">
                      WhatsApp
                    </a>
                   <Link
                      href={slug} 
                      prefetch={false}
                      className="hidden lg:inline-flex items-center gap-2 px-2 py-2 
                                bg-transparent border border-primary text-primary 
                                rounded-md text-sm"
                    >
                      Know More
                    </Link>
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
