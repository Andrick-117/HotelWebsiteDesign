import {
  POOL_IMAGES,
  GoldDivider,
  SectionLabel,
  SectionTitle,
  ImageCard,
} from "@/app/components/shared";

export default function PiscinasPage() {
  return (
    <div className="bg-[#382D23] min-h-screen" style={{ fontFamily: "'Raleway', sans-serif" }}>
      {/* Page hero */}
      <div className="relative h-52 md:h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1674043549207-abb537456982?w=1600&h=500&fit=crop&auto=format"
          alt="Piscinas del hotel Brisas del Lago al atardecer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#382D23]/60 via-[#382D23]/30 to-[#382D23]/85" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#CDA249] text-xs tracking-[0.4em] uppercase mb-2">Área Recreativa</p>
          <h1
            className="text-3xl md:text-5xl text-[#F5F0E8] font-normal"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Piscinas
          </h1>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Intro */}
          <div className="text-center mb-12">
            <SectionLabel light>Relajación & Naturaleza</SectionLabel>
            <SectionTitle light>Paraíso Tropical a su Alcance</SectionTitle>
            <GoldDivider />
            <p className="text-[#F5F0E8]/65 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
              Sumérgete en nuestras piscinas rodeadas de exuberante vegetación petenera.
              Un remanso de paz donde el tiempo se detiene y los colores del lago llenan el horizonte.
            </p>
          </div>

          {/* Hero pool image */}
          <div className="relative overflow-hidden group rounded-sm mb-4 h-[400px] md:h-[480px]">
            <img
              src={POOL_IMAGES[0].url}
              alt={POOL_IMAGES[0].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#382D23]/85 via-[#382D23]/10 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-[#CDA249] text-xs tracking-[0.35em] uppercase mb-2">Piscina Principal</p>
              <h3
                className="text-[#F5F0E8] text-2xl md:text-3xl font-normal"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Infinita como el Lago
              </h3>
            </div>
          </div>

          {/* Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <ImageCard {...POOL_IMAGES[1]} className="h-[280px]" />
            <ImageCard {...POOL_IMAGES[2]} className="h-[280px]" />
          </div>

          {/* Wide sunset banner */}
          <div className="relative overflow-hidden group rounded-sm h-[280px]">
            <img
              src={POOL_IMAGES[3].url}
              alt={POOL_IMAGES[3].alt}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#382D23]/75 via-transparent to-[#382D23]/55" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-[#CDA249] text-xs tracking-[0.4em] uppercase mb-2">Al Caer la Tarde</p>
                <h3
                  className="text-[#F5F0E8] text-3xl font-light italic"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {POOL_IMAGES[3].label}
                </h3>
              </div>
            </div>
          </div>

          {/* Info cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: "🏊",
                title: "Piscina Principal",
                desc: "Amplia y profunda, ideal para adultos. Rodeada de camastros y sombrillas para su descanso.",
                hours: "6:00 – 21:00",
              },
              {
                icon: "🌊",
                title: "Piscina Recreativa",
                desc: "Área familiar con zona poco profunda para los más pequeños de la familia.",
                hours: "7:00 – 20:00",
              },
              {
                icon: "🌿",
                title: "Área de Jardines",
                desc: "Senderos naturales entre vegetación tropical, perfectos para relajarse al amanecer.",
                hours: "Siempre abierto",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-6 border border-[#CDA249]/15 rounded-sm"
                style={{ background: "rgba(245,240,232,0.04)" }}
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h4
                  className="text-[#CDA249] font-semibold mb-2 text-sm tracking-wide"
                >
                  {card.title}
                </h4>
                <p className="text-[#F5F0E8]/60 text-xs leading-relaxed mb-3">{card.desc}</p>
                <p className="text-[#527B8C] text-xs tracking-wide">⏰ {card.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
