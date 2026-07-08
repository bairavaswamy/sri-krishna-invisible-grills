import Link from "next/link";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "../config/site.config";

const enquiryServices = [
  { label: "Balcony Safety Net", href: "/chennai/balcony-safety-nets" },
  { label: "Invisible Grills", href: "/chennai/invisible-grills" },
  { label: "Pigeon Safety Net", href: "/chennai/pigeon-safety-nets" },
  { label: "Children Safety Net", href: "/chennai/children-safety-nets" },
  { label: "Window Safety Net", href: "/chennai/window-safety-nets" },
  { label: "Duct Area Safety Net", href: "/chennai/duct-area-safety-nets" },
  { label: "Cricket Practice Net", href: "/chennai/cricket-practice-nets" },
  { label: "Bird Spikes", href: "/chennai/bird-spikes-installation" },
];

export default function HomeEnquiryStrip() {
  return (
    <section className="mx-auto -mt-1 max-w-7xl px-0 sm:px-4">
      <div className="grid overflow-hidden rounded-none border-y border-blue-100 bg-white shadow-md shadow-blue-100/50 sm:rounded-md sm:border lg:grid-cols-[0.82fr_1.18fr_auto]">
        <div className="relative overflow-hidden bg-[#08275a] px-5 py-6 text-white">
          <div className="absolute inset-x-0 top-0 h-1 bg-[#d6a039]" />
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#d6a039]">
            Enquiry Desk
          </p>
          <h2 className="mt-3 text-2xl font-black">Confirm Your Site Visit</h2>
          <p className="mt-3 text-sm leading-7 text-white/80">
            Pick the service category, call our team, or send photos on WhatsApp for
            a cleaner Chennai installation plan.
          </p>
          <div className="mt-5 h-px w-full bg-white/15" />
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-blue-100">
            Balcony | Window | Pigeon Control | Cricket Net
          </p>
        </div>

        <div className="grid gap-x-5 gap-y-1 bg-gradient-to-br from-white via-blue-50/40 to-[#fff7e6] px-4 py-5 sm:grid-cols-2 xl:grid-cols-3">
          {enquiryServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              prefetch={false}
              className="group flex items-center gap-3 border-b border-blue-100 py-2.5 text-sm font-bold text-[#08275a] transition hover:border-[#d6a039] hover:text-[#0b4fb3]"
            >
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#d6a039] shadow-[0_0_0_4px_rgba(214,160,57,0.16)] transition group-hover:bg-[#0b4fb3]" />
              {service.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2 border-t border-blue-100 bg-white p-4 sm:flex-row lg:min-w-[280px] lg:flex-col lg:border-l lg:border-t-0">
          <p className="hidden text-xs font-black uppercase tracking-[0.18em] text-[#0b4fb3] lg:block">
            Fast Action
          </p>
          <a
            href={siteConfig.contact.phoneHref}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#0b4fb3] px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-sm transition hover:bg-[#08275a]"
          >
            <Phone size={17} />
            Call Now
          </a>
          <a
            href={siteConfig.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#08275a] bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#08275a] shadow-sm transition hover:bg-[#08275a] hover:text-white"
          >
            <MessageCircle size={17} />
            WhatsApp
          </a>
          <a
            href="#quote"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#d6a039] px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#08275a] shadow-sm transition hover:bg-amber-500"
          >
            <CalendarCheck size={17} />
            Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
