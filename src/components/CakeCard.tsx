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
    <div className="group bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

      {/* Cake Image */}
      <div className="overflow-hidden">
        <img
          src={cake.image}
          alt={cake.name}
          className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Category */}
        <span className="inline-block bg-[#F5E6D3] text-[#8B5E3C] text-xs font-semibold px-4 py-1 rounded-full mb-4">
          {cake.category}
        </span>

        {/* Cake Name */}
        <h3
          className="text-[24px] text-[#3A2A1E] mb-3 leading-tight"
          style={{
            fontFamily: "Montserrat",
            fontWeight: 700,
            letterSpacing: "0.3px",
          }}
        >
          {cake.name}
        </h3>

        {/* Description */}
        <p className="text-[#6B5A4A] text-sm leading-6 mb-6 line-clamp-2">
          {cake.description}
        </p>

        {/* Price */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-xs text-gray-500">
              Starting From
            </p>

            <h2 className="text-3xl font-bold text-[#8B5E3C]">
              ₹{cake.price}
            </h2>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">

          <button
            onClick={() => onView(cake)}
            className="flex-1 flex items-center justify-center gap-2 border border-[#8B5E3C] text-[#8B5E3C] py-3 rounded-full hover:bg-[#8B5E3C] hover:text-white transition-all duration-300"
          >
            <Eye size={18} />
            View
          </button>

          <button
            onClick={() => onPurchase(cake)}
            className="flex-1 flex items-center justify-center gap-2 bg-[#8B5E3C] text-white py-3 rounded-full hover:bg-[#6B4423] transition-all duration-300"
          >
            <ShoppingBag size={18} />
            Order
          </button>

        </div>

      </div>
    </div>
  );
}