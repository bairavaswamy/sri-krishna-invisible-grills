"use client"
import React ,{useEffect} from "react";
import { locationsMatch } from "./locationMatch";

type MapSectionProps = {
  area: string; // e.g., "Sadashivanagar, Bangalore"
};



const MapSection: React.FC<MapSectionProps> = ({ area }) => {
   const city = locationsMatch[area] ? locationsMatch[area] : "Hyderabad";
   useEffect(() => {
   console.log(city,locationsMatch[area],area)

   })
  return (
   <section className="w-full md:w-[80%] h-80 md:h-96 my-12 mx-auto">
  <iframe
    title={`Map of ${area}`}
    width="100%"
    height="100%"
    style={{ border: 0, borderRadius: "10px"}}
    loading="lazy"
    allowFullScreen
    src={`https://www.google.com/maps?q=${encodeURIComponent(area + `, ${city}`)}&output=embed`}
  />
</section>
  );
};

export default MapSection;