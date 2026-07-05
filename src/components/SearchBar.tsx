import { Search } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function SearchBar({
  searchTerm,
  onSearchChange,
}: SearchBarProps) {
  return (
    <section className="bg-[#FFF8F0] py-10">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-8">

          <h2
            className="text-5xl text-[#3A2A1E]"
            style={{
              fontFamily: "Cormorant Garamond",
              fontWeight: 700,
            }}
          >
            Discover Our Cakes
          </h2>

        </div>

        <div className="relative">

          <Search
            size={22}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-[#8B5E3C]"
          />

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search cakes..."
            className="
              w-full
              pl-16
              pr-6
              py-5
              rounded-full
              bg-white
              border
              border-[#E8D8C8]
              shadow-lg
              text-lg
              outline-none
              focus:ring-4
              focus:ring-[#EAD8C5]
              focus:border-[#8B5E3C]
              transition-all
            "
          />

        </div>

      </div>

    </section>
  );
}