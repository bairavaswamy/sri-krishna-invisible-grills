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

return {
"@context":"https://schema.org",
"@type":"BreadcrumbList",
"itemListElement":[
{
"@type":"ListItem",
"position":1,
"name":"Home",
"item":"https://rohiniinvisiblegrills.com"
},
{
"@type":"ListItem",
"position":2,
"name":"Invisible Grills Locations",
"item":"https://rohiniinvisiblegrills.com/invisible-grills-locations"
},
{
"@type":"ListItem",
"position":3,
"name":location,
"item":"https://rohiniinvisiblegrills.com/"+slug
}
]
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


