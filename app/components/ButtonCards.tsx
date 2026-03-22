'use client'
import { useRef, memo, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type ServiceItem = {
  service: string
  image: string
  price: string
  offerPrice: string
  path:string
}


export const services = [
  {
    title: "Invisible Grills",
    slug: "invisible-grills",
  },
  {
    title: "Balcony Safety Invisible Grills",
    slug: "balcony-safety-invisible-grills",
  },
  {
    title: "Anti Bird Invisible Grills",
    slug: "anti-bird-invisible-grills",
  },
  {
    title: "Sports Nets",
    slug: "sports-nets",
  },
  {
    title: "Windows Invisible Grills",
    slug: "windows-invisible-grills",
  },
  {
    title: "Children Safety Invisible Grills",
    slug: "children-safety-invisible-grills",
  },
]

export const defaultImages: ServiceItem[] = [
  {
    service: "Children Invisible Grills",
    image: "/cards/children-safety-invisible-grills-for-balcony.webp",
    price: "₹200",
    offerPrice: "₹160",
    path: "/services/children-safety-invisible-grills"
  },
  {
    service: "Invisible Grills",
    image: "/cards/invisible-grill.webp",
    price: "₹140",
    offerPrice: "₹120",
    path: "/services/invisible-grills"
  },
  {
    service: "Stainless Steel Invisible Grill",
    image: "/cards/stainless-steel-invisible-grill.webp",
    price: "₹164",
    offerPrice: "₹132",
    path: "/services/invisible-grills"
  },
  {
    service: "Balcony Invisible Grills",
    image: "/cards/Balcony-Invisible-Grills-1.webp",
    price: "₹140",
    offerPrice: "₹124",
    path: "/services/balcony-safety-invisible-grills"
  },
  {
    service: "Anti Bird Invisible Grills",
    image: "/cards/anti-bird-invisible-grills.webp",
    price: "₹180",
    offerPrice: "₹145",
    path: "/services/anti-bird-invisible-grills"
  },
  {
    service: "Invisible Grill for Windows",
    image: "/images/invisible-grill-for-balcony.webp",
    price: "₹170",
    offerPrice: "₹140",
    path:"/services/windows-invisible-grills"
  },
  {
    service: "Apartment Balcony Invisible Grills",
    image: "/images/apartment-balcony-invisible-grills-near-me-in-hyderabad.webp",
    price: "₹175",
    offerPrice: "₹122",
    path: "/services/anti-bird-invisible-grills"
  },
  {
    service: "Children Safety Invisible Grills",
    image: "/images/children-safety-invisible-grills-in-hyderabad.webp",
    price: "₹200",
    offerPrice: "₹165",
    path: "/services/children-safety-invisible-grills"
  },
  {
    service: "Dry Balcony Invisible Grills",
    image: "/images/drybalcony-invisible-grills-near-me.webp",
    price: "₹178",
    offerPrice: "₹133",
    path: "/services/balcony-safety-invisible-grills"
  },
  {
    service: "Invisible Grills for Apartment",
    image: "/cards/invisible-grills-for-apartment.webp",
    price: "₹140",
    offerPrice: "₹118",
    path: "/services/anti-bird-invisible-grills"
  },
  {
    service: "Pigeon Safety Invisible Grills",
    image: "/images/pigeon-safety-invisible-grills.webp",
    price: "₹180",
    offerPrice: "₹149",
    path: "/services/balcony-safety-invisible-grills"
  },
  {
    service: "Sports Nets Installation",
    image: "/images/Box-cricket-practice-net-installation-near-me.webp",
    price: "₹25",
    offerPrice: "₹19",
    path:"/services/sports-nets"
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
                className="min-w-[180px] sm:min-w-[220px] md:min-w-[260px] bg-white border rounded-lg p-0 shadow-soft transform transition-transform hover:scale-105 overflow-hidden "
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
                 <Link
  href={items.path}
  className="text-sm mt-1 text-gray-500 
             bg-gradient-to-r from-purple-500 to-pink-500
             bg-[length:0%_2px] bg-left-bottom bg-no-repeat
             transition-all duration-300
             hover:bg-[length:100%_2px] hover:text-purple-600"
>
  Learn more
</Link>
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