"use client";

import { useEffect, useState } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

type Props = {
  gtmId: string;
};

export default function DelayedGoogleTagManager({ gtmId }: Props) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;

    const load = () => setShouldLoad(true);
    const timeoutId = window.setTimeout(load, 30000);
    const events = ["pointerdown", "keydown", "touchstart", "click"];

    events.forEach((eventName) =>
      window.addEventListener(eventName, load, { once: true, passive: true })
    );

    return () => {
      window.clearTimeout(timeoutId);

      events.forEach((eventName) => window.removeEventListener(eventName, load));
    };
  }, [shouldLoad]);

  if (!shouldLoad) return null;

  return <GoogleTagManager gtmId={gtmId} />;
}
