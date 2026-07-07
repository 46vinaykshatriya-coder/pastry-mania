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
    <header className="sticky top-0 z-50 bg-[#FFF8F0]/95 backdrop-blur-md border-b border-[#E8D8C8] shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-5 lg:px-6 py-3">

        {/* Logo */}
        <div
          onClick={onLogoClick}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={logo}
            alt="Pastry Mania"
            className="h-12 sm:h-14 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
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

            <p className="text-xs uppercase tracking-[3px] text-[#B78A5C]">
              Premium Cake Boutique
            </p>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-4">

          <a
            href="tel:6363322889"
            className="w-11 h-11 rounded-full bg-white shadow hover:bg-[#8B5E3C] hover:text-white transition flex items-center justify-center"
          >
            <Phone size={20} />
          </a>

          <a
            href="mailto:Pastrymaniasarjapura@gmail.com"
            className="w-11 h-11 rounded-full bg-white shadow hover:bg-[#8B5E3C] hover:text-white transition flex items-center justify-center"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://www.instagram.com/pastry_mania_/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white shadow hover:bg-[#8B5E3C] hover:text-white transition flex items-center justify-center"
          >
            <Instagram size={20} />
          </a>

          <button
            onClick={onContactClick}
            className="bg-[#8B5E3C] hover:bg-[#6D462A] text-white px-6 py-3 rounded-full shadow-lg transition"
          >
            Contact
          </button>

        </div>

        {/* Mobile */}
        <button
          onClick={onContactClick}
          className="lg:hidden w-11 h-11 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center shadow"
        >
          <Menu size={22} />
        </button>

      </div>
    </header>
  );
}