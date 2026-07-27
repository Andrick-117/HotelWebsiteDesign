import {
  HOTEL_IMAGES,
  GoldDivider,
  SectionLabel,
  SectionTitle,
  ImageCard,
  goldGradient,
} from "@/app/components/shared";

export default function HotelPage() {
  return (
    <div className="bg-[#F5F0E8] min-h-screen" style={{ fontFamily: "'Raleway', sans-serif" }}>
      {/* Page hero */}
      <div className="relative h-52 md:h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1611971263023-105938ce12ed?w=1600&h=500&fit=crop&auto=format"
          alt="Habitaciones del hotel Brisas del Lago"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#382D23]/70 via-[#382D23]/40 to-[#382D23]/80" />
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

          {/* Asymmetric gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <ImageCard {...HOTEL_IMAGES[0]} className="h-[440px]" />
            <div className="flex flex-col gap-4">
              <ImageCard {...HOTEL_IMAGES[1]} className="flex-1 min-h-[136px]" />
              <ImageCard {...HOTEL_IMAGES[2]} className="flex-1 min-h-[136px]" />
            </div>
          </div>
          <ImageCard {...HOTEL_IMAGES[3]} className="h-[260px] w-full" />

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 border border-[#CDA249]/20 rounded-sm overflow-hidden">
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

          {/* Amenities */}
          <div className="mt-14">
            <div className="text-center mb-8">
              <SectionLabel>Servicios Incluidos</SectionLabel>
              <SectionTitle>Todo para su Comodidad</SectionTitle>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "🌅", title: "Vista al Lago", desc: "Desde cada habitación" },
                { icon: "❄️", title: "Aire Acondicionado", desc: "Clima controlado" },
                { icon: "📶", title: "WiFi Gratuito", desc: "Alta velocidad" },
                { icon: "🍳", title: "Desayuno", desc: "Incluido en la tarifa" },
                { icon: "🏊", title: "Acceso a Piscina", desc: "Uso libre todo el día" },
                { icon: "🅿️", title: "Estacionamiento", desc: "Gratuito y seguro" },
                { icon: "🛎️", title: "Servicio 24h", desc: "Recepción siempre activa" },
                { icon: "🌿", title: "Área Natural", desc: "Jardines y senderos" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 border border-[#CDA249]/15 rounded-sm text-center bg-white/40"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-[#382D23] font-semibold text-xs tracking-wide">{item.title}</p>
                  <p className="text-[#6C5B4E] text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
