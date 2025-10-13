import { X, Instagram, Facebook, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonial: {
    name: string;
    role: string;
    image: string;
    initials: string;
    quote: string;
    biography?: string;
    socials: {
      instagram?: string;
      facebook?: string;
      linkedin?: string;
    };
  };
  initialTab?: 'biografia' | 'testimonio';
}

export default function TestimonialModal({ 
  isOpen, 
  onClose, 
  testimonial,
  initialTab = 'biografia'
}: TestimonialModalProps) {
  const [activeTab, setActiveTab] = useState<'biografia' | 'testimonio'>(initialTab);

  // Actualizar pestaña activa cuando cambia initialTab
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab, isOpen]);

  if (!isOpen) return null;

  // Biografías de cada persona
  const biographies: Record<string, string> = {
    "Carol Fernández": `Soy Carol Fernández, Regional General Agent (RGA) en Carta Business Group – American Income Division.

Venezolana, nacida en Barinas, llegué a Estados Unidos a los 20 años con muchas metas, sueños y el firme deseo de salir adelante.

Antes de pertenecer a Globe Life, trabajé como mesera en varios restaurantes mientras completaba mi Licenciatura en Negocios Internacionales (B.A. in International Business).
Durante ese tiempo aprendí el valor del esfuerzo, la disciplina y la resiliencia.

Hace siete años comencé mi carrera en el mundo de los seguros y desde que llegué a American Income Life, mi vida cambió por completo.
El crecimiento personal, profesional y financiero que he experimentado ha sido extraordinario.
Hoy, gracias a este sistema y al equipo del que formo parte, genero siete cifras al año, ayudando a familias a proteger su patrimonio y a personas que, como yo, buscan una vida extraordinaria.

Creo firmemente que el trabajo duro, la constancia y un buen corazón siempre traen resultados exponenciales.
Cuando te dejas guiar, te enfocas y te apalancas en un sistema que funciona y puede duplicarse, los resultados llegan… y superan todo lo que imaginaste.`,
    
    "Aknerson Hernández": `Supervisor Agent dedicado al crecimiento personal y profesional. Con años de experiencia en el sector, he ayudado a múltiples familias a encontrar la protección y estabilidad que necesitan.

Mi enfoque está en construir relaciones genuinas y ofrecer soluciones reales que marquen la diferencia.`,
    
    "Carlos Penalver": `Agente comprometido con transformar vidas a través de oportunidades reales. Mi misión es ayudar a otros a descubrir su potencial y alcanzar la libertad que merecen.

Cada día trabajo con pasión para construir un futuro mejor para mi familia y las familias que confían en mí.`
  };

  const biography = biographies[testimonial.name] || "Biografía disponible próximamente.";

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Container - 10% más alto */}
      <div 
        className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl shadow-2xl max-w-[90%] sm:max-w-3xl md:max-w-4xl w-full h-[523px] sm:h-[622px] md:h-[480px] overflow-hidden border-2 sm:border-3 md:border-4 border-coral relative animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón Cerrar - Tamaño medio */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 md:top-4 md:right-4 z-30 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-coral hover:bg-coral/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg group"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-0 h-full">
          {/* Columna 1 - Imagen 10% menos alta para balance perfecto */}
          <div className="relative h-[306px] sm:h-[365px] md:h-full overflow-hidden">
            {/* Imagen cover - bg-top en móvil, bg-center en desktop */}
            <div 
              className="absolute inset-0 bg-cover bg-top md:bg-center"
              style={{ backgroundImage: `url('${testimonial.image}')` }}
            />
            
            {/* Overlay BLANCO degradado (invertido) - Alcance reducido 15% */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(-30deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 25%, rgba(255,255,255,0.65) 40%, transparent 55%)'
              }}
            />
            
            {/* Contenido sobre overlay blanco - Tamaños medios */}
            <div className="relative h-full flex flex-col justify-end pb-3 px-4 sm:pb-5 sm:px-5 md:pb-6 md:px-6 z-10 w-full">
              {/* Nombre - Color coral - Tamaño medio */}
              <div className="text-right mb-1.5 sm:mb-2">
                <h2 className="text-base sm:text-xl md:text-2xl font-bold text-coral drop-shadow-md">
                  {testimonial.name}
                </h2>
              </div>

              {/* Divisor coral - Tamaño medio */}
              <div className="flex justify-end mb-1.5 sm:mb-2">
                <div className="h-[2.5px] sm:h-[2.5px] md:h-[3px] w-12 sm:w-14 md:w-16 bg-coral rounded-full"></div>
              </div>

              {/* Cargo - Color coral - Tamaño medio */}
              <div className="text-right mb-2.5 sm:mb-3">
                <p className="text-[11px] sm:text-xs md:text-sm font-semibold text-coral/90">
                  {testimonial.role}
                </p>
              </div>

              {/* Redes sociales - Tamaño medio */}
              <div className="flex justify-end gap-2">
                {testimonial.socials.facebook && (
                  <a 
                    href={testimonial.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 sm:w-7.5 sm:h-7.5 md:w-8 md:h-8 bg-[#1877F2] rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-md"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4 text-white" fill="white" />
                  </a>
                )}
                {testimonial.socials.instagram && (
                  <a 
                    href={testimonial.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 sm:w-7.5 sm:h-7.5 md:w-8 md:h-8 bg-gradient-to-br from-[#FD5949] via-[#D6249F] to-[#285AEB] rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-md"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4 text-white" />
                  </a>
                )}
                {testimonial.socials.linkedin && (
                  <a 
                    href={testimonial.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 sm:w-7.5 sm:h-7.5 md:w-8 md:h-8 bg-[#0A66C2] rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-md"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4 text-white" fill="white" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Columna 2 (DERECHA) - Contenido con pestañas - Tamaños medios */}
          <div className="relative bg-white/80 backdrop-blur-sm p-4 sm:p-5 md:p-6 overflow-y-auto h-full">
            {/* Pestañas tipo archivo - Tamaño medio */}
            <div className="flex gap-2 mb-4 sm:mb-5 md:mb-6 border-b-2 border-gray-200">
              <button
                onClick={() => setActiveTab('biografia')}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 font-bold text-xs sm:text-sm md:text-sm transition-all duration-300 relative ${
                  activeTab === 'biografia'
                    ? 'text-coral border-b-3 md:border-b-4 border-coral -mb-[2px]'
                    : 'text-gray-500 hover:text-coral/70 border-b-3 md:border-b-4 border-transparent'
                }`}
              >
                📄 Biografía
              </button>
              <button
                onClick={() => setActiveTab('testimonio')}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 font-bold text-xs sm:text-sm md:text-sm transition-all duration-300 relative ${
                  activeTab === 'testimonio'
                    ? 'text-coral border-b-3 md:border-b-4 border-coral -mb-[2px]'
                    : 'text-gray-500 hover:text-coral/70 border-b-3 md:border-b-4 border-transparent'
                }`}
              >
                💬 Testimonio
              </button>
            </div>

            {/* Contenido según pestaña activa - Tamaños medios */}
            <div className="prose prose-sm md:prose-base max-w-none">
              {activeTab === 'biografia' && (
                <div className="animate-fadeIn">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-coral mb-3 sm:mb-4 flex items-center gap-2">
                    📖 Biografía
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-3 md:space-y-4">
                    {biography.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-xs sm:text-sm md:text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'testimonio' && (
                <div className="animate-fadeIn">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-coral mb-3 sm:mb-4 flex items-center gap-2">
                    💭 Testimonio Completo
                  </h3>
                  <div className="bg-gradient-to-br from-coral/5 to-coral/10 p-4 sm:p-5 md:p-6 rounded-xl border-l-3 md:border-l-4 border-coral">
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  <div className="mt-4 sm:mt-5 md:mt-6 p-3 sm:p-4 md:p-4 bg-navy/5 rounded-lg border-l-3 md:border-l-4 border-navy">
                    <p className="text-xs sm:text-sm md:text-sm text-gray-600 italic">
                      <strong className="text-navy font-semibold">"{testimonial.name}"</strong> comparte su experiencia real como parte del equipo de Carta Business Group.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Pie del modal - Tamaño medio */}
            <div className="mt-5 sm:mt-6 md:mt-8 pt-4 sm:pt-5 md:pt-6 border-t-2 border-coral/20">
              <p className="text-center text-[10px] sm:text-xs md:text-sm text-gray-500 italic">
                ¿Quieres ser parte de esta historia de éxito? 
                <span className="text-coral font-semibold"> Contáctanos hoy</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

