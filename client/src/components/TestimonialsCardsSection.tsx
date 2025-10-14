import { useState, useEffect } from "react";
import { Play, Instagram, Facebook, Linkedin, User, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import TestimonialModal from "./TestimonialModal";

const testimonials = [
  {
    name: "Aknerson Hernández",
    role: "SA - Supervisor Agent",
    quote: "Bueno, honestamente quiero agradecerte sinceramente por todo el apoyo, la guía, la confianza que siempre has depositado en mí desde el primer día. Gracias a tu liderazgo, a tu compromiso conmigo. Todo eso siempre ha sido fundamental para mi crecimiento profesional y personal dentro de la compañía. Honestamente gracias por siempre inspirarme, por creer en mí, por empujarme siempre a dar lo mejor de mí mismo. Valoro mucho tu ejemplo, todo lo que he aprendido trabajando de la mano contigo de verdad aprecio mucho y gracias a tu compañía esto ha sido algo increíble gracias.",
    shortQuote: "Gracias por todo el apoyo y la confianza desde el primer día. Tu liderazgo ha sido fundamental para mi crecimiento.",
    initials: "AH",
    image: "/images/Aknerson.jpg",
    audioUrl: "/audio/aknerson-testimonio.ogg",
    socials: {
      instagram: "https://www.instagram.com/penuelamaddy",
      facebook: "https://www.facebook.com/maddy.penuela",
      linkedin: "https://www.linkedin.com",
    }
  },
  {
    name: "Carol Fernández",
    role: "MGA - Master General Agent",
    quote: "Antes me sentía estancada, sin propósito y trabajando en algo que no me llenaba. Hoy, gracias a esta oportunidad y al increíble equipo que me rodea, he encontrado libertad financiera, un propósito claro y la capacidad de ayudar a otros a transformar sus vidas también.",
    shortQuote: "Antes me sentía estancada. Hoy tengo libertad y propósito gracias al equipo.",
    initials: "CF",
    image: "/images/Carol.jpg",
    audioUrl: "/audio/carol-testimonio.mp3",
    socials: {
      instagram: "https://www.instagram.com/penuelamaddy",
      facebook: "https://www.facebook.com/maddy.penuela",
    }
  },
  {
    name: "Carlos Penalver",
    role: "Agente",
    quote: "Durante años trabajé sin rumbo, saltando de empleo en empleo sin sentir que realmente estaba construyendo algo. Esta oportunidad cambió completamente mi vida. Ahora vivo de lo que amo, lidero una comunidad increíble y cada día me levanto con emoción por lo que hago.",
    shortQuote: "Pasé de trabajar sin rumbo a vivir de lo que amo. Esta oportunidad cambió mi vida.",
    initials: "CP",
    image: "/images/Carlos.jpg",
    audioUrl: "/audio/carlos-testimonio.mp3",
    socials: {
      instagram: "https://www.instagram.com/penuelamaddy",
      facebook: "https://www.facebook.com/maddy.penuela",
    }
  },
  {
    name: "Génesis Díaz",
    role: "Agente Especializada",
    quote: "Llegar a Estados Unidos fue como abrir un libro en blanco, lleno de oportunidades. Antes trabajaba en delivery y fábricas, empleos que me enseñaron a luchar pero no a soñar en grande. Con American Income Life, ahora genero en una semana lo que antes ganaba en un mes. Este trabajo me ha transformado, me ha enseñado a confiar en mí misma y a valorar que nuestro crecimiento no se mide solo en ingresos, sino en la capacidad de cambiar nuestra vida y tocar la de los demás.",
    shortQuote: "Ahora genero en una semana lo que antes ganaba en un mes. Este trabajo me transformó completamente.",
    initials: "GD",
    image: "/images/Genesis.jpg",
    audioUrl: "/audio/genesis-testimonio.mp3",
    socials: {
      instagram: "https://www.instagram.com/penuelamaddy",
      facebook: "https://www.facebook.com/maddy.penuela",
      linkedin: "https://www.linkedin.com",
    }
  },
];

interface TestimonialsCardsSectionProps {
  onCTAClick: () => void;
}

const TestimonialCard = ({ 
  testimonial, 
  index, 
  isCenter = false,
  onOpenBio,
  onOpenTestimonio
}: { 
  testimonial: typeof testimonials[0], 
  index: number, 
  isCenter?: boolean,
  onOpenBio: (testimonial: typeof testimonials[0]) => void,
  onOpenTestimonio: (testimonial: typeof testimonials[0]) => void
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useState<HTMLAudioElement | null>(() => {
    if (typeof window !== 'undefined' && testimonial.audioUrl) {
      const audio = new Audio(testimonial.audioUrl);
      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });
      audio.addEventListener('timeupdate', () => {
        setCurrentTime(audio.currentTime);
      });
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setCurrentTime(0);
      });
      audio.addEventListener('error', () => {
        console.error('Error loading audio:', testimonial.audioUrl);
        setAudioError(true);
      });
      return audio;
    }
    return null;
  })[0];

  const toggleAudio = () => {
    if (!audioRef) return;
    
    if (isPlaying) {
      audioRef.pause();
      setIsPlaying(false);
    } else {
      audioRef.play();
      setIsPlaying(true);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  // Limpiar audio al desmontar
  useEffect(() => {
    return () => {
      if (audioRef) {
        audioRef.pause();
        audioRef.src = '';
      }
    };
  }, [audioRef]);
  
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
      <div className="grid grid-cols-[40%_60%] gap-0 h-[145px] sm:h-[130px] md:h-[155px] lg:h-[185px] bg-[#FF8C7A]">
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
          
          {/* Contenido sobre el overlay - Ajustado para móvil */}
          <div className="relative h-full flex flex-col justify-end pb-2 sm:pb-1.5 md:pb-2 px-3 sm:px-2.5 md:px-3 text-white z-10 w-full">
            {/* Nombre - alineado a la derecha */}
            <div className="text-right mb-1">
              <h3 className="text-[9px] sm:text-[8px] md:text-[10px] lg:text-[11px] font-bold text-white drop-shadow-lg">
                {testimonial.name}
              </h3>
            </div>

            {/* Divisor/línea blanca entre nombre y cargo */}
            <div className="flex justify-end mb-1">
              <div className="h-[1.5px] w-7 sm:w-6 md:w-8 bg-white/60 rounded-full"></div>
            </div>

            {/* Cargo - alineado a la derecha */}
            <div className="text-right mb-2 sm:mb-1.5">
              <p className="text-[7px] sm:text-[6px] md:text-[7px] lg:text-[8px] font-medium text-white/95 drop-shadow-md">
                {testimonial.role}
              </p>
            </div>

            {/* Fila con Redes (izquierda) y Botón Bio (derecha) */}
            <div className="flex justify-between items-center w-full gap-1.5">
              {/* Iconos de redes sociales */}
              <div className="flex gap-1">
                {testimonial.socials.facebook && (
                  <a 
                    href={testimonial.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-4 h-4 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-[#1877F2] rounded-full flex items-center justify-center hover:-translate-y-0.5 transition-all shadow-sm"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-2 h-2 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 text-white" fill="white" />
                  </a>
                )}
                {testimonial.socials.instagram && (
                  <a 
                    href={testimonial.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-4 h-4 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-gradient-to-br from-[#FD5949] via-[#D6249F] to-[#285AEB] rounded-full flex items-center justify-center hover:-translate-y-0.5 transition-all shadow-sm"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-2 h-2 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 text-white" />
                  </a>
                )}
                {testimonial.socials.linkedin && (
                  <a 
                    href={testimonial.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-4 h-4 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 bg-[#0A66C2] rounded-full flex items-center justify-center hover:-translate-y-0.5 transition-all shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-2 h-2 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 text-white" fill="white" />
                  </a>
                )}
              </div>

              {/* Botón Biografía */}
              <button
                onClick={() => onOpenBio(testimonial)}
                className="bg-white hover:bg-white/90 text-coral px-2.5 sm:px-2 md:px-2.5 py-1 sm:py-0.5 rounded-full font-bold text-[7px] sm:text-[6px] md:text-[7px] transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                aria-label="Ver biografía completa"
              >
                Biografía
              </button>
            </div>
          </div>
        </div>

        {/* Columna 2 (DERECHA 60%) - Contenido del testimonio */}
        <div className="relative p-3 sm:p-2.5 md:p-3 flex flex-col justify-between text-white">
          {/* Icono de comillas - Apertura (responsive) */}
          <Quote className="w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white opacity-50 mb-1" />

          {/* Contenido del testimonio (responsive) */}
          <div className="flex-1 flex flex-col justify-center relative z-10">
            <p className="text-white text-[8px] sm:text-[7px] md:text-[9px] lg:text-[10px] font-semibold italic leading-[1.3] tracking-[-0.01em]" style={{ textShadow: '0 1px 4px rgba(16,44,58,0.12)' }}>
              {testimonial.shortQuote}
            </p>
            
            {/* "Leer más" alineado a la derecha */}
            <div className="flex justify-end mt-1">
              <button
                onClick={() => onOpenTestimonio(testimonial)}
                className="text-white font-semibold text-[7px] sm:text-[6px] md:text-[7px] underline decoration-1 underline-offset-2 hover:decoration-[rgba(255,255,255,0.6)] transition-all"
                aria-label="Leer testimonio completo"
              >
                Leer más
              </button>
            </div>
          </div>

          {/* Icono de comillas - Cierre (responsive) */}
          <div className="flex justify-end mb-1">
            <Quote className="w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white opacity-50" />
          </div>

          {/* Leyenda antes del audio */}
          <p className="text-white/70 text-[6px] sm:text-[5px] md:text-[6px] lg:text-[6.5px] italic mb-1 text-center">
            Escucha el testimonio de {testimonial.name.split(' ')[0]}
          </p>

          {/* Reproductor de Audio - Glassmorphism mejorado */}
          <div className="bg-white/35 backdrop-blur-sm rounded-md sm:rounded-lg p-1 sm:p-1.5 border border-white/40 shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] relative z-10">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <button
                onClick={toggleAudio}
                disabled={audioError || !audioRef}
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center transition-all border ${
                  audioError || !audioRef
                    ? 'bg-gray-300 text-gray-500 border-gray-400 cursor-not-allowed'
                    : isPlaying 
                      ? 'bg-white text-coral border-coral shadow-md' 
                      : 'bg-white text-coral border-coral hover:shadow-lg'
                }`}
                title={audioError ? 'Error al cargar el audio' : ''}
              >
                <Play className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-coral" fill={isPlaying ? 'currentColor' : 'none'} />
              </button>

              <div className="flex-1">
                <div className="flex items-center gap-0.5 sm:gap-1 mb-0.5">
                  <span className="text-[5px] sm:text-[6px] md:text-[7px] font-semibold text-white drop-shadow-sm">🎙️</span>
                  <span className="text-[4px] sm:text-[5px] md:text-[6px] text-white/90 drop-shadow-sm">
                    {formatTime(currentTime)} / {formatTime(duration || 0)}
                  </span>
                </div>
                <div className="h-0.5 sm:h-1 bg-white/40 rounded-full overflow-hidden shadow-inner">
                  <div 
                    className="h-full bg-coral rounded-full transition-all duration-300 shadow-sm"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default function TestimonialsCardsSection({ onCTAClick }: TestimonialsCardsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);
  const [modalInitialTab, setModalInitialTab] = useState<'biografia' | 'testimonio'>('biografia');

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

  const openBioModal = (testimonial: typeof testimonials[0]) => {
    setSelectedTestimonial(testimonial);
    setModalInitialTab('biografia');
    setModalOpen(true);
  };

  const openTestimonioModal = (testimonial: typeof testimonials[0]) => {
    setSelectedTestimonial(testimonial);
    setModalInitialTab('testimonio');
    setModalOpen(true);
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
          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 px-12 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16">
            {visibleIndexes.map((testimonialIndex, position) => {
              const isCenter = position === 1;
              // En móvil, solo mostrar la card central
              const isMobileHidden = !isCenter;
              
              return (
                <div
                  key={testimonialIndex}
                  className={`transition-all duration-500 ${
                    isCenter
                      ? 'w-[90.5%] md:w-full max-w-5xl z-10 opacity-100'
                      : 'w-full max-w-2xl opacity-40 hover:opacity-60 hidden md:block'
                  } ${isMobileHidden ? 'hidden md:block' : ''}`}
                  style={{
                    transform: isCenter 
                      ? window.innerWidth < 768 
                        ? 'scale(1.30) translateY(0px)' // Móvil: 30% más grande
                        : 'scale(1.50) translateY(-8px)' // Desktop: 50% más grande
                      : 'scale(0.87)',
                  }}
                >
                  <TestimonialCard
                    testimonial={testimonials[testimonialIndex]}
                    index={testimonialIndex}
                    isCenter={isCenter}
                    onOpenBio={openBioModal}
                    onOpenTestimonio={openTestimonioModal}
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

      {/* Modal de Biografía/Testimonio */}
      {selectedTestimonial && (
        <TestimonialModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          testimonial={selectedTestimonial}
          initialTab={modalInitialTab}
        />
      )}
    </section>
  );
}
