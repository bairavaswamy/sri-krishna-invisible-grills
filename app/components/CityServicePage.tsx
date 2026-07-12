import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Phone, Ruler } from "lucide-react";
import { chennaiConfig } from "../config/chennai.config";
import {
  getBreadcrumbListSchema,
  getFAQPageSchema,
  getGraphSchema,
  getServiceSchema,
  getWebPageSchema,
  stringifySchema,
} from "../config/schema.config";
import { absoluteUrl, siteConfig } from "../config/site.config";
import { serviceAreaPath } from "../config/routes.config";
import type { ChennaiService } from "../content/serviceAreaCatalog";
import { getChennaiServiceManualPage } from "../content/chennaiServiceManualPages";
import { getServiceDetail } from "../content/serviceDetails";
import { getServiceVisuals } from "../content/serviceVisuals";

type CityServicePageProps = {
  service: ChennaiService;
};

const featuredAreaSlugs = [
  "adyar",
  "anna-nagar",
  "velachery",
  "tambaram",
  "sholinganallur",
  "thiruvanmiyur",
  "porur",
  "medavakkam",
  "pallavaram",
  "madipakkam",
  "mylapore",
  "t-nagar",
] as const;

const featuredAreas = featuredAreaSlugs
  .map((slug) => chennaiConfig.areas.find((area) => area.slug === slug))
  .filter((area): area is (typeof chennaiConfig.areas)[number] => Boolean(area));

export default function CityServicePage({ service }: CityServicePageProps) {
  const detail = getServiceDetail(service.slug);
  const visuals = getServiceVisuals(service.slug);
  const manual = getChennaiServiceManualPage(service.slug);
  const relatedServices = chennaiConfig.services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 4);
  const pageUrl = absoluteUrl(`/${chennaiConfig.citySlug}/${service.slug}/`);
  const imageUrl = absoluteUrl(visuals.hero);
  const jsonLd = getGraphSchema([
    getWebPageSchema({
      url: pageUrl,
      name: manual.title,
      description: manual.lead,
      image: imageUrl,
    }),
    getServiceSchema({
      url: pageUrl,
      name: manual.title,
      description: manual.lead,
      image: imageUrl,
      areaName: "Chennai",
    }),
    getFAQPageSchema(pageUrl, manual.faq),
    getBreadcrumbListSchema([
      { name: "Home", url: absoluteUrl("/") },
      { name: "Chennai", url: absoluteUrl(`/${chennaiConfig.citySlug}/`) },
      { name: service.name, url: pageUrl },
    ]),
  ]);

  return (
    <main className="bg-gradient-to-b from-white via-[#f8fbff] to-[#fff8e8] text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifySchema(jsonLd),
        }}
      />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={visuals.hero}
            alt={manual.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08275a] via-[#08275a]/88 to-[#08275a]/42" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/95 to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-8 px-4 py-16 lg:grid-cols-[1fr_0.75fr] lg:px-6">
          <div className="min-w-0">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
              {manual.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              {manual.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">
              {manual.lead}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-[#d6a039] px-5 py-3 font-black text-[#08275a] shadow-lg shadow-[#08275a]/20 transition hover:bg-[#f3c35b]"
              >
                <Phone size={18} />
                Call for Chennai Visit
              </a>
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                <MessageCircle size={18} />
                WhatsApp Photos
              </a>
            </div>
          </div>

          <div className="rounded-md border border-white/15 bg-white/12 p-6 text-white shadow-2xl backdrop-blur-md">
            <MapPin size={26} className="text-amber-200" />
            <h2 className="mt-4 text-2xl font-black">Chennai service coverage</h2>
            <p className="mt-3 text-sm leading-7 text-slate-100">
              This page is written for Chennai enquiries. Open a main area below,
              or call with your location and photos for a direct site visit.
            </p>
            <div className="mt-5 grid gap-2">
              {featuredAreas.slice(0, 4).map((area) => (
                <Link
                  key={area.slug}
                  href={serviceAreaPath(service.slug, area.slug)}
                  prefetch={false}
                  className="flex items-center justify-between rounded-md border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/20"
                >
                  {area.name}
                  <ArrowRight size={16} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 lg:grid-cols-[0.7fr_0.3fr] lg:px-6">
        <article>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b98218]">
            Chennai Service Details
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
            What this service is meant to solve
          </h2>
          <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
            {manual.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <section className="rounded-md border border-[#dbe7f5] bg-[#f8fbff] p-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b98218]">
                Best For
              </p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">
                Common Chennai use cases
              </h2>
              <div className="mt-5 grid gap-3">
                {detail.bestFor.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-md bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                    <CheckCircle2 size={17} className="shrink-0 text-[#0b4fb3]" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-md border border-[#dbe7f5] bg-[#f8fbff] p-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b98218]">
                Site Checks
              </p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">
                Checked before quotation
              </h2>
              <div className="mt-5 grid gap-3">
                {detail.checks.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-md bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                    <Ruler size={17} className="shrink-0 text-[#0b4fb3]" />
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-12 grid gap-6">
            {manual.sections.map((section) => (
              <section key={section.title} className="rounded-md border border-[#dbe7f5] bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-black text-slate-950">{section.title}</h2>
                <p className="mt-4 text-[17px] leading-8 text-slate-700">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-12 grid gap-6">
            {manual.guideSections.map((section, sectionIndex) => (
              <section
                key={section.title}
                className="overflow-hidden rounded-md border border-[#dbe7f5] bg-white shadow-sm"
              >
                <div className="border-b border-[#dbe7f5] bg-gradient-to-r from-[#f8fbff] via-white to-[#fff4d9] p-6">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b98218]">
                    {section.eyebrow}
                  </p>
                  <h2 className="mt-3 text-3xl font-black text-slate-950">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-[17px] leading-8 text-slate-700">
                    {section.intro}
                  </p>
                </div>
                <div className="grid gap-0 md:grid-cols-2">
                  {section.points.map((point, pointIndex) => (
                    <div
                      key={point.label}
                      className={`border-t border-slate-100 p-6 ${pointIndex % 2 === 0 ? "md:border-r" : ""}`}
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#08275a] text-sm font-black text-[#f3c35b]">
                          {sectionIndex + 1}.{pointIndex + 1}
                        </span>
                        <div>
                          <h3 className="text-lg font-black text-slate-950">
                            {point.label}
                          </h3>
                          <p className="mt-3 text-[15px] leading-7 text-slate-700">
                            {point.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-md border border-[#ead8a8] bg-[#fff8e8] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
              Chennai Service Note
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">
              A practical finish for {service.name.toLowerCase()}
            </h2>
            <div className="mt-5 grid gap-4">
              {manual.closing.map((paragraph) => (
                <p key={paragraph} className="text-[17px] leading-8 text-slate-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b98218]">
              Work Flow
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">
              How the Chennai visit is handled
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {manual.process.map((item, index) => (
                <div key={item} className="rounded-md border border-[#dbe7f5] bg-white p-5 shadow-sm">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b98218]">
                    Step {index + 1}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b98218]">
              Main Chennai Areas
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Common Chennai enquiry areas
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
              These are frequent enquiry locations for this service. For any other
              Chennai area, call or send photos on WhatsApp and the team can confirm
              the visit.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {featuredAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={serviceAreaPath(service.slug, area.slug)}
                  prefetch={false}
                  className="flex items-center justify-between rounded-md border border-[#dbe7f5] bg-white px-4 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:border-[#d6a039] hover:text-[#08275a]"
                >
                  {area.name}
                  <ArrowRight size={15} />
                </Link>
              ))}
            </div>
          </section>
        </article>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="mb-5 grid gap-4">
            <div className="relative min-h-[220px] overflow-hidden rounded-md shadow-lg">
              <Image src={visuals.detail} alt={`${service.name} installation detail`} fill className="object-cover" />
            </div>
            <div className="relative min-h-[180px] overflow-hidden rounded-md shadow-lg">
              <Image src={visuals.context} alt={`${service.name} Chennai service context`} fill className="object-cover" />
            </div>
          </div>

          <div className="rounded-md border border-[#dbe7f5] bg-white p-6 shadow-lg shadow-[#08275a]/8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b98218]">
              Quick Enquiry
            </p>
            <h2 className="mt-3 text-2xl font-black text-slate-950">
              Ask for {service.name.toLowerCase()}.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Share the area, opening photos, floor access, and the main issue. The
              visit can then follow the real site condition.
            </p>
            <div className="mt-5 grid gap-3">
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#08275a] px-5 py-3 font-black text-white shadow transition hover:bg-[#0b4fb3]"
              >
                <Phone size={17} />
                Call Now
              </a>
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d6a039]/45 bg-[#fff8e8] px-5 py-3 font-black text-[#08275a] shadow-sm transition hover:border-[#d6a039] hover:bg-[#fff4d9]"
              >
                WhatsApp
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          <div className="mt-5 rounded-md border border-[#dbe7f5] bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
              Highlights
            </p>
            <div className="mt-4 grid gap-2">
              {manual.highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-md border border-[#dbe7f5] px-3 py-2 text-sm font-semibold text-slate-700">
                  <CheckCircle2 size={15} className="text-[#0b4fb3]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="border-y border-[#dbe7f5] bg-white px-4 py-14 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b98218]">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-950">
            Questions about {service.name.toLowerCase()} in Chennai
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {manual.faq.map((item) => (
              <details key={item.question} className="rounded-md border border-[#dbe7f5] bg-[#f8fbff] p-5 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-slate-950">
                  {item.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b98218]">
          Related Services
        </p>
        <h2 className="mt-3 text-3xl font-black text-slate-950">
          Other Chennai services
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {relatedServices.map((related) => (
            <Link
              key={related.slug}
              href={`/${chennaiConfig.citySlug}/${related.slug}`}
              prefetch={false}
              className="group rounded-md border border-[#dbe7f5] bg-white p-5 shadow-sm transition hover:border-[#d6a039] hover:shadow-md"
            >
              <p className="text-lg font-black text-slate-950">{related.name}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{related.angle}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#0b4fb3]">
                Open Chennai page
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
