interface CategoryBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryBar({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryBarProps) {
  return (
    <section className="bg-[#FFF8F0] pb-8 sm:pb-10 md:pb-12">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">

          {categories.map((category) => {
            const active = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`
                  px-4
                  sm:px-6
                  md:px-7
                  py-2
                  sm:py-3
                  rounded-full
                  text-xs
                  sm:text-sm
                  md:text-base
                  font-medium
                  whitespace-nowrap
                  transition-all
                  duration-300
                  border
                  shadow-md
                  ${
                    active
                      ? "bg-[#8B5E3C] text-white border-[#8B5E3C] scale-105 shadow-xl"
                      : "bg-white text-[#5A4334] border-[#E6D7C8] hover:bg-[#F5E6D3] hover:shadow-lg hover:-translate-y-1"
                  }
                `}
              >
                {category}
              </button>
            );
          })}

        </div>

      </div>

    </section>
  );
}