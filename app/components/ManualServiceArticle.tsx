import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  IndianRupee,
  ListChecks,
  MessageCircle,
  Phone,
  Scale,
} from "lucide-react";
import type { ManualServicePage } from "../content/manualServicePages";
import { siteConfig } from "../config/site.config";
import { getServiceDetail, type ServiceSlug } from "../content/serviceDetails";

type ManualServiceArticleProps = {
  page: ManualServicePage;
};

export default function ManualServiceArticle({ page }: ManualServiceArticleProps) {
  const serviceSlug = page.serviceSlug as ServiceSlug;
  const serviceDetail = getServiceDetail(serviceSlug);

  return (
    <main className="bg-white text-slate-950">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={page.hero.image} alt={page.hero.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/76 to-slate-900/30" />
        </div>

        <div className="relative mx-auto grid min-h-[620px] w-full max-w-7xl items-center gap-8 px-4 py-12 sm:gap-10 sm:py-16 lg:grid-cols-[1.05fr_0.75fr] lg:px-6">
          <div className="min-w-0 max-w-full">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300 sm:text-sm sm:tracking-[0.24em]">
              {page.hero.eyebrow}
            </p>
            <h1 className="mt-5 w-full max-w-full whitespace-normal break-words text-[1.75rem] font-black leading-[1.18] text-white [overflow-wrap:anywhere] sm:max-w-4xl sm:text-5xl sm:leading-tight lg:text-6xl">
              {page.hero.title}
            </h1>
            <p className="mt-5 w-full max-w-full text-sm leading-7 text-slate-100 sm:mt-6 sm:max-w-3xl sm:text-lg sm:leading-8">
              {page.hero.lead}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex w-full max-w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-amber-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-950/30 sm:w-auto sm:text-base"
              >
                <Phone size={18} />
                <span className="truncate">{page.hero.primaryCta}</span>
              </a>
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:border-white/40 hover:bg-white/20 sm:w-auto sm:text-base"
              >
                <MessageCircle size={18} />
                <span className="truncate">{page.hero.secondaryCta}</span>
              </a>
            </div>
          </div>

          <div className="w-full max-w-full rounded-[24px] border border-white/15 bg-white/12 p-5 text-white shadow-2xl backdrop-blur-md sm:rounded-[34px] sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-200">
              Site Visit Notes
            </p>
            <h2 className="mt-3 text-2xl font-black">What we check before quoting</h2>
            <p className="mt-3 text-sm leading-7 text-slate-100">
              Share the opening photos, floor level, access details, and the main
              safety issue. The quote should follow the measured site, not a guess.
            </p>
            <div className="mt-6 rounded-2xl bg-white/12 p-4 text-sm leading-7 text-slate-100">
              The visit confirms material, fixing line, finish, and after-care
              before installation starts.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-10 grid max-w-7xl gap-4 px-4 lg:grid-cols-3 lg:px-6">
        {page.proof.map((item) => (
          <div
            key={item.label}
            className="relative z-10 rounded-[24px] border border-blue-100 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.12)] transition-all duration-300 hover:shadow-[0_25px_80px_rgba(15,23,42,0.18)] hover:-translate-y-1"
          >
            <h2 className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-900">
              {item.label}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
          </div>
        ))}
      </section>

      {page.priceGuide || page.comparisonTable || page.process ? (
        <section className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
          <div className="grid gap-5 lg:grid-cols-[0.42fr_0.58fr]">
            {page.priceGuide ? (
              <div className="rounded-[26px] border border-blue-100 bg-[#f8fbff] p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#fff4d9] text-[#b47a14]">
                    <IndianRupee size={21} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                      Price
                    </p>
                    <h2 className="text-2xl font-black text-slate-950">
                      {page.priceGuide.range}
                    </h2>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {page.priceGuide.note}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {page.priceGuide.factors.map((factor) => (
                    <span
                      key={factor}
                      className="rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-bold text-blue-700"
                    >
                      {factor}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {page.process ? (
              <div className="rounded-[26px] border border-blue-100 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-blue-50 text-blue-700">
                    <ListChecks size={21} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                      Process
                    </p>
                    <h2 className="text-2xl font-black text-slate-950">
                      {page.process.heading}
                    </h2>
                  </div>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {page.process.steps.map((step, index) => (
                    <div key={step.title} className="flex gap-3 rounded-[18px] bg-[#f8fbff] p-4">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#08275a] text-sm font-black text-white">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-sm font-black text-slate-950">{step.title}</h3>
                        <p className="mt-1 text-xs leading-6 text-slate-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {page.comparisonTable ? (
            <div className="mt-5 rounded-[26px] border border-blue-100 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#fff4d9] text-[#b47a14]">
                  <Scale size={21} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                    Difference Table
                  </p>
                  <h2 className="text-2xl font-black text-slate-950">
                    {page.comparisonTable.heading}
                  </h2>
                </div>
              </div>

              <div className="mt-5 hidden overflow-hidden rounded-[18px] border border-slate-200 md:block">
                <table className="w-full border-collapse text-left text-sm">
                  <thead className="bg-[#08275a] text-white">
                    <tr>
                      <th className="px-4 py-3 font-bold">Check</th>
                      <th className="px-4 py-3 font-bold">Basic quote</th>
                      <th className="px-4 py-3 font-bold">Sri Krishna plan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {page.comparisonTable.rows.map((row) => (
                      <tr key={row.feature} className="border-t border-slate-200">
                        <td className="px-4 py-4 font-black text-slate-950">{row.feature}</td>
                        <td className="px-4 py-4 text-slate-600">{row.basic}</td>
                        <td className="px-4 py-4 font-semibold text-slate-800">
                          {row.sriKrishna}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-5 grid gap-3 md:hidden">
                {page.comparisonTable.rows.map((row) => (
                  <div key={row.feature} className="rounded-[18px] border border-slate-200 p-4">
                    <h3 className="text-sm font-black text-slate-950">{row.feature}</h3>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                      Basic quote
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{row.basic}</p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-blue-600">
                      Sri Krishna plan
                    </p>
                    <p className="mt-1 text-sm leading-6 font-semibold text-slate-800">
                      {row.sriKrishna}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      ) : null}

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[0.7fr_0.3fr] lg:px-6">
        <article>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-black tracking-tight text-slate-950">
              {page.intro.heading}
            </h2>
            <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
              {page.intro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-12 space-y-12">
            {page.sections.map((section, index) => {
              const sectionImage = section.image;

              return (
                <section
                  key={section.heading}
                  className={`grid items-center gap-8 ${
                    sectionImage ? "lg:grid-cols-2" : "lg:grid-cols-1"
                  }`}
                >
                  <div className={sectionImage && index % 2 === 1 ? "lg:order-2" : undefined}>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500">
                      {section.eyebrow}
                    </p>
                    <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                      {section.heading}
                    </h2>
                    <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  {sectionImage ? (
                    <div className="relative min-h-[340px] overflow-hidden rounded-[30px] shadow-xl">
                      <Image src={sectionImage} alt={section.heading} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                    </div>
                  ) : null}
                </section>
              );
            })}
          </div>
        </article>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[28px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-amber-50 p-6 shadow-lg shadow-blue-100/50">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500">
              {serviceDetail.category}
            </p>
            <h2 className="mt-3 text-2xl font-black text-slate-950">
              Ask for a site visit.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Share the opening size, floor level, usage pattern, and location. The
              quote should follow the real site condition.
            </p>
            <div className="mt-5 grid gap-3">
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 font-bold text-white shadow transition-all duration-300 hover:bg-slate-800 hover:shadow-lg hover:scale-105"
              >
                <Phone size={17} />
                Call
              </a>
              <Link
                href="/contact-us"
                prefetch={false}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-3 font-bold text-blue-600 shadow-sm transition-all duration-300 hover:border-blue-400 hover:bg-blue-50 hover:shadow-md hover:scale-105"
              >
                Contact Page
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </aside>
      </section>

      <section className="bg-[#f8fbff] px-4 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Decision Guide
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">
              {page.decisionGuide.heading}
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {page.decisionGuide.points.map((point) => (
              <div key={point.title} className="rounded-[24px] border border-blue-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200 hover:-translate-y-0.5">
                <CheckCircle2 className="text-blue-600 transition-colors duration-300 hover:text-blue-700" size={22} />
                <h3 className="mt-4 text-lg font-black text-slate-950">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-blue-500">
          FAQ
        </p>
        <h2 className="mt-3 text-center text-3xl font-black text-slate-950">
          Area questions answered clearly.
        </h2>
        <div className="mt-8 space-y-4">
          {page.faq.map((item) => (
            <details key={item.question} className="group rounded-[20px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300">
              <summary className="cursor-pointer text-lg font-bold text-slate-950 transition-colors duration-300 group-hover:text-blue-600">
                {item.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-7xl rounded-[34px] bg-[#08275a] p-8 text-center text-white shadow-xl">
          <h2 className="text-3xl font-black">{page.closing.heading}</h2>
          <div className="mx-auto mt-5 max-w-3xl space-y-4 text-sm leading-7 text-slate-100">
            {page.closing.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <a
            href={siteConfig.contact.phoneHref}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-blue-500 shadow transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:scale-105"
          >
            {page.closing.cta}
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
