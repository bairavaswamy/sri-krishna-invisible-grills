'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import { FORMSPREE_URL, FORM_NAME } from "../config/form.config"
import { services } from "../components/constants/services"
import {
  aprtmentsLocationsfromBengalore,
  bangaloreLocations,
} from "../components/constants/locations"

const trustPoints = [
  "17 Years Warranty",
  "304 Grade Stainless Steel",
  "Free Site Visit",
  "Same Day Quotation",
]

const hyderabadBranches = [
  {
    title: "Kokapet Branch",
    area: "Kokapet, Gandipet",
    address:
      "No. 2/92, Frontline Seven Club House, Frontline Seven House, Kokapet, Gandipet, Hyderabad, Telangana 500075",
  },
  {
    title: "Bachupally Branch",
    area: "Bachupally",
    address:
      "862, Lahari Green Park Road, opp. Vignana Jyothi Engineering College, Bachupally, Hyderabad, Telangana 500118",
  },
]

const bangaloreBusinessAreas = [
  "Whitefield",
  "Sarjapur Road",
  "Electronic City",
  "HSR Layout",
  "Bellandur",
  "Marathahalli",
  "Hebbal",
  "Bannerghatta",
  "JP Nagar",
  "Koramangala",
  "Indira Nagar",
  "Thanisandra",
  "Yelahanka",
  "KR Puram",
  "Hennur Road",
  "Devanahalli",
].filter((location) => bangaloreLocations.includes(location))

const bangaloreCommunities = [
  "Prestige Shantiniketan, Whitefield",
  "The Prestige City, Sarjapur Road",
  "Sobha Dream Acres, Panathur",
  "Prestige Sunrise Park, Electronic City",
  "Purva Atmosphere, Thanisandra",
  "Embassy Springs, Devanahalli",
  "Godrej Air, Whitefield",
  "Brigade Utopia, Whitefield",
].filter((community) => aprtmentsLocationsfromBengalore.includes(community))

const heroImage = {
  src: "/images/invisible-grill-for-balcony.webp",
  alt: "Invisible grill installation for balcony safety",
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    purpose: "",
    email: "",
    phone: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMessage("Please fill in Name, Email, and Phone.")
      setStatus("error")
      return
    }

    setStatus("loading")
    setErrorMessage("")

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
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setStatus("success")
      setFormData({
        name: "",
        purpose: "",
        email: "",
        phone: "",
        message: "",
      })
      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus("error")
      setErrorMessage("Failed to send enquiry. Please try again or contact us directly.")
    }
  }

  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-amber-50">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.16),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.14),_transparent_34%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
              <Sparkles size={16} />
              Hyderabad and Bangalore Enquiries
            </div>

            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
                Contact Rohini Invisible Grills for premium balcony, window, and safety solutions.
              </h1>

              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                We install invisible grills, bird protection systems, sports nets, cloth
                hangers, and artificial turf with a clean modern finish. Reach out for
                site visits in Hyderabad and for service enquiries across key Bangalore
                business locations.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  <CheckCircle2 size={16} className="text-orange-500" />
                  {point}
                </div>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                  Call Us
                </p>
                <p className="mt-3 text-lg font-bold text-slate-900">+91 8790518724</p>
                <p className="mt-1 text-sm text-slate-500">+91 9491008380</p>
              </div>

              <div className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                  Working Hours
                </p>
                <p className="mt-3 text-lg font-bold text-slate-900">Mon - Sun</p>
                <p className="mt-1 text-sm text-slate-500">9:00 AM to 8:00 PM</p>
              </div>

              <div className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                  Main Office
                </p>
                <p className="mt-3 text-lg font-bold text-slate-900">Madhapur & Kondapur</p>
                <p className="mt-1 text-sm text-slate-500">Hyderabad service coordination</p>
              </div>
            </div>

            <div className="rounded-[32px] border border-orange-100 bg-white/90 p-5 shadow-xl shadow-orange-100/60">
              <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                      Services We Handle
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-900">
                      Every enquiry can start from one page.
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                      <span
                        key={service.slug}
                        className="rounded-full border border-orange-200 bg-orange-50 px-3 py-2 text-sm font-medium text-slate-700"
                      >
                        {service.title}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href="tel:+918790518724"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-3 font-semibold text-white shadow-md transition hover:scale-[1.02]"
                    >
                      <Phone size={18} />
                      Call Now
                    </a>

                    <a
                      href="https://wa.me/919491008380"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-3 font-semibold text-green-700 transition hover:scale-[1.02]"
                    >
                      <ArrowRight size={18} />
                      WhatsApp Us
                    </a>
                  </div>
                </div>

                <div className="relative min-h-[280px] overflow-hidden rounded-[28px]">
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-900/30 to-orange-500/25" />

                  <div className="absolute inset-x-5 bottom-5 rounded-[24px] border border-white/20 bg-white/12 p-5 backdrop-blur-md">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">
                      Built For Modern Homes
                    </p>
                    <p className="mt-2 text-lg font-bold text-white">
                      Strong safety, neat installation, and cleaner balconies for families and apartments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="quote" className="rounded-[34px] border border-orange-100 bg-white p-6 shadow-2xl shadow-orange-100/70 sm:p-8">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">
                Free Quote
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Tell us what you need.
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Share your location, service requirement, and contact details. Our team
                will get back with a clear quote and installation guidance.
              </p>
            </div>

            <form className="grid grid-cols-1 gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Full Name *"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-400"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                name="phone"
                placeholder="Phone Number *"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-400"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address *"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-400"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                name="purpose"
                placeholder="Service Needed"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-400"
                value={formData.purpose}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Project details, location, apartment name, or branch preference..."
                rows={5}
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-400 sm:col-span-2"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              {status === "success" && (
                <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 sm:col-span-2">
                  Enquiry sent successfully. Our team will contact you shortly.
                </div>
              )}

              {status === "error" && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 sm:col-span-2">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-200 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50 sm:col-span-2"
              >
                {status === "loading" ? "Sending..." : "Send Enquiry"}
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <a
                href="tel:+918790518724"
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-center transition hover:border-orange-300"
              >
                <Phone className="mx-auto text-orange-500" size={18} />
                <p className="mt-2 text-sm font-semibold text-slate-900">Phone</p>
                <p className="mt-1 text-xs text-slate-500">Talk to our team</p>
              </a>

              <a
                href="mailto:info@rohiniinvisiblegrills.com"
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-center transition hover:border-orange-300"
              >
                <Mail className="mx-auto text-orange-500" size={18} />
                <p className="mt-2 text-sm font-semibold text-slate-900">Email</p>
                <p className="mt-1 text-xs text-slate-500">Share drawings and details</p>
              </a>

              <Link
                href="/"
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-center transition hover:border-orange-300"
              >
                <ShieldCheck className="mx-auto text-orange-500" size={18} />
                <p className="mt-2 text-sm font-semibold text-slate-900">Home</p>
                <p className="mt-1 text-xs text-slate-500">Explore services</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] border border-orange-100 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-7 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
              Contact Details
            </p>
            <h2 className="mt-3 text-3xl font-bold">Hyderabad office support</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              For site visits, measurements, and quotations in Hyderabad, our team
              coordinates from our main office addresses and nearby service branches.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <MapPin className="mt-1 text-orange-300" size={20} />
                <div>
                  <p className="font-semibold">Main Office</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Door No 5-11, Madhapur, Hyderabad, Telangana 500081
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Plot 398, C Block, Kondapur, Hyderabad, Telangana 500084
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <Phone className="mt-1 text-orange-300" size={20} />
                <div>
                  <p className="font-semibold">Phone & WhatsApp</p>
                  <p className="mt-1 text-sm text-slate-300">+91 8790518724</p>
                  <p className="mt-1 text-sm text-slate-300">+91 9491008380</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <Clock3 className="mt-1 text-orange-300" size={20} />
                <div>
                  <p className="font-semibold">Service Window</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Monday to Sunday, 9:00 AM to 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-orange-100 bg-white p-7 shadow-lg shadow-orange-100/60">
            <div className="flex items-center gap-3">
              <Building2 className="text-orange-500" size={22} />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                  Hyderabad Branches
                </p>
                <h2 className="mt-1 text-3xl font-bold text-slate-900">
                  Local branches
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {hyderabadBranches.map((branch) => (
                <div
                  key={branch.title}
                  className="rounded-[26px] border border-slate-200 bg-gradient-to-br from-white to-orange-50 p-6"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                    {branch.area}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">{branch.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{branch.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 pb-14">
        <div className="rounded-[34px] border border-orange-100 bg-white p-7 shadow-xl shadow-orange-100/50 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                Bangalore Reach
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Bangalore service areas
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                We also provide service support for Bangalore projects. If you are
                looking for invisible grills, anti-bird solutions, sports nets, cloth
                hangers, or artificial turf in Bangalore, our team can assist across
                the areas and apartment communities listed below.
              </p>
            </div>

            <div className="rounded-[28px] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-5">
              <p className="text-sm font-semibold text-slate-900">
                Popular Bangalore areas
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {bangaloreBusinessAreas.map((location) => (
                  <span
                    key={location}
                    className="rounded-full border border-orange-200 bg-white px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                Bangalore localities
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {bangaloreBusinessAreas.map((location) => (
                  <span
                    key={`area-${location}`}
                    className="rounded-full bg-white px-3 py-2 text-sm text-slate-700 shadow-sm"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                Bangalore apartment communities
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {bangaloreCommunities.map((community) => (
                  <span
                    key={community}
                    className="rounded-full bg-white px-3 py-2 text-sm text-slate-700 shadow-sm"
                  >
                    {community}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
