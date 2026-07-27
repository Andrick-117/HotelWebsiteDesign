import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { GoldDivider, SectionLabel, SectionTitle, goldGradient } from "@/app/components/shared";

export default function ContactoPage() {
  return (
    <div className="bg-[#382D23] min-h-screen" style={{ fontFamily: "'Raleway', sans-serif" }}>
      {/* Page hero */}
      <div className="relative h-52 md:h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1696551116918-398a1dbfac02?w=1600&h=500&fit=crop&auto=format"
          alt="Vista del lago de Petén desde Brisas del Lago"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#382D23]/65 via-[#382D23]/35 to-[#382D23]/85" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#CDA249] text-xs tracking-[0.4em] uppercase mb-2">Estamos para Servirle</p>
          <h1
            className="text-3xl md:text-5xl text-[#F5F0E8] font-normal"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contacto
          </h1>
        </div>
      </div>

      <div className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Intro */}
          <div className="text-center mb-12">
            <SectionLabel light>Contáctenos</SectionLabel>
            <SectionTitle light>Su Estadía Perfecta Comienza Aquí</SectionTitle>
            <GoldDivider />
            <p className="text-[#F5F0E8]/60 max-w-xl mx-auto leading-relaxed text-sm md:text-base">
              Estamos listos para recibirle y hacer de su visita a Petén una experiencia inolvidable.
              Contáctenos para reservaciones y consultas.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {/* Ubicación — clickable */}
            <a
              href="https://maps.app.goo.gl/9noW3LU2yt3jEkqRA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-5 p-7 border border-[#CDA249]/15 rounded-sm transition-all duration-300 hover:border-[#CDA249]/50 hover:bg-white/5 group"
              style={{ background: "rgba(245,240,232,0.04)" }}
            >
              <div className="mt-0.5">
                <MapPin size={24} className="text-[#527B8C] group-hover:text-[#CDA249] transition-colors" />
              </div>
              <div>
                <p className="text-[#CDA249] text-xs tracking-[0.25em] uppercase mb-1">Ubicación</p>
                <p className="text-[#F5F0E8]/80 text-sm leading-relaxed">
                  San Diego, La Libertad<br />Petén, Guatemala
                </p>
                <p className="text-[#527B8C] text-xs mt-2 group-hover:text-[#CDA249] transition-colors">
                  Ver en Google Maps →
                </p>
              </div>
            </a>

            {/* Teléfono */}
            <div
              className="flex items-start gap-5 p-7 border border-[#CDA249]/15 rounded-sm"
              style={{ background: "rgba(245,240,232,0.04)" }}
            >
              <div className="mt-0.5">
                <Phone size={24} className="text-[#527B8C]" />
              </div>
              <div>
                <p className="text-[#CDA249] text-xs tracking-[0.25em] uppercase mb-1">Teléfono</p>
                <p className="text-[#F5F0E8]/80 text-sm">+502 3225-5844</p>
                <p className="text-[#F5F0E8]/40 text-xs mt-2">Llamadas y WhatsApp</p>
              </div>
            </div>

            {/* Correo */}
            <div
              className="flex items-start gap-5 p-7 border border-[#CDA249]/15 rounded-sm"
              style={{ background: "rgba(245,240,232,0.04)" }}
            >
              <div className="mt-0.5">
                <Mail size={24} className="text-[#527B8C]" />
              </div>
              <div>
                <p className="text-[#CDA249] text-xs tracking-[0.25em] uppercase mb-1">Correo Electrónico</p>
                <p className="text-[#F5F0E8]/80 text-sm">reservas@brisasdellago.gt</p>
                <p className="text-[#F5F0E8]/40 text-xs mt-2">Respuesta en menos de 24 horas</p>
              </div>
            </div>

            {/* Horarios */}
            <div
              className="flex items-start gap-5 p-7 border border-[#CDA249]/15 rounded-sm"
              style={{ background: "rgba(245,240,232,0.04)" }}
            >
              <div className="mt-0.5">
                <Clock size={24} className="text-[#527B8C]" />
              </div>
              <div>
                <p className="text-[#CDA249] text-xs tracking-[0.25em] uppercase mb-1">Atención al Cliente</p>
                <p className="text-[#F5F0E8]/80 text-sm">Lunes – Domingo</p>
                <p className="text-[#F5F0E8]/50 text-xs mt-1">7:00 AM – 10:00 PM</p>
                <p className="text-[#F5F0E8]/50 text-xs">Recepción 24 horas</p>
              </div>
            </div>
          </div>

          {/* Reservation form card */}
          <div
            className="border border-[#CDA249]/15 rounded-sm p-8 md:p-12"
            style={{ background: "rgba(245,240,232,0.04)" }}
          >
            <div className="text-center mb-8">
              <p className="text-[#CDA249] text-xs tracking-[0.35em] uppercase mb-2">Reservaciones</p>
              <h3
                className="text-[#F5F0E8] text-2xl font-normal"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Solicite su Estadía
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              {[
                { label: "Nombre completo", placeholder: "Ej. Juan García" },
                { label: "Teléfono de contacto", placeholder: "+502 0000-0000" },
                { label: "Correo electrónico", placeholder: "correo@ejemplo.com" },
                { label: "Número de huéspedes", placeholder: "Ej. 2 adultos, 1 niño" },
              ].map((field) => (
                <div key={field.label} className="flex flex-col gap-1.5">
                  <label className="text-[#F5F0E8]/60 text-xs tracking-wide uppercase">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className="bg-transparent border border-[#CDA249]/20 rounded-sm px-4 py-3 text-[#F5F0E8] text-sm placeholder:text-[#F5F0E8]/25 focus:outline-none focus:border-[#CDA249]/60 transition-colors"
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[#F5F0E8]/60 text-xs tracking-wide uppercase">Fecha de llegada</label>
                <input
                  type="date"
                  className="bg-transparent border border-[#CDA249]/20 rounded-sm px-4 py-3 text-[#F5F0E8] text-sm focus:outline-none focus:border-[#CDA249]/60 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#F5F0E8]/60 text-xs tracking-wide uppercase">Fecha de salida</label>
                <input
                  type="date"
                  className="bg-transparent border border-[#CDA249]/20 rounded-sm px-4 py-3 text-[#F5F0E8] text-sm focus:outline-none focus:border-[#CDA249]/60 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mb-8">
              <label className="text-[#F5F0E8]/60 text-xs tracking-wide uppercase">
                Mensaje o solicitud especial
              </label>
              <textarea
                rows={4}
                placeholder="Cuéntenos sobre sus preferencias o requerimientos especiales..."
                className="bg-transparent border border-[#CDA249]/20 rounded-sm px-4 py-3 text-[#F5F0E8] text-sm placeholder:text-[#F5F0E8]/25 focus:outline-none focus:border-[#CDA249]/60 transition-colors resize-none"
              />
            </div>

            <div className="text-center">
              <button
                className="px-12 py-4 text-[#382D23] font-semibold tracking-[0.2em] uppercase text-sm transition-all duration-300 hover:opacity-90 hover:scale-105 rounded-sm"
                style={{ background: goldGradient }}
              >
                Enviar Solicitud
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
