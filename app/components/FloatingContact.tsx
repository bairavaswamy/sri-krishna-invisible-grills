"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "../config/site.config";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
    >
      <path d="M16.01 3.2C9.08 3.2 3.45 8.82 3.45 15.74c0 2.21.58 4.37 1.68 6.27L3.2 28.8l6.96-1.83a12.52 12.52 0 0 0 5.85 1.49h.01c6.92 0 12.55-5.62 12.55-12.54S22.94 3.2 16.01 3.2Zm0 22.92h-.01a10.18 10.18 0 0 1-5.2-1.43l-.37-.22-4.13 1.08 1.1-4.02-.25-.41a10.17 10.17 0 0 1-1.56-5.38c0-5.63 4.59-10.21 10.23-10.21 2.73 0 5.29 1.06 7.22 2.99a10.13 10.13 0 0 1 2.99 7.21c0 5.63-4.59 10.21-10.22 10.21Zm5.6-7.64c-.31-.15-1.82-.9-2.1-1-.28-.1-.48-.15-.68.15-.2.31-.78 1-.96 1.2-.18.2-.35.23-.66.08-.31-.15-1.29-.48-2.46-1.52-.91-.81-1.52-1.81-1.7-2.12-.18-.31-.02-.47.13-.62.14-.14.31-.35.46-.52.15-.18.2-.31.31-.51.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.81.38-.28.31-1.06 1.04-1.06 2.53 0 1.49 1.09 2.93 1.24 3.13.15.2 2.14 3.27 5.18 4.59.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.82-.74 2.08-1.46.26-.72.26-1.34.18-1.46-.08-.13-.28-.2-.59-.36Z" />
    </svg>
  );
}

export default function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-3 z-50 flex flex-col items-end gap-2 sm:bottom-5 sm:right-4 sm:gap-3">
      <a
        href={siteConfig.contact.phoneHref}
        className="floating-call-buzz flex items-center gap-2 transition hover:-translate-y-0.5"
        aria-label={`Call ${siteConfig.name}`}
      >
        <span className="floating-call-label rounded-full border border-[#d6a039]/45 bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#08275a] shadow-[0_12px_30px_rgba(8,39,90,0.18)]">
          Call Now
        </span>
        <span className="floating-call-button flex h-11 w-11 items-center justify-center rounded-full bg-[#d6a039] text-[#08275a] shadow-[0_12px_30px_rgba(214,160,57,0.32)] ring-1 ring-white/40 sm:h-12 sm:w-12">
          <Phone size={20} />
        </span>
      </a>

      <a
        href={siteConfig.contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.28)] ring-1 ring-white/35 transition hover:-translate-y-0.5 hover:scale-105 sm:h-12 sm:w-12"
        aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
