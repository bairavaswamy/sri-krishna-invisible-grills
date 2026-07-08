import SocialProfileLinks from "./SocialProfileLinks";
import { siteConfig } from "../config/site.config";

export default function HomeSocialBand() {
  return (
    <section className="mx-auto mt-10 max-w-7xl px-0 sm:px-4">
      <div className="grid overflow-hidden rounded-md border border-blue-100 bg-white shadow-md shadow-blue-100/50 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-[#08275a] px-6 py-7 text-white lg:px-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d6a039]">
            Social Media
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
            Follow our latest balcony, grill, and safety net finishes.
          </h2>
          <p className="mt-3 text-sm leading-7 text-white/80">
            Connect with {siteConfig.name} on Instagram, Facebook, Pinterest,
            Medium, LinkedIn, and WhatsApp for updates and enquiry support.
          </p>
        </div>

        <div className="flex items-center bg-gradient-to-br from-blue-50 via-white to-[#fff7e6] px-6 py-7 lg:px-8">
          <SocialProfileLinks
            heading="Official Profiles"
            description="Open our social pages for project photos, service updates, and quick contact."
            showLabels
            variant="warm"
          />
        </div>
      </div>
    </section>
  );
}
