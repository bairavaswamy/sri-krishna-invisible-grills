import { FAQ, Section, ServicePage } from "./types";

type FallbackConfig = {
  serviceName: string;
  brandName: string;
  serviceSlug: string;
  coreProblem: string;
  primaryOutcome: string;
  materialProof: string[];
  installTargets: string[];
  relatedServices: string[];
  buyerIntents: string[];
  proofAngles: string[];
};

const fallbackConfigs: Record<string, FallbackConfig> = {
  "invisible-grills": {
    serviceName: "Invisible Grills",
    brandName: "Rohini Invisible Grills",
    serviceSlug: "invisible-grills",
    coreProblem: "open balcony edges, pigeon entry, child-safety hesitation, and exposed window openings",
    primaryOutcome: "clear-view balcony safety without making the home feel closed",
    materialProof: ["SS 304 / SS 316 stainless steel options", "2mm cable choices where suitable", "measured tension", "neat anchor alignment"],
    installTargets: ["balconies", "windows", "utility openings", "AC ledge sides", "duct-facing gaps"],
    relatedServices: ["balcony safety nets", "pigeon safety nets", "anti bird nets", "bird spikes", "window invisible grills", "children safety nets", "pet safety nets"],
    buyerIntents: ["near me", "price", "best contractor", "top rated installer", "SS 316 installation", "failed net correction"],
    proofAngles: ["front-only coverage", "side-return gaps", "AC ledge routes", "compact balcony usability"],
  },
  "anti-bird-invisible-grills": {
    serviceName: "Anti Bird Invisible Grills",
    brandName: "Rohini Invisible Grills",
    serviceSlug: "anti-bird-invisible-grills",
    coreProblem: "pigeon landing, ledge nesting, bird droppings, and open balcony access routes",
    primaryOutcome: "bird control with a cleaner look than heavy visible netting",
    materialProof: ["stainless steel cable planning", "route-aware fixing", "clean edge alignment", "weather-ready fittings"],
    installTargets: ["balcony openings", "window lines", "utility ledges", "service ducts", "terrace-linked corners"],
    relatedServices: ["anti bird nets", "pigeon safety nets", "bird spikes", "balcony safety nets", "window invisible grills", "duct area nets"],
    buyerIntents: ["near me", "pigeon control price", "best anti bird installer", "top rated bird control", "failed bird net correction"],
    proofAngles: ["repeat landing routes", "perch-point mistakes", "ledge correction", "service-shaft entry"],
  },
  "anti-bird-net-installation": {
    serviceName: "Anti Bird Net Installation",
    brandName: "Rohini Safety Nets",
    serviceSlug: "anti-bird-net-installation",
    coreProblem: "pigeon entry, nesting, droppings, and dirty balcony corners",
    primaryOutcome: "fuller bird-entry blocking for balconies, ducts, and utility shafts",
    materialProof: ["HDPE / nylon net options", "UV-resistant netting", "tight fixing", "edge-to-edge coverage"],
    installTargets: ["balconies", "duct areas", "utility shafts", "windows", "open terrace gaps"],
    relatedServices: ["pigeon safety nets", "balcony safety nets", "bird spikes", "anti bird invisible grills", "children safety nets", "duct area nets"],
    buyerIntents: ["near me", "anti bird net price", "pigeon net installer", "top rated safety nets", "failed net replacement"],
    proofAngles: ["loose net sagging", "missed duct corners", "side ledge entry", "utility shaft coverage"],
  },
  "artificial-grass-turf": {
    serviceName: "Artificial Grass Turf",
    brandName: "Rohini Artificial Grass",
    serviceSlug: "artificial-grass-turf",
    coreProblem: "unused balconies, dull terraces, dusty corners, and high-maintenance natural lawn areas",
    primaryOutcome: "a cleaner green surface that stays usable with low maintenance",
    materialProof: ["weather-ready turf", "soft pile options", "proper base preparation", "drainage-aware fitting"],
    installTargets: ["balconies", "terraces", "garden corners", "play areas", "commercial display zones"],
    relatedServices: ["balcony makeovers", "terrace turf", "play area turf", "garden turf", "decorative green flooring", "pet-friendly turf"],
    buyerIntents: ["near me", "artificial grass price", "balcony turf installer", "top rated turf installer", "low maintenance lawn"],
    proofAngles: ["water drainage", "edge cutting", "surface leveling", "dusty balcony transformation"],
  },
  "balcony-safety-invisible-grills": {
    serviceName: "Balcony Safety Invisible Grills",
    brandName: "Rohini Invisible Grills",
    serviceSlug: "balcony-safety-invisible-grills",
    coreProblem: "unsafe balcony edges, children leaning near railings, pets moving close to openings, and pigeon access",
    primaryOutcome: "family balcony safety with a slim, premium clear-view finish",
    materialProof: ["stainless steel safety cables", "SS 316 options", "measured tension", "strong balcony-side fixing"],
    installTargets: ["apartment balconies", "high-rise sit-outs", "utility balconies", "windows near balconies", "corner openings"],
    relatedServices: ["invisible grills", "children safety nets", "pet safety nets", "balcony safety nets", "anti bird nets", "bird spikes"],
    buyerIntents: ["near me", "balcony safety price", "child safety balcony grills", "best safety grill contractor", "top rated installer"],
    proofAngles: ["child-use balcony planning", "high-floor wind", "corner balcony exposure", "rail-height confidence"],
  },
  "bird-spikes-installation": {
    serviceName: "Bird Spikes Installation",
    brandName: "Rohini Invisible Grills",
    serviceSlug: "bird-spikes-installation",
    coreProblem: "pigeons sitting on ledges, AC frames, signboards, parapets, and window projections",
    primaryOutcome: "perch-point control without covering the full opening",
    materialProof: ["stainless steel spike options", "weather-resistant base fixing", "precise perch-line placement", "clean adhesive or screw fixing where suitable"],
    installTargets: ["ledges", "AC outdoor units", "parapets", "window shades", "building edges"],
    relatedServices: ["anti bird nets", "pigeon safety nets", "anti bird invisible grills", "balcony safety nets", "duct area nets"],
    buyerIntents: ["near me", "bird spikes price", "pigeon spikes installer", "best bird control contractor", "top rated pigeon control"],
    proofAngles: ["wrong spike placement", "active perch diagnosis", "ledge-width matching", "combined net-and-spike planning"],
  },
  "children-safety-invisible-grills": {
    serviceName: "Children Safety Invisible Grills",
    brandName: "Rohini Invisible Grills",
    serviceSlug: "children-safety-invisible-grills",
    coreProblem: "children standing near balcony edges, low windows, climbable furniture, and exposed family openings",
    primaryOutcome: "child-focused safety that keeps air, light, and balcony view intact",
    materialProof: ["stainless steel cable systems", "safe spacing", "measured tension", "neat fixing around family-use openings"],
    installTargets: ["children's room windows", "balconies", "utility openings", "stair-side gaps", "pet-access areas"],
    relatedServices: ["balcony safety invisible grills", "children safety nets", "pet safety nets", "window invisible grills", "balcony safety nets"],
    buyerIntents: ["near me", "child safety grill price", "best child safety installer", "top rated safety grills", "window safety for kids"],
    proofAngles: ["climbable furniture near windows", "daily child movement", "balcony play zones", "low sill protection"],
  },
  "cloth-hangers": {
    serviceName: "Cloth Hangers",
    brandName: "Rohini Invisible Grills",
    serviceSlug: "cloth-hangers",
    coreProblem: "limited drying space, cluttered balconies, weak temporary rods, and utility areas that need cleaner use",
    primaryOutcome: "space-saving clothes drying with stronger fitting and a neater balcony layout",
    materialProof: ["stainless steel hanger options", "ceiling or wall-mounted fitting", "pulley-based convenience", "load-aware hardware"],
    installTargets: ["utility balconies", "laundry corners", "terraces", "bathroom-side drying areas", "apartment balconies"],
    relatedServices: ["ceiling cloth hangers", "pulley cloth hangers", "balcony safety nets", "invisible grills", "utility area planning"],
    buyerIntents: ["near me", "cloth hanger price", "ceiling cloth hanger installer", "best cloth hanger contractor", "top rated laundry hanger"],
    proofAngles: ["weak rod replacement", "drying-space planning", "ceiling height", "utility balcony movement"],
  },
  "sports-nets": {
    serviceName: "Sports Nets",
    brandName: "Rohini Safety Nets",
    serviceSlug: "sports-nets",
    coreProblem: "balls leaving play areas, unsafe practice zones, open terrace play, and weak temporary sports barriers",
    primaryOutcome: "controlled play and practice zones with netting planned around the sport and site",
    materialProof: ["sport-specific net mesh", "strong rope edging", "weather-resistant net material", "proper support-line fixing"],
    installTargets: ["cricket practice areas", "football zones", "terrace play areas", "school grounds", "apartment courts"],
    relatedServices: ["cricket nets", "football nets", "terrace sports nets", "children safety nets", "balcony safety nets"],
    buyerIntents: ["near me", "sports net price", "cricket net installer", "best sports net contractor", "top rated net installation"],
    proofAngles: ["ball impact direction", "support pole spacing", "terrace edge safety", "practice-lane containment"],
  },
  "windows-invisible-grills": {
    serviceName: "Windows Invisible Grills",
    brandName: "Rohini Invisible Grills",
    serviceSlug: "windows-invisible-grills",
    coreProblem: "open windows, low sills, child-safety concerns, pigeon entry, and view-blocking old grills",
    primaryOutcome: "window safety with ventilation, daylight, and a cleaner view",
    materialProof: ["stainless steel window cables", "SS 316 options", "neat frame-side anchors", "measured cable tension"],
    installTargets: ["bedroom windows", "kitchen windows", "utility windows", "high-rise windows", "side-facing openings"],
    relatedServices: ["invisible grills", "children safety nets", "anti bird nets", "bird spikes", "balcony safety nets", "pet safety nets"],
    buyerIntents: ["near me", "window invisible grill price", "best window grill contractor", "top rated window safety installer", "SS 316 window grills"],
    proofAngles: ["low sill safety", "side-window pigeon access", "old grill replacement", "ventilation-first planning"],
  },
};

function hashText(value: string) {
  return value.split("").reduce((sum, char, index) => {
    return (sum + char.charCodeAt(0) * (index + 7)) % 100000;
  }, 17);
}

function pick<T>(items: T[], seed: number, offset = 0) {
  const mixed = Math.imul(seed + offset * 101 + 97, 2654435761);
  return items[Math.abs(mixed) % items.length];
}

function titleCaseSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function locationProfile(location: string, seed: number) {
  const lower = location.toLowerCase();
  const builtForm = lower.includes("layout")
    ? "planned layout homes, compact apartment blocks, and side-facing utility openings"
    : lower.includes("nagar")
      ? "established residential streets, older apartments, and family homes with practical balconies"
      : lower.includes("hills")
        ? "slope-side homes, premium apartments, and exposed upper-floor openings"
        : lower.includes("street") || lower.includes("road")
          ? "busy road-facing properties, shopfront-adjacent homes, and windows exposed to dust"
          : lower.includes("town")
            ? "older city homes, apartment balconies, and mixed-use residential pockets"
            : lower.includes("colony")
              ? "compact family homes, apartment balconies, and utility corners used every day"
              : pick(
                  [
                    "apartments, independent homes, and mixed residential buildings",
                    "newer flats, older homes, and service-linked balcony openings",
                    "family apartments, rental homes, and practical utility balconies",
                    "villa-style homes, terrace edges, and apartment balconies",
                  ],
                  seed,
                  1
                );

  const localPressure = pick(
    [
      "pigeon movement, road dust, and repeated cleaning around ledges",
      "children using balconies daily, utility access, and exposed window edges",
      "side-return gaps, AC ledges, and balcony corners that keep becoming active",
      "wind exposure, service ducts, and openings that need a neater long-term fix",
      "older fixing surfaces, compact spans, and customer concern about visual finish",
    ],
    seed,
    2
  );

  const buyerMood = pick(
    [
      "Customers here usually want a solution that feels permanent without looking heavy.",
      "Most enquiries begin after a small daily irritation becomes too repetitive to ignore.",
      "The strongest buyers are not only asking for material; they are asking for confidence.",
      "A good result has to respect how the home is used after installation, not only how it looks on day one.",
    ],
    seed,
    3
  );

  return { builtForm, localPressure, buyerMood };
}

function mergeFaqs(existing: FAQ[], additions: FAQ[]) {
  const seen = new Set<string>();
  return [...existing, ...additions].filter((faq) => {
    const key = faq.question.toLowerCase().trim();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function locationTexture(location: string, seed: number) {
  const textures = [
    "lift-lobby dust, narrow service corners, and balcony doors used several times a day",
    "morning sunlight, drying clothes, small planters, and family movement near the opening",
    "road-facing dust, AC outdoor units, shaded ledges, and compact utility access",
    "upper-floor wind, side windows, terrace parapets, and service ducts that are easy to miss",
    "renovated interiors, older wall edges, and customers who want a cleaner visual finish",
    "rental-flat practicality, quick cleaning routines, and openings that need durable low-maintenance work",
    "villa-style sit-outs, terrace turns, and wider edges that need more careful line control",
    "shopfront movement, street noise, and windows that stay open for ventilation but need protection",
  ];

  const decisionMoods = [
    "The buyer is usually comparing comfort, safety, cleaning effort, and price together.",
    "A weak fix may look acceptable from the phone camera but fails during daily use.",
    "The better question is not only what can be installed, but what will still look right after months of use.",
    "Families notice small finishing mistakes because the opening is part of their daily routine.",
    "This is where site measurement matters more than a generic rate card.",
  ];

  const localWords = location
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.toLowerCase());

  return {
    texture: pick(textures, seed, 12),
    mood: pick(decisionMoods, seed, 13),
    localWords,
  };
}

function sectionExpansion(
  section: Section,
  page: ServicePage,
  config: FallbackConfig,
  seed: number,
  index: number
) {
  const profile = locationProfile(page.location, seed + index);
  const texture = locationTexture(page.location, seed + index);
  const target = pick(config.installTargets, seed, index + 14);
  const proof = pick(config.proofAngles, seed, index + 17);
  const material = pick(config.materialProof, seed, index + 20);
  const intent = pick(config.buyerIntents, seed, index + 23);
  const related = pick(config.relatedServices, seed, index + 26);
  const heading = section.heading.replace(/\s+/g, " ").trim();
  const style = Math.abs(Math.imul(seed + index * 59, 1103515245)) % 8;

  const patterns = [
    `${heading} in ${page.location} starts with ${profile.builtForm}. The practical check is ${target}, then ${proof}, then whether ${material} suits the surface and exposure.`,
    `${page.location} brings ${texture.texture}. For ${config.serviceName.toLowerCase()}, that means the installer must read daily use before giving a final ${intent} answer.`,
    `A useful ${page.location} page should separate the main service from supporting work. If ${related} solves one corner better, it should be mentioned instead of hiding behind a generic package.`,
    `${texture.mood} In ${page.location}, this matters most around ${target}, where ${proof} can decide whether the installation feels neat or improvised.`,
    `The local pressure is ${profile.localPressure}. ${config.serviceName} content for ${page.location} should show how that pressure changes material choice, access, and final finish.`,
    `For ${page.location}, ${heading.toLowerCase()} is not only a service explanation. It is a buyer checkpoint for ${intent}, price clarity, and whether the team understands ${target}.`,
    `${profile.buyerMood} The strongest ${config.serviceName.toLowerCase()} recommendation in ${page.location} connects ${material} with the actual site condition, not a fixed script.`,
    `When ${profile.builtForm} meet ${texture.texture}, a one-line service description becomes too thin. This section keeps ${page.location} tied to ${proof}, ${related}, and real installation judgement.`,
  ];

  return patterns[style];
}

function diversifyExistingSections(
  sections: Section[],
  page: ServicePage,
  config: FallbackConfig,
  seed: number
) {
  return sections.map((section, index) => {
    const heading = section.heading.toLowerCase();
    if (heading.includes("nearby areas")) return section;
    if (heading.includes("conclusion")) return section;

    if (Array.isArray(section.content)) {
      const texture = locationTexture(page.location, seed + index);
      const target = pick(config.installTargets, seed, index + 31);
      const proof = pick(config.proofAngles, seed, index + 34);
      const material = pick(config.materialProof, seed, index + 35);
      const related = pick(config.relatedServices, seed, index + 36);
      return {
        ...section,
        content: [
          `${config.serviceName} planned for ${page.location} homes where ${texture.texture} affect daily use`,
          `Site-fit check for ${target}, ${proof}, and fixing access before final installation`,
          `Material discussion around ${material} instead of a one-line rate card`,
          `Useful for customers comparing ${config.serviceName.toLowerCase()} near me in ${page.location}`,
          `Can be combined with ${related} when one opening needs a different solution`,
          `Designed to keep the result practical, neat, and easier to maintain after installation`,
          `Better suited to ${page.location} when the team measures the site before confirming scope`,
          `Supports price, contractor, top rated installer, and problem-solution searches naturally`,
        ],
      };
    }

    return {
      ...section,
      content: `${sectionExpansion(section, page, config, seed, index)} ${sectionExpansion(section, page, config, seed + 37, index + 3)}`,
    };
  });
}

function buildSections(page: ServicePage, config: FallbackConfig, seed: number): Section[] {
  const location = page.location;
  const profile = locationProfile(location, seed);
  const texture = locationTexture(location, seed);
  const material = pick(config.materialProof, seed, 4);
  const target = pick(config.installTargets, seed, 5);
  const proofAngle = pick(config.proofAngles, seed, 6);
  const related = config.relatedServices.join(", ");
  const intentOne = pick(config.buyerIntents, seed, 7);
  const intentTwo = pick(config.buyerIntents, seed, 8);

  const localPlanning: Section = {
    heading: `Local ${config.serviceName} Planning in ${location}`,
    content: `${location} service content is built around ${profile.builtForm}. For ${config.serviceName.toLowerCase()}, the common pressure points are ${profile.localPressure}. That means a useful page cannot speak only in generic product language. It should explain how ${config.coreProblem} show up in this locality, how the opening is measured, and why the final fitting must suit daily home use. ${profile.buyerMood} Rohini's service page structure keeps those local signals visible while giving customers useful buying guidance.`,
  };

  const problemSolving: Section = {
    heading: `Common ${config.serviceName} Problems We Check in ${location}`,
    content: `Before recommending ${config.serviceName.toLowerCase()} in ${location}, the site should be checked for ${proofAngle}, ${target}, fixing strength, access, and whether earlier work only treated the visible part of the issue. Many weak installations fail because they cover the easiest area and ignore the route or use pattern that caused the enquiry. A stronger service page explains the real decision: what needs blocking, what needs safety, what needs better material, and what should stay visually light after installation.`,
  };

  const qualitySection: Section = {
    heading: `Material, Finish, and Installation Quality in ${location}`,
    content: `${config.serviceName} quality depends on more than a quick phone quote. In ${location}, customers should ask about ${material}, fixing method, edge coverage, access difficulty, and whether the team will measure the site before final pricing. The goal is ${config.primaryOutcome}. That is why the page includes commercial and transactional intent such as ${config.serviceName.toLowerCase()} near me in ${location}, ${config.serviceName.toLowerCase()} price in ${location}, and best ${config.serviceName.toLowerCase()} contractor in ${location} without turning the content into keyword stuffing.`,
  };

  const relatedSection: Section = {
    heading: `Related Services and Better Search Coverage for ${location}`,
    content: `Some homes in ${location} need only ${config.serviceName.toLowerCase()}, while others need a combination plan. Related services can include ${related}. This gives the page better customer coverage because people may search by problem, product, price, installer, or comparison. A customer searching for ${intentOne} may be closer to booking, while a customer searching for ${intentTwo} may still be comparing solutions. The service content supports both quick comparison and confident enquiry decisions.`,
  };

  const trustSection: Section = {
    heading: `Why ${config.brandName} Gives Clear Buying Guidance in ${location}`,
    content: `${config.brandName} keeps the ${config.serviceName.toLowerCase()} decision in ${location} practical: inspect the site, explain the scope, compare related services honestly, and keep the final finish suitable for the home or property. The page supports customers who are comparing price, installer quality, material options, and nearby service availability before calling.`,
  };

  const casePattern: Section = {
    heading: `Realistic ${location} Service Situation`,
    content: pick(
      [
        `A common ${location} enquiry starts with ${texture.texture}. The customer may not know the exact product name, but they know the space is no longer working smoothly. For ${config.serviceName.toLowerCase()}, we translate that daily irritation into a practical site plan: where the issue begins, which surface needs fixing, and how the finish should look once the work is done.`,
        `In ${location}, a small installation mistake can become visible every day because ${profile.builtForm} often place ${target} close to regular family movement. A realistic service plan checks ${proofAngle} first, then chooses ${material} only if it suits the site. That sequence gives the page a more useful local answer than a generic service paragraph.`,
        `The ${location} customer journey often begins with a comparison: repair the old arrangement, install ${config.serviceName.toLowerCase()}, or combine it with ${pick(config.relatedServices, seed, 40)}. The right answer depends on site shape, use pattern, and whether the main issue is safety, cleaning, access, or appearance.`,
      ],
      seed,
      41
    ),
  };

  const decisionContrast: Section = {
    heading: `Cheap Fix vs Proper ${config.serviceName} Work in ${location}`,
    content: pick(
      [
        `A cheap fix usually solves the easiest visible part. Proper work in ${location} studies the awkward part: ${proofAngle}, ${target}, and the surface that must hold the fitting. That difference matters because customers are not only buying a product; they are trying to stop repeat inconvenience.`,
        `Low-cost work can look attractive until the home is used normally again. If ${profile.localPressure} are still active, the problem returns under a different name. Proper ${config.serviceName.toLowerCase()} work in ${location} should reduce that second-round spending by explaining scope before installation.`,
        `The best ${config.serviceName.toLowerCase()} contractor in ${location} should be able to explain what is included and what is not. If ${pick(config.relatedServices, seed, 42)} is more suitable for one corner, saying that clearly is better than forcing the same product everywhere.`,
      ],
      seed,
      43
    ),
  };

  const bookingChecklist: Section = {
    heading: `Before Booking ${config.serviceName} in ${location}`,
    content: [
      `Ask whether the quote includes site measurement, access check, and fixing-surface review in ${location}.`,
      `Confirm whether ${target}, ${proofAngle}, and nearby daily-use areas are included in the scope.`,
      `Ask about ${material} and whether it is required for your actual exposure level.`,
      `Compare ${config.serviceName.toLowerCase()} with ${pick(config.relatedServices, seed, 44)} if your problem involves more than one opening.`,
      `Choose a team that explains price, finish, and installation sequence before starting work.`,
    ],
  };

  const localityNarratives = [
    `In ${location}, the work should be judged from the room side as much as the outside edge. The customer sees the finish every day, so the line, fixing point, and final use of ${target} matter more than a fast generic installation.`,
    `${location} customers often notice the problem after routine use changes. A door stays shut, a play area feels less controlled, or a utility corner becomes awkward. ${config.serviceName} planning should restore that routine, not only add material.`,
    `A practical ${location} inspection should ask where movement begins, where the surface can hold safely, and whether ${related} is needed for a separate point. That makes the recommendation feel specific instead of copied.`,
    `The strongest result in ${location} is usually quiet. The space works better, the finish does not draw attention, and the customer stops thinking about the same maintenance issue again and again.`,
    `Some ${location} homes need a visible correction, while others need a very restrained installation. The site decides the tone. That is why service content should still mention access, usage, material, and finish.`,
    `When ${target} is part of daily life in ${location}, poor planning becomes obvious quickly. The installation must respect movement, cleaning, visibility, and the way the area will be used after work is completed.`,
    `The customer in ${location} may search by product, but the actual concern is usually comfort. They want fewer repeat problems, clearer pricing, and confidence that the installer has understood the site.`,
    `A useful ${location} service page should help a buyer prepare better questions: what is being covered, which surface is carrying the load, what material is being used, and what is excluded from the quote.`,
    `${location} sites can look simple in photos and still behave differently during fitting. Corners, height, access, and daily use can change the right answer, especially when ${proofAngle} is involved.`,
    `For ${location}, the service page should not sound like a directory entry. It should guide the buyer through the practical decision: measure, compare, choose the right material, and install with a clean finish.`,
  ];

  const buyerNarratives = [
    `A buyer comparing ${config.serviceName.toLowerCase()} price in ${location} needs more than a number. They need to know whether ${material}, access, and ${proofAngle} are included in the scope.`,
    `Someone searching for ${config.serviceName.toLowerCase()} near me in ${location} is often close to calling. The page should answer what happens next: inspection, measurement, quote clarity, and installation sequence.`,
    `Top rated installer searches in ${location} usually come from customers who have already seen weak work elsewhere. They want cleaner judgement, not louder promises.`,
    `If a previous attempt failed in ${location}, the next installer should identify the missed route or weak surface first. Repeating the same plan with new material rarely solves the real issue.`,
    `Customers in ${location} often compare ${config.serviceName.toLowerCase()} with ${related}. The page should make that comparison easier without pretending every product solves every condition.`,
    `The premium signal in ${location} is not only the material name. It is whether the finished work feels aligned, stable, and appropriate to the home or site.`,
    `For urgent enquiries in ${location}, the safest promise is practical: inspect the site, explain the scope, and complete the work cleanly when access and measurement are clear.`,
    `A good service page for ${location} should support both informational and transactional searches. Some visitors are learning; others are ready to book. Both need clear next steps.`,
    `The strongest conversion moment in ${location} happens when the buyer sees that the service is planned around their actual opening, court, ledge, utility area, or usable space.`,
    `Customers do not want to become experts before calling. They need enough clarity to trust the quote, compare options, and understand why the chosen installation fits ${location}.`,
  ];

  const localNarrative: Section = {
    heading: `${location} Local Service Notes`,
    content: `${pick(localityNarratives, seed, 45)} ${pick(localityNarratives, seed, 46)}`,
  };

  const buyerNarrative: Section = {
    heading: `${location} Buyer Intent and Conversion Notes`,
    content: `${pick(buyerNarratives, seed, 47)} ${pick(buyerNarratives, seed, 48)}`,
  };

  const serviceScope: Section = {
    heading: `${config.serviceName} Scope for ${location}`,
    content: `${config.serviceName} in ${location} is mainly about ${config.coreProblem}. The expected result is ${config.primaryOutcome}. For this service, the team should connect ${pick(config.materialProof, seed, 49)}, ${pick(config.installTargets, seed, 50)}, and ${pick(config.proofAngles, seed, 51)} into one clear scope before quoting. If the customer is actually facing a different issue, related options such as ${pick(config.relatedServices, seed, 52)} should be discussed separately.`,
  };

  const serviceDifference: Section = {
    heading: `How ${config.serviceName} Differs From Other Options in ${location}`,
    content: `${config.serviceName} is not the same decision as ${pick(config.relatedServices, seed, 53)} or ${pick(config.relatedServices, seed, 54)}. In ${location}, this service focuses on ${config.installTargets.slice(0, 3).join(", ")} with proof points such as ${config.materialProof.slice(0, 3).join(", ")}. That service-specific scope keeps the content distinct across different Rohini service pages.`,
  };

  const nearbySource = page.sections.find((section) =>
    section.heading.toLowerCase().includes("nearby")
  );
  const nearbyText = Array.isArray(nearbySource?.content)
    ? nearbySource.content
        .map((item) => item.replace(/^.* available in /i, "").trim())
        .join(", ")
    : nearbySource?.content ?? location;
  const nearbyContext: Section = {
    heading: `${location} Nearby Context for ${config.serviceName}`,
    content: `${location} searches often connect with nearby demand around ${nearbyText}. Customers may compare these areas before booking, so this page keeps local links, route-adjacent intent, and ${config.serviceName.toLowerCase()} scope connected.`,
  };

  const baseSections = diversifyExistingSections(page.sections, page, config, seed);

  const conclusionIndex = baseSections.findIndex((section) =>
    section.heading.toLowerCase().includes("conclusion")
  );

  if (conclusionIndex < 0) {
    return [
      ...baseSections,
      localPlanning,
      problemSolving,
      qualitySection,
      casePattern,
      decisionContrast,
      bookingChecklist,
      localNarrative,
      buyerNarrative,
      serviceScope,
      serviceDifference,
      nearbyContext,
      relatedSection,
      trustSection,
    ];
  }

  return [
    ...baseSections.slice(0, conclusionIndex),
    localPlanning,
    problemSolving,
    qualitySection,
    casePattern,
    decisionContrast,
    bookingChecklist,
    localNarrative,
    buyerNarrative,
    serviceScope,
    serviceDifference,
    nearbyContext,
    relatedSection,
    trustSection,
    ...baseSections.slice(conclusionIndex),
  ];
}

function buildFaqs(page: ServicePage, config: FallbackConfig, seed: number): FAQ[] {
  const location = page.location;
  const target = pick(config.installTargets, seed, 9);
  const material = pick(config.materialProof, seed, 10);
  const related = pick(config.relatedServices, seed, 11);

  return [
    {
      question: `What affects ${config.serviceName.toLowerCase()} price in ${location}?`,
      answer: `Price depends on site size, access, fixing surface, material choice, ${target}, and whether any previous work needs correction before installation.`,
    },
    {
      question: `Do you provide ${config.serviceName.toLowerCase()} near me in ${location}?`,
      answer: `${config.brandName} provides site-measured ${config.serviceName.toLowerCase()} support in ${location} and nearby areas, with clear guidance before installation.`,
    },
    {
      question: `Can you correct failed earlier work in ${location}?`,
      answer: `Yes. We check why the earlier work failed, whether the missed point was a side gap, ledge, weak fixing, wrong material, or incomplete coverage, and then suggest a cleaner correction.`,
    },
    {
      question: `What material quality should I ask for in ${location}?`,
      answer: `Ask about ${material}, fixing method, outdoor exposure, and whether the installation is planned around the actual site instead of only a rough measurement.`,
    },
    {
      question: `Should I compare ${config.serviceName.toLowerCase()} with ${related} in ${location}?`,
      answer: `Yes. Some problems need ${config.serviceName.toLowerCase()} while others are better solved with ${related} or a combination. A site visit helps choose the right option.`,
    },
  ];
}

function expandKeywords(existing: string, config: FallbackConfig, location: string) {
  const additions = [
    `${config.serviceName} in ${location}`,
    `${config.serviceName} near me in ${location}`,
    `${config.serviceName} price ${location}`,
    `best ${config.serviceName} contractor ${location}`,
    `top rated ${config.serviceName} installer ${location}`,
    `${config.brandName} ${location}`,
    ...config.relatedServices.map((service) => `${service} ${location}`),
  ];

  const keywords = new Set(
    existing
      .split(",")
      .map((keyword) => keyword.trim())
      .filter(Boolean)
  );

  additions.forEach((keyword) => keywords.add(keyword));

  return Array.from(keywords).slice(0, 30).join(", ");
}

function enhancedDescription(page: ServicePage, config: FallbackConfig) {
  const description = `${config.brandName} provides ${config.serviceName.toLowerCase()} in ${page.location} with site-measured fitting, durable materials, local problem checks, clear pricing, and nearby support.`;
  return description.length <= 155 ? description : page.meta.description;
}

export function enhanceFallbackServicePage(
  page: ServicePage,
  serviceSlug: string
): ServicePage {
  const config =
    fallbackConfigs[serviceSlug] ??
    ({
      serviceName: titleCaseSlug(serviceSlug),
      brandName: "Rohini Invisible Grills",
      serviceSlug,
      coreProblem: "site-specific safety and installation requirements",
      primaryOutcome: "cleaner installation with practical local support",
      materialProof: ["durable materials", "site-measured fitting", "neat fixing"],
      installTargets: ["balconies", "windows", "utility areas"],
      relatedServices: ["invisible grills", "balcony safety nets", "anti bird nets"],
      buyerIntents: ["near me", "price", "best contractor"],
      proofAngles: ["side gaps", "fixing quality", "daily use"],
    } satisfies FallbackConfig);

  const seed = hashText(`${serviceSlug}:${page.location}`);
  const sections = buildSections(page, config, seed);
  const faqs = mergeFaqs(page.faqs, buildFaqs(page, config, seed)).slice(0, 12);

  return {
    ...page,
    sections,
    faqs,
    meta: {
      ...page.meta,
      description: enhancedDescription(page, config),
      keywords: expandKeywords(page.meta.keywords, config, page.location),
    },
  };
}
