'use client'
import { useRef, memo, useMemo } from 'react'
import Image from 'next/image'

type ServiceItem = {
  service: string
  image: string
  price: string
  offerPrice: string
}

export const defaultImages: ServiceItem[] = [
  {
    service: "Children Invisible Grills",
    image: "/cards/children-safety-invisible-grills-for-balcony.webp",
    price: "₹200",
    offerPrice: "₹160"
  },
  {
    service: "Invisible Grills",
    image: "/cards/invisible-grill.webp",
    price: "₹140",
    offerPrice: "₹120"
  },
  {
    service: "Stainless Steel Invisible Grill",
    image: "/cards/stainless-steel-invisible-grill.webp",
    price: "₹164",
    offerPrice: "₹132"
  },
  {
    service: "Balcony Invisible Grills",
    image: "/cards/Balcony-Invisible-Grills-1.webp",
    price: "₹140",
    offerPrice: "₹124"
  },
  {
    service: "Anti Bird Invisible Grills",
    image: "/cards/anti-bird-invisible-grills.webp",
    price: "₹180",
    offerPrice: "₹145"
  },
  {
    service: "Invisible Grill for Balcony",
    image: "/images/invisible-grill-for-balcony.webp",
    price: "₹170",
    offerPrice: "₹140"
  },
  {
    service: "Apartment Balcony Invisible Grills",
    image: "/images/apartment-balcony-invisible-grills-near-me-in-hyderabad.webp",
    price: "₹175",
    offerPrice: "₹122"
  },
  {
    service: "Children Safety Invisible Grills",
    image: "/images/children-safety-invisible-grills-in-hyderabad.webp",
    price: "₹200",
    offerPrice: "₹165"
  },
  {
    service: "Dry Balcony Invisible Grills",
    image: "/images/drybalcony-invisible-grills-near-me.webp",
    price: "₹178",
    offerPrice: "₹133"
  },
  {
    service: "Invisible Grills for Apartment",
    image: "/cards/invisible-grills-for-apartment.webp",
    price: "₹140",
    offerPrice: "₹118"
  },
  {
    service: "Pigeon Safety Invisible Grills",
    image: "/images/pigeon-safety-invisible-grills.webp",
    price: "₹180",
    offerPrice: "₹149"
  }
]

function ButtonCardsInner({ images = defaultImages }: { images?: ServiceItem[] }) {

  const scrollerRef = useRef<HTMLDivElement | null>(null)

  // duplicate images only once for seamless scrolling
  const combinedImages =images

  return (
    <div className="mt-3 w-full bg-[#fff]">
      {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mt-10 mb-10">
  Our Premium Products & Best Deals
  <span className="block w-24 h-1 bg-orange-500 mx-auto mt-3 rounded"></span>
</h2> */}

{/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mt-10 mb-10">
  Our Products & Best Deals
  <span className="block w-20 h-1 bg-orange-500 mx-auto mt-3 rounded"></span>
</h2> */}
<div className="text-center mt-12 mb-10">
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-green-900">
    Our Products & Best Deals
  </h1>

  <div className="w-28 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 mx-auto mt-4 rounded-full"></div>
</div>
      <div
        ref={scrollerRef}
        className="overflow-x-auto scrollbar-hide py-2 touch-pan-x"
      >
        <div className="flex gap-4 px-4 flex-nowrap">
          {combinedImages.map((items, i) => {

            const isOriginal = i < images.length
            const isFirst = i === 0

            return (
              <div
                key={`₹${items.image}-₹${i}`}
                aria-hidden={!isOriginal}
                className={`min-w-[180px] sm:min-w-[220px] md:min-w-[260px] bg-white border rounded-lg p-0 shadow-soft transform transition-transform hover:scale-105 overflow-hidden ₹{
                  isOriginal ? "snap-start" : ""
                }`}
              >
                <div className="h-32 sm:h-36 w-full overflow-hidden relative bg-gray-100">
                  <Image
                    src={items.image}
                    alt={items.service}
                    fill
                    className="object-cover"
                    priority={isFirst}
                    loading={isFirst ? "eager" : "lazy"}
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 220px, 260px"
                    unoptimized
                  />
                </div>

                <div className="p-3 text-left">
                  <div className="text-base font-medium">{items.service}</div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600 line-through">{items.price}</span>
                    <span className="text-green-900 font-semibold">{items.offerPrice}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Learn more
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default memo(ButtonCardsInner)