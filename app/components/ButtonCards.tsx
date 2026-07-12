"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { siteConfig } from "../config/site.config";

type FocusItem = (typeof siteConfig.focusAreas)[number];

function ButtonCardsInner({ images = siteConfig.focusAreas }: { images?: readonly FocusItem[] }) {
  return (
    <section className="w-full max-w-full overflow-clip bg-gradient-to-b from-white via-[#f8fbff] to-[#fff8e8] py-12">
      <div className="mx-auto mb-7 flex max-w-7xl flex-col gap-4 px-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0b4fb3]">
            Our Service
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-[#08275a] md:text-3xl">
            Safety Nets and Invisible Grill Services
          </h2>
        </div>
        <p className="mx-auto max-w-xl text-sm leading-7 text-slate-600 md:mx-0">
          A curated set of Chennai home-safety solutions with open-view finishes,
          neat fixing details, and quick phone support on every service card.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-sm gap-5 px-4 pb-4 md:hidden">
        {images.slice(0, 4).map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-md border border-[#dbe7f5] bg-white shadow-[0_22px_60px_rgba(8,39,90,0.12)]"
          >
            <FocusCard item={item} isMobile />
          </article>
        ))}
      </div>

      <div className="mx-auto hidden w-full max-w-7xl grid-cols-2 gap-6 px-4 pb-4 md:grid lg:grid-cols-4">
        {images.map((item) => (
          <div
            key={item.title}
            className="min-w-0 overflow-hidden rounded-md border border-[#dbe7f5] bg-white shadow-[0_16px_45px_rgba(8,39,90,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#d6a039] hover:shadow-[0_26px_70px_rgba(8,39,90,0.16)]"
          >
            <FocusCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

function FocusCard({ item, isMobile = false }: { item: FocusItem; isMobile?: boolean }) {
  return (
    <>
      <div className={`${isMobile ? "h-52" : "h-44"} relative w-full overflow-hidden bg-[#f8fbff]`}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition duration-700 hover:scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08275a]/72 via-[#08275a]/10 to-transparent" />
        <span className="absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-white/90 text-[#08275a] shadow-md">
          <ShieldCheck size={18} />
        </span>
        <a
          href={siteConfig.contact.phoneHref}
          className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#d6a039] px-3 py-2 text-xs font-black text-[#08275a] shadow-md transition hover:bg-[#f3c35b]"
          aria-label={`Call ${siteConfig.name} for ${item.title}`}
        >
          <Phone size={14} />
          {siteConfig.contact.phoneLabel}
        </a>
      </div>

      <div className="border-t-4 border-[#d6a039] bg-gradient-to-b from-white to-[#f8fbff] p-4 text-left">
        <p className="mb-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#b98218]">
          Chennai Service
        </p>
        <h3 className="text-base font-black text-[#08275a]">{item.title}</h3>
        <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-600">{item.description}</p>

        <Link
          href={item.href}
          prefetch={false}
          className="group mt-5 inline-flex w-full items-center justify-between gap-3 rounded-full bg-[#08275a] px-4 py-2.5 text-xs font-black uppercase tracking-[0.08em] text-white shadow-sm transition hover:bg-[#0b4fb3]"
        >
          <span>Read More</span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d6a039] text-[#08275a] transition group-hover:bg-white">
            <ArrowRight size={16} />
          </span>
        </Link>
      </div>
    </>
  );
}

export default memo(ButtonCardsInner);
