import {combineBengaloreLocations} from "../constants/locations";

type locatios = {
  [key: string]: string;
};

const locationArrayToObject = (locations: string[]): locatios => {
  const locationObj: locatios = {};
  locations.forEach((location) => {
    locationObj[location] = "Bengaluru";
  });
  return locationObj;
};


export const locationsMatch: locatios= {
  "Hanamkonda": "Warangal",
  "Kazipet": "Warangal",
  "Warangal City": "Warangal",
  "Subedari": "Warangal",
  "Kakatiya University area": "Warangal",
  "Madikonda": "Warangal",
  "Enumamula": "Warangal",
  "Hunter Road": "Warangal",
  "Nakkalagutta": "Warangal",
  "NGO Colony": "Warangal",

  "Housing Board Colony": "Karimnagar",
  "Kothirampur": "Karimnagar",
  "Ramnagar": "Karimnagar",
  "Jyothinagar": "Karimnagar",
  "Mancherial Road area": "Karimnagar",
  "Rekurthi": "Karimnagar",
  "Alugunur": "Karimnagar",
  "Mankamma Thota": "Karimnagar",
  "Kothapalli": "Karimnagar",
  "Bommakal": "Karimnagar",

  "Vinayak Nagar": "Nizamabad",
  "Bodhan Road": "Nizamabad",
  "Armoor Road": "Nizamabad",
  "Subhash Nagar": "Nizamabad",
  "Dichpally": "Nizamabad",
  "Nagaram": "Nizamabad",
  "Gopanpally": "Nizamabad",
  "Mubaraknagar": "Nizamabad",

  "Wyra Road": "Khammam",
  "Mamillagudem": "Khammam",
  "Balaji Nagar": "Khammam",
  "SR Nagar": "Khammam",
  "Bypass Road": "Khammam",
  "Srinagar Colony": "Khammam",
  "Yellandu Cross Road": "Khammam",
  "Rotary Nagar": "Khammam",

  "Devarakonda Road": "Nalgonda",
  "Miryalaguda Road": "Nalgonda",
  "Shivaji Nagar": "Nalgonda",
  "Cherlapally": "Nalgonda",
  "Budharam": "Nalgonda",

  "Gajwel Road": "Siddipet",
  "Prashanth Nagar": "Siddipet",
  "Housing Board Colony (Siddipet)": "Siddipet",
  "Duddeda": "Siddipet",
  "Komuravelli Road": "Siddipet",
  "Nangunur": "Siddipet",

  "Gadwal": "Mahabubnagar",
  "Boyapally": "Mahabubnagar",
  "New Town": "Mahabubnagar",
  "Jadcherla Road": "Mahabubnagar",
  "Nawabpet": "Mahabubnagar",
  "Balanagar": "Mahabubnagar",
  "Rajapur": "Mahabubnagar",

  "Patancheru": "Sangareddy",
  "Isnapur": "Sangareddy",
  "RC Puram": "Sangareddy",
  "IIT Hyderabad surroundings": "Sangareddy",
  "Ameenpur": "Sangareddy",
  "Beeramguda": "Sangareddy",
  "BHEL Township": "Sangareddy",
  "Tellapur": "Sangareddy",

  "Highway road": "Suryapet",
  "New layouts": "Suryapet",
  "Residential colonies": "Suryapet",
  "Kodad": "Suryapet",
  "Huzurnagar": "Suryapet",

  "New apartment zones": "Miryalaguda",
  "Main road developments": "Miryalaguda",
  "Sagar Road": "Miryalaguda",
  "Nalgonda Road": "Miryalaguda",
  
  kurnool: "Kurnool",
"Nandyal Road": "Kurnool",
"Adoni Road": "Kurnool",
"Bellary Road": "Kurnool",
Budhwarpet: "Kurnool",
"Balaji Nagar ": "Kurnool",
"Ashok Nagar": "Kurnool",
"Gayatri Estate": "Kurnool",
"Deva Nagar": "Kurnool",
Joharapuram: "Kurnool",
Kallur: "Kurnool",
"Sunkesula Road": "Kurnool",
"Collector Office Road": "Kurnool",
"Maddur Nagar": "Kurnool",

// KADAPA
kadapa: "Kadapa",
Akkayapalli: "Kadapa",
"NGO Colony ": "Kadapa",
"RIMS Road": "Kadapa",
"Railway Station Road": "Kadapa",
Yerramukkapalli: "Kadapa",
"Ravindra Nagar": "Kadapa",
"Maria Puram": "Kadapa",
"ITI Circle": "Kadapa",
Putlampalli: "Kadapa",
"Chinna Chowk": "Kadapa",
Sankarapuram: "Kadapa",

// TIRUPATI
tirupati: "Tirupati",
"Renigunta Road": "Tirupati",
"Air Bypass Road": "Tirupati",
"Alipiri Road": "Tirupati",
Tiruchanoor: "Tirupati",
"Bairagi Patteda": "Tirupati",
"Annamaiah Circle": "Tirupati",
Mangalam: "Tirupati",
Korlagunta: "Tirupati",
"Leela Mahal Circle": "Tirupati",
"Padmavathi Nagar": "Tirupati",
"Yerpedu Road": "Tirupati",
"MR Palli": "Tirupati",

// MYSORE
mysore: "Mysore",
Vijayanagar: "Mysore",
Saraswathipuram: "Mysore",
Kuvempunagar: "Mysore",
Jayalakshmipuram: "Mysore",
Hebbal: "Mysore",
Bogadi: "Mysore",
Hootagalli: "Mysore",
Nazarbad: "Mysore",
"Lashkar Mohalla": "Mysore",
Chamrajpura: "Mysore",
Gokulam: "Mysore",
Yadavagiri: "Mysore",
Bannimantap: "Mysore",
...locationArrayToObject(combineBengaloreLocations),
}