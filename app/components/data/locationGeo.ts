import { outerlocationParentMap } from "./telangana";
export const locationGeo = {
  hyderabad: { lat: "17.3850", lng: "78.4867", region: "IN-TG" },
  warangal: { lat: "17.9689", lng: "79.5941", region: "IN-TG" },
  karimnagar: { lat: "18.4386", lng: "79.1288", region: "IN-TG" },
  nizamabad: { lat: "18.6725", lng: "78.0941", region: "IN-TG" },
  khammam: { lat: "17.2473", lng: "80.1514", region: "IN-TG" },
  nalgonda: { lat: "17.0542", lng: "79.2672", region: "IN-TG" },
  siddipet: { lat: "18.1040", lng: "78.8520", region: "IN-TG" },
  mahabubnagar: { lat: "16.7488", lng: "78.0035", region: "IN-TG" },
  sangareddy: { lat: "17.6140", lng: "78.0816", region: "IN-TG" },
  suryapet: { lat: "17.1405", lng: "79.6200", region: "IN-TG" },
  miryalaguda: { lat: "16.8722", lng: "79.5625", region: "IN-TG" },
  kurnool: { lat: "15.8281", lng: "78.0373", region: "IN-AP" },
  kadapa: { lat: "14.4673", lng: "78.8242", region: "IN-AP" },
  tirupati: { lat: "13.6288", lng: "79.4192", region: "IN-AP" },
  mysore: { lat: "12.2958", lng: "76.6394", region: "IN-KA" }
} as const;

export type GeoCity = keyof typeof locationGeo;

export const locationParentMap: Record<string, GeoCity> = {

  // WARANGAL REGION
  warangal: "warangal",
  hanamkonda: "warangal",
  kazipet: "warangal",
  "warangal-city": "warangal",
  subedari: "warangal",
  "kakatiya-university-area": "warangal",
  madikonda: "warangal",
  enumamula: "warangal",
  "hunter-road": "warangal",
  nakkalagutta: "warangal",
  "ngo-colony": "warangal",

  // KARIMNAGAR
  karimnagar: "karimnagar",
  "housing-board-colony": "karimnagar",
  kothirampur: "karimnagar",
  ramnagar: "karimnagar",
  jyothinagar: "karimnagar",
  "mancherial-road-area": "karimnagar",
  rekurthi: "karimnagar",
  alugunur: "karimnagar",
  "mankamma-thota": "karimnagar",
  kothapalli: "karimnagar",
  bommakal: "karimnagar",

  // NIZAMABAD
  nizamabad: "nizamabad",
  "vinayak-nagar": "nizamabad",
  "bodhan-road": "nizamabad",
  "armoor-road": "nizamabad",
  "subhash-nagar": "nizamabad",
  dichpally: "nizamabad",
  nagaram: "nizamabad",
  gopanpally: "nizamabad",
  mubaraknagar: "nizamabad",

  // KHAMMAM
  khammam: "khammam",
  "wyra-road": "khammam",
  mamillagudem: "khammam",
  "balaji-nagar": "khammam",
  "sr-nagar": "khammam",
  "bypass-road": "khammam",
  "srinagar-colony": "khammam",
  "yellandu-cross-road": "khammam",
  "rotary-nagar": "khammam",

  // NALGONDA
  nalgonda: "nalgonda",
  "devarakonda-road": "nalgonda",
  "miryalaguda-road": "nalgonda",
  "shivaji-nagar": "nalgonda",
  cherlapally: "nalgonda",
  budharam: "nalgonda",

  // SIDDIPET
  siddipet: "siddipet",
  "gajwel-road": "siddipet",
  "prashanth-nagar": "siddipet",
  duddeda: "siddipet",
  "komuravelli-road": "siddipet",
  nangunur: "siddipet",

  // MAHABUBNAGAR
  mahabubnagar: "mahabubnagar",
  gadwal: "mahabubnagar",
  boyapally: "mahabubnagar",
  "jadcherla-road": "mahabubnagar",
  "new-town": "mahabubnagar",
  nawabpet: "mahabubnagar",
  balanagar: "mahabubnagar",
  rajapur: "mahabubnagar",

  // SANGAREDDY
  sangareddy: "sangareddy",
  patancheru: "sangareddy",
  isnapur: "sangareddy",
  "rc-puram": "sangareddy",
  "iit-hyderabad-surroundings": "sangareddy",
  ameenpur: "sangareddy",
  beeramguda: "sangareddy",
  "bhel-township": "sangareddy",
  tellapur: "sangareddy",

  // SURYAPET
  suryapet: "suryapet",
  kodad: "suryapet",
  huzurnagar: "suryapet",

  // MIRYALAGUDA (kept under suryapet as you defined)
 miryalaguda: "miryalaguda",
"sagar-road": "miryalaguda",
"nalgonda-road": "miryalaguda",
"new apartment zones": "miryalaguda",
"main road developments": "miryalaguda",

  // KURNOOL
  kurnool: "kurnool",
  "nandyal-road": "kurnool",
  "adoni-road": "kurnool",
  "bellary-road": "kurnool",
  budhwarpet: "kurnool",
  "balaji nagar ": "kurnool",
  "ashok-nagar": "kurnool",
  "gayatri-estate": "kurnool",
  "deva-nagar": "kurnool",
  joharapuram: "kurnool",
  kallur: "kurnool",
  "sunkesula-road": "kurnool",
  "collector-office-road": "kurnool",
  "maddur-nagar": "kurnool",

  // KADAPA
  kadapa: "kadapa",
  akkayapalli: "kadapa",
  "ngo colony ": "kadapa",
  "rims-road": "kadapa",
  "railway-station-road": "kadapa",
  yerramukkapalli: "kadapa",
  "ravindra-nagar": "kadapa",
  "maria-puram": "kadapa",
  "iti-circle": "kadapa",
  putlampalli: "kadapa",
  "chinna-chowk": "kadapa",
  sankarapuram: "kadapa",

  // TIRUPATI
  tirupati: "tirupati",
  "renigunta-road": "tirupati",
  "air-bypass-road": "tirupati",
  "alipiri-road": "tirupati",
  tiruchanoor: "tirupati",
  "bairagi-patteda": "tirupati",
  "annamaiah-circle": "tirupati",
  mangalam: "tirupati",
  korlagunta: "tirupati",
  "leela-mahal-circle": "tirupati",
  "padmavathi-nagar": "tirupati",
  "yerpedu-road": "tirupati",
  "mr-palli": "tirupati",

  // MYSORE
  mysore: "mysore",
  vijayanagar: "mysore",
  saraswathipuram: "mysore",
  kuvempunagar: "mysore",
  jayalakshmipuram: "mysore",
  hebbal: "mysore",
  bogadi: "mysore",
  hootagalli: "mysore",
  nazarbad: "mysore",
  "lashkar-mohalla": "mysore",
  chamrajpura: "mysore",
  gokulam: "mysore",
  yadavagiri: "mysore",
  bannimantap: "mysore",

  // GENERIC AREAS (kept as-is per your logic)
  "highway-road": "hyderabad",
  "new-layouts": "hyderabad",
  "residential-colonies": "hyderabad",
  "new-apartment-zones": "hyderabad",
  "main-road-developments": "hyderabad",
};