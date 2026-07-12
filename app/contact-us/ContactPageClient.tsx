import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  Camera,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import ContactForm from "../components/ContactForm";
import SocialProfileLinks from "../components/SocialProfileLinks";
import { siteConfig } from "../config/site.config";

const contactCards = [
  {
    label: "Call Direct",
    value: siteConfig.contact.phoneLabel,
    note: "Speak with the installation team",
    href: siteConfig.contact.phoneHref,
    icon: Phone,
  },
  {
    label: "WhatsApp Photos",
    value: siteConfig.contact.whatsappLabel,
    note: "Send balcony or window pictures",
    href: siteConfig.contact.whatsappHref,
    icon: MessageCircle,
    external: true,
  },
  {
    label: "Email Request",
    value: siteConfig.contact.email,
    note: "Share details for planned work",
    href: siteConfig.contact.emailHref,
    icon: Mail,
  },
];

const plannerSteps = [
  {
    title: "Send Photos",
    detail: "Share balcony, window, duct, or bird-control photos on WhatsApp.",
    icon: Camera,
  },
  {
    title: "Measure Site",
    detail: "We inspect fixing points, access, and opening size before quoting.",
    icon: Ruler,
  },
  {
    title: "Confirm Visit",
    detail: "Choose a Chennai visit slot and service scope with clear pricing.",
    icon: CalendarCheck,
  },
  {
    title: "Install Cleanly",
    detail: "Invisible grills and nets are finished with neat, safe fixing details.",
    icon: ShieldCheck,
  },
];

export default function ContactPageClient() {
  return (
    <main className="bg-gradient-to-b from-white via-[#f8fbff] to-[#fff8e8]">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8fbff] to-[#fff8e8] px-4 py-14 text-[#08275a] sm:py-16">
        <Image
          src={siteConfig.defaultImage}
          alt={`${siteConfig.name} contact enquiry`}
          fill
          priority
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/55" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#d6a039]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="inline-flex rounded-full border border-[#d6a039]/50 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#b98218] shadow-sm">
            Chennai Enquiry Desk
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Contact {siteConfig.name} for a clean, open-view safety finish.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Call, WhatsApp photos, or submit the form with your area, floor level,
            service requirement, and preferred site visit time.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d6a039] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#08275a] shadow-sm transition hover:bg-amber-500"
            >
              <Phone size={18} />
              Call Now
            </a>
            <a
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#08275a]/25 bg-white/80 px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#08275a] shadow-sm transition hover:bg-[#08275a] hover:text-white"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-7xl px-4">
        <div className="grid overflow-hidden rounded-md border border-[#dbe7f5] bg-white shadow-[0_24px_70px_rgba(8,39,90,0.14)] md:grid-cols-3">
          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <a
                key={card.label}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="group border-b border-[#dbe7f5] p-5 transition hover:bg-[#fff8e8] md:border-b-0 md:border-r last:md:border-r-0"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#08275a] text-white ring-4 ring-[#d6a039]/20 transition group-hover:bg-[#d6a039] group-hover:text-[#08275a]">
                    <Icon size={22} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-black uppercase tracking-[0.2em] text-[#b98218]">
                      {card.label}
                    </span>
                    <span className="mt-2 block break-words text-sm font-black text-[#08275a]">
                      {card.value}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-slate-600">
                      {card.note}
                    </span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[0.86fr_1.14fr] lg:py-14">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-md border border-[#dbe7f5] bg-white shadow-md shadow-[#08275a]/8">
            <div className="border-b border-[#dbe7f5] bg-gradient-to-br from-[#f8fbff] via-white to-[#fff7e6] px-6 py-6">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b98218]">
                Visit Planner
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-[#08275a]">
                How your enquiry moves from photos to installation.
              </h2>
            </div>
            <div className="divide-y divide-[#dbe7f5]">
              {plannerSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.title} className="flex gap-4 p-5">
                    <div className="flex flex-col items-center">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff7e6] text-[#08275a] ring-1 ring-[#d6a039]/40">
                        <Icon size={20} />
                      </span>
                      {index < plannerSteps.length - 1 ? (
                        <span className="mt-2 h-full min-h-8 w-px bg-[#dbe7f5]" />
                      ) : null}
                    </div>
                    <div>
                      <p className="text-sm font-black text-[#08275a]">{step.title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{step.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-md border border-[#dbe7f5] bg-white p-5 shadow-sm">
              <MapPin className="text-[#d6a039]" size={22} />
              <h3 className="mt-4 text-base font-black text-[#08275a]">Service Location</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {siteConfig.contact.addressLines.join(", ")}
              </p>
            </div>
            <div className="rounded-md border border-[#dbe7f5] bg-white p-5 shadow-sm">
              <Clock3 className="text-[#d6a039]" size={22} />
              <h3 className="mt-4 text-base font-black text-[#08275a]">Working Hours</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {siteConfig.contact.hours}
              </p>
            </div>
          </div>

          <div className="rounded-md border border-[#dbe7f5] bg-white p-5 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b98218]">
              Popular Enquiries
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {siteConfig.focusAreas.slice(0, 8).map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  prefetch={false}
                  className="inline-flex items-center gap-2 rounded-full border border-[#dbe7f5] bg-[#f8fbff] px-3 py-2 text-xs font-bold text-[#08275a] transition hover:border-[#d6a039] hover:bg-[#fff7e6]"
                >
                  <CheckCircle2 size={14} />
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <SocialProfileLinks
            className="rounded-md border border-[#dbe7f5] bg-white p-5 shadow-sm"
            heading="Social Profiles"
            description="Follow our official pages for project photos, updates, and quick contact."
            showLabels
            variant="warm"
          />
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
