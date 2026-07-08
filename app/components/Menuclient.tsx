"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Mail, MessageCircle, Phone, X } from "lucide-react";
import { chennaiConfig } from "../config/chennai.config";
import { siteConfig } from "../config/site.config";

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
        className={`fixed left-0 top-0 z-50 h-full w-80 transform bg-gradient-to-b from-slate-50 to-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col bg-gradient-to-r from-amber-50 via-yellow-50 to-white">
          <div className="border-b border-amber-200 px-6 pb-4 pt-5">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <Image
                  src={siteConfig.logos.desktop}
                  alt={`${siteConfig.name} logo`}
                  width={2172}
                  height={724}
                  className="h-auto w-[220px] rounded-md bg-white object-contain"
                />
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-amber-700/70">
                  {siteConfig.tagline}
                </p>
              </div>

              <button
                onClick={onClose}
                className="text-amber-600 transition hover:text-amber-800"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="flex-1 space-y-5 overflow-y-auto px-6 py-5">
            <div className="grid gap-3">
              {standardLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={false}
                  onClick={onClose}
                  className="block rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="rounded-2xl border border-blue-200 bg-white/90 p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500">
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
                  className="shrink-0 rounded-full bg-slate-950 px-3 py-2 text-xs font-bold text-white"
                >
                  Open
                </Link>
              </div>

              <details className="group mt-4 rounded-xl border border-slate-200 bg-slate-50" open>
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
                      className="block rounded-lg border border-white bg-white px-3 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </details>

              <details className="group mt-3 rounded-xl border border-slate-200 bg-slate-50">
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
                      className="rounded-lg border border-white bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </details>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-white/90 p-4 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500">
                Quick Contact
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <a
                  href={siteConfig.contact.phoneHref}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-3 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-500"
                >
                  <Phone size={16} />
                  {siteConfig.contact.phoneLabel}
                </a>

                <a
                  href={siteConfig.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-blue-200 bg-blue-50 px-3 py-3 font-semibold text-blue-700 transition hover:border-blue-400"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>

                <a
                  href={siteConfig.contact.emailHref}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-3 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-500"
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
