"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Mail, MessageCircle, Phone, X } from "lucide-react";
import { chennaiConfig } from "../config/chennai.config";
import { siteConfig } from "../config/site.config";
import SiteSearch from "./SiteSearch";

type MenuProps = {
  open: boolean;
  onClose: () => void;
};

const MenuClient: React.FC<MenuProps> = ({ open, onClose }) => {
  const cityHref = `/${chennaiConfig.citySlug}`;
  const standardLinks = siteConfig.navLinks.filter(
    (link) => link.href !== cityHref && link.label !== "Services"
  );

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed left-0 top-0 z-50 h-full w-80 transform bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col bg-gradient-to-b from-white via-[#f8fbff] to-[#fff8e8]">
          <div className="border-b border-[#ead8a8] px-6 pb-4 pt-5">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <Image
                  src={siteConfig.logos.desktop}
                  alt={`${siteConfig.name} logo`}
                  width={2172}
                  height={724}
                  className="h-auto w-[220px] rounded-md bg-white object-contain"
                />
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#08275a]/70">
                  {siteConfig.tagline}
                </p>
              </div>

              <button
                onClick={onClose}
                className="text-[#b98218] transition hover:text-[#08275a]"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="flex-1 space-y-5 overflow-y-auto px-6 py-5">
            <SiteSearch onNavigate={onClose} />

            <div className="grid gap-3">
              {standardLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={false}
                  onClick={onClose}
                  className="block rounded-md border border-[#dbe7f5] bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-[#d6a039] hover:bg-[#fff8e8] hover:text-[#08275a]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="rounded-md border border-[#dbe7f5] bg-white/90 p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b98218]">
                    Chennai
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Services and areas in one scrollable menu.
                  </p>
                </div>
                <Link
                  href={cityHref}
                  prefetch={false}
                  onClick={onClose}
                  className="shrink-0 rounded-full bg-[#08275a] px-3 py-2 text-xs font-bold text-white"
                >
                  Open
                </Link>
              </div>

              <details className="group mt-4 rounded-md border border-[#dbe7f5] bg-[#f8fbff]" open>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-3 py-3 text-sm font-black text-slate-900">
                  Services
                  <ChevronDown
                    size={16}
                    className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <div className="max-h-72 space-y-2 overflow-y-auto border-t border-slate-200 p-3">
                  {chennaiConfig.services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`${cityHref}/${service.slug}`}
                      prefetch={false}
                      onClick={onClose}
                      className="block rounded-md border border-white bg-white px-3 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-[#d6a039] hover:bg-[#fff8e8] hover:text-[#08275a]"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </details>

              <details className="group mt-3 rounded-md border border-[#dbe7f5] bg-[#f8fbff]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-3 py-3 text-sm font-black text-slate-900">
                  Areas
                  <ChevronDown
                    size={16}
                    className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <div className="max-h-72 grid grid-cols-2 gap-2 overflow-y-auto border-t border-slate-200 p-3">
                  {chennaiConfig.areas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`${cityHref}/${area.slug}`}
                      prefetch={false}
                      onClick={onClose}
                      className="rounded-md border border-white bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:border-[#d6a039] hover:bg-[#fff8e8] hover:text-[#08275a]"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </details>
            </div>

            <div className="rounded-md border border-[#dbe7f5] bg-white/90 p-4 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b98218]">
                Quick Contact
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <a
                  href={siteConfig.contact.phoneHref}
                  className="flex items-center gap-3 rounded-md border border-[#dbe7f5] px-3 py-3 font-semibold text-slate-700 transition hover:border-[#d6a039] hover:text-[#08275a]"
                >
                  <Phone size={16} />
                  {siteConfig.contact.phoneLabel}
                </a>

                <a
                  href={siteConfig.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-md border border-[#d6a039]/45 bg-[#fff8e8] px-3 py-3 font-semibold text-[#08275a] transition hover:border-[#d6a039]"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>

                <a
                  href={siteConfig.contact.emailHref}
                  className="flex items-center gap-3 rounded-md border border-[#dbe7f5] px-3 py-3 font-semibold text-slate-700 transition hover:border-[#d6a039] hover:text-[#08275a]"
                >
                  <Mail size={16} />
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-white p-4 text-center text-xs text-slate-500">
            Copyright {new Date().getFullYear()} {siteConfig.name}
          </div>
        </div>
      </aside>
    </>
  );
};

export default MenuClient;
