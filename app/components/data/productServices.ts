export interface Service {
  title: string;
  slug: string;
  image: string;
  price: string;
  offerPrice: string;
  description: string;
}

export const services: Service[] = [
  {
    title: "Invisible Grills",
    slug: "invisible-grills",
    image: "/cards/invisible-grill.webp",
    price: "₹140",
    offerPrice: "10% off",
    description: "Premium invisible grills made from SS 304/316 grade materials, ideal for apartments, windows, and balconies. Protects children and prevents birds from entering your home without blocking your view."
  },
  {
    title: "Balcony Safety Invisible Grills",
    slug: "balcony-safety-invisible-grills",
    image: "/cards/Balcony-Invisible-Grills-1.webp",
    price: "₹140",
    offerPrice: "6% off",
    description: "Sturdy balcony safety grills crafted from high-grade stainless steel. Perfect for apartment balconies, keeping children safe and birds away while maintaining a sleek, modern look."
  },
  {
    title: "Anti Bird Invisible Grills",
    slug: "anti-bird-invisible-grills",
    image: "/cards/anti-bird-invisible-grills.webp",
    price: "₹180",
    offerPrice: "12% off",
    description: "Keep your home free from pigeons and birds with anti-bird invisible grills. Made with SS 304/316 materials, these grills are designed for apartments and terraces, ensuring safety without compromising aesthetics."
  },
  {
    title: "Sports Nets",
    slug: "sports-nets",
    image: "/images/Box-cricket-sports-nets-installation.webp",
    price: "₹164",
    offerPrice: "15% off",
    description: "Durable sports nets suitable for school playgrounds, apartments, and balconies. Crafted from premium materials, these nets prevent balls from falling while being safe and long-lasting."
  },
  {
    title: "Invisible Grills for Windows",
    slug: "windows-invisible-grills",
    image: "/cards/invisible-grills-for-apartment.webp",
    price: "₹140",
    offerPrice: "13% off",
    description: "Custom window grills using SS 304/316 grade stainless steel. Invisible yet strong, ideal for child safety and bird protection, letting you enjoy a clear view while keeping your home secure."
  },
  {
    title: "Children Safety Invisible Grills",
    slug: "children-safety-invisible-grills",
    image: "/cards/children-safety-invisible-grills-for-balcony.webp",
    price: "₹200",
    offerPrice: "15% off",
    description: "Specially designed grills for child-safe balconies and apartments. Made from durable stainless steel, these invisible grills prevent accidents and ensure a safe living space for your little ones."
  },
];