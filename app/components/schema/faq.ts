

type FAQ = {
  question: string;
  answer: string;
};

export const faqSchema = (
  faqs: FAQ[],
  url: string
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${url}#faq`,

  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});