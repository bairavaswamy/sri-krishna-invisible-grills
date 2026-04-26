import { services } from "../constants/services";

export function createSeed(location: string) {
  return location
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

export function pickVariant<T>(
  arr: T[],
  seed: number,
  offset = 0
): T {
  return arr[(seed + offset) % arr.length];
}

// export function slugify(text: string) {
//   return text.toLowerCase().replace(/\s+/g, "-");
// }

export function slugify(location: string) {
  return location
    .toLowerCase()
    .trim()
    .replace(/,/g, " in")        // 👈 convert comma to " in"
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getNearbyLocations(locations: string[], index: number) {
  const links: string[] = [];

  if (locations[index - 1]) links.push(locations[index - 1]);
  if (locations[index + 1]) links.push(locations[index + 1]);
  if (locations[index + 2]) links.push(locations[index + 2]);

  return links;
}

export function generateReviewSchema(location: string) {

return {
  "@type":"Review",
  "author":{
    "@type":"Person",
    "name":"Customer from " + location
  },
  "reviewRating":{
    "@type":"Rating",
    "ratingValue":"5",
    "bestRating":"5"
  },
  "reviewBody":`Invisible grill installation in ${location} was completed with neat finishing and strong materials. The balcony looks modern and safe after installation.`
}

}

export function generateRatingSchema(){

return {
  "@type":"AggregateRating",
  "ratingValue":"4.9",
  "reviewCount":"185"
}

}

export function generateBreadcrumb(location: string, slug: string) {
const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
const segments = cleanSlug.split("/").filter(Boolean);
const isServiceHub = segments[0] === "services";
const serviceSlug = isServiceHub ? segments[1] : segments[0];
const service = services.find((item) => item.slug === serviceSlug);
const serviceTitle = service
  ? service.title
  : serviceSlug
      ?.split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
const itemListElement = [
{
"@type":"ListItem",
"position":1,
"name":"Home",
"item":"https://rohiniinvisiblegrills.com"
},
{
"@type":"ListItem",
"position":2,
"name":"Services",
"item":"https://rohiniinvisiblegrills.com/services"
}
];

if (serviceSlug && serviceTitle) {
itemListElement.push({
"@type":"ListItem",
"position":3,
"name":serviceTitle,
"item":"https://rohiniinvisiblegrills.com/services/"+serviceSlug
});
}

if (!isServiceHub && serviceSlug && serviceTitle) {
itemListElement.push({
"@type":"ListItem",
"position":4,
"name":`${serviceTitle} in ${location}`,
"item":"https://rohiniinvisiblegrills.com/"+cleanSlug
});
}

return {
"@context":"https://schema.org",
"@type":"BreadcrumbList",
"itemListElement":itemListElement
}

}


export function locationAuthorityScore(location: string) {

let score = location.length * 3

if(location.includes("Nagar")) score += 20
if(location.includes("Colony")) score += 15
if(location.includes("Hills")) score += 10

return score

}

export function internalLinks(locations : string[], index: number){

let links=[]

for(let i=1;i<=5;i++){

if(locations[index+i])
links.push(locations[index+i])

}

return links

}


export const locationImages = [
  "/images/invisible-grill.webp",
  "/images/invisible-grill-for-balcony.webp",
  "/images/invisible-grill-2.webp"
];

export const InProductlocationImages = [
  "/images/invisible-grill-for-balcony.webp",
  "/images/invisible-grills-for-apartment.webp",
   "/images/Balcony-Invisible-Grills-1.webp",
];

export function locationHash(location: string) {
  let hash = 0;

  for (let i = 0; i < location.length; i++) {
    hash = location.charCodeAt(i) + ((hash << 5) - hash);
  }

  return Math.abs(hash);
}

export function createGrillSeed(str: string): number {
  let seed = 0;
  for (let i = 0; i < str.length; i++) {
    seed = (seed * 31 + str.charCodeAt(i)) >>> 0;
  }
  return seed;
}


//balcony safety invisible grills images

export const locationImagesForBalconySafetyInvisibleGrills = [
  "/images/balcony-invisible-grills-in-hyderabad.webp",
  "/images/drybalcony-invisible-grills-near-me.webp",
  "/images/invisible-grills-in-hyderabad.webp",
  "/images/pigeon-safety-invisible-grills.webp",
];

export const BalconySafetyInvisibleGrillsProductImages = [
  "/images/invisible-grill.webp",
  "/images/invisible-grill-for-balcony.webp",
  "/images/invisible-grills-for-apartment.webp",
];


//splitter

export const separator = (service: string): string => {
  const parts = service.split("/");

  if (parts.length < 2) return service; // safety fallback

  return `${parts[0]}in${parts[1]}`;
};

//anti bird invisible grills

export const locationImagesForAntiBirdInvisibleGrills = [
"/images/drybalcony-invisible-grills-near-me.webp",
  "/images/balcony-invisible-grills-in-hyderabad.webp",
  "/images/invisible-grills-in-hyderabad.webp",
  "/images/anti-bird-invisible-grills.webp",
];

export const BalconySafetyAntiBirdInvisibleGrills = [
  "/images/invisible-grill.webp",
  "/images/stainless-steel-invisible-grill.webp",
  "/images/invisible-grills-for-apartment.webp",
];


//Sports nets installation

export const locationImagesForSportsNets = [
"/images/Box-cricket-practice-net-installation-near-me.webp",
  "/images/Box-cricket-practice-net-installation-near-me.webp",
  "/images/sport-nets-installation-hyderabad.webp",
  "/images/sports-nets-installation-for-cricket-and-football-practice.webp",
];

export const BalconySafetySportsNets = [
     "/images/sports-nets-installation-for-cricket-and-football-practice.webp",
  "/images/sport-nets-installation-hyderabad.webp",
  "/images/Box-cricket-practice-net-installation-near-me.webp",
"/images/Box-cricket-practice-net-installation-near-me.webp",
];



// windows invisible grills

export const locationImagesForWindowsInvisibleGrills = [
"/images/window-anti-bird-invisible-grills.webp",
  "/images/window-invisible-grills-Hyderabad.webp",
  "/images/invisible-grills-for-window-near-me.webp",
  "/images/invisible-grills-bird-netting-in-hyderabad.webp",
];

export const BalconySafetyWindowsInvisibleGrills = [
  "/images/invisible-grills-bird-netting-in-hyderabad.webp",
  "/images/window-invisible-grills-Hyderabad.webp",
  "/images/window-anti-bird-invisible-grills.webp",
  "/images/invisible-grills-for-window-near-me.webp",
];





// Children safety invisible grills

export const locationImagesForChildrenSafetyInvisibleGrills = [
"/images/children-safety-invisible-grills-for-balcony.webp",
  "/images/children-safety-invisible-grills-in-hyderabad.webp",
  "/images/invisible-grills-for-window-near-me.webp",
  "/images/apartment-balcony-invisible-grills-near-me-in-hyderabad.webp",
];

export const BalconySafetyChildrenSafetyInvisibleGrills = [
  "/images/invisible-grill-for-balcony.webp",
  "/images/pigeon-safety-invisible-grills.webp",
  "/images/children-safety-invisible-grills-for-balcony.webp",
  "/images/children-safety-invisible-grills-in-hyderabad.webp",
];


//bird spikes installation

export const locationImagesForBirdSpikesInstallation = [
   "/spikes/anti-bird-spikes-installation-near-me.webp",
    "/spikes/bird-control-spikes.webp",
    "/spikes/metalic-bird-spikes-installation-near-me.webp",
    "/spikes/pigeon-bird-spikes-installation-near-me.webp",
    "/spikes/pvc-anti-bird-spikes-installation.webp",
    "/spikes/same-day-bird-spikes-installation-near-me.webp",
    "/spikes/top-rated-bird-spikes-installation-near-me.webp",
];

export const BalconySafetyBirdSpikesInstallation = [
  "/spikes/cards/top-rated-bird-control-spikes-installation.webp",
  "/spikes/cards/same-day-bird-spikes-installation.webp",
  "/spikes/cards/metalic-bird-spikes-installation.webp",
  "/spikes/cards/pvc-bird-control-spikes-installation-near-me.webp",
  "/spikes/cards/pigeon-bird-spikes-installation.webp",
  "/spikes/cards/bird-spikes-installation-near-me.webp",
  "/spikes/cards/anti-bird-spikes-installation.webp",

]

export const locationImagesForClothHangers = [
  "/clothhangers/best-cloth-hangers-near-me.webp",
  "/clothhangers/ceiling-cloth-hangers-near-me.webp",
  "/clothhangers/ceiling-balcony-cloth-hangers-near-me.webp",
  "/clothhangers/dry-balcony-cloth-hangers-near-me.webp",
  "/clothhangers/dry-balcony-cloth-hangers-installation.webp",
  "/clothhangers/top-rated-cloth-hangers-installation-near-me.webp"
];

export const balconyClothHangerImages = [
  "/clothhangers/top-rated-cloth-hangers-installation-near-me.webp",
  "/clothhangers/cards/ceiling-balcony-cloth-hangers.webp",
  "/clothhangers/cards/ceiling-cloth-hangers.webp",
  "/clothhangers/best-cloth-hangers-near-me.webp",
  "/clothhangers/dry-balcony-cloth-hangers-installation.webp",
  "/clothhangers/cards/dry-balcony-cloth-hangers.webp",

]

export const locationImagesForArtificialGrass = [
  "/artificialturf/artificial-grass-for-ramp-near-me-installation.webp",
  "/artificialturf/artificial-grass-profitional-installation.webp",
  "/artificialturf/artificial-turf-installation-for-ground-near-me.webp",
  "/artificialturf/complete-artificial-turf-installation-for-national-ground-near-me.webp",
  "/artificialturf/complete-artificial-turf-installation-for-national-ground-near-me.webp",
    "/artificial/artificial-turf-grass-installation-for-garden.webp",
  "/artificialturf/artificial-turf-grass-material-properties.webp"
]

export const artificialGrassProductImages= [
  "/artificialturf/artificial-grass-profitional-installation.webp", 
  "/artificialturf/cards/artificial-turf-for-garden.webp",
  "/artificialturf/cards/artificial-grass-for-ramp.webp",
  "/artificialturf/artificial-turf-installation-for-ground-near-me.webp",
  "/artificialturf/complete-artificial-turf-installation-for-national-ground-near-me.webp",
    "/artificialturf/cards/artificial-grass-material-properties.webp",
  "/artificialturf/ground-top-rated-artificial-turf-installation.webp"

]
export const locationImagesForAntiBirdNetInstallation = [
  "/birdnet/anti-bird-nets-installation.webp",
  "/birdnet/balocny-safety-nets-installation.webp",
  "/birdnet/monkey-safety-nets.webp",
  "/birdnet/transparabt-net-installation.webp",
  "/birdnet/window-safety-nets-installation.webp",
];



export const BalconySafetyAntiBirdNetInstallation = [
  "/birdnet/cards/anti-bird-net.webp",
  "/birdnet/cards/balcony-safety-nets-near-me.webp",
  "/birdnet/transparabt-net-installation.webp",
  "/birdnet/cards/window-safety-nets.webp",
  "/birdnet/monkey-safety-nets.webp",
];

