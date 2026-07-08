import { siteConfig } from "../config/site.config";

export default function ContactDetailsBar() {
  return (
    <div className="w-full overflow-hidden bg-[#08275a] text-sm text-white transition-transform duration-300 md:mt-[2px]">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 overflow-x-auto whitespace-nowrap px-3 py-2 md:gap-6 md:py-3">
        <a
          href={siteConfig.contact.phoneHref}
          className="text-[11px] font-bold text-white transition-colors duration-300 hover:text-[#d6a039] sm:text-xs"
        >
          {siteConfig.contact.phoneLabel}
        </a>

        <a
          href={siteConfig.contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-bold text-white transition-colors duration-300 hover:text-[#d6a039] sm:text-xs"
        >
          WhatsApp {siteConfig.contact.whatsappLabel}
        </a>

        <a
          href={siteConfig.contact.emailHref}
          className="hidden text-center text-xs font-bold text-white transition-colors duration-300 hover:text-[#d6a039] sm:inline"
        >
          {siteConfig.contact.email}
        </a>
      </div>
    </div>
  );
}
