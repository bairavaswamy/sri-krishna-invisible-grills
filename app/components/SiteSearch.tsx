"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { getSiteSearchResults } from "../config/search.config";
import { siteConfig } from "../config/site.config";

type SiteSearchProps = {
  className?: string;
  onNavigate?: () => void;
};

export default function SiteSearch({ className = "", onNavigate }: SiteSearchProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const trimmedQuery = query.trim();
  const searchHref = trimmedQuery
    ? `/search?q=${encodeURIComponent(trimmedQuery)}`
    : "/search";

  const results = useMemo(() => {
    return getSiteSearchResults(query, { limit: 8, defaultLimit: 7 });
  }, [query]);

  const openSearchPage = () => {
    onNavigate?.();
    setOpen(false);
    window.location.assign(searchHref);
  };

  return (
    <form
      data-site-search="true"
      action="/search"
      method="get"
      className={`relative ${className}`}
      onSubmit={(event) => {
        event.preventDefault();
        openSearchPage();
      }}
    >
      <div className="flex h-11 items-center gap-2 rounded-full border border-[#d6a039]/45 bg-white px-3 text-[#08275a] shadow-sm transition focus-within:border-[#d6a039] focus-within:ring-2 focus-within:ring-[#fff1c9]">
        <Search size={17} className="shrink-0 text-[#b98218]" />
        <input
          data-site-search-input="true"
          type="search"
          name="q"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => window.setTimeout(() => setOpen(false), 140)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              openSearchPage();
            }
          }}
          placeholder="Search services or areas"
          className="min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none placeholder:text-slate-400"
          aria-label={`Search ${siteConfig.name}`}
        />
        <button
          data-site-search-submit="true"
          type="submit"
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#08275a] text-white transition hover:bg-[#0b4fb3]"
          aria-label="Open search results"
        >
          <Search size={14} />
        </button>
      </div>

      {open ? (
        <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-[90] max-h-[360px] overflow-y-auto rounded-md border border-[#dbe7f5] bg-white p-2 shadow-2xl shadow-[#08275a]/20">
          {results.length ? (
            results.map((item) => (
              <Link
                key={`${item.href}-${item.title}`}
                href={item.href}
                prefetch={false}
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
                className="group flex items-center justify-between gap-3 rounded-md px-3 py-3 text-left transition hover:bg-[#fff8e8]"
              >
                <span className="min-w-0">
                  <span className="block truncate text-sm font-black text-[#08275a]">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-xs font-bold uppercase tracking-[0.14em] text-[#b98218]">
                    {item.eyebrow}
                  </span>
                </span>
                <ArrowRight
                  size={16}
                  className="shrink-0 text-[#08275a] transition group-hover:translate-x-1"
                />
              </Link>
            ))
          ) : (
            <div className="px-3 py-5 text-sm font-semibold text-slate-500">
              No matching page found.
            </div>
          )}
          <Link
            href={searchHref}
            prefetch={false}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              setOpen(false);
              onNavigate?.();
            }}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#08275a] px-4 py-2.5 text-sm font-black text-white transition hover:bg-[#0b4fb3]"
          >
            View search results
            <ArrowRight size={15} />
          </Link>
        </div>
      ) : null}
    </form>
  );
}
