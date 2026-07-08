import { chennaiConfig } from "../config/chennai.config";
import type { ManualServiceAreaEntry, ManualServicePage } from "./types";

type ActiveServiceSlug = (typeof chennaiConfig.services)[number]["slug"];

type ManualServiceCopy = {
  promise: string;
  siteFocus: string;
  materialLine: string;
  finishLine: string;
  maintenanceLine: string;
  primaryChecks: string[];
  outcomes: string[];
};

const activeServiceSlugs = new Set<string>(
  chennaiConfig.services.map((service) => service.slug)
);

const areaNamesBySlug = new Map(
  chennaiConfig.areas.map((area) => [area.slug, area.name])
);

const serviceNamesBySlug = new Map(
  chennaiConfig.services.map((service) => [service.slug, service.name])
);

const serviceCopyBySlug = {
  "balcony-safety-nets": {
    promise: "child, pet, and pigeon protection for open balcony edges",
    siteFocus: "railing gaps, side returns, drying corners, plant stands, and AC ledges",
    materialLine: "UV-stable mesh, strong rope borders, clean hook spacing, and balanced tension",
    finishLine: "a protected balcony that still keeps air, light, cleaning access, and daily drying use practical",
    maintenanceLine: "simple corner checks after heavy weather and easy cleaning around the border line",
    primaryChecks: ["railing gap", "side return", "floor height", "cleaning route"],
    outcomes: ["child-safe balcony use", "pigeon route closure", "neat visible finish"],
  },
  "children-safety-nets": {
    promise: "child-focused protection for balconies, windows, stair voids, and open edges",
    siteFocus: "climb points, furniture position, grill spacing, window swing, and family movement",
    materialLine: "strong mesh, close gap planning, smooth edge tension, and secure child-safe fixing",
    finishLine: "safety coverage that reduces risk without making the home feel closed",
    maintenanceLine: "periodic tension checks and clear guidance about not hanging weight on the net",
    primaryChecks: ["climb point", "gap width", "furniture position", "opening height"],
    outcomes: ["safer children movement", "pet-friendly openings", "calm family use"],
  },
  "pigeon-safety-nets": {
    promise: "focused pigeon route control for balconies, ledges, shafts, and service corners",
    siteFocus: "nesting pockets, side gaps, beam openings, AC ledges, and cleaning access",
    materialLine: "tight net lines, closed corner pockets, durable border rope, and discreet fixing",
    finishLine: "a cleaner balcony or utility edge with the actual bird route blocked",
    maintenanceLine: "easier sweeping, fewer droppings, and accessible cleaning paths after installation",
    primaryChecks: ["bird route", "ledge depth", "side gap", "cleaning access"],
    outcomes: ["blocked pigeon entry", "cleaner utility corners", "reduced daily maintenance"],
  },
  "invisible-grills": {
    promise: "open-view stainless steel cable protection for premium homes and high-rise openings",
    siteFocus: "cable spacing, frame strength, floor height, view lines, and association rules",
    materialLine: "stainless steel cables, firm channels, measured spacing, and clean tensioning",
    finishLine: "a nearly open view with reliable edge protection and a composed facade line",
    maintenanceLine: "light cleaning and tension checks without heavy visual maintenance",
    primaryChecks: ["frame strength", "cable spacing", "view line", "fixing surface"],
    outcomes: ["clearer views", "premium safety finish", "strong high-rise protection"],
  },
  "balcony-invisible-grills": {
    promise: "balcony protection where the view, airflow, and exterior finish must stay premium",
    siteFocus: "balcony frame lines, cable spacing, facade appearance, floor height, and pet movement",
    materialLine: "stainless steel cable runs, aligned channels, measured drilling, and even tension",
    finishLine: "a balcony that feels open while gaining a strong safety boundary",
    maintenanceLine: "simple cable care and follow-up support for tension or alignment questions",
    primaryChecks: ["balcony frame", "cable tension", "facade line", "edge clearance"],
    outcomes: ["open balcony view", "premium child safety", "pet-safe edge protection"],
  },
  "window-safety-nets": {
    promise: "window-level protection for child safety, ventilation, and bird control",
    siteFocus: "window swing, grill gap, frame depth, cleaning access, and kitchen or bedroom use",
    materialLine: "window-friendly mesh, neat anchor points, tight corners, and ventilation-aware spacing",
    finishLine: "safer windows that still open, ventilate, and look tidy from inside",
    maintenanceLine: "cleaning-friendly access and simple checks around hinges and frame edges",
    primaryChecks: ["window swing", "frame type", "grill gap", "cleaning access"],
    outcomes: ["safer ventilation", "child-safe windows", "bird entry reduction"],
  },
  "duct-area-safety-nets": {
    promise: "coverage for ducts, shafts, service voids, and utility cut-outs",
    siteFocus: "pipe clearance, access depth, cleaning route, drainage, and maintenance openings",
    materialLine: "shaft-safe mesh, strong perimeter fixing, clear service access, and measured overlap",
    finishLine: "a safer service void that blocks unwanted entry while allowing practical maintenance",
    maintenanceLine: "planned access for cleaning teams, plumbers, and building maintenance work",
    primaryChecks: ["void depth", "pipe clearance", "drainage path", "maintenance access"],
    outcomes: ["covered shafts", "safer utility edges", "service-friendly access"],
  },
  "building-covering-safety-nets": {
    promise: "large-area covering for facades, shafts, open sides, and maintenance edges",
    siteFocus: "coverage span, wind exposure, anchor strength, access height, and building rules",
    materialLine: "heavy-duty netting, reinforced borders, planned anchor intervals, and secure coverage lines",
    finishLine: "broad protection that looks organized across the building instead of patched together",
    maintenanceLine: "clear access planning for future checks, cleaning, and building work",
    primaryChecks: ["coverage span", "anchor strength", "wind exposure", "access height"],
    outcomes: ["wide safety coverage", "clean facade planning", "reliable maintenance edges"],
  },
  "terrace-safety-nets": {
    promise: "open-edge protection for terraces, rooftops, parapets, and shared play corners",
    siteFocus: "parapet height, wind path, drainage, play movement, and access around the roof",
    materialLine: "weather-ready netting, strong border rope, sturdy anchors, and wind-aware tension",
    finishLine: "a terrace that feels safer without blocking normal rooftop movement",
    maintenanceLine: "easy inspection after storms and enough access for sweeping or drainage checks",
    primaryChecks: ["parapet height", "wind path", "drainage point", "access route"],
    outcomes: ["safer rooftops", "play-area control", "clean open-edge protection"],
  },
  "staircase-safety-nets": {
    promise: "vertical fall protection for staircase wells, duplex voids, and railing gaps",
    siteFocus: "void height, railing spacing, stair movement, fixing side, and visibility through the net",
    materialLine: "vertical mesh alignment, strong anchors, tight side borders, and neat landing transitions",
    finishLine: "a safer stair opening that still feels light and easy to use",
    maintenanceLine: "simple tension checks around landings and corners where hands touch often",
    primaryChecks: ["void height", "railing gap", "landing edge", "fixing side"],
    outcomes: ["safer stair voids", "child-focused protection", "tidy duplex finish"],
  },
  "cricket-practice-nets": {
    promise: "containment netting for cricket practice lanes, terraces, academies, and society play zones",
    siteFocus: "ball direction, run-up space, support height, nearby windows, and ground fixing",
    materialLine: "impact-ready mesh, planned pole spacing, firm top lines, and safe side coverage",
    finishLine: "a practice area that keeps balls controlled without making the space awkward",
    maintenanceLine: "net checks around impact zones, pole joints, and ground anchoring after heavy use",
    primaryChecks: ["ball direction", "practice height", "pole support", "ground surface"],
    outcomes: ["controlled cricket practice", "safer play boundaries", "usable training space"],
  },
  "bird-spikes-installation": {
    promise: "perch control for ledges, parapets, AC units, pipes, sign boards, and facade edges",
    siteFocus: "perch width, surface type, access height, cleaning need, and visible alignment",
    materialLine: "corrosion-aware spikes, clean adhesive or fixing choice, and straight edge placement",
    finishLine: "bird-deterrent protection that stays discreet and does not clutter the elevation",
    maintenanceLine: "easy ledge cleaning before installation and simple checks after heavy dust or rain",
    primaryChecks: ["perch width", "surface type", "access height", "ledge cleaning"],
    outcomes: ["reduced perching", "cleaner ledges", "discreet bird control"],
  },
  "cloth-hanger-installation": {
    promise: "ceiling and balcony drying systems planned around daily utility use",
    siteFocus: "ceiling strength, pulley reach, walking clearance, window swing, and wet-floor movement",
    materialLine: "sturdy ceiling hardware, smooth pulley action, aligned rods, and practical mounting height",
    finishLine: "a drying setup that saves space without blocking movement or balcony safety work",
    maintenanceLine: "simple pulley care and clear use guidance for daily family routines",
    primaryChecks: ["ceiling strength", "pulley reach", "walking clearance", "drying space"],
    outcomes: ["better drying space", "clean ceiling alignment", "daily utility comfort"],
  },
} satisfies Record<ActiveServiceSlug, ManualServiceCopy>;

const joinList = (items: string[]) => {
  if (items.length <= 1) {
    return items[0] ?? "";
  }

  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
};

const getAreaName = (areaSlug: string) => areaNamesBySlug.get(areaSlug) ?? areaSlug;

const getServiceName = (serviceSlug: string) =>
  serviceNamesBySlug.get(serviceSlug) ?? serviceSlug;

const getManualServiceCopy = (serviceSlug: string) =>
  serviceCopyBySlug[serviceSlug as ActiveServiceSlug];

export const isActiveManualServiceSlug = (serviceSlug: string) =>
  activeServiceSlugs.has(serviceSlug);

export const refreshManualServiceAreaEntry = (
  entry: ManualServiceAreaEntry
): ManualServiceAreaEntry => {
  const copy = getManualServiceCopy(entry.serviceSlug);
  const serviceName = getServiceName(entry.serviceSlug);
  const lowerService = serviceName.toLowerCase();
  const checks = joinList(copy.primaryChecks);
  const outcomes = joinList(copy.outcomes);

  return {
    ...entry,
    service: serviceName,
    path: `/${entry.citySlug}/${entry.serviceSlug}/${entry.areaSlug}`,
    searchIntent: `${entry.area} customers comparing ${lowerService} in Chennai for measured site inspection, ${checks}, material clarity, neat fixing, schedule planning, and contact support from SRI KRISHNA INVISIBLE GRILLS.`,
    localAngle: `${serviceName} in ${entry.area} is planned around ${copy.siteFocus}. SRI KRISHNA INVISIBLE GRILLS checks ${checks} before suggesting ${copy.materialLine}, so the finished work gives ${outcomes} without making the space difficult to use.`,
    articleBrief: [
      `${entry.area} ${lowerService} content now focuses on the actual opening, access route, building condition, and daily routine instead of old repeated service text. The page should explain how the site is measured and why the solution fits this local setting.`,
      `Before quoting in ${entry.area}, the team should verify ${checks}, then explain the material, fixing line, and finish in simple terms. This keeps the service decision practical for apartments, villas, communities, and utility corners.`,
      `The finished work should deliver ${copy.finishLine}. The customer should also understand care after installation, including ${copy.maintenanceLine}, and use phone or WhatsApp only for the final measured visit and quotation.`,
    ],
  };
};

export const refreshManualServicePage = (page: ManualServicePage): ManualServicePage => {
  const areaName = getAreaName(page.areaSlug);
  const serviceName = getServiceName(page.serviceSlug);
  const lowerService = serviceName.toLowerCase();
  const copy = getManualServiceCopy(page.serviceSlug);
  const checks = joinList(copy.primaryChecks);
  const outcomes = joinList(copy.outcomes);

  return {
    ...page,
    metadata: {
      title: `${serviceName} in ${areaName} Chennai | SRI KRISHNA INVISIBLE GRILLS`,
      description: `${serviceName} in ${areaName}, Chennai by SRI KRISHNA INVISIBLE GRILLS, with measured site checks, ${copy.materialLine}, neat finish, and maintenance-friendly planning.`,
      keywords: [
        `${lowerService} in ${areaName}`,
        `${lowerService} Chennai`,
        `${areaName} ${lowerService}`,
        `SRI KRISHNA INVISIBLE GRILLS ${areaName}`,
      ],
      openGraphTitle: `${serviceName} in ${areaName} Chennai`,
      openGraphDescription: `Fresh Sri Krishna service guide for ${lowerService} in ${areaName}, covering ${checks}, quote clarity, and clean installation.`,
      twitterTitle: `${serviceName} in ${areaName} Chennai`,
      twitterDescription: `Plan ${lowerService} in ${areaName} with site checks, material clarity, and a neat Chennai installation finish.`,
    },
    hero: {
      ...page.hero,
      eyebrow: `${areaName} Chennai ${lowerService}`,
      title: `${serviceName} in ${areaName} planned for safer use and a cleaner finish.`,
      lead: `${areaName} homes need ${lowerService} that fits the real site, not copied content or a rushed square-foot estimate. SRI KRISHNA INVISIBLE GRILLS looks at ${copy.siteFocus}, then recommends a practical installation that gives ${outcomes}.`,
      primaryCta: `Call for ${areaName} Site Visit`,
      secondaryCta: "WhatsApp Site Photos",
    },
    proof: [
      {
        stat: areaName,
        label: "Area Planning",
        description: `${areaName} pages now use fresh Sri Krishna copy built around local access, daily use, and measured service choices.`,
      },
      {
        stat: "Site",
        label: "Measurement First",
        description: `The visit checks ${checks} before material, finish, and timeline are confirmed.`,
      },
      {
        stat: "Care",
        label: "After-Service Clarity",
        description: `The page explains upkeep, including ${copy.maintenanceLine}.`,
      },
    ],
    intro: {
      heading: `Why ${lowerService} in ${areaName} needs measured planning`,
      paragraphs: [
        `${serviceName} should begin with the real condition of the ${areaName} property. Some homes need safety for children or pets, some need cleaner utility use, and some need a premium finish that respects the view and building elevation. The right plan studies how the space is used before fixing anything.`,
        `A clean Sri Krishna installation is not only about covering an opening. It is about choosing the right material, finding stable fixing points, keeping the finished line neat, and making sure the customer can still clean, ventilate, dry clothes, maintain equipment, or use the area comfortably after the work is complete.`,
        `This refreshed manual page removes the old repeated wording and explains ${lowerService} as a practical Chennai service. It connects ${areaName} site access, daily routines, material choice, quotation clarity, and maintenance so the customer can decide with confidence.`,
        `Before a quote is finalized, SRI KRISHNA INVISIBLE GRILLS checks ${checks}. That measured approach helps avoid weak corners, untidy drilling, blocked access, and short-term fixes that later need correction.`,
      ],
    },
    sections: [
      {
        eyebrow: "Site Reading",
        heading: `Start with the ${areaName} site condition`,
        paragraphs: [
          `${areaName} properties can vary from compact flats to larger homes and community spaces. A useful ${lowerService} plan checks wall strength, floor access, opening shape, side gaps, and how people move through the area. Those details decide whether the job needs simple coverage, reinforced borders, or a more careful fixing method.`,
          `The installer should not rely only on photos or rough measurements. Photos help with the first discussion, but the final quotation should follow a site reading that confirms ${copy.siteFocus}. This protects the customer from mismatched material and surprise changes on installation day.`,
        ],
      },
      {
        eyebrow: "Material Choice",
        heading: `Use material that matches daily Chennai use`,
        paragraphs: [
          `The correct material depends on exposure, height, contact points, and how often the space is used. For ${lowerService}, Sri Krishna focuses on ${copy.materialLine}. The goal is not a heavy-looking fix, but a strong system that stays stable and looks intentional.`,
          `Customers should understand what is being installed, where the anchors will sit, and how the final line will appear from inside the home. Clear material explanation makes the difference between a temporary patch and a service finish that feels trustworthy after months of use.`,
        ],
      },
      {
        eyebrow: "Safety Use",
        heading: `Plan around the people who use the space`,
        paragraphs: [
          `Every site has a different routine. Children may move quickly, pets may push toward edges, elders may need easy walking space, and utility areas may need regular access. The service should support that routine instead of making the space difficult to live with.`,
          `For ${areaName}, the page now explains how ${lowerService} can deliver ${outcomes}. This makes the service content more useful for families, owners, tenants, and association managers who want a practical answer before they call.`,
        ],
      },
      {
        eyebrow: "Neat Finish",
        heading: "Make the protection look deliberate",
        paragraphs: [
          `Visible lines, corners, hooks, channels, and borders should look planned. A rough installation can make even a strong material feel careless. Sri Krishna copy now highlights finish quality because customers notice the result every day from the room, balcony, terrace, window, or utility space.`,
          `The preferred finish is ${copy.finishLine}. The exact method can change by service type, but the expectation stays the same: straight alignment, stable fixing, clean corners, and no unnecessary clutter.`,
        ],
      },
      {
        eyebrow: "Quote Clarity",
        heading: "Explain price through scope, not guesswork",
        paragraphs: [
          `A good quote should describe what is included: material, fixing method, access needs, preparation, and expected completion time. It should also say when extra work may be needed, such as difficult height, weak fixing surfaces, additional side gaps, or special association timing.`,
          `For ${lowerService} in ${areaName}, clear scope protects both the customer and the installer. It keeps the conversation focused on the real service requirement instead of only comparing the lowest number shared over the phone.`,
        ],
      },
      {
        eyebrow: "After Care",
        heading: "Keep the installation easy to live with",
        paragraphs: [
          `After installation, the customer should know how to use the protected space safely. The care guidance depends on the service, but this page highlights ${copy.maintenanceLine}. Simple instructions reduce avoidable damage and help the finish stay clean.`,
          `The page also points customers toward phone and WhatsApp for measured follow-up. That keeps the contact flow simple while avoiding old phone details or outdated business information anywhere in the content.`,
        ],
      },
      {
        eyebrow: "Sri Krishna Standard",
        heading: `What the ${areaName} page should help a customer decide`,
        paragraphs: [
          `The refreshed content should make the customer feel that the service is specific to the site. It should answer what is protected, why the material is suitable, how the fixing stays neat, what preparation is needed, and how the final result will be maintained.`,
          `That is the new content direction for SRI KRISHNA INVISIBLE GRILLS: cleaner language, practical Chennai service details, no removed service promotion, and a direct path from reading the page to booking a measured site visit.`,
        ],
      },
    ],
    decisionGuide: {
      heading: `How to compare ${lowerService} installers in ${areaName}`,
      points: [
        {
          title: "Ask what gets measured",
          description: `A reliable team should explain ${checks} before quoting, not only ask for a rough square-foot size.`,
        },
        {
          title: "Check the fixing plan",
          description: "The quote should describe anchors, borders, drilling, channels, or supports so the finish is predictable.",
        },
        {
          title: "Compare finish quality",
          description: "Straight lines, clean corners, and stable tension matter because the work remains visible after installation.",
        },
        {
          title: "Discuss daily use",
          description: "The installer should ask how the space is used for cleaning, ventilation, drying, pets, children, or maintenance.",
        },
        {
          title: "Confirm support",
          description: "Good service includes clear after-care guidance and a simple way to ask for help after installation.",
        },
      ],
    },
    faq: [
      {
        question: `Do you provide ${lowerService} in ${areaName}?`,
        answer: `Yes. SRI KRISHNA INVISIBLE GRILLS covers ${areaName} and nearby Chennai areas for ${lowerService}, with site measurement, material explanation, and installation planning.`,
      },
      {
        question: "How is the quote prepared?",
        answer: `The quote is based on ${checks}, access difficulty, material choice, and finish expectations. A measured visit gives a cleaner answer than a rough phone estimate.`,
      },
      {
        question: "Will the installation disturb daily use?",
        answer: `The plan is made so the finished work gives ${copy.finishLine}. Preparation may include clearing stored items, keeping the work area accessible, and confirming building timing.`,
      },
      {
        question: "What material do you suggest?",
        answer: `Material depends on the site, but the Sri Krishna approach prioritizes ${copy.materialLine}. The final choice is explained before installation starts.`,
      },
      {
        question: "How should the work be maintained?",
        answer: `Basic care includes ${copy.maintenanceLine}. Customers should avoid pulling, overloading, or modifying the installed system without checking first.`,
      },
      {
        question: "Can apartments, villas, and communities request this service?",
        answer: `Yes. The same ${lowerService} category can be adapted for apartments, villas, independent homes, associations, and shared utility areas when the site is measured properly.`,
      },
    ],
    closing: {
      heading: `Plan ${lowerService} in ${areaName} with Sri Krishna clarity.`,
      paragraphs: [
        `${serviceName} should feel like a careful improvement to the property, not a copied service page or a rushed installation. The refreshed content now focuses on the real site, visible finish, safe fixing, and practical after-care.`,
        `Share photos first if helpful, then use the phone or WhatsApp contact to schedule a measured visit. The final recommendation should match the ${areaName} site and the way the space is actually used.`,
      ],
      cta: "Call SRI KRISHNA INVISIBLE GRILLS",
    },
  };
};
