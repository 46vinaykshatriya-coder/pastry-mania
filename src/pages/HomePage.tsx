import logo from "../assets/logo.png";
import {
  Cake,
  Sparkles,
  Truck,
  Phone,
  MapPin,
  Instagram,
} from "lucide-react";
interface HomePageProps {
  onEnter: () => void;
}

export default function HomePage({ onEnter }: HomePageProps) {
  return (
    <div
      className="min-h-screen bg-[#FFF8F0]"
      style={{ fontFamily: "Poppins" }}
    >
    {/* Navbar */}
<nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#F3E6D9] shadow-sm">

  <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">

    {/* Logo */}
    <div className="flex items-center gap-3">

      <img
        src={logo}
        alt="Pastry Mania"
        className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
      />

      <div>

        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3A2A1E] leading-none"
          style={{ fontFamily: "Playfair Display" }}
        >
          Pastry Mania
        </h1>

        <p className="uppercase tracking-[4px] sm:tracking-[6px] text-[10px] sm:text-xs text-[#B98B62] mt-1">
          Premium Cake Boutique
        </p>

      </div>

    </div>

    {/* Button */}

    <button
      onClick={onEnter}
      className="
      bg-[#8B5E3C]
      hover:bg-[#6B4423]
      text-white
      font-semibold
      rounded-full
      shadow-lg
      transition
      duration-300
      px-5
      py-3
      sm:px-8
      sm:py-4
      text-sm
      sm:text-base
      "
    >
      Explore Menu
    </button>

  </div>

</nav>

     {/* Hero */}
<section className="relative overflow-hidden bg-gradient-to-b from-[#FFF8F0] via-[#FFF6ED] to-[#FFF8F0]">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Left */}
      <div>

        <span className="inline-block bg-[#F5E6D3] text-[#8B5E3C] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
          Premium Cakes & Desserts
        </span>

        <h1
          className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-[#3A2A1E]"
          style={{ fontFamily: "Playfair Display" }}
        >
          Crafted With Love
          <br />
          Baked To
          <span className="text-[#8B5E3C]"> Perfection</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#5A4334] leading-8 max-w-xl">
          Every cake is handcrafted with premium ingredients and elegant
          designs to make birthdays, weddings and every celebration
          unforgettable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">

          <button
            onClick={onEnter}
            className="bg-[#8B5E3C] hover:bg-[#6B4423] text-white px-8 py-4 rounded-full shadow-xl transition duration-300 hover:scale-105"
          >
            Browse Collection
          </button>

          <a
            href="https://wa.me/6363322889"
            target="_blank"
            rel="noreferrer"
            className="border-2 border-[#8B5E3C] text-[#8B5E3C] px-8 py-4 rounded-full text-center hover:bg-[#8B5E3C] hover:text-white transition duration-300"
          >
            Order on WhatsApp
          </a>

        </div>

      </div>

      {/* Right */}

      <div className="relative">

        <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#F5E6D3] rounded-full blur-3xl opacity-70"></div>

        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#EFD6BE] rounded-full blur-3xl opacity-70"></div>

        <img
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
          alt="Cake"
          className="relative rounded-[30px] shadow-2xl w-full h-[280px] sm:h-[420px] lg:h-[620px] object-cover hover:scale-[1.02] transition duration-500"
        />

      </div>

    </div>

  </div>

</section>
      {/* Features */}
<section className="py-12 lg:py-20 bg-[#FFF8F0]">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-12">

      <span className="text-[#B98B62] uppercase tracking-[5px] text-sm font-semibold">
        Why Choose Us
      </span>

      <h2
        className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A2A1E]"
        style={{ fontFamily: "Playfair Display" }}
      >
        Freshness You Can Taste
      </h2>

      <p className="mt-4 text-[#6B5A4A] max-w-2xl mx-auto text-base sm:text-lg">
        Every creation is handcrafted with premium ingredients, elegant
        presentation and lots of love.
      </p>

    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Card 1 */}
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

        <div className="w-16 h-16 rounded-2xl bg-[#F5E6D3] flex items-center justify-center">
          <Cake size={30} className="text-[#8B5E3C]" />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-[#3A2A1E]">
          Freshly Baked
        </h3>

        <p className="mt-4 text-[#6B5A4A] leading-7">
          Every cake is baked fresh daily using premium ingredients for
          unmatched taste and quality.
        </p>

      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

        <div className="w-16 h-16 rounded-2xl bg-[#F5E6D3] flex items-center justify-center">
          <Sparkles size={30} className="text-[#8B5E3C]" />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-[#3A2A1E]">
          Custom Designs
        </h3>

        <p className="mt-4 text-[#6B5A4A] leading-7">
          Beautiful cakes crafted exactly the way you imagine for birthdays,
          weddings and special celebrations.
        </p>

      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:col-span-2 lg:col-span-1">

        <div className="w-16 h-16 rounded-2xl bg-[#F5E6D3] flex items-center justify-center">
          <Truck size={30} className="text-[#8B5E3C]" />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-[#3A2A1E]">
          Fast Delivery
        </h3>

        <p className="mt-4 text-[#6B5A4A] leading-7">
          Safe and reliable doorstep delivery across Bengaluru with careful
          handling and perfect presentation.
        </p>

      </div>

    </div>

  </div>

</section>
{/* About */}
<section className="py-14 lg:py-24 bg-white">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center">

      <span className="uppercase tracking-[5px] text-[#B98B62] text-sm font-semibold">
        Our Story
      </span>

      <h2
        className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold text-[#3A2A1E]"
        style={{ fontFamily: "Playfair Display" }}
      >
        Crafted With Passion,
        <br />
        Served With Love
      </h2>

      <div className="w-24 h-1 bg-[#8B5E3C] rounded-full mx-auto mt-6"></div>

    </div>

    <div className="mt-10 max-w-4xl mx-auto">

      <p className="text-center text-[#5A4334] text-base sm:text-lg lg:text-xl leading-8">
        At <span className="font-semibold text-[#8B5E3C]">Pastry Mania</span>,
        we believe every celebration deserves something unforgettable.
        Our cakes are handcrafted using premium ingredients, elegant
        decoration and recipes perfected with years of passion.
        Whether it's a birthday, anniversary, wedding or a surprise for
        someone special, we create desserts that leave lasting memories.
      </p>

    </div>

    {/* Statistics */}

    <div className="grid grid-cols-3 gap-4 md:gap-10 mt-14">

      <div className="text-center">

        <h3 className="text-3xl md:text-5xl font-bold text-[#8B5E3C]">
          1000+
        </h3>

        <p className="mt-2 text-sm md:text-base text-gray-600">
          Happy Customers
        </p>

      </div>

      <div className="text-center">

        <h3 className="text-3xl md:text-5xl font-bold text-[#8B5E3C]">
          50+
        </h3>

        <p className="mt-2 text-sm md:text-base text-gray-600">
          Signature Cakes
        </p>

      </div>

      <div className="text-center">

        <h3 className="text-3xl md:text-5xl font-bold text-[#8B5E3C]">
          5★
        </h3>

        <p className="mt-2 text-sm md:text-base text-gray-600">
          Customer Rating
        </p>

      </div>

    </div>

  </div>

</section>
    {/* Contact Section */}
<section className="py-14 lg:py-24 bg-[#FFF8F0]">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center">

      <span className="uppercase tracking-[5px] text-[#B98B62] text-sm font-semibold">
        Contact Us
      </span>

      <h2
        className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold text-[#3A2A1E]"
        style={{ fontFamily: "Playfair Display" }}
      >
        We'd Love To Serve You
      </h2>

      <p className="mt-5 text-[#5A4334] text-base sm:text-lg max-w-2xl mx-auto">
        Visit our bakery or contact us anytime to order delicious cakes,
        pastries and customised creations for every occasion.
      </p>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">

      {/* Address */}

      <div className="bg-white rounded-3xl p-7 shadow-lg hover:shadow-2xl transition">

        <div className="w-16 h-16 rounded-full bg-[#8B5E3C] flex items-center justify-center mx-auto">
          <MapPin className="text-white" size={28} />
        </div>

        <h3 className="text-2xl font-bold text-center mt-6 text-[#3A2A1E]">
          Address
        </h3>

        <p className="text-center mt-4 text-[#5A4334] leading-7">
          Sarjapur–Bagalur Road
          <br />
          SNR 1, Near Vereti Apartment 2
          <br />
          Sarjapur, Anekal
          <br />
          Bengaluru – 562125
        </p>

      </div>

      {/* Phone */}

      <div className="bg-white rounded-3xl p-7 shadow-lg hover:shadow-2xl transition">

        <div className="w-16 h-16 rounded-full bg-[#8B5E3C] flex items-center justify-center mx-auto">
          <Phone className="text-white" size={28} />
        </div>

        <h3 className="text-2xl font-bold text-center mt-6 text-[#3A2A1E]">
          Call Us
        </h3>

        <p className="text-center mt-4 text-[#5A4334]">
          Darshan A
        </p>

        <a
          href="tel:6363322889"
          className="block text-center mt-3 text-xl font-bold text-[#8B5E3C]"
        >
          +91 63633 22889
        </a>

      </div>

      {/* Instagram */}

      <div className="bg-white rounded-3xl p-7 shadow-lg hover:shadow-2xl transition">

        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center mx-auto">
          <Instagram className="text-white" size={28} />
        </div>

        <h3 className="text-2xl font-bold text-center mt-6 text-[#3A2A1E]">
          Instagram
        </h3>

        <p className="text-center mt-4 text-[#5A4334]">
          Follow our latest cake creations and offers.
        </p>

        <div className="text-center mt-6">

          <a
            href="https://www.instagram.com/_pastry_mania_?igsh=MWtidzlhenB1eHIyZw=="
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#8B5E3C] hover:bg-[#6B4423] text-white px-6 py-3 rounded-full transition"
          >
            Follow Us
          </a>

        </div>

      </div>

    </div>

  </div>

</section>

{/* Final CTA */}

<section className="bg-[#8B5E3C] py-16">

  <div className="max-w-5xl mx-auto px-4 text-center">

    <h2
      className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold"
      style={{ fontFamily: "Playfair Display" }}
    >
      Ready To Order Your Dream Cake?
    </h2>

    <p className="mt-5 text-white/90 text-base sm:text-lg">
      Freshly baked with premium ingredients and crafted with love for every celebration.
    </p>

    <button
      onClick={onEnter}
      className="mt-8 bg-white text-[#8B5E3C] px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
    >
      Explore Menu
    </button>
</div> 
</section>
</div>
  );
}
