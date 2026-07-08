import { chennaiConfig } from "../config/chennai.config";
import type { ManualServiceAreaEntry, ManualServicePage } from "./types";

type ActiveServiceSlug = (typeof chennaiConfig.services)[number]["slug"];
type ActiveAreaSlug = (typeof chennaiConfig.areas)[number]["slug"];

type ManualServiceCopy = {
  lead: string;
  commonNeed: string;
  siteFocus: string;
  materialLine: string;
  installLine: string;
  finishLine: string;
  maintenanceLine: string;
  quoteLine: string;
  primaryChecks: string[];
  outcomes: string[];
};

const activeServiceSlugs = new Set<string>(
  chennaiConfig.services.map((service) => service.slug)
);

const areaNamesBySlug = new Map<string, string>(
  chennaiConfig.areas.map((area) => [area.slug, area.name])
);

const serviceNamesBySlug = new Map<string, string>(
  chennaiConfig.services.map((service) => [service.slug, service.name])
);

const serviceCopyBySlug = {
  "balcony-safety-nets": {
    lead:
      "A balcony safety net should protect the open edge while keeping the balcony bright, usable, and easy to clean.",
    commonNeed:
      "children lean near railings, pets move through gaps, pigeons enter side openings, or daily drying space sits close to the edge",
    siteFocus: "railing height, side gaps, open corners, drying space, planter edges, and AC ledges",
    materialLine: "UV-stable mesh, strong rope borders, neat hook spacing, and balanced tension",
    installLine:
      "The border is fixed around the usable opening with tight corners, even spacing, and enough access for sweeping, drying clothes, and normal balcony use.",
    finishLine:
      "the balcony feels safer without looking boxed in or difficult to maintain",
    maintenanceLine:
      "check the corner knots after heavy wind or rain and keep sharp objects away from the mesh",
    quoteLine:
      "Pricing depends on the balcony length, side returns, floor access, fixing surface, and whether pigeon control is included.",
    primaryChecks: ["railing gap", "side return", "floor height", "cleaning route"],
    outcomes: ["safer balcony use", "closed bird routes", "a tidy edge finish"],
  },
  "children-safety-nets": {
    lead:
      "Children safety nets are planned for homes where small movements near windows, balconies, or open indoor edges need extra protection.",
    commonNeed:
      "children climb furniture, reach window gaps, push toward balcony edges, or play near openings that look harmless during adult use",
    siteFocus: "climb points, furniture position, grill spacing, window swing, balcony height, and family movement",
    materialLine: "strong mesh, close gap planning, smooth edge tension, and secure child-safe fixing",
    installLine:
      "The layout is planned around the child's reach, not just the opening size, so furniture position and daily walking paths are checked before fixing.",
    finishLine:
      "the home feels calmer while windows, balconies, and daily movement still work normally",
    maintenanceLine:
      "avoid hanging weight on the net and ask for a tension check if a corner becomes loose",
    quoteLine:
      "A clear quote needs the opening count, gap size, access height, and whether the work is for windows, balconies, or mixed home safety.",
    primaryChecks: ["climb point", "gap width", "furniture position", "opening height"],
    outcomes: ["safer child movement", "pet-friendly openings", "calmer family use"],
  },
  "pigeon-safety-nets": {
    lead:
      "Pigeon safety nets work best when the actual bird route is blocked instead of loosely covering the front of the space.",
    commonNeed:
      "pigeons keep nesting behind pipes, sitting on ledges, entering balcony corners, or leaving droppings near utility areas",
    siteFocus: "nesting pockets, side gaps, beam openings, AC ledges, pipe corners, and cleaning access",
    materialLine: "tight net lines, closed corner pockets, durable border rope, and discreet fixing",
    installLine:
      "The net is shaped around ledges and side gaps so pigeons cannot slip through the corners after the main face is covered.",
    finishLine:
      "the balcony or utility space stays cleaner without blocking normal light, air, or cleaning access",
    maintenanceLine:
      "clear old nesting material before installation and rinse the edge areas during normal cleaning",
    quoteLine:
      "The cost depends on entry points, ledge depth, cleaning condition, floor access, and whether extra side pockets are needed.",
    primaryChecks: ["bird route", "ledge depth", "side gap", "cleaning access"],
    outcomes: ["blocked pigeon entry", "cleaner utility corners", "less daily sweeping"],
  },
  "window-invisible-grills": {
    lead:
      "Window invisible grills give stainless steel cable safety while keeping the window view open and the room easy to ventilate.",
    commonNeed:
      "families want window safety without heavy bars, bulky grills, or a closed feeling inside premium rooms",
    siteFocus: "window frame strength, cable spacing, sill height, view lines, and cleaning access",
    materialLine: "stainless steel cables, firm side channels, measured spacing, and clean tensioning",
    installLine:
      "The cable line is aligned to the window frame so the grill looks intentional from inside and does not interrupt normal ventilation.",
    finishLine:
      "the window keeps its open view while gaining a strong safety boundary",
    maintenanceLine:
      "wipe the cables during regular cleaning and ask for support if tension or alignment changes",
    quoteLine:
      "Final pricing depends on window size, frame condition, fixing surface, cable spacing, and access for drilling.",
    primaryChecks: ["window frame", "cable spacing", "sill height", "fixing surface"],
    outcomes: ["clear window views", "premium window safety", "pet-safe ventilation"],
  },
  "balcony-invisible-grills": {
    lead:
      "Balcony invisible grills are for homes that need edge safety but still want the balcony view, airflow, and facade line to stay open.",
    commonNeed:
      "high-rise balconies need child or pet safety, but owners do not want bulky metal grills or a closed elevation",
    siteFocus: "balcony frame lines, cable spacing, facade appearance, floor height, and pet movement",
    materialLine: "stainless steel cable runs, aligned channels, measured drilling, and even tension",
    installLine:
      "The cable run is set out with straight vertical lines, steady tension, and side fixing that respects the balcony shape.",
    finishLine:
      "the balcony feels open while gaining a strong safety boundary",
    maintenanceLine:
      "clean the cables with a soft cloth and call for a check if any cable loosens after long use",
    quoteLine:
      "The quote depends on balcony width, fixing surface, side returns, cable count, floor height, and access rules.",
    primaryChecks: ["balcony frame", "cable tension", "facade line", "edge clearance"],
    outcomes: ["open balcony view", "premium child safety", "pet-safe edge protection"],
  },
  "window-safety-nets": {
    lead:
      "Window safety nets make ventilation safer for families while also helping reduce bird entry through open window gaps.",
    commonNeed:
      "windows are kept open for air, children reach the sill, pets sit near the frame, or birds enter through kitchen and utility windows",
    siteFocus: "window swing, grill gap, frame depth, hinge movement, cleaning access, and room use",
    materialLine: "window-friendly mesh, neat anchor points, tight corners, and ventilation-aware spacing",
    installLine:
      "The fixing is planned so shutters, grills, and cleaning access still work after the net is installed.",
    finishLine:
      "the window becomes safer while still opening, ventilating, and looking tidy from inside",
    maintenanceLine:
      "dust the mesh during regular cleaning and avoid pulling it while opening or closing shutters",
    quoteLine:
      "The price changes by window count, frame type, access, opening style, and whether bird control is also needed.",
    primaryChecks: ["window swing", "frame type", "grill gap", "cleaning access"],
    outcomes: ["safer ventilation", "child-safe windows", "reduced bird entry"],
  },
  "duct-area-safety-nets": {
    lead:
      "Duct area safety nets cover open service shafts and utility voids without blocking future maintenance work.",
    commonNeed:
      "ducts collect waste, birds enter service shafts, open voids feel unsafe, or maintenance teams still need access to pipes",
    siteFocus: "pipe clearance, access depth, cleaning route, drainage, and maintenance openings",
    materialLine: "shaft-safe mesh, strong perimeter fixing, clear service access, and measured overlap",
    installLine:
      "The net is placed to close the unsafe opening while keeping a sensible route for plumbers, AC work, and cleaning.",
    finishLine:
      "the service void is safer and cleaner without becoming difficult to maintain",
    maintenanceLine:
      "keep the access point clear and avoid cutting the net for service work without refixing the edge properly",
    quoteLine:
      "The quote depends on shaft depth, pipe layout, access difficulty, border length, and maintenance opening needs.",
    primaryChecks: ["void depth", "pipe clearance", "drainage path", "maintenance access"],
    outcomes: ["covered shafts", "safer utility edges", "service-friendly access"],
  },
  "building-covering-safety-nets": {
    lead:
      "Building covering safety nets are used when a larger facade, open side, shaft, or work edge needs organized protection.",
    commonNeed:
      "a building has open maintenance edges, exposed shafts, facade gaps, or larger areas where small local nets will look patched",
    siteFocus: "coverage span, wind exposure, anchor strength, access height, and building rules",
    materialLine: "heavy-duty netting, reinforced borders, planned anchor intervals, and secure coverage lines",
    installLine:
      "The coverage is measured in sections so tension, wind load, access, and future inspection points are handled properly.",
    finishLine:
      "the building face looks organized instead of covered with uneven temporary patches",
    maintenanceLine:
      "inspect anchors after strong weather and keep access notes for future building work",
    quoteLine:
      "Pricing depends on coverage area, height, access equipment, anchor surface, wind exposure, and installation timing.",
    primaryChecks: ["coverage span", "anchor strength", "wind exposure", "access height"],
    outcomes: ["wide safety coverage", "clean facade planning", "reliable maintenance edges"],
  },
  "terrace-safety-nets": {
    lead:
      "Terrace safety nets protect open rooftop edges and play corners while keeping the terrace practical for regular use.",
    commonNeed:
      "families use the terrace for play, drying, pets, or evening movement near parapets and open upper-floor edges",
    siteFocus: "parapet height, wind path, drainage, play movement, and access around the roof",
    materialLine: "weather-ready netting, strong border rope, sturdy anchors, and wind-aware tension",
    installLine:
      "The fixing line is planned around parapets, water flow, walking paths, and any shared terrace routines.",
    finishLine:
      "the terrace feels safer without blocking normal rooftop movement",
    maintenanceLine:
      "check exposed corners after storms and keep drainage points clear of debris",
    quoteLine:
      "The quote depends on open-edge length, parapet height, wind exposure, anchor surface, and access to the rooftop.",
    primaryChecks: ["parapet height", "wind path", "drainage point", "access route"],
    outcomes: ["safer rooftops", "controlled play areas", "clean open-edge protection"],
  },
  "cricket-practice-nets": {
    lead:
      "Cricket practice nets keep the ball inside the practice area so players can train without disturbing nearby windows or homes.",
    commonNeed:
      "terraces, academies, societies, or small grounds need ball control for batting practice and casual play",
    siteFocus: "ball direction, run-up space, support height, nearby windows, ground fixing, and player movement",
    materialLine: "impact-ready mesh, planned pole spacing, firm top lines, and safe side coverage",
    installLine:
      "The lane is planned around the direction of shots, side escape points, player clearance, and the strength of the supports.",
    finishLine:
      "the practice area controls the ball without making training awkward",
    maintenanceLine:
      "check impact zones, pole joints, and ground anchoring after heavy use",
    quoteLine:
      "Pricing depends on lane size, height, pole or frame support, mesh grade, ground surface, and whether the setup is fixed or movable.",
    primaryChecks: ["ball direction", "practice height", "pole support", "ground surface"],
    outcomes: ["controlled cricket practice", "safer play boundaries", "usable training space"],
  },
  "bird-spikes-installation": {
    lead:
      "Bird spikes stop birds from settling on narrow ledges, parapets, pipes, and AC edges without covering the whole opening.",
    commonNeed:
      "birds sit on ledges, stain walls, nest near AC units, or keep returning to the same narrow perch line",
    siteFocus: "perch width, surface type, access height, cleaning need, and visible alignment",
    materialLine: "corrosion-aware spikes, clean adhesive or fixing choice, and straight edge placement",
    installLine:
      "The spikes are installed only on real perch lines after the ledge is cleaned, so the result stays neat and effective.",
    finishLine:
      "the bird-control line stays discreet and does not clutter the elevation",
    maintenanceLine:
      "clean the ledge before installation and check the strip after heavy dust or rain",
    quoteLine:
      "The price depends on ledge length, surface condition, access height, fixing method, and cleaning preparation.",
    primaryChecks: ["perch width", "surface type", "access height", "ledge cleaning"],
    outcomes: ["reduced perching", "cleaner ledges", "discreet bird control"],
  },
  "cloth-hanger-installation": {
    lead:
      "Cloth hanger installation gives a cleaner drying setup for balconies and utility spaces without blocking everyday movement.",
    commonNeed:
      "families need more drying space, ceiling-mounted rods, smoother pulley use, or a neater utility balcony",
    siteFocus: "ceiling strength, pulley reach, walking clearance, window swing, and wet-floor movement",
    materialLine: "sturdy ceiling hardware, smooth pulley action, aligned rods, and practical mounting height",
    installLine:
      "The rods and pulleys are positioned so clothes can dry without blocking doors, windows, walking paths, or safety work.",
    finishLine:
      "the drying setup saves space and looks planned instead of cluttered",
    maintenanceLine:
      "keep the pulley clean, avoid overloading the rods, and report any ceiling movement early",
    quoteLine:
      "Pricing depends on ceiling condition, rod count, pulley type, mounting height, and the usable drying area.",
    primaryChecks: ["ceiling strength", "pulley reach", "walking clearance", "drying space"],
    outcomes: ["better drying space", "clean ceiling alignment", "daily utility comfort"],
  },
} satisfies Record<ActiveServiceSlug, ManualServiceCopy>;

type PriorityAreaServiceCopy = {
  heading: string;
  localParagraphs: string[];
  priceParagraph: string;
  comparisonParagraph: string;
  priceRange: string;
  metaHook: string;
};

type AreaLocalProfile = {
  nearby: string;
  propertyMix: string;
  serviceTone: string;
  accessNote: string;
  visibleFinish: string;
  metaHook: string;
};

type ServiceLocalGuide = {
  heading: string;
  localNeed: string;
  priceRange: string;
  priceFactors: string;
  comparisonFocus: string;
  metaHook: string;
};

const priorityAreaServiceCopy: Partial<
  Record<string, Partial<Record<ActiveServiceSlug, PriorityAreaServiceCopy>>>
> = {
  adambakkam: {
    "balcony-safety-nets": {
      heading: "Balcony safety nets for Adambakkam flats, family balconies, and utility edges",
      localParagraphs: [
        "Adambakkam homes often sit between compact apartment streets, older independent houses, and newer flats toward the Nanganallur, Velachery, and St. Thomas Mount sides. Balcony safety work here has to respect drying space, side returns, AC ledges, and building access instead of simply stretching a front-facing net.",
        "For smaller balconies, the neatness of the border matters as much as the mesh. A good site check looks at railing height, the side gap near walls, cleaning space below the net, and whether birds already use the corner before deciding the fixing line.",
      ],
      priceParagraph:
        "A practical Adambakkam planning range for balcony safety nets is Rs. 18-45 per sq.ft. The final rate changes with side returns, floor access, fixing surface, mesh grade, old cleaning work, and whether pigeon control is included along with fall protection.",
      comparisonParagraph:
        "When comparing quotes, ask whether the price includes UV-stable mesh, border rope, hooks, corner closing, and a neat finish around drainage or clothes-drying areas. A lower quote is not useful if the side pockets stay open or the net blocks everyday balcony use.",
      priceRange: "Rs. 18-45 per sq.ft.",
      metaHook: "compact apartments near Nanganallur, Velachery, and St. Thomas Mount",
    },
    "children-safety-nets": {
      heading: "Child-focused safety nets for Adambakkam apartments and rental homes",
      localParagraphs: [
        "In Adambakkam, many families use balconies and windows as everyday living space, especially in flats where furniture, drying rods, and storage sit close to open edges. Children safety nets need to be planned around a child's reach, not just the measured opening.",
        "A useful visit checks furniture position, climb points, window sill height, balcony railing gaps, and how the family moves through the room. The result should make the space calmer without making windows, doors, or cleaning access difficult.",
      ],
      priceParagraph:
        "For Adambakkam homes, children safety net work usually starts around Rs. 18-45 per sq.ft. as a planning range. The final quote depends on the number of openings, gap width, floor height, anchor surface, and whether both windows and balconies are covered together.",
      comparisonParagraph:
        "Compare installers by asking how they close reachable corners, whether the mesh tension is child-safe, and how the fixing avoids sharp or exposed edges. A good quote should mention furniture-side risks and daily movement, not only square feet.",
      priceRange: "Rs. 18-45 per sq.ft.",
      metaHook: "family flats, rental homes, and child-safe balcony/window planning",
    },
    "pigeon-safety-nets": {
      heading: "Pigeon safety nets for Adambakkam ledges, balcony corners, and utility spaces",
      localParagraphs: [
        "Adambakkam apartments commonly have narrow utility balconies, AC ledges, and side pockets where birds keep returning even after the front opening is covered. Pigeon netting works better when the actual entry route is found first.",
        "The visit should look for nesting marks, pipe corners, beam gaps, and ledges behind the visible balcony line. Cleaning old buildup before fixing also matters because a neat net over an unclean corner will still feel unfinished.",
      ],
      priceParagraph:
        "A fair planning range for pigeon safety nets in Adambakkam is Rs. 18-45 per sq.ft. Rates move with cleaning condition, ledge depth, side pockets, access height, and the number of small gaps that need separate closure.",
      comparisonParagraph:
        "Compare quotes by checking whether they include side-return stitching, corner sealing, old nest removal, and enough access for future cleaning. A flat front net may look cheaper, but pigeons can still enter through the overlooked edges.",
      priceRange: "Rs. 18-45 per sq.ft.",
      metaHook: "utility balconies, AC ledges, and repeated bird entry corners",
    },
    "window-invisible-grills": {
      heading: "Window invisible grills for Adambakkam rooms that need safety without heavy bars",
      localParagraphs: [
        "Adambakkam has a mix of older windows, renovated flats, and newer apartments where families want safety without losing light and ventilation. Window invisible grills are useful when the room should stay open-looking but still needs a strong cable boundary.",
        "The important local checks are frame strength, sill height, cable spacing, shutter movement, and whether drilling can be done without damaging the finished wall. This is especially important in rented or recently painted homes.",
      ],
      priceParagraph:
        "Window invisible grills in Adambakkam can be planned around Rs. 180-350 per sq.ft. The final price depends on stainless steel cable quality, channel finish, cable spacing, frame condition, access, and the number of window panels.",
      comparisonParagraph:
        "While comparing quotes, ask about cable grade, tensioning method, side channel alignment, spacing between cables, and after-service support. The best finish should look straight from inside the room and should not interfere with normal ventilation.",
      priceRange: "Rs. 180-350 per sq.ft.",
      metaHook: "open-view window safety for renovated flats and family rooms",
    },
    "balcony-invisible-grills": {
      heading: "Balcony invisible grills for Adambakkam homes that want open views and safer edges",
      localParagraphs: [
        "For view-facing Adambakkam balconies, many owners prefer invisible grills because the space feels lighter than with bulky metal bars. The challenge is making the cable line safe while keeping the balcony practical for drying, cleaning, and daily sitting.",
        "A proper site check studies the balcony frame, side returns, cable direction, facade line, and drilling surface. If the alignment is rushed, the grill may look uneven even when the material itself is good.",
      ],
      priceParagraph:
        "A realistic planning range for balcony invisible grills in Adambakkam is Rs. 180-380 per sq.ft. The rate changes with cable count, stainless steel grade, floor height, side channels, frame condition, and whether the balcony has curved or uneven edges.",
      comparisonParagraph:
        "Compare quotations by checking cable spacing, tensioning, channel finish, warranty support, and whether the quote includes all side closures. The lowest number can become weak value if the final line looks wavy or leaves a risky side gap.",
      priceRange: "Rs. 180-380 per sq.ft.",
      metaHook: "open-view balcony safety for apartments and high-rise flats",
    },
    "window-safety-nets": {
      heading: "Window safety nets for Adambakkam bedrooms, kitchens, and utility windows",
      localParagraphs: [
        "Window safety nets in Adambakkam are often needed where families keep windows open for airflow but still need protection for children, pets, or bird entry. Kitchens and utility windows usually need a different fixing plan from bedroom windows.",
        "The visit should confirm whether shutters swing freely, whether the frame can take anchors, and how the net can be cleaned later. A good window net should protect the opening without making the room feel closed.",
      ],
      priceParagraph:
        "For Adambakkam, window safety nets are usually planned around Rs. 18-45 per sq.ft. The final rate depends on window count, frame type, access from outside, corner gaps, and whether the work includes bird-control detailing.",
      comparisonParagraph:
        "Compare by asking how the installer keeps the shutter movement clear, closes the side gap, and fixes the net without rough drilling marks. A strong price should include the small finishing details that keep the window usable.",
      priceRange: "Rs. 18-45 per sq.ft.",
      metaHook: "safer ventilation for bedroom, kitchen, and utility windows",
    },
    "duct-area-safety-nets": {
      heading: "Duct area safety nets for Adambakkam service shafts and apartment utility voids",
      localParagraphs: [
        "Many Adambakkam apartment blocks have duct openings where pipes, drainage lines, and service access sit close together. Covering these areas needs more care than a normal balcony because future maintenance still has to be possible.",
        "The site check should look at pipe clearance, access depth, cleaning route, and whether a removable or service-friendly section is needed. Closing the void without planning maintenance can create trouble later.",
      ],
      priceParagraph:
        "Duct area safety net work in Adambakkam can be planned around Rs. 22-55 per sq.ft. Pricing changes with shaft depth, access difficulty, pipe layout, border length, and any removable section needed for maintenance.",
      comparisonParagraph:
        "Compare quotes by checking whether the installer understands pipe access, drainage, and future service work. A neat duct net should reduce risk and waste collection without blocking plumbers, AC work, or cleaning.",
      priceRange: "Rs. 22-55 per sq.ft.",
      metaHook: "service-shaft coverage with maintenance access kept clear",
    },
    "building-covering-safety-nets": {
      heading: "Building covering safety nets for Adambakkam apartment blocks and open sides",
      localParagraphs: [
        "In Adambakkam, larger safety net work may be needed for open shafts, side faces, terrace-to-void edges, or building areas where small patch nets look untidy. These projects need section-wise planning rather than a quick single measurement.",
        "The installer should check anchor strength, access equipment, wind exposure, surrounding cables, and how the net will look from common areas. Bigger coverage has to stay organized, especially in tight residential streets.",
      ],
      priceParagraph:
        "A planning range for building covering safety nets in Adambakkam is Rs. 25-65 per sq.ft. The final number depends on height, coverage span, anchor surface, equipment needs, wind load, and work timing allowed by the building.",
      comparisonParagraph:
        "Compare quotes by asking for the coverage map, anchor interval, border reinforcement, and access plan. A cheaper wide net can fail quickly if the fixing points are too far apart or the wind load is ignored.",
      priceRange: "Rs. 25-65 per sq.ft.",
      metaHook: "large open-side and shaft coverage for apartment buildings",
    },
    "terrace-safety-nets": {
      heading: "Terrace safety nets for Adambakkam rooftops, parapets, and play corners",
      localParagraphs: [
        "Adambakkam terraces are often used for drying clothes, evening walks, pets, and small play areas. Terrace safety nets should protect the open side while leaving drainage points, walking routes, and shared access practical.",
        "The visit should check parapet height, wind direction, anchor surface, roof waterproofing, and whether the net will be exposed to strong sun and rain. Rooftop work needs a different fixing decision from a shaded balcony.",
      ],
      priceParagraph:
        "Terrace safety nets in Adambakkam usually fall around Rs. 20-50 per sq.ft. as a planning guide. The final quote changes with open-edge length, parapet height, anchor strength, rooftop access, and wind exposure.",
      comparisonParagraph:
        "Compare installers by asking how they protect waterproofing, where anchors will sit, and how exposed corners will be tensioned. A terrace net should feel secure without making the roof difficult to use.",
      priceRange: "Rs. 20-50 per sq.ft.",
      metaHook: "rooftop edge protection for daily-use terraces",
    },
    "cricket-practice-nets": {
      heading: "Cricket practice nets for Adambakkam terraces, lanes, and small play spaces",
      localParagraphs: [
        "Adambakkam homes and small communities sometimes need cricket netting where play happens near windows, parked vehicles, or neighboring balconies. The right plan starts with ball direction, not just the size of the practice area.",
        "A site check should study run-up space, support height, side escape points, floor fixing, and nearby glass or utility lines. The setup should keep practice comfortable while controlling the ball properly.",
      ],
      priceParagraph:
        "Cricket practice nets in Adambakkam can be planned around Rs. 25-65 per sq.ft. Net grade, pole or frame support, height, ground surface, impact zone, and whether the setup is fixed or movable affect the final quote.",
      comparisonParagraph:
        "Compare by asking about mesh strength, pole spacing, top-line support, side coverage, and impact repair support. A basic net may work for soft practice, but regular batting needs stronger planning.",
      priceRange: "Rs. 25-65 per sq.ft.",
      metaHook: "ball-control netting for terraces and compact practice lanes",
    },
    "bird-spikes-installation": {
      heading: "Bird spikes installation for Adambakkam ledges, AC edges, and parapets",
      localParagraphs: [
        "Bird spikes are useful in Adambakkam when birds sit on narrow ledges, AC platforms, pipes, or parapet lines but a full net is not needed. The ledge should be cleaned and checked before any strip is fixed.",
        "Good spike work follows the actual perch line. If the strip is placed too far back, birds may still sit at the edge; if it is placed roughly, the elevation can look messy from the street or balcony.",
      ],
      priceParagraph:
        "A practical planning range for bird spikes installation in Adambakkam is Rs. 70-160 per running ft. Access height, ledge cleaning, surface type, adhesive or screw fixing, and strip quality affect the final price.",
      comparisonParagraph:
        "Compare quotes by asking whether cleaning is included, how the strip will be aligned, and whether the fixing suits concrete, tile, metal, or painted surfaces. Straight placement and surface preparation decide the result.",
      priceRange: "Rs. 70-160 per running ft.",
      metaHook: "ledge and AC-unit perch control with clean strip alignment",
    },
    "cloth-hanger-installation": {
      heading: "Cloth hanger installation for Adambakkam utility balconies and compact homes",
      localParagraphs: [
        "Adambakkam flats often need drying space without crowding the balcony walkway. A ceiling cloth hanger should be positioned around door swing, window movement, head clearance, and where wet clothes will drip.",
        "The visit should check ceiling strength, rod length, pulley reach, and whether the hanger will clash with safety nets or invisible grills. A neat utility setup makes daily drying easier without making the balcony feel cluttered.",
      ],
      priceParagraph:
        "Cloth hanger installation in Adambakkam is usually planned around Rs. 1,500-4,500 per set. Rod count, pulley type, ceiling condition, mounting height, hardware quality, and extra drilling decide the final quote.",
      comparisonParagraph:
        "Compare quotations by checking rod thickness, pulley smoothness, ceiling anchors, warranty support, and whether the installer measures walking clearance. The cheapest hanger is rarely good value if it bends or feels rough in daily use.",
      priceRange: "Rs. 1,500-4,500 per set",
      metaHook: "ceiling drying systems for utility balconies and smaller flats",
    },
  },
  adyar: {
    "balcony-safety-nets": {
      heading: "Balcony safety nets for Adyar apartments, premium homes, and tree-lined streets",
      localParagraphs: [
        "Adyar homes range from older apartments near LB Road and Gandhi Nagar to newer flats toward Besant Nagar and Thiruvanmiyur. Balcony safety nets here should protect children and pets without making a well-finished balcony look closed or rough.",
        "Because many balconies face trees, open roads, or breezy corners, the site check should include bird routes, wind exposure, side returns, railing gaps, and how the balcony is used for plants, seating, or drying.",
      ],
      priceParagraph:
        "For Adyar, balcony safety nets can be planned around Rs. 18-45 per sq.ft. The final quote depends on mesh grade, floor access, side returns, fixing surface, bird-control detailing, and how carefully the visible border needs to be finished.",
      comparisonParagraph:
        "Compare quotations by looking beyond the square-foot rate. Ask about border rope, hook spacing, side-gap closure, cleaning access, and how the installer keeps the work neat on a premium balcony elevation.",
      priceRange: "Rs. 18-45 per sq.ft.",
      metaHook: "premium balcony safety near LB Road, Gandhi Nagar, and Besant Nagar",
    },
    "children-safety-nets": {
      heading: "Children safety nets for Adyar family homes, balconies, and window openings",
      localParagraphs: [
        "Adyar families often want protection that feels calm and discreet, especially in apartments where living rooms, study corners, and balconies are used throughout the day. Children safety nets should be planned around actual movement, not only gap size.",
        "The site visit should check reachable furniture, sill height, balcony railing gaps, window opening style, and the way children move between rooms. The finish should support family life without making the home feel boxed in.",
      ],
      priceParagraph:
        "A practical Adyar planning range for children safety nets is Rs. 18-45 per sq.ft. The final number changes with opening count, access height, frame condition, mesh choice, and whether windows and balconies are handled in one visit.",
      comparisonParagraph:
        "Compare installers by asking how they identify climb points, close side gaps, and explain safe use after installation. A child-safety quote should be more detailed than a simple net-size calculation.",
      priceRange: "Rs. 18-45 per sq.ft.",
      metaHook: "family-focused balcony and window protection for Adyar homes",
    },
    "pigeon-safety-nets": {
      heading: "Pigeon safety nets for Adyar balconies, AC ledges, and shaded corners",
      localParagraphs: [
        "Adyar's older balconies, shaded ledges, and tree-facing corners can attract repeated bird activity. A pigeon safety net should close the actual entry route, especially around AC ledges, pipes, and balcony side pockets.",
        "Before fixing, the team should identify nesting marks, droppings, ledge depth, and cleaning access. In visible Adyar apartment fronts, a straight border and clean corner finish matter because the net is often seen from the room and the street.",
      ],
      priceParagraph:
        "Pigeon safety nets in Adyar usually sit around Rs. 18-45 per sq.ft. as a planning range. Cleaning, ledge depth, floor height, side pockets, beam gaps, and mesh finish can move the final quotation.",
      comparisonParagraph:
        "Compare quotes by checking whether cleaning, side-return closure, ledge detailing, and future maintenance access are included. A neat pigeon-control job should stop repeat entry without turning the balcony into a dark enclosure.",
      priceRange: "Rs. 18-45 per sq.ft.",
      metaHook: "bird-entry control for shaded ledges and tree-facing balconies",
    },
    "window-invisible-grills": {
      heading: "Window invisible grills for Adyar homes that need safety with a clean view",
      localParagraphs: [
        "Adyar customers often choose window invisible grills when they want safety without disturbing a premium interior, garden view, or road-facing window. The installation should look light from inside and straight from outside.",
        "The visit should check frame depth, sill height, cable spacing, shutter movement, and whether the wall finish needs extra care during drilling. Older apartments may need more careful anchor planning than newer frames.",
      ],
      priceParagraph:
        "Window invisible grills in Adyar can be planned around Rs. 180-350 per sq.ft. Stainless steel cable grade, channel quality, cable spacing, frame condition, finish expectations, and access decide the final quote.",
      comparisonParagraph:
        "Compare quotations by asking about cable grade, channel alignment, tensioning method, spacing, and after-service support. For Adyar homes, the best value is usually the cleanest finish, not the lowest cable price.",
      priceRange: "Rs. 180-350 per sq.ft.",
      metaHook: "open-view window protection for premium rooms and older apartments",
    },
    "balcony-invisible-grills": {
      heading: "Balcony invisible grills for Adyar view-facing flats and premium balconies",
      localParagraphs: [
        "Balcony invisible grills suit Adyar homes where owners want child or pet safety while keeping the balcony view open. The work has to respect facade appearance, cable alignment, and the way the balcony is used every day.",
        "A careful site visit checks frame strength, side channels, cable count, wind exposure, and whether the finish will look clean from the living room. This matters in premium streets and apartments where bulky metal work feels out of place.",
      ],
      priceParagraph:
        "For Adyar, balcony invisible grills are usually planned around Rs. 180-380 per sq.ft. The final rate depends on stainless steel grade, cable count, channel finish, floor height, side returns, and facade access.",
      comparisonParagraph:
        "Compare quotes by reviewing cable spacing, tension, alignment, side closure, and warranty support. A good invisible grill should feel secure while almost disappearing into the balcony line.",
      priceRange: "Rs. 180-380 per sq.ft.",
      metaHook: "open-view balcony protection for premium apartments",
    },
    "window-safety-nets": {
      heading: "Window safety nets for Adyar kitchens, bedrooms, and ventilated family rooms",
      localParagraphs: [
        "Adyar windows are often kept open for airflow, especially in older apartments and tree-facing homes. Window safety nets help when children, pets, or bird entry make an open window feel risky.",
        "The check should include shutter swing, grill spacing, frame depth, cleaning access, and whether the net can be finished neatly around the room's visible side. A good window net should not interrupt ventilation.",
      ],
      priceParagraph:
        "Window safety nets in Adyar usually plan around Rs. 18-45 per sq.ft. Window count, frame type, access from outside, corner detailing, and bird-control needs affect the final quote.",
      comparisonParagraph:
        "Compare installers by asking how the net will clear window movement, how corners are closed, and whether cleaning remains possible. Good workmanship shows in the small edges around the frame.",
      priceRange: "Rs. 18-45 per sq.ft.",
      metaHook: "safe ventilation for bedrooms, kitchens, and older window frames",
    },
    "duct-area-safety-nets": {
      heading: "Duct area safety nets for Adyar apartment shafts and service voids",
      localParagraphs: [
        "Adyar apartments with older service shafts often need duct-area safety nets to reduce waste fall, bird entry, and unsafe open voids. The coverage should still allow plumbers or maintenance teams to reach pipes later.",
        "The site visit should study pipe clearance, shaft depth, drainage, cleaning route, and any building rules for access. Duct work should feel practical, not like a permanent blockage over a service area.",
      ],
      priceParagraph:
        "Duct area safety nets in Adyar can be planned around Rs. 22-55 per sq.ft. The final price changes with shaft depth, pipe congestion, access height, removable-section needs, and the border length required.",
      comparisonParagraph:
        "Compare quotes by asking whether maintenance access is included in the design. A duct net is better when it closes the unsafe void while keeping future service work manageable.",
      priceRange: "Rs. 22-55 per sq.ft.",
      metaHook: "service-shaft protection for older and premium apartment blocks",
    },
    "building-covering-safety-nets": {
      heading: "Building covering safety nets for Adyar facades, shafts, and open building sides",
      localParagraphs: [
        "Adyar building-covering work often needs a more polished finish because the coverage can be visible from roads, common spaces, or neighboring apartments. Large nets should be measured in sections, not treated like a temporary patch.",
        "The installer should check anchor strength, wind exposure, access equipment, building rules, cable routes, and how future inspection will happen. Wide coverage must stay straight, firm, and easy to understand.",
      ],
      priceParagraph:
        "Building covering safety nets in Adyar usually plan around Rs. 25-65 per sq.ft. Height, coverage span, access equipment, anchor surface, wind load, and work timing influence the final price.",
      comparisonParagraph:
        "Compare quotations by asking for a coverage plan, anchor interval, border reinforcement, and access method. A professional wide-area job should not look like many small repairs stitched together.",
      priceRange: "Rs. 25-65 per sq.ft.",
      metaHook: "organized facade and open-side coverage for Adyar buildings",
    },
    "terrace-safety-nets": {
      heading: "Terrace safety nets for Adyar rooftops, shared terraces, and open edges",
      localParagraphs: [
        "Adyar terraces may be used for drying, pets, play, evening movement, or shared apartment access. Terrace safety nets need to protect open edges without blocking drainage, waterproofing, or regular rooftop movement.",
        "Because some rooftops are exposed to coastal air and stronger breeze, the visit should check wind direction, parapet height, anchor surface, and how corners will be tensioned. Rooftop work should be neat and weather-aware.",
      ],
      priceParagraph:
        "Terrace safety nets in Adyar usually plan around Rs. 20-50 per sq.ft. Open-edge length, parapet height, anchor surface, rooftop access, wind exposure, and corner reinforcement affect the final quote.",
      comparisonParagraph:
        "Compare installers by asking where anchors will sit, how waterproofing is protected, and how drainage remains open. A terrace net should add safety without turning the rooftop into a difficult maintenance area.",
      priceRange: "Rs. 20-50 per sq.ft.",
      metaHook: "weather-aware rooftop edge protection for shared terraces",
    },
    "cricket-practice-nets": {
      heading: "Cricket practice nets for Adyar terraces, academies, and compact play zones",
      localParagraphs: [
        "In Adyar, cricket netting is often needed where practice happens near homes, parked vehicles, school-side spaces, or apartment terraces. The setup should control ball travel without making the lane uncomfortable for players.",
        "A proper site check looks at shot direction, run-up, height, side escape, pole support, ground fixing, and nearby windows. Training nets need impact planning, not only a rectangular measurement.",
      ],
      priceParagraph:
        "Cricket practice nets in Adyar can be planned around Rs. 25-65 per sq.ft. Mesh grade, lane height, pole or frame support, ground condition, impact zone, and fixed or movable setup all change the final quote.",
      comparisonParagraph:
        "Compare quotes by checking mesh strength, support spacing, top-line tension, side coverage, and repair support after heavy use. A practice net should contain the ball confidently without feeling cramped.",
      priceRange: "Rs. 25-65 per sq.ft.",
      metaHook: "practice-lane netting for terraces, schools, and compact grounds",
    },
    "bird-spikes-installation": {
      heading: "Bird spikes installation for Adyar ledges, parapets, pipes, and AC platforms",
      localParagraphs: [
        "Adyar's tree-lined streets and older building ledges can make narrow perch points active throughout the day. Bird spikes work well where the problem is a ledge or AC edge rather than a whole open balcony.",
        "The ledge should be cleaned, dried, and checked before fixing. Straight placement matters because the spike line is often visible on premium apartment elevations and road-facing walls.",
      ],
      priceParagraph:
        "Bird spikes installation in Adyar usually plans around Rs. 70-160 per running ft. Surface type, ledge cleaning, access height, adhesive or screw fixing, strip quality, and alignment needs affect the final rate.",
      comparisonParagraph:
        "Compare quotes by asking how the surface will be prepared, whether cleaning is included, and how the strip will be aligned. Poorly placed spikes can look untidy and still leave enough room for birds to sit.",
      priceRange: "Rs. 70-160 per running ft.",
      metaHook: "straight ledge-perch control for visible Adyar elevations",
    },
    "cloth-hanger-installation": {
      heading: "Cloth hanger installation for Adyar utility balconies and premium apartment interiors",
      localParagraphs: [
        "Adyar homes often need drying systems that look tidy inside a finished utility balcony. A cloth hanger should be placed around door movement, window swing, head clearance, and how the family uses the balcony each day.",
        "The visit should check ceiling strength, pulley reach, rod length, wet-floor movement, and whether the hanger will sit near a safety net or invisible grill. A clean installation should feel built into the space, not added as clutter.",
      ],
      priceParagraph:
        "Cloth hanger installation in Adyar is usually planned around Rs. 1,500-4,500 per set. Rod count, pulley quality, ceiling condition, mounting height, hardware finish, and extra drilling decide the final quote.",
      comparisonParagraph:
        "Compare quotes by checking rod thickness, pulley smoothness, ceiling anchors, finish quality, and support after installation. A better hanger is one the family can use every day without noise, sagging, or awkward reach.",
      priceRange: "Rs. 1,500-4,500 per set",
      metaHook: "neat ceiling drying systems for utility balconies",
    },
  },
};

const areaLocalProfiles = {
  adambakkam: {
    nearby: "around Nanganallur, Velachery, Alandur, and the St. Thomas Mount side",
    propertyMix: "compact flats, older independent houses, and newer family apartments",
    serviceTone: "The work has to respect drying space, side returns, AC ledges, and narrow access instead of treating every opening like a simple rectangle.",
    accessNote: "Access can change by lane width, floor level, and building rules, so photos help but the final fixing line should be confirmed at the property.",
    visibleFinish: "A clean finish matters because many balconies and windows are used daily and are visible from the main room.",
    metaHook: "compact apartments near Nanganallur, Velachery, Alandur, and St. Thomas Mount",
  },
  adyar: {
    nearby: "around LB Road, Gandhi Nagar, Besant Nagar, Thiruvanmiyur, and the river-side apartment pockets",
    propertyMix: "older apartments, premium flats, tree-facing homes, and well-finished family residences",
    serviceTone: "The installation should feel discreet and premium, with careful drilling, straight lines, and no heavy-looking finish.",
    accessNote: "Some buildings need quieter timing, association approval, or cleaner visible detailing because the work is seen from living rooms and road-facing elevations.",
    visibleFinish: "Adyar customers usually notice alignment and finish quickly, so the border, channel, cable, or strip should look intentional.",
    metaHook: "premium homes near LB Road, Gandhi Nagar, Besant Nagar, and Thiruvanmiyur",
  },
  alandur: {
    nearby: "near Guindy, St. Thomas Mount, Nanganallur, GST Road, and metro-connected residential streets",
    propertyMix: "mid-rise apartments, rental flats, old houses, and busy road-facing buildings",
    serviceTone: "Work here should handle road dust, compact balconies, and mixed wall conditions without making the space harder to clean.",
    accessNote: "Alandur sites often need access and parking planned before the visit because lane width and building entrances can vary sharply.",
    visibleFinish: "A neat edge line is important where balconies and windows face busy roads or neighboring flats.",
    metaHook: "metro-side homes near Guindy, St. Thomas Mount, Nanganallur, and GST Road",
  },
  ambattur: {
    nearby: "around Ambattur OT, Ambattur Estate, Mogappair, Korattur, and the western residential belt",
    propertyMix: "independent homes, apartment blocks, industrial-side residences, and larger family properties",
    serviceTone: "The plan should account for dust, exposed balconies, utility ledges, and bigger openings that need stronger border planning.",
    accessNote: "Some sites have easier ground access while apartment blocks need lift, terrace, or side-face access checked before quoting.",
    visibleFinish: "Durability and clean tension matter here because larger openings can look uneven if the fixing points are not planned.",
    metaHook: "western Chennai homes around Ambattur Estate, Ambattur OT, Mogappair, and Korattur",
  },
  "anna-nagar": {
    nearby: "around Shanthi Colony, Thirumangalam, Mogappair, Aminjikarai, and the planned avenue roads",
    propertyMix: "premium apartments, older blocks, independent houses, and family homes with broader balconies",
    serviceTone: "The work should feel polished, measured, and low-clutter because many homes have visible balconies and well-kept interiors.",
    accessNote: "Association timing, parking, and finish expectations should be discussed before drilling in larger apartment blocks.",
    visibleFinish: "Straight alignment and balanced spacing are important because the installation stays visible from both inside and outside.",
    metaHook: "planned residential blocks near Shanthi Colony, Thirumangalam, and Mogappair",
  },
  arumbakkam: {
    nearby: "near Koyambedu, Anna Nagar, MMDA Colony, Vadapalani, and the Inner Ring Road side",
    propertyMix: "compact apartments, rental homes, older flats, and mixed residential-commercial buildings",
    serviceTone: "The work should be practical, space-saving, and neat around small balconies, kitchen windows, and utility corners.",
    accessNote: "Access and drilling timing can be tighter near busy roads, so the site visit should confirm work space and noise restrictions.",
    visibleFinish: "Clean corners matter because small openings show rough fixing immediately.",
    metaHook: "compact homes near Koyambedu, MMDA Colony, Anna Nagar, and Vadapalani",
  },
  "ashok-nagar": {
    nearby: "around K K Nagar, Jafferkhanpet, Vadapalani, West Mambalam, and the 100 Feet Road stretch",
    propertyMix: "older apartments, family flats, independent houses, and road-facing residential buildings",
    serviceTone: "The installation should balance child safety, bird control, and daily balcony use without making the home feel closed.",
    accessNote: "Many streets are active through the day, so parking, lift access, and drilling time should be cleared before the visit.",
    visibleFinish: "A tidy border or cable line is important because windows and balconies are often close to living areas.",
    metaHook: "family apartments near K K Nagar, Jafferkhanpet, Vadapalani, and 100 Feet Road",
  },
  avadi: {
    nearby: "around Pattabiram, Thirumullaivoyal, Ambattur, Poonamallee, and the suburban rail belt",
    propertyMix: "larger independent houses, new apartments, gated pockets, and growing family neighborhoods",
    serviceTone: "The work can involve wider openings, terrace use, and exposed sides, so material strength and anchor spacing matter.",
    accessNote: "Some homes have easier outdoor access, but taller apartment blocks still need floor level and equipment needs checked.",
    visibleFinish: "The installation should look orderly from the street and stay easy to maintain after dust and rain.",
    metaHook: "suburban homes near Pattabiram, Thirumullaivoyal, Ambattur, and Poonamallee",
  },
  "besant-nagar": {
    nearby: "near Elliot's Beach, Adyar, Thiruvanmiyur, Kalakshetra Colony, and coastal apartment streets",
    propertyMix: "premium apartments, beach-side homes, older flats, and tree-facing balconies",
    serviceTone: "The finish should be discreet, corrosion-aware, and neat because coastal air and visible elevations both matter.",
    accessNote: "Coastal breeze, salt exposure, and association finish rules should be considered before choosing material and fixing points.",
    visibleFinish: "A clean line is important because many balconies and windows face open views, streets, or trees.",
    metaHook: "coastal homes near Elliot's Beach, Adyar, Thiruvanmiyur, and Kalakshetra Colony",
  },
  chetpet: {
    nearby: "around Egmore, Kilpauk, Nungambakkam, Harrington Road, and central Chennai school zones",
    propertyMix: "older apartments, premium houses, compact flats, and central city residences",
    serviceTone: "Work should be quiet, measured, and respectful of old walls, narrow access, and polished interiors.",
    accessNote: "Central streets can make parking and work timing important, so the visit should confirm access before material is carried in.",
    visibleFinish: "Visible fixing should stay minimal because many buildings have older facades and finished interior walls.",
    metaHook: "central Chennai residences near Egmore, Kilpauk, Nungambakkam, and Harrington Road",
  },
  choolaimedu: {
    nearby: "near Kodambakkam, Nungambakkam, Vadapalani, Gill Nagar, and dense apartment lanes",
    propertyMix: "rental flats, compact apartments, hostels, older buildings, and family homes",
    serviceTone: "The installation should be compact, quick to maintain, and planned around tight balconies or utility windows.",
    accessNote: "Lane access, parking, and floor level can be tricky, so the quote should include real access conditions.",
    visibleFinish: "Small openings need careful corners because rough hooks or loose edges are very noticeable.",
    metaHook: "dense residential pockets near Kodambakkam, Nungambakkam, Vadapalani, and Gill Nagar",
  },
  chromepet: {
    nearby: "around GST Road, Pallavaram, Tambaram, Hasthinapuram, and railway-side residential streets",
    propertyMix: "independent houses, mid-rise apartments, rental flats, and road-facing family homes",
    serviceTone: "The plan should handle road dust, exposed windows, utility balconies, and daily family use without blocking airflow.",
    accessNote: "Traffic, parking, and floor access should be confirmed before the visit, especially near GST Road and busy lanes.",
    visibleFinish: "A clean finish helps the work stay tidy in homes that face road dust or active neighboring buildings.",
    metaHook: "GST Road homes near Pallavaram, Tambaram, Hasthinapuram, and railway-side streets",
  },
  egmore: {
    nearby: "around Chetpet, Purasawalkam, Kilpauk, Nungambakkam, and central commercial-residential streets",
    propertyMix: "older apartments, institutional buildings, premium homes, and mixed-use properties",
    serviceTone: "The installation should be careful around older surfaces, visible facades, and buildings with access rules.",
    accessNote: "Central Chennai work often needs planned timing, parking, and a clean work area because sites can be busy through the day.",
    visibleFinish: "The final line should look restrained and professional, especially on older or road-facing buildings.",
    metaHook: "central buildings near Chetpet, Purasawalkam, Kilpauk, and Nungambakkam",
  },
  ekkattuthangal: {
    nearby: "near Guindy, Ashok Nagar, Jafferkhanpet, Ambal Nagar, and the metro-industrial stretch",
    propertyMix: "compact apartments, office-side buildings, rental homes, and mixed residential lanes",
    serviceTone: "The work should be practical around dust, road exposure, compact openings, and utility balconies.",
    accessNote: "Because many buildings sit near active roads and workplaces, timing and safe drilling access should be confirmed.",
    visibleFinish: "Straight lines and firm tension keep the installation looking clean in small, visible openings.",
    metaHook: "metro-side properties near Guindy, Ashok Nagar, Jafferkhanpet, and Ambal Nagar",
  },
  guindy: {
    nearby: "around Alandur, Ekkattuthangal, Saidapet, Little Mount, and the industrial-metro corridor",
    propertyMix: "apartments, office-side residences, older houses, and road-facing properties",
    serviceTone: "The installation should handle dust, busy access, and exposed openings while keeping the finish easy to clean.",
    accessNote: "Work timing, parking, and access safety need checking because many sites sit near active roads or commercial buildings.",
    visibleFinish: "A strong but neat finish matters where windows and balconies face traffic, workplaces, or neighboring buildings.",
    metaHook: "homes near Alandur, Ekkattuthangal, Saidapet, Little Mount, and the metro corridor",
  },
  "k-k-nagar": {
    nearby: "around Ashok Nagar, Nesapakkam, West Mambalam, Vadapalani, and planned residential sectors",
    propertyMix: "family apartments, older flats, independent houses, and calm residential blocks",
    serviceTone: "The work should prioritize family safety, clean finish, and everyday usability for balconies and windows.",
    accessNote: "Many homes are easy to reach, but association timing and floor-level access still decide the final work plan.",
    visibleFinish: "The installation should look settled and tidy because families use these spaces every day.",
    metaHook: "planned family neighborhoods near Ashok Nagar, Nesapakkam, West Mambalam, and Vadapalani",
  },
  kilpauk: {
    nearby: "around Chetpet, Egmore, Anna Nagar, Purasawalkam, and medical-college residential pockets",
    propertyMix: "premium apartments, older houses, renovated flats, and central Chennai family homes",
    serviceTone: "The work should be measured and low-clutter, with extra care around old walls and polished interiors.",
    accessNote: "Parking, building permission, and quiet drilling windows should be checked before work begins.",
    visibleFinish: "A refined finish is important because many installations sit close to main rooms and visible facades.",
    metaHook: "central residences near Chetpet, Egmore, Anna Nagar, and Purasawalkam",
  },
  kodambakkam: {
    nearby: "around Vadapalani, Choolaimedu, T Nagar, West Mambalam, and Arcot Road apartment pockets",
    propertyMix: "dense apartments, rental flats, older buildings, and compact family homes",
    serviceTone: "The plan should solve balcony, window, and utility safety without crowding already compact spaces.",
    accessNote: "Busy lanes and apartment access can affect timing, so floor level and work area should be checked before quoting.",
    visibleFinish: "In smaller flats, tidy corners and clean drilling marks make a big difference to how the work feels.",
    metaHook: "dense apartment pockets near Vadapalani, Choolaimedu, T Nagar, and West Mambalam",
  },
  kolathur: {
    nearby: "around Perambur, Villivakkam, Anna Nagar West, Retteri, and growing north Chennai neighborhoods",
    propertyMix: "new apartments, independent houses, compact flats, and expanding family residences",
    serviceTone: "The work should be sturdy, practical, and easy to maintain across balconies, terraces, and utility spaces.",
    accessNote: "Some buildings have simple access while others need floor height, terrace route, or side-face access checked.",
    visibleFinish: "Clean tension and strong borders matter because many homes have exposed balcony and terrace edges.",
    metaHook: "north Chennai homes near Perambur, Villivakkam, Anna Nagar West, and Retteri",
  },
  koyambedu: {
    nearby: "around Arumbakkam, Anna Nagar, Vadapalani, MMDA Colony, and the market-bus terminus belt",
    propertyMix: "apartments, rental homes, commercial-side buildings, and road-facing residences",
    serviceTone: "The installation should handle dust, pigeon activity, and compact utility areas without creating a heavy look.",
    accessNote: "Busy traffic and loading zones can affect timing, so site access should be planned before the visit.",
    visibleFinish: "A neat finish helps the work stay presentable in road-facing homes and mixed-use buildings.",
    metaHook: "busy residential pockets near Arumbakkam, Anna Nagar, Vadapalani, and MMDA Colony",
  },
  madipakkam: {
    nearby: "around Velachery, Nanganallur, Pallikaranai, Keelkattalai, and inner south Chennai residential streets",
    propertyMix: "mid-rise apartments, independent homes, rental flats, and growing family communities",
    serviceTone: "The work should account for monsoon exposure, balcony use, utility corners, and bird entry routes.",
    accessNote: "Street width, floor height, and exterior access should be confirmed because apartment layouts vary widely.",
    visibleFinish: "A clean, weather-aware finish keeps the installation practical through dust, rain, and regular family use.",
    metaHook: "south Chennai homes near Velachery, Nanganallur, Pallikaranai, and Keelkattalai",
  },
  manapakkam: {
    nearby: "around Porur, Ramapuram, DLF, MIOT, and the Mount-Poonamallee Road side",
    propertyMix: "new apartments, IT-side residences, independent homes, and gated community pockets",
    serviceTone: "The plan should look modern and clean while handling larger balconies, view-facing windows, and utility ledges.",
    accessNote: "Newer apartment communities may require association timing, lift access, and cleaner drilling preparation.",
    visibleFinish: "Straight alignment matters because many homes have newer interiors and visible balcony lines.",
    metaHook: "newer homes near Porur, Ramapuram, DLF, MIOT, and Mount-Poonamallee Road",
  },
  mandaveli: {
    nearby: "around Mylapore, R A Puram, Alwarpet, Santhome, and older south-central residential streets",
    propertyMix: "older apartments, premium homes, compact flats, and well-kept family residences",
    serviceTone: "The work should respect older walls, narrow access, and visible interiors while keeping safety practical.",
    accessNote: "Parking and work timing can be tighter in older lanes, so the visit should confirm access before drilling.",
    visibleFinish: "A refined finish is important because many balconies and windows are close to main living areas.",
    metaHook: "south-central homes near Mylapore, R A Puram, Alwarpet, and Santhome",
  },
  medavakkam: {
    nearby: "around Pallikaranai, Sholinganallur, Velachery, Perumbakkam, and the OMR-side growth belt",
    propertyMix: "new apartments, gated communities, independent houses, and high-rise family homes",
    serviceTone: "The work should be weather-aware, strong, and neat across larger balconies, terraces, and utility shafts.",
    accessNote: "Community rules, floor height, and side-face access should be checked because many buildings are newer and taller.",
    visibleFinish: "The installation should match newer facades and keep balconies open-looking where possible.",
    metaHook: "growing apartment communities near Pallikaranai, Sholinganallur, Velachery, and Perumbakkam",
  },
  mogappair: {
    nearby: "around Anna Nagar West, Ambattur, Nolambur, Thirumangalam, and the western residential belt",
    propertyMix: "planned apartment blocks, family flats, independent houses, and school-side residences",
    serviceTone: "The work should feel orderly and family-safe, with tidy balcony edges and clear window ventilation.",
    accessNote: "Association timing, floor level, and parking should be planned before the visit in larger apartment blocks.",
    visibleFinish: "Clean alignment matters because many homes have well-maintained balconies and road-facing windows.",
    metaHook: "western family homes near Anna Nagar West, Ambattur, Nolambur, and Thirumangalam",
  },
  mylapore: {
    nearby: "around Mandaveli, Alwarpet, Santhome, Luz, and heritage residential streets",
    propertyMix: "older buildings, premium homes, compact apartments, and renovated family residences",
    serviceTone: "The installation should be careful around old walls, visible facades, and smaller balconies that need delicate finishing.",
    accessNote: "Narrow lanes, parking limits, and building age should be checked before deciding the fixing method.",
    visibleFinish: "A subtle finish matters because the work may sit on older elevations or polished interior walls.",
    metaHook: "heritage-side homes near Mandaveli, Alwarpet, Santhome, and Luz",
  },
  nanganallur: {
    nearby: "around Adambakkam, Alandur, Madipakkam, Palavanthangal, and airport-side residential streets",
    propertyMix: "family apartments, independent houses, older flats, and temple-side residential blocks",
    serviceTone: "The work should support daily family use, balcony drying, window ventilation, and child or pet safety.",
    accessNote: "Many streets are residential but busy, so floor level, work timing, and cleaning access should be confirmed.",
    visibleFinish: "A neat finish matters because balconies and windows are often part of everyday family routines.",
    metaHook: "family homes near Adambakkam, Alandur, Madipakkam, and Palavanthangal",
  },
  nungambakkam: {
    nearby: "around Chetpet, Kodambakkam, T Nagar, Thousand Lights, and central premium apartment streets",
    propertyMix: "premium apartments, office-side residences, older flats, and renovated homes",
    serviceTone: "The work should be clean, quiet, and visually controlled because many sites have polished interiors or road-facing elevations.",
    accessNote: "Central location means parking, lift access, and drilling timing should be cleared before work begins.",
    visibleFinish: "The final line should look premium from inside the room and orderly from outside.",
    metaHook: "central premium homes near Chetpet, Kodambakkam, T Nagar, and Thousand Lights",
  },
  pallavaram: {
    nearby: "around Chromepet, Tambaram, Airport Road, GST Road, and hill-side residential pockets",
    propertyMix: "independent houses, mid-rise apartments, rental flats, and exposed road-facing homes",
    serviceTone: "The work should handle dust, wind, wider openings, and daily balcony use with strong fixing and clean borders.",
    accessNote: "Road access, floor height, and exterior reach need checking before confirming material or timeline.",
    visibleFinish: "Weather-ready tension and neat edges keep the installation looking good in exposed locations.",
    metaHook: "GST Road homes near Chromepet, Tambaram, Airport Road, and hill-side streets",
  },
  pallikaranai: {
    nearby: "around Velachery, Medavakkam, Thoraipakkam, Madipakkam, and marsh-side apartment communities",
    propertyMix: "new apartments, gated communities, independent homes, and utility-heavy flats",
    serviceTone: "The plan should account for breeze, bird movement, balcony utility space, and newer building finish.",
    accessNote: "Floor height, association rules, and exterior access should be checked before quoting in larger communities.",
    visibleFinish: "A clean, weather-aware finish helps the work suit newer homes and open-view balconies.",
    metaHook: "marsh-side and OMR-connected homes near Velachery, Medavakkam, Thoraipakkam, and Madipakkam",
  },
  perambur: {
    nearby: "around Kolathur, Villivakkam, Vyasarpadi, Ayanavaram, and north Chennai railway-side streets",
    propertyMix: "older apartments, independent houses, compact flats, and growing residential blocks",
    serviceTone: "The installation should be practical, sturdy, and planned around compact balconies, window gaps, and utility ledges.",
    accessNote: "Older buildings may need extra care with drilling surfaces, access, and the route for carrying material.",
    visibleFinish: "Clean corner closure matters because many openings are small and used every day.",
    metaHook: "north Chennai residences near Kolathur, Villivakkam, Vyasarpadi, and Ayanavaram",
  },
  perungudi: {
    nearby: "around Thoraipakkam, Velachery, Taramani, Kandanchavadi, and the OMR IT corridor",
    propertyMix: "IT-side apartments, gated communities, rental flats, and newer high-rise residences",
    serviceTone: "The work should look modern, handle breeze and bird activity, and keep balcony or window views open where needed.",
    accessNote: "Association rules, floor height, and exterior access are important because many buildings are newer and taller.",
    visibleFinish: "A straight, minimal finish suits the modern apartment style common in this belt.",
    metaHook: "OMR IT-corridor homes near Thoraipakkam, Velachery, Taramani, and Kandanchavadi",
  },
  poonamallee: {
    nearby: "around Porur, Avadi, Iyyappanthangal, Kattupakkam, and the western growth corridor",
    propertyMix: "independent houses, new apartments, larger plots, and developing gated pockets",
    serviceTone: "The plan may involve wider balconies, terraces, and open sides, so anchor strength and material choice matter.",
    accessNote: "Many homes have practical access, but larger or taller buildings still need height and equipment planning.",
    visibleFinish: "The installation should look organized from outside and remain easy to maintain after dust and rain.",
    metaHook: "western growth-corridor homes near Porur, Avadi, Iyyappanthangal, and Kattupakkam",
  },
  porur: {
    nearby: "around Manapakkam, Ramapuram, Valasaravakkam, Poonamallee, and lake-side apartment pockets",
    propertyMix: "new apartments, independent homes, IT-side residences, and busy road-facing buildings",
    serviceTone: "The work should balance modern finish, child safety, bird control, and utility use in balconies and windows.",
    accessNote: "Traffic, parking, and association rules can affect timing, so site access should be confirmed before the visit.",
    visibleFinish: "A tidy finish is important where newer homes have visible balcony lines and finished interiors.",
    metaHook: "west Chennai homes near Manapakkam, Ramapuram, Valasaravakkam, and Poonamallee",
  },
  purasawalkam: {
    nearby: "around Egmore, Kilpauk, Perambur, Vepery, and old central Chennai shopping streets",
    propertyMix: "older buildings, compact apartments, mixed-use properties, and family homes",
    serviceTone: "The installation should be careful around old surfaces, narrow balconies, and busy access routes.",
    accessNote: "Work timing and parking should be discussed because central streets can stay active through the day.",
    visibleFinish: "A neat, low-clutter finish helps older buildings look maintained rather than patched.",
    metaHook: "old central Chennai homes near Egmore, Kilpauk, Perambur, and Vepery",
  },
  ramapuram: {
    nearby: "around Manapakkam, Porur, Guindy, DLF, and MIOT-side residential streets",
    propertyMix: "apartments, IT-side rental homes, independent houses, and newer family flats",
    serviceTone: "The work should suit compact apartment layouts, road dust, and modern balcony or window expectations.",
    accessNote: "Floor access, parking, and association timing should be checked before fixing work is scheduled.",
    visibleFinish: "The final line should stay clean because many openings face living rooms or shared apartment fronts.",
    metaHook: "IT-side homes near Manapakkam, Porur, Guindy, DLF, and MIOT",
  },
  royapettah: {
    nearby: "around Mylapore, Triplicane, Teynampet, Gopalapuram, and central residential-commercial streets",
    propertyMix: "older apartments, renovated flats, compact homes, and road-facing buildings",
    serviceTone: "The installation should be careful with old walls, narrow access, and visible windows or balconies.",
    accessNote: "Parking, timing, and material movement should be planned because central lanes can be busy and tight.",
    visibleFinish: "A clean finish is important where the work is visible from the street or a main room.",
    metaHook: "central homes near Mylapore, Triplicane, Teynampet, and Gopalapuram",
  },
  saidapet: {
    nearby: "around Guindy, T Nagar, West Mambalam, Little Mount, and river-side central streets",
    propertyMix: "older apartments, compact flats, rental homes, and busy road-facing residences",
    serviceTone: "The work should be sturdy, practical, and planned around narrow balconies, window ventilation, and access constraints.",
    accessNote: "Metro-side traffic, parking, and older building surfaces should be checked before quoting.",
    visibleFinish: "A neat finish helps the installation feel settled in compact homes and older apartment blocks.",
    metaHook: "central homes near Guindy, T Nagar, West Mambalam, and Little Mount",
  },
  sholinganallur: {
    nearby: "around OMR, Perumbakkam, Medavakkam, Navalur, and ECR-connected apartment communities",
    propertyMix: "high-rise apartments, gated communities, IT-side rentals, and newer family homes",
    serviceTone: "The work should be height-safe, weather-aware, and visually clean for open-view balconies and windows.",
    accessNote: "High floors, association rules, and wind exposure should be discussed before material and price are finalized.",
    visibleFinish: "A minimal and straight finish suits the newer apartment facades common along OMR.",
    metaHook: "OMR high-rise homes near Perumbakkam, Medavakkam, Navalur, and ECR links",
  },
  tambaram: {
    nearby: "around Chromepet, Pallavaram, Selaiyur, East Tambaram, and the GST Road rail belt",
    propertyMix: "independent houses, apartments, rental flats, and larger family properties",
    serviceTone: "The work should handle exposed terraces, daily balcony use, road dust, and practical family safety needs.",
    accessNote: "Floor level, parking, and exterior access should be confirmed, especially near busy GST Road pockets.",
    visibleFinish: "A durable finish with clean borders works well for homes exposed to dust, rain, and regular use.",
    metaHook: "south Chennai homes near Chromepet, Pallavaram, Selaiyur, and GST Road",
  },
  "t-nagar": {
    nearby: "around Pondy Bazaar, West Mambalam, Nungambakkam, Teynampet, and dense central apartment streets",
    propertyMix: "older apartments, premium flats, commercial-side residences, and compact family homes",
    serviceTone: "The work should be neat, quiet, and planned around tight access, visible facades, and daily residential use.",
    accessNote: "Traffic, parking, and work timing matter strongly here, so site access should be settled before the visit.",
    visibleFinish: "Visible finish quality is important because many balconies and windows face busy streets or close neighbors.",
    metaHook: "central homes near Pondy Bazaar, West Mambalam, Nungambakkam, and Teynampet",
  },
  teynampet: {
    nearby: "around Alwarpet, T Nagar, Nungambakkam, Gopalapuram, and central premium residential streets",
    propertyMix: "premium apartments, older flats, office-side residences, and renovated homes",
    serviceTone: "The installation should be controlled, clean, and suitable for finished interiors and visible elevations.",
    accessNote: "Parking, lift use, and drilling timing should be planned because many sites sit near busy central roads.",
    visibleFinish: "A premium-looking finish matters more than a quick low-cost fix in many Teynampet properties.",
    metaHook: "central premium homes near Alwarpet, T Nagar, Nungambakkam, and Gopalapuram",
  },
  thiruvanmiyur: {
    nearby: "around Adyar, Besant Nagar, Perungudi, Taramani, ECR, and coastal IT-side streets",
    propertyMix: "coastal apartments, older homes, IT-side residences, and premium family flats",
    serviceTone: "The work should be corrosion-aware, breeze-ready, and neat enough for open-view balconies and windows.",
    accessNote: "Salt air, wind exposure, floor height, and association rules should be checked before material is chosen.",
    visibleFinish: "The final line should stay light and straight because many homes value airflow and open views.",
    metaHook: "coastal and IT-side homes near Adyar, Besant Nagar, Perungudi, Taramani, and ECR",
  },
  thoraipakkam: {
    nearby: "around Perungudi, Pallikaranai, Sholinganallur, OMR, and IT park apartment pockets",
    propertyMix: "new apartments, gated communities, rental flats, and high-rise family homes",
    serviceTone: "The work should handle height, wind, bird activity, and modern balcony finish without blocking the view.",
    accessNote: "Association permission, exterior access, and floor level are important before final price is confirmed.",
    visibleFinish: "A clean and minimal finish suits newer OMR apartment buildings.",
    metaHook: "OMR apartment communities near Perungudi, Pallikaranai, Sholinganallur, and IT parks",
  },
  vadapalani: {
    nearby: "around Kodambakkam, Ashok Nagar, Virugambakkam, Koyambedu, and Arcot Road",
    propertyMix: "dense apartments, rental flats, older buildings, and commercial-side residences",
    serviceTone: "The installation should be compact, neat, and planned around busy access and small utility spaces.",
    accessNote: "Traffic, lift access, and drilling timing should be confirmed before the work visit.",
    visibleFinish: "Clean edge work matters because many openings are close to main rooms and neighboring buildings.",
    metaHook: "dense apartment pockets near Kodambakkam, Ashok Nagar, Virugambakkam, and Arcot Road",
  },
  valasaravakkam: {
    nearby: "around Porur, Virugambakkam, Ramapuram, Alwarthirunagar, and Arcot Road residential streets",
    propertyMix: "independent homes, apartments, family flats, and newer residential blocks",
    serviceTone: "The work should balance practical family safety with a clean finish for balconies, windows, and terraces.",
    accessNote: "Street access and floor height should be checked because homes vary from independent houses to taller flats.",
    visibleFinish: "A neat finish helps the installation feel built into the home rather than added roughly later.",
    metaHook: "west Chennai residences near Porur, Virugambakkam, Ramapuram, and Arcot Road",
  },
  velachery: {
    nearby: "around Madipakkam, Adambakkam, Pallikaranai, Taramani, and MRTS-side apartment pockets",
    propertyMix: "dense apartments, gated communities, rental flats, and busy road-facing homes",
    serviceTone: "The plan should handle bird entry, utility balconies, monsoon exposure, and daily family movement.",
    accessNote: "Parking, floor height, and association rules should be checked before confirming material and timing.",
    visibleFinish: "A clean finish matters because many balconies and windows are used constantly for ventilation and drying.",
    metaHook: "busy south Chennai homes near Madipakkam, Adambakkam, Pallikaranai, Taramani, and MRTS pockets",
  },
  villivakkam: {
    nearby: "around Kolathur, Perambur, Anna Nagar West, Ayanavaram, and railway-side residential streets",
    propertyMix: "older apartments, independent houses, new flats, and compact family homes",
    serviceTone: "The work should be sturdy, space-aware, and easy to maintain for balconies, windows, and terrace edges.",
    accessNote: "Older buildings may need surface checks and careful drilling before the fixing method is finalized.",
    visibleFinish: "Clean corners and stable tension matter because many openings are modest in size and used daily.",
    metaHook: "north-west Chennai homes near Kolathur, Perambur, Anna Nagar West, and Ayanavaram",
  },
  virugambakkam: {
    nearby: "around Valasaravakkam, Vadapalani, Koyambedu, Saligramam, and Arcot Road apartment lanes",
    propertyMix: "family apartments, rental flats, independent homes, and busy road-side residences",
    serviceTone: "The installation should stay practical for compact balconies, window ventilation, and utility drying areas.",
    accessNote: "Traffic, lane width, and building access should be planned before the visit, especially near Arcot Road.",
    visibleFinish: "A tidy line helps the work look settled in apartments where openings are close to living spaces.",
    metaHook: "Arcot Road homes near Valasaravakkam, Vadapalani, Koyambedu, and Saligramam",
  },
  "west-mambalam": {
    nearby: "around T Nagar, Ashok Nagar, Saidapet, Kodambakkam, and older central residential streets",
    propertyMix: "older apartments, compact flats, independent houses, and dense family neighborhoods",
    serviceTone: "The work should be careful, compact, and neat around small balconies, windows, and narrow service spaces.",
    accessNote: "Parking, lane width, and old wall condition should be checked before drilling or carrying material in.",
    visibleFinish: "A low-clutter finish is important because many homes have tight openings and close neighboring views.",
    metaHook: "older central homes near T Nagar, Ashok Nagar, Saidapet, and Kodambakkam",
  },
} satisfies Record<ActiveAreaSlug, AreaLocalProfile>;

const serviceLocalGuides = {
  "balcony-safety-nets": {
    heading: "Balcony safety nets",
    localNeed: "Balcony safety work should protect the open edge while keeping light, drying space, sweeping access, and normal balcony use comfortable.",
    priceRange: "Rs. 18-45 per sq.ft.",
    priceFactors: "balcony length, side returns, floor access, mesh grade, hook spacing, fixing surface, and whether pigeon-control detailing is included",
    comparisonFocus: "Compare UV-stable mesh, border rope, hook spacing, side-gap closure, corner tension, and cleaning access.",
    metaHook: "balcony edge protection and bird-route control",
  },
  "children-safety-nets": {
    heading: "Children safety nets",
    localNeed: "Children safety work should be planned around reach, climb points, furniture position, balcony height, and window gaps rather than only the opening size.",
    priceRange: "Rs. 18-45 per sq.ft.",
    priceFactors: "opening count, climb risk, mesh choice, access height, gap width, and whether balconies and windows are covered together",
    comparisonFocus: "Compare child-safe fixing, reachable corner closure, mesh tension, smooth edges, and how the plan handles furniture near the opening.",
    metaHook: "child-safe balcony and window protection",
  },
  "pigeon-safety-nets": {
    heading: "Pigeon safety nets",
    localNeed: "Pigeon netting should close the actual bird route around ledges, pipes, side pockets, beams, and utility corners instead of only covering the front face.",
    priceRange: "Rs. 18-45 per sq.ft.",
    priceFactors: "ledge depth, cleaning condition, side pockets, access height, mesh grade, and the number of separate entry gaps",
    comparisonFocus: "Compare old nest removal, side-return closure, corner sealing, border tension, and future cleaning access.",
    metaHook: "pigeon entry control for balconies, ledges, and utility corners",
  },
  "window-invisible-grills": {
    heading: "Window invisible grills",
    localNeed: "Window invisible grills should add stainless steel cable safety while keeping ventilation, light, and the room's open view intact.",
    priceRange: "Rs. 180-350 per sq.ft.",
    priceFactors: "window size, cable grade, channel finish, cable spacing, frame condition, access for drilling, and number of panels",
    comparisonFocus: "Compare cable grade, side channel alignment, cable spacing, tensioning method, drilling finish, and after-service support.",
    metaHook: "open-view stainless steel window protection",
  },
  "balcony-invisible-grills": {
    heading: "Balcony invisible grills",
    localNeed: "Balcony invisible grills should create a safe boundary while keeping the balcony view, facade line, airflow, and daily use open.",
    priceRange: "Rs. 180-380 per sq.ft.",
    priceFactors: "balcony width, cable count, stainless steel grade, floor height, side channels, frame condition, and facade access",
    comparisonFocus: "Compare cable spacing, tension, side channel finish, edge closure, warranty support, and whether the final line stays straight.",
    metaHook: "premium open-view balcony protection",
  },
  "window-safety-nets": {
    heading: "Window safety nets",
    localNeed: "Window safety nets should make ventilation safer for children, pets, and bird control while keeping shutters and cleaning access usable.",
    priceRange: "Rs. 18-45 per sq.ft.",
    priceFactors: "window count, frame type, shutter movement, outside access, corner detailing, and bird-control needs",
    comparisonFocus: "Compare shutter clearance, corner closure, anchor neatness, mesh tension, and whether the window can still be cleaned.",
    metaHook: "safe ventilation for bedroom, kitchen, and utility windows",
  },
  "duct-area-safety-nets": {
    heading: "Duct area safety nets",
    localNeed: "Duct safety work should cover open service shafts and utility voids without blocking plumbers, AC work, drainage, or future cleaning.",
    priceRange: "Rs. 22-55 per sq.ft.",
    priceFactors: "shaft depth, pipe layout, access difficulty, border length, maintenance opening needs, and removable section planning",
    comparisonFocus: "Compare service access, pipe clearance, perimeter fixing, removable sections, drainage safety, and shaft cleaning access.",
    metaHook: "service shaft and utility void protection",
  },
  "building-covering-safety-nets": {
    heading: "Building covering safety nets",
    localNeed: "Building covering work should be section-measured so wider facades, open shafts, or exposed sides stay straight, stable, and inspectable.",
    priceRange: "Rs. 25-65 per sq.ft.",
    priceFactors: "coverage span, height, anchor surface, access equipment, wind load, border reinforcement, and building work timing",
    comparisonFocus: "Compare coverage map, anchor interval, reinforced borders, wind-load planning, access method, and future inspection points.",
    metaHook: "large facade, shaft, and open-side coverage",
  },
  "terrace-safety-nets": {
    heading: "Terrace safety nets",
    localNeed: "Terrace safety nets should protect rooftop edges and play corners while keeping drainage, waterproofing, walking paths, and shared access practical.",
    priceRange: "Rs. 20-50 per sq.ft.",
    priceFactors: "open-edge length, parapet height, anchor surface, rooftop access, wind exposure, and corner reinforcement",
    comparisonFocus: "Compare anchor placement, waterproofing care, wind tension, exposed corner reinforcement, and drainage access.",
    metaHook: "rooftop edge and terrace play-area protection",
  },
  "cricket-practice-nets": {
    heading: "Cricket practice nets",
    localNeed: "Cricket practice nets should control ball travel by studying shot direction, run-up, support height, side escape points, and nearby windows.",
    priceRange: "Rs. 25-65 per sq.ft.",
    priceFactors: "lane size, mesh grade, pole or frame support, height, ground surface, impact zone, and fixed or movable setup",
    comparisonFocus: "Compare mesh strength, pole spacing, top-line tension, side coverage, impact repair support, and player clearance.",
    metaHook: "ball-control netting for terraces, lanes, and compact practice spaces",
  },
  "bird-spikes-installation": {
    heading: "Bird spikes installation",
    localNeed: "Bird spikes work best on real perch lines such as ledges, parapets, pipes, AC platforms, and sign-board edges where full netting is unnecessary.",
    priceRange: "Rs. 70-160 per running ft.",
    priceFactors: "ledge length, cleaning condition, access height, surface type, strip quality, adhesive or screw fixing, and alignment needs",
    comparisonFocus: "Compare surface cleaning, straight strip alignment, fixing method, strip material, ledge coverage, and visibility from below.",
    metaHook: "ledge, parapet, pipe, and AC-platform perch control",
  },
  "cloth-hanger-installation": {
    heading: "Cloth hanger installation",
    localNeed: "Cloth hanger installation should improve drying space without blocking door swing, window movement, head clearance, or safety-net access.",
    priceRange: "Rs. 1,500-4,500 per set",
    priceFactors: "rod count, pulley type, ceiling strength, mounting height, hardware finish, drilling points, and usable drying area",
    comparisonFocus: "Compare rod thickness, pulley smoothness, ceiling anchors, mounting height, hardware finish, and support after installation.",
    metaHook: "ceiling and utility balcony drying systems",
  },
} satisfies Record<ActiveServiceSlug, ServiceLocalGuide>;

const joinList = (items: string[]) => {
  if (items.length <= 1) {
    return items[0] ?? "";
  }

  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
};

const sentenceList = (items: string[]) => {
  if (items.length <= 1) {
    return items[0] ?? "";
  }

  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
};

const getAreaName = (areaSlug: string) => areaNamesBySlug.get(areaSlug) ?? areaSlug;

const getServiceName = (serviceSlug: string) =>
  serviceNamesBySlug.get(serviceSlug) ?? serviceSlug;

export const getManualServiceCopy = (serviceSlug: string) =>
  serviceCopyBySlug[serviceSlug as ActiveServiceSlug];

export const isActiveManualServiceSlug = (serviceSlug: string) =>
  activeServiceSlugs.has(serviceSlug);

const createPriorityAreaServiceCopy = (
  areaSlug: string,
  serviceSlug: ActiveServiceSlug,
  areaName: string,
  lowerService: string
): PriorityAreaServiceCopy | undefined => {
  const areaProfile = areaLocalProfiles[areaSlug as ActiveAreaSlug];
  const serviceGuide = serviceLocalGuides[serviceSlug];

  if (!areaProfile || !serviceGuide) {
    return undefined;
  }

  return {
    heading: `${serviceGuide.heading} in ${areaName} for ${areaProfile.propertyMix}`,
    localParagraphs: [
      `${areaName} homes ${areaProfile.nearby} include ${areaProfile.propertyMix}. ${serviceGuide.localNeed} ${areaProfile.serviceTone}`,
      `For ${areaName}, the site visit should confirm the opening size, floor access, fixing surface, and daily use before price is discussed. ${areaProfile.accessNote} ${areaProfile.visibleFinish}`,
    ],
    priceParagraph: `For ${areaName}, ${lowerService} can be planned around ${serviceGuide.priceRange}. The final quote changes with ${serviceGuide.priceFactors}, so the number should be used as a local planning range rather than a fixed promise.`,
    comparisonParagraph: `${serviceGuide.comparisonFocus} In ${areaName}, also compare how the installer handles access, drilling marks, clean-up, and support after installation.`,
    priceRange: serviceGuide.priceRange,
    metaHook: `${areaProfile.metaHook} with ${serviceGuide.metaHook}`,
  };
};

const getPriorityAreaServiceCopy = (
  areaSlug: string,
  serviceSlug: ActiveServiceSlug,
  areaName: string,
  lowerService: string
) =>
  priorityAreaServiceCopy[areaSlug]?.[serviceSlug] ??
  createPriorityAreaServiceCopy(areaSlug, serviceSlug, areaName, lowerService);

const getPrimaryPriceFactors = (serviceSlug: ActiveServiceSlug) => {
  const guide = serviceLocalGuides[serviceSlug];

  return guide.priceFactors
    .replace(", and ", ", ")
    .replace(" and ", ", ")
    .split(", ")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 3);
};

const createServiceAreaConversionBlocks = (
  areaName: string,
  serviceName: string,
  serviceSlug: ActiveServiceSlug,
  priorityCopy: PriorityAreaServiceCopy | undefined
): Pick<ManualServicePage, "priceGuide" | "comparisonTable" | "process"> => {
  if (!priorityCopy) {
    return {};
  }

  return {
    priceGuide: {
      heading: `${areaName} price guide`,
      range: priorityCopy.priceRange,
      note: "Planning range only; final quote follows site measurement.",
      factors: getPrimaryPriceFactors(serviceSlug),
    },
    comparisonTable: {
      heading: `Difference before booking ${serviceName}`,
      rows: [
        {
          feature: "Quote",
          basic: "Size guess",
          sriKrishna: "Measured access and fixing",
        },
        {
          feature: "Finish",
          basic: "Basic closure",
          sriKrishna: "Corners and use checked",
        },
        {
          feature: "Support",
          basic: "No clear care",
          sriKrishna: "Care and support explained",
        },
      ],
    },
    process: {
      heading: `${areaName} installation process`,
      steps: [
        {
          title: "Photos",
          description: "Share opening photos.",
        },
        {
          title: "Measure",
          description: "Check size and access.",
        },
        {
          title: "Confirm",
          description: "Confirm scope and price.",
        },
        {
          title: "Install",
          description: "Finish neatly with care notes.",
        },
      ],
    },
  };
};

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
    searchIntent: `${serviceName} in ${entry.area}, Chennai for ${copy.lead} Site visit checks include ${checks}, material choice, fixing line, access, and quotation clarity.`,
    localAngle: `In ${entry.area}, ${lowerService} is usually requested when ${copy.commonNeed}. SRI KRISHNA INVISIBLE GRILLS checks ${checks} first, then suggests ${copy.materialLine}, so the finished work gives ${outcomes}.`,
    articleBrief: [
      `${serviceName} in ${entry.area} starts with a look at the exact opening and how the space is used. The team checks ${checks}, then explains whether the site needs simple coverage, stronger borders, cable alignment, or a more careful fixing method.`,
      `${copy.installLine} Customers should know where the anchors, hooks, channels, rods, or supports will sit before work starts, because those small details decide whether the finished job feels neat after daily use.`,
      `A good installation should finish cleanly: ${copy.finishLine}. After the work is complete, basic care is simple: ${copy.maintenanceLine}. ${copy.quoteLine}`,
    ],
  };
};

export const refreshManualServicePage = (page: ManualServicePage): ManualServicePage => {
  const areaName = getAreaName(page.areaSlug);
  const serviceName = getServiceName(page.serviceSlug);
  const lowerService = serviceName.toLowerCase();
  const copy = getManualServiceCopy(page.serviceSlug);
  const serviceSlug = page.serviceSlug as ActiveServiceSlug;
  const priorityCopy = getPriorityAreaServiceCopy(
    page.areaSlug,
    serviceSlug,
    areaName,
    lowerService
  );
  const conversionBlocks = createServiceAreaConversionBlocks(
    areaName,
    serviceName,
    serviceSlug,
    priorityCopy
  );
  const checks = joinList(copy.primaryChecks);
  const checksSentence = sentenceList(copy.primaryChecks);
  const outcomes = joinList(copy.outcomes);
  const localSections = priorityCopy
    ? [
        {
          eyebrow: "Local Points",
          heading: `What matters for ${lowerService} in ${areaName}`,
          paragraphs: priorityCopy.localParagraphs,
        },
        {
          eyebrow: "Price Guide",
          heading: `Local price guide for ${lowerService} in ${areaName}`,
          paragraphs: [
            priorityCopy.priceParagraph,
            "Use this as a planning range, not a final promise. A measured visit is still needed because Chennai homes vary by access, drilling surface, opening shape, material finish, and preparation work.",
          ],
        },
        {
          eyebrow: "Comparison",
          heading: `How to compare quotes for ${lowerService} in ${areaName}`,
          paragraphs: [
            priorityCopy.comparisonParagraph,
            "The best comparison is scope against scope: material, fixing method, side closure, visible finish, access, clean-up, and support after installation. That makes the quote easier to judge than a single low number.",
          ],
        },
      ]
    : [];
  const localDecisionPoints = priorityCopy
    ? [
        {
          title: "Check the local price range",
          description: `${priorityCopy.priceRange} is a useful planning range for ${areaName}, but the measured site decides the final quote.`,
        },
      ]
    : [];
  const localFaq = priorityCopy
    ? [
        {
          question: `What is the local price for ${lowerService} in ${areaName}?`,
          answer: `${priorityCopy.priceRange} is a practical planning range for ${areaName}. The final quote is confirmed after checking the size, access, fixing surface, material choice, and any cleaning or side-detailing needed.`,
        },
        {
          question: `How should we compare quotes for ${lowerService} in ${areaName}?`,
          answer: `${priorityCopy.comparisonParagraph} Ask each installer to explain the included material, fixing line, side closures, finish, and support so the comparison is fair.`,
        },
      ]
    : [];

  return {
    ...page,
    metadata: {
      title: priorityCopy
        ? `${serviceName} in ${areaName} | Price, Process & Compare`
        : `${serviceName} in ${areaName} Chennai | SRI KRISHNA INVISIBLE GRILLS`,
      description: priorityCopy
        ? `${serviceName} in ${areaName}, Chennai with ${priorityCopy.priceRange} guide, process, comparison table, FAQs, and measured site visit.`
        : `${serviceName} in ${areaName}, Chennai. ${copy.lead} Site visit covers ${checks}, material choice, neat fixing, and clear quotation.`,
      keywords: [
        `${lowerService} in ${areaName}`,
        `${lowerService} Chennai`,
        `${areaName} ${lowerService}`,
        ...(priorityCopy
          ? [
              `${areaName} ${lowerService} price`,
              `${lowerService} comparison ${areaName}`,
            ]
          : []),
        `SRI KRISHNA INVISIBLE GRILLS ${areaName}`,
      ],
      openGraphTitle: priorityCopy
        ? `${serviceName} in ${areaName} - Price, process, comparison`
        : `${serviceName} in ${areaName}, Chennai`,
      openGraphDescription: priorityCopy
        ? `${priorityCopy.priceRange} planning range with local ${areaName} checks and quote comparison help.`
        : `${copy.lead} Get a measured Sri Krishna site visit in ${areaName}.`,
      twitterTitle: priorityCopy
        ? `${serviceName} in ${areaName} - Price & process`
        : `${serviceName} in ${areaName}, Chennai`,
      twitterDescription: priorityCopy
        ? `Plan ${lowerService} in ${areaName} with ${priorityCopy.priceRange} guidance, local checks, and comparison advice.`
        : `Plan ${lowerService} in ${areaName} with proper site checks, material clarity, and a neat finish.`,
    },
    hero: {
      ...page.hero,
      eyebrow: `${serviceName} in ${areaName}, Chennai`,
      title: priorityCopy
        ? `${serviceName} in ${areaName} - price, process, compare`
        : `${serviceName} in ${areaName}`,
      lead: priorityCopy
        ? `${copy.lead} Check ${priorityCopy.priceRange}, process, comparison table, and FAQs before booking a measured ${areaName} site visit.`
        : `${copy.lead} In ${areaName}, the right plan starts with ${checks}, then moves into material choice, fixing method, and finish. The goal is simple: ${outcomes}.`,
      primaryCta: `Call for ${areaName} Visit`,
      secondaryCta: "Send Photos on WhatsApp",
    },
    proof: [
      {
        stat: areaName,
        label: "Local Site Visit",
        description: `The visit is planned around the ${areaName} property, not a generic phone estimate.`,
      },
      {
        stat: "Measured",
        label: "Before Quoting",
        description: `The team checks ${checks} before confirming material and price.`,
      },
      {
        stat: "Finish",
        label: "Daily Use",
        description: `The expected finish is simple: ${copy.finishLine}.`,
      },
    ],
    intro: {
      heading: priorityCopy?.heading ?? `A clear plan for ${lowerService} in ${areaName}`,
      paragraphs: [
        `Most customers ask for ${lowerService} when ${copy.commonNeed}. A useful installation does not start with a guess or a square-foot number. It starts with the shape of the opening, the fixing surface, the access route, and the way the family uses the space every day.`,
        `For ${areaName} homes, SRI KRISHNA INVISIBLE GRILLS looks at ${copy.siteFocus}. These details decide whether the work needs mesh, cable, border rope, channels, rods, spikes, poles, or reinforced supports. The right choice should feel natural once it is installed.`,
        `Good safety work is not meant to make the home feel heavy. It should reduce risk, keep cleaning possible, respect the view where needed, and avoid untidy corners. That is why the installer should explain the material and fixing line before work starts.`,
        `${copy.quoteLine} Photos can help with the first discussion, but a final quotation is always cleaner when the site is measured properly.`,
      ],
    },
    ...conversionBlocks,
    sections: [
      {
        eyebrow: "Site Reading",
        heading: `What we check at the ${areaName} property`,
        paragraphs: [
          `Every property has small differences: wall strength, frame depth, balcony shape, ledge width, roof exposure, or the way people move through the area. For ${lowerService}, the important checks are ${checksSentence}. Missing any of these can lead to loose corners, awkward access, or a finish that does not last.`,
          `The inspection also looks at furniture, cleaning routes, window movement, drying space, pets, children, wind, and maintenance access where relevant. The aim is to understand the real site before suggesting material or price.`,
        ],
      },
      ...localSections,
      {
        eyebrow: "Material",
        heading: "Choose the material for the job, not only the name of the service",
        paragraphs: [
          `For this service, the usual Sri Krishna approach is ${copy.materialLine}. The material still has to match the site. A shaded balcony, exposed terrace, narrow ledge, high-rise window, or practice area can each need a different fixing decision.`,
          `The customer should be able to see why the material was suggested. A strong installation is not only about thickness or brand names; it is also about anchor spacing, tension, side closure, and how the finish will look after months of use.`,
        ],
      },
      {
        eyebrow: "Installation",
        heading: "Plan the fixing before drilling starts",
        paragraphs: [
          `${copy.installLine} This is where careful installers separate themselves from quick patch work. The line should be straight, the corners should be tight, and the work area should be cleared enough for a neat finish.`,
          `In apartments and communities, timing and visible finish matter too. The team should discuss access, drilling noise, association rules, and any special height or safety requirement before the installation day.`,
        ],
      },
      {
        eyebrow: "Use",
        heading: "Keep the space easy to live with",
        paragraphs: [
          `A safety installation should support daily life. People still need to open windows, clean ledges, dry clothes, use balconies, maintain ducts, or move around a terrace. For ${areaName}, the work should deliver ${outcomes} without making the space frustrating.`,
          `That is why the plan should include how the area will be used after installation. A neat finish is valuable only when the customer can keep using the space comfortably.`,
        ],
      },
      {
        eyebrow: "Quotation",
        heading: "Ask for a quote that explains the scope",
        paragraphs: [
          `A proper quote should say what is included: material, fixing method, approximate coverage, access needs, and expected timing. It should also mention what can change on site, such as weak surfaces, extra side gaps, difficult access, or additional cleaning preparation.`,
          `${copy.quoteLine} A clear scope makes comparison easier because the customer can see what is being installed, not just the lowest number shared over the phone.`,
        ],
      },
      {
        eyebrow: "Care",
        heading: "Simple care after installation",
        paragraphs: [
          `After the work is done, the customer should know how to use the protected space safely. For ${lowerService}, basic care is straightforward: ${copy.maintenanceLine}.`,
          `If the site is exposed to heavy wind, dust, rain, or regular impact, occasional checks are worth doing. Small corrections made early can keep the installation looking clean and working well for longer.`,
        ],
      },
    ],
    decisionGuide: {
      heading: `How to choose the right team for ${lowerService} in ${areaName}`,
      points: [
        ...localDecisionPoints,
        {
          title: "Ask what will be measured",
          description: `A reliable installer should talk about ${checks}, not only ask for a rough size.`,
        },
        {
          title: "Look at the fixing line",
          description: "Hooks, anchors, channels, rods, poles, or spikes should be planned before the work starts.",
        },
        {
          title: "Discuss daily use",
          description: "Cleaning, ventilation, drying, pets, children, maintenance, and movement should be part of the plan.",
        },
        {
          title: "Compare finish, not only price",
          description: "A low quote can become expensive if the corners loosen or the work looks rough after a few weeks.",
        },
        {
          title: "Confirm after-care",
          description: "The customer should know what to clean, what not to pull, and when to ask for a support check.",
        },
      ],
    },
    faq: [
      {
        question: `Do you provide ${lowerService} in ${areaName}?`,
        answer: `Yes. SRI KRISHNA INVISIBLE GRILLS covers ${areaName} and nearby Chennai areas for ${lowerService}. A site visit can confirm the opening, access, material, fixing method, and quotation.`,
      },
      {
        question: "Can you quote from photos?",
        answer: `Photos are useful for the first discussion, especially when they show the full opening and side corners. The final quote is clearer after checking ${checks} at the site.`,
      },
      ...localFaq,
      {
        question: "How long does installation take?",
        answer: "Timing depends on the size of the work, floor access, material readiness, drilling points, and whether the site needs cleaning or preparation before fixing.",
      },
      {
        question: "Will the work look neat from inside the home?",
        answer: `The plan is made so ${copy.finishLine}. Straight alignment, tight corners, and clean fixing are part of the expected finish.`,
      },
      {
        question: "What should we do before the team arrives?",
        answer: "Clear stored items near the work area, share building access rules, keep children and pets away from drilling, and send photos in advance if possible.",
      },
      {
        question: "How do we maintain it?",
        answer: `Basic care is simple: ${copy.maintenanceLine}. Avoid pulling, cutting, overloading, or modifying the installation without checking first.`,
      },
    ],
    closing: {
      heading: `Book ${lowerService} in ${areaName} with a measured site visit.`,
      paragraphs: [
        `${serviceName} should feel like a useful improvement to the property, not an extra problem to maintain. The right installation protects the opening, respects daily use, and looks settled once the work is complete.`,
        `Call or send photos on WhatsApp to start. The final recommendation should match the ${areaName} site, the material required, and the way the space is actually used.`,
      ],
      cta: "Call SRI KRISHNA INVISIBLE GRILLS",
    },
  };
};

export const createManualServicePageFromEntry = (
  entry: ManualServiceAreaEntry
): ManualServicePage =>
  refreshManualServicePage({
    citySlug: entry.citySlug,
    areaSlug: entry.areaSlug,
    serviceSlug: entry.serviceSlug,
    metadata: {
      title: "",
      description: "",
      keywords: [],
      openGraphTitle: "",
      openGraphDescription: "",
      twitterTitle: "",
      twitterDescription: "",
    },
    hero: {
      eyebrow: "",
      title: "",
      lead: "",
      image: "",
      primaryCta: "",
      secondaryCta: "",
    },
    proof: [],
    intro: {
      heading: "",
      paragraphs: [],
    },
    sections: [],
    decisionGuide: {
      heading: "",
      points: [],
    },
    faq: [],
    closing: {
      heading: "",
      paragraphs: [],
      cta: "",
    },
  });
