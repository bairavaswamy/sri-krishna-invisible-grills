"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { FORMSPREE_URL, FORM_NAME } from "../config/form.config";
import { siteConfig } from "../config/site.config";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    purpose: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMessage("Please fill in all required fields: name, email, and phone.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          purpose: formData.purpose,
          message: formData.message,
          _subject: `${FORM_NAME} - New Enquiry from ${formData.name}`,
          _replyto: formData.email,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setStatus("success");
      setFormData({ name: "", purpose: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage("Failed to send enquiry. Please try again or contact us directly.");
    }
  };

  return (
    <section id="quote" className="rounded-md border border-[#dbe7f5] bg-white px-4 py-6 shadow-sm">
      <div className="relative min-h-[620px] overflow-hidden rounded-md bg-gray-100 md:min-h-[520px]">
        <Image
          src={siteConfig.homeContactImage}
          alt={`${siteConfig.name} contact background`}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-950/60" />

        <div className="relative z-10 grid min-h-[620px] gap-8 px-5 py-8 md:min-h-[520px] md:grid-cols-[0.9fr_1fr] md:px-10 lg:px-16">
          <div className="flex flex-col justify-center text-white">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-200">
              Contact {siteConfig.shortName}
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight sm:text-5xl">
              Share your Chennai safety requirement.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-8 text-slate-100">
              Send your area, service, floor level, and photos if available. Phone,
              WhatsApp, and email are controlled from the central site config.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/20"
              >
                <Phone size={17} />
                {siteConfig.contact.phoneLabel}
              </a>
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#d6a039]/45 bg-[#d6a039]/20 px-4 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-[#d6a039]/30"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
              <a
                href={siteConfig.contact.emailHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/20"
              >
                <Mail size={17} />
                Email
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative w-full rounded-md border border-white/10 bg-white/15 p-6 shadow-[0_25px_70px_rgba(8,39,90,0.18)] backdrop-blur-xl sm:p-8">
              <h3 className="mb-6 text-center text-2xl font-bold tracking-wide text-white">
                Get a Free Quote
              </h3>

              <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="rounded-sm border border-[#dbe7f5] bg-white/90 px-4 py-3 text-sm outline-none transition focus:border-[#d6a039] focus:bg-white focus:ring-2 focus:ring-[#fff1c9]"
                  />
                  <input
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="rounded-sm border border-[#dbe7f5] bg-white/90 px-4 py-3 text-sm outline-none transition focus:border-[#d6a039] focus:bg-white focus:ring-2 focus:ring-[#fff1c9]"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="rounded-sm border border-[#dbe7f5] bg-white/90 px-4 py-3 text-sm outline-none transition focus:border-[#d6a039] focus:bg-white focus:ring-2 focus:ring-[#fff1c9]"
                  />
                  <input
                    name="purpose"
                    placeholder="Requirement"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="rounded-sm border border-[#dbe7f5] bg-white/90 px-4 py-3 text-sm outline-none transition focus:border-[#d6a039] focus:bg-white focus:ring-2 focus:ring-[#fff1c9]"
                  />
                </div>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Project details, location, or notes..."
                  value={formData.message}
                  onChange={handleChange}
                  className="resize-none rounded-sm border border-[#dbe7f5] bg-white/90 px-4 py-3 text-sm outline-none transition focus:border-[#d6a039] focus:bg-white focus:ring-2 focus:ring-[#fff1c9]"
                />

                {status === "success" ? (
                  <div className="rounded-md border border-[#d6a039]/45 bg-[#fff8e8] p-3 text-sm text-[#08275a]">
                    Enquiry sent successfully. We will contact you soon.
                  </div>
                ) : null}

                {status === "error" ? (
                  <div className="rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-700">
                    {errorMessage}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#d6a039] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#08275a] shadow-[0_10px_30px_rgba(8,39,90,0.18)] transition-all duration-300 hover:bg-[#f3c35b] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
