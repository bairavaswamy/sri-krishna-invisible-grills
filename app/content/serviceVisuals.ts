import { chennaiConfig } from "../config/chennai.config";
import type { ManualServicePage } from "./types";

export type ServiceSlug = (typeof chennaiConfig.services)[number]["slug"];

export type ServiceVisualSet = {
  hero: string;
  detail: string;
  context: string;
};

const sameImageSet = (image: string): ServiceVisualSet => ({
  hero: image,
  detail: image,
  context: image,
});

export const serviceVisualsBySlug = {
  "balcony-safety-nets": {
    hero: "/images/home/service-balcony-safety-nets.png",
    detail: "/images/home/gallery-anchor-detail.png",
    context: "/images/home/gallery-balcony-open-view.png",
  },
  "children-safety-nets": sameImageSet("/images/home/service-children-safety-nets.png"),
  "pigeon-safety-nets": sameImageSet("/images/home/service-pigeon-safety-nets.png"),
  "window-invisible-grills": sameImageSet("/images/home/service-window-invisible-grills.png"),
  "balcony-invisible-grills": sameImageSet("/images/home/service-balcony-invisible-grills.png"),
  "window-safety-nets": sameImageSet("/images/home/service-window-safety-nets.png"),
  "duct-area-safety-nets": sameImageSet("/images/home/service-duct-area-safety-nets.png"),
  "building-covering-safety-nets": sameImageSet("/images/service-pages/building-covering-safety-nets.png"),
  "terrace-safety-nets": sameImageSet("/images/service-pages/terrace-safety-nets.png"),
  "cricket-practice-nets": sameImageSet("/images/home/service-cricket-practice-nets.png"),
  "bird-spikes-installation": sameImageSet("/images/home/service-bird-spikes-installation.png"),
  "cloth-hanger-installation": sameImageSet("/images/service-pages/cloth-hanger-installation.png"),
} satisfies Record<ServiceSlug, ServiceVisualSet>;

export const getServiceVisuals = (slug: ServiceSlug) => serviceVisualsBySlug[slug];

export const getServiceCardImage = (slug: ServiceSlug) => getServiceVisuals(slug).context;

export const getServiceHeroImage = (slug: ServiceSlug) => getServiceVisuals(slug).hero;

export const getManualArticleSectionImage = (slug: ServiceSlug, sectionIndex: number) => {
  const visuals = getServiceVisuals(slug);

  if (sectionIndex === 0) {
    return visuals.detail;
  }

  if (sectionIndex === 1) {
    return visuals.context;
  }

  return undefined;
};

export const applyManualServicePageVisuals = (page: ManualServicePage): ManualServicePage => {
  const serviceSlug = page.serviceSlug as ServiceSlug;

  return {
    ...page,
    hero: {
      ...page.hero,
      image: getServiceHeroImage(serviceSlug),
    },
    sections: page.sections.map((section, index) => {
      const image = getManualArticleSectionImage(serviceSlug, index);

      if (image) {
        return {
          ...section,
          image,
        };
      }

      return {
        eyebrow: section.eyebrow,
        heading: section.heading,
        paragraphs: section.paragraphs,
      };
    }),
  };
};
