"use client"
import { useState } from "react"
import Link from "next/link"
import { hyderabadLocations } from "./constants/locations"
import { services } from "./constants/services"
import { ChevronDown, Menu } from "lucide-react"

type MenuProps = {
  open: boolean
  onClose: () => void
}


 const MenuClient: React.FC<MenuProps> = ({ open, onClose }) => {
  const [activeService, setActiveService] = useState<string | null>(null)

  const toggleService = (slug: string) => {
    setActiveService(activeService === slug ? null : slug)
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-slate-50 to-white shadow-2xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      > 
        <div className="h-full flex flex-col bg-gradient-to-r from-amber-50 via-yellow-50 to-white">

       {/* Metallic Gold Header */}
        <div className="border-b border-amber-200 bg-gradient-to-r from-amber-50 via-yellow-50 to-white">
          <div className="pl-6 pr-6 pt-5 flex justify-between items-center">
            <h2 className="text-lg font-semibold bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
              Rohini Invisible Grills
            </h2>

            <button
              onClick={onClose}
              className="text-amber-500 hover:text-amber-700 transition text-lg"
            >
              ✕
            </button>
          </div>

          <p className="pl-6 pr-6 pb-4 text-xs text-amber-700/70">
            Safety Nets & Invisible Grills Distribution
          </p>
        </div>
          {/* Navigation */}
          <div className="flex-1 overflow-y-auto px-6 py-2 space-y-4">

            {/* Home & Contact Buttons */}
            <div className="block lg:hidden flex items-center space-x-3">
              <Link
                href="/"
                onClick={onClose}
                className="block text-center border border-slate-300 text-slate-700 font-medium py-1 px-4 rounded-lg hover:bg-slate-100 transition"
              >
                Home
              </Link>
               {/* contact-us */}
              <Link
                href="/about"
                onClick={onClose}
                className="block text-center border border-slate-300 text-slate-700 font-medium py-1 px-4 rounded-lg hover:bg-slate-100 transition"
              >
                About Us
              </Link>
            </div>

             <div className="flex">
                <h2 className="text-sm font-semibold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent border-b border-slate-700 pb-2 mt-1 text-slate-700 text-slate-500 uppercase tracking-wide">
                    Our Services
                </h2>
             </div>

            {/* Services */}
            {services.map((service) => {
              const isActive = activeService === service.slug

              return (
                <div key={service.slug} className="border-b border-slate-200 pb-3">

                  {/* Service Header */}
                  <button
                    
                    className="w-full flex justify-between items-center text-left font-semibold text-slate-800 hover:text-green-600 transition"
                  >
                    <Link
                          key={`${service.slug}-${location}`}
                          href={`/services/${service.slug}`}
                          onMouseEnter={(e) => {
                                (e.currentTarget as HTMLAnchorElement).rel = "prefetch"
                            }}
                          onClick={onClose}
                          className="w-full flex justify-between items-center text-left font-semibold text-slate-800 hover:text-green-600 transition"
                        >
                          {service.title} in Hyderabad
                        </Link>
                    
                    <ChevronDown
                    onClick={() => toggleService(service.slug)}
                      size={18}
                      className={`transition-transform duration-300 ${
                        isActive ? "rotate-180 text-green-600" : ""
                      }`}
                    />
                  </button>

                  {/* Locations */}
                  <div
                    className={`grid transition-all duration-300 overflow-hidden ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100 mt-3"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden space-y-2 pl-2">
                      {hyderabadLocations.map((location) => (
                        <Link
                          key={`${service.slug}-${location}`}
                          href={`/${service.slug}/${location
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          onClick={onClose}
                           onMouseEnter={(e) => {
                                (e.currentTarget as HTMLAnchorElement).rel = "prefetch"
                            }}
                          className="block text-sm font-medium text-slate-600 hover:text-green-600 hover:bg-orange-100 px-3 py-1.5 rounded-md transition-all duration-200"
                        >
                          {service.title} in {location}
                        </Link>
                      ))}

                      {/* View All Locations */}
                      <Link
                        href={`/${service.slug}`}
                        onClick={onClose}
                        className="block text-sm font-semibold text-blue-600 hover:underline mt-2"
                      >
                        View All Locations →
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-200 text-xs text-slate-500 text-center bg-white">
            © {new Date().getFullYear()} Hyderabad Safety Nets
          </div>

        </div>
      </aside>
    </>
  )
}

export default MenuClient