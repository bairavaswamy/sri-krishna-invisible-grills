export interface ServiceSection {
  heading: string;
  slug:string | string[];
  content: string | string[]; // Content can be a string or an array of strings
}


export interface Section {
  heading: string;
  content: string | string[];
  slug?:string | string[];
}

export interface FAQ {
  question: string
  answer: string
}

export interface ServicePage {
  location: string
  slug: string
  title: string
  shortDescription: string
  heroImage: string
  category: string
  sections: Section[]
  faqs: FAQ[]
  breadcrumbs: any
  authorityScore: number
  meta: {
    title: string
    description: string
    keywords: string
  }
  schema: any
}


