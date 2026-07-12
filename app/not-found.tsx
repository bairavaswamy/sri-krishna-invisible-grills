import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Phone } from "lucide-react";
import { chennaiConfig } from "./config/chennai.config";
import { siteConfig } from "./config/site.config";

export const metadata: Metadata = {
  title: `Page unavailable | ${siteConfig.name}`,
  description: "Open the Chennai service directory or contact SRI KRISHNA INVISIBLE GRILLS directly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="bg-gradient-to-b from-white via-[#f8fbff] to-[#fff8e8] px-4 py-16 text-slate-950 lg:px-6">
      <section className="mx-auto max-w-3xl rounded-md border border-[#dbe7f5] bg-white p-8 text-center shadow-xl shadow-[#08275a]/10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fff4d9] text-[#b98218]">
          <Home size={24} />
        </span>
        <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-[#b98218]">
          Page unavailable
        </p>
        <h1 className="mt-3 text-4xl font-black text-[#08275a]">
          Open the Chennai service directory
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600">
          The page address may have changed. Use the directory, search page, or
          direct call option to reach the correct service page.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href={`/${chennaiConfig.citySlug}`}
            prefetch={false}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#08275a] px-5 py-3 text-sm font-black text-white transition hover:bg-[#0b4fb3]"
          >
            Chennai Directory
            <ArrowRight size={17} />
          </Link>
          <a
            href={siteConfig.contact.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d6a039]/45 bg-[#fff8e8] px-5 py-3 text-sm font-black text-[#08275a] transition hover:border-[#d6a039]"
          >
            <Phone size={17} />
            Call Now
          </a>
        </div>
      </section>
    </main>
  );
}
