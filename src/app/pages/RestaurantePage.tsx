import {
  RESTAURANT_IMAGES,
  GoldDivider,
  SectionLabel,
  SectionTitle,
  ImageCard,
} from "@/app/components/shared";

export default function RestaurantePage() {
  return (
    <div className="bg-[#F5F0E8] min-h-screen" style={{ fontFamily: "'Raleway', sans-serif" }}>
      {/* Page hero */}
      <div className="relative h-52 md:h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1779094542793-118e751cedc5?w=1600&h=500&fit=crop&auto=format"
          alt="Restaurante La Mesa del Lago en Brisas del Lago"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#382D23]/65 via-[#382D23]/35 to-[#382D23]/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#CDA249] text-xs tracking-[0.4em] uppercase mb-2">Gastronomía</p>
          <h1
            className="text-3xl md:text-5xl text-[#F5F0E8] font-normal"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Restaurante
          </h1>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Intro two-column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-14">
            <div>
              <SectionLabel>La Mesa del Lago</SectionLabel>
              <SectionTitle>Una Experiencia Gastronómica Única</SectionTitle>
              <GoldDivider />
              <p className="text-[#6C5B4E] leading-relaxed text-sm md:text-base mb-5">
                Nuestro restaurante es una celebración de los sabores de Guatemala y el mundo.
                Ingredientes frescos, técnicas de alta cocina y un ambiente que combina la elegancia
                con la calidez natural de Petén.
              </p>
              <p className="text-[#6C5B4E] leading-relaxed text-sm md:text-base mb-8">
                Disfrute de su cena bajo las estrellas con una vista incomparable al lago,
                acompañado de nuestra carta de vinos cuidadosamente seleccionada.
              </p>

              {/* Horarios */}
              <div>
                <p className="text-[#527B8C] uppercase tracking-[0.3em] text-xs font-semibold mb-4">
                  Horarios de Servicio
                </p>
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

            <ImageCard {...RESTAURANT_IMAGES[0]} className="h-[420px]" />
          </div>

          {/* Gallery */}
          <div className="mb-14">
            <div className="text-center mb-8">
              <SectionLabel>Galería</SectionLabel>
              <SectionTitle>Momentos Inolvidables en la Mesa</SectionTitle>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {RESTAURANT_IMAGES.slice(1).map((img) => (
                <ImageCard key={img.label} {...img} className="h-[260px]" />
              ))}
            </div>
          </div>

          {/* Menu highlights */}
          <div className="bg-[#382D23] rounded-sm p-10">
            <div className="text-center mb-8">
              <SectionLabel light>Nuestra Propuesta</SectionLabel>
              <SectionTitle light>Especialidades de la Casa</SectionTitle>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  categoria: "Entradas",
                  platillos: ["Ceviche de lago fresco", "Sopa de pescado artesanal", "Ensalada tropical"],
                },
                {
                  categoria: "Platos Fuertes",
                  platillos: ["Filete de tilapia al vapor", "Pollo a las hierbas de Petén", "Costillas ahumadas"],
                },
                {
                  categoria: "Postres",
                  platillos: ["Flan de vainilla casero", "Helado de mango tropical", "Pastel de chocolate"],
                },
              ].map((menu) => (
                <div key={menu.categoria} className="border-l-2 border-[#CDA249]/40 pl-5">
                  <p className="text-[#CDA249] text-xs tracking-[0.3em] uppercase mb-3 font-semibold">
                    {menu.categoria}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {menu.platillos.map((p) => (
                      <li key={p} className="text-[#F5F0E8]/70 text-sm flex items-start gap-2">
                        <span className="text-[#CDA249]/50 mt-1">—</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
