import Link from "next/link";
import { Clock3, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import ContactForm from "../components/ContactForm";
import SocialProfileLinks from "../components/SocialProfileLinks";
import { siteConfig } from "../config/site.config";

const contactCards = [
  {
    label: "Call",
    value: siteConfig.contact.phoneLabel,
    href: siteConfig.contact.phoneHref,
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: siteConfig.contact.whatsappLabel,
    href: siteConfig.contact.whatsappHref,
    icon: MessageCircle,
    external: true,
  },
  {
    label: "Email",
    value: siteConfig.contact.email,
    href: siteConfig.contact.emailHref,
    icon: Mail,
  },
];

export default function ContactPageClient() {
  return (
    <div className="bg-gradient-to-b from-sky-50 via-white to-lime-50">
      <section className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-600 shadow-sm">
              <ShieldCheck size={16} />
              Chennai enquiry desk
            </div>

            <div>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
                Contact {siteConfig.name}.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Call, WhatsApp, or send the form with your area, service, floor
                level, and photos. The same contact details are used across every
                Chennai service page.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {contactCards.map((card) => {
                const Icon = card.icon;

                return (
                  <a
                    key={card.label}
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className="rounded-3xl border border-sky-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300"
                  >
                    <Icon className="text-sky-500" size={22} />
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-sky-500">
                      {card.label}
                    </p>
                    <p className="mt-2 break-words text-sm font-bold text-slate-900">{card.value}</p>
                  </a>
                );
              })}
            </div>

            <div className="rounded-[30px] border border-sky-100 bg-white p-6 shadow-lg shadow-sky-100/60">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <MapPin className="mt-1 text-sky-500" size={20} />
                  <div>
                    <p className="font-semibold text-slate-950">Location</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {siteConfig.contact.addressLines.join(", ")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <Clock3 className="mt-1 text-sky-500" size={20} />
                  <div>
                    <p className="font-semibold text-slate-950">Working Hours</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {siteConfig.contact.hours}
                    </p>
                  </div>
                </div>
              </div>

              <SocialProfileLinks
                className="mt-6 rounded-2xl border border-sky-100 bg-sky-50/70 p-4"
                heading="Social Profiles"
                description="Add or replace final profile URLs in the central site config."
                showLabels
                variant="warm"
              />
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14">
        <div className="rounded-[34px] border border-sky-100 bg-white p-7 text-center shadow-xl shadow-sky-100/50 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">Service pages are connected.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Continue from Home, Chennai, About, Gallery, or Contact and move into
            the right Chennai service page whenever you need a site quote.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className="rounded-full border border-sky-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-500"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
