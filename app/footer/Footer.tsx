import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { hyderabadLocations } from "../components/constants/locations";

/* ---------------- SERVICES ---------------- */

export const services = [
  { title: "Invisible Grills", slug: "invisible-grills" },
  { title: "Balcony Safety Invisible Grills", slug: "balcony-safety-invisible-grills" },
  { title: "Anti Bird Invisible Grills", slug: "anti-bird-invisible-grills" },
  { title: "Sports Nets", slug: "sports-nets" },
  { title: "Invisible Grills for Windows", slug: "invisible-grills-for-windows" },
  { title: "Children Safety Invisible Grills", slug: "children-safety-invisible-grills" },
];

/* ---------------- AREAS ---------------- */

const areas =hyderabadLocations 

export default function Footer() {
  return (
    <footer className="bg-[#0b1f2a] text-gray-300 mt-16">
      
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

        {/* ---------------- ABOUT ---------------- */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Rohini Invisible Grills
          </h3>

          <p className="text-sm leading-relaxed text-gray-400">
            Rohini Invisible Grills is a trusted name in modern home safety
            solutions. We specialize in invisible grills, balcony safety
            protection, and anti-bird systems designed for modern apartments
            and villas.
          </p>
        </div>

        {/* ---------------- SERVICES ---------------- */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Services
          </h4>

          <ul className="space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="hover:text-green-400 transition-colors duration-300"
                >
                  • {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      {/* ---------------- LOCAL AREAS ---------------- */}
      <div className="h-[300px] md:h-[310px] overflow-y-scroll overflow-x-hidden scrollbar-hide">
        <h4 className="text-lg font-semibold text-white mb-4">
          Local Areas
        </h4>

        <ul className="space-y-2 text-sm">
          {areas.map((area) => (
            <li
              key={area}
              className="hover:text-green-400 cursor-pointer transition-colors duration-300"
            >
              • {area}
            </li>
          ))}
        </ul>
      </div>

        {/* ---------------- CONTACT ---------------- */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h4>

          <div className="space-y-4 text-sm">

            <div className="flex items-start gap-3 items-center">
              <Phone className="w-5 h-5 text-green-400 mt-1" />
              <div className="flex flex-col items-start gap-2" >
                <a href="tel:+918790518724" >+91 8790518724</a>
                <a href="https://wa.me/919491008380"><p>+91 9491008380</p></a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-green-400" />
              <p>info@rohiniinvisiblegrills.com</p>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-green-400 mt-1" />
              <p className="text-gray-400 leading-relaxed">
                Door No 5-11, Madhapur,<br/>
                Hyderabad – 500081<br/><br/>

                Plot 398, C Block,<br/>
                Kondapur, Hyderabad – 500084
              </p>
            </div>

          </div>
        </div>

      </div>
      <div >
         <h4 className="text-lg px-6 font-semibold text-white mb-4">
            Local Branches
          </h4>
        <div className="max-w-7xl mx-auto px-6  pb-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
      <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-green-400 mt-1" />
          <p className="text-gray-400 leading-relaxed">
            No,2 /92, Frontline Seven Club House, Frontline seven House,<br/>
            Kokapet, Gandipet, Hyderabad, Telangana 500075
          </p>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-green-400 mt-1" />
          <p className="text-gray-400 leading-relaxed">
            862, Lahari Green Park Rd, opp. vignana jyothi engineering college, <br/>
            Bachupally, Hyderabad, Telangana 500118
          </p>
        </div>
      </div> </div>
    

      {/* ---------------- BOTTOM BAR ---------------- */}
      <div className="border-t border-white/10 text-center text-sm py-5 text-gray-400">
        © {new Date().getFullYear()} Rohini Invisible Grills. All Rights Reserved.
      </div>

    </footer>
  );
}