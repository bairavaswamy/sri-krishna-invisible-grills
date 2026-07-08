import { siteConfig } from "../config/site.config";

export default function PromoMarquee() {
  const items = [...siteConfig.marqueeItems, ...siteConfig.marqueeItems];

  return (
    <div className="site-marquee border-y border-[#d6a039] bg-[#0b4fb3] text-white">
      <div className="site-marquee-track" aria-label="Sri Krishna Invisible Grills services">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center gap-3 px-5 py-2 text-xs font-black uppercase tracking-[0.16em] sm:text-sm"
            aria-hidden={index >= siteConfig.marqueeItems.length}
          >
            <span className="h-2 w-2 rounded-full bg-[#d6a039]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
