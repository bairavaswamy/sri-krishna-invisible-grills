import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import { chennaiConfig } from "../config/chennai.config";
import { siteConfig } from "../config/site.config";
import { serviceAreaPath } from "../config/routes.config";
import type { ManualServiceAreaEntry } from "../content/types";
import type { ChennaiArea, ChennaiService } from "../content/serviceAreaCatalog";
import { getServiceDetail } from "../content/serviceDetails";
import { getServiceVisuals } from "../content/serviceVisuals";

type ManualEntryServicePageProps = {
  area: ChennaiArea;
  service: ChennaiService;
  entry: ManualServiceAreaEntry;
};

const getNearbyAreas = (areaSlug: string) => {
  const index = chennaiConfig.areas.findIndex((item) => item.slug === areaSlug);
  const start = Math.max(0, index - 3);
  const nearby = chennaiConfig.areas
    .slice(start, start + 7)
    .filter((item) => item.slug !== areaSlug);

  if (nearby.length >= 6) {
    return nearby.slice(0, 6);
  }

  return chennaiConfig.areas
    .filter((item) => item.slug !== areaSlug && !nearby.some((near) => near.slug === item.slug))
    .slice(0, 6 - nearby.length)
    .concat(nearby)
    .slice(0, 6);
};

export default function ManualEntryServicePage({
  area,
  service,
  entry,
}: ManualEntryServicePageProps) {
  const detail = getServiceDetail(service.slug);
  const visuals = getServiceVisuals(service.slug);
  const relatedServices = chennaiConfig.services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 6);
  const nearbyAreas = getNearbyAreas(area.slug);

  return (
    <main className="bg-gradient-to-b from-white via-[#f8fbff] to-[#fff8e8] text-slate-950">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={visuals.hero} alt={`${service.name} in ${area.name}`} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08275a] via-[#08275a]/86 to-[#08275a]/38" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/95 to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-[1.05fr_0.75fr] lg:px-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-300">
              {detail.category} in {area.name}, Chennai
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              {service.name} in {area.name} Chennai
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">
              {entry.localAngle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-[#d6a039] px-5 py-3 font-black text-[#08275a] shadow-lg shadow-[#08275a]/20 transition hover:bg-[#f3c35b]"
              >
                <Phone size={18} />
                Call for {area.name}
              </a>
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                <MessageCircle size={18} />
                WhatsApp Details
              </a>
            </div>
          </div>

          <div className="rounded-md border border-white/15 bg-white/12 p-6 text-white shadow-2xl backdrop-blur-md">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-200">
              Chennai Service Help
            </p>
            <h2 className="mt-3 text-2xl font-black">Area service planning</h2>
            <p className="mt-3 text-sm leading-7 text-slate-100">
              {service.name} pages connect the service choice with area-specific
              contact actions, nearby links, and practical site planning.
            </p>
            <div className="mt-6 rounded-md bg-white/12 p-4 text-sm leading-7 text-slate-100">
              Share photos, floor access, opening size, and the main safety issue so
              the visit can follow the real condition.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-10 grid max-w-7xl gap-4 px-4 lg:grid-cols-3 lg:px-6">
        {[
          {
            icon: MapPin,
            title: area.name,
            label: "Area Served",
            body: `Service coverage for ${area.name} homes, apartments, communities, and nearby Chennai neighborhoods.`,
          },
          {
            icon: ShieldCheck,
            title: service.name,
            label: "Service Type",
            body: detail.shortBenefit,
          },
          {
            icon: Ruler,
            title: "Site Visit",
            label: "Measurement First",
            body: `Openings, fixing points, access, and finish expectations are checked before quoting in ${area.name}.`,
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="relative z-10 rounded-md border border-[#dbe7f5] bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
            >
              <Icon className="text-[#0b4fb3]" size={24} />
              <p className="mt-4 text-2xl font-black text-[#08275a]">{item.title}</p>
              <h2 className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-slate-900">
                {item.label}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
            </div>
          );
        })}
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[0.7fr_0.3fr] lg:px-6">
        <article>
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b98218]">
              Site Planning
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
              Professional {service.name.toLowerCase()} for {area.name} properties
            </h2>
            <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
              {entry.articleBrief.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                SRI KRISHNA INVISIBLE GRILLS plans every {service.name.toLowerCase()} job around
                measured site conditions: material strength, visual finish, safe access,
                cleaning needs, and the way the space is used every day.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <section className="rounded-md border border-[#dbe7f5] bg-[#f8fbff] p-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b98218]">
                Best For
              </p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">
                Common {area.name} use cases
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

            <section className="rounded-md border border-[#dbe7f5] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b98218]">
                Site Checks
              </p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">
                What gets measured first
              </h2>
              <div className="mt-5 grid gap-3">
                {detail.checks.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-md border border-[#dbe7f5] bg-[#f8fbff] px-4 py-3 text-sm font-semibold text-slate-700">
                    <Ruler size={17} className="shrink-0 text-[#0b4fb3]" />
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="mt-12">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b98218]">
              Related Services
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">
              More safety services in {area.name}
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {relatedServices.map((related) => (
                <Link
                  key={related.slug}
                  href={serviceAreaPath(related.slug, area.slug)}
                  prefetch={false}
                  className="group rounded-md border border-[#dbe7f5] bg-white p-5 shadow-sm transition hover:border-[#d6a039] hover:shadow-md"
                >
                  <p className="text-lg font-black text-slate-950">{related.name}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{related.angle}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#0b4fb3]">
                    Open {area.name} page
                    <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </article>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="mb-5 grid gap-4">
            <div className="relative min-h-[220px] overflow-hidden rounded-md shadow-lg">
              <Image
                src={visuals.detail}
                alt={`${service.name} installation detail in Chennai`}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative min-h-[180px] overflow-hidden rounded-md shadow-lg">
              <Image
                src={visuals.context}
                alt={`${service.name} service visual for Chennai`}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="rounded-md border border-[#dbe7f5] bg-white p-6 shadow-lg shadow-[#08275a]/8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b98218]">
              Quick Enquiry
            </p>
            <h2 className="mt-3 text-2xl font-black text-slate-950">
              Ask for {area.name} service.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Share the area, opening size, floor level, and preferred service. The
              quote can then follow the real site condition.
            </p>
            <div className="mt-5 grid gap-3">
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#08275a] px-5 py-3 font-black text-white shadow transition hover:bg-[#0b4fb3]"
              >
                <Phone size={17} />
                Call Now
              </a>
              <Link
                href="/contact-us"
                prefetch={false}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d6a039]/45 bg-[#fff8e8] px-5 py-3 font-black text-[#08275a] shadow-sm transition hover:border-[#d6a039] hover:bg-[#fff4d9]"
              >
                Contact Page
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          <div className="mt-5 rounded-md border border-[#dbe7f5] bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
              Nearby Areas
            </p>
            <div className="mt-4 grid gap-2">
              {nearbyAreas.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={serviceAreaPath(service.slug, nearby.slug)}
                  prefetch={false}
                  className="flex items-center justify-between rounded-md border border-[#dbe7f5] px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#d6a039] hover:text-[#08275a]"
                >
                  {nearby.name}
                  <ArrowRight size={15} />
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="bg-[#f8fbff] px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-black uppercase tracking-[0.2em] text-[#b98218]">
            FAQ
          </p>
          <h2 className="mt-3 text-center text-3xl font-black text-slate-950">
            Questions about {service.name.toLowerCase()} in {area.name}
          </h2>
          <div className="mt-8 space-y-4">
            {[
              {
                question: `Do you install ${service.name.toLowerCase()} in ${area.name}?`,
                answer: `Yes. SRI KRISHNA INVISIBLE GRILLS covers ${area.name} and nearby Chennai areas for ${service.name.toLowerCase()} with site measurement, material planning, and installation support.`,
              },
              {
                question: "How is the price decided?",
                answer: "Pricing depends on opening size, access, material choice, fixing points, height, and finish expectations. A site visit gives a clearer quote than only a phone estimate.",
              },
              {
                question: "Can you handle apartments and independent houses?",
                answer: `Yes. The installation plan changes based on whether the ${area.name} property is an apartment, villa, rental flat, independent house, terrace, or common amenity area.`,
              },
              {
                question: "How fast can the work be scheduled?",
                answer: "Scheduling depends on technician availability, site access, and material readiness. Phone or WhatsApp is the fastest way to share details and confirm a visit window.",
              },
            ].map((item) => (
              <details key={item.question} className="group rounded-md border border-[#dbe7f5] bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-lg font-bold text-slate-950 transition group-hover:text-[#0b4fb3]">
                  {item.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl rounded-md bg-[#08275a] p-8 text-center text-white shadow-xl">
          <h2 className="text-3xl font-black">
            Book {service.name.toLowerCase()} in {area.name}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-100">
            The full Chennai catalog is connected now, so you can move from any area
            to any service and contact the team from the same page.
          </p>
          <a
            href={siteConfig.contact.phoneHref}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#d6a039] px-6 py-3 font-black text-[#08275a] shadow transition hover:bg-[#f3c35b]"
          >
            Call SRI KRISHNA INVISIBLE GRILLS
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
