import { chennaiConfig } from "./chennai.config";
import { serviceAreaPath } from "./routes.config";

export type SearchItem = {
  title: string;
  eyebrow: string;
  href: string;
  keywords: string;
};

export type SearchResultOptions = {
  limit?: number;
  defaultLimit?: number;
};

const coreItems: SearchItem[] = [
  { title: "Home", eyebrow: "Page", href: "/", keywords: "home main" },
  { title: "About", eyebrow: "Page", href: "/about", keywords: "about company team" },
  { title: "Gallery", eyebrow: "Page", href: "/gallery", keywords: "photos work images projects" },
  { title: "Contact", eyebrow: "Page", href: "/contact-us", keywords: "contact phone whatsapp enquiry quote" },
  { title: "Search", eyebrow: "Page", href: "/search", keywords: "search find services areas" },
  {
    title: "Chennai Services",
    eyebrow: "Directory",
    href: `/${chennaiConfig.citySlug}`,
    keywords: "all services areas chennai directory",
  },
];

export const siteSearchItems: SearchItem[] = [
  ...coreItems,
  ...chennaiConfig.services.map((service) => ({
    title: service.name,
    eyebrow: "Service",
    href: `/${chennaiConfig.citySlug}/${service.slug}`,
    keywords: `${service.name} ${service.angle} ${service.slug}`,
  })),
  ...chennaiConfig.areas.map((area) => ({
    title: `${area.name} Chennai`,
    eyebrow: "Area",
    href: `/${chennaiConfig.citySlug}/${area.slug}`,
    keywords: `${area.name} area local chennai`,
  })),
  ...chennaiConfig.services.flatMap((service) =>
    chennaiConfig.areas.map((area) => ({
      title: `${service.name} in ${area.name}`,
      eyebrow: "Service Area",
      href: serviceAreaPath(service.slug, area.slug),
      keywords: `${service.name} ${service.slug} ${area.name} ${area.slug} chennai`,
    }))
  ),
];

export const normalizeSearchValue = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

export function getSiteSearchResults(
  query: string,
  { limit = 8, defaultLimit = 7 }: SearchResultOptions = {}
) {
  const normalizedQuery = normalizeSearchValue(query);

  if (!normalizedQuery) {
    return siteSearchItems
      .filter((item) => item.eyebrow === "Service" || item.eyebrow === "Directory")
      .slice(0, defaultLimit);
  }

  const terms = normalizedQuery.split(" ").filter(Boolean);

  return siteSearchItems
    .map((item) => {
      const haystack = normalizeSearchValue(`${item.title} ${item.eyebrow} ${item.keywords}`);
      const title = normalizeSearchValue(item.title);
      const score =
        (title === normalizedQuery ? 36 : 0) +
        (title.startsWith(normalizedQuery) ? 28 : 0) +
        (title.includes(normalizedQuery) ? 20 : 0) +
        (haystack.includes(normalizedQuery) ? 12 : 0) +
        terms.reduce((total, term) => total + (haystack.includes(term) ? 2 : 0), 0);

      return { item, score };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .slice(0, limit)
    .map((result) => result.item);
}
