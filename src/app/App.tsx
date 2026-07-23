import { useState, useEffect } from "react";
import { Menu, X, MapPin, Phone, Mail, Instagram, Facebook, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import hotelLogo from "@/imports/logosf.png";

const NAV_LINKS = ["El Hotel", "Piscinas", "Restaurante", "Contacto"];

const HOTEL_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900&h=600&fit=crop&auto=format",
    alt: "Suite de lujo con vista al lago en Brisas del Lago",
    label: "Suite Lago",
  },
  {
    url: "https://images.unsplash.com/photo-1718942899965-4fc10607d805?w=900&h=600&fit=crop&auto=format",
    alt: "Habitación con vista panorámica al horizonte",
    label: "Vista Panorámica",
  },
  {
    url: "https://images.unsplash.com/photo-1646974400439-321c4a9240b9?w=900&h=600&fit=crop&auto=format",
    alt: "Sala de estar de suite premium con ventanales",
    label: "Suite Premium",
  },
  {
    url: "https://images.unsplash.com/photo-1705765276125-f2539bc95b0f?w=900&h=600&fit=crop&auto=format",
    alt: "Habitación con terraza privada y puerta corredera",
    label: "Terraza Privada",
  },
];

const POOL_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1745781145895-fc006ead630c?w=1200&h=800&fit=crop&auto=format",
    alt: "Piscina infinita con reflejo del atardecer en Brisas del Lago",
    label: "Piscina Infinita",
    size: "large",
  },
  {
    url: "https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?w=700&h=500&fit=crop&auto=format",
    alt: "Área de piscina tropical con palmeras",
    label: "Jardín Tropical",
    size: "small",
  },
  {
    url: "https://images.unsplash.com/photo-1520011791306-1e702037318c?w=700&h=500&fit=crop&auto=format",
    alt: "Piscina exterior rodeada de naturaleza exuberante",
    label: "Piscina Exterior",
    size: "small",
  },
  {
    url: "https://images.unsplash.com/photo-1674043549207-abb537456982?w=1200&h=600&fit=crop&auto=format",
    alt: "Piscina al atardecer con colores cálidos del cielo",
    label: "Atardecer en el Lago",
    size: "wide",
  },
];

const RESTAURANT_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1779094542793-118e751cedc5?w=1000&h=700&fit=crop&auto=format",
    alt: "Cena elegante al aire libre con mariscos frescos y vino",
    label: "Cena Gourmet",
    size: "large",
  },
  {
    url: "https://images.unsplash.com/photo-1771342753098-92aa14aa0619?w=700&h=500&fit=crop&auto=format",
    alt: "Mesa servida con vajilla fina y copas de vino al aire libre",
    label: "Mesa de Autor",
    size: "small",
  },
  {
    url: "https://images.unsplash.com/photo-1781912823378-837f967146c1?w=700&h=500&fit=crop&auto=format",
    alt: "Salón de eventos con manteles blancos y decoración elegante",
    label: "Salón Privado",
    size: "small",
  },
  {
    url: "https://images.unsplash.com/photo-1779094543676-81b274cf35cc?w=1000&h=600&fit=crop&auto=format",
    alt: "Platillos gourmet con pasta, vino y pulpo a la parrilla",
    label: "Alta Cocina",
    size: "wide",
  },
];

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <div className="h-px w-16 bg-[#CDA249] opacity-60" />
      <div className="w-2 h-2 rotate-45 bg-[#CDA249]" />
      <div className="h-px w-16 bg-[#CDA249] opacity-60" />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[#527B8C] uppercase tracking-[0.3em] text-xs font-semibold mb-3"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      {children}
    </p>
  );
}

function SectionTitle({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className={`text-4xl md:text-5xl font-normal leading-tight ${light ? "text-[#F5F0E8]" : "text-[#382D23]"}`}
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {children}
    </h2>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(/\s/g, "-"));
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-background"
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      {/* ── NAVIGATION ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#382D23]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div
            className="cursor-pointer flex-shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ImageWithFallback
              src={hotelLogo}
              alt="Brisas del Lago — Hotel y Restaurante"
              className="h-14 w-auto object-contain"
            />
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 items-center">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="text-[#F5F0E8]/80 hover:text-[#CDA249] text-sm tracking-[0.15em] uppercase transition-colors duration-300 cursor-pointer"
                >
                  {link}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => scrollTo("Contacto")}
                className="px-5 py-2 text-[#382D23] text-sm tracking-[0.12em] uppercase font-semibold transition-all duration-300 hover:opacity-90 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #e8c97a 0%, #CDA249 55%, #a87d30 100%)",
                  borderRadius: "2px",
                }}
              >
                Reservar
              </button>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#F5F0E8] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ${menuOpen ? "max-h-80" : "max-h-0"}`}
          style={{ background: "#382D23" }}
        >
          <ul className="flex flex-col px-6 pb-6 pt-2 gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="text-[#F5F0E8]/80 hover:text-[#CDA249] text-sm tracking-[0.15em] uppercase transition-colors block"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[680px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#382D23]">
          <img
            src="https://images.unsplash.com/photo-1609171653225-b224655739d3?w=1800&h=1100&fit=crop&auto=format"
            alt="Vista aérea del lago al atardecer desde Brisas del Lago, Petén"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#382D23]/60 via-[#382D23]/20 to-[#382D23]/80" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          {/* Official hotel logo */}
          <div className="mb-8 drop-shadow-2xl">
            <ImageWithFallback
              src={hotelLogo}
              alt="Brisas del Lago — Hotel y Restaurante"
              className="w-64 sm:w-80 md:w-96 object-contain mx-auto"
            />
          </div>
          <p
            className="text-[#CDA249]/80 text-xs tracking-[0.45em] uppercase mb-6"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            San Diego · La Libertad · Petén · Guatemala
          </p>
          <p
            className="text-[#F5F0E8]/70 text-base md:text-lg tracking-wide max-w-lg mx-auto leading-relaxed mb-10"
          >
            Donde la naturaleza de Petén se funde con el lujo y la tranquilidad del lago.
          </p>
          <button
            onClick={() => scrollTo("El Hotel")}
            className="flex flex-col items-center mx-auto gap-2 text-[#F5F0E8]/50 hover:text-[#CDA249] transition-colors cursor-pointer group"
          >
            <span className="text-xs tracking-[0.3em] uppercase">Descubrir</span>
            <ChevronDown size={18} className="animate-bounce" />
          </button>
        </div>
      </section>

      {/* ── EL HOTEL ── */}
      <section id="el-hotel" className="py-24 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>El Hotel</SectionLabel>
            <SectionTitle>Confort en el Corazón de Petén</SectionTitle>
            <GoldDivider />
            <p className="text-[#6C5B4E] max-w-2xl mx-auto leading-relaxed text-base">
              Nuestras habitaciones y suites están diseñadas para ofrecerle una experiencia de descanso incomparable,
              con vistas privilegiadas al lago y acabados que conjugan la calidez tropical con la elegancia moderna.
            </p>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left column — large image */}
            <div className="relative overflow-hidden group rounded-sm" style={{ height: "560px" }}>
              <img
                src={HOTEL_IMAGES[0].url}
                alt={HOTEL_IMAGES[0].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#382D23]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span
                  className="text-[#CDA249] text-xs tracking-[0.3em] uppercase"
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  {HOTEL_IMAGES[0].label}
                </span>
              </div>
            </div>

            {/* Right column — stacked */}
            <div className="flex flex-col gap-4">
              {HOTEL_IMAGES.slice(1).map((img) => (
                <div
                  key={img.label}
                  className="relative overflow-hidden group rounded-sm flex-1"
                  style={{ minHeight: "170px" }}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#382D23]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="text-[#CDA249] text-xs tracking-[0.3em] uppercase"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      {img.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-16 grid grid-cols-3 border border-[#CDA249]/20 rounded-sm overflow-hidden">
            {[
              { num: "24", unit: "Habitaciones", sub: "de lujo y confort" },
              { num: "5★", unit: "Experiencia", sub: "personalizada" },
              { num: "100%", unit: "Vista al Lago", sub: "desde cada suite" },
            ].map((stat, i) => (
              <div
                key={stat.unit}
                className={`py-8 px-6 text-center ${i < 2 ? "border-r border-[#CDA249]/20" : ""}`}
              >
                <div
                  className="text-3xl font-bold"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    background: "linear-gradient(135deg, #e8c97a 0%, #CDA249 60%, #a87d30 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.num}
                </div>
                <div className="text-[#382D23] font-semibold text-sm tracking-wide mt-1">{stat.unit}</div>
                <div className="text-[#6C5B4E] text-xs mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PISCINAS ── */}
      <section id="piscinas" className="py-24 bg-[#382D23]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Área Recreativa</SectionLabel>
            <SectionTitle light>Piscinas & Paraíso Tropical</SectionTitle>
            <GoldDivider />
            <p className="text-[#F5F0E8]/65 max-w-2xl mx-auto leading-relaxed text-base">
              Sumérgete en nuestras piscinas rodeadas de exuberante vegetación petenera.
              Un remanso de paz donde el tiempo se detiene y los colores del lago llenan el horizonte.
            </p>
          </div>

          {/* Hero pool image */}
          <div className="relative overflow-hidden group rounded-sm mb-4" style={{ height: "480px" }}>
            <img
              src={POOL_IMAGES[0].url}
              alt={POOL_IMAGES[0].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#382D23]/80 via-[#382D23]/10 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <p className="text-[#CDA249] text-xs tracking-[0.35em] uppercase mb-2">Piscina Principal</p>
                <h3
                  className="text-[#F5F0E8] text-3xl font-normal"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Infinita como el Lago
                </h3>
              </div>
              <div className="hidden md:block h-px flex-1 mx-8 bg-[#CDA249]/30" />
            </div>
          </div>

          {/* Two smaller pool images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {POOL_IMAGES.slice(1, 3).map((img) => (
              <div
                key={img.label}
                className="relative overflow-hidden group rounded-sm"
                style={{ height: "300px" }}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#382D23]/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="text-[#CDA249] text-xs tracking-[0.3em] uppercase">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Wide sunset pool */}
          <div className="relative overflow-hidden group rounded-sm" style={{ height: "320px" }}>
            <img
              src={POOL_IMAGES[3].url}
              alt={POOL_IMAGES[3].alt}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#382D23]/70 via-transparent to-[#382D23]/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-[#CDA249] text-xs tracking-[0.4em] uppercase mb-3">Al Caer la Tarde</p>
                <h3
                  className="text-[#F5F0E8] text-4xl font-light italic"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {POOL_IMAGES[3].label}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESTAURANTE ── */}
      <section id="restaurante" className="py-24 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="md:grid md:grid-cols-2 md:gap-16 md:items-center mb-16">
            <div>
              <SectionLabel>Restaurante</SectionLabel>
              <SectionTitle>La Mesa del Lago</SectionTitle>
              <GoldDivider />
              <p className="text-[#6C5B4E] leading-relaxed text-base mb-6">
                Nuestro restaurante es una celebración de los sabores de Guatemala y el mundo.
                Ingredientes frescos, técnicas de alta cocina y un ambiente que combina la elegancia
                con la calidez natural de Petén.
              </p>
              <p className="text-[#6C5B4E] leading-relaxed text-base">
                Disfrute de su cena bajo las estrellas con una vista incomparable al lago,
                acompañado de nuestra carta de vinos cuidadosamente seleccionada.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {[
                  { time: "Desayuno", hours: "7:00 – 10:30" },
                  { time: "Almuerzo", hours: "12:00 – 15:30" },
                  { time: "Cena", hours: "19:00 – 22:30" },
                ].map((item) => (
                  <div
                    key={item.time}
                    className="flex justify-between items-center py-3 border-b border-[#CDA249]/20"
                  >
                    <span className="text-[#382D23] font-semibold text-sm tracking-wide">{item.time}</span>
                    <span className="text-[#527B8C] text-sm">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Restaurant main image */}
            <div
              className="relative overflow-hidden group rounded-sm mt-10 md:mt-0"
              style={{ height: "480px" }}
            >
              <img
                src={RESTAURANT_IMAGES[0].url}
                alt={RESTAURANT_IMAGES[0].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#382D23]/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-[#CDA249] text-xs tracking-[0.3em] uppercase">
                  {RESTAURANT_IMAGES[0].label}
                </span>
              </div>
            </div>
          </div>

          {/* Restaurant image grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RESTAURANT_IMAGES.slice(1).map((img) => (
              <div
                key={img.label}
                className="relative overflow-hidden group rounded-sm"
                style={{ height: "280px" }}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#382D23]/65 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="text-[#CDA249] text-xs tracking-[0.3em] uppercase">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / FULL-WIDTH BANNER ── */}
      <section
        id="contacto"
        className="relative py-28 overflow-hidden"
        style={{ background: "#382D23" }}
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1696551116918-398a1dbfac02?w=1800&h=700&fit=crop&auto=format"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <SectionLabel>Contáctenos</SectionLabel>
          <SectionTitle light>Su Estadía Perfecta Comienza Aquí</SectionTitle>
          <GoldDivider />
          <p className="text-[#F5F0E8]/65 mb-12 leading-relaxed">
            Estamos listos para recibirle y hacer de su visita a Petén una experiencia inolvidable.
            Contáctenos para reservaciones y consultas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <MapPin size={20} className="text-[#527B8C]" />,
                label: "Ubicación",
                value: "San Diego, La Libertad\nPetén, Guatemala",
                link: "https://maps.app.goo.gl/9noW3LU2yt3jEkqRA",
              },
              {
                icon: <Phone size={20} className="text-[#527B8C]" />,
                label: "Teléfono",
                value: "+502 3225-5844",
              },
              {
                icon: <Mail size={20} className="text-[#527B8C]" />,
                label: "Correo",
                value: "reservas@brisasdellago.gt",
              },
            ].map((item) => {
              const inner = (
                <>
                  {item.icon}
                  <p className="text-[#CDA249] text-xs tracking-[0.25em] uppercase">{item.label}</p>
                  <p className="text-[#F5F0E8]/80 text-sm text-center whitespace-pre-line leading-relaxed">
                    {item.value}
                  </p>
                </>
              );
              return item.link ? (
                <a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-6 border border-[#CDA249]/15 rounded-sm transition-all duration-300 hover:border-[#CDA249]/50 hover:bg-white/5 cursor-pointer"
                  style={{ background: "rgba(245,240,232,0.04)" }}
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-3 p-6 border border-[#CDA249]/15 rounded-sm"
                  style={{ background: "rgba(245,240,232,0.04)" }}
                >
                  {inner}
                </div>
              );
            })}
          </div>

          <button
            className="px-10 py-4 text-[#382D23] font-semibold tracking-[0.2em] uppercase text-sm transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #e8c97a 0%, #CDA249 55%, #a87d30 100%)",
              borderRadius: "2px",
            }}
          >
            Solicitar Reservación
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#2a2018" }} className="py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <ImageWithFallback
              src={hotelLogo}
              alt="Brisas del Lago — Hotel y Restaurante"
              className="h-12 w-auto object-contain opacity-85"
            />
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-[#527B8C] hover:text-[#CDA249] transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="text-[#527B8C] hover:text-[#CDA249] transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>

          <p className="text-[#F5F0E8]/25 text-xs text-center md:text-right">
            © {new Date().getFullYear()} Brisas del Lago. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
