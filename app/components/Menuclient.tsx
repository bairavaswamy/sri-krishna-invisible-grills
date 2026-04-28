"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Search, X } from "lucide-react"
import { services } from "./constants/services"
import {
  allSearchLocations,
  routeSearchItems,
  searchLocationsByService,
  serviceSearchItems,
} from "./constants/searchData"
import { slugify } from "./seo/utils"

type MenuProps = {
  open: boolean
  onClose: () => void
}

const MAX_SEARCH_RESULTS = 10
const MAX_LOCATION_CHIPS = 12

const MenuClient: React.FC<MenuProps> = ({ open, onClose }) => {
  const [activeService, setActiveService] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchExpanded, setSearchExpanded] = useState(false)

  const toggleService = (slug: string) => {
    setActiveService(activeService === slug ? null : slug)
  }

  const closeMenuAndReset = () => {
    setSearchQuery("")
    setSearchExpanded(false)
    onClose()
  }

  const normalizedQuery = searchQuery.trim().toLowerCase()

  const matchingServices = normalizedQuery
    ? serviceSearchItems.filter((service) =>
        service.title.toLowerCase().includes(normalizedQuery)
      )
    : serviceSearchItems.slice(0, 5)

  const matchingRoutes = normalizedQuery
    ? routeSearchItems
        .filter((item) => item.label.toLowerCase().includes(normalizedQuery))
        .slice(0, MAX_SEARCH_RESULTS)
    : []

  const matchingLocations = normalizedQuery
    ? allSearchLocations
        .filter((location) => location.toLowerCase().includes(normalizedQuery))
        .slice(0, MAX_LOCATION_CHIPS)
    : allSearchLocations.slice(0, MAX_LOCATION_CHIPS)

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={closeMenuAndReset}
      />

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-80 transform bg-gradient-to-b from-slate-50 to-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col bg-gradient-to-r from-amber-50 via-yellow-50 to-white">
          <div className="border-b border-amber-200 bg-gradient-to-r from-amber-50 via-yellow-50 to-white">
            <div className="flex items-center justify-between pl-6 pr-6 pt-5">
              <h2 className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-lg font-semibold text-transparent">
                Rohini Invisible Grills
              </h2>

              <button
                onClick={closeMenuAndReset}
                className="text-amber-500 transition hover:text-amber-700"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <p className="pl-6 pr-6 pb-4 text-xs text-amber-700/70">
              Safety Nets & Invisible Grills Distribution
            </p>
          </div>

          <div className="flex-1 space-y-5 overflow-y-auto px-6 py-4">
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/"
                prefetch={false}
                onClick={closeMenuAndReset}
                className="block rounded-xl border border-slate-300 bg-white px-4 py-2 text-center text-sm font-medium text-slate-700 shadow-sm transition hover:border-orange-300 hover:bg-orange-50"
              >
                Home
              </Link>

              <Link
                href="/about"
                prefetch={false}
                onClick={closeMenuAndReset}
                className="block rounded-xl border border-slate-300 bg-white px-4 py-2 text-center text-sm font-medium text-slate-700 shadow-sm transition hover:border-orange-300 hover:bg-orange-50"
              >
                About Us
              </Link>

              <Link
                href="/contact-us"
                prefetch={false}
                onClick={closeMenuAndReset}
                className="col-span-2 block rounded-xl border border-orange-200 bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
              >
                Contact Us
              </Link>
            </div>

            <div className="rounded-2xl border border-orange-200 bg-white/90 p-4 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
                <Search size={16} className="text-orange-500" />
                Search Services & Locations
              </div>

              {!searchExpanded ? (
                <button
                  type="button"
                  onClick={() => setSearchExpanded(true)}
                  className="flex w-full items-center gap-2 rounded-xl border border-orange-200 px-3 py-2 text-left"
                >
                  <Search size={16} className="text-orange-500" />
                  <span className="text-sm text-slate-400">Tap to search</span>
                </button>
              ) : (
                <div className="mt-4 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 rounded-xl border border-orange-200 px-3 py-2">
                      <Search size={16} className="text-orange-500" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                        placeholder="Search service or location"
                        className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                        autoFocus
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setSearchQuery("")
                          setSearchExpanded(false)
                        }}
                        className="text-slate-400 transition hover:text-orange-500"
                        aria-label="Collapse search"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Services
                    </p>

                    <div className="space-y-2">
                      {matchingServices.map((service) => (
                        <Link
                          key={service.id}
                          href={service.href}
                          prefetch={false}
                          onClick={closeMenuAndReset}
                          className="block rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-orange-300 hover:text-orange-500"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Locations
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {matchingLocations.map((location) => (
                        <button
                          key={location}
                          type="button"
                          onClick={() => setSearchQuery(location)}
                          className="rounded-full border border-orange-200 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-orange-400 hover:text-orange-500"
                        >
                          {location}
                        </button>
                      ))}
                    </div>
                  </div>

                  {normalizedQuery && (
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Matching Pages
                      </p>

                      <div className="space-y-2">
                        {matchingRoutes.length > 0 ? (
                          matchingRoutes.map((item) => (
                            <Link
                              key={item.id}
                              href={item.href}
                              prefetch={false}
                              onClick={closeMenuAndReset}
                              className="block rounded-xl border border-slate-200 px-3 py-3 text-sm transition hover:border-orange-300"
                            >
                              <p className="font-semibold text-slate-900">{item.serviceTitle}</p>
                              <p className="mt-1 text-slate-600">{item.location}</p>
                            </Link>
                          ))
                        ) : (
                          <p className="rounded-xl border border-dashed border-slate-200 px-3 py-3 text-sm text-slate-500">
                            No matching pages found for this search.
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="flex">
              <h2 className="mt-1 border-b border-slate-700 pb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                Our Services
              </h2>
            </div>

            {services.map((service) => {
              const isActive = activeService === service.slug
              const serviceLocations =
                searchLocationsByService[service.slug]?.slice(0, 30) ?? []

              return (
                <div key={service.slug} className="border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      prefetch={false}
                      onClick={closeMenuAndReset}
                      className="flex-1 text-left font-semibold text-slate-800 transition hover:text-green-600"
                    >
                      {service.title}
                    </Link>

                    <button
                      type="button"
                      onClick={() => toggleService(service.slug)}
                      className="rounded-full p-1 text-slate-700 transition hover:bg-orange-100 hover:text-green-600"
                      aria-label={`Toggle ${service.title} locations`}
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          isActive ? "rotate-180 text-green-600" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <div
                    className={`grid overflow-hidden transition-all duration-300 ${
                      isActive ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="space-y-2 overflow-hidden pl-2">
                      {serviceLocations.map((location) => (
                        <Link
                          key={`${service.slug}-${location}`}
                          href={`/${service.slug}/${slugify(location)}`}
                          prefetch={false}
                          onClick={closeMenuAndReset}
                          className="block rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-orange-100 hover:text-green-600"
                        >
                          {service.title} in {location}
                        </Link>
                      ))}

                      <Link
                        href={`/services/${service.slug}`}
                        prefetch={false}
                        onClick={closeMenuAndReset}
                        className="mt-2 block text-sm font-semibold text-blue-600 hover:underline"
                      >
                        View All Locations
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="border-t border-slate-200 bg-white p-4 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Hyderabad Safety Nets
          </div>
        </div>
      </aside>
    </>
  )
}

export default MenuClient
