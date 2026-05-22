# DK Safety Solutions

Next.js site for `dksafetysolutions.com`.

Active public pages:

- `/`
- `/chennai`
- `/chennai/[area]`
- `/chennai/[area]/[service]`
- `/about`
- `/gallery`
- `/contact-us`

Shared brand, domain, contact, navigation, gallery, testimonial, and service focus content lives in:

```txt
app/config/site.config.ts
```

Chennai area and service coverage lives in:

```txt
app/config/chennai.config.ts
app/content/service-areas/
app/content/serviceAreaCatalog.ts
app/content/serviceDetails.ts
app/content/services/
```

The Chennai catalog now uses 1152 explicit service-area records from `app/content/service-areas/chennai-manual-service-areas.ts` for 72 areas x 16 services. Full long-form articles in `app/content/services/` override the shorter service-entry page for matching routes and must pass the 2450-2550 word gate in `app/content/manualPageRegistry.ts`.

Run locally:

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

Fast content and catalog check:

```bash
npm run validate:manual-pages
```
