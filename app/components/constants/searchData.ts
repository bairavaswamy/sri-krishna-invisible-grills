import { combineBengaloreLocations, hyderabadLocations } from "./locations"
import { services } from "./services"
import { hyderabadOtherLocations } from "../data/telangana"
import { slugify } from "../seo/utils"

export const hyderabadSearchLocations = Array.from(
  new Set([...hyderabadLocations, ...hyderabadOtherLocations])
)

export const expandedSearchLocations = Array.from(
  new Set([...hyderabadSearchLocations, ...combineBengaloreLocations])
)

export const searchLocationsByService: Record<string, string[]> = {
  "invisible-grills": expandedSearchLocations,
  "balcony-safety-invisible-grills": expandedSearchLocations,
  "anti-bird-invisible-grills": hyderabadSearchLocations,
  "sports-nets": expandedSearchLocations,
  "windows-invisible-grills": hyderabadSearchLocations,
  "children-safety-invisible-grills": hyderabadSearchLocations,
  "bird-spikes-installation": expandedSearchLocations,
  "artificial-grass-turf": expandedSearchLocations,
  "cloth-hangers": expandedSearchLocations,
  "anti-bird-net-installation": expandedSearchLocations,
}

export const serviceSearchItems = services.map((service) => ({
  id: `service-${service.slug}`,
  href: `/services/${service.slug}`,
  title: service.title,
}))

export const routeSearchItems = services.flatMap((service) => {
  const locations = searchLocationsByService[service.slug] ?? []

  return locations.map((location) => ({
    id: `${service.slug}-${slugify(location)}`,
    href: `/${service.slug}/${slugify(location)}`,
    serviceTitle: service.title,
    location,
    label: `${service.title} in ${location}`,
  }))
})

export const allSearchLocations = Array.from(
  new Set(routeSearchItems.map((item) => item.location))
).sort((left, right) => left.localeCompare(right))
