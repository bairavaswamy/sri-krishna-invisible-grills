"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";
import {
  getSiteSearchResults,
  siteSearchItems,
  type SearchItem,
} from "../config/search.config";

const resultLimit = 36;

function getInitialQuery() {
  if (typeof window === "undefined") {
    return "";
  }

  return new URLSearchParams(window.location.search).get("q") || "";
}

function groupCount(results: SearchItem[], eyebrow: string) {
  return results.filter((item) => item.eyebrow === eyebrow).length;
}

export default function SearchResultsClient() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery(getInitialQuery());
  }, []);

  const trimmedQuery = query.trim();
  const results = useMemo(
    () =>
      getSiteSearchResults(query, {
        limit: resultLimit,
        defaultLimit: 18,
      }),
    [query]
  );
  const hasActiveQuery = trimmedQuery.length > 0;

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    router.replace(
      hasActiveQuery ? `/search?q=${encodeURIComponent(trimmedQuery)}` : "/search",
      { scroll: false }
    );
  };

  return (
    <section className="mx-auto mt-10 max-w-7xl">
      <form
        onSubmit={submitSearch}
        className="rounded-md border border-[#dbe7f5] bg-white p-4 shadow-[0_18px_55px_rgba(8,39,90,0.10)] sm:p-5"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="flex min-h-12 flex-1 items-center gap-3 rounded-full border border-[#d6a039]/45 bg-[#f8fbff] px-4 text-[#08275a] transition focus-within:border-[#d6a039] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#fff1c9]">
            <Search size={18} className="shrink-0 text-[#b98218]" />
            <input
              type="search"
              name="q"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try balcony nets, Adyar, invisible grills..."
              className="min-w-0 flex-1 bg-transparent text-base font-semibold outline-none placeholder:text-slate-400"
              aria-label="Search all website pages"
            />
          </label>
          <button
            type="submit"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#08275a] px-6 text-sm font-black text-white shadow-sm transition hover:bg-[#0b4fb3]"
          >
            Search
            <ArrowRight size={17} />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.14em]">
          <span className="rounded-full bg-[#fff4d9] px-3 py-1.5 text-[#8f6416]">
            {siteSearchItems.length} pages indexed
          </span>
          <span className="rounded-full bg-[#eaf2ff] px-3 py-1.5 text-[#08275a]">
            {results.length} shown
          </span>
          {hasActiveQuery ? (
            <span className="rounded-full bg-white px-3 py-1.5 text-slate-500 ring-1 ring-[#dbe7f5]">
              Query: {trimmedQuery}
            </span>
          ) : null}
        </div>
      </form>

      <div className="mt-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b98218]">
            {hasActiveQuery ? "Matching Pages" : "Popular Searches"}
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-950">
            {hasActiveQuery
              ? `Results for "${trimmedQuery}"`
              : "Start with these main Chennai pages"}
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-600">
          Services, Chennai areas, and service-area pages are searched together
          so visitors can move straight to the right local page.
        </p>
      </div>

      {results.length ? (
        <>
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-600">
            <span className="rounded-full border border-[#dbe7f5] bg-white px-3 py-1.5">
              Services {groupCount(results, "Service")}
            </span>
            <span className="rounded-full border border-[#dbe7f5] bg-white px-3 py-1.5">
              Areas {groupCount(results, "Area")}
            </span>
            <span className="rounded-full border border-[#dbe7f5] bg-white px-3 py-1.5">
              Local pages {groupCount(results, "Service Area")}
            </span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((item) => (
              <Link
                key={`${item.href}-${item.title}`}
                href={item.href}
                prefetch={false}
                className="group rounded-md border border-[#dbe7f5] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#d6a039] hover:shadow-md"
              >
                <span className="rounded-full bg-[#fff8e8] px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-[#b98218]">
                  {item.eyebrow}
                </span>
                <h3 className="mt-4 text-lg font-black leading-snug text-[#08275a]">
                  {item.title}
                </h3>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
                  {item.keywords}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0b4fb3]">
                  Open page
                  <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div className="mt-6 rounded-md border border-[#dbe7f5] bg-white p-8 text-center shadow-sm">
          <h2 className="text-2xl font-black text-[#08275a]">No matching page found</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600">
            Try a service name like balcony safety nets, an area like Adyar, or
            a need like pigeon control, window grills, cricket nets, or cloth hanger.
          </p>
        </div>
      )}
    </section>
  );
}
