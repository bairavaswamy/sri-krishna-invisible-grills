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
    theme_color: "#08275a",
    icons: [
      {
        src: siteConfig.logos.mobile,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
