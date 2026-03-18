"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { hyderabadLocations } from "./constants/locations";
import { slugify } from "./seo/utils";

type Props = {
  service: string;
};

export default function LocationScroller({ service }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // ✅ Auto Scroll Logic
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrame: number;

    const autoScroll = () => {
      container.scrollLeft += 0.5; // speed

      // infinite loop effect
      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        container.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="w-full pt-4 bg-gradient-to-r from-green-50 via-white to-green-50">
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide px-4"
      >
        {[...hyderabadLocations, ...hyderabadLocations].map(
          (location, index) => (
            <Link
              key={index}
              href={`/${service}/${slugify(location)}`}
              className="
                whitespace-nowrap
                px-7 py-3
                rounded-full
                font-semibold
                text-gray-800
                bg-gradient-to-br from-white to-green-100
                border border-green-200
                shadow-md
                hover:scale-105
                hover:bg-green-600
                hover:text-yellow-600
                hover:shadow-xl
                transition-all duration-300
              "
            >
              {location}
            </Link>
          )
        )}
      </div>
    </div>
  );
}