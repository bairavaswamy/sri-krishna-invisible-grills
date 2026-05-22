# Chennai Service-Area Workflow

Chennai is the main city service directory:

```txt
/chennai
```

Area hub pages use:

```txt
/chennai/area
```

Area service pages use:

```txt
/chennai/area/service
```

Example:

```txt
/chennai/adyar/balcony-safety-nets
```

## File Layout

- `app/config/chennai.config.ts`
  Source list for 72 Chennai areas and 16 active services.
- `app/content/service-areas/index.ts`
  Exports the explicit manual service-area entry list.
- `app/content/service-areas/chennai-manual-service-areas.ts`
  Contains all 1152 Chennai area-service records as written data entries.
- `app/content/serviceDetails.ts`
  Service images, categories, benefits, use cases, and site checks for manual-entry pages.
- `app/content/serviceAreaCatalog.ts`
  Lookup helpers for paths, area pages, service pages, and catalog counts.
- `app/content/services/*.ts`
  Full-length manually written article overrides.
- `app/content/manualServicePages.ts`
  Combines the manually written article files.
- `app/content/manualPageRegistry.ts`
  Quality gate for manual long-form articles only.

## Publishing Model

- Every configured Chennai area and service combination now has an explicit entry in `chennai-manual-service-areas.ts`.
- Manual-entry pages render from those records; no service-area record is generated from the config at runtime.
- If a full long-form article exists for the same route, the long-form article renders instead of the shorter manual-entry page.
- `/chennai` links to all services and all areas.
- `/chennai/area` links to all 16 services for that area.
- `/chennai/area/service` links to related services, nearby areas, phone, WhatsApp, and contact pages.

## Manual Article Rules

Manual long-form articles are still held to the stricter content gate:

- 2450 to 2550 words
- unique URL paths
- unique meta titles
- unique meta descriptions
- at least 5 FAQ entries
- no duplicate FAQ questions within the same page

Use this check while writing or wiring pages:

```bash
npm run validate:manual-pages
```

The check now validates both:

- long-form article quality
- the complete 72 areas x 16 services manual-entry count

## Current Status

- 1152 explicit Chennai area-service entries are available.
- 1152 manual long-form article routes are published as premium overrides.
- All 16 Chennai services now each have all 72 Chennai areas written as long-form service pages.
- Building Covering Safety Nets is included with 3 unique generated service images under `public/images/services/building-covering-safety-nets/`.
- The production build creates all `/chennai`, `/chennai/area`, and `/chennai/area/service` static routes from those entries.
