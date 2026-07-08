import { CalendarCheck, MessageCircle, Ruler, ShieldCheck } from "lucide-react";
import { siteConfig } from "../config/site.config";

const highlights = [
  {
    title: "Open View Finish",
    detail: "Invisible grill and net planning that keeps light, air, and balcony views clean.",
    icon: ShieldCheck,
  },
  {
    title: "Site Measurement",
    detail: "Balcony, window, duct, and utility spaces are measured before quotation.",
    icon: Ruler,
  },
  {
    title: "Fast Appointment",
    detail: "Quick Chennai visit slots for homes, apartments, and community spaces.",
    icon: CalendarCheck,
  },
];

export default function HomeHeroHighlights() {
  return (
    <section className="mx-auto max-w-7xl px-0 sm:px-4">
      <div className="grid overflow-hidden border-b border-blue-100 bg-white shadow-md shadow-blue-100/50 sm:rounded-md sm:border sm:border-t-0 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative overflow-hidden bg-[#08275a] px-5 py-7 text-white sm:px-6 lg:px-8">
          <div className="absolute inset-x-0 top-0 h-1 bg-[#d6a039]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_32px)]" />

          <div className="relative">
            <p className="inline-flex rounded-full border border-[#d6a039]/40 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-[#d6a039]">
              Quick Start
            </p>
            <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">
              Measure, quote, and install with a clean finish.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80">
              Send your balcony or window photos on WhatsApp, then schedule a Chennai
              site visit for invisible grills, safety nets, and bird-control work.
            </p>

            <div className="mt-5 grid gap-2 text-xs font-bold uppercase tracking-[0.12em] text-blue-100 sm:grid-cols-3">
              <span className="border-l-2 border-[#d6a039] pl-3">Same day visit</span>
              <span className="border-l-2 border-[#d6a039] pl-3">Open-view finish</span>
              <span className="border-l-2 border-[#d6a039] pl-3">Clean fixing</span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d6a039] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#08275a] shadow-sm transition hover:bg-amber-500"
              >
                <MessageCircle size={17} />
                WhatsApp Photos
              </a>
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-sm transition hover:bg-white hover:text-[#08275a]"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>

        <div className="grid divide-y divide-blue-100 bg-gradient-to-br from-white via-blue-50/40 to-[#fff7e6] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group min-h-[190px] bg-white/70 p-5 transition hover:bg-white sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#08275a] text-white ring-4 ring-[#d6a039]/20 transition group-hover:bg-[#d6a039] group-hover:text-[#08275a]">
                    <Icon size={22} />
                  </div>
                  <span className="text-xs font-black tracking-[0.2em] text-[#d6a039]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-black text-[#08275a]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
