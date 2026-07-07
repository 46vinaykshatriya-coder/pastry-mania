import { Eye, ShoppingBag } from "lucide-react";
import { Cake } from "../data/cakes";

interface CakeCardProps {
  cake: Cake;
  onView: (cake: Cake) => void;
  onPurchase: (cake: Cake) => void;
}

export default function CakeCard({
  cake,
  onView,
  onPurchase,
}: CakeCardProps) {
  return (
    <div className="group bg-white rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={cake.image}
          alt={cake.name}
          className="w-full h-40 sm:h-52 md:h-60 object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-6">

        {/* Category */}
        <span className="inline-block w-fit bg-[#F5E6D3] text-[#8B5E3C] text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {cake.category}
        </span>

        {/* Name */}
        <h3
          className="text-xl sm:text-2xl font-bold text-[#3A2A1E] leading-tight mb-2"
          style={{
            fontFamily: "Montserrat",
          }}
        >
          {cake.name}
        </h3>

        {/* Description */}
        <p className="text-[#6B5A4A] text-sm leading-6 line-clamp-2 mb-4 flex-1">
          {cake.description}
        </p>

        {/* Price */}
        <div className="mb-4">
          <p className="text-xs text-gray-500">
            Starting From
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#8B5E3C]">
            ₹{cake.price}
          </h2>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-2">

          <button
            onClick={() => onView(cake)}
            className="flex items-center justify-center gap-1 border border-[#8B5E3C] text-[#8B5E3C] py-2.5 rounded-full text-sm font-medium hover:bg-[#8B5E3C] hover:text-white transition-all duration-300"
          >
            <Eye size={16} />
            <span>View</span>
          </button>

          <button
            onClick={() => onPurchase(cake)}
            className="flex items-center justify-center gap-1 bg-[#8B5E3C] text-white py-2.5 rounded-full text-sm font-medium hover:bg-[#6B4423] transition-all duration-300"
          >
            <ShoppingBag size={16} />
            <span>Order</span>
          </button>

        </div>

      </div>

    </div>
  );
}