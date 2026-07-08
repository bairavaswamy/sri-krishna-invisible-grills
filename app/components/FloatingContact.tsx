"use client";

import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "../config/site.config";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-4 z-50 hidden flex-col gap-3 2xl:flex">
      <a
        href={siteConfig.contact.phoneHref}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition hover:scale-105"
        aria-label={`Call ${siteConfig.name}`}
      >
        <Phone size={20} />
      </a>

      <a
        href={siteConfig.contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b4fb3] text-white shadow-lg transition hover:scale-105"
        aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
      >
        <MessageCircle size={20} />
      </a>
    </div>
  );
}
