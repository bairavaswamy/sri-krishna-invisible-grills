// "use client";
// import { useState, useRef, memo } from 'react';
// import { motion, AnimatePresence } from "framer-motion";
// import Image from 'next/image';
// import Link from 'next/link';

// type ServiceItem = {
//   service: string;
//   image: string;
//   price: string;
//   offerPrice: string;
//   path: string;
// };


// export const defaultImages: ServiceItem[] = [
  
//   {
//     service: "Invisible Grill for Windows",
//     image: "/cards/window-anti-bird-invisible-grills-installation-near-me.webp",
//     price: "₹170",
//     offerPrice: "₹140",
//     path:"/services/windows-invisible-grills"
//   },
//   {
//     service: "Children Invisible Grills",
//     image: "/cards/children-safety-invisible-grills-for-balcony.webp",
//     price: "₹200",
//     offerPrice: "₹160",
//     path: "/services/children-safety-invisible-grills"
//   },
//   {
//     service: "Anti Bird Invisible Grills",
//     image: "/cards/anti-bird-invisible-grills.webp",
//     price: "₹180",
//     offerPrice: "₹145",
//     path: "/services/anti-bird-invisible-grills"
//   },
//   {
//     service: "Children Safety Invisible Grills",
//     image: "/cards/balcony-safety-invisible-grills-installation-near-me.webp",
//     price: "₹200",
//     offerPrice: "₹165",
//     path: "/services/children-safety-invisible-grills"
//   },
  
//   {
//     service: "Invisible Grills",
//     image: "/cards/invisible-grill.webp",
//     price: "₹140",
//     offerPrice: "₹120",
//     path: "/services/invisible-grills"
//   },
//   {
//     service: "Stainless Steel Invisible Grill",
//     image: "/cards/stainless-steel-invisible-grill.webp",
//     price: "₹164",
//     offerPrice: "₹132",
//     path: "/services/invisible-grills"
//   },
//   {
//     service: "Balcony Invisible Grills",
//     image: "/cards/Balcony-Invisible-Grills-1.webp",
//     price: "₹140",
//     offerPrice: "₹124",
//     path: "/services/balcony-safety-invisible-grills"
//   },
  
//   {
//     service: "Apartment Balcony Invisible Grills",
//     image: "/images/apartment-balcony-invisible-grills-near-me-in-hyderabad.webp",
//     price: "₹175",
//     offerPrice: "₹122",
//     path: "/services/anti-bird-invisible-grills"
//   },
  
//   {
//     service: "Dry Balcony Invisible Grills",
//     image: "/cards/dry-balcony-invisible-grills-installation-and-nets.webp",
//     price: "₹178",
//     offerPrice: "₹133",
//     path: "/services/balcony-safety-invisible-grills"
//   },
//   {
//     service: "Invisible Grills for Apartment",
//     image: "/cards/invisible-grills-for-apartment.webp",
//     price: "₹140",
//     offerPrice: "₹118",
//     path: "/services/anti-bird-invisible-grills"
//   },
//   {
//     service: "Pigeon Safety Invisible Grills",
//     image: "/images/pigeon-safety-invisible-grills.webp",
//     price: "₹180",
//     offerPrice: "₹149",
//     path: "/services/balcony-safety-invisible-grills"
//   },
//   {
//     service: "Sports Nets Installation",
//     image: "/images/Box-cricket-practice-net-installation-near-me.webp",
//     price: "₹25",
//     offerPrice: "₹19",
//     path:"/services/sports-nets"
//   }
// ]

// // ... keep your defaultImages array here ...


// // ... keep your ServiceItem type and defaultImages array ...

// function ButtonCardsInner({ images = defaultImages }: { images?: ServiceItem[] }) {
//   const [cards, setCards] = useState(images);

//   const handleDragEnd = (event: any, info: any) => {
//     if (info.offset.x < -60) {
//       setCards((prev) => {
//         const newCards = [...prev];
//         const removed = newCards.shift();
//         if (removed) newCards.push(removed);
//         return newCards;
//       });
//     }
//   };

//   return (
//     <div className="w-full bg-white pb-1 overflow-hidden ">
//       {/* --- SHARED HEADER --- */}
//       <div className="text-center mt-12 -mb-14 md:mb-4">
//         <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-green-900">
//           Our Products & Best Deals
//         </h1>
//         <div className="w-28 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 mx-auto mt-4 rounded-full"></div>
//       </div>

//       {/* --- MOBILE VIEW: Stacking Animation --- */}
//       <div className="md:hidden relative flex items-center justify-center h-[500px] w-full overflow-hidden px-4">
//         <AnimatePresence>
//           {cards.slice(0, 4).map((item, index) => (
//             <motion.div
//               key={item.service + index}
//               drag="x"
//               dragConstraints={{ left: 0, right: 0 }}
//               onDragEnd={handleDragEnd}
//               style={{ zIndex: cards.length - index }}
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{
//                 scale: 1 - index * 0.07,
//                 y: index * 29,
//                 x: index * 15,
//                 opacity: 1 - index * 0.2,
//               }}
//               exit={{ 
//                 x: -600,
//                 rotate: -20, 
//                 opacity: 0,
//                 transition: { duration: 0.4 } 
//               }}
//               className="absolute w-[280px] bg-white border rounded-xl shadow-xl overflow-hidden touch-none"
//             >
//               <ProductCardContent item={item} isMobile />
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>

//       {/* --- DESKTOP VIEW: Horizontal Scroller Fixed --- */}
//      {/* --- DESKTOP VIEW --- */}
// <div className="hidden md:flex md:gap-6 pb-4 w-full overflow-x-auto scrollbar-hide scroll-smooth">
//   {images.map((item, i) => (
//     <div
//       key={i}
//       className="
//         w-[240px] lg:w-[260px]
//         flex-shrink-0
//         bg-white border rounded-lg shadow-sm
//         hover:shadow-md transition-all hover:scale-105
//         overflow-hidden
//       "
//     >
//       <ProductCardContent item={item} />
//     </div>
//   ))}
// </div>
//     </div>
//   );
// }
// function ProductCardContent({ item, isMobile = false }: { item: ServiceItem, isMobile?: boolean }) {
//   return (
//     <>
//       <div className={`${isMobile ? 'h-48' : 'h-36'} w-full overflow-hidden relative bg-gray-100`}>
//         <Image
//           src={item.image}
//           alt={item.service}
//           fill
//           className="object-cover"
//           unoptimized
//         />
//       </div>

//       <div className="p-3 pt-4 pb-7 text-left overflow-hidden">
//         <div className="text-base font-medium truncate">
//           {item.service}
//         </div>

//         <div className="flex items-center gap-2 flex-wrap">
//           <span className="text-gray-600 line-through whitespace-nowrap">
//             {item.price}
//           </span>
//           <span className="text-green-900 font-semibold whitespace-nowrap">
//             {item.offerPrice}
//           </span>
//         </div>

//         <Link
//           href={item.path}
//           className="text-sm mt-1 text-gray-500 break-words
//             bg-gradient-to-r from-purple-500 to-pink-500
//             bg-[length:0%_2px] bg-left-bottom bg-no-repeat
//             transition-all duration-300
//             hover:bg-[length:100%_2px] hover:text-purple-600"
//         >
//           Learn more <span className="sr-only">about {item.service}</span>
//         </Link>
//       </div>
//     </>
//   );
// }

// export default memo(ButtonCardsInner)


"use client";
import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type ServiceItem = {
  service: string;
  image: string;
  price: string;
  offerPrice: string;
  path: string;
};

export const defaultImages: ServiceItem[] = [
  {
    service: "Invisible Grill for Windows",
    image: "/cards/window-anti-bird-invisible-grills-installation-near-me.webp",
    price: "₹170",
    offerPrice: "₹140",
    path: "/services/windows-invisible-grills",
  },
  {
    service: "Children Invisible Grills",
    image: "/cards/children-safety-invisible-grills-for-balcony.webp",
    price: "₹200",
    offerPrice: "₹160",
    path: "/services/children-safety-invisible-grills",
  },
  {
    service: "Anti Bird Invisible Grills",
    image: "/cards/anti-bird-invisible-grills.webp",
    price: "₹180",
    offerPrice: "₹145",
    path: "/services/anti-bird-invisible-grills",
  },
  {
    service: "Children Safety Invisible Grills",
    image: "/cards/balcony-safety-invisible-grills-installation-near-me.webp",
    price: "₹200",
    offerPrice: "₹165",
    path: "/services/children-safety-invisible-grills",
  },
  {
    service: "Invisible Grills",
    image: "/cards/invisible-grill.webp",
    price: "₹140",
    offerPrice: "₹120",
    path: "/services/invisible-grills",
  },
  {
    service: "Stainless Steel Invisible Grill",
    image: "/cards/stainless-steel-invisible-grill.webp",
    price: "₹164",
    offerPrice: "₹132",
    path: "/services/invisible-grills",
  },
  {
    service: "Balcony Invisible Grills",
    image: "/cards/Balcony-Invisible-Grills-1.webp",
    price: "₹140",
    offerPrice: "₹124",
    path: "/services/balcony-safety-invisible-grills",
  },
  {
    service: "Apartment Balcony Invisible Grills",
    image: "/images/apartment-balcony-invisible-grills-near-me-in-hyderabad.webp",
    price: "₹175",
    offerPrice: "₹122",
    path: "/services/anti-bird-invisible-grills",
  },
  {
    service: "Dry Balcony Invisible Grills",
    image: "/cards/dry-balcony-invisible-grills-installation-and-nets.webp",
    price: "₹178",
    offerPrice: "₹133",
    path: "/services/balcony-safety-invisible-grills",
  },
  {
    service: "Invisible Grills for Apartment",
    image: "/cards/invisible-grills-for-apartment.webp",
    price: "₹140",
    offerPrice: "₹118",
    path: "/services/anti-bird-invisible-grills",
  },
  {
    service: "Pigeon Safety Invisible Grills",
    image: "/images/pigeon-safety-invisible-grills.webp",
    price: "₹180",
    offerPrice: "₹149",
    path: "/services/balcony-safety-invisible-grills",
  },
  {
    service: "Sports Nets Installation",
    image: "/images/Box-cricket-practice-net-installation-near-me.webp",
    price: "₹25",
    offerPrice: "₹19",
    path: "/services/sports-nets",
  },
];

function ButtonCardsInner({ images = defaultImages }: { images?: ServiceItem[] }) {
  const [cards, setCards] = useState(images);

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x < -60) {
      setCards((prev) => {
        const newCards = [...prev];
        const removed = newCards.shift();
        if (removed) newCards.push(removed);
        return newCards;
      });
    }
  };

  return (
    <div className="w-full bg-white pb-1 overflow-x-hidden">
      {/* HEADER */}
      <div className="text-center mt-12 -mb-14 md:mb-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-green-900">
          Our Products & Best Deals
        </h1>
        <div className="w-28 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* MOBILE STACK */}
      <div className="md:hidden relative flex items-center justify-center h-[500px] w-full px-4 overflow-hidden">
        <AnimatePresence>
          {cards.slice(0, 4).map((item, index) => (
            <motion.div
              key={item.service + index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              style={{ zIndex: cards.length - index }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1 - index * 0.07,
                y: index * 29,
                x: index * 15,
                opacity: 1 - index * 0.2,
              }}
              exit={{
                x: -600,
                rotate: -20,
                opacity: 0,
                transition: { duration: 0.4 },
              }}
              className="absolute w-[280px] bg-white border rounded-xl shadow-xl overflow-hidden"
            >
              <ProductCardContent item={item} isMobile />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* DESKTOP SCROLLER (FIXED) */}
      <div className="hidden md:flex gap-6 pb-4 w-full overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth">
        {images.map((item, i) => (
          <div
            key={i}
            className="w-[240px] lg:w-[260px] flex-shrink-0 bg-white border rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105 overflow-hidden"
          >
            <ProductCardContent item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductCardContent({
  item,
  isMobile = false,
}: {
  item: ServiceItem;
  isMobile?: boolean;
}) {
  return (
    <>
      <div className={`${isMobile ? "h-48" : "h-36"} w-full relative bg-gray-100`}>
        <Image
          src={item.image}
          alt={item.service}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="p-3 pt-4 pb-7 text-left">
        <div className="text-base font-medium truncate">{item.service}</div>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-gray-600 line-through">{item.price}</span>
          <span className="text-green-900 font-semibold">{item.offerPrice}</span>
        </div>

        <Link
          href={item.path}
          className="text-sm mt-1 text-gray-500
          bg-gradient-to-r from-purple-500 to-pink-500
          bg-[length:0%_2px] bg-left-bottom bg-no-repeat
          transition-all duration-300
          hover:bg-[length:100%_2px] hover:text-purple-600"
        >
          Learn more  <span className="sr-only">about {item.service}</span>
        </Link>
      </div>
    </>
  );
}

export default memo(ButtonCardsInner);