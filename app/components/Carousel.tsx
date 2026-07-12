"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../config/site.config";

const heroImages = siteConfig.homeCarouselImages;

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const advance = () => setIndex((i) => (i + 1) % heroImages.length);
    let startTimer: number | null = null;

    startTimer = window.setTimeout(() => {
      intervalRef.current = window.setInterval(advance, 4500);
    }, 15000);

    return () => {
      if (startTimer) window.clearTimeout(startTimer);
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="-mx-4 md:-mx-6 lg:-mx-8">
      <div className="relative h-[380px] w-full overflow-hidden sm:h-[390px] md:h-[440px] lg:h-[460px]">
        <div
          className="flex h-full w-full transition-transform duration-700"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {heroImages.map((item, i) => (
            <div key={item.src} className="relative h-full w-full flex-shrink-0">
              <picture className="absolute inset-0 block">
                {item.mobileSrc ? <source media="(max-width: 767px)" srcSet={item.mobileSrc} /> : null}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding={i === 0 ? "sync" : "async"}
                  fetchPriority={i === 0 ? "high" : "auto"}
                />
              </picture>

              <div className="absolute inset-0 flex items-center justify-start bg-gradient-to-r from-[#061a3d]/90 via-[#061a3d]/55 to-black/10 text-left">
                <div
                  className={`w-full max-w-[calc(100vw-2rem)] px-6 text-white transition-all duration-700 sm:max-w-3xl sm:px-10 md:max-w-4xl lg:px-14 ${
                    i === index ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                  }`}
                >
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-200 sm:text-sm sm:tracking-[0.22em]">
                    Chennai home safety specialists
                  </p>
                  <h1 className="text-3xl font-extrabold leading-tight text-white drop-shadow-lg md:text-5xl">
                    {item.title}
                  </h1>

                  <p className="mt-4 text-base font-medium leading-7 text-gray-100 drop-shadow-md sm:text-xl sm:leading-8">
                    {item.description}
                  </p>

                  <a
                    href={siteConfig.contact.phoneHref}
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-[#d6a039] px-7 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#08275a] shadow-sm transition duration-300 hover:bg-amber-500 md:px-9"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {heroImages.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setIndex(i)}
              className={`h-4 w-4 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
              aria-label={`Go to ${item.title} slide`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
