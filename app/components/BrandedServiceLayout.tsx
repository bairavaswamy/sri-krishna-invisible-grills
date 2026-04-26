import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Handshake,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type BrandedSection = {
  heading: string;
  content: string | string[];
  slug?: string | string[];
};

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  scripts?: ReactNode;
  title: string;
  description: string;
  backgroundImage: string;
  showcaseImage: string;
  showcaseImageAlt: string;
  showcaseImageTitle: string;
  detailImage?: string;
  detailImageAlt?: string;
  detailImageTitle?: string;
  serviceName: string;
  location: string;
  serviceHref: string;
  serviceLabel?: string;
  showcaseBadge?: string;
  chips?: string[];
  sections: BrandedSection[];
  breadcrumbs: BreadcrumbItem[];
  ctaTitle: string;
  ctaDescription: string;
  afterContent?: ReactNode;
};

const defaultChips = [
  "Premium Installation",
  "Modern Safety",
  "Weather Resistant",
  "Professional Fitting",
];

const defaultStats = [
  { label: "Experience", value: "15+ Years" },
  { label: "Materials", value: "SS 304 / 316" },
  { label: "Service Area", value: "Trusted Local Service" },
];

function asText(content?: string | string[]) {
  if (!content) return "";
  return Array.isArray(content) ? content.join(" ") : content;
}

function asList(content?: string | string[]) {
  if (!content) return [];
  return Array.isArray(content) ? content : [content];
}

function includesAny(section: BrandedSection, terms: string[]) {
  const heading = section.heading.toLowerCase();
  return terms.some((term) => heading.includes(term));
}

function trimHeroDescription(text: string, maxChars = 1000) {
  if (text.length <= maxChars) return text;

  const trimmed = text.slice(0, maxChars);
  const lastSentenceBreak = Math.max(
    trimmed.lastIndexOf(". "),
    trimmed.lastIndexOf("! "),
    trimmed.lastIndexOf("? ")
  );

  if (lastSentenceBreak >= Math.floor(maxChars * 0.7)) {
    return trimmed.slice(0, lastSentenceBreak + 1).trim();
  }

  return `${trimmed.trimEnd()}...`;
}

export default function BrandedServiceLayout({
  scripts,
  title,
  description,
  backgroundImage,
  showcaseImage,
  showcaseImageAlt,
  showcaseImageTitle,
  detailImage,
  detailImageAlt,
  detailImageTitle,
  serviceName,
  location,
  serviceHref,
  serviceLabel,
  showcaseBadge,
  chips,
  sections,
  breadcrumbs,
  ctaTitle,
  ctaDescription,
  afterContent,
}: Props) {
  const introSection = sections[0];
  const aboutSection =
    sections.find((section, index) => index !== 0 && includesAny(section, ["about"])) ??
    sections[1];
  const priceSection = sections.find((section) =>
    includesAny(section, ["price", "cost", "pricing"])
  );
  const tipsSection = sections.find((section) =>
    includesAny(section, ["tips", "maintenance", "care"])
  );
  const nearbySection = sections.find((section) =>
    includesAny(section, ["nearby areas", "nearby locations", "nearby"])
  );
  const whySection = sections.find((section) =>
    includesAny(section, ["why choose", "why ", "popular", "protect", "protection"])
  );
  const listSection =
    sections.find(
      (section) =>
        Array.isArray(section.content) &&
        !includesAny(section, ["nearby areas", "nearby locations", "nearby"])
    ) ?? whySection;
  const conclusionSection = sections.find((section) =>
    includesAny(section, ["conclusion"])
  );

  const usedSections = new Set<BrandedSection>(
    [
      introSection,
      aboutSection,
      priceSection,
      tipsSection,
      nearbySection,
      whySection,
      listSection,
      conclusionSection,
    ].filter(Boolean) as BrandedSection[]
  );

  const featureSections = sections.filter((section) => !usedSections.has(section)).slice(0, 4);
  const nearbyItems = asList(nearbySection?.content);
  const nearbyLinks = Array.isArray(nearbySection?.slug) ? nearbySection.slug : [];
  const highlightItems = asList(listSection?.content).slice(0, 6);
  const benefitItems =
    whySection && Array.isArray(whySection.content)
      ? whySection.content.slice(0, 6)
      : highlightItems.slice(0, 6);

  const statCards = [
    defaultStats[0],
    defaultStats[1],
    { label: "Service Area", value: location },
  ];
  const heroDescription = trimHeroDescription(description, 1000);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#fff7ed_32%,#ffffff_100%)]">
      {scripts}

      <section className="relative py-10 text-white md:py-14">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />

        <div className="relative mx-auto max-w-[80vw] px-6 pb-8 text-center md:text-left">
          <h1 className="mb-6 text-2xl font-bold leading-tight drop-shadow-lg md:text-3xl">
            {title}
          </h1>

          <p className="max-w-3xl text-md text-gray-200 md:text-lg">{heroDescription}</p>

          <div className="mt-6 flex flex-col justify-center gap-6 sm:flex-row md:justify-start">
            <a
              href="tel:+918790518724"
              className="relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-5 py-2 font-semibold text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_60px_rgba(255,170,0,0.45)]"
            >
              <Phone size={20} className="relative z-10" />
              <span className="relative z-10 tracking-wide">Call Now</span>
            </a>

            <a
              href="https://wa.me/919491008380"
              className="relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-5 py-2 font-semibold text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_60px_rgba(34,197,94,0.45)]"
            >
              <MessageCircle size={20} className="relative z-10" />
              <span className="relative z-10 tracking-wide">WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="-mt-6 overflow-hidden rounded-[28px] border border-orange-100 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.1)] md:-mt-16 md:rounded-[32px] md:shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[340px] overflow-hidden lg:min-h-[520px]">
              <Image
                src={showcaseImage}
                alt={showcaseImageAlt}
                title={showcaseImageTitle}
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-900/0 to-transparent sm:from-slate-950/70 sm:via-slate-900/10" />

              <div className="absolute left-4 top-4 right-4 inline-flex w-fit max-w-[calc(100%-2rem)] items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md sm:left-5 sm:top-5 sm:px-4 sm:text-sm">
                <Sparkles size={16} className="text-amber-300" />
                {showcaseBadge ?? `${serviceName} Experts`}
              </div>

              <div className="absolute bottom-4 left-4 right-4 hidden gap-2 sm:bottom-5 sm:left-5 sm:right-5 sm:grid sm:gap-3 sm:grid-cols-3">
                {statCards.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/15 bg-black/25 p-4 text-white backdrop-blur-md"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-orange-200">
                      {item.label}
                    </p>
                    <p className="mt-2 text-xl font-bold sm:text-2xl">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.16),_transparent_32%),linear-gradient(180deg,#ffffff_0%,#fff7ed_100%)] p-5 md:p-8 lg:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold text-orange-600 sm:text-sm">
                <ShieldCheck size={16} />
                {serviceLabel ?? `${serviceName} in ${location}`}
              </div>

              <h2 className="mt-5 text-[1.7rem] font-bold leading-[1.15] text-slate-900 sm:text-3xl">
                Elegant protection designed for modern homes and apartments
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
                {asText(introSection?.content)}
              </p>

              {aboutSection && aboutSection !== introSection && (
                <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {asText(aboutSection.content)}
                </p>
              )}

              <div className="mt-6 grid gap-3 sm:hidden">
                {statCards.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[24px] border border-orange-100 bg-white p-4 shadow-sm"
                  >
                    <p className="text-[11px] uppercase tracking-[0.2em] text-orange-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-xl font-bold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
                {(chips && chips.length > 0 ? chips : defaultChips).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-3 py-2 text-center text-xs font-medium text-slate-700 sm:px-4 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
                <div className="rounded-[24px] border border-orange-100 bg-white/90 p-4 shadow-sm">
                  <Handshake className="h-8 w-8 text-orange-500" />
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-900">
                    15,300+ trusted homes protected with premium installation.
                  </p>
                </div>
                <div className="rounded-[24px] border border-orange-100 bg-white/90 p-4 shadow-sm">
                  <Award className="h-8 w-8 text-orange-500" />
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-900">
                    ISO quality standards and durable materials for long-term use.
                  </p>
                </div>
                <div className="rounded-[24px] border border-orange-100 bg-white/90 p-4 shadow-sm">
                  <ShieldCheck className="h-8 w-8 text-orange-500" />
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-900">
                    Expert fitting for balconies, windows, and high-rise spaces.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contact-us"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:text-base"
                >
                  Get Free Quote
                  <ArrowRight size={18} />
                </a>
                <a
                  href="https://wa.me/919491008380"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-green-200 bg-green-50 px-6 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-100 sm:text-base"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-5 text-sm text-slate-600 sm:px-6 sm:py-6">
        <div className="inline-flex flex-wrap items-center gap-2 rounded-[20px] border border-slate-200 bg-white/90 px-4 py-3 shadow-sm sm:rounded-full sm:py-2">
          {breadcrumbs.map((item, index) => (
            <div key={`${item.label}-${index}`} className="contents">
              {item.href ? (
                <Link href={item.href} className="transition hover:text-orange-600">
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold text-slate-900">{item.label}</span>
              )}
              {index < breadcrumbs.length - 1 && <span>/</span>}
            </div>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm md:rounded-[30px] md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-semibold text-orange-600 sm:text-sm">
              <Sparkles size={16} />
              Why this service works
            </div>
            <h2 className="mt-4 text-[1.7rem] font-bold leading-[1.15] text-slate-900 sm:text-3xl">
              Premium safety with a cleaner and more refined finish
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              {asText(whySection?.content ?? introSection?.content)}
            </p>
            {conclusionSection && (
              <p className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                {asText(conclusionSection.content)}
              </p>
            )}

            {benefitItems.length > 0 && (
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {benefitItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-slate-200 bg-slate-50 p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <p className="mt-3 text-sm font-medium leading-7 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            {highlightItems.length > 0 && (
              <div className="rounded-[26px] border border-orange-100 bg-[linear-gradient(180deg,#fff7ed_0%,#ffffff_100%)] p-5 shadow-sm md:rounded-[30px] md:p-6">
                <div className="flex items-start gap-3">
                  <Building2 className="h-10 w-10 rounded-2xl bg-slate-900 p-2 text-white" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500 sm:text-sm">
                      Service Highlights
                    </p>
                    <h3 className="text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
                      Best suited for modern apartments and home spaces
                    </h3>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {highlightItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-orange-100 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-[26px] border border-slate-200 bg-slate-900 p-5 text-white shadow-[0_18px_50px_rgba(15,23,42,0.28)] md:rounded-[30px] md:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-200 sm:text-sm">
                Quick Support
              </p>
              <h3 className="mt-3 text-xl font-bold leading-tight sm:text-2xl">
                Need advice for {serviceName.toLowerCase()} in {location}?
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Speak with our team for site guidance, product suggestions, and a
                free quote for your balcony, window, or outdoor installation.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href="tel:+918790518724"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 font-semibold text-white transition hover:bg-white/15"
                >
                  Call Rohini Invisible Grills
                  <Phone size={18} />
                </a>
                <Link
                  href={serviceHref}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white px-4 py-3 font-semibold text-slate-900 transition hover:bg-orange-50"
                >
                  Explore service page
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {featureSections.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
          <div className="rounded-[26px] border border-orange-100 bg-white p-5 shadow-sm md:rounded-[34px] md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
                  Service Details
                </p>
                <h2 className="mt-3 text-[1.7rem] font-bold leading-[1.15] text-slate-900 sm:text-3xl">
                  Designed to look refined while delivering strong everyday protection
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-slate-600">
                Explore the main design, installation, safety, and performance
                details for this service.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {featureSections.map((section) => (
                <div
                  key={section.heading}
                  className="rounded-[22px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md md:rounded-[28px] md:p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-sm font-bold text-orange-600">
                    <Sparkles size={18} />
                  </div>
                  <h3 className="mt-4 text-xl font-bold leading-tight text-slate-900">
                    {section.heading}
                  </h3>

                  {Array.isArray(section.content) ? (
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                      {section.content.map((item) => (
                        <li key={item} className="flex gap-3">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-orange-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-4 text-sm leading-7 text-slate-700">
                      {section.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {(priceSection || detailImage) && (
        <section className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm md:rounded-[32px]">
              {detailImage && (
                <div className="relative h-[220px] sm:h-[280px]">
                  <Image
                    src={detailImage}
                    alt={detailImageAlt ?? showcaseImageAlt}
                    title={detailImageTitle ?? showcaseImageTitle}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-900 sm:text-sm">
                      <Award size={16} className="text-orange-500" />
                      Pricing and installation guidance
                    </div>
                  </div>
                </div>
              )}

              <div className="p-5 md:p-6">
                <h2 className="text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
                  Installation support tailored to your layout and safety needs
                </h2>

                <div className="mt-6 space-y-3">
                  {asList(priceSection?.content ?? aboutSection?.content).map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm md:rounded-[32px] md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
                Installation Process
              </p>
              <h2 className="mt-3 text-[1.7rem] font-bold leading-[1.15] text-slate-900 sm:text-3xl">
                Professional installation with neat finishing and secure fitting
              </h2>

              <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
                {asList(
                  sections.find((section) =>
                    includesAny(section, ["install", "process", "how we", "professional"])
                  )?.content ?? introSection?.content
                )
                  .slice(0, 6)
                  .map((item, index) => (
                    <div key={`${item}-${index}`} className="flex gap-3 sm:gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white sm:h-11 sm:w-11">
                        {index + 1}
                      </div>
                      <div className="rounded-[20px] border border-orange-100 bg-orange-50/60 px-4 py-4 sm:rounded-[24px]">
                        <p className="text-sm leading-7 text-slate-700">{item}</p>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="mt-6 rounded-[24px] border border-green-100 bg-green-50 p-4 sm:mt-8 sm:rounded-[28px] sm:p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Clean finish, strong hold, and minimal visual obstruction
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                      Every installation is planned to preserve openness, airflow,
                      and the premium look of the property while improving safety.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {(tipsSection || nearbyItems.length > 0) && (
        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            {tipsSection && (
              <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm md:rounded-[30px] md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500 sm:text-sm">
                  Care Tips
                </p>
                <h2 className="mt-3 text-[1.7rem] font-bold leading-[1.15] text-slate-900 sm:text-3xl">
                  Smart maintenance and care for long-term performance
                </h2>

                <div className="mt-6 space-y-4">
                  {asList(tipsSection.content).map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                    >
                      <div className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-500" />
                        <p className="text-sm leading-7 text-slate-700">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {nearbyItems.length > 0 && (
              <div className="rounded-[26px] border border-orange-100 bg-[linear-gradient(180deg,#fff7ed_0%,#ffffff_100%)] p-5 shadow-sm md:rounded-[30px] md:p-8">
                <div className="flex items-start gap-3">
                  <MapPin className="h-10 w-10 rounded-2xl bg-slate-900 p-2 text-white" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500 sm:text-sm">
                      Nearby Areas
                    </p>
                    <h2 className="text-[1.7rem] font-bold leading-[1.15] text-slate-900 sm:text-3xl">
                      Also serving nearby locations around {location}
                    </h2>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {nearbyItems.map((item, index) => (
                    <Link
                      key={`${item}-${nearbyLinks[index] ?? index}`}
                      href={nearbyLinks[index] ?? "#"}
                      className="group rounded-[20px] border border-orange-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-md sm:rounded-[24px]"
                    >
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
                        View location page
                        <ArrowRight
                          size={16}
                          className="transition group-hover:translate-x-1"
                        />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {afterContent}

      <section className="px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_55%,#7c2d12_100%)] px-5 py-8 text-white shadow-[0_25px_80px_rgba(15,23,42,0.35)] md:rounded-[34px] md:px-10 md:py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-200 sm:text-sm">
                Free Site Visit Available
              </p>
              <h2 className="mt-4 text-[1.9rem] font-bold leading-tight md:text-4xl">
                {ctaTitle}
              </h2>
              <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-200 sm:text-base sm:leading-8">
                {ctaDescription}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="/contact-us"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-orange-50 sm:text-base"
              >
                Get Free Quote
                <ArrowRight size={18} />
              </a>
              <a
                href="tel:+918790518724"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15 sm:text-base"
              >
                Call Now
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
