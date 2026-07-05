import { Phone, Mail, Instagram, Menu } from "lucide-react";
import logo from "../assets/logo.png";

interface HeaderProps {
  onContactClick: () => void;
  onLogoClick: () => void;
}

export default function Header({
  onContactClick,
  onLogoClick,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FFF8F0]/90 border-b border-[#E8D8C8]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div
          onClick={onLogoClick}
          className="flex items-center gap-4 cursor-pointer"
        >
          <img
            src={logo}
            alt="Pastry Mania"
            className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />

          <div className="hidden md:block">
            <h1
              className="text-2xl text-[#3A2A1E]"
              style={{
                fontFamily: "Cormorant Garamond",
                fontWeight: 700,
              }}
            >
              Pastry Mania
            </h1>

            <p className="text-sm uppercase tracking-[3px] text-[#B78A5C]">
              Premium Cake Boutique
            </p>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:7025500740"
            className="w-12 h-12 rounded-full bg-white shadow-md hover:bg-[#8B5E3C] hover:text-white transition flex items-center justify-center"
          >
            <Phone size={20} />
          </a>

          <a
            href="mailto:pastrymaniaimmadhihalli@gmail.com"
            className="w-12 h-12 rounded-full bg-white shadow-md hover:bg-[#8B5E3C] hover:text-white transition flex items-center justify-center"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://www.instagram.com/pastry_mania_/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white shadow-md hover:bg-[#8B5E3C] hover:text-white transition flex items-center justify-center"
          >
            <Instagram size={20} />
          </a>

          <button
            onClick={onContactClick}
            className="ml-2 bg-[#8B5E3C] hover:bg-[#6D462A] text-white px-6 py-3 rounded-full shadow-lg transition"
          >
            Contact
          </button>
        </div>

        {/* Mobile */}
        <button
          onClick={onContactClick}
          className="lg:hidden w-12 h-12 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}