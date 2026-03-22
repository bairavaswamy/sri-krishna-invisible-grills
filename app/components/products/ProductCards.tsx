import Link from "next/link";
import { Service } from "../data/productServices";

interface ProductCardProps {
  service: Service;
}

export const ProductCard: React.FC<ProductCardProps> = ({ service }) => {
  return (
    <div className="relative max-w-sm bg-white shadow-lg rounded-md overflow-hidden hover:shadow-2xl shadow-soft transform transition-transform hover:scale-105">
      {/* Image */}
      <div className="relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
        />
        {/* Price Badge */}
        <div className="absolute top-4 left-4 bg-black text-white w-14 h-14 rounded-full flex items-center justify-center font-semibold text-xs">
          {service.offerPrice}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        {/* <p className="text-xs text-gray-500 tracking-widest mb-2 uppercase">
          ACCESSORIES
        </p> */}
        <h2 className="text-2xl font-serif font-bold mb-4">{service.title}</h2>
        <p className="text-sm text-gray-700 mb-6">{service.description}</p>
        <Link
          href={`/services/${service.slug}`}
          className="inline-block bg-black text-white text-sm font-medium py-2 px-6 rounded-full hover:bg-gray-800 transition-colors"
        >
          Explore Product  
        </Link>
      </div>
    </div>
  );
};