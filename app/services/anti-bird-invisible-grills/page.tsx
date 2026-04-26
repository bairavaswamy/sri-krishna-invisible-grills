import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import FAQSection from "../../invisible-grills/[slug]/Faqs";
import { Handshake, Award, ShieldCheck } from "lucide-react";
// import { Poppins, Inter } from "next/font/google";
import { buildFullSchema } from "../../components/seo/schema";
import { generateBreadcrumb, locationAuthorityScore } from "../../components/seo/utils";
import LocationScroller from "../../components/LocationsWeServe";
import RelatedServices from "../../components/RelatedServices";
import {buildSchemaGraph } from "../../components/schema/combineSchema";


import type { Metadata } from "next";
import {getGeo} from "../../components/utils/getGeo"
import MapSection from "../../components/maps/geoMap";
import BrandedServiceLayout from "../../components/BrandedServiceLayout";
// import {generateLocationKeywords} from "../../components/seo/keywordGenerator"

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {

  const location = "Hyderabad";

  if (!location) {
    return {
      title: "Page Not Found | Rohini Invisible Grills",
      description: "The requested service page could not be found.",
      robots: { index: false, follow: false },
    };
  }

  // const page = generateWindowInvisibleGrillService(
  //   location,
  //   locations,
  //   locations.indexOf(location)
  // );

  const geo = getGeo("hyderabad")

  const url = `https://rohiniinvisiblegrills.com/services/anti-bird-invisible-grills`;

  const image = "/images/anti-bird-invisible-grills.webp";

  /* =========================
     ADVANCED SEO VARIABLES
  ========================== */

  const primaryKeyword = `Anti Bird Invisible Grills in ${location}`;
  //  const autokeywords = generateLocationKeywords(
  //   location,
  //   locations
  // );

  const title =
    `${primaryKeyword} | Premium Pigeon Control for Balconies, Windows & Utility Areas | Rohini Invisible Grills`;

  const description =
    `Looking for anti bird invisible grills in ${location}? Rohini Invisible Grills provides premium pigeon-control systems for balconies, windows, utility spaces, and high-rise homes across Hyderabad. Get expert installation, strong stainless steel wire systems, clean visual finish, and a free site visit anywhere in Hyderabad city.`;

  /* =========================
     METADATA RETURN
  ========================== */

  return {
    metadataBase: new URL("https://rohiniinvisiblegrills.com"),

    title: {
      default: title,
      template: "%s | Rohini Invisible Grills",
    },

    description,

keywords: Array.from(new Set([
  // ...autokeywords,
  primaryKeyword,
  `Anti bird invisible grill installation ${location}`,
  `Pigeon control invisible grills ${location}`,
  `Balcony bird protection ${location}`,
  `Pigeon proof balcony grills ${location}`,
  `Bird proof invisible grills ${location}`,
  `Anti bird invisible grills near me`,
  `Hyderabad anti pigeon balcony solution`,
  "Rohini Invisible Grills",
])).slice(0, 30),

    alternates: {
      canonical: url,
    },

    category: "Bird Control",

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "Rohini Invisible Grills",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: primaryKeyword,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    other: {
  "geo.region": geo.region,
  "geo.placename": location,
  "geo.position": `${geo.lat};${geo.lng}`,
  ICBM: `${geo.lat}, ${geo.lng}`,
},
  };
}

// const headingFont = Poppins({
//   subsets: ["latin"],
//   weight: ["500", "600", "700"],
//   variable: "--font-heading"
// });

// const bodyFont = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-body"
// });

export default function Page({ params }: any) {

  const location = "Hyderabad";

  const breadcrumbs = generateBreadcrumb(location, "services/anti-bird-invisible-grills")

  const authorityScore = locationAuthorityScore(location)

  const faqs = [

    {
      question: `What are anti bird invisible grills in ${location}?`,
      answer: `Anti bird invisible grills are premium stainless steel wire systems installed across balconies, windows, utility openings, sit-outs, and service ledges to stop pigeons and other birds from entering the space. In Hyderabad, they are widely chosen because they solve bird pressure without making apartments feel shut in or visually heavy.`
    },

    {
      question: `Do invisible grills stop pigeons in ${location}?`,
      answer: `Yes. A properly planned anti bird invisible grill system blocks the flight path that pigeons use to land on balcony rails, ledges, AC shelves, and utility openings. The key is not only installing wires, but correctly covering the real entry route so the same corner or side gap does not remain open.`
    },

    {
      question: `Are anti bird invisible grills safe for families in ${location}?`,
      answer: `Yes. In many Hyderabad apartments, anti bird invisible grills do two jobs at once: they reduce pigeon entry and also add a cleaner protective layer for families with children, elderly parents, or pets. They are especially useful in upper-floor homes where residents want bird control without losing openness and natural light.`
    },

    {
      question: `What material is used for invisible grills in ${location}?`,
      answer: `Premium anti bird invisible grills are usually built with 304 grade stainless steel cables and protective coating, supported with properly aligned aluminum channels and disciplined tensioning. In Hyderabad, that matters because heat, dust, rain, pigeon movement, and daily balcony use expose weak materials and poor finishing very quickly.`
    },

    {
      question: `How long does installation take in ${location}?`,
      answer: `Straightforward anti bird invisible grill installations in Hyderabad are often completed in a few hours, while larger balconies, corner apartments, utility spaces, double-height sit-outs, and complex high-rise access conditions can take longer. The timing depends on layout, height, access, and how many active bird-entry routes need to be resolved properly.`
    },

    {
      question: `Do invisible grills block the balcony view in ${location}?`,
      answer: `No. One of the biggest reasons Hyderabad homeowners choose anti bird invisible grills is that the view remains largely open. The wires are thin, the finish is visually light, and the balcony does not feel boxed in the way older pigeon meshes or heavy grill systems often make it feel.`
    },

    {
      question: `Why do pigeons keep returning even after basic bird control work in ${location}?`,
      answer: `Because many basic fixes only interrupt the visible landing spot and do not close the full route. In Hyderabad, we often see homes where spikes were added only on one rail, or mesh was fixed only in front while the side return, AC ledge, or top entry stayed open. Pigeons come back because the actual route was never fully solved.`
    },

    {
      question: `How is anti bird invisible grill price decided in ${location}?`,
      answer: `Price depends on balcony width, height, utility-area complexity, number of exposed sides, access conditions, and whether the site is a simple front run or a more detailed route-correction job. In Hyderabad city, a high-rise corner balcony and a small window opening do not carry the same planning demand, so the cost should reflect the real containment logic being built.`
    }

  ]

  const invisibleGrillsSections = [
    {
      header: `Anti Bird Invisible Grills in Hyderabad: A City Problem That Needs a City-Level Solution`,
      content: `Anti bird invisible grills in Hyderabad are not a niche upgrade anymore. They have become a practical citywide requirement for apartment living, especially in high-rise towers, older central flats, premium gated communities, and family homes with open balconies or utility areas. Across Hyderabad, pigeon pressure follows the built form of the city. In the western high-rise corridor, birds settle on AC ledges, service shafts, balcony rails, and open sit-outs. In the east and north family belts, they repeatedly enter half-covered balconies, kitchen utilities, and window-side projections. In denser central and older pockets, they use parapet edges, side returns, neighboring ledges, and sheltered corners where earlier fixes stopped short. A good anti bird invisible grill installation in Hyderabad therefore cannot be sold as a simple product alone. It has to behave like a properly planned bird-control boundary. The residents who call us are usually already tired of the same cycle: droppings on balcony tiles, feathers inside utility spaces, nesting material near washing areas, repeated cleaning, unpleasant smell in corners, and the feeling that the birds are reclaiming the same space every morning. What they want is not only to block pigeons for a week. They want a premium, visually light, long-term solution that actually belongs in a Hyderabad home. They also want the psychological relief that comes from knowing the balcony is usable again, not temporarily calmer for a few days before the same birds test the same side route all over again.`
    },

    {
      header: `Why Bird Pressure Feels So Persistent Across Hyderabad Homes`,
      content: `One reason anti bird invisible grills perform so strongly in Hyderabad is that the bird problem here is rarely random. Pigeons follow repeatable urban behavior. They do not just “show up.” They pause on service ledges, test balcony rails, move through side gaps, sit on AC outdoor units, and return to protected corners where they previously found shelter or safety. In many Hyderabad apartments, the balcony itself is not the only entry point. The live route often includes a side wall return, a top opening, a utility projection, a neighboring wall line, or a partial cover that gives residents a false sense of closure. This is also why many bird-control attempts feel disappointing. Residents install one layer of spikes, a small front net, or a single panel barrier and feel relief for a short time. Then the same pigeons start using the unclosed side or the upper approach route. The problem returns and now feels even more frustrating because money has already been spent once. Across Hyderabad city, this behavior becomes more intense in areas with repeated balcony use, daily drying spaces, AC units, food traces, vegetation-facing sit-outs, and tower facades with multiple pause points. A serious anti bird invisible grill system works because it is not just a visible barrier. It is a route-aware deterrent that closes the actual access logic the birds are using.`
    },

    {
      header: `How a Premium Anti Bird Invisible Grill System Solves the Problem Without Killing the Balcony`,
      content: `The reason Hyderabad homeowners increasingly prefer anti bird invisible grills over older bird nets or heavy grill closures is simple: they want protection without losing the character of the home. A balcony should still feel like a balcony. The view should remain open. Airflow should remain natural. Light should still enter. The space should not become a visual cage just because pigeons are a problem. A premium invisible grill system does that better than rough front-net solutions because it creates a light but disciplined stainless steel barrier across the route birds are actually using. When designed well, it keeps the balcony visually clean, supports a high-end finish, and feels more integrated with modern apartment architecture. That matters in Hyderabad because the city has an enormous mix of real-estate styles: ultra-premium towers, branded gated communities, family apartment blocks, compact mid-rise homes, and older urban flats where aesthetics still matter even when budgets are practical. Residents searching for anti bird invisible grills in Hyderabad are often trying to balance four things at once: hygiene, openness, safety, and visual quality. A crude solution can solve one and damage the other three. A stronger system solves the bird problem while still allowing the balcony to function as a sit-out, a tea corner, a utility edge, a child-safe space, or a clean open frontage that does not feel shut.`
    },

    {
      header: `Where Earlier Bird-Control Jobs Lose Strength in Hyderabad`,
      content: `Most weak anti bird jobs in Hyderabad fail in one of four ways. The first is front-only thinking. Someone blocks the visible front and ignores the side return. The second is top neglect. The balcony looks sealed from eye level, but pigeons still enter from a higher or angled approach. The third is support weakness. The grill line may exist, but tension, alignment, edge finishing, or channel installation is too weak to feel premium or to hold the route cleanly. The fourth is aesthetic panic. Residents are shown a solution that technically blocks birds but visually kills the space, so they delay the decision, live with the bird problem longer, or accept a poor-looking compromise. In Hyderabad, these failures show up across both practical and premium segments. We have seen utility balconies where older mesh sagged and started catching dirt, tower sit-outs where spikes solved only one landing line, and family apartment balconies where a badly planned half-cover just pushed the pigeons to the adjacent side. Our work is not just about installing invisible grills. It is about correcting what earlier work misunderstood. A well-executed anti bird invisible grill system in Hyderabad has to close the actual entry path, keep the line visually neat, and make the finished balcony feel like an upgraded space rather than a patched emergency fix.`
    },

    {
      header: `A Hyderabad Installation Story: When the Balcony Looked Closed but the Birds Still Won`,
      content: `One Hyderabad project captures the pattern very clearly. The apartment was in a premium high-rise cluster where the residents had already spent on partial bird-control work. From inside the balcony, it looked like the problem should have been solved. There was visible protection in front, the owners had tried to reduce perching, and the space was cleaned constantly. Yet pigeons kept entering. On inspection, the real issue became obvious: the active route was never the front alone. Birds were using a side return and pausing on a service ledge before entering the corner that earlier work had effectively left open. The family was exhausted not only by the droppings, but by the constant feeling that the balcony could never fully be used with confidence. They had stopped keeping cushions there, reduced plant placement, and avoided drying lighter household items in the affected corner. We corrected the route the previous work had missed, realigned the containment line, and made the full installation feel visually consistent with the premium finish of the apartment. The emotional shift was immediate. The family stopped treating the balcony like a semi-contaminated edge and started using it like a proper part of the home again. That is the difference citywide customers are usually looking for. They do not want another experiment. They want a solution that changes the daily experience of the space.`
    },

    {
      header: `Why Hyderabad Homeowners Choose Invisible Grills Over Rough Bird Nets in Premium Spaces`,
      content: `One of the biggest shifts in Hyderabad city bird-control demand is aesthetic maturity. Residents no longer want the bird problem solved with a fix that makes the home feel cheaper. That is a major reason anti bird invisible grills are outperforming rough mesh-only solutions in many apartments and premium communities. In a practical utility zone, residents still care about function. In a branded tower sit-out or a front-facing balcony, they care just as much about the way the solution sits inside the architecture. Heavy front mesh, badly tied net corners, low-grade supports, and visually loud barriers can solve part of the bird problem while simultaneously damaging the look and feel of the property. Invisible grills solve a different brief. They keep the city pressure out while preserving the premium identity of the opening. This matters in Hyderabad because balconies are increasingly lifestyle spaces. They hold planters, seating, workout corners, drying rails, pet space, reading chairs, and everyday visual breathing room in dense apartment life. People are not asking for pigeon control in abstraction. They are asking to reclaim a part of the home without sacrificing status, openness, airflow, or view. A stronger Hyderabad-focused service page should acknowledge that emotional and architectural reality directly.`
    },

    {
      header: `Another Hyderabad Pattern: Compact City Balconies Need Different Planning from Tower Sit-Outs`,
      content: `Not every Hyderabad anti bird invisible grill job looks like a high-rise tower site. In compact urban homes and older apartment clusters, the pressure is different. The balcony may be smaller, but the bird access line is often more direct because the neighboring building edge, parapet height, and utility gap sit much closer. In these homes, even a minor gap can keep the whole problem alive. We have worked on city apartments where one corner near the washing area remained vulnerable after earlier mesh work, and on compact balconies where birds kept using the AC line and side wall transition as a repeat landing route. In those situations, the right answer is not copying a premium tower pattern blindly. The answer is reading the tighter geometry correctly and making the protection feel clean without overloading the space visually. This is where city-level experience matters. Hyderabad is not one housing type. It is a layered urban environment with multiple balcony styles, multiple bird behaviors, and multiple finish expectations. A stronger service page for anti bird invisible grills in Hyderabad should reflect that. Residents from Jubilee Hills to Secunderabad, from old-city terraces to Financial District towers, from family apartments in the east to gated communities in the west, are all searching for the same relief but not always for the same layout solution. The execution has to respect that difference.`
    },

    {
      header: `How Hyderabad Zone Differences Change the Installation Logic`,
      content: `A citywide anti bird invisible grill service should not read like a single balcony formula because Hyderabad itself does not behave like a single urban pattern. The western side often brings taller elevations, exposed sit-outs, glass-heavy balcony lines, and premium finish pressure. Central corridors bring tighter spacing, more visible movement outside the balcony, and older structures where route control has to be more exact. The eastern and north-eastern apartment belts bring heavy daily use, family utility demand, AC-ledged access points, and balconies that work harder as everyday household space. Older inner-city and terrace-heavy areas create a different challenge again, with closer neighboring ledges, more direct side access, and tight geometries that punish shallow or partial coverage immediately. When we say Hyderabad-only service, this is what we mean in practice. The inspection has to understand which kind of city opening it is dealing with before any premium claims matter. Citywide authority comes from recognizing those differences, planning the route accordingly, and delivering a finish that belongs to that exact Hyderabad context rather than forcing one repeated installation pattern onto every property type.`
    },

    {
      header: `Material, Finish, and Why Cheap-Looking Bird Control Fails Premium Homes`,
      content: `A premium anti bird invisible grill installation in Hyderabad depends heavily on material quality and finish discipline. Stainless steel cable quality matters. Protective coating matters. Channel alignment matters. Tension consistency matters. Edge finishing matters. In high-heat, high-dust, and rain-exposed city conditions, weak materials and clumsy workmanship show themselves very quickly. Residents may not always know the technical grade immediately, but they instantly feel the difference between a neat professional system and a rough one. In premium towers and branded communities, that difference is even more visible. A crooked line, weak corner finish, or badly proportioned support edge can make the entire amenity feel downgraded. In practical homes, the same poor finish reduces trust because the installation starts feeling temporary or fragile. The strongest Hyderabad projects succeed because they respect both engineering and appearance. We use quality materials, clean layout discipline, and installation logic that does not treat finish as an optional extra. A bird-control system is living in full view on the property every day. If it looks careless, the whole solution feels less believable. If it looks deliberate, light, and architecturally calm, residents trust it more and enjoy the space more. That is one reason anti bird invisible grills continue to outperform crude alternatives in premium segments of Hyderabad city.`
    },

    {
      header: `What Determines Anti Bird Invisible Grill Cost in Hyderabad City`,
      content: `Anti bird invisible grill cost in Hyderabad should be judged through site conditions and route complexity, not just through a flat per-square-foot number. A front-only balcony run is not the same as a corner high-rise sit-out with side returns, service ledges, and exposed upper approach lines. A compact family utility space is not the same as a premium branded community balcony where finish expectations are extremely high. The final cost changes with width, height, number of active sides, access difficulty, tower level, edge type, and whether earlier weak bird-control work has to be removed or corrected first. Smarter buyers in Hyderabad usually ask better questions: What route is being closed? Is the balcony getting only front coverage or full route-aware coverage? Is the finish premium enough for the property? Is the solution meant only to interrupt birds briefly or to keep the space clean and usable long term? Those are the questions that create value. Cheap work can still be expensive if the pigeons keep returning, if the balcony still looks poor, or if a second contractor has to come later and correct the missed line. The best citywide buyers understand that price is not only about metal and channels. It is about whether the installation actually restores the balcony to useful life.`
    },

    {
      header: `Why Rohini's Hyderabad-Focused Anti Bird Invisible Grill Service Works Better`,
      content: `What makes a Hyderabad city anti bird invisible grill page strong is not broad marketing language. It is whether the service reflects the real patterns of the city. Hyderabad has elite towers, branded communities, practical apartment belts, older mid-rise clusters, denser central roads, terrace-heavy neighborhoods, and utility-driven family homes. That means the service has to understand multiple balcony behaviors, multiple finish expectations, and multiple bird-entry logics. Rohini's work is shaped around that city reality. We do not approach every balcony as if it were the same rectangle with the same problem. We inspect how pigeons are actually entering, what the space is used for every day, how the finish should sit inside the home, and where earlier work may have failed before. Residents across Hyderabad city therefore call us not only for installation, but for correction and upgrade work after weaker bird-control systems disappointed them. Our goal is not merely to add wires. It is to return the balcony, utility edge, window frontage, or sit-out to the resident as a clean, premium, breathable, usable part of the home. When the city problem is read correctly, the final result stops feeling like damage control and starts feeling like a proper upgrade to the property itself.`
    }
  ]

  
    
    const url = `https://rohiniinvisiblegrills.com/services/anti-bird-invisible-grills`;
    const serviceName = "Anti Bird Invisible Grills";
    const serviceSlug = "anti-bird-invisible-grills";
    
    const galleryImages = [
    "/images/anti-bird-invisible-grills.webp",
    "/images/Balcony-Invisible-Grills-1.webp"
    ];
    
    
      // Build the full schema graph
    const schemaGraph = buildSchemaGraph(location, url, serviceName, serviceSlug, faqs, galleryImages);
    
    // Convert to JSON-LD for injecting in the page
    const jsonLd = JSON.stringify(schemaGraph, null, 2);

 return (
  <BrandedServiceLayout
    scripts={
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbs)
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: `${serviceName} in ${location}`,
              areaServed: location,
              additionalProperty: {
                "@type": "PropertyValue",
                name: "Location Authority Score",
                value: authorityScore,
              },
            }),
          }}
        />
      </>
    }
    title={`${serviceName} in ${location} | Rohini Invisible Grills`}
    description={invisibleGrillsSections[0]?.content}
    backgroundImage={galleryImages[0]}
    showcaseImage={`${galleryImages[0]}?v=hyderabad-city`}
    showcaseImageAlt={`${serviceName} installation in ${location}`}
    showcaseImageTitle={`${serviceName} in ${location}`}
    detailImage={galleryImages[1] ? `${galleryImages[1]}?v=detail-hyderabad-city` : undefined}
    detailImageAlt={`${serviceName} installation near ${location}`}
    detailImageTitle={`${serviceName} near me in ${location}`}
    serviceName={serviceName}
    location={location}
    serviceHref={`/services/${serviceSlug}`}
    serviceLabel={`${serviceName} in ${location}`}
    showcaseBadge={`${serviceName} Experts`}
    chips={[
      "Hyderabad City Service",
      "Pigeon Control",
      "Premium Finish",
      "Premium Materials",
      "Route-Aware Installation",
    ]}
    sections={invisibleGrillsSections.map((section: any) => ({
      heading: section.header,
      content: section.content,
    }))}
    breadcrumbs={[
      { label: "Home", href: "/" },
      { label: serviceName, href: `/services/${serviceSlug}` },
      { label: location },
    ]}
    ctaTitle={`Need ${serviceName} in ${location}?`}
    ctaDescription={`Contact Rohini Invisible Grills for premium anti bird invisible grill installation across Hyderabad city. We handle high-rise balconies, utility spaces, sit-outs, windows, and branded community homes with route-aware planning and a free site visit.`}
    afterContent={
      <>
        <MapSection area={location} />
        <RelatedServices serviceSlug={serviceSlug} />
        <FAQSection faqs={faqs} />
        <LocationScroller service={serviceSlug} />
      </>
    }
  />

  )
}
