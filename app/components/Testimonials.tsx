import { siteConfig } from "../config/site.config";

function Stars() {
  return (
    <div className="flex items-center gap-1">
      <span className="sr-only">5 out of 5 star rating</span>
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className="h-4 w-4 fill-amber-400 text-amber-400"
        >
          <path d="M10 1.5 12.6 7l6 .7-4.4 4 1.2 5.8L10 14.6l-5.4 2.9 1.2-5.8-4.4-4 6-.7L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="mx-auto max-w-7xl overflow-hidden rounded-md border border-blue-100 bg-white shadow-[0_22px_60px_rgba(8,39,90,0.1)]">
      <div className="grid gap-6 bg-[#08275a] p-6 text-white lg:grid-cols-[0.75fr_1.25fr] lg:p-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d6a039]">
            Testimonial
          </p>
          <h2 className="mt-3 max-w-xl text-2xl font-black tracking-tight sm:text-3xl">
            Chennai homes trust our invisible grills and safety net work.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-md border border-white/15 bg-white/10 p-4">
            <p className="text-3xl font-black text-[#d6a039]">5.0</p>
            <div className="mt-2">
              <Stars />
            </div>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-blue-100">
              Home safety rating
            </p>
          </div>
          <div className="rounded-md border border-white/15 bg-white/10 p-4">
            <p className="text-3xl font-black text-[#d6a039]">2000+</p>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-blue-100">
              Projects handled
            </p>
          </div>
          <div className="rounded-md border border-white/15 bg-white/10 p-4">
            <p className="text-3xl font-black text-[#d6a039]">15+</p>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-blue-100">
              Years experience
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 bg-blue-50/60 p-4 sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
        {siteConfig.testimonials.map((review) => (
          <article
            key={review.name}
            className="flex min-h-[270px] flex-col justify-between rounded-md border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#d6a039] hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <Stars />
                <span className="rounded-full bg-[#fff7e6] px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#8a5f10] ring-1 ring-amber-100">
                  {review.location}
                </span>
              </div>
              <p className="mt-5 text-[15px] leading-7 text-slate-700">
                &quot;{review.quote}&quot;
              </p>
            </div>

            <div className="mt-6 border-t border-blue-100 pt-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#08275a] text-sm font-black text-white shadow-sm">
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-black text-[#08275a]">{review.name}</p>
                  <p className="text-xs font-semibold text-slate-500">{review.project}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
