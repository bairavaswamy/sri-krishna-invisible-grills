import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import SocialProfileLinks from "../components/SocialProfileLinks";
import { siteConfig } from "../config/site.config";

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#061b3d] text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr]">
        <div>
          <Image
            src={siteConfig.logos.desktop}
            alt={`${siteConfig.name} logo`}
            width={2172}
            height={724}
            className="mb-5 h-auto w-full max-w-[310px] rounded-lg bg-white p-2"
          />

          <p className="text-sm leading-relaxed text-gray-400">{siteConfig.description}</p>

          <SocialProfileLinks
            className="mt-6"
            heading="Follow Us"
            description={`Connect with ${siteConfig.name} across our official social profiles.`}
            variant="dark"
          />
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-white">Pages</h4>

          <ul className="space-y-2 text-sm">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  prefetch={false}
                  className="transition-colors duration-300 hover:text-[#d6a039]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-white">Contact Us</h4>

          <div className="space-y-4 text-sm">
            <a
              href={siteConfig.contact.phoneHref}
              className="flex items-center gap-3 transition hover:text-[#d6a039]"
            >
              <Phone className="h-5 w-5 text-[#d6a039]" />
              {siteConfig.contact.phoneLabel}
            </a>

            <a
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-[#d6a039]"
            >
              <MessageCircle className="h-5 w-5 text-[#d6a039]" />
              WhatsApp {siteConfig.contact.whatsappLabel}
            </a>

            <a
              href={siteConfig.contact.emailHref}
              className="flex items-center gap-3 transition hover:text-[#d6a039]"
            >
              <Mail className="h-5 w-5 text-[#d6a039]" />
              {siteConfig.contact.email}
            </a>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-[#d6a039]" />
              <p className="leading-relaxed text-gray-400">
                {siteConfig.contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-400">
        Copyright {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
      </div>
    </footer>
  );
}
