import type { MetadataRoute } from "next";
import { siteConfig } from "./config/site.config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f766e",
    icons: [
      {
        src: siteConfig.logos.icon192,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: siteConfig.logos.icon512,
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: siteConfig.logos.mobile,
        sizes: "160x160",
        type: "image/svg+xml",
      },
    ],
  };
}
