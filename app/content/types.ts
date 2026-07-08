export type ManualServicePage = {
  citySlug: string;
  areaSlug: string;
  serviceSlug: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    openGraphTitle: string;
    openGraphDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    image: string;
    primaryCta: string;
    secondaryCta: string;
  };
  proof: {
    stat: string;
    label: string;
    description: string;
  }[];
  intro: {
    heading: string;
    paragraphs: string[];
  };
  priceGuide?: {
    heading: string;
    range: string;
    note: string;
    factors: string[];
  };
  comparisonTable?: {
    heading: string;
    rows: {
      feature: string;
      basic: string;
      sriKrishna: string;
    }[];
  };
  process?: {
    heading: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  sections: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    image?: string;
  }[];
  decisionGuide: {
    heading: string;
    points: {
      title: string;
      description: string;
    }[];
  };
  faq: {
    question: string;
    answer: string;
  }[];
  closing: {
    heading: string;
    paragraphs: string[];
    cta: string;
  };
};

export type ManualServiceAreaEntry = {
  city: string;
  citySlug: string;
  area: string;
  areaSlug: string;
  service: string;
  serviceSlug: string;
  path: string;
  writingPriority: number;
  status: "published" | "ready-to-write";
  searchIntent: string;
  localAngle: string;
  articleBrief: string[];
};
