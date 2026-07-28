import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import habitacionVip from "@/imports/habitacionvip.jpg";
import segundoNiv from "@/imports/segundoniv.jpg";
import {
  GoldDivider,
  SectionLabel,
  SectionTitle,
  goldGradient,
} from "@/app/components/shared";

export default function HotelPage() {
  return (
    <div className="bg-[#F5F0E8] min-h-screen" style={{ fontFamily: "'Raleway', sans-serif" }}>
      {/* Page hero usando foto real del segundo nivel */}
      <div className="relative h-52 md:h-72 overflow-hidden">
        <ImageWithFallback
          src={segundoNiv}
          alt="Segundo nivel con vista panorámica al lago de Petén"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#382D23]/60 via-[#382D23]/30 to-[#382D23]/85" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#CDA249] text-xs tracking-[0.4em] uppercase mb-2">Brisas del Lago</p>
          <h1
            className="text-3xl md:text-5xl text-[#F5F0E8] font-normal"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            El Hotel
          </h1>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Intro */}
          <div className="text-center mb-12">
            <SectionLabel>Habitaciones & Suites</SectionLabel>
            <SectionTitle>Confort en el Corazón de Petén</SectionTitle>
            <GoldDivider />
            <p className="text-[#6C5B4E] max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
              Nuestras habitaciones y suites están diseñadas para ofrecerle una experiencia de
              descanso incomparable, con vistas privilegiadas al lago y acabados que conjugan la
              calidez tropical con la elegancia moderna.
            </p>
          </div>

          {/* Galería principal con fotos reales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Habitación VIP — imagen grande izquierda */}
            <div className="relative overflow-hidden group rounded-sm h-[460px]">
              <ImageWithFallback
                src={habitacionVip}
                alt="Habitación VIP con vista al lago y piso de mármol en Brisas del Lago"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#382D23]/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-[#CDA249] text-xs tracking-[0.3em] uppercase mb-1">Suite Principal</p>
                <h3
                  className="text-[#F5F0E8] text-lg font-normal"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Habitación VIP
                </h3>
              </div>
            </div>

            {/* Segundo nivel — imagen derecha */}
            <div className="relative overflow-hidden group rounded-sm h-[460px]">
              <ImageWithFallback
                src={segundoNiv}
                alt="Segundo nivel panorámico con vista de 180° al lago desde Brisas del Lago"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#382D23]/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-[#CDA249] text-xs tracking-[0.3em] uppercase mb-1">Áreas Sociales</p>
                <h3
                  className="text-[#F5F0E8] text-lg font-normal"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Segundo Nivel Panorámico
                </h3>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 border border-[#CDA249]/20 rounded-sm overflow-hidden">
            {[
              { num: "24", unit: "Habitaciones", sub: "de lujo y confort" },
              { num: "5★", unit: "Experiencia", sub: "personalizada" },
              { num: "100%", unit: "Vista al Lago", sub: "desde cada suite" },
            ].map((stat, i) => (
              <div
                key={stat.unit}
                className={`py-8 px-4 text-center ${i < 2 ? "border-r border-[#CDA249]/20" : ""}`}
              >
                <div
                  className="text-3xl font-bold"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    background: goldGradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.num}
                </div>
                <div className="text-[#382D23] font-semibold text-xs tracking-wide mt-1">{stat.unit}</div>
                <div className="text-[#6C5B4E] text-xs mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* Descripción detallada */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>Suite VIP con Vista al Lago</SectionLabel>
              <SectionTitle>Lujo y Comodidad en Cada Detalle</SectionTitle>
              <GoldDivider />
              <p className="text-[#6C5B4E] leading-relaxed text-sm md:text-base mb-5">
                Nuestra habitación VIP cuenta con piso de mármol pulido, iluminación ambiental en el
                cielorraso y una cama de madera fina. Las amplias ventanas ofrecen una vista directa
                e incomparable al lago de Petén.
              </p>
              <p className="text-[#6C5B4E] leading-relaxed text-sm md:text-base">
                El segundo nivel dispone de un área social panorámica rodeada de ventanales con
                vista de 180° al lago, ideal para reuniones, desayunos o simplemente contemplar
                la belleza natural de Petén.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🌅", title: "Vista al Lago", desc: "Directo desde la habitación" },
                { icon: "❄️", title: "Aire Acondicionado", desc: "Clima controlado" },
                { icon: "📶", title: "WiFi Gratuito", desc: "Alta velocidad" },
                { icon: "🍳", title: "Desayuno", desc: "Incluido en la tarifa" },
                { icon: "🏊", title: "Piscina", desc: "Acceso libre todo el día" },
                { icon: "🅿️", title: "Estacionamiento", desc: "Gratuito y seguro" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 border border-[#CDA249]/15 rounded-sm bg-white/40 text-center"
                >
                  <div className="text-2xl mb-1.5">{item.icon}</div>
                  <p className="text-[#382D23] font-semibold text-xs tracking-wide">{item.title}</p>
                  <p className="text-[#6C5B4E] text-xs mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
