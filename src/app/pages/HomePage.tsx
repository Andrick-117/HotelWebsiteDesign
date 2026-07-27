import { useNavigate } from "react-router";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import hotelLogo from "@/imports/logosf.png";
import { goldGradient, GoldDivider } from "@/app/components/shared";

const HIGHLIGHTS = [
  {
    to: "/hotel",
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=700&h=500&fit=crop&auto=format",
    label: "El Hotel",
    sub: "Habitaciones & Suites",
  },
  {
    to: "/piscinas",
    img: "https://images.unsplash.com/photo-1745781145895-fc006ead630c?w=700&h=500&fit=crop&auto=format",
    label: "Piscinas",
    sub: "Área Recreativa",
  },
  {
    to: "/restaurante",
    img: "https://images.unsplash.com/photo-1779094542793-118e751cedc5?w=700&h=500&fit=crop&auto=format",
    label: "Restaurante",
    sub: "La Mesa del Lago",
  },
  {
    to: "/contacto",
    img: "https://images.unsplash.com/photo-1696551116918-398a1dbfac02?w=700&h=500&fit=crop&auto=format",
    label: "Contacto",
    sub: "Reservaciones",
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "'Raleway', sans-serif" }}>
      {/* ── HERO ── */}
      <section className="relative h-[90vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#382D23]">
          <img
            src="https://images.unsplash.com/photo-1609171653225-b224655739d3?w=1800&h=1100&fit=crop&auto=format"
            alt="Vista del lago de Petén al atardecer desde Brisas del Lago"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#382D23]/60 via-[#382D23]/10 to-[#382D23]/80" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-6 drop-shadow-2xl">
            <ImageWithFallback
              src={hotelLogo}
              alt="Brisas del Lago — Hotel y Restaurante"
              className="w-56 sm:w-72 md:w-88 object-contain mx-auto"
            />
          </div>
          <p
            className="text-[#CDA249]/80 text-xs tracking-[0.5em] uppercase mb-5"
          >
            San Diego · La Libertad · Petén · Guatemala
          </p>
          <p
            className="text-[#F5F0E8]/70 text-base md:text-lg tracking-wide max-w-lg mx-auto leading-relaxed mb-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Donde la naturaleza de Petén se funde con el lujo y la tranquilidad del lago.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => navigate("/hotel")}
              className="px-8 py-3 text-[#382D23] font-semibold tracking-[0.18em] uppercase text-xs transition-all duration-300 hover:opacity-90 hover:scale-105 rounded-sm"
              style={{ background: goldGradient }}
            >
              Conocer el Hotel
            </button>
            <button
              onClick={() => navigate("/contacto")}
              className="px-8 py-3 text-[#F5F0E8] font-semibold tracking-[0.18em] uppercase text-xs border border-[#CDA249]/40 hover:border-[#CDA249] transition-all duration-300 rounded-sm"
            >
              Reservar Ahora
            </button>
          </div>
          <button
            onClick={() => document.getElementById("highlights")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center gap-2 text-[#F5F0E8]/40 hover:text-[#CDA249] transition-colors cursor-pointer"
          >
            <span className="text-xs tracking-[0.3em] uppercase">Explorar</span>
            <ChevronDown size={16} className="animate-bounce" />
          </button>
        </div>
      </section>

      {/* ── WELCOME STRIP ── */}
      <section className="py-16 px-6 bg-[#F5F0E8] text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#527B8C] uppercase tracking-[0.35em] text-xs font-semibold mb-3">
            Bienvenidos
          </p>
          <h2
            className="text-3xl md:text-4xl text-[#382D23] font-normal leading-snug mb-0"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Un Paraíso a Orillas del Lago Petén Itzá
          </h2>
          <GoldDivider />
          <p className="text-[#6C5B4E] leading-relaxed text-sm md:text-base">
            Brisas del Lago es el destino ideal para quienes buscan descanso, naturaleza y lujo en el
            corazón de Guatemala. Nuestro hotel combina la calidez de la hospitalidad guatemalteca con
            instalaciones de primer nivel para garantizar una estadía inolvidable.
          </p>
        </div>
      </section>

      {/* ── HIGHLIGHTS GRID ── */}
      <section id="highlights" className="py-16 px-6 bg-[#382D23]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#CDA249]/70 uppercase tracking-[0.35em] text-xs font-semibold mb-3">
              Nuestras Secciones
            </p>
            <h2
              className="text-3xl md:text-4xl text-[#F5F0E8] font-normal"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Todo lo que Necesitas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HIGHLIGHTS.map(({ to, img, label, sub }) => (
              <button
                key={to}
                onClick={() => navigate(to)}
                className="relative overflow-hidden group rounded-sm text-left h-72 cursor-pointer"
              >
                <img
                  src={img}
                  alt={label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#382D23]/90 via-[#382D23]/30 to-transparent transition-all duration-300 group-hover:from-[#382D23]/70" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[#CDA249] text-xs tracking-[0.3em] uppercase mb-1">{sub}</p>
                  <h3
                    className="text-[#F5F0E8] text-xl font-normal"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {label}
                  </h3>
                  <div
                    className="mt-3 h-0.5 w-0 group-hover:w-10 transition-all duration-500"
                    style={{ background: goldGradient }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 px-6 bg-[#F5F0E8] text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#6C5B4E] text-sm md:text-base leading-relaxed mb-8">
            ¿Listo para vivir la experiencia Brisas del Lago? Contáctenos y haga su reservación hoy.
          </p>
          <button
            onClick={() => navigate("/contacto")}
            className="px-10 py-4 text-[#382D23] font-semibold tracking-[0.2em] uppercase text-sm transition-all duration-300 hover:opacity-90 hover:scale-105 rounded-sm"
            style={{ background: goldGradient }}
          >
            Solicitar Reservación
          </button>
        </div>
      </section>
    </div>
  );
}
