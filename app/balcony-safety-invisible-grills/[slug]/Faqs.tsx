"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <section className="py-20 bg-gradient-to-b from-[#f8fafc] via-white to-[#eef2f7]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-yellow-400">
          Frequently Asked Questions
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300
                ${
                  isOpen
                    ? "bg-gradient-to-b from-[#f8fafc] via-white to-[#eef2f7] border-blue-200 shadow-lg"
                    : "bg-white border-gray-200 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left p-4"
                >
                  <span className="font-semibold text-gray-900 text-md leading-snug">
                    {faq.question}
                  </span>

                  {/* ICON */}
                  <span
                    className={`ml-4  transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-6 h-6 text-yellow-500" />
                    ) : (
                      <Plus className="w-6 h-6 text-yellow-500" />
                    )}
                  </span>
                </button>

                {/* Answer Animation */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}