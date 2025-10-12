import { useState, useEffect } from "react";
import { Play, Instagram, Facebook, Linkedin, User, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carolina M.",
    role: "Mentora",
    quote: "Antes me sentía estancada, sin propósito y trabajando en algo que no me llenaba. Hoy, gracias a esta oportunidad y al increíble equipo que me rodea, he encontrado libertad financiera, un propósito claro y la capacidad de ayudar a otros a transformar sus vidas también.",
    shortQuote: "Antes me sentía estancada. Hoy tengo libertad y propósito gracias al equipo.",
    initials: "CM",
    image: "/images/maddy-1.jpg", // Usar imagen placeholder por ahora
    audioUrl: "/audio/carolina-testimonio.mp3", // Agregar audio cuando esté disponible
    socials: {
      instagram: "https://instagram.com/carolinam",
      facebook: "https://facebook.com/carolinam",
    }
  },
  {
    name: "José R.",
    role: "Supervisor",
    quote: "Trabajaba largas horas sin ver resultados justos ni tener tiempo para mi familia. Desde que me uní, no solo he encontrado estabilidad económica e ingresos justos, sino también un ambiente donde puedo crecer profesionalmente mientras mantengo el balance que siempre busqué.",
    shortQuote: "Encontré estabilidad, ingresos justos y un ambiente donde crecer.",
    initials: "JR",
    image: "/images/maddy-2.jpg",
    audioUrl: "/audio/jose-testimonio.mp3",
    socials: {
      instagram: "https://instagram.com/joser",
      linkedin: "https://linkedin.com/in/joser",
    }
  },
  {
    name: "M.P.",
    role: "Community Leader",
    quote: "Durante años trabajé sin rumbo, saltando de empleo en empleo sin sentir que realmente estaba construyendo algo. Esta oportunidad cambió completamente mi vida. Ahora vivo de lo que amo, lidero una comunidad increíble y cada día me levanto con emoción por lo que hago.",
    shortQuote: "Pasé de trabajar sin rumbo a vivir de lo que amo. Esta oportunidad cambió mi vida.",
    initials: "MP",
    image: "/images/logo-maddy.png",
    audioUrl: "/audio/mp-testimonio.mp3",
    socials: {
      instagram: "https://instagram.com/mp",
      facebook: "https://facebook.com/mp",
      linkedin: "https://linkedin.com/in/mp",
    }
  },
];

interface TestimonialsCardsSectionProps {
  onCTAClick: () => void;
}

const TestimonialCard = ({ testimonial, index, isCenter = false }: { testimonial: typeof testimonials[0], index: number, isCenter?: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showBio, setShowBio] = useState(false);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
    // Aquí se implementaría la lógica para reproducir el audio
    // Por ahora solo cambia el estado del botón
  };
  
  return (
    <div 
      className={`rounded-[18px] transition-all duration-500 overflow-hidden group ${
        isCenter 
          ? 'shadow-[0_12px_40px_rgba(242,141,119,0.45)]' 
          : 'shadow-[0_4px_14px_rgba(16,44,58,0.10)] hover:shadow-[0_6px_18px_rgba(16,44,58,0.15)]'
      }`}
      style={{ 
        animationDelay: `${index * 150}ms`,
      }}
      data-testid={`testimonial-card-${index}`}
    >
      <div className="grid grid-cols-[40%_60%] gap-0 h-[110px] sm:h-[130px] md:h-[155px] lg:h-[185px] bg-[#FF8C7A]">
        {/* Columna 1 (IZQUIERDA 40%) - Imagen con overlay */}
        <div className="relative h-full overflow-hidden">
          {/* Imagen de fondo que cubre TODO */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${testimonial.image}')` }}
          />
          
          {/* Overlay: Desde ABAJO-DERECHA hacia ARRIBA-IZQUIERDA (diagonal -30 grados) - Extendido 5% más */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(-30deg, #FF8C7A 0%, rgba(255,140,122,0.95) 25%, rgba(255,140,122,0.75) 40%, transparent 60%)'
            }}
          />
          
          {/* Contenido sobre el overlay - MÁS ARRIBA */}
          <div className="relative h-full flex flex-col justify-end pb-1 sm:pb-1.5 md:pb-2 px-2 sm:px-2.5 md:px-3 text-white z-10 w-full">
            {/* Nombre - alineado a la derecha */}
            <div className="text-right mb-0.5">
              <h3 className="text-[7px] sm:text-[8px] md:text-[10px] lg:text-[11px] font-bold text-white drop-shadow-lg">
                {testimonial.name}
              </h3>
            </div>

            {/* Divisor/línea blanca entre nombre y cargo */}
            <div className="flex justify-end mb-0.5">
              <div className="h-[1px] sm:h-[1.5px] w-5 sm:w-6 md:w-8 bg-white/60 rounded-full"></div>
            </div>

            {/* Cargo - alineado a la derecha */}
            <div className="text-right mb-1 sm:mb-1.5">
              <p className="text-[5px] sm:text-[6px] md:text-[7px] lg:text-[8px] font-medium text-white/95 drop-shadow-md">
                {testimonial.role}
              </p>
            </div>

            {/* Fila con Redes (izquierda) y Botón Bio (derecha) */}
            <div className="flex justify-between items-center w-full gap-1">
              {/* Iconos de redes sociales */}
              <div className="flex gap-0.5">
                {testimonial.socials.facebook && (
                  <a 
                    href={testimonial.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-[#1877F2] rounded-full flex items-center justify-center hover:-translate-y-0.5 transition-all shadow-sm"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 text-white" fill="white" />
                  </a>
                )}
                {testimonial.socials.instagram && (
                  <a 
                    href={testimonial.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-gradient-to-br from-[#FD5949] via-[#D6249F] to-[#285AEB] rounded-full flex items-center justify-center hover:-translate-y-0.5 transition-all shadow-sm"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 text-white" />
                  </a>
                )}
                {testimonial.socials.linkedin && (
                  <a 
                    href={testimonial.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-[#0A66C2] rounded-full flex items-center justify-center hover:-translate-y-0.5 transition-all shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 text-white" fill="white" />
                  </a>
                )}
              </div>

              {/* Botón Biografía */}
              <button
                onClick={() => setShowBio(!showBio)}
                className="bg-white hover:bg-white/90 text-coral px-1.5 sm:px-2 md:px-2.5 py-0.5 rounded-full font-bold text-[5px] sm:text-[6px] md:text-[7px] transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                aria-label="Ver biografía completa"
              >
                Biografía
              </button>
            </div>
          </div>
        </div>

        {/* Columna 2 (DERECHA 60%) - Contenido del testimonio */}
        <div className="relative p-2 sm:p-2.5 md:p-3 flex flex-col justify-between text-white">
          {/* Icono de comillas - Apertura (responsive) */}
          <Quote className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white opacity-50 mb-0.5" />

          {/* Contenido del testimonio (responsive) */}
          <div className="flex-1 flex flex-col justify-center relative z-10">
            <p className="text-white text-[6px] sm:text-[7px] md:text-[9px] lg:text-[10px] font-semibold italic leading-[1.3] tracking-[-0.01em]" style={{ textShadow: '0 1px 4px rgba(16,44,58,0.12)' }}>
              {isExpanded ? testimonial.quote : testimonial.shortQuote}
            </p>
            
            {/* "Leer más" alineado a la derecha */}
            <div className="flex justify-end mt-0.5">
              {!isExpanded && testimonial.quote !== testimonial.shortQuote && (
                <button
                  onClick={() => setIsExpanded(true)}
                  className="text-white font-semibold text-[5px] sm:text-[6px] md:text-[7px] underline decoration-1 underline-offset-2 hover:decoration-[rgba(255,255,255,0.6)] transition-all"
                  aria-label="Leer testimonio completo"
                >
                  Leer más
                </button>
              )}
              
              {isExpanded && (
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-white font-semibold text-[5px] sm:text-[6px] md:text-[7px] underline decoration-1 underline-offset-2 hover:decoration-[rgba(255,255,255,0.6)] transition-all"
                >
                  Leer menos
                </button>
              )}
            </div>
          </div>

          {/* Icono de comillas - Cierre (responsive) */}
          <div className="flex justify-end mb-0.5">
            <Quote className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white opacity-50" />
          </div>

          {/* Leyenda antes del audio */}
          <p className="text-white/70 text-[4.5px] sm:text-[5px] md:text-[6px] lg:text-[6.5px] italic mb-0.5 text-center">
            Escucha el testimonio de {testimonial.name.split(' ')[0]}
          </p>

          {/* Reproductor de Audio (responsive) */}
          <div className="bg-white/10 backdrop-blur-sm rounded-md sm:rounded-lg p-1 sm:p-1.5 border border-white/20 relative z-10">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <button
                onClick={toggleAudio}
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center transition-all ${
                  isPlaying 
                    ? 'bg-white text-coral shadow-sm' 
                    : 'bg-white/20 text-white border border-white hover:bg-white hover:text-coral'
                }`}
              >
                <Play className="w-2 h-2 sm:w-2.5 sm:h-2.5" fill={isPlaying ? 'currentColor' : 'none'} />
              </button>

              <div className="flex-1">
                <div className="flex items-center gap-0.5 sm:gap-1 mb-0.5">
                  <span className="text-[5px] sm:text-[6px] md:text-[7px] font-semibold text-white">🎙️</span>
                  <span className="text-[4px] sm:text-[5px] md:text-[6px] text-white/80">0:00 / 2:15</span>
                </div>
                <div className="h-0.5 sm:h-1 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-white rounded-full transition-all duration-300"
                    style={{ width: isPlaying ? '45%' : '0%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Modal Bio (opcional) */}
      {showBio && (
        <div className="bg-gradient-to-r from-[#FF8C7A]/10 to-transparent p-6 border-t border-[#FF8C7A]/20">
          <h4 className="font-bold text-navy mb-2">Sobre {testimonial.name.split(' ')[0]}</h4>
          <p className="text-gray-600 text-sm">
            {testimonial.role} en Carta Business Group. Historia de transformación inspiradora.
          </p>
        </div>
      )}
    </div>
  );
};

export default function TestimonialsCardsSection({ onCTAClick }: TestimonialsCardsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play del carrusel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Calcular cards visibles (anterior, actual, siguiente)
  const getVisibleCards = () => {
    const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const next = (currentIndex + 1) % testimonials.length;
    return [prev, currentIndex, next];
  };

  const visibleIndexes = getVisibleCards();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-coral rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Historias que inspiran 💫
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conoce a otros que ya están viviendo su transformación
          </p>
        </div>
        
        {/* Carrusel de testimonios */}
        <div className="relative mb-12 my-16">
          {/* Flechas de navegación - Con borde coral y responsive */}
          <button
            onClick={goToPrev}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-coral text-coral hover:text-white p-1.5 sm:p-2 md:p-3 rounded-full border border-coral sm:border-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-coral text-coral hover:text-white p-1.5 sm:p-2 md:p-3 rounded-full border border-coral sm:border-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          {/* Contenedor del carrusel - Responsive */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16">
            {visibleIndexes.map((testimonialIndex, position) => {
              const isCenter = position === 1;
              return (
                <div
                  key={testimonialIndex}
                  className={`transition-all duration-500 ${
                    isCenter
                      ? 'w-full max-w-5xl z-10 opacity-100'
                      : 'w-full max-w-2xl opacity-40 hover:opacity-60'
                  }`}
                  style={{
                    transform: isCenter ? 'scale(1.50) translateY(-8px)' : 'scale(0.87)',
                  }}
                >
                  <TestimonialCard
                    testimonial={testimonials[testimonialIndex]}
                    index={testimonialIndex}
                    isCenter={isCenter}
                  />
                </div>
              );
            })}
          </div>

          {/* Indicadores de puntos (dots) - Con más separación */}
          <div className="flex justify-center gap-2 mt-16">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'bg-coral w-8 h-3'
                    : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <button
            onClick={onCTAClick}
            className="bg-gradient-to-r from-[#FF6F61] to-coral hover:shadow-[0_0_20px_rgba(255,111,97,0.5)] text-white px-10 py-4 rounded-full font-bold text-lg uppercase transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            data-testid="button-testimonials-cta"
          >
            🌟 Quiero ser el próximo testimonio
          </button>
        </div>
      </div>
    </section>
  );
}
