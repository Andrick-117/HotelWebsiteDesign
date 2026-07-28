import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import picina from "@/imports/picina.jpg";
import picina2 from "@/imports/picina2.jpg";
import picinaturi from "@/imports/picinaturi.jpg";
import { GoldDivider, SectionLabel, SectionTitle } from "@/app/components/shared";

export default function PiscinasPage() {
  return (
    <div className="bg-[#382D23] min-h-screen" style={{ fontFamily: "'Raleway', sans-serif" }}>
      {/* Page hero — foto del tobogán y piscina principal */}
      <div className="relative h-52 md:h-72 overflow-hidden">
        <ImageWithFallback
          src={picinaturi}
          alt="Piscina principal con tobogán y palapas en Brisas del Lago"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#382D23]/55 via-[#382D23]/25 to-[#382D23]/85" />
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
            <SectionLabel light>Relajación & Diversión</SectionLabel>
            <SectionTitle light>Paraíso Tropical a su Alcance</SectionTitle>
            <GoldDivider />
            <p className="text-[#F5F0E8]/65 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
              Sumérgete en nuestras piscinas frente al lago. Disfruta del jacuzzi, el tobogán y las
              palapas rodeadas de naturaleza petenera. Un remanso de paz y diversión para toda la familia.
            </p>
          </div>

          {/* Foto principal — piscina con tobogán y palapa */}
          <div className="relative overflow-hidden group rounded-sm mb-4 h-[420px] md:h-[500px]">
            <ImageWithFallback
              src={picinaturi}
              alt="Piscina principal con tobogán, rocas decorativas y palapas frente al lago"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#382D23]/85 via-[#382D23]/10 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="text-[#CDA249] text-xs tracking-[0.35em] uppercase mb-2">Piscina Principal</p>
              <h3
                className="text-[#F5F0E8] text-2xl md:text-3xl font-normal"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Tobogán & Área de Rocas
              </h3>
            </div>
          </div>

          {/* Dos jacuzzis en columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Jacuzzi con vista al lago */}
            <div className="relative overflow-hidden group rounded-sm h-[340px]">
              <ImageWithFallback
                src={picina}
                alt="Jacuzzi con vista al lago y palapa en Brisas del Lago"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#382D23]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-[#CDA249] text-xs tracking-[0.3em] uppercase mb-1">Área de Jacuzzi</p>
                <h3
                  className="text-[#F5F0E8] text-lg font-normal"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Vista al Lago Petén
                </h3>
              </div>
            </div>

            {/* Jacuzzi con waterfall */}
            <div className="relative overflow-hidden group rounded-sm h-[340px]">
              <ImageWithFallback
                src={picina2}
                alt="Jacuzzi con cascada de rocas y tobogán en Brisas del Lago"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#382D23]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-[#CDA249] text-xs tracking-[0.3em] uppercase mb-1">Jacuzzi & Cascada</p>
                <h3
                  className="text-[#F5F0E8] text-lg font-normal"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Relax Natural
                </h3>
              </div>
            </div>
          </div>

          {/* Info cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: "🏊",
                title: "Piscina Principal",
                desc: "Amplia piscina con tobogán, rocas decorativas y cascada artificial. Apta para adultos y niños.",
                hours: "6:00 – 21:00",
              },
              {
                icon: "♨️",
                title: "Jacuzzi",
                desc: "Jacuzzi de hidromasaje con vista panorámica al lago de Petén. Perfecto para relajarse.",
                hours: "7:00 – 20:00",
              },
              {
                icon: "🌴",
                title: "Palapas & Áreas de Descanso",
                desc: "Palapas a orillas del lago con hamacas y camastros. El lugar ideal para disfrutar el atardecer.",
                hours: "Siempre abierto",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-6 border border-[#CDA249]/15 rounded-sm"
                style={{ background: "rgba(245,240,232,0.04)" }}
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h4 className="text-[#CDA249] font-semibold mb-2 text-sm tracking-wide">
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
