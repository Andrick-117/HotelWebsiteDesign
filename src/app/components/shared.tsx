export const HOTEL_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900&h=600&fit=crop&auto=format",
    alt: "Suite de lujo con vista al lago",
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
    alt: "Habitación con terraza privada",
    label: "Terraza Privada",
  },
];

export const POOL_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1745781145895-fc006ead630c?w=1200&h=800&fit=crop&auto=format",
    alt: "Piscina infinita con reflejo del atardecer",
    label: "Piscina Infinita",
  },
  {
    url: "https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?w=700&h=500&fit=crop&auto=format",
    alt: "Área de piscina tropical con palmeras",
    label: "Jardín Tropical",
  },
  {
    url: "https://images.unsplash.com/photo-1520011791306-1e702037318c?w=700&h=500&fit=crop&auto=format",
    alt: "Piscina exterior rodeada de naturaleza exuberante",
    label: "Piscina Exterior",
  },
  {
    url: "https://images.unsplash.com/photo-1674043549207-abb537456982?w=1200&h=600&fit=crop&auto=format",
    alt: "Piscina al atardecer con colores cálidos del cielo",
    label: "Atardecer en el Lago",
  },
];

export const RESTAURANT_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1779094542793-118e751cedc5?w=1000&h=700&fit=crop&auto=format",
    alt: "Cena elegante al aire libre con mariscos frescos y vino",
    label: "Cena Gourmet",
  },
  {
    url: "https://images.unsplash.com/photo-1771342753098-92aa14aa0619?w=700&h=500&fit=crop&auto=format",
    alt: "Mesa servida con vajilla fina y copas de vino",
    label: "Mesa de Autor",
  },
  {
    url: "https://images.unsplash.com/photo-1781912823378-837f967146c1?w=700&h=500&fit=crop&auto=format",
    alt: "Salón de eventos con decoración elegante",
    label: "Salón Privado",
  },
  {
    url: "https://images.unsplash.com/photo-1779094543676-81b274cf35cc?w=1000&h=600&fit=crop&auto=format",
    alt: "Platillos gourmet con pasta y vino",
    label: "Alta Cocina",
  },
];

export function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-7">
      <div className="h-px w-12 bg-[#CDA249] opacity-60" />
      <div className="w-2 h-2 rotate-45 bg-[#CDA249]" />
      <div className="h-px w-12 bg-[#CDA249] opacity-60" />
    </div>
  );
}

export function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`uppercase tracking-[0.35em] text-xs font-semibold mb-3 ${
        light ? "text-[#CDA249]/70" : "text-[#527B8C]"
      }`}
      style={{ fontFamily: "'Raleway', sans-serif" }}
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-normal leading-tight ${
        light ? "text-[#F5F0E8]" : "text-[#382D23]"
      }`}
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {children}
    </h2>
  );
}

export function ImageCard({
  url,
  alt,
  label,
  className = "",
}: {
  url: string;
  alt: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden group rounded-sm ${className}`}>
      <img
        src={url}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#382D23]/70 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4">
        <span
          className="text-[#CDA249] text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

export const goldGradient =
  "linear-gradient(135deg, #e8c97a 0%, #CDA249 55%, #a87d30 100%)";
