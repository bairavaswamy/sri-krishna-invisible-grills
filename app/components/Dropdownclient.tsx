"use client"

import { useState, useEffect } from "react"
import { services } from "./constants/services"
import { Briefcase } from "lucide-react"
import Link from "next/link"
import { hyderabadLocations } from "./constants/locations"
import { usePathname } from "next/navigation"
import { slugify } from "./seo/utils"

export default function DropdownClient() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // ✅ close dropdown after navigation
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <div
      className="relative "
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Button */}
      <button className="relative px-4 py-2 text-base font-medium text-gray-700 transition-all duration-300 hover:text-orange-500 group">
        {/* <Briefcase size={22} className="text-orange-500 mr-2 md:text-sm lg:text-xl" /> */}
        Services
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>

      </button>

      {/* First Dropdown */}
      <div
        className={`absolute left-0 mt-3 w-72 bg-white shadow-xl bg-gradient-to-r from-amber-50 via-yellow-50 to-white
        transition-all duration-300 z-50
        ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-3"
        }`}
      >
        {services.map((service) => (
          <ServiceItem
            key={service.slug}
            service={service}
            closeMenu={() => setOpen(false)}
          />
        ))}
      </div>
    </div>
  )
}

/* ========================= */
/* Sub Component */
/* ========================= */

function ServiceItem({ service, closeMenu }: any) {
  const [subOpen, setSubOpen] = useState(false)

  return (
    <div
      className="relative bg-gradient-to-r from-amber-50 via-yellow-50 to-white"
      onMouseEnter={() => setSubOpen(true)}
      onMouseLeave={() => setSubOpen(false)}
    >
      {/* Service Link */}
      <Link
        href={`/services/${service.slug}`}
        onClick={closeMenu}
        className="block relative  px-5 py-3 text-base font-medium text-gray-700 transition-all duration-300 hover:text-orange-500 group"
      >
         <div className="flex items-center">
  <p className="pr-5">{service.title}</p>
  <span className="ml-auto text-black text-[18px]">{">"}</span>
</div>
      <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-orange-500 transition-all z-10 duration-300 group-hover:w-full"></span>
      </Link>

      {/* Second Dropdown */}
      <div
        className={`absolute left-full top-0 w-80 bg-white shadow-xl bg-gradient-to-r from-amber-50 via-yellow-50 to-white
        max-h-[57vh] overflow-y-auto transition-all duration-300
        ${
          subOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {hyderabadLocations.map((location: string) => (
          <Link
            key={`${service.slug}-${location}`}
            href={`/${service.slug}/${slugify(location)}`}
            onClick={closeMenu}
            className="block px-5 py-3 hover:bg-indigo-50 text-gray-700 hover:text-orange-500 transition-colors duration-300"
          >
            {service.title} in {location}
          </Link>
        ))}
      </div>
    </div>
  )
}