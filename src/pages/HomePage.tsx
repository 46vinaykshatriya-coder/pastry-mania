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
     <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-[#F2E5D8] shadow-sm">

  <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

    {/* Logo */}

    <div className="flex items-center gap-4">

      <img
        src={logo}
        alt="Pastry Mania"
        className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
      />

      <div>

        <h1
          className="text-3xl font-bold text-[#3A2A1E]"
          style={{
            fontFamily: "Playfair Display",
          }}
        >
          Pastry Mania
        </h1>

        <p className="text-sm tracking-[4px] uppercase text-[#B98B62]">
          Premium Cake Boutique
        </p>

      </div>

    </div>

    {/* Right Side */}

    <button
      onClick={onEnter}
      className="bg-[#8B5E3C] hover:bg-[#6B4423] hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-full shadow-xl font-semibold"
    >
      Explore Menu
    </button>

  </div>

</nav>

      {/* Hero */}
      <section className="container mx-auto px-6 pt-12 pb-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="bg-[#F5E6D3] text-[#8B5E3C] px-5 py-2 rounded-full text-sm font-semibold">
              Premium Cakes & Desserts
            </span>

            <h1
             className="text-6xl md:text-7xl mt-6 leading-[1.1]"
              style={{ fontFamily: "Playfair Display" }}
            >
              Crafted With Love,
              <br />
              Baked To
              <span className="text-[#C89F7B]">
                {" "}
                Perfection
              </span>
            </h1>

            <p className="mt-8 text-xl text-[#5A4334] text-xl leading-8 ">
              Discover handcrafted cakes, premium pastries and custom
              creations designed to make every celebration memorable.
              Every cake is made with passion, creativity and the finest ingredients.
            </p>

            <div className="flex gap-4 mt-10 flex-wrap">

              <button
                onClick={onEnter}
                className="bg-[#8B5E3C] text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                Browse Collection
              </button>

              <a
                href="https://wa.me/7025500740"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-[#8B5E3C] text-[#8B5E3C] px-8 py-4 rounded-full"
              >
                Order Now
              </a>

            </div>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
              alt="Cake"
              className="rounded-[40px] shadow-2xl w-full"
            />

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="container mx-auto px-6 pt-8 pb-16">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:shadow-xl transition">

            <div className="w-16 h-16 rounded-2xl bg-[#F5E6D3] flex items-center justify-center">
              <Cake size={30} className="text-[#8B5E3C]" />
            </div>

            <h3 className="mt-6 text-3xl font-bold font-semibold text-[#3A2A1E]">
              Freshly Baked
            </h3>

            <p className="mt-3 text-[#5A4334] text-xl leading-8">
              Premium ingredients and handcrafted recipes for exceptional taste.
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:shadow-xl transition">

            <div className="w-16 h-16 rounded-2xl bg-[#F5E6D3] flex items-center justify-center">
              <Sparkles size={30} className="text-[#8B5E3C]" />
            </div>

            <h3 className="mt-6 text-3xl font-bold font-semibold text-[#3A2A1E]">
              Custom Designs
            </h3>

            <p className="mt-3 text-[#5A4334] text-xl leading-8">
              Personalized cakes crafted for birthdays, weddings and celebrations.
            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:shadow-xl transition">

            <div className="w-16 h-16 rounded-2xl bg-[#F5E6D3] flex items-center justify-center">
              <Truck size={30} className="text-[#8B5E3C]" />
            </div>

            <h3 className="mt-6 text-3xl font-bold font-semibold text-[#3A2A1E]">
              Fast Delivery
            </h3>

            <p className="mt-3 text-[#5A4334] text-xl leading-8">
              Reliable and timely delivery to make every occasion special.
            </p>

          </div>

        </div>

      </section>

      {/* About */}
{/* About Section */}

{/* About Section */}

<section className="container mx-auto px-6 py-16">

  <div className="bg-white rounded-[40px] shadow-xl p-12 md:p-16">

    <div className="text-center">

      <p className="uppercase tracking-[8px] text-[#C89F7B] font-semibold text-sm mb-4">
        OUR STORY
      </p>

      <h2
        className="text-5xl md:text-6xl text-[#3A2A1E] mb-8"
        style={{
          fontFamily: "Cormorant Garamond",
          fontWeight: 700,
        }}
      >
        Crafted With Passion,
        <br />
        Served With Love
      </h2>

      <div className="w-24 h-1 bg-[#C89F7B] mx-auto rounded-full mb-10"></div>

    </div>

    <div className="max-w-5xl mx-auto">

      <p className="text-xl leading-10 text-[#5A4334] text-center max-w-4xl mx-auto">
  At <span className="font-semibold text-[#8B5E3C]">Pastry Mania</span>, every cake is handcrafted with love, premium ingredients, and creative designs. Whether it's a birthday, wedding, or special celebration, we make every moment sweeter.
</p>

      <div className="grid md:grid-cols-3 gap-8 mt-16">

        <div className="text-center">

          <h3 className="text-5xl font-bold text-[#8B5E3C]">
            1000+
          </h3>

          <p className="mt-2 text-gray-500">
            Happy Customers
          </p>

        </div>

        <div className="text-center">

          <h3 className="text-5xl font-bold text-[#8B5E3C]">
            50+
          </h3>

          <p className="mt-2 text-gray-500">
            Signature Cakes
          </p>

        </div>

        <div className="text-center">

          <h3 className="text-5xl font-bold text-[#8B5E3C]">
            5★
          </h3>

          <p className="mt-2 text-gray-500">
            Customer Rating
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
      {/* Stats */}
      {/* Contact Section */}

<section className="container mx-auto px-6 py-20">

  <div className="text-center mb-14">

    <p className="uppercase tracking-[8px] text-[#B78A5C] font-semibold text-sm">
      CONTACT
    </p>

    <h2
      className="text-5xl md:text-6xl text-[#3A2A1E] mt-4"
      style={{
        fontFamily: "Cormorant Garamond",
        fontWeight: 700,
      }}
    >
      Visit Pastry Mania
    </h2>

    <p className="mt-5 text-xl text-[#5A4334] max-w-3xl mx-auto leading-9">
      We'd love to be part of your celebrations.
      Visit our bakery or contact us for fresh handcrafted cakes and customised creations.
    </p>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Address */}

    <div className="bg-white rounded-[30px] p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center border border-[#F3E6D9]">

      <div className="w-20 h-20 mx-auto rounded-full bg-[#8B5E3C] flex items-center justify-center shadow-lg">

        <MapPin size={34} className="text-white"/>

      </div>

      <h3 className="mt-7 text-3xl font-bold text-[#3A2A1E]">
        Address
      </h3>

      <p className="mt-5 text-[#5A4334] leading-8">

        Sarjapur–Bagalur Road,
        <br/>

        SNR 1, Near Vereti Apartment 2,
        <br/>

        Sarjapur,
        Anekal,
        <br/>

        Bengaluru - 562125

      </p>

    </div>

    {/* Phone */}

    <div className="bg-white rounded-[30px] p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center border border-[#F3E6D9]">

      <div className="w-20 h-20 mx-auto rounded-full bg-[#8B5E3C] flex items-center justify-center shadow-lg">

        <Phone size={34} className="text-white"/>

      </div>

      <h3 className="mt-7 text-3xl font-bold text-[#3A2A1E]">
        Contact
      </h3>

      <p className="mt-5 text-[#5A4334]">

        Darshan A

      </p>

      <a
        href="tel:6363322889"
        className="mt-3 inline-block text-2xl font-bold text-[#8B5E3C] hover:underline"
      >
        +91 63633 22889
      </a>

    </div>

    {/* Instagram */}

    <div className="bg-white rounded-[30px] p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center border border-[#F3E6D9]">

      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] flex items-center justify-center shadow-lg">

        <Instagram size={34} className="text-white"/>

      </div>

      <h3 className="mt-7 text-3xl font-bold text-[#3A2A1E]">
        Instagram
      </h3>

      <p className="mt-5 text-[#5A4334]">

        Follow us for our latest cakes, offers and customised creations.

      </p>

      <a
        href="https://www.instagram.com/_pastry_mania_?igsh=MWtidzlhenB1eHIyZw=="
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-block bg-[#8B5E3C] hover:bg-[#6B4423] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
      >
        Follow Us
      </a>

    </div>

  </div>

</section>

      <section className="bg-[#8B5E3C] text-white py-16">

        <div className="container mx-auto text-center px-6">

          <h2
            className="text-5xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            Ready To Order?
          </h2>

          <p className="mt-4 text-xl opacity-90">
            Explore our collection and find the perfect cake.
          </p>

          <button
            onClick={onEnter}
            className="mt-8 bg-white text-[#8B5E3C] px-8 py-4 rounded-full font-semibold"
          >
            Explore Menu
          </button>

        </div>

      </section>
    </div>
  );
}