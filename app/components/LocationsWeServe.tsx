"use client"

import Link from "next/link"
import { MapPin } from "lucide-react"
import { topLocationsByService } from "./constants/internalLinking"
import { searchLocationsByService } from "./constants/searchData"
import { slugify } from "./seo/utils"

type Props = {
  service: string
}

export default function LocationScroller({ service }: Props) {
  const locations =
    topLocationsByService[service] ??
    (searchLocationsByService[service] ?? []).slice(0, 12)

  if (locations.length === 0) {
    return null
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="rounded-[28px] border border-green-100 bg-gradient-to-r from-green-50 via-white to-emerald-50 p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <MapPin className="text-green-600" size={20} />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
              Popular Areas We Serve
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              Explore this service in top locations
            </h2>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {locations.map((location) => (
            <Link
              key={`${service}-${location}`}
              href={`/${service}/${slugify(location)}`}
              className="rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-green-400 hover:bg-green-600 hover:text-white"
            >
              {location}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
