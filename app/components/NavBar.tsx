"use client";

import { memo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ChevronDown, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { chennaiConfig } from "../config/chennai.config";
import { siteConfig } from "../config/site.config";

const MenuClient = dynamic(() => import("./Menuclient"), {
  ssr: false,
});

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const cityHref = `/${chennaiConfig.citySlug}`;
  const standardLinks = siteConfig.navLinks.filter(
    (link) => link.href !== cityHref && link.label !== "Services"
  );
  const mainLinks = [
    standardLinks.find((link) => link.label === "Home"),
    standardLinks.find((link) => link.label === "About"),
    standardLinks.find((link) => link.label === "Gallery"),
    standardLinks.find((link) => link.label === "Contact"),
  ].filter(Boolean) as typeof standardLinks;

  const scrollToQuote = () => {
    const element = document.getElementById("quote");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed left-0 top-0 z-50 w-full bg-white shadow-lg shadow-slate-950/10">
        <div className="bg-[#08275a] text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 overflow-x-auto whitespace-nowrap px-3 py-2 text-[11px] font-bold sm:justify-between sm:text-xs">
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center gap-1.5 transition hover:text-[#d6a039]"
            >
              <Phone size={14} />
              {siteConfig.contact.phoneLabel}
            </a>

            <span className="hidden items-center gap-1.5 text-white/90 sm:inline-flex">
              <MapPin size={14} />
              {siteConfig.contact.location}
            </span>

            <span className="hidden text-white/90 lg:inline">
              Service Area : Chennai & nearby areas
            </span>

            <a
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-[#d6a039]"
            >
              <MessageCircle size={14} />
              WhatsApp {siteConfig.contact.whatsappLabel}
            </a>

            <a
              href={siteConfig.contact.emailHref}
              className="hidden items-center gap-1.5 transition hover:text-[#d6a039] md:inline-flex"
            >
              <Mail size={14} />
              {siteConfig.contact.email}
            </a>
          </div>
        </div>

        <header className="mx-auto flex max-w-7xl items-center justify-between gap-3 bg-white px-3 py-3 sm:px-6">
          <Link href="/" prefetch={false} className="flex min-w-0 items-center">
            <Image
              src={siteConfig.logos.desktop}
              alt={`${siteConfig.name} logo`}
              width={2172}
              height={724}
              priority
              className="h-[62px] w-[186px] shrink-0 object-contain object-left sm:hidden"
            />
            <Image
              src={siteConfig.logos.desktop}
              alt={`${siteConfig.name} desktop logo`}
              width={2172}
              height={724}
              priority
              className="hidden h-[78px] w-[235px] object-contain object-left sm:block lg:h-[82px] lg:w-[246px] xl:w-[276px]"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {mainLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className="group relative px-4 py-7 text-[15px] font-bold text-[#08275a] transition-all duration-300 hover:text-[#0b4fb3]"
              >
                {link.label}
                <span className="absolute bottom-5 left-4 h-[2px] w-0 bg-[#0b4fb3] transition-all duration-300 group-hover:w-[calc(100%-2rem)]" />
              </Link>
            ))}

            <div
              className="group relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onFocus={() => setServicesOpen(true)}
              onBlur={(event) => {
                const nextTarget = event.relatedTarget as Node | null;
                if (!event.currentTarget.contains(nextTarget)) {
                  setServicesOpen(false);
                }
              }}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                onFocus={() => setServicesOpen(true)}
                onClick={() => setServicesOpen((current) => !current)}
                className="group/menu relative inline-flex items-center gap-1 px-4 py-7 text-[15px] font-bold text-[#08275a] transition-all duration-300 hover:text-[#0b4fb3]"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute bottom-5 left-4 h-[2px] w-0 bg-[#0b4fb3] transition-all duration-300 group-hover/menu:w-[calc(100%-2rem)]" />
              </button>

              <div
                className={`absolute left-0 top-full z-[80] w-[310px] shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 ${
                  servicesOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible translate-y-2 opacity-0"
                }`}
              >
                <div className="max-h-[520px] overflow-y-auto border-t-4 border-[#0b4fb3] bg-white py-2 shadow-xl">
                  <Link
                    href={cityHref}
                    prefetch={false}
                    className="block border-b border-slate-100 bg-blue-50 px-5 py-3 text-sm font-black text-[#0b4fb3] transition hover:bg-[#0b4fb3] hover:text-white"
                  >
                    All Services
                  </Link>
                  {chennaiConfig.services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`${cityHref}/${service.slug}`}
                      prefetch={false}
                      className="block border-b border-slate-100 px-5 py-3 text-sm font-bold text-[#08275a] transition hover:bg-[#0b4fb3] hover:text-white"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {mainLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                className="group relative px-4 py-7 text-[15px] font-bold text-[#08275a] transition-all duration-300 hover:text-[#0b4fb3]"
              >
                {link.label}
                <span className="absolute bottom-5 left-4 h-[2px] w-0 bg-[#0b4fb3] transition-all duration-300 group-hover:w-[calc(100%-2rem)]" />
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={siteConfig.contact.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-[#d6a039] bg-white px-4 py-2 text-sm font-semibold text-[#08275a] shadow-sm transition hover:border-[#0b4fb3] hover:text-[#0b4fb3] sm:inline-flex"
            >
              <Phone size={16} />
              {siteConfig.contact.phoneLabel}
            </a>

            <a
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-11 w-11 items-center justify-center rounded-full bg-[#08275a] text-white transition hover:bg-[#0b4fb3] xl:inline-flex"
              aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
            >
              <MessageCircle size={18} />
            </a>

            <button
              onClick={scrollToQuote}
              className="hidden rounded-full px-5 py-3 text-sm font-black text-white transition hover:opacity-90 md:inline-block btn-accent"
            >
              Enquiry
            </button>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="relative z-[70] inline-flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 bg-white text-[#08275a] shadow-md shadow-blue-100 transition hover:border-[#0b4fb3] hover:text-[#0b4fb3] focus:outline-none focus:ring-2 focus:ring-[#0b4fb3] lg:hidden"
            >
              {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </header>
      </div>

      <div className="pt-[130px] sm:pt-[152px] lg:pt-[156px]" />
      <div className="block lg:hidden">
        <MenuClient open={open} onClose={() => setOpen(false)} />
      </div>
    </>
  );
};

export default memo(Header);
