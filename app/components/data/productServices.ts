export interface Service {
  title: string;
  slug: string;
  image: string;
  price: string;
  offerPrice: string;
  description: string;

  rating: number; // ⭐ rating
  badge?: string; // e.g. "Best Deal", "Most Visited"
}

export const services: Service[] = [
  {
    title: "Invisible Grills",
    slug: "invisible-grills",
    image: "/cards/invisible-grill.webp",
    price: "₹140",
    offerPrice: "10% off",
    rating: 4.9,
    badge: "Best Seller",
    description:
      "Premium invisible grills made from SS 304/316 grade materials, ideal for apartments, windows, and balconies. Protects children and prevents birds from entering your home without blocking your view.",
  },
  {
    title: "Balcony Safety Invisible Grills",
    slug: "balcony-safety-invisible-grills",
    image: "/cards/Balcony-Invisible-Grills-1.webp",
    price: "₹140",
    offerPrice: "6% off",
    rating: 4.8,
    badge: "Most Visited",
    description:
      "Sturdy balcony safety grills crafted from high-grade stainless steel. Perfect for apartment balconies, keeping children safe and birds away while maintaining a sleek, modern look.",
  },
  {
    title: "Anti Bird Invisible Grills",
    slug: "anti-bird-invisible-grills",
    image: "/cards/anti-bird-invisible-grills.webp",
    price: "₹180",
    offerPrice: "12% off",
    rating: 4.9,
    badge: "Top Rated",
    description:
      "Keep your home free from pigeons and birds with anti-bird invisible grills. Made with SS 304/316 materials, these grills are designed for apartments and terraces, ensuring safety without compromising aesthetics.",
  },
  {
    title: "Sports Nets",
    slug: "sports-nets",
    image: "/images/Box-cricket-sports-nets-installation.webp",
    price: "₹164",
    offerPrice: "15% off",
    rating: 4.7,
    badge: "Hot Deal",
    description:
      "Durable sports nets suitable for school playgrounds, apartments, and balconies. Crafted from premium materials, these nets prevent balls from falling while being safe and long-lasting.",
  },
  {
    title: "Invisible Grills for Windows",
    slug: "windows-invisible-grills",
    image: "/cards/window-anti-bird-invisible-grills-installation-near-me.webp",
    price: "₹140",
    offerPrice: "13% off",
    rating: 4.8,
    badge: "Popular",
    description:
      "Custom window grills using SS 304/316 grade stainless steel. Invisible yet strong, ideal for child safety and bird protection, letting you enjoy a clear view while keeping your home secure.",
  },
  {
    title: "Children Safety Invisible Grills",
    slug: "children-safety-invisible-grills",
    image: "/cards/children-safety-invisible-grills-for-balcony.webp",
    price: "₹200",
    offerPrice: "15% off",
    rating: 4.9,
    badge: "Recommended",
    description:
      "Specially designed grills for child-safe balconies and apartments. Made from durable stainless steel, these invisible grills prevent accidents and ensure a safe living space for your little ones.",
  },
  {
    title: "Cat Safety Invisible Grills",
    slug: "invisible-grills",
    image: "/cards/cat-safety-invisible-grills-and-net.webp",
    price: "₹180",
    offerPrice: "10% off",
    rating: 4.8,
    badge: "Pet Safe",
    description:
      "Specially designed invisible grills for cat safety in apartments and balconies. Made from SS 304/316 stainless steel, these grills prevent pets from escaping or falling while maintaining ventilation and clear views.",
  },
  {
    title: "Bird Spikes",
    slug: "bird-spikes-installation",
    image: "/cards/same-day-bird-spikes-installation.webp",
    price: "₹120",
    offerPrice: "8% off",
    rating: 4.7,
    badge: "Budget Friendly",
    description:
      "High-quality bird spikes installation to prevent pigeons and birds from sitting on ledges, AC units, and windows. Durable, weather-resistant, and effective solution for bird control without harming them.",
  },
  {
    title: "Artificial Turf Grass",
    slug: "artificial-grass-turf",
    image: "/cards/artificial-grass-and-artificial-turf-for-ground.webp",
    price: "₹90",
    offerPrice: "12% off",
    rating: 4.8,
    badge: "Best Deal",
    description:
      "Premium artificial turf grass installation for balconies, terraces, and grounds. Gives a natural green look with low maintenance, ideal for homes, playgrounds, and commercial spaces.",
  },
  {
    title: "Cloth Hangers",
    slug: "cloth-hangers",
    image: "/cards/cloth-hungers-instllations-near-me.webp",
    price: "₹1500",
    offerPrice: "5% off",
    rating: 4.6,
    badge: "Space Saver",
    description:
      "Durable balcony cloth hangers for efficient space utilization. Rust-resistant and easy to install, perfect for drying clothes in apartments without occupying floor space.",
  },
  {
    title: "Anti Bird Nets",
    slug: "anti-bird-net-installation",
    image: "/cards/anti-bird-nets-installation-near-me.webp",
    price: "₹12",
    offerPrice: "15% off",
    rating: 4.9,
    badge: "Top Choice",
    description:
      "Strong and long-lasting anti bird nets to protect balconies, windows, and open areas from pigeons and birds. Safe, eco-friendly, and ideal for maintaining hygiene in residential and commercial spaces.",
  },
];