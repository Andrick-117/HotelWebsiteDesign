import { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import hotelLogo from "@/imports/logosf.png";
import { goldGradient } from "@/app/components/shared";

const NAV_ITEMS = [
  { label: "Inicio", to: "/" },
  { label: "El Hotel", to: "/hotel" },
  { label: "Piscinas", to: "/piscinas" },
  { label: "Restaurante", to: "/restaurante" },
  { label: "Contacto", to: "/contacto" },
];

export default function Root() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Raleway', sans-serif" }}>
      {/* ── NAVBAR ── */}
      <header className="bg-[#382D23] shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 py-2 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => navigate("/")} className="flex-shrink-0">
            <ImageWithFallback
              src={hotelLogo}
              alt="Brisas del Lago — Hotel y Restaurante"
              className="h-16 w-auto object-contain"
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2.5 text-xs tracking-[0.18em] uppercase transition-all duration-300 rounded-sm font-medium ${
                    isActive
                      ? "text-[#382D23] font-semibold"
                      : "text-[#F5F0E8]/70 hover:text-[#F5F0E8]"
                  }`
                }
                style={({ isActive }) =>
                  isActive ? { background: goldGradient } : {}
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#F5F0E8] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-80" : "max-h-0"
          }`}
          style={{ background: "#2a2018" }}
        >
          <div className="flex flex-col px-6 py-3 gap-1">
            {NAV_ITEMS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-left px-4 py-3 text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-200 ${
                    isActive
                      ? "text-[#382D23] font-semibold"
                      : "text-[#F5F0E8]/70 hover:text-[#F5F0E8]"
                  }`
                }
                style={({ isActive }) =>
                  isActive ? { background: goldGradient } : {}
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </header>

      {/* ── PAGE CONTENT ── */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#2a2018" }} className="py-8 px-6 border-t border-[#CDA249]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <button onClick={() => navigate("/")}>
            <ImageWithFallback
              src={hotelLogo}
              alt="Brisas del Lago"
              className="h-11 w-auto object-contain opacity-80"
            />
          </button>

          {/* Footer nav */}
          <nav className="flex flex-wrap justify-center gap-4">
            {NAV_ITEMS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `text-xs tracking-[0.18em] uppercase transition-colors ${
                    isActive ? "text-[#CDA249]" : "text-[#F5F0E8]/35 hover:text-[#F5F0E8]/60"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a href="#" className="text-[#527B8C] hover:text-[#CDA249] transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-[#527B8C] hover:text-[#CDA249] transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-[#F5F0E8]/20 text-xs">
            © {new Date().getFullYear()} Brisas del Lago. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
