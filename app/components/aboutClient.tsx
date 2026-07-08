"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Eye,
  MapPin,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import SocialProfileLinks from "./SocialProfileLinks";
import { siteConfig } from "../config/site.config";

const values = [
  {
    title: "Clear Views",
    detail: "Invisible grill and safety net planning that protects without closing the balcony feel.",
    icon: Eye,
  },
  {
    title: "Clean Fixing",
    detail: "Neat rope, anchor, cable, and border details selected for each surface and opening.",
    icon: Wrench,
  },
  {
    title: "Home Safety",
    detail: "Child, pet, bird-control, and high-rise safety needs handled with practical planning.",
    icon: ShieldCheck,
  },
];

const process = [
  {
    title: "Inspect",
    detail: "We check the opening size, wall/railing condition, access, and cleaning needs.",
    icon: Ruler,
  },
  {
    title: "Recommend",
    detail: "We suggest invisible grills, safety nets, pigeon-control work, spikes, or cricket practice nets.",
    icon: Sparkles,
  },
  {
    title: "Install",
    detail: "The team completes fixing with neat finishing and a view-friendly layout.",
    icon: Wrench,
  },
  {
    title: "Support",
    detail: "You get phone and WhatsApp support for service questions and future additions.",
    icon: Clock3,
  },
];

export default function AboutClient() {
  return (
    <main className="bg-gradient-to-b from-white via-blue-50/30 to-[#fff8e8] text-slate-800">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/70 to-[#fff8e8] px-4 py-16 text-[#08275a]">
        <Image
          src="/images/site/chennai-about-installation-team.png"
          alt={`${siteConfig.name} installation planning`}
          fill
          priority
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/55" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#d6a039]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="inline-flex rounded-full border border-[#d6a039]/50 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#0b4fb3] shadow-sm">
            About {siteConfig.shortName}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Safe homes, clear views, and total protection for Chennai balconies.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            {siteConfig.name} plans invisible grills, safety nets, bird-control,
            and utility protection with a finish that feels clean, open, and
            built for everyday home use.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact-us"
              prefetch={false}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d6a039] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#08275a] shadow-sm transition hover:bg-amber-500"
            >
              Plan Site Visit
              <ArrowRight size={17} />
            </Link>
            <a
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#08275a]/25 bg-white/80 px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#08275a] shadow-sm transition hover:bg-[#08275a] hover:text-white"
            >
              WhatsApp Photos
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-7xl px-4">
        <div className="grid overflow-hidden rounded-md border border-blue-100 bg-white shadow-[0_24px_70px_rgba(8,39,90,0.14)] sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="border-b border-blue-100 p-5 sm:border-r lg:border-b-0">
              <p className="text-3xl font-black text-[#08275a]">{stat.value}</p>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-[#d6a039]">
                {stat.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid grid-cols-2 gap-3">
          {siteConfig.galleryImages.slice(0, 4).map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-md border border-blue-100 bg-white shadow-sm ${
                index === 0 ? "col-span-2 h-72" : "h-44"
              }`}
            >
              <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08275a]/45 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 text-xs font-black uppercase tracking-[0.16em] text-white">
                {image.category}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0b4fb3]">
            Our Story
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#08275a] sm:text-4xl">
            We design safety around the way Chennai homes actually use space.
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600">
            Balconies need airflow. Windows need movement. Ducts and utility openings
            need access for cleaning. Our work starts with those practical details,
            then adds the right invisible grill, net, spike, or sports protection
            system.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            The goal is simple: protect children, families, pets, balconies, and
            common areas while keeping the finish neat enough for modern apartments
            and villas.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {siteConfig.trustPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-md border border-blue-100 bg-white px-4 py-3 text-sm font-bold text-[#08275a] shadow-sm"
              >
                <CheckCircle2 size={17} className="text-[#d6a039]" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14">
        <div className="overflow-hidden rounded-md border border-blue-100 bg-white shadow-md shadow-blue-100/50">
          <div className="grid gap-5 border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-[#fff7e6] px-6 py-7 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0b4fb3]">
                What We Stand For
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-[#08275a] sm:text-3xl">
                Protection that looks intentional, not temporary.
              </h2>
            </div>
            <p className="max-w-3xl text-sm leading-7 text-slate-600 lg:place-self-end">
              The best safety work blends into the home. These principles guide every
              balcony, window, duct, and bird-control installation.
            </p>
          </div>

          <div className="grid gap-px bg-blue-100 sm:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div key={value.title} className="bg-white p-6 transition hover:bg-blue-50/70">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff7e6] text-[#08275a] ring-1 ring-[#d6a039]/40">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-base font-black text-[#08275a]">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{value.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-14 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-md border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-[#fff7e6] p-6 shadow-md shadow-blue-100/50 lg:p-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0b4fb3]">
            Installation Method
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#08275a]">
            A practical process for safer homes.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Every enquiry is planned around measurement, suitable material, clean
            fixing, and future access.
          </p>
          <div className="mt-6 flex items-start gap-3 rounded-md border border-blue-100 bg-white p-4">
            <MapPin className="mt-1 text-[#d6a039]" size={20} />
            <p className="text-sm leading-6 text-slate-600">
              Serving {siteConfig.contact.addressLines.join(", ")} with phone,
              WhatsApp, and site visit support.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {process.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-md border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#d6a039] hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#08275a] text-white">
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-black tracking-[0.2em] text-[#d6a039]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-black text-[#08275a]">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.detail}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14">
        <div className="overflow-hidden rounded-md border border-blue-100 bg-white shadow-md shadow-blue-100/50">
          <div className="flex flex-col gap-4 bg-gradient-to-br from-blue-50 via-white to-[#fff7e6] px-6 py-7 sm:flex-row sm:items-end sm:justify-between lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0b4fb3]">
                Service Focus
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-[#08275a] sm:text-3xl">
                Home safety services planned under one brand.
              </h2>
            </div>
            <Link
              href="/contact-us"
              prefetch={false}
              className="inline-flex items-center justify-center rounded-full bg-[#08275a] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-sm transition hover:bg-[#0b4fb3]"
            >
              Contact Team
            </Link>
          </div>

          <div className="grid gap-px bg-blue-100 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.focusAreas.map((area) => (
              <Link
                key={area.title}
                href={area.href}
                prefetch={false}
                className="group bg-white p-5 transition hover:bg-blue-50/70"
              >
                <div className="relative h-36 overflow-hidden rounded-md bg-blue-50">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08275a]/50 via-transparent to-transparent" />
                </div>
                <h3 className="mt-4 text-base font-black text-[#08275a]">{area.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{area.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="grid overflow-hidden rounded-md border border-blue-100 bg-white shadow-md shadow-blue-100/50 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-[#fff7e6] p-6 lg:border-b-0 lg:border-r lg:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0b4fb3]">
              Stay Connected
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-[#08275a] sm:text-3xl">
              Follow our latest installation work and service updates.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              See project photos, learn about service options, and contact the team
              through official profiles.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 via-white to-[#fff7e6] p-6 lg:p-8">
            <SocialProfileLinks
              heading={`Connect With ${siteConfig.shortName}`}
              description="Official social profiles and quick-contact channels."
              showLabels
              variant="warm"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
