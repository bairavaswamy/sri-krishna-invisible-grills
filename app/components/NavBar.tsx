'use client'

import { memo, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Briefcase, MapPin, Search, X } from "lucide-react"
import { services } from "./constants/services"
import {
  allSearchLocations,
  routeSearchItems,
  serviceSearchItems,
} from "./constants/searchData"

const MenuClient = dynamic(() => import("./Menuclient"), {
  ssr: false,
})

const DropdownClient = dynamic(() => import("./Dropdownclient"), {
  ssr: false,
  loading: () => (
    <p className="group relative px-4 py-2 text-base font-medium text-gray-700 transition-all duration-300 hover:text-orange-500">
      Services
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
    </p>
  ),
})

const MAX_LOCATION_PREVIEW = 16
const MAX_ROUTE_RESULTS = 30

const Header: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    if (!searchOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false)
        setSearchQuery("")
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [searchOpen])

  const closeSearch = () => {
    setSearchOpen(false)
    setSearchQuery("")
  }

  const normalizedQuery = searchQuery.trim().toLowerCase()

  const matchingServices = normalizedQuery
    ? serviceSearchItems.filter((service) =>
        service.title.toLowerCase().includes(normalizedQuery)
      )
    : serviceSearchItems

  const matchingLocations = normalizedQuery
    ? allSearchLocations.filter((location) =>
        location.toLowerCase().includes(normalizedQuery)
      )
    : allSearchLocations.slice(0, MAX_LOCATION_PREVIEW)

  const matchingRoutes = normalizedQuery
    ? routeSearchItems
        .filter((item) => item.label.toLowerCase().includes(normalizedQuery))
        .slice(0, MAX_ROUTE_RESULTS)
    : []

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
        <header className="flex items-center justify-between bg-gradient-to-br from-white via-orange-50 to-gray-100 px-6 pt-4 pb-0">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image
                src="/Rohini_logo.webp"
                alt="Rohini Invisible Grills"
                width={120}
                height={95}
                priority
                className="h-16 w-auto sm:h-22"
              />
            </Link>

            <div>
              <p className="relative text-sm font-extrabold tracking-wider text-gray-800 sm:text-lg md:text-xl">
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-500 bg-clip-text text-transparent opacity-70 blur-sm"></span>
                <span className="relative bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
                  Rohini Invisible Grills
                </span>
              </p>

              <div className="flex items-center gap-2">
                <span className="h-[1px] flex-1 bg-gray-400"></span>

                <p className="whitespace-nowrap text-[10px] text-gray-600 md:font-medium">
                  Safety Nets Distribution
                </p>

                <span className="h-[1px] flex-1 bg-gray-400"></span>
              </div>
            </div>
          </div>

          <nav className="hidden items-center justify-between lg:flex">
            <div className="flex items-center space-x-2">
              <Link
                href="/"
                className="group relative px-4 py-2 text-base font-medium text-gray-700 transition-all duration-300 hover:text-orange-500"
              >
                Home
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <DropdownClient />

              <Link
                href="/contact-us"
                className="group relative px-4 py-2 text-base font-medium text-gray-700 transition-all duration-300 hover:text-orange-500"
              >
                Contact Us
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                href="/about"
                className="group relative px-4 py-2 text-base font-medium text-gray-700 transition-all duration-300 hover:text-orange-500"
              >
                About Us
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="group inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm transition-all duration-300 hover:border-orange-400 hover:text-orange-500"
                aria-label="Search services and locations"
              >
                <Search size={17} />
                Search
              </button>
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:inline-block">
              <div className="flex items-center">
                <button
                  onClick={() => {
                    const element = document.getElementById("quote")
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="hidden rounded px-4 py-2 text-sm text-white transition hover:opacity-90 sm:inline-block md:px-2 md:py-1 md:text-sm lg:px-4 lg:py-2 lg:text-xl btn-accent"
                >
                  Request Quote
                </button>
              </div>
            </div>

            <div className="block lg:hidden">
              <button
                aria-label="menu"
                onClick={() => setOpen(!open)}
                className="rounded-md p-2"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="#111827"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>
      </div>

      {searchOpen && (
        <div
          className="fixed inset-0 z-[80] bg-slate-950/45 px-4 py-24 backdrop-blur-sm"
          onClick={closeSearch}
        >
          <div
            className="mx-auto flex max-h-[78vh] w-full max-w-5xl flex-col overflow-hidden rounded-[28px] border border-orange-100 bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="border-b border-orange-100 bg-gradient-to-r from-white via-orange-50 to-amber-50 px-5 py-4 sm:px-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
                    Search
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    Explore every service and location
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">
                    Search across {services.length} services and {allSearchLocations.length} locations.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeSearch}
                  className="inline-flex items-center justify-center rounded-full border border-orange-200 p-2 text-slate-600 transition hover:border-orange-400 hover:text-orange-500"
                  aria-label="Close search"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-orange-200 bg-white px-4 py-3 shadow-sm">
                <Search size={18} className="text-orange-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search by service, city, area or apartment name"
                  className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 sm:text-base"
                  autoFocus
                />
              </div>
            </div>

            <div className="grid min-h-0 gap-0 overflow-hidden lg:grid-cols-[280px_minmax(0,1fr)]">
              <div className="min-h-0 overflow-y-auto border-b border-orange-100 bg-slate-50/70 p-5 lg:border-b-0 lg:border-r">
                <div>
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <Briefcase size={16} className="text-orange-500" />
                    Services
                  </div>

                  <div className="space-y-2">
                    {matchingServices.map((service) => (
                      <Link
                        key={service.id}
                        href={service.href}
                        onClick={closeSearch}
                        className="block rounded-xl border border-transparent bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-orange-200 hover:text-orange-500"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <MapPin size={16} className="text-orange-500" />
                    Locations
                  </div>

                  <div className="flex max-h-64 flex-wrap gap-2 overflow-y-auto pr-1">
                    {matchingLocations.map((location) => (
                      <button
                        key={location}
                        type="button"
                        onClick={() => setSearchQuery(location)}
                        className="rounded-full border border-orange-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-orange-400 hover:text-orange-500 sm:text-sm"
                      >
                        {location}
                      </button>
                    ))}
                  </div>

                  {!normalizedQuery && (
                    <p className="mt-3 text-xs leading-5 text-slate-500">
                      Start typing to search every area, city, and apartment community covered by the site.
                    </p>
                  )}
                </div>
              </div>

              <div className="min-h-[320px] overflow-y-auto p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Matching pages
                    </h3>
                    <p className="text-sm text-slate-500">
                      {normalizedQuery
                        ? `Showing up to ${MAX_ROUTE_RESULTS} service pages for "${searchQuery.trim()}".`
                        : "Use the search box or tap a location to see service pages."}
                    </p>
                  </div>
                </div>

                {!normalizedQuery && (
                  <div className="mt-6 rounded-2xl border border-dashed border-orange-200 bg-orange-50/60 p-5 text-sm text-slate-600">
                    Try searches like <span className="font-semibold text-slate-900">Invisible Grills</span>,{" "}
                    <span className="font-semibold text-slate-900">Gachibowli</span>,{" "}
                    <span className="font-semibold text-slate-900">Whitefield</span>, or{" "}
                    <span className="font-semibold text-slate-900">Prestige Shantiniketan</span>.
                  </div>
                )}

                {normalizedQuery && matchingRoutes.length === 0 && (
                  <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
                    No matching service pages found for this search yet.
                  </div>
                )}

                {normalizedQuery && matchingRoutes.length > 0 && (
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {matchingRoutes.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={closeSearch}
                        className="rounded-2xl border border-slate-200 bg-white px-4 py-4 transition hover:border-orange-300 hover:shadow-md"
                      >
                        <p className="text-sm font-semibold text-slate-900">
                          {item.serviceTitle}
                        </p>
                        <p className="mt-1 text-sm text-slate-600">{item.location}</p>
                        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
                          Open page
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="pt-20" />
      <div className="block lg:hidden">
        <MenuClient open={open} onClose={() => setOpen(false)} />
      </div>
    </>
  )
}

export default memo(Header)
