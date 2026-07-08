import { siteConfig } from "../config/site.config";

export default function HomeStats() {
  return (
    <section
      aria-label={`${siteConfig.name} website highlights`}
      className="relative z-10 mx-auto mt-10 w-full max-w-7xl px-1 sm:px-4"
    >
      <div className="overflow-hidden rounded-md border border-blue-100 bg-white shadow-md shadow-blue-100/50">
        <div className="grid gap-4 bg-[#08275a] px-6 py-7 text-white lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d6a039]">
              Project Proof
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
              Chennai-ready safety work with measurable confidence.
            </h2>
          </div>
          <p className="max-w-3xl text-sm leading-7 text-blue-50 lg:place-self-end">
            Every number supports the same promise: practical site visits, neat
            installation finishes, and fast response for apartments, villas, and
            community spaces.
          </p>
        </div>

        <div className="grid gap-px bg-blue-100/70 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.stats.map((stat) => (
            <div
              key={stat.label}
              className="group bg-[linear-gradient(180deg,#ffffff_0%,#f2f7ff_100%)] p-5 transition duration-300 hover:bg-white sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-3xl font-black tracking-tight text-[#08275a] sm:text-4xl">
                    {stat.value}
                  </p>
                  <h3 className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-900">
                    {stat.label}
                  </h3>
                </div>
                <span className="mt-1 h-3 w-3 bg-amber-400 shadow-[0_0_0_6px_rgba(214,160,57,0.16)] transition-transform duration-300 group-hover:scale-125" />
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
