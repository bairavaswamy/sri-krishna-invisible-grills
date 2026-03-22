import React from "react";

export default function ContactDetailsBar() {
  return (
    <div className="bg-[#1f2937] text-white w-full text-sm transition-transform duration-300">
      {/* Phone Bar */}
      <div className="flex flex-wrap justify-center gap-1 md:gap-6 py-2 md:py-3">
        <a href="tel:+918790518724"
            className="text-xs font-medium px-4 text-white hover:text-[#C9A227] transition-colors duration-300"
          >
            +91 87 9051 8724
          </a>

        <a href="tel:+919491008380" className="text-xs font-medium px-4 text-white  hover:text-[#C9A227] transition-colors duration-300">
          +91 94 9100 8380
        </a>

        <a
          href="mailto:rohiniinvisiblegrills@gmail.com"
          className="text-xs font-medium text-white hover:text-[#C9A227] transition-colors duration-300 text-center "
        >
          Rohiniinvisiblegrills@gmail.com
        </a>
      </div>
    </div>
  );
}