import type { ServiceSlug } from "./serviceDetails";

type ManualGuidePoint = {
  label: string;
  text: string;
};

type ManualGuideSection = {
  eyebrow: string;
  title: string;
  intro: string;
  points: ManualGuidePoint[];
};

type ChennaiServiceManualBasePage = {
  eyebrow: string;
  title: string;
  lead: string;
  intro: string[];
  sections: {
    title: string;
    body: string;
  }[];
  highlights: string[];
  process: string[];
  faq: {
    question: string;
    answer: string;
  }[];
};

export type ChennaiServiceManualPage = ChennaiServiceManualBasePage & {
  guideSections: ManualGuideSection[];
  closing: string[];
};

export const chennaiServiceManualPages = {
  "balcony-safety-nets": {
    eyebrow: "Balcony Safety Nets in Chennai",
    title: "Balcony safety nets for Chennai apartments and homes",
    lead:
      "A balcony safety net should protect the open edge without making the balcony feel closed. We plan the mesh, hooks, rope border, and corner finish around the way the balcony is actually used.",
    intro: [
      "In Chennai apartments, balconies often do more than one job. They are used for air, drying clothes, plants, pet movement, and daily cleaning. A rushed net can block all of that or leave weak corners where birds and pets still find a way through.",
      "SRI KRISHNA INVISIBLE GRILLS checks railing gaps, side returns, floor height, cleaning access, and fixing points before suggesting the final net line. The finished work should feel safe, neat, and easy to live with.",
    ],
    sections: [
      {
        title: "Planned around the balcony edge",
        body:
          "The net is measured around the real opening, including side gaps and railing changes. This helps avoid loose corners and keeps the border line clean from inside the home.",
      },
      {
        title: "Useful for children, pets, and pigeons",
        body:
          "Many homes need one solution for child safety, pet safety, and pigeon control. The installation is planned so the balcony remains usable for cleaning, drying, and regular movement.",
      },
      {
        title: "Clean finish after installation",
        body:
          "Hooks, rope borders, and tension are aligned so the work looks settled, not patched. The goal is protection that quietly becomes part of the balcony.",
      },
    ],
    highlights: ["Railing gap check", "Side return closure", "UV-stable mesh", "Cleaning-friendly finish"],
    process: [
      "Share balcony photos and the main issue.",
      "Confirm opening size, side gaps, and floor access.",
      "Choose mesh, border rope, hook spacing, and fixing points.",
      "Install with tight corners and explain simple care.",
    ],
    faq: [
      {
        question: "Will the balcony still get air and light?",
        answer:
          "Yes. The net is planned to protect the opening while keeping normal airflow, light, and daily balcony use practical.",
      },
      {
        question: "Can one net help with children, pets, and pigeons?",
        answer:
          "In many balconies, yes. The site check confirms whether the same coverage can solve all three or if extra side closure is needed.",
      },
    ],
  },
  "children-safety-nets": {
    eyebrow: "Children Safety Nets in Chennai",
    title: "Children safety nets for windows, balconies, and open edges",
    lead:
      "Children safety work has to be planned from a child's reach, not from an adult's guess. We check climb points, furniture position, window access, balcony gaps, and open edges before fixing anything.",
    intro: [
      "Small children move quickly near windows and balconies. A sofa near a window, a chair near a railing, or a low sill can turn into a risk even when the opening looks ordinary.",
      "Our Chennai child-safety planning focuses on practical home use. The net should reduce risk while keeping ventilation, cleaning, and family routines comfortable.",
    ],
    sections: [
      {
        title: "Checked from the child's height",
        body:
          "The site visit looks at sill height, furniture, grill spacing, balcony gaps, and play movement. This gives a better safety plan than only measuring the opening.",
      },
      {
        title: "Suitable for mixed home openings",
        body:
          "Children safety nets can be used for balconies, windows, duplex edges, terrace corners, and other open areas depending on the property layout.",
      },
      {
        title: "Soft-looking but secure",
        body:
          "The fixing should be strong without making the home look harsh. Clean corners, close spacing, and smooth tension matter in family spaces.",
      },
    ],
    highlights: ["Child reach check", "Furniture position review", "Window and balcony coverage", "Pet-friendly planning"],
    process: [
      "Share where the child usually plays or climbs.",
      "Measure gaps, sill height, and balcony or window access.",
      "Plan net coverage around real movement.",
      "Install securely and explain what not to pull or hang.",
    ],
    faq: [
      {
        question: "Can children safety nets be used on windows?",
        answer:
          "Yes. Window coverage is common when children can reach the sill or when the window is kept open for ventilation.",
      },
      {
        question: "Will it make the house look closed?",
        answer:
          "The aim is a neat, light finish. The exact look depends on the opening, but the installation is planned to avoid a heavy feel.",
      },
    ],
  },
  "pigeon-safety-nets": {
    eyebrow: "Pigeon Safety Nets in Chennai",
    title: "Pigeon safety nets that block the actual bird route",
    lead:
      "Pigeon control works only when the entry route is properly closed. We look for ledges, side gaps, AC corners, pipe spaces, and nesting pockets before installing the net.",
    intro: [
      "Many pigeon problems come back because only the front opening is covered. Birds still enter from a side pocket, beam gap, AC ledge, or pipe corner.",
      "Our Chennai pigeon net installation focuses on the route pigeons actually use. The goal is a cleaner balcony or utility area with proper access for regular sweeping and maintenance.",
    ],
    sections: [
      {
        title: "Bird route first",
        body:
          "We check where pigeons sit, nest, and enter before deciding the net line. This is especially important around service balconies and ledges.",
      },
      {
        title: "Closed corners",
        body:
          "Corners and side returns are fixed carefully because pigeons often exploit small gaps left after a quick installation.",
      },
      {
        title: "Cleaner daily use",
        body:
          "A good pigeon net should reduce droppings and nesting while still allowing access for cleaning, drying, and utility work.",
      },
    ],
    highlights: ["Side gap closure", "AC ledge coverage", "Nesting pocket check", "Cleaner balcony use"],
    process: [
      "Send photos of the bird entry points.",
      "Clean old nesting material where needed.",
      "Measure ledges, beams, and side gaps.",
      "Install the net with closed corners and clear access.",
    ],
    faq: [
      {
        question: "Do you clean pigeon waste before installing?",
        answer:
          "Basic clearing can be discussed during the visit. Heavy cleaning should be confirmed before the installation schedule.",
      },
      {
        question: "Can pigeons still enter from the sides?",
        answer:
          "The side gaps are checked during measurement. Proper corner closure is the main difference between a temporary fix and a lasting one.",
      },
    ],
  },
  "window-invisible-grills": {
    eyebrow: "Window Invisible Grills in Chennai",
    title: "Window invisible grills with open view and cable safety",
    lead:
      "Window invisible grills are for homes that want safety without heavy bars. Stainless steel cables are aligned with the frame so the window keeps its light, view, and ventilation.",
    intro: [
      "Many Chennai homes want window protection but do not want the room to feel boxed in. Invisible grills are useful when the window view matters and the finish has to look clean from inside.",
      "We check frame strength, sill height, cable spacing, drilling surface, and cleaning access before confirming the layout.",
    ],
    sections: [
      {
        title: "Frame-based planning",
        body:
          "The cable system is planned around the actual window frame. Good alignment keeps the installation neat and avoids a random-looking cable line.",
      },
      {
        title: "Safety without a heavy grill look",
        body:
          "The cables create a safety boundary while allowing the window to feel open. This works well for premium rooms, bedrooms, and view-facing windows.",
      },
      {
        title: "Tension and spacing matter",
        body:
          "Cable spacing, side channels, drilling points, and tension are checked carefully so the finish stays steady after installation.",
      },
    ],
    highlights: ["Stainless steel cables", "Frame alignment", "Open view", "Pet-safe ventilation"],
    process: [
      "Share clear window photos from inside.",
      "Measure frame width, sill height, and fixing surface.",
      "Confirm cable spacing and channel position.",
      "Install, tension, and check alignment.",
    ],
    faq: [
      {
        question: "Are window invisible grills better than normal grills?",
        answer:
          "They are better when you want an open view and a lighter finish. Traditional grills may still suit some sites, but invisible grills feel less bulky.",
      },
      {
        question: "Can the cables be cleaned?",
        answer:
          "Yes. The cables can be wiped during regular cleaning. If tension changes later, a support check can be requested.",
      },
    ],
  },
  "balcony-invisible-grills": {
    eyebrow: "Balcony Invisible Grills in Chennai",
    title: "Balcony invisible grills for high-rise safety and clear views",
    lead:
      "Balcony invisible grills protect the open edge while keeping the balcony bright and view-friendly. They are planned for homes that want safety without bulky metal grill work.",
    intro: [
      "A balcony is often the best open space in an apartment. The safety work should not spoil the view or make the facade look heavy.",
      "We plan cable spacing, side channels, frame lines, floor height, and pet movement before installing balcony invisible grills in Chennai.",
    ],
    sections: [
      {
        title: "Open balcony feel",
        body:
          "The cable line keeps the balcony visually light while creating a clear safety boundary for children and pets.",
      },
      {
        title: "Facade-friendly finish",
        body:
          "Straight cable alignment and clean side fixing help the work look neat from inside and outside the apartment.",
      },
      {
        title: "Measured tension",
        body:
          "The cables are tensioned evenly so the installation feels stable and does not look uneven after use.",
      },
    ],
    highlights: ["Clear balcony view", "Cable tension check", "Pet-safe edge", "Premium finish"],
    process: [
      "Share balcony size and photos.",
      "Check edge clearance, side fixing, and floor height.",
      "Mark cable lines and drilling points.",
      "Install channels, cables, and final tension.",
    ],
    faq: [
      {
        question: "Will invisible grills block the balcony view?",
        answer:
          "They are designed to keep the view open. The cables are visible up close, but they feel much lighter than bulky metal grills.",
      },
      {
        question: "Can they be used for pets?",
        answer:
          "Yes. Cable spacing and side closure should be planned around pet movement and balcony edge clearance.",
      },
    ],
  },
  "window-safety-nets": {
    eyebrow: "Window Safety Nets in Chennai",
    title: "Window safety nets for safer ventilation and bird control",
    lead:
      "Window safety nets help families keep windows open with more confidence. They are useful for child safety, pet safety, and reducing bird entry through open gaps.",
    intro: [
      "Windows in Chennai homes are often kept open for air. That can become a concern when children can reach the sill, pets sit near the frame, or birds enter through kitchen and utility windows.",
      "We check the window swing, frame depth, grill gap, hinge movement, and cleaning access before fixing the net.",
    ],
    sections: [
      {
        title: "Ventilation-friendly coverage",
        body:
          "The net is positioned so the window can still ventilate and the room does not feel blocked.",
      },
      {
        title: "Planned around shutters and grills",
        body:
          "Every window opens differently. The fixing line has to respect shutters, hinges, grills, and cleaning access.",
      },
      {
        title: "Useful for birds and children",
        body:
          "The same window can need child safety and bird control. The site check confirms the right net and edge closure.",
      },
    ],
    highlights: ["Window swing check", "Child-safe ventilation", "Bird entry reduction", "Neat frame fixing"],
    process: [
      "Send photos of each window.",
      "Check opening style, frame type, and grill gap.",
      "Plan anchor points without blocking movement.",
      "Install with tight corners and explain cleaning care.",
    ],
    faq: [
      {
        question: "Can the window still open after net installation?",
        answer:
          "The fixing is planned around the window style. The site visit confirms how much movement can be retained.",
      },
      {
        question: "Is it useful for kitchen windows?",
        answer:
          "Yes. Kitchen and utility windows often need bird control and safe ventilation together.",
      },
    ],
  },
  "duct-area-safety-nets": {
    eyebrow: "Duct Area Safety Nets in Chennai",
    title: "Duct area safety nets for shafts, voids, and utility openings",
    lead:
      "Duct area nets close unsafe service openings while keeping maintenance access practical. The net has to work around pipes, depth, drainage, and future service work.",
    intro: [
      "Ducts and shafts can collect waste, attract birds, and create unsafe open gaps in apartment buildings. A simple cover is not enough if plumbing or AC access is blocked later.",
      "We check pipe clearance, shaft depth, fixing edges, drainage, and maintenance routes before deciding the net layout.",
    ],
    sections: [
      {
        title: "Service access stays important",
        body:
          "The installation should protect the opening while still allowing future cleaning, plumbing, or AC work where needed.",
      },
      {
        title: "Strong border fixing",
        body:
          "Duct openings often have awkward edges. The border line is planned carefully so the net does not sag into the shaft.",
      },
      {
        title: "Cleaner utility spaces",
        body:
          "A properly covered duct reduces waste fall, bird entry, and daily maintenance problems around utility corners.",
      },
    ],
    highlights: ["Pipe clearance", "Maintenance access", "Shaft-safe mesh", "Strong perimeter fixing"],
    process: [
      "Share duct photos from a safe distance.",
      "Measure opening depth, pipe layout, and access points.",
      "Plan border fixing and service access.",
      "Install with clear edges and practical overlap.",
    ],
    faq: [
      {
        question: "Can maintenance workers still access the duct?",
        answer:
          "Access can be planned into the layout. The final method depends on the shaft shape and service requirement.",
      },
      {
        question: "Will it stop birds entering the shaft?",
        answer:
          "Yes, when the entry points and side gaps are properly closed during installation.",
      },
    ],
  },
  "building-covering-safety-nets": {
    eyebrow: "Building Covering Safety Nets in Chennai",
    title: "Building covering nets for facades, shafts, and open sides",
    lead:
      "Building covering nets are for larger areas where a small patch will not work. They need proper span measurement, anchor planning, wind awareness, and clean sectioning.",
    intro: [
      "Some buildings need wider safety coverage for open sides, shafts, facade gaps, or maintenance edges. If the work is not planned in sections, it can look uneven and become difficult to inspect.",
      "We check coverage span, anchor strength, access height, wind exposure, and building rules before confirming the method.",
    ],
    sections: [
      {
        title: "Large-area planning",
        body:
          "The coverage is divided into sensible sections so tension, border support, and inspection points can be handled properly.",
      },
      {
        title: "Anchor strength matters",
        body:
          "Wide netting depends on stable anchor points. Weak surfaces are checked before the final quote is given.",
      },
      {
        title: "Organized building finish",
        body:
          "The goal is a clean building-wide solution, not a set of uneven temporary patches across the facade.",
      },
    ],
    highlights: ["Large span coverage", "Anchor planning", "Wind-aware fixing", "Facade-friendly layout"],
    process: [
      "Share building photos and coverage requirement.",
      "Check height, access, and anchor surface.",
      "Plan sections, borders, and installation timing.",
      "Install with inspection access in mind.",
    ],
    faq: [
      {
        question: "Do building covering nets need special access?",
        answer:
          "Often yes. Access depends on height, facade shape, and safety rules at the site.",
      },
      {
        question: "Can the work be done for apartments and commercial buildings?",
        answer:
          "Yes. The site visit decides the material, fixing pattern, and access method for each building.",
      },
    ],
  },
  "terrace-safety-nets": {
    eyebrow: "Terrace Safety Nets in Chennai",
    title: "Terrace safety nets for rooftops, play areas, and open edges",
    lead:
      "Terrace safety nets protect open rooftop edges while keeping the terrace usable for walking, drying, play, and maintenance.",
    intro: [
      "Terraces are exposed to sun, rain, and wind, so the fixing has to be stronger than a sheltered indoor opening. The layout also has to respect drainage and walking paths.",
      "We check parapet height, wind direction, anchor surface, drainage points, and how the terrace is used before installing.",
    ],
    sections: [
      {
        title: "Open-edge protection",
        body:
          "The net is planned around the actual exposed edge, not just the easiest wall to drill.",
      },
      {
        title: "Weather-ready fixing",
        body:
          "Terrace nets need strong borders and wind-aware tension because the area is more exposed than balconies or windows.",
      },
      {
        title: "Useful for families and shared spaces",
        body:
          "The installation can support safer rooftop movement, play corners, pet areas, and common terrace use.",
      },
    ],
    highlights: ["Parapet check", "Wind-aware tension", "Rooftop access", "Play-area safety"],
    process: [
      "Share terrace photos and open-edge details.",
      "Check parapet height, drainage, and anchor surface.",
      "Plan border line and wind exposure.",
      "Install and explain post-weather checks.",
    ],
    faq: [
      {
        question: "Will terrace nets handle weather?",
        answer:
          "The material and fixing are selected with sun, rain, and wind exposure in mind. Periodic checks are still useful after heavy weather.",
      },
      {
        question: "Can terrace nets be used for play areas?",
        answer:
          "Yes. The layout should consider movement, height, and the direction where children or balls may approach the edge.",
      },
    ],
  },
  "cricket-practice-nets": {
    eyebrow: "Cricket Practice Nets in Chennai",
    title: "Cricket practice nets for terraces, academies, and communities",
    lead:
      "Cricket practice nets keep balls within the practice area so players can train without disturbing nearby homes, windows, or open spaces.",
    intro: [
      "A useful cricket net is not just a mesh wall. It has to match ball direction, player movement, support height, side escape, and the ground or terrace surface.",
      "We plan practice lanes for terraces, academies, communities, and compact play areas based on real use.",
    ],
    sections: [
      {
        title: "Ball direction comes first",
        body:
          "The net is positioned around where the ball travels, including side hits and bounce direction.",
      },
      {
        title: "Support and height planning",
        body:
          "Pole spacing, top line support, and mesh height are checked so the net can handle regular practice.",
      },
      {
        title: "Comfortable training space",
        body:
          "The lane should control the ball without making batting, bowling, or movement feel cramped.",
      },
    ],
    highlights: ["Practice lane planning", "Impact-ready mesh", "Pole support", "Side coverage"],
    process: [
      "Share the available space and practice type.",
      "Check ball direction, height, and nearby risk points.",
      "Plan supports, mesh grade, and lane size.",
      "Install and inspect impact zones.",
    ],
    faq: [
      {
        question: "Can cricket nets be installed on terraces?",
        answer:
          "Yes, if the terrace has suitable space and fixing support. The visit checks safety, height, and anchoring.",
      },
      {
        question: "Do you make academy practice nets?",
        answer:
          "Yes. The size, mesh grade, and support system are planned around practice intensity and available space.",
      },
    ],
  },
  "bird-spikes-installation": {
    eyebrow: "Bird Spikes Installation in Chennai",
    title: "Bird spikes for ledges, parapets, AC edges, and pipes",
    lead:
      "Bird spikes stop birds from settling on narrow perch lines. They are best for ledges, parapets, pipes, sign boards, and AC edges where birds repeatedly sit.",
    intro: [
      "Spikes are not meant to cover a large opening like a net. They work when the problem is a narrow perch where birds sit and leave droppings.",
      "We check perch width, surface condition, access height, cleaning needs, and visibility before installing the spike strip.",
    ],
    sections: [
      {
        title: "Placed only where birds perch",
        body:
          "The strip is installed on the real sitting line. This keeps the work discreet and avoids unnecessary clutter.",
      },
      {
        title: "Surface preparation matters",
        body:
          "Dust, droppings, and loose surfaces can weaken fixing. The ledge should be cleaned before installation.",
      },
      {
        title: "Good for repeat bird sitting",
        body:
          "Spikes are useful when birds keep returning to the same ledge, pipe, AC top, parapet, or signage edge.",
      },
    ],
    highlights: ["Perch line check", "Ledge cleaning", "Discreet placement", "Reduced droppings"],
    process: [
      "Share photos of the bird sitting area.",
      "Check ledge width and surface condition.",
      "Clean and mark the spike line.",
      "Fix the strips neatly and check alignment.",
    ],
    faq: [
      {
        question: "Are bird spikes suitable for balconies?",
        answer:
          "They are suitable for narrow ledges or parapets. If birds enter the full balcony, a safety net may be better.",
      },
      {
        question: "Will spikes look messy?",
        answer:
          "When placed only on the actual perch line, they stay fairly discreet and do not clutter the elevation.",
      },
    ],
  },
  "cloth-hanger-installation": {
    eyebrow: "Cloth Hanger Installation in Chennai",
    title: "Cloth hanger installation for balconies and utility spaces",
    lead:
      "A good cloth hanger setup saves drying space without blocking walking clearance, windows, doors, or balcony safety work.",
    intro: [
      "Many Chennai homes need better drying space but do not want the balcony or utility area to feel crowded. Ceiling strength, pulley reach, and rod placement make a big difference.",
      "We check the ceiling surface, available height, walking path, wet-floor movement, and window swing before fixing the hanger system.",
    ],
    sections: [
      {
        title: "Practical rod placement",
        body:
          "The rods should be placed where clothes can dry without blocking daily movement or window use.",
      },
      {
        title: "Smooth pulley use",
        body:
          "Pulley height and reach are checked so the system is comfortable for regular family use.",
      },
      {
        title: "Clean utility finish",
        body:
          "A neat installation keeps the ceiling line organized and avoids clutter around the balcony or utility space.",
      },
    ],
    highlights: ["Ceiling strength check", "Pulley reach", "Rod alignment", "Daily drying comfort"],
    process: [
      "Share balcony or utility photos.",
      "Check ceiling strength, height, and walking clearance.",
      "Plan rod count, pulley position, and mounting points.",
      "Install and explain safe load use.",
    ],
    faq: [
      {
        question: "Can cloth hangers be installed in small balconies?",
        answer:
          "Yes, if the ceiling and clearance are suitable. The rod count and position are planned around the available space.",
      },
      {
        question: "How do we maintain the pulley system?",
        answer:
          "Keep the pulley clean, avoid overloading rods, and report any looseness early.",
      },
    ],
  },
} satisfies Record<ServiceSlug, ChennaiServiceManualBasePage>;

const chennaiServiceManualGuides = {
  "balcony-safety-nets": [
    {
      eyebrow: "Price Guide",
      title: "Balcony safety net price in Chennai",
      intro:
        "For most Chennai balconies, safety net work usually starts around Rs. 18-45 per sq.ft. The final price depends on balcony height, net grade, rope border, drilling access, side returns, and whether the opening needs extra corner sealing. A small utility balcony and a wide view-facing balcony should not be priced the same, because the fixing line and time on site are different.",
      points: [
        {
          label: "Small balcony openings",
          text:
            "Compact apartment balconies are often quick to cover, but they still need proper hooks, tension, and edge finishing. A lower quote can become poor value if the installer skips side pockets or leaves loose corners near the railing return.",
        },
        {
          label: "Large and curved balconies",
          text:
            "Wide balconies, L-shaped edges, and curved railings need more measurement time and a cleaner rope line. The quote may be higher because the team has to keep the net tight without pulling the mesh out of shape.",
        },
        {
          label: "High-floor access",
          text:
            "Upper-floor work needs safer drilling, careful tool handling, and sometimes more time for setup. Chennai towers with wind-facing balconies may also need stronger border rope and closer anchor spacing for a steadier finish.",
        },
        {
          label: "Material choice",
          text:
            "UV-stabilized nylon net is usually enough for regular balcony protection. Homes that get heavy sun, rain splash, or constant bird movement may need a stronger grade, and that changes the price more than the basic area measurement.",
        },
        {
          label: "Clear quotation",
          text:
            "A useful quote should mention net type, mesh size, rope border, hook spacing, installation method, and included cleaning or removal work. That makes it easier to compare offers without guessing what each person is actually installing.",
        },
      ],
    },
    {
      eyebrow: "Comparison",
      title: "How to compare balcony safety nets",
      intro:
        "Balcony safety nets can look similar in photos, but the life of the work is decided by the fixing, tension, rope border, and corner treatment. When comparing two quotes, look beyond the per-square-foot number and check how the installer plans to close side gaps, maintain airflow, and leave the balcony usable for daily routines.",
      points: [
        {
          label: "Net versus invisible grill",
          text:
            "A safety net is usually more budget-friendly and works well for children, pets, and bird control. Invisible grills cost more, but they give a premium open-view finish. For rented homes or quick protection, netting is often the practical choice.",
        },
        {
          label: "Loose net versus tight net",
          text:
            "A loose net may look acceptable on day one, but it can sag near the middle and collect dust. A tight net with a proper border keeps the balcony cleaner, safer, and easier to inspect after the monsoon.",
        },
        {
          label: "Cheap hooks versus planned anchors",
          text:
            "The hook line matters as much as the net. Hooks placed too far apart can leave open pockets, while too many unnecessary holes can spoil the wall. Good work balances strength, neatness, and future removal.",
        },
        {
          label: "Bird control plus fall safety",
          text:
            "Some balconies need both child safety and pigeon control. In that case the installer must check ledges, AC pipe gaps, and side walls, not only the front railing. Otherwise birds may still enter from a small corner.",
        },
        {
          label: "Finish inside the home",
          text:
            "The best balcony net does not shout for attention. It should sit in a straight line, avoid messy knots, keep the view open, and allow plants, drying space, and cleaning without daily irritation.",
        },
      ],
    },
    {
      eyebrow: "Local Chennai Points",
      title: "What matters for Chennai balconies",
      intro:
        "Chennai balconies face a mix of sun, sea air, dust, heavy rain, and apartment society rules. A balcony safety net planned for the city should respect all of that. The same net line that works in a quiet low-rise may not suit a high-rise balcony on OMR, ECR, Velachery, Porur, Anna Nagar, or T Nagar.",
      points: [
        {
          label: "Coastal and wind-facing homes",
          text:
            "Homes near ECR, Besant Nagar, Thiruvanmiyur, and coastal pockets get stronger breeze and salt exposure. A tighter border and rust-aware fixtures help the installation stay neater for longer in these conditions.",
        },
        {
          label: "Dense apartment areas",
          text:
            "Velachery, Medavakkam, Pallikaranai, Perungudi, and Sholinganallur often have compact balconies with laundry use. The net should protect the edge without blocking cloth drying, window swing, or water drain cleaning.",
        },
        {
          label: "Older building walls",
          text:
            "Areas such as Mylapore, Triplicane, T Nagar, and Purasawalkam can have older plaster or mixed wall surfaces. The fixing method must be chosen carefully so the hooks hold without cracking the edge.",
        },
        {
          label: "Society timing",
          text:
            "Many Chennai apartments allow drilling only during fixed hours. Confirming visit time, lift access, parking, and security entry before the team arrives keeps the work smooth and avoids repeat visits.",
        },
        {
          label: "Monsoon cleaning",
          text:
            "Balconies collect dust and rain splash during the season. The net layout should leave enough access to wipe railings, clear drain points, and inspect the bottom edge after heavy weather.",
        },
      ],
    },
    {
      eyebrow: "Before Booking",
      title: "Details to share before a balcony safety net visit",
      intro:
        "A faster quote is possible when the team sees the real balcony before visiting. Photos from inside the room, the full railing, the ceiling edge, both side walls, and the floor corner help decide whether the job is simple or needs extra work. This avoids surprise charges and gives a cleaner installation plan.",
      points: [
        {
          label: "Measure the opening roughly",
          text:
            "A quick width and height helps with the first estimate. The final measurement will still be taken on site, but even rough dimensions help identify whether the balcony is small, medium, large, or unusually shaped.",
        },
        {
          label: "Show the side gaps",
          text:
            "Many balcony problems happen at the side returns, not the front. Send photos of left and right corners, AC pipes, drain lines, and wall gaps so the quotation includes proper sealing from the start.",
        },
        {
          label: "Mention children, pets, or birds",
          text:
            "The reason for installation changes the details. A child-safety balcony, a pet balcony, and a pigeon-control balcony may use the same net material but need different gap planning and tension.",
        },
        {
          label: "Clear the balcony before work",
          text:
            "Moving plants, stands, old ropes, and stored items before the visit saves time. It also lets the installer place hooks in the correct line instead of working around temporary obstacles.",
        },
        {
          label: "Ask about after-care",
          text:
            "Good installers explain how to clean the net, what not to hang from it, and when to call for re-tensioning or hook inspection. That small conversation protects the work after the team leaves.",
        },
      ],
    },
  ],
  "children-safety-nets": [
    {
      eyebrow: "Price Guide",
      title: "Children safety net price in Chennai",
      intro:
        "Children safety net work in Chennai generally starts around Rs. 20-50 per sq.ft., depending on opening size, floor height, fixing surface, mesh strength, and the number of edges that need protection. The price should be based on the real risk points inside the home, not just a simple width and height calculation.",
      points: [
        {
          label: "Balcony and window count",
          text:
            "Homes with one balcony cost less than homes that need balcony, bedroom window, kitchen window, and utility edge protection. A combined visit can be more efficient because measurements, drilling, and material planning are handled together.",
        },
        {
          label: "Gap risk",
          text:
            "Children safety jobs need tighter attention to low gaps, side corners, climbable furniture, and rail spacing. If extra sealing is needed near grills or pipes, the quote may be higher but the result is safer.",
        },
        {
          label: "Material strength",
          text:
            "A basic net may be enough for bird control, but child safety needs better tension and reliable border support. The installer should explain the mesh, rope, and hook choice in simple language.",
        },
        {
          label: "Rental homes",
          text:
            "Rental flats often need neat fixing that protects the wall finish and can be removed later with less damage. This may change the hook plan and the time spent on careful drilling.",
        },
        {
          label: "Final site quote",
          text:
            "Photos help with an estimate, but a proper quote is confirmed only after checking sill height, railing gaps, wall strength, and access. That is especially important for families with toddlers.",
        },
      ],
    },
    {
      eyebrow: "Comparison",
      title: "Children safety net versus other safety options",
      intro:
        "A children safety net is meant to reduce open-edge risk while keeping the home livable. It should not turn the balcony into a closed cage or make windows hard to clean. Compare options by protection, comfort, removability, and how naturally the installation fits into daily family use.",
      points: [
        {
          label: "Net versus fixed grill",
          text:
            "A fixed grill is strong but changes the look and may block cleaning or emergency access. A safety net is lighter, faster to install, and works well when the family wants protection without heavy metal work.",
        },
        {
          label: "Net versus invisible grill",
          text:
            "Invisible grills give a premium finish and strong cable protection, but they cost more. Children safety nets are usually better for urgent protection, rental homes, and multiple openings with a moderate budget.",
        },
        {
          label: "Front-only versus full-edge protection",
          text:
            "Some quotes only cover the obvious front opening. A better child-safety plan checks side gaps, low corners, and places where a child could reach or climb. Those details matter more than a neat photo.",
        },
        {
          label: "Tight mesh versus open mesh",
          text:
            "The mesh should be tight enough to stop unsafe movement but open enough for air and light. Very loose work feels cheaper at first, but it can stretch, sag, and invite pulling.",
        },
        {
          label: "Safety talk after installation",
          text:
            "No net replaces supervision. A good service explains what the net can handle, what children should not do near it, and why heavy pulling or climbing should be avoided.",
        },
      ],
    },
    {
      eyebrow: "Local Chennai Points",
      title: "Planning child safety around Chennai homes",
      intro:
        "Chennai homes vary widely: compact flats in Velachery, premium towers on OMR, older apartments in Mylapore, and independent houses in Anna Nagar or Tambaram all need different fixing plans. The safety net should suit the building, the family routine, and the age of the children using the space.",
      points: [
        {
          label: "High-rise apartments",
          text:
            "OMR, Perungudi, Sholinganallur, Porur, and Pallikaranai have many high-rise flats where balcony height and wind matter. Strong tension and sensible hook spacing are important for a calm, secure finish.",
        },
        {
          label: "Compact family balconies",
          text:
            "In areas like Velachery, Madipakkam, and Medavakkam, balconies are often used for laundry, plants, and storage. The net must protect the child without making the balcony unusable for the family.",
        },
        {
          label: "Older window frames",
          text:
            "Older buildings can have different window styles and plaster quality. The installer should inspect the frame and wall before drilling, especially when the opening is close to a bed or study table.",
        },
        {
          label: "School-day scheduling",
          text:
            "Many families prefer installation while children are at school or away from the work area. Planning the timing reduces dust, noise stress, and interruptions inside the home.",
        },
        {
          label: "Furniture placement",
          text:
            "Local site checks should include furniture near the balcony or window. A sofa, cot, shoe rack, or study table can turn a protected-looking opening into a reachable edge for a child.",
        },
      ],
    },
    {
      eyebrow: "Before Booking",
      title: "What parents should share before the visit",
      intro:
        "The best child-safety installation starts with a simple conversation about the home. The team should know the child's age, which openings are used most, where furniture sits, and whether pets also use the balcony. That helps the quote focus on actual safety instead of only square feet.",
      points: [
        {
          label: "Send room photos",
          text:
            "A photo from inside the room toward the window or balcony shows sill height, nearby furniture, curtain rods, and usable space. These details are easy to miss in close-up photos.",
        },
        {
          label: "Mark daily-use openings",
          text:
            "Tell the team which windows are opened every day, which balcony door is used for laundry, and which edge worries you most. Installation should protect the important spots without blocking daily comfort.",
        },
        {
          label: "Mention pets too",
          text:
            "Many child-safety homes also have cats or small dogs. Pet movement can change the corner detailing and mesh tension, especially where animals sit near the railing or sill.",
        },
        {
          label: "Ask for a neat finish",
          text:
            "Child-safety work should not leave sharp hooks, hanging rope ends, or messy knots at reachable height. A clean finish makes the installation safer and better looking.",
        },
        {
          label: "Keep expectations practical",
          text:
            "The net is a protective layer, not a play surface. After installation, children should still be guided not to climb, jump, pull, or hang objects from the net.",
        },
      ],
    },
  ],
  "pigeon-safety-nets": [
    {
      eyebrow: "Price Guide",
      title: "Pigeon safety net price in Chennai",
      intro:
        "Pigeon safety net installation in Chennai usually starts around Rs. 18-45 per sq.ft. The final quote depends on balcony depth, ledge access, waste cleaning, nesting corners, pipe gaps, and whether the net must cover only the front opening or a full side-return shape. Bird-control work needs careful edge closure, because even a small open pocket can bring the problem back.",
      points: [
        {
          label: "Cleaning before netting",
          text:
            "If the balcony has heavy droppings, feathers, or nesting material, cleaning and preparation can affect the quote. Netting over an unclean ledge leaves smell and stains trapped behind the new work.",
        },
        {
          label: "Ledge and AC gaps",
          text:
            "Pigeons often enter through AC pipe routes, side ledges, and small wall pockets. Covering only the front railing may be cheaper, but it may not solve the actual entry path.",
        },
        {
          label: "Full balcony sealing",
          text:
            "A full seal costs more than a simple straight net because the installer spends more time closing corners, side returns, ceiling pockets, and drain-line gaps without blocking maintenance access.",
        },
        {
          label: "Net grade",
          text:
            "Regular UV-stabilized net works for many homes. Stronger material may be suggested when birds sit heavily on the same ledge, when the balcony faces harsh sun, or when the opening is wide.",
        },
        {
          label: "Quote clarity",
          text:
            "A good quote should separate cleaning, netting, extra corner work, and difficult access. That helps you compare fairly instead of choosing a low number that skips the messy part.",
        },
      ],
    },
    {
      eyebrow: "Comparison",
      title: "Pigeon net versus spikes and other controls",
      intro:
        "Pigeon control is not one-size-fits-all. Nets, spikes, and cleaning each solve a different part of the problem. A balcony with regular bird entry usually needs a net, while a narrow ledge may only need spikes. Compare by bird route, cleaning access, appearance, and how easy it is to maintain after installation.",
      points: [
        {
          label: "Net versus bird spikes",
          text:
            "A net blocks entry into a balcony, shaft, or window pocket. Spikes stop birds from sitting on a ledge. If birds are entering the balcony, spikes alone will not close the opening.",
        },
        {
          label: "Net versus repeated cleaning",
          text:
            "Cleaning removes the smell and waste, but it does not stop birds from returning. Netting after proper cleaning gives a longer-term result and reduces the need for frequent deep cleaning.",
        },
        {
          label: "Transparent finish versus thick mesh",
          text:
            "A thinner clear-looking net can keep the balcony view lighter, but the material must still be suitable for the opening. Very cheap mesh may stretch faster in sun and rain.",
        },
        {
          label: "Temporary closure versus permanent planning",
          text:
            "Some quick fixes tie loose net over one corner. A better installation follows the full entry route and leaves the balcony easy to clean, inspect, and use after the birds stop coming in.",
        },
        {
          label: "Side gaps matter most",
          text:
            "Birds are patient. If a side wall, pipe gap, or ceiling edge is open, they will find it. The comparison should focus on complete closure, not just the visible front face.",
        },
      ],
    },
    {
      eyebrow: "Local Chennai Points",
      title: "Pigeon control for Chennai apartment pockets",
      intro:
        "Chennai has many apartment clusters where pigeons settle on AC ledges, service ducts, balcony corners, and unused windows. Areas near markets, food streets, older buildings, and dense towers often see repeat bird movement. The installation should be planned after reading the local building shape, not just the balcony size.",
      points: [
        {
          label: "AC ledges and ducts",
          text:
            "OMR, Velachery, Perungudi, and Medavakkam apartments often have AC outdoor units near balcony and window lines. Nets should close bird routes without blocking technician access to the unit.",
        },
        {
          label: "Older central areas",
          text:
            "Mylapore, Triplicane, T Nagar, and Purasawalkam may have narrow balconies, old ledges, and shared walls. The team should check wall condition before drilling and avoid messy exterior lines.",
        },
        {
          label: "Coastal humidity",
          text:
            "Homes near Thiruvanmiyur, Besant Nagar, and ECR need rust-aware fixing choices. Salt air and rain splash can reduce the life of poor-quality hooks and weak rope borders.",
        },
        {
          label: "Society cleaning rules",
          text:
            "Some communities have strict rules for balcony cleaning and exterior work. Confirming permission, work hours, and waste disposal before installation keeps the job smooth.",
        },
        {
          label: "Unused balconies",
          text:
            "Balconies left closed for long periods become nesting spots faster. In Chennai's dusty weather, a net should be paired with a proper first cleaning so the area feels usable again.",
        },
      ],
    },
    {
      eyebrow: "Before Booking",
      title: "Photos that help pigeon net quotation",
      intro:
        "For pigeon control, photos are more useful when they show the bird route. Send the full balcony, ceiling edge, ledge, AC pipes, side walls, droppings, and any nest area. The quote becomes more accurate when the team can see where birds sit, where they enter, and what must stay reachable after the work.",
      points: [
        {
          label: "Show the dirty spots",
          text:
            "It may feel awkward to send dirty balcony photos, but they help. Dropping patterns show where pigeons sit, and that often reveals the real entry point better than a clean front view.",
        },
        {
          label: "Include ceiling corners",
          text:
            "Many nests are tucked into top corners or behind pipe lines. A front photo alone can miss them, so include the ceiling edge and both upper side returns.",
        },
        {
          label: "Mention past fixes",
          text:
            "If you already tried tape, mesh, spikes, or cleaning, tell the team. Failed attempts show which routes birds keep using and help avoid repeating the same mistake.",
        },
        {
          label: "Plan access after netting",
          text:
            "AC service, drain cleaning, and window cleaning may still be needed. A smart net line protects the opening while leaving planned access where the home needs it.",
        },
        {
          label: "Ask for smell control advice",
          text:
            "Netting stops entry, but smell from old waste may need proper cleaning first. Ask whether cleaning is included or separate before confirming the final price.",
        },
      ],
    },
  ],
  "window-invisible-grills": [
    {
      eyebrow: "Price Guide",
      title: "Window invisible grill price in Chennai",
      intro:
        "Window invisible grills in Chennai usually start around Rs. 180-350 per sq.ft., depending on cable grade, frame condition, number of window panels, drilling access, cable spacing, and finish expectations. The price is higher than a safety net because the work uses stainless steel cables, tensioning hardware, and a more precise alignment process.",
      points: [
        {
          label: "Cable spacing",
          text:
            "Closer cable spacing improves safety for children and pets, but it can use more cable and hardware. The right spacing depends on the window height, sill level, and family use.",
        },
        {
          label: "Frame and wall strength",
          text:
            "Invisible grills need a strong fixing surface. If the window frame, side wall, or sill edge is weak, the installer may need a different anchor plan, and that can affect price.",
        },
        {
          label: "Number of windows",
          text:
            "Multiple windows in one visit can be more efficient because tools, cable, and tensioning work are handled together. A single small window may still have a basic visit and setup cost.",
        },
        {
          label: "Premium finish",
          text:
            "A neat invisible grill should keep cable lines straight and hardware clean. Premium finishing takes more time than quick cable tying, but it is what makes the window look modern.",
        },
        {
          label: "Price confirmation",
          text:
            "The final quote should mention cable type, spacing, frame fixing, hardware, and installation warranty or support. Avoid comparing only the lowest number without checking these details.",
        },
      ],
    },
    {
      eyebrow: "Comparison",
      title: "Window invisible grill versus nets and metal grills",
      intro:
        "Window invisible grills are chosen when the home needs safety but does not want a heavy grill look. They are cleaner than many fixed grills and stronger-looking than netting, but they need correct tension and fixing. Compare the options by view, strength, maintenance, and the type of window opening.",
      points: [
        {
          label: "Invisible grill versus safety net",
          text:
            "A safety net is more budget-friendly and works for temporary or rental needs. An invisible grill costs more but gives a premium finish, better open-view appearance, and a more permanent window safety feel.",
        },
        {
          label: "Invisible grill versus metal grill",
          text:
            "Traditional metal grills are strong but visually heavy and may affect the facade. Invisible grills keep the room brighter and the window cleaner while still adding a safety barrier.",
        },
        {
          label: "Cable quality",
          text:
            "Cheap cable can discolor, loosen, or feel rough at the ends. A good comparison checks stainless steel grade, coating, hardware, and how the cable is tensioned after installation.",
        },
        {
          label: "View quality",
          text:
            "The point of an invisible grill is not that it disappears fully, but that it stays visually light. Straight cable lines and clean hardware make a big difference from inside the room.",
        },
        {
          label: "Maintenance access",
          text:
            "Window cleaning, mosquito mesh, curtain movement, and AC service should be considered before installation. A neat-looking grill that blocks daily maintenance can become frustrating.",
        },
      ],
    },
    {
      eyebrow: "Local Chennai Points",
      title: "Window safety for Chennai flats and homes",
      intro:
        "Chennai windows face sun, dust, coastal air, and different building rules. A window invisible grill must suit the frame type, the room use, and the neighborhood setting. High-rise windows in OMR do not behave like older street-facing windows in central Chennai, so measurement and fixing need local judgement.",
      points: [
        {
          label: "High-rise wind",
          text:
            "Windows in OMR, Perungudi, Sholinganallur, and Porur towers can face stronger wind pressure. Cable tension, anchor strength, and frame condition should be checked carefully before finalizing the quote.",
        },
        {
          label: "Older frames",
          text:
            "Mylapore, T Nagar, Triplicane, and other older areas may have mixed wood, aluminium, or repaired frames. The installer should inspect the fixing surface instead of assuming a standard anchor will hold.",
        },
        {
          label: "Coastal exposure",
          text:
            "Besant Nagar, Thiruvanmiyur, ECR, and nearby pockets need rust-aware hardware choices. A cheaper fitting can look fine at first but age poorly in salt-heavy air.",
        },
        {
          label: "Room comfort",
          text:
            "Bedroom, kitchen, and study windows need different planning. The grill should not block curtain tracks, window swing, exhaust access, or regular cleaning in Chennai's dusty weather.",
        },
        {
          label: "Apartment permission",
          text:
            "Some societies restrict exterior changes. Invisible grills are often accepted because the look is light, but it is still better to confirm rules before drilling.",
        },
      ],
    },
    {
      eyebrow: "Before Booking",
      title: "What to check before installing window invisible grills",
      intro:
        "A good invisible grill starts with measurement and frame reading. Send photos of the full window from inside, the side frame, sill, latch area, and any existing mosquito mesh. This lets the team decide cable direction, spacing, and hardware without making the window harder to use.",
      points: [
        {
          label: "Check window operation",
          text:
            "Sliding, casement, and fixed windows need different planning. Tell the team how the window opens and which panel you use daily so the grill does not interfere with movement.",
        },
        {
          label: "Mention child or pet safety",
          text:
            "If the main concern is a child or pet near the window, spacing and height should be planned more carefully. A decorative cable line is not enough for real safety.",
        },
        {
          label: "Show the wall edges",
          text:
            "Photos of both side edges help identify whether anchors can be placed cleanly. Weak plaster, tile, or narrow frame edges may need a different method.",
        },
        {
          label: "Ask about cable tension",
          text:
            "The team should explain how the cable is tightened and what to do if any line loosens later. Proper tension is the difference between a premium grill and a loose cable job.",
        },
        {
          label: "Plan cleaning",
          text:
            "Invisible grills still collect dust on cable lines. Ask how to wipe them and how window cleaning should be handled after installation.",
        },
      ],
    },
  ],
  "balcony-invisible-grills": [
    {
      eyebrow: "Price Guide",
      title: "Balcony invisible grill price in Chennai",
      intro:
        "Balcony invisible grills in Chennai usually start around Rs. 180-380 per sq.ft., depending on cable grade, balcony width, railing or wall condition, height, cable spacing, and the finish needed for the facade. It is a premium service compared with netting because it uses tensioned stainless steel cable and careful alignment across a larger opening.",
      points: [
        {
          label: "Balcony width",
          text:
            "Wide balconies need longer cable runs and better tension control. If the cable span is not planned well, it can feel loose or uneven, so the installation time and hardware may increase.",
        },
        {
          label: "Cable and hardware grade",
          text:
            "The cable, coating, turnbuckles, and anchors decide how the grill ages. A lower quote may use weaker hardware, while a better quote explains what is being installed and why.",
        },
        {
          label: "Facade finish",
          text:
            "Balcony invisible grills are visible from outside, especially in apartment towers. Clean alignment, discreet hardware, and neat edge work take extra care but keep the building look premium.",
        },
        {
          label: "Height and access",
          text:
            "High-floor balconies need careful tool handling and safe drilling. Access restrictions, society work hours, and lift movement can affect the practical price and schedule.",
        },
        {
          label: "Final measurement",
          text:
            "A phone estimate can give a range, but final pricing needs site measurement. The team must check railing height, side wall strength, cable direction, and usable balcony space.",
        },
      ],
    },
    {
      eyebrow: "Comparison",
      title: "Balcony invisible grill versus balcony net",
      intro:
        "Both balcony safety nets and balcony invisible grills protect open edges, but they suit different expectations. Nets are practical and economical. Invisible grills are chosen when the customer wants long-term safety with a cleaner view and a more premium exterior finish. The right choice depends on budget, building rules, and lifestyle.",
      points: [
        {
          label: "Budget difference",
          text:
            "A net is usually the lower-cost option and works well for rental homes or quick safety. Invisible grills cost more but feel more permanent and visually lighter for premium apartments.",
        },
        {
          label: "View and airflow",
          text:
            "Both options keep airflow, but invisible grills preserve the view better. A well-installed cable line is easier on the eye than mesh across the full balcony opening.",
        },
        {
          label: "Child and pet safety",
          text:
            "Invisible grills can be excellent for child and pet safety when spacing and tension are correct. The installer should not use decorative spacing where a safety-first layout is needed.",
        },
        {
          label: "Bird control",
          text:
            "Invisible grills reduce fall risk but do not fully stop small birds from entering. If pigeon control is the main issue, a net or separate bird-control plan may be needed.",
        },
        {
          label: "Long-term appearance",
          text:
            "Cable alignment and hardware quality decide whether the balcony still looks premium after months of sun and rain. A cheaper job can lose its clean look quickly if tension is poor.",
        },
      ],
    },
    {
      eyebrow: "Local Chennai Points",
      title: "Balcony invisible grills for Chennai apartments",
      intro:
        "Chennai balcony invisible grill work needs attention to apartment society rules, coastal weather, high-rise wind, and facade consistency. Many buildings want safety upgrades but do not want heavy metal grills or dark netting. A light cable finish often suits modern homes, especially when the installation is measured properly.",
      points: [
        {
          label: "OMR and high-rise corridors",
          text:
            "OMR, Perungudi, Sholinganallur, and Navalur towers often have view-facing balconies. Invisible grills protect the edge while keeping skyline, lake, or open-view balconies visually lighter.",
        },
        {
          label: "Coastal apartments",
          text:
            "ECR, Besant Nagar, Thiruvanmiyur, and Palavakkam homes need better hardware decisions because salt air can age poor fittings faster. Stainless steel quality matters here.",
        },
        {
          label: "Compact city balconies",
          text:
            "T Nagar, Anna Nagar, Kodambakkam, and Mylapore balconies may be narrower. The cable layout should avoid making the balcony feel crowded or difficult to clean.",
        },
        {
          label: "Society approval",
          text:
            "Invisible grills are usually easier to approve than bulky grills, but every apartment has its own rule. Checking permission before the visit avoids conflict after drilling begins.",
        },
        {
          label: "Monsoon and dust",
          text:
            "Cable lines should be easy to wipe after rain and dust. A clean hardware layout makes maintenance much easier than a crowded corner with too many visible fittings.",
        },
      ],
    },
    {
      eyebrow: "Before Booking",
      title: "How to prepare for balcony invisible grill installation",
      intro:
        "Before booking, share photos that show the complete balcony from inside and outside if possible. Include the top beam, railing, side walls, floor edge, and any plants or drying setup. The team can then plan cable direction, spacing, and fixing points without guessing.",
      points: [
        {
          label: "Share balcony use",
          text:
            "A balcony used for coffee seating needs a different feel from a balcony used mainly for laundry or pets. The installation should support daily use, not just pass a safety checklist.",
        },
        {
          label: "Confirm cable spacing",
          text:
            "Spacing should be chosen for the family, not copied blindly. Children, pets, and high-floor openings may need closer spacing than a purely decorative balcony.",
        },
        {
          label: "Check existing railing",
          text:
            "Some railings are strong enough to work with, while others need wall or ceiling anchoring. Photos help, but final checking should happen on site before drilling.",
        },
        {
          label: "Clear the work line",
          text:
            "Remove plants, furniture, old ropes, and temporary screens before the visit. A clear edge lets the team align cables properly and finish faster.",
        },
        {
          label: "Ask about service support",
          text:
            "Invisible grills may need future tension checking if the cable is disturbed. Ask how support works before confirming the job, especially for larger balconies.",
        },
      ],
    },
  ],
  "window-safety-nets": [
    {
      eyebrow: "Price Guide",
      title: "Window safety net price in Chennai",
      intro:
        "Window safety nets in Chennai usually start around Rs. 18-45 per sq.ft. The price changes with window size, frame type, fixing surface, opening style, child or pet safety needs, and whether bird control is also part of the job. A window net looks simple, but the fit must respect how the window opens and how the room is used.",
      points: [
        {
          label: "Window type",
          text:
            "Sliding, casement, ventilator, and fixed windows need different fixing lines. The quote may change if the net must sit outside the frame, inside the reveal, or around a grill.",
        },
        {
          label: "Number of windows",
          text:
            "Doing several windows together can reduce repeated visit effort. A single window may still carry basic setup cost, while multiple windows let material and labor be planned better.",
        },
        {
          label: "Child and pet safety",
          text:
            "If the window is near a bed, sofa, study table, or pet perch, the installer should use tighter planning. That may add time, but it is important for real safety.",
        },
        {
          label: "Bird control corners",
          text:
            "When pigeons sit near the window, side pockets and pipe gaps matter. A basic front net may not be enough if birds can enter through an AC route or ledge space.",
        },
        {
          label: "Clear scope",
          text:
            "The quotation should say which windows are included, what material is used, and whether old net removal or cleaning is included. That prevents confusion on installation day.",
        },
      ],
    },
    {
      eyebrow: "Comparison",
      title: "Window safety net compared with grill and mesh options",
      intro:
        "Window safety nets are usually chosen for practical protection with a lighter cost. They can support child safety, pet safety, and bird control without changing the window permanently. Compare them with invisible grills, metal grills, and mosquito mesh by purpose, strength, visibility, and maintenance.",
      points: [
        {
          label: "Safety net versus mosquito mesh",
          text:
            "Mosquito mesh keeps insects out, but it is not meant for fall protection or bird pressure. A safety net is built for larger openings and stronger edge support.",
        },
        {
          label: "Safety net versus invisible grill",
          text:
            "Invisible grills look more premium and cost more. Window safety nets are better when the home needs a quick, economical layer for children, pets, or bird movement.",
        },
        {
          label: "Safety net versus metal grill",
          text:
            "Metal grills are permanent and heavy-looking. A net is easier to install, lighter on the window view, and often more suitable for rented flats or temporary safety needs.",
        },
        {
          label: "Inside versus outside fitting",
          text:
            "Inside fitting may be easier to maintain, while outside fitting can work better for some window styles. The installer should choose based on window movement, cleaning, and safety.",
        },
        {
          label: "View and airflow",
          text:
            "A properly fitted window net should keep air and light moving. If the mesh is badly tensioned or too dark, the room can feel smaller than it should.",
        },
      ],
    },
    {
      eyebrow: "Local Chennai Points",
      title: "Window net planning for Chennai rooms",
      intro:
        "Chennai windows collect dust, face sudden rain, and often sit close to furniture in compact apartments. Window safety netting should protect the opening without making rooms hot, dark, or hard to clean. The best planning depends on the area, building age, and daily window use.",
      points: [
        {
          label: "Compact bedrooms",
          text:
            "Velachery, Madipakkam, Medavakkam, and Pallikaranai flats often have beds close to windows. The net should be planned as child-safe protection, not only as bird control.",
        },
        {
          label: "Kitchen windows",
          text:
            "Kitchen windows need airflow and cleaning access. In Chennai heat, blocking ventilation with a poor layout can make the room uncomfortable, so mesh choice and fixing position matter.",
        },
        {
          label: "Older city homes",
          text:
            "Mylapore, Triplicane, Purasawalkam, and T Nagar windows may have older frames or repaired plaster. Drilling must be controlled so the edge does not crack.",
        },
        {
          label: "Dust-prone roads",
          text:
            "Homes near busy roads need nets that can be wiped or brushed easily. The installation should not trap dust behind unreachable corners.",
        },
        {
          label: "Rain direction",
          text:
            "During monsoon, some windows get direct rain splash. A neat border and correct material help the net stay cleaner and reduce sagging after repeated wet-dry cycles.",
        },
      ],
    },
    {
      eyebrow: "Before Booking",
      title: "Simple checks before window safety net installation",
      intro:
        "Before booking, take one full photo of each window and one close photo of the side frame. Mention whether the window slides, opens outward, opens inward, or stays fixed. This helps the team avoid a net line that blocks movement or makes cleaning harder.",
      points: [
        {
          label: "Check furniture distance",
          text:
            "Tell the team if a bed, sofa, or table sits below the window. That changes the safety risk and may affect where the net should be fixed.",
        },
        {
          label: "Show existing grills",
          text:
            "Some windows already have metal grills. The net may need to sit inside or outside them depending on cleaning access and the exact safety concern.",
        },
        {
          label: "Mention birds",
          text:
            "If birds are entering, include photos of droppings or ledges. Bird-control window work needs corner sealing that normal child-safety netting may not include.",
        },
        {
          label: "Ask about removal",
          text:
            "Rental homes should ask how the net can be removed later and what wall marks may remain. A clean fixing plan is worth discussing upfront.",
        },
        {
          label: "Keep the sill clear",
          text:
            "Before the visit, remove bottles, plants, curtains, and temporary items near the window. A clear work area improves measurement and finish.",
        },
      ],
    },
  ],
  "duct-area-safety-nets": [
    {
      eyebrow: "Price Guide",
      title: "Duct area safety net price in Chennai",
      intro:
        "Duct area safety nets in Chennai usually start around Rs. 20-55 per sq.ft., depending on duct depth, opening size, access route, fixing surface, pipe clearance, and whether the net needs to support only light debris control or stronger safety coverage. Duct work often costs more than simple balcony work because access and maintenance planning are more difficult.",
      points: [
        {
          label: "Depth and access",
          text:
            "Deep shafts, narrow service passages, and hard-to-reach openings take more time to measure and fix. The price should reflect safe access, not only the visible square feet.",
        },
        {
          label: "Pipe and cable clearance",
          text:
            "Ducts often carry plumbing, AC lines, electrical conduits, and drain pipes. The net line must avoid damaging these services and still leave access for future repair.",
        },
        {
          label: "Anchor strength",
          text:
            "Weak plaster or damp shaft walls may need a different fixing method. A cheap quote that ignores anchor strength can fail quickly in a service duct.",
        },
        {
          label: "Debris and bird issue",
          text:
            "Some duct nets stop falling debris, while others also control bird entry. If cleaning or nest removal is needed before installation, that should be priced separately and clearly.",
        },
        {
          label: "Maintenance access",
          text:
            "A well-planned quote should explain how future plumbing or AC service can happen after netting. Completely blocking a duct can create problems for the apartment later.",
        },
      ],
    },
    {
      eyebrow: "Comparison",
      title: "Duct safety net compared with simple covering",
      intro:
        "Duct openings are often treated casually until something falls, birds enter, or maintenance becomes unsafe. A proper duct net is different from tying a loose sheet across the opening. Compare solutions by anchor quality, service access, airflow, and how the installation handles pipes and damp corners.",
      points: [
        {
          label: "Safety net versus plastic sheet",
          text:
            "Plastic sheets trap heat, collect water, and can tear. A safety net keeps the opening protected while allowing airflow and visibility into the shaft.",
        },
        {
          label: "Fixed cover versus serviceable net",
          text:
            "A rigid cover may block maintenance. A planned net can protect the opening while still allowing plumbers, AC technicians, or society maintenance teams to access the duct when needed.",
        },
        {
          label: "Balcony net versus duct net",
          text:
            "Duct nets need different planning because pipes, damp patches, and restricted access are common. The installer should not treat a service shaft like a simple balcony edge.",
        },
        {
          label: "Bird entry control",
          text:
            "If birds are entering through the duct, edge sealing becomes important. A loose net across the middle may not stop entry from side gaps or pipe routes.",
        },
        {
          label: "Long-term inspection",
          text:
            "The best duct solution lets residents or maintenance staff inspect the area. If the work hides leaks, pipes, or damage, it may cause bigger trouble later.",
        },
      ],
    },
    {
      eyebrow: "Local Chennai Points",
      title: "Duct safety for Chennai apartments",
      intro:
        "Many Chennai apartments have service ducts that carry plumbing, AC drain lines, and ventilation shafts. In dense areas, these spaces gather dust, bird activity, and fallen waste. A duct safety net should make the shaft safer without blocking repair access or creating water-stagnation issues.",
      points: [
        {
          label: "Apartment shaft layouts",
          text:
            "Velachery, Medavakkam, Perungudi, and OMR apartments often have stacked utility ducts. The net should be placed where it protects residents while keeping society maintenance possible.",
        },
        {
          label: "Older plumbing lines",
          text:
            "Central Chennai buildings can have older pipes and patched walls. The installer should inspect damp areas and avoid drilling into weak or repaired sections.",
        },
        {
          label: "Rain and drainage",
          text:
            "During monsoon, some ducts receive rain splash or drain overflow. The net should not hold water, trap waste, or block the drainage path.",
        },
        {
          label: "Bird nesting pockets",
          text:
            "Service shafts can become quiet nesting areas. Cleaning and closure must be planned together, especially where birds enter from roof or side openings.",
        },
        {
          label: "Society coordination",
          text:
            "Duct work may require permission because it touches shared building space. Confirming the access key, work timing, and maintenance approval avoids delay on installation day.",
        },
      ],
    },
    {
      eyebrow: "Before Booking",
      title: "What to show for a duct net estimate",
      intro:
        "Duct openings are hard to understand from one close photo. Send a wider photo showing the full opening, the wall around it, pipes, ledges, and access path. If possible, include a short note about why the net is needed: child safety, debris control, bird entry, or maintenance safety.",
      points: [
        {
          label: "Show the approach",
          text:
            "A photo of the path to the duct helps the team understand ladder space, balcony access, and whether tools can be used safely.",
        },
        {
          label: "Mark pipe routes",
          text:
            "Pipes and cables should be visible in the photos. The installer must avoid drilling into service lines and should plan around future repair points.",
        },
        {
          label: "Mention cleaning condition",
          text:
            "If the duct has waste, bird droppings, or old material, say so before the visit. Cleaning may need time, safety gear, or a separate cost.",
        },
        {
          label: "Ask about access after work",
          text:
            "Before confirming, ask how maintenance can happen after netting. The right design protects the opening while respecting the building's service needs.",
        },
        {
          label: "Avoid quick closure",
          text:
            "A duct should not be closed blindly just to finish fast. Good work considers airflow, drainage, repair access, and the reason the opening exists.",
        },
      ],
    },
  ],
  "building-covering-safety-nets": [
    {
      eyebrow: "Price Guide",
      title: "Building covering safety net price in Chennai",
      intro:
        "Building covering safety nets in Chennai usually start around Rs. 22-60 per sq.ft., but larger projects are priced after site inspection. The cost depends on coverage span, height, anchor strength, wind exposure, access equipment, material grade, and whether the work is for facade protection, construction safety, open shaft coverage, or maintenance edge control.",
      points: [
        {
          label: "Large-area measurement",
          text:
            "Building covering is not measured like a small balcony. The team must understand the full span, corners, overlap, and how the net will be tensioned across the structure.",
        },
        {
          label: "Height and access method",
          text:
            "Work at height can need ladders, ropes, scaffolding, or special access planning. The quote changes because safety setup and manpower become a major part of the job.",
        },
        {
          label: "Material grade",
          text:
            "Construction edges, facade protection, and bird-control covering may need different net strengths. A single low price is not useful unless it says exactly which material is included.",
        },
        {
          label: "Anchor planning",
          text:
            "Large nets pull on their fixing points. Weak anchors or wide spacing can make the net flap, sag, or fail, especially during Chennai wind and rain.",
        },
        {
          label: "Project scope",
          text:
            "A proper quote should mention area, material, access method, work duration, included hardware, and any exclusions. This is important for societies, builders, and facility teams.",
        },
      ],
    },
    {
      eyebrow: "Comparison",
      title: "Building net compared with smaller safety solutions",
      intro:
        "Building covering safety nets are planned for larger openings and shared spaces. They should not be treated like stretched balcony netting. Compare options by engineering sense: anchor points, load direction, wind movement, future maintenance, and whether the net protects people, facade, or open voids.",
      points: [
        {
          label: "Building net versus balcony net",
          text:
            "Balcony nets protect one home opening. Building nets may cover shafts, facades, open sides, or common areas. The fixing pattern and material strength need a larger-site approach.",
        },
        {
          label: "Temporary construction net",
          text:
            "Construction use may need a temporary but stronger setup with clear work-zone planning. The goal is worker and public safety, not only bird control or appearance.",
        },
        {
          label: "Permanent society coverage",
          text:
            "Apartment societies may need longer-term coverage for open shafts or facade pockets. These projects need neat finishing, maintenance access, and approval from responsible residents.",
        },
        {
          label: "Wind resistance",
          text:
            "Large nets behave differently in wind. A cheaper installation may flap loudly or pull at anchors. Good planning reduces movement and keeps the covering more stable.",
        },
        {
          label: "Maintenance and removal",
          text:
            "Large coverings should be planned so they can be inspected, repaired, or removed when building work changes. That practical detail is often more important than the first price.",
        },
      ],
    },
    {
      eyebrow: "Local Chennai Points",
      title: "Building net work around Chennai conditions",
      intro:
        "Chennai building covering work has to respect heat, wind, rain, dust, society rules, and access restrictions. Projects in IT corridors, older city blocks, coastal areas, and industrial pockets can have very different site conditions. A reliable plan starts with a visit, not a guess from one photo.",
      points: [
        {
          label: "High-rise exposure",
          text:
            "OMR, Perungudi, Sholinganallur, and Porur towers may have strong wind across open elevations. Anchor spacing and net tension need extra attention on these sites.",
        },
        {
          label: "Coastal weather",
          text:
            "ECR, Thiruvanmiyur, Besant Nagar, and nearby zones face salt air and rain movement. Hardware and rope choices should be made with corrosion and weathering in mind.",
        },
        {
          label: "Dense access",
          text:
            "T Nagar, Purasawalkam, George Town, and older central areas may have narrow access, traffic limits, and tight working space. Scheduling and setup matter as much as material.",
        },
        {
          label: "Society approval",
          text:
            "Shared building work needs clear approval from association or facility managers. The quote should be easy for them to understand and compare, with scope written plainly.",
        },
        {
          label: "Rain season planning",
          text:
            "Large net work should be scheduled with weather in mind. Wet walls, wind, and rain can slow installation or make access unsafe on certain days.",
        },
      ],
    },
    {
      eyebrow: "Before Booking",
      title: "Information needed for building covering net work",
      intro:
        "Before a site visit, gather the building name, location, approximate area, reason for covering, access points, photos from multiple angles, and any society or builder requirement. Large net work becomes smoother when decision makers understand the scope before asking only for a rate.",
      points: [
        {
          label: "Share full-view photos",
          text:
            "Close photos are not enough for large work. The team needs full elevation, corner, roof, and access photos to understand how the net will be fixed.",
        },
        {
          label: "Explain the risk",
          text:
            "Mention whether the concern is falling debris, bird entry, worker safety, open void protection, or facade maintenance. Different risks need different net grades and fixing plans.",
        },
        {
          label: "Confirm access permission",
          text:
            "Terrace keys, shaft access, parking, lift use, and security entry should be confirmed before the team arrives. Delays are common when these details are missed.",
        },
        {
          label: "Ask for written scope",
          text:
            "For building projects, a written scope avoids confusion between residents, contractors, and installers. It should mention area, material, hardware, and expected completion time.",
        },
        {
          label: "Plan future service",
          text:
            "Ask how damaged sections can be repaired later. Large nets may need inspection after storms, building repairs, or heavy external work.",
        },
      ],
    },
  ],
  "terrace-safety-nets": [
    {
      eyebrow: "Price Guide",
      title: "Terrace safety net price in Chennai",
      intro:
        "Terrace safety nets in Chennai usually start around Rs. 20-55 per sq.ft., depending on terrace size, parapet height, wind exposure, anchor points, net grade, and whether the area is for family use, play, pets, or open-edge protection. Terrace work needs stronger planning than a small balcony because the net faces more sun, wind, and rain.",
      points: [
        {
          label: "Open-edge length",
          text:
            "A terrace with long open sides needs more rope, anchors, and tension control than a small rooftop corner. The price should reflect the edge length and risk level.",
        },
        {
          label: "Parapet height",
          text:
            "Low parapets need more careful coverage. If the wall is short or uneven, the installer may need a taller net line or extra anchoring to create useful protection.",
        },
        {
          label: "Play and pet use",
          text:
            "Terraces used by children or pets need safer spacing, tighter corners, and stronger finish than a simple debris-control net. That purpose should be clear in the quote.",
        },
        {
          label: "Wind exposure",
          text:
            "Terraces catch stronger wind than lower balconies. Better border rope, closer hook spacing, and sensible net height can increase cost but improve long-term stability.",
        },
        {
          label: "Drainage and access",
          text:
            "The net should not block drain cleaning, water tank access, solar panels, or terrace maintenance. Planning these details avoids extra work later.",
        },
      ],
    },
    {
      eyebrow: "Comparison",
      title: "Terrace net compared with railing and wall options",
      intro:
        "Terrace safety can be improved with nets, railing height changes, metal grills, or access restrictions. Nets are useful when you want a quicker protective layer without changing the terrace structure. Compare options by safety, cost, appearance, and how the terrace is used every week.",
      points: [
        {
          label: "Net versus higher wall",
          text:
            "Raising a parapet is permanent and expensive. A terrace net is faster, lighter, and more flexible when the building needs safety without civil work.",
        },
        {
          label: "Net versus metal fencing",
          text:
            "Metal fencing can be strong but visually heavy and costlier. A net keeps the terrace more open, which matters for homes that use the rooftop for air, plants, or drying clothes.",
        },
        {
          label: "Temporary versus long-term use",
          text:
            "Some terraces need protection only during a child-safety phase or rental period. Nets are easier to remove or adjust than permanent construction.",
        },
        {
          label: "Play area planning",
          text:
            "For cricket practice, children's play, or pet use, normal terrace netting may not be enough. The purpose should decide material, height, and fixing strength.",
        },
        {
          label: "Maintenance access",
          text:
            "Terraces need regular cleaning, tank checks, and drain clearing. The net layout should protect open edges without trapping workers or blocking essential service points.",
        },
      ],
    },
    {
      eyebrow: "Local Chennai Points",
      title: "Terrace safety in Chennai weather",
      intro:
        "Chennai terraces handle harsh sun, sudden rain, water stagnation, and strong wind on exposed days. A terrace net should be planned with these conditions in mind, especially for homes in open layouts, coastal pockets, and fast-growing suburbs where rooftops are used as family space.",
      points: [
        {
          label: "Heat and UV",
          text:
            "Terrace nets sit under direct sun for long hours. UV-stabilized material is important, especially in places like Tambaram, Porur, Anna Nagar, and OMR where rooftops get full exposure.",
        },
        {
          label: "Coastal breeze",
          text:
            "Thiruvanmiyur, Besant Nagar, ECR, and Palavakkam terraces need strong border planning because breeze can make loose nets flap and wear faster.",
        },
        {
          label: "Water tank areas",
          text:
            "Many Chennai terraces have tanks, pipes, and solar units. The net should leave safe service access, because maintenance workers will need to move around those points.",
        },
        {
          label: "Family rooftop use",
          text:
            "In independent houses and smaller apartments, terraces are used for evening air, drying, and play. The design should feel protective without making the terrace uncomfortable.",
        },
        {
          label: "Monsoon drains",
          text:
            "Drain access is critical. A net that blocks drain cleaning can cause water stagnation, stains, and complaints during heavy rain.",
        },
      ],
    },
    {
      eyebrow: "Before Booking",
      title: "How to prepare for a terrace net visit",
      intro:
        "Terrace net estimates need full-area understanding. Send photos from each corner, the parapet, staircase entry, water tank, drain points, and any open sides. Mention who uses the terrace and what worry you want solved, because child safety, pet safety, and play containment need different planning.",
      points: [
        {
          label: "Measure the rough edge",
          text:
            "A rough length of open edges helps estimate material before the visit. Final measurement should still happen on site because terrace corners and parapets are often uneven.",
        },
        {
          label: "Show fixing points",
          text:
            "Photos of parapet tops, side walls, beams, and pillars help the installer decide where anchors can safely go without affecting waterproofing.",
        },
        {
          label: "Mention waterproofing",
          text:
            "If the terrace has recent waterproofing, tell the team before drilling. The fixing method should protect the surface as much as possible.",
        },
        {
          label: "Clear stored items",
          text:
            "Old furniture, pots, pipes, and construction material can block measurement. Clearing the edge helps the team finish cleaner and faster.",
        },
        {
          label: "Plan for inspection",
          text:
            "Ask how often the net should be checked, especially after heavy wind or rain. Terrace installations face more weather than indoor window work.",
        },
      ],
    },
  ],
  "cricket-practice-nets": [
    {
      eyebrow: "Price Guide",
      title: "Cricket practice net price in Chennai",
      intro:
        "Cricket practice nets in Chennai usually start around Rs. 25-65 per sq.ft. for netting, with poles, frames, roof coverage, turf, and custom lanes priced separately. The final cost depends on lane length, height, ball speed, support structure, ground surface, and whether the setup is for a home terrace, academy, school, society, or box-cricket space.",
      points: [
        {
          label: "Lane size",
          text:
            "A short home practice lane costs less than a full academy lane. Length, width, and height decide material use and also decide whether side and roof nets are needed.",
        },
        {
          label: "Ball speed and use",
          text:
            "Casual practice, leather-ball coaching, tennis-ball play, and academy bowling need different net strength. The quote should match the actual ball and player level.",
        },
        {
          label: "Pole or frame cost",
          text:
            "Net price alone does not include every support system. Poles, brackets, cables, frames, and civil fixing can change the total budget significantly.",
        },
        {
          label: "Terrace setup",
          text:
            "Terrace cricket nets need extra planning for wind, parapet height, nearby windows, and safe ball containment. The work may cost more than a ground-level side net.",
        },
        {
          label: "Written scope",
          text:
            "A proper cricket net quote should mention lane dimensions, net material, roof coverage, support method, entry opening, and exclusions like flooring or lighting.",
        },
      ],
    },
    {
      eyebrow: "Comparison",
      title: "Choosing the right cricket net setup",
      intro:
        "Cricket practice nets are not just a mesh around a lane. A useful setup controls ball direction, protects nearby people and property, and lets players practice comfortably. Compare net options by ball type, support strength, roof coverage, lane space, and how often the net will be used.",
      points: [
        {
          label: "Tennis-ball versus leather-ball net",
          text:
            "A tennis-ball practice lane can use lighter material than a leather-ball academy lane. Leather-ball use needs stronger netting and better support because impact is much higher.",
        },
        {
          label: "Side net versus full cage",
          text:
            "A side net may be enough for a boundary edge. Batting practice usually needs side and roof coverage so lofted or edged shots do not leave the lane.",
        },
        {
          label: "Temporary versus fixed setup",
          text:
            "Temporary nets work for occasional practice, but regular coaching needs stable poles, proper tension, and a layout that survives repeated impact and weather.",
        },
        {
          label: "Home terrace versus academy",
          text:
            "Home terraces need compact containment and careful fixing. Academies need longer lanes, repeated-use durability, and safe movement for coaches and players.",
        },
        {
          label: "Net only versus complete lane",
          text:
            "Some quotations cover only netting. Others include supports, cables, entry points, and installation hardware. Always compare the total lane, not just mesh cost.",
        },
      ],
    },
    {
      eyebrow: "Local Chennai Points",
      title: "Cricket net planning in Chennai spaces",
      intro:
        "Chennai cricket practice happens in many types of spaces: terraces, schools, academies, apartment society grounds, and compact box-cricket areas. Heat, dust, monsoon wind, and limited ground space all affect the design. A good practice net keeps the ball contained without making the lane cramped.",
      points: [
        {
          label: "Terrace practice",
          text:
            "In areas like Anna Nagar, Tambaram, Porur, and Velachery, home terrace practice needs careful ball containment because neighboring windows and balconies are close.",
        },
        {
          label: "Academy lanes",
          text:
            "Academies near OMR, Medavakkam, Pallikaranai, and Ambattur need durable nets for repeated use. Material should be chosen for frequency, ball type, and coaching intensity.",
        },
        {
          label: "Society play zones",
          text:
            "Apartment communities often need a compact lane that does not disturb parking, walking paths, or other residents. Entry and exit placement is important for safety.",
        },
        {
          label: "Wind and rain",
          text:
            "Open grounds and terraces can make loose nets flap heavily. Better tensioning and support reduce wear during Chennai wind and rain.",
        },
        {
          label: "Lighting and evening use",
          text:
            "Many players practice after school or work. If lights are planned, the net layout should not block fixtures or create shadows inside the lane.",
        },
      ],
    },
    {
      eyebrow: "Before Booking",
      title: "Details needed for a cricket net estimate",
      intro:
        "Before asking for a price, decide who will use the lane, what ball will be used, where the bowler stands, and how much space is available behind the batter. These details help the team propose a net that works in real play, not just in measurements.",
      points: [
        {
          label: "Share dimensions",
          text:
            "Send rough length, width, and height. If you do not know exact dimensions, mark the available area in a photo so the team can understand the shape.",
        },
        {
          label: "Mention ball type",
          text:
            "Tennis ball, rubber ball, season ball, and leather ball all need different strength. The wrong net can tear quickly or fail to contain impact safely.",
        },
        {
          label: "Show nearby risks",
          text:
            "Photos should show windows, vehicles, walkways, balconies, and neighboring walls. The net layout should protect those areas from missed shots.",
        },
        {
          label: "Confirm support options",
          text:
            "Tell the team if poles can be installed or if the net must attach to existing walls, beams, or terrace structures. Support choice changes the quote.",
        },
        {
          label: "Ask about repair",
          text:
            "Practice nets take repeated impact. Ask how damaged panels or loosened sections can be repaired later, especially for academy or daily-use lanes.",
        },
      ],
    },
  ],
  "bird-spikes-installation": [
    {
      eyebrow: "Price Guide",
      title: "Bird spike installation price in Chennai",
      intro:
        "Bird spike installation in Chennai usually starts around Rs. 70-160 per running foot, depending on ledge width, surface condition, height, cleaning requirement, adhesive or screw fixing, and how difficult the access is. Spikes are priced differently from nets because the measurement follows the perch line, not the open area.",
      points: [
        {
          label: "Running-foot measurement",
          text:
            "Spikes are measured along ledges, parapets, AC units, sign boards, beams, and pipe routes. A long narrow ledge may cost more than a small balcony net because the perch line is longer.",
        },
        {
          label: "Surface preparation",
          text:
            "Dust, bird waste, oil, moss, or loose paint can weaken fixing. Cleaning and surface preparation may affect the price but improve how well the spikes hold.",
        },
        {
          label: "Access height",
          text:
            "High ledges, exterior beams, and difficult AC pockets take more time and safety care. The quote should include access difficulty instead of adding it later.",
        },
        {
          label: "Spike quality",
          text:
            "Better spike strips hold shape and discourage perching without looking messy. Cheap strips can bend, rust, or detach faster in heat and rain.",
        },
        {
          label: "Complete route",
          text:
            "The quote should cover all perch points. Leaving one nearby ledge open may simply move the birds from one spot to another.",
        },
      ],
    },
    {
      eyebrow: "Comparison",
      title: "Bird spikes compared with bird nets",
      intro:
        "Bird spikes and bird nets solve different problems. Spikes stop birds from sitting on narrow ledges. Nets stop birds from entering balconies, ducts, and window pockets. Choosing the wrong option can waste money, so the first step is understanding whether birds are perching, entering, or nesting.",
      points: [
        {
          label: "Perch control",
          text:
            "Use spikes when birds sit on parapets, AC units, beams, sign boards, and narrow ledges. The goal is to make the surface uncomfortable for sitting.",
        },
        {
          label: "Entry control",
          text:
            "Use nets when birds enter a balcony, shaft, or window pocket. Spikes cannot close an open space, so they will not solve full entry issues alone.",
        },
        {
          label: "Look and visibility",
          text:
            "Spikes are visible on the ledge but do not cover the whole opening. Nets are more visible across an opening but provide stronger closure.",
        },
        {
          label: "Maintenance",
          text:
            "Spikes need occasional checking to ensure strips are still fixed and not covered with dirt. Nets need tension and corner checks. Both work better after initial cleaning.",
        },
        {
          label: "Combined solution",
          text:
            "Some homes need both. A balcony may need netting, while the outer AC ledge or parapet needs spikes so birds do not gather just outside the net.",
        },
      ],
    },
    {
      eyebrow: "Local Chennai Points",
      title: "Where bird spikes help in Chennai",
      intro:
        "Chennai buildings often have ledges, sign boards, AC outdoor units, parapets, and pipe routes where birds sit repeatedly. Spikes work best when installed along the exact perch line after cleaning. The local building shape matters because one missed ledge can keep the problem active.",
      points: [
        {
          label: "AC ledges",
          text:
            "Apartments in OMR, Velachery, Perungudi, and Sholinganallur often have AC ledges close to windows. Spikes can reduce sitting when netting is not needed for full entry control.",
        },
        {
          label: "Commercial sign boards",
          text:
            "T Nagar, Anna Salai, Purasawalkam, and busy commercial roads have sign boards and narrow beams where birds gather. Spikes should be aligned neatly so the storefront still looks clean.",
        },
        {
          label: "Coastal fittings",
          text:
            "Near the coast, hardware and adhesive choices matter because salt air and rain can age poor materials faster. A cheap strip may detach sooner in these areas.",
        },
        {
          label: "Temple and old-building zones",
          text:
            "Older structures can have uneven ledges and delicate surfaces. The fixing method should respect the building surface while still making the perch line unusable.",
        },
        {
          label: "Cleaning before fixing",
          text:
            "Chennai dust and bird waste can build up quickly. Proper cleaning before fixing improves adhesion and makes the final installation look more professional.",
        },
      ],
    },
    {
      eyebrow: "Before Booking",
      title: "How to prepare for bird spike installation",
      intro:
        "For a good estimate, send photos that show the full ledge length, the surface close-up, the height from floor level, and where birds sit most often. Mention whether cleaning is needed and whether the area is reachable from inside, balcony, terrace, ladder, or exterior access.",
      points: [
        {
          label: "Photograph the whole line",
          text:
            "A close-up of droppings is useful, but the team also needs the full ledge line to measure running feet and plan how many spike strips are needed.",
        },
        {
          label: "Show the surface",
          text:
            "Tile, concrete, metal, painted wall, and plastic AC covers need different fixing methods. A close photo helps avoid weak installation.",
        },
        {
          label: "Mention access",
          text:
            "If the ledge is outside a high-floor window, the access plan matters. The team must know whether the work can be done safely from inside or needs special setup.",
        },
        {
          label: "Ask about cleaning",
          text:
            "Spikes should not be installed over heavy waste. Ask whether cleaning is included, because clean surface preparation is part of a lasting job.",
        },
        {
          label: "Check nearby ledges",
          text:
            "Birds may shift to the nearest open ledge after spikes are installed. Include photos of nearby perch points so the solution is complete.",
        },
      ],
    },
  ],
  "cloth-hanger-installation": [
    {
      eyebrow: "Price Guide",
      title: "Cloth hanger installation price in Chennai",
      intro:
        "Cloth hanger installation in Chennai usually starts around Rs. 1,500-4,500 for standard ceiling or balcony pulley sets, with larger rods, premium materials, extra brackets, and difficult ceiling work priced separately. The final cost depends on ceiling strength, rod count, pulley quality, drying length, and how comfortably the system can be used every day.",
      points: [
        {
          label: "Rod count",
          text:
            "More rods give more drying space but need stronger brackets and better spacing. A crowded layout can block walking space or window movement, so the cheapest extra rod is not always useful.",
        },
        {
          label: "Pulley quality",
          text:
            "Smooth pulleys make daily use easier. Poor pulleys can jam, squeak, or make lifting heavy wet clothes difficult, especially for families using the hanger every day.",
        },
        {
          label: "Ceiling strength",
          text:
            "Weak plaster, false ceiling areas, and damp patches need careful checking. The quote may change if stronger anchors or a different fixing position is needed.",
        },
        {
          label: "Balcony size",
          text:
            "Small utility balconies need compact planning. Wide balconies can take longer rods, but the layout should still leave space for movement, cleaning, and safety nets or grills.",
        },
        {
          label: "Included hardware",
          text:
            "The quote should mention rods, ropes, pulleys, brackets, screws, and installation. That makes it easier to compare one system with another without hidden extras.",
        },
      ],
    },
    {
      eyebrow: "Comparison",
      title: "Choosing between cloth hanger systems",
      intro:
        "A good cloth hanger system should feel easy, stable, and neatly placed. It is not only about rod count. Compare systems by pulley smoothness, bracket strength, rust resistance, drying space, and whether the hanger improves daily life without crowding the balcony.",
      points: [
        {
          label: "Ceiling pulley versus wall mount",
          text:
            "Ceiling pulley systems save floor space and work well in utility balconies. Wall-mounted systems may suit certain layouts but can block windows or walking paths if placed poorly.",
        },
        {
          label: "Basic rods versus premium rods",
          text:
            "Premium rods and better finish can resist rust and bending better. Basic systems may be fine for light use, but heavy daily laundry needs stronger material.",
        },
        {
          label: "Manual lift versus fixed line",
          text:
            "A pulley lift lets clothes rise above head level after loading. Fixed lines are cheaper but can keep wet clothes in the way throughout the day.",
        },
        {
          label: "Compact versus wide layout",
          text:
            "A compact layout is easier in small balconies, while wide layouts increase drying capacity. The best choice depends on family size and balcony movement.",
        },
        {
          label: "Looks and safety",
          text:
            "A neat hanger should not leave loose rope ends, sharp brackets, or uneven rods. Finish matters because the system is touched and seen every day.",
        },
      ],
    },
    {
      eyebrow: "Local Chennai Points",
      title: "Cloth drying needs in Chennai homes",
      intro:
        "Chennai homes rely heavily on balcony and utility drying because weather changes quickly between strong sun, humidity, and sudden rain. A cloth hanger system should make drying easier while respecting window movement, balcony nets, safety grills, and regular cleaning.",
      points: [
        {
          label: "Compact utility balconies",
          text:
            "Velachery, Medavakkam, Pallikaranai, and OMR flats often have narrow utility balconies. Rod placement must avoid blocking washing machine access, windows, and safety net edges.",
        },
        {
          label: "Humid weather",
          text:
            "During humid days, spacing matters. If rods are too close, clothes take longer to dry and the balcony feels crowded. Better spacing improves airflow.",
        },
        {
          label: "Monsoon use",
          text:
            "Chennai rain can push drying indoors quickly. A ceiling pulley system gives families flexible drying space without needing floor stands in already compact rooms.",
        },
        {
          label: "Coastal rust concern",
          text:
            "Near ECR, Besant Nagar, and Thiruvanmiyur, rust-aware rods and hardware are worth considering. Lower-quality metal can age faster in salt-heavy air.",
        },
        {
          label: "Shared balcony planning",
          text:
            "Many homes also have balcony safety nets, invisible grills, plants, or storage. The hanger should be placed so it does not damage or interfere with those installations.",
        },
      ],
    },
    {
      eyebrow: "Before Booking",
      title: "What to check before cloth hanger installation",
      intro:
        "Before booking, send photos of the ceiling, balcony width, window position, washing machine area, and any existing hooks or old drying lines. Mention family size and laundry load, because a single person, small family, and large family need different rod capacity.",
      points: [
        {
          label: "Check ceiling material",
          text:
            "Concrete ceiling, false ceiling, tile surface, and repaired plaster need different fixing decisions. The installer should not drill blindly without checking strength.",
        },
        {
          label: "Measure usable width",
          text:
            "A rough width helps choose rod length. Leave space for windows, doors, and walking, otherwise the hanger may technically fit but feel uncomfortable every day.",
        },
        {
          label: "Mention heavy laundry",
          text:
            "If the family dries jeans, bedsheets, towels, or school uniforms regularly, the system should be chosen for load, not only for looks.",
        },
        {
          label: "Keep clearance",
          text:
            "The rods should lift above head level and should not hit lights, fans, window grills, or safety nets. Clearance planning makes the hanger pleasant to use.",
        },
        {
          label: "Ask about pulley care",
          text:
            "A small explanation after installation helps. Users should know how to lift evenly, avoid overload, and call early if the rope or pulley feels rough.",
        },
      ],
    },
  ],
} satisfies Record<ServiceSlug, ManualGuideSection[]>;

const chennaiServiceManualExtraGuides = {
  "balcony-safety-nets": {
    eyebrow: "Detailed Checklist",
    title: "Balcony safety net checklist before you compare quotes",
    intro:
      "A balcony safety net quote becomes easier to understand when the customer knows what should be checked. The points below are the details SRI KRISHNA INVISIBLE GRILLS expects to discuss on Chennai balcony work, especially when the home has children, pets, plants, laundry use, or repeated bird movement. They also help you compare two offers without choosing only by the lowest number.",
    points: [
      {
        label: "Opening shape",
        text:
          "Straight balconies, L-shaped balconies, curved railings, and utility corners all need different net lines. The installer should measure the real opening and should not assume the front edge alone tells the full story.",
      },
      {
        label: "Railing gap",
        text:
          "The gap below the handrail, the side wall return, and the floor-level corner must be checked. Many balcony safety issues remain because only the large middle opening was covered.",
      },
      {
        label: "Hook spacing",
        text:
          "Hooks placed too far apart can make the net sag. Hooks placed carelessly can damage the wall. A sensible spacing plan keeps the net tight while maintaining a neat finish.",
      },
      {
        label: "Daily balcony use",
        text:
          "Plants, cloth drying, water cans, chairs, and cleaning tools should be considered before fixing. A good balcony net protects the opening but does not make everyday use frustrating.",
      },
      {
        label: "Net color and visibility",
        text:
          "Transparent or light-colored nets can keep the balcony visually open. The best choice depends on the view, building exterior, sun exposure, and how much the family wants the net to blend in.",
      },
      {
        label: "Children and pets",
        text:
          "If the balcony is used by children or pets, the team should ask about behavior and reach. A simple bird-control net layout may not be enough for a safety-first balcony.",
      },
      {
        label: "Cleaning access",
        text:
          "Balcony floors, drain holes, railing bars, and side corners still need cleaning after installation. The net should not trap dirt in places the family cannot reach.",
      },
      {
        label: "After-installation review",
        text:
          "Before the team leaves, check the corners, knots, hook line, bottom edge, and tension. This final review helps catch small issues while tools are still on site.",
      },
    ],
  },
  "children-safety-nets": {
    eyebrow: "Detailed Checklist",
    title: "Children safety net checklist for Chennai homes",
    intro:
      "Children safety work needs more care than a normal opening cover. The quote should be based on where a child can climb, reach, lean, or pull, not only on the size of the balcony or window. This checklist helps parents ask the right questions before confirming installation in an apartment, rented flat, or independent house.",
    points: [
      {
        label: "Child's age and reach",
        text:
          "A toddler, school-age child, and older child use space differently. The installer should understand reach height, climbing habits, and which balcony or window worries the family most.",
      },
      {
        label: "Furniture near openings",
        text:
          "Beds, sofas, shoe racks, study tables, and chairs can create a climb point. A safety net plan should include these items because the opening risk changes when furniture is nearby.",
      },
      {
        label: "Window sill height",
        text:
          "Low sill windows need careful planning because children can lean out easily. The net should cover the risk area without stopping normal window use and ventilation.",
      },
      {
        label: "Balcony side gaps",
        text:
          "Children notice small spaces. Side wall gaps, railing returns, and low corners should be closed neatly so the protection feels complete from inside the home.",
      },
      {
        label: "Reachable hardware",
        text:
          "Hooks, knots, and rope ends should not be sharp or easy for a child to pull. A neat finish is not only about appearance; it is part of safe installation.",
      },
      {
        label: "Rental-friendly fixing",
        text:
          "Many Chennai families live in rented flats. If removal may be needed later, ask how the net can be taken down and what marks may remain on the wall.",
      },
      {
        label: "Ventilation and light",
        text:
          "Children's rooms need air and daylight. The net should protect the opening without making the room feel closed, dark, or hotter than before.",
      },
      {
        label: "Family instructions",
        text:
          "After installation, the team should explain that the net is a protection layer, not a climbing surface. This matters because children may test anything new in the home.",
      },
    ],
  },
  "pigeon-safety-nets": {
    eyebrow: "Detailed Checklist",
    title: "Pigeon safety net checklist for lasting control",
    intro:
      "A pigeon net works only when the actual route is closed. The visible balcony opening may be only one part of the problem. The checklist below helps identify ledges, pipe gaps, AC corners, nesting pockets, and cleaning needs before installation, so the solution does not fail after a few days.",
    points: [
      {
        label: "Entry route",
        text:
          "Watch where birds enter before cleaning or covering the area. The route may be from the top beam, side wall, AC pipe gap, or a ledge behind the balcony line.",
      },
      {
        label: "Nesting location",
        text:
          "Nests are often hidden behind units, pipes, or upper corners. These areas should be inspected and cleaned carefully before the net is fixed.",
      },
      {
        label: "Waste cleaning",
        text:
          "Droppings and feathers should be removed before netting. Installing over waste traps smell and makes the balcony feel dirty even after birds stop entering.",
      },
      {
        label: "AC service space",
        text:
          "If an AC outdoor unit is near the balcony or window, the net should not block future technician access. This is a common issue in Chennai apartments.",
      },
      {
        label: "Side sealing",
        text:
          "Small side pockets matter. Pigeons may not need a large gap to return, so the team should close the edges without leaving loose mesh.",
      },
      {
        label: "Net tension",
        text:
          "A loose bird net can become a perch or collect dirt. Proper tension helps the net hold shape and keeps the balcony cleaner.",
      },
      {
        label: "Neighboring ledges",
        text:
          "Birds may shift to the next ledge after installation. If nearby ledges are part of the same problem, the installer should explain whether spikes or extra closure is needed.",
      },
      {
        label: "Maintenance check",
        text:
          "After a few weeks, inspect the edges and corners. Early checking helps spot any loosened point before birds learn a new entry path.",
      },
    ],
  },
  "window-invisible-grills": {
    eyebrow: "Detailed Checklist",
    title: "Window invisible grill checklist before installation",
    intro:
      "Window invisible grills should look clean, stay tight, and suit the window type. A good job is not simply cable pulled across a frame. The team must understand the room, sill height, window movement, cable spacing, hardware, and long-term maintenance before confirming the final price.",
    points: [
      {
        label: "Window operation",
        text:
          "Sliding, casement, fixed, and ventilator windows need different cable direction and fixing. The grill should not block the panel you open every day.",
      },
      {
        label: "Cable spacing",
        text:
          "Spacing should match the safety need. Homes with children or pets should not choose wide decorative spacing only because it looks lighter.",
      },
      {
        label: "Frame strength",
        text:
          "The installer should check whether the side frame, wall, or sill can hold anchors. Weak plaster or thin frame edges need a different plan.",
      },
      {
        label: "Hardware finish",
        text:
          "Visible hardware should be neat and aligned. Even good cable can look poor if turnbuckles, anchors, or edge fittings are placed untidily.",
      },
      {
        label: "Mosquito mesh",
        text:
          "If the window has mosquito mesh, the grill must be planned around it. The goal is safety without making mesh cleaning or replacement impossible.",
      },
      {
        label: "Curtain and blind clearance",
        text:
          "Curtain rods, blinds, and tracks should be checked before drilling. A beautiful grill layout can still be annoying if it blocks fabric movement.",
      },
      {
        label: "Cleaning routine",
        text:
          "Invisible grills collect dust along cable lines. The team should explain how to wipe the cables and how to clean the window glass after installation.",
      },
      {
        label: "Tension support",
        text:
          "Ask how cable tension is checked and what to do if a line loosens. This support detail matters for long-term appearance and safety.",
      },
    ],
  },
  "balcony-invisible-grills": {
    eyebrow: "Detailed Checklist",
    title: "Balcony invisible grill checklist for premium finish",
    intro:
      "Balcony invisible grills need safety planning and visual discipline. Because the cable lines are visible across a larger opening, small alignment mistakes can spoil the finish. This checklist helps confirm whether the quote includes the right cable spacing, hardware, tension, facade care, and practical balcony use.",
    points: [
      {
        label: "Facade line",
        text:
          "The cable layout should look straight from inside and outside. Apartment balconies need clean alignment so the building exterior does not look messy after installation.",
      },
      {
        label: "Safety spacing",
        text:
          "Cable spacing should match the household. Children, pets, and high-floor balconies may need closer spacing than a purely decorative setup.",
      },
      {
        label: "Railing condition",
        text:
          "Some balcony railings can support the installation, while others need wall, beam, or ceiling anchoring. This should be checked before fixing.",
      },
      {
        label: "Cable tension",
        text:
          "Long balcony spans need careful tensioning. Loose cable reduces safety confidence and makes the work look cheaper than it is.",
      },
      {
        label: "Corner hardware",
        text:
          "Corners should be tidy and strong. Crowded fittings, rough ends, or uneven anchor lines reduce the premium feel of invisible grills.",
      },
      {
        label: "Balcony lifestyle",
        text:
          "Seating, plants, drying stands, and pet movement should be discussed before installation. The grill should protect the balcony without making it awkward to use.",
      },
      {
        label: "Bird-control expectation",
        text:
          "Invisible grills are not full bird nets. If pigeons are entering the balcony, ask whether a separate net or spike solution is needed.",
      },
      {
        label: "Future tightening",
        text:
          "Large cable installations may need checking after use or disturbance. Confirm how service support is handled before finalizing the work.",
      },
    ],
  },
  "window-safety-nets": {
    eyebrow: "Detailed Checklist",
    title: "Window safety net checklist for everyday use",
    intro:
      "A window safety net should protect the opening while keeping the room comfortable. The quote needs to consider window movement, frame type, furniture, children, pets, bird routes, and cleaning. These details decide whether the net feels natural after installation or becomes a daily inconvenience.",
    points: [
      {
        label: "Window opening style",
        text:
          "The net must suit sliding, open-out, open-in, or fixed windows. If it blocks the way the window works, the installation will not feel practical.",
      },
      {
        label: "Frame edge",
        text:
          "The installer should inspect whether hooks can be fixed to the frame reveal, wall, or existing grill. Weak edges need careful handling.",
      },
      {
        label: "Child reach",
        text:
          "Windows close to beds, tables, or sofas need stronger safety planning. The net should be treated as protection, not only as bird-control mesh.",
      },
      {
        label: "Pet behavior",
        text:
          "Cats and small dogs often sit near windows. If pets lean, paw, or jump toward the opening, mesh tension and corner closure become more important.",
      },
      {
        label: "Bird ledges",
        text:
          "If birds gather outside the window, the team should check ledges and pipe gaps. A normal window net may need extra side sealing.",
      },
      {
        label: "Air and light",
        text:
          "The net should not make the room dull or stuffy. Mesh choice and fitting position should keep air and daylight moving naturally.",
      },
      {
        label: "Cleaning access",
        text:
          "Window glass, sill dust, and grill bars still need cleaning. The net should be placed so routine cleaning remains possible.",
      },
      {
        label: "Removal plan",
        text:
          "For rented homes, ask how the net can be removed later. A clean fixing plan protects both safety and the deposit conversation.",
      },
    ],
  },
  "duct-area-safety-nets": {
    eyebrow: "Detailed Checklist",
    title: "Duct area safety net checklist for shared spaces",
    intro:
      "Duct safety netting is different from balcony work because ducts often hold pipes, cables, AC drain lines, and maintenance routes. The installation should protect the opening without hiding service issues or blocking future repair. This checklist keeps the work useful for residents and facility teams.",
    points: [
      {
        label: "Reason for netting",
        text:
          "Clarify whether the duct net is for child safety, debris control, bird entry, or maintenance safety. The purpose changes material and fixing decisions.",
      },
      {
        label: "Pipe clearance",
        text:
          "Pipes and cables should remain visible and serviceable. The installer should avoid fixing through or too close to active service lines.",
      },
      {
        label: "Damp wall check",
        text:
          "Many ducts have damp patches or repaired plaster. Anchors should not be placed blindly into weak surfaces.",
      },
      {
        label: "Access after installation",
        text:
          "Plumbers, AC technicians, and society maintenance workers may need to enter later. The net plan should allow responsible access when required.",
      },
      {
        label: "Debris cleaning",
        text:
          "Old debris, nests, and waste should be removed before netting. Closing a dirty duct can create smell and maintenance complaints.",
      },
      {
        label: "Air movement",
        text:
          "Ducts often support ventilation. A net is usually better than a solid cover because it protects without trapping heat and moisture.",
      },
      {
        label: "Shared approval",
        text:
          "If the duct is part of common property, confirm society approval before work. This avoids disputes after installation.",
      },
      {
        label: "Inspection point",
        text:
          "The finished net should be easy to inspect from the accessible side. Residents should be able to see if any edge has loosened.",
      },
    ],
  },
  "building-covering-safety-nets": {
    eyebrow: "Detailed Checklist",
    title: "Building covering net checklist for larger Chennai projects",
    intro:
      "Building covering safety net work needs a project-style review. The team must understand the full span, height, access method, anchor positions, wind direction, and reason for covering. A proper written scope is important because building projects often involve residents, facility managers, builders, or contractors.",
    points: [
      {
        label: "Coverage purpose",
        text:
          "Identify whether the net is for open-shaft safety, facade protection, construction work, bird control, or falling-debris prevention. Each purpose needs different planning.",
      },
      {
        label: "Height and access",
        text:
          "Access method affects safety and price. Ladders, terrace access, scaffolding, and rope access have different manpower and time needs.",
      },
      {
        label: "Anchor points",
        text:
          "Large nets need reliable anchors because wind and tension pull across the full span. Weak fixing points can make the entire installation unstable.",
      },
      {
        label: "Wind movement",
        text:
          "The team should plan how the net will behave in wind. Loose large-area nets can flap, wear quickly, and disturb residents.",
      },
      {
        label: "Overlap and edges",
        text:
          "Edges and overlaps should be clear in the scope. Gaps around corners can defeat the purpose of a large safety cover.",
      },
      {
        label: "Work schedule",
        text:
          "Large projects need coordination with security, parking, lift use, and resident movement. A written schedule keeps the site easier to manage.",
      },
      {
        label: "Maintenance access",
        text:
          "Future facade, pipe, or shaft maintenance should be considered. A covering that blocks all service access can become a problem later.",
      },
      {
        label: "Inspection after weather",
        text:
          "Large nets should be checked after strong wind or heavy rain. The quote should make it clear who to call if a section loosens.",
      },
    ],
  },
  "terrace-safety-nets": {
    eyebrow: "Detailed Checklist",
    title: "Terrace safety net checklist for Chennai rooftops",
    intro:
      "Terrace safety nets face direct sun, wind, rain, and daily use. A proper quote should understand the terrace edge, parapet height, family activity, pets, play needs, water tank access, drainage, and waterproofing. These points help keep the terrace safer without creating maintenance trouble.",
    points: [
      {
        label: "Open edge length",
        text:
          "Measure every exposed edge, not only the front side. Terraces often have uneven corners, stair openings, and low parapet sections that need separate attention.",
      },
      {
        label: "Parapet strength",
        text:
          "The wall used for fixing should be strong enough. Old or cracked parapets may need a different anchor plan to avoid damage.",
      },
      {
        label: "Net height",
        text:
          "Terrace safety height should match how the area is used. Children, pets, and play zones may need taller coverage than simple edge marking.",
      },
      {
        label: "Waterproofing care",
        text:
          "If the terrace has waterproof coating, drilling should be discussed carefully. The fixing method should avoid unnecessary surface damage.",
      },
      {
        label: "Drain access",
        text:
          "Drain points must stay reachable. Blocking a drain can cause water stagnation and create bigger building problems during Chennai rain.",
      },
      {
        label: "Tank and service access",
        text:
          "Water tanks, solar units, antennas, and pipes need maintenance. The net line should not trap workers or block safe movement.",
      },
      {
        label: "Wind tension",
        text:
          "Terrace nets need strong tension and border support. Loose netting wears faster when exposed to open wind.",
      },
      {
        label: "Family use review",
        text:
          "Before finishing, walk the terrace and check whether the net affects drying, plants, seating, play, or regular cleaning. The space should remain usable.",
      },
    ],
  },
  "cricket-practice-nets": {
    eyebrow: "Detailed Checklist",
    title: "Cricket practice net checklist before setup",
    intro:
      "A cricket net should be planned around the players, ball type, available space, and nearby risk. A neat lane lets players practice confidently while protecting windows, vehicles, walls, and people nearby. This checklist helps avoid under-built nets that tear, sag, or fail to contain shots.",
    points: [
      {
        label: "Ball type",
        text:
          "Tennis ball, rubber ball, season ball, and leather ball create different impact. Material choice should start here before discussing final price.",
      },
      {
        label: "Player level",
        text:
          "Children's casual practice, school coaching, and academy training need different strength. A daily-use lane should not be built like a temporary home net.",
      },
      {
        label: "Lane dimensions",
        text:
          "Length, width, height, and run-up space decide how useful the lane will be. A cramped lane may technically fit but feel poor in practice.",
      },
      {
        label: "Roof coverage",
        text:
          "Lofted shots, top edges, and high bounce can leave the lane if roof netting is missing. Batting practice often needs top coverage.",
      },
      {
        label: "Support structure",
        text:
          "Poles, frames, cables, wall brackets, or terrace anchors should be chosen based on the site. Support is as important as mesh quality.",
      },
      {
        label: "Nearby property",
        text:
          "Windows, parking, balcony lines, and walking paths must be shown before installation. The net should protect the surrounding area from missed shots.",
      },
      {
        label: "Entry and movement",
        text:
          "Players and coaches need safe entry, exit, and side movement. A lane that is hard to enter becomes inconvenient in daily practice.",
      },
      {
        label: "Repair plan",
        text:
          "Cricket nets take impact. Ask how torn panels, loose corners, or damaged supports can be serviced later, especially in academy setups.",
      },
    ],
  },
  "bird-spikes-installation": {
    eyebrow: "Detailed Checklist",
    title: "Bird spike checklist before fixing ledges",
    intro:
      "Bird spikes work best when the full perch line is cleaned, measured, and covered. They should not be placed randomly on one visible spot while nearby ledges stay open. This checklist helps make the installation cleaner, longer-lasting, and easier to compare across quotes.",
    points: [
      {
        label: "Exact perch line",
        text:
          "Identify where birds actually sit. Dropping marks, feathers, and stains usually reveal the true perch line better than guessing from the ground.",
      },
      {
        label: "Surface cleaning",
        text:
          "Spikes need a clean base. Dust, waste, moss, or loose paint can weaken adhesive and make the strips detach early.",
      },
      {
        label: "Ledge width",
        text:
          "Wide ledges may need wider coverage or multiple rows. A narrow spike strip on a broad ledge may leave enough room for birds to sit.",
      },
      {
        label: "Fixing method",
        text:
          "Concrete, tile, metal, plastic, and painted surfaces need different fixing decisions. The team should choose the method after checking the actual surface.",
      },
      {
        label: "Access safety",
        text:
          "High ledges and exterior points need careful work planning. The quote should include access difficulty so there is no confusion on site.",
      },
      {
        label: "Nearby shift points",
        text:
          "Birds often move to the closest comfortable ledge. A useful plan checks surrounding beams, AC units, parapets, and sign boards.",
      },
      {
        label: "Visual neatness",
        text:
          "Spikes are visible, so alignment matters. Straight strips and clean edges make the installation look intentional rather than messy.",
      },
      {
        label: "After-care",
        text:
          "Spikes should be checked after heavy rain or exterior cleaning. Early inspection helps identify loose strips before birds return.",
      },
    ],
  },
  "cloth-hanger-installation": {
    eyebrow: "Detailed Checklist",
    title: "Cloth hanger checklist for daily Chennai laundry",
    intro:
      "A cloth hanger system is touched almost every day, so comfort matters as much as price. The right installation should suit ceiling strength, family laundry load, balcony width, pulley reach, rod spacing, window movement, and existing safety nets or grills. This checklist helps choose a system that stays useful after the first week.",
    points: [
      {
        label: "Ceiling surface",
        text:
          "Concrete, repaired plaster, tile, and false ceiling areas need different fixing decisions. The installer should check strength before drilling.",
      },
      {
        label: "Pulley reach",
        text:
          "The rope should be easy to reach and pull without stretching awkwardly. Comfortable operation is important for everyday use.",
      },
      {
        label: "Rod spacing",
        text:
          "Rods placed too close together slow drying and crowd wet clothes. Good spacing improves airflow in Chennai's humid weather.",
      },
      {
        label: "Load capacity",
        text:
          "Families drying towels, jeans, uniforms, and bedsheets need stronger rods and brackets than homes with light laundry only.",
      },
      {
        label: "Walking clearance",
        text:
          "The hanger should lift high enough to keep the balcony usable. Wet clothes should not block the door, washing machine, or walking path.",
      },
      {
        label: "Window movement",
        text:
          "Check whether windows, ventilators, or balcony doors open near the rods. A small clearance mistake can irritate the family every day.",
      },
      {
        label: "Safety net coordination",
        text:
          "If the balcony already has nets or invisible grills, the hanger should not rub against them. The team should plan both systems together.",
      },
      {
        label: "Pulley care",
        text:
          "After installation, ask how to lift evenly, avoid overload, and report rough pulley movement. Simple care keeps the system smooth for longer.",
      },
    ],
  },
} satisfies Record<ServiceSlug, ManualGuideSection>;

const chennaiServiceManualFinalGuides = {
  "balcony-safety-nets": {
    eyebrow: "Quote Review",
    title: "Final quote review for balcony safety nets",
    intro:
      "Before approving balcony safety net work, read the quote like a homeowner who will live with the installation every day. A clear quote should help you understand material, edge closure, access, price, and support without needing repeated phone calls.",
    points: [
      {
        label: "Scope should name the balcony",
        text:
          "The quote should say whether it covers the main balcony, utility balcony, side returns, AC pipe gaps, and any old net removal. If the scope is vague, two quotes that look similar may include very different work.",
      },
      {
        label: "Price should explain the reason",
        text:
          "A balcony safety net rate should be connected to size, height, net grade, rope border, and fixing difficulty. A very low price without those details can hide weak material or missed corner work.",
      },
      {
        label: "Timing should match society rules",
        text:
          "Ask how long the job will take, whether drilling is involved, and what time the team will arrive. Chennai apartments often have lift, parking, and drilling-hour restrictions that should be planned before the visit.",
      },
      {
        label: "Support should be practical",
        text:
          "After installation, you should know how to clean the net, what not to hang from it, and who to call if a hook loosens or a corner needs checking later.",
      },
    ],
  },
  "children-safety-nets": {
    eyebrow: "Quote Review",
    title: "Final quote review for children safety nets",
    intro:
      "A children safety net quote should feel calm, specific, and safety-led. Parents should be able to see which openings are covered, why the fixing method was chosen, and how the finished work will reduce risk without making the home uncomfortable.",
    points: [
      {
        label: "Risk points should be listed",
        text:
          "The quote should mention balcony edges, window openings, low sill areas, side gaps, and furniture-related climb points. If it only says square feet, it may not be thinking deeply about child safety.",
      },
      {
        label: "Material should suit safety use",
        text:
          "Ask what net and rope are being used and whether the same material is suitable for children and pets. The cheapest mesh used for light bird control may not be the right choice for a safety-first home.",
      },
      {
        label: "Finish should be child-aware",
        text:
          "Reachable hooks, loose rope, sharp ends, and sagging mesh should be avoided. The quote should include a clean finish because children may touch or pull what they can reach.",
      },
      {
        label: "Guidance should be included",
        text:
          "The team should explain that the net is a protection layer, not a climbing or play surface. Parents should also know when to call for inspection if any section is disturbed.",
      },
    ],
  },
  "pigeon-safety-nets": {
    eyebrow: "Quote Review",
    title: "Final quote review for pigeon safety nets",
    intro:
      "A pigeon safety net quote should make the bird route clear. The goal is not only to cover the front of the balcony, but to stop the repeat entry that causes waste, smell, and cleaning trouble.",
    points: [
      {
        label: "Entry points should be named",
        text:
          "The quote should mention front opening, side pockets, ceiling corners, AC pipes, ledges, and any visible nesting area. If these are not listed, the job may only cover the easiest part.",
      },
      {
        label: "Cleaning should be clear",
        text:
          "Ask whether droppings, feathers, old nesting material, and ledge cleaning are included. Netting over dirty surfaces may stop new entry but leave the balcony unpleasant.",
      },
      {
        label: "Access should remain possible",
        text:
          "AC service, drain cleaning, and window cleaning may still be needed. The quote should explain how the net layout protects the space without blocking future maintenance.",
      },
      {
        label: "Nearby ledges should be checked",
        text:
          "Birds may shift to another ledge if only one spot is treated. A good quote should say whether spikes, extra netting, or cleaning is needed nearby.",
      },
    ],
  },
  "window-invisible-grills": {
    eyebrow: "Quote Review",
    title: "Final quote review for window invisible grills",
    intro:
      "A window invisible grill quote should help you compare cable quality, spacing, hardware, frame fixing, and after-support. A premium-looking service needs precise details because small shortcuts are easy to notice on a window.",
    points: [
      {
        label: "Cable details should be written",
        text:
          "Ask for cable type, coating, spacing, and hardware details. Without this, a lower price may simply mean weaker fittings or wider spacing that does not match the safety need.",
      },
      {
        label: "Window use should stay normal",
        text:
          "The quote should consider sliding panels, casement movement, mosquito mesh, curtains, and cleaning. A grill that blocks the normal window routine will feel wrong even if it looks neat.",
      },
      {
        label: "Frame fixing should be checked",
        text:
          "The team should confirm whether the frame, wall, or sill can take the anchors. Weak plaster or narrow frame edges should be handled before price is finalized.",
      },
      {
        label: "Tension support should be clear",
        text:
          "Invisible grills depend on cable tension. Ask how the lines are tightened and what service support is available if any cable loosens after use.",
      },
    ],
  },
  "balcony-invisible-grills": {
    eyebrow: "Quote Review",
    title: "Final quote review for balcony invisible grills",
    intro:
      "A balcony invisible grill quote should balance safety, view, and facade finish. Because this is a premium installation, the details should be clear before work starts, especially in Chennai apartments with society rules.",
    points: [
      {
        label: "Cable spacing should match use",
        text:
          "The quote should not use one spacing for every home. Children, pets, high floors, and view-facing balconies may need different cable spacing and tension planning.",
      },
      {
        label: "Hardware should look neat",
        text:
          "Ask how corners, turnbuckles, anchors, and cable ends will appear. A balcony invisible grill can lose its premium feel if the hardware line is messy.",
      },
      {
        label: "Society approval should be planned",
        text:
          "Some buildings have facade rules and drilling timings. The quote should fit those rules so the team does not arrive and discover permission problems.",
      },
      {
        label: "Bird control should be separate",
        text:
          "Invisible grills are mainly for safety and view. If pigeons are entering, the quote should clearly say whether netting or spikes are also required.",
      },
    ],
  },
  "window-safety-nets": {
    eyebrow: "Quote Review",
    title: "Final quote review for window safety nets",
    intro:
      "A window safety net quote should explain which windows are covered, what safety purpose is being handled, and how the window will remain usable after installation. The best quote is simple, specific, and easy to check on site.",
    points: [
      {
        label: "Each window should be listed",
        text:
          "The quote should name bedroom, kitchen, utility, or hall windows separately. This avoids confusion when several windows have different sizes and opening styles.",
      },
      {
        label: "Purpose should be clear",
        text:
          "Child safety, pet safety, and bird control need different corner detailing. The quote should state the purpose so the installer does not treat every window the same.",
      },
      {
        label: "Window movement should remain",
        text:
          "A safety net should not block the panel you open daily. Ask how the net will sit with sliding tracks, hinges, grills, and mosquito mesh.",
      },
      {
        label: "Rental removal should be discussed",
        text:
          "If the home is rented, ask about removal marks and future takedown. A careful fixing plan can make the landlord conversation easier later.",
      },
    ],
  },
  "duct-area-safety-nets": {
    eyebrow: "Quote Review",
    title: "Final quote review for duct area safety nets",
    intro:
      "A duct area safety net quote should protect the opening without creating maintenance problems. The quote must respect pipes, cables, damp walls, future access, and shared apartment responsibility.",
    points: [
      {
        label: "Purpose should be written",
        text:
          "The quote should say whether the duct net is for child safety, debris control, bird control, or service-shaft safety. Material and fixing should match that purpose.",
      },
      {
        label: "Pipes should stay serviceable",
        text:
          "Ducts often carry plumbing and AC lines. The quote should avoid drilling near service lines and should allow future repair access.",
      },
      {
        label: "Common-area approval matters",
        text:
          "If the duct belongs to the building or society, get approval before work. The quote should be clear enough for residents or facility managers to understand.",
      },
      {
        label: "Cleaning and dampness should be checked",
        text:
          "Old debris, nesting material, or damp plaster can affect the job. Ask whether cleaning is included and whether the wall is strong enough for fixing.",
      },
    ],
  },
  "building-covering-safety-nets": {
    eyebrow: "Quote Review",
    title: "Final quote review for building covering safety nets",
    intro:
      "A building covering quote should read like a project scope, not a quick rate message. It should explain area, purpose, material, access, anchor method, schedule, and maintenance expectations so all decision makers understand the work.",
    points: [
      {
        label: "Coverage area should be mapped",
        text:
          "The quote should describe the exact facade, shaft, open side, or building portion being covered. Large projects can become confusing if the edges are not defined.",
      },
      {
        label: "Access method should be clear",
        text:
          "Ladders, scaffolding, terrace access, or rope access affect price and safety. The quote should not hide access planning behind a simple material rate.",
      },
      {
        label: "Anchors should be explained",
        text:
          "Large nets pull differently from small balcony nets. The quote should mention anchor points, edge support, and how wind movement will be controlled.",
      },
      {
        label: "Maintenance should be planned",
        text:
          "Building work may need future inspection, repair, or removal. Ask how the team handles loose sections after weather or building maintenance.",
      },
    ],
  },
  "terrace-safety-nets": {
    eyebrow: "Quote Review",
    title: "Final quote review for terrace safety nets",
    intro:
      "A terrace safety net quote should account for open edges, weather, parapet condition, waterproofing, drains, and family use. Terrace work is exposed to more sun and wind than window or balcony work, so the quote should be more detailed.",
    points: [
      {
        label: "Every open edge should be included",
        text:
          "The quote should mention each side of the terrace, stair opening, low parapet, and risky corner. One missed edge can reduce the value of the whole installation.",
      },
      {
        label: "Waterproofing should be protected",
        text:
          "If the terrace has coating or recent waterproofing, ask how drilling will be handled. Fixing should avoid unnecessary damage to the surface.",
      },
      {
        label: "Drain and tank access should remain",
        text:
          "The net should not block rainwater drains, water tank service, pipes, solar units, or regular terrace cleaning. Maintenance access is part of good planning.",
      },
      {
        label: "Wind exposure should affect material",
        text:
          "Open terraces can pull hard on loose nets. The quote should explain net grade, rope border, hook spacing, and tension for Chennai weather.",
      },
    ],
  },
  "cricket-practice-nets": {
    eyebrow: "Quote Review",
    title: "Final quote review for cricket practice nets",
    intro:
      "A cricket practice net quote should describe the complete lane, not just mesh price. The customer should understand dimensions, ball type, net strength, supports, roof coverage, installation method, and repair support before booking.",
    points: [
      {
        label: "Lane dimensions should be fixed",
        text:
          "The quote should mention length, width, height, roof coverage, and run-up space. Without dimensions, two cricket net quotes cannot be compared fairly.",
      },
      {
        label: "Ball type should decide material",
        text:
          "Leather-ball practice needs stronger material and support than tennis-ball play. The quote should clearly state which use case the net is built for.",
      },
      {
        label: "Support cost should be separate",
        text:
          "Poles, brackets, cables, frames, and terrace anchors can change the total budget. A mesh-only price may look low but may not create a usable lane.",
      },
      {
        label: "Repair support should be discussed",
        text:
          "Cricket nets take repeated impact. Ask how damaged mesh, loose corners, or support issues can be serviced later, especially for academy and daily-use setups.",
      },
    ],
  },
  "bird-spikes-installation": {
    eyebrow: "Quote Review",
    title: "Final quote review for bird spike installation",
    intro:
      "A bird spike quote should be based on running feet, surface preparation, access, spike quality, and the full perch route. If only one visible ledge is treated, birds may simply move nearby.",
    points: [
      {
        label: "Running feet should be shown",
        text:
          "The quote should state the measured ledge length, not only a total amount. This helps you compare how much perch line is actually being covered.",
      },
      {
        label: "Cleaning should be included or separated",
        text:
          "Spikes fixed on dirty surfaces may not hold well. Ask whether surface cleaning, droppings removal, and preparation are included in the price.",
      },
      {
        label: "Fixing method should match surface",
        text:
          "Tile, concrete, painted ledge, metal, and plastic AC covers do not behave the same. The quote should reflect the actual surface.",
      },
      {
        label: "Nearby ledges should be reviewed",
        text:
          "Birds may move to a nearby pipe, beam, sign board, or AC unit. A good quote should mention whether those areas also need treatment.",
      },
    ],
  },
  "cloth-hanger-installation": {
    eyebrow: "Quote Review",
    title: "Final quote review for cloth hanger installation",
    intro:
      "A cloth hanger quote should be clear about rods, pulleys, brackets, rope, fixing, and usable drying space. The right system should fit the ceiling and daily routine, not only the available width.",
    points: [
      {
        label: "Material list should be clear",
        text:
          "The quote should mention rod count, rod material, pulley type, rope, brackets, screws, and installation. This avoids comparing a complete system with a partial price.",
      },
      {
        label: "Ceiling strength should be checked",
        text:
          "Concrete, false ceiling, repaired plaster, and damp patches need different decisions. The team should check the ceiling before finalizing fixing points.",
      },
      {
        label: "Daily use should feel easy",
        text:
          "Pulley reach, rod height, walking clearance, and window movement should be planned. A hanger that is hard to lift or blocks movement will irritate the family every day.",
      },
      {
        label: "Load and care should be explained",
        text:
          "Ask how much weight the system can handle and how to use the pulley evenly. Simple guidance prevents overloading and keeps the system smoother for longer.",
      },
    ],
  },
} satisfies Record<ServiceSlug, ManualGuideSection>;

const chennaiServiceManualClosings = {
  "balcony-safety-nets": [
    "For balcony safety nets, the best result is the one that disappears into daily life. The balcony should still feel open for air, light, plants, drying clothes, and cleaning, while the open edge feels safer for the family. That balance comes from measurement, tension, and careful corner work.",
    "Use the Chennai service page as a practical buying guide before calling. When photos, measurements, purpose, and access details are shared clearly, the quote becomes faster, the visit becomes smoother, and the finished balcony safety net is easier to trust.",
  ],
  "children-safety-nets": [
    "Children safety nets should be chosen with patience. A parent is not only buying mesh; they are adding a layer of confidence around the places where children move, lean, and play. That is why the page focuses on reach, climb points, side gaps, window height, and family routine.",
    "Before booking, walk through the home and look at each opening from a child's eye level. Share those concerns with the team. A better conversation creates a better installation, especially in Chennai apartments where balconies and windows are used every day.",
  ],
  "pigeon-safety-nets": [
    "Pigeon safety net work is most successful when it starts with observation. The stains, ledges, corners, and pipe gaps tell the story of how birds are using the building. Covering the obvious front opening may not be enough if the real route is hidden at the side.",
    "A clean and well-tensioned net can make a neglected balcony usable again. For Chennai homes that deal with repeated bird mess, the right plan should reduce cleaning stress, protect the space, and still allow maintenance access when needed.",
  ],
  "window-invisible-grills": [
    "Window invisible grills are worth doing slowly and neatly. The customer sees those cable lines every day from inside the room, so cable spacing, alignment, frame fixing, and hardware finish all matter. A rushed job can make a premium product look ordinary.",
    "Before confirming the quote, check how the grill works with curtains, mosquito mesh, sliding panels, cleaning, and room airflow. A good Chennai window invisible grill should improve safety without changing the comfort of the room.",
  ],
  "balcony-invisible-grills": [
    "Balcony invisible grills are chosen by homeowners who want safety without losing the view. The finish should look calm from inside the home and respectful from the building exterior. That is why spacing, tension, corners, and society rules need clear planning.",
    "When comparing quotes, look for the installer who talks about the balcony as a living space, not just a cable span. Chennai balconies carry plants, laundry, seating, pets, and daily air, so the grill should protect without making the space feel busy.",
  ],
  "window-safety-nets": [
    "Window safety nets work best when the installer understands how the room is used. A bedroom window beside a cot, a kitchen window near an exhaust, and a utility window with bird activity all need different placement and finish.",
    "A clear Chennai window net quote should keep safety, air, light, cleaning, and removal in view. If the home is rented, mention it early so the fixing method is practical now and easier to handle later.",
  ],
  "duct-area-safety-nets": [
    "Duct area safety nets protect spaces that residents often ignore until a problem appears. Because ducts may carry plumbing, AC lines, cables, and maintenance routes, the net should be planned with responsibility rather than simply closed in a hurry.",
    "For Chennai apartments, duct work often needs society coordination and clear access planning. A good quote should protect the opening, leave service lines reachable, and make future maintenance easier instead of harder.",
  ],
  "building-covering-safety-nets": [
    "Building covering safety nets need a larger-site mindset. The installer must think about people below, workers above, wind movement, facade access, anchor loads, and the purpose of the covering. A rate alone cannot explain that work properly.",
    "For Chennai societies, builders, and facility teams, the best starting point is a written scope with photos and access details. That makes comparison cleaner and helps everyone understand what will be covered before installation begins.",
  ],
  "terrace-safety-nets": [
    "Terrace safety nets face the hardest weather on a home: direct sun, open wind, rain, and dust. A good terrace net should protect the edge but still leave tanks, drains, waterproofing, and cleaning paths usable.",
    "Before booking in Chennai, think about how the terrace is actually used. Evening sitting, drying clothes, children's play, pets, plants, and maintenance all affect the best net height, fixing line, and material choice.",
    "A slightly longer discussion before installation can prevent the common terrace problems: blocked drains, awkward tank access, loose wind-facing netting, and drilling that ignores waterproofing.",
  ],
  "cricket-practice-nets": [
    "Cricket practice nets should be built around play, not only around available space. Ball type, player age, shot direction, run-up, roof coverage, and nearby windows all decide whether the lane feels safe and useful.",
    "For Chennai homes, academies, schools, and apartment play zones, a strong quote should describe the complete setup. Net material, supports, dimensions, entry points, and repair support matter more than a mesh-only price.",
    "If players will practice every week, choose the net like sports equipment, not temporary covering. Strong support and repair planning save money after repeated ball impact.",
  ],
  "bird-spikes-installation": [
    "Bird spikes are simple only when the perch route is simple. In real Chennai buildings, birds may sit on AC units, narrow ledges, sign boards, pipes, parapets, and beams. The quote should follow that full line.",
    "A neat spike installation starts with cleaning and surface checking. When the base is prepared properly and nearby ledges are reviewed, spikes can reduce repeat sitting without covering the full balcony or window opening.",
    "The best spike work looks orderly from the street or balcony, holds firmly after rain, and covers enough nearby perch points to stop the problem from shifting.",
  ],
  "cloth-hanger-installation": [
    "A cloth hanger installation should make daily laundry easier, not just add rods to the ceiling. Pulley reach, rod spacing, ceiling strength, window movement, and walking clearance decide whether the family enjoys using it every day.",
    "For Chennai homes where sun, humidity, and sudden rain change drying plans quickly, a well-placed hanger gives practical flexibility. Share balcony photos and laundry load honestly so the quote matches real family use.",
    "A small planning check before drilling also protects nearby safety nets, invisible grills, lights, fans, and balcony doors from daily rubbing or obstruction.",
  ],
} satisfies Record<ServiceSlug, string[]>;

export const getChennaiServiceManualPage = (slug: ServiceSlug): ChennaiServiceManualPage => ({
  ...chennaiServiceManualPages[slug],
  guideSections: [
    ...chennaiServiceManualGuides[slug],
    chennaiServiceManualExtraGuides[slug],
    chennaiServiceManualFinalGuides[slug],
  ],
  closing: chennaiServiceManualClosings[slug],
});
