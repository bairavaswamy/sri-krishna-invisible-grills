import Link from 'next/link';

// Define types for better DX
interface Section {
  heading: string;
  content: string | string[];
  slug?:string | string[];
}

interface PageData {
  location: string;
  sections: Section[];
  category:String;
}

export default function NearbyServiceSection({ page }: { page: PageData }) {
  // 1. Extract the specific section
  const nearbySection = page.sections.find(
    (s) => s.heading === "Nearby Areas We Serve"
  );

  // 2. Guard clause if section doesn't exist
  if (!nearbySection || !Array.isArray(nearbySection.content)) return null;

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-yellow-600">
          { page?.category === "sports-nets" ?  `Sports Nets Installation Near ${page.location}` : `Invisible Grill Installation Near ${page.location}` }
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {nearbySection.content.map((text: string, i: number) => {
            // Remove the prefix to get just the location name (e.g., "Abids")
            const locationName = text
            // .replace("Invisible grill installation available in ", "");
            
            // // Generate a URL-friendly slug
            // const slug = locationName
            //   .toLowerCase()
            //   .trim()
            //   .replace(/\s+/g, "-")     // Replace spaces with -
            //   .replace(/[^\w-]+/g, ""); // Remove special characters

            return (
              <Link
                key={i}
                href={nearbySection.slug ? nearbySection.slug[i] : "#"}
                prefetch={false}
                className="bg-white p-4 rounded-lg shadow transition-all hover:shadow-lg hover:text-yellow-400 text-center text-blue-400 font-medium border border-transparent hover:border-blue-200"
              >
                {locationName}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
