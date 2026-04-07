import Image from "next/image";
import { ProductItem } from "../seo/types";
import { ShoppingCart } from "lucide-react";

export default function ProductCard({ item }: { item: ProductItem }) {
  const isOrange = item.color === "orange";

  return (
    <div className="bg-[#fff] rounded-3xl p-4 shadow-sm hover:shadow-2xl shadow-soft transform transition-transform hover:scale-105">

      {/* IMAGE WRAPPER */}
      <div className="relative rounded-2xl overflow-hidden">
        
        {/* CUT CORNER SHAPE */}
        <div className="absolute top-0 left-0 z-10 bg-[#f1f1f1] px-4 py-2 rounded-br-2xl text-sm font-medium">
          {item.location}
        </div>

        <div className="h-60 w-full relative">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="mt-5">
        
        {/* TITLE + PRICE */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">
            {item.title}
          </h3>

          <span
            className={`text-white text-sm px-4 py-1 rounded-full ${
              isOrange ? "bg-orange-500" : "bg-teal-600"
            }`}
          >
            {item.price}
          </span>
        </div>

        {/* DESC */}
        <p className="text-gray-500 text-sm mt-3 leading-relaxed line-clamp-3">
          {item.description}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mt-4">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className={`text-xs px-3 py-1 rounded-full ${
                isOrange
                  ? "bg-orange-100 text-orange-600"
                  : "bg-teal-100 text-teal-600"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* BUTTON */}
        <button
          className={`mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-full text-white font-medium transition ${
            isOrange
              ? "bg-orange-500 hover:bg-orange-600"
              : "bg-teal-600 hover:bg-teal-700"
          }`}
        >
          <ShoppingCart size={18} />
          Visit Product
        </button>
      </div>
    </div>
  );
}