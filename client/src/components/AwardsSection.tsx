import { useState, useEffect, useRef } from "react";
import { ChevronUp, ChevronDown, Trophy, Award, Star } from "lucide-react";

const awards = [
  {
    id: 1,
    title: "Founder's Club",
    highlight: "1st Qualification",
    date: "October 2024",
    organization: "Globe Life Inc.",
    description: "Reconocimiento por mantener más de $13,500 en ventas durante 4 meses consecutivos",
    image: "/premios/placa1.png", // Placa de madera "Founder's Club" de Globe Life
    category: "Liderazgo"
  },
  {
    id: 2,
    title: "Pinnacle Award",
    highlight: "Silver Status",
    date: "March 2025",
    organization: "American Income Life",
    description: "Distinción por alcanzar el estatus de plata en el Pinnacle de reclutamiento",
    image: "/premios/cerfi1.png", // Placa "Silver Status Pinnacle"
    category: "Excelencia"
  },
  {
    id: 3,
    title: "Top Supervising Agent",
    highlight: "Top 10",
    date: "2023 Recognition",
    organization: "Carta Business Group",
    description: "Reconocimiento por estar entre los 10 mejores supervisores del año 2023",
    image: "/premios/placa2.png", // Icono estilizado (trofeo con estrella o gráfico ascendente)
    category: "Supervisión"
  }
];

// Debug: Log de las rutas de imágenes
console.log('Rutas de imágenes de premios:', awards.map(award => award.image));
console.log('Premio Top Supervising Agent:', awards.find(award => award.title === 'Top Supervising Agent'));

export default function AwardsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Efecto de aparición al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Cargar imágenes solo cuando la sección es visible
            setLoadedImages(new Set([currentIndex]));
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [currentIndex]);

  // Función para mover el carrusel vertical
  const moveCarousel = (direction: 'up' | 'down' | number) => {
    if (typeof direction === 'number') {
      setCurrentIndex(direction);
      // Cargar imagen del nuevo índice
      setLoadedImages(prev => new Set([...prev, direction]));
    } else {
      setCurrentIndex(prev => {
        const newIndex = direction === 'down' 
          ? (prev === awards.length - 1 ? 0 : prev + 1)
          : (prev === 0 ? awards.length - 1 : prev - 1);
        
        // Cargar imagen del nuevo índice
        setLoadedImages(prevLoaded => new Set([...prevLoaded, newIndex]));
        return newIndex;
      });
    }
  };

  // Auto-play del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % awards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #102C3A 0%, #26358C 25%, #222222 75%, #1a1a1a 100%)'
      }}
    >
      {/* Efectos de fondo - Partículas y brillos */}
      <div className="absolute inset-0">
        {/* Brillos flotantes sutiles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-coral/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-coral/25 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Formas onduladas sutiles */}
        <div 
          className="absolute top-0 left-0 w-full h-32 opacity-10"
          style={{
            background: 'radial-gradient(ellipse at center, #FF6F61 0%, transparent 70%)',
            transform: 'translateY(-50%)'
          }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-full h-32 opacity-10"
          style={{
            background: 'radial-gradient(ellipse at center, #60A5FA 0%, transparent 70%)',
            transform: 'translateY(50%)'
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Encabezado */}
        <div className={`text-center mb-8 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
            El Éxito que Te{" "}
            <span className="text-coral">Inspira</span>:{" "}
            Reconocimientos de Maddy
          </h2>
          
          {/* Línea acento coral */}
          <div className="flex justify-center mb-4">
            <div className="h-1 w-20 bg-coral rounded-full shadow-lg"></div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed italic"
             style={{ fontFamily: 'Poppins, sans-serif' }}>
            Cada logro cuenta una historia de esfuerzo, fe y propósito.
          </p>
        </div>

        {/* Carrusel Vertical de Premios */}
        <div className="relative mb-8 h-[500px] flex items-center justify-center">
          {/* Contenedor del carrusel vertical */}
          <div 
            ref={carouselRef}
            className="flex flex-col transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateY(-${currentIndex * 100}%)` }}
          >
            {awards.map((award, index) => (
              <div key={award.id} className="h-full flex-shrink-0 flex items-center justify-center py-4">
                <div className="max-w-sm mx-auto">
                  {/* Card Premium con animación de entrada */}
                  <div className={`group relative bg-white rounded-2xl p-6 shadow-2xl hover:shadow-[0_25px_50px_rgba(255,111,97,0.2)] transition-all duration-700 hover:-translate-y-2 hover:scale-105 ${
                    index === currentIndex 
                      ? 'animate-slideInFromTop' 
                      : index < currentIndex 
                        ? 'animate-slideOutToBottom' 
                        : 'animate-slideOutToTop'
                  }`}>
                    
                    {/* Efecto de halo coral al hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-coral/0 via-coral/5 to-coral/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Imagen del premio */}
                    <div className="flex justify-center mb-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-coral/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                        <div className="relative w-72 h-72 bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 overflow-hidden border-2 border-coral/20">
                          {/* Placeholder mientras carga */}
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse flex items-center justify-center">
                            <div className="w-16 h-16 bg-coral/20 rounded-full flex items-center justify-center">
                              <Trophy className="w-8 h-8 text-coral/60" />
                            </div>
                          </div>
                          
                          {/* Imagen optimizada para PNG */}
                          {loadedImages.has(index) && (
                            <img 
                              src={award.image} 
                              alt={award.title}
                              loading="lazy"
                              decoding="async"
                              fetchPriority="low"
                              className="w-full h-full object-contain object-center transition-opacity duration-500"
                              style={{ 
                                maxWidth: '100%', 
                                maxHeight: '100%',
                                display: 'block',
                                opacity: 0,
                                willChange: 'opacity'
                              }}
                            onLoad={(e) => {
                              console.log('✅ Imagen cargada exitosamente:', award.image, 'para premio:', award.title);
                              const target = e.target as HTMLImageElement;
                              target.style.opacity = '1';
                              // Ocultar placeholder
                              const placeholder = target.previousElementSibling as HTMLElement;
                              if (placeholder) {
                                placeholder.style.display = 'none';
                              }
                            }}
                            onError={(e) => {
                              console.error('❌ Error cargando imagen:', award.image, 'para premio:', award.title);
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-coral to-coral/80 rounded-2xl flex items-center justify-center"><svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg></div>';
                              }
                            }}
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Contenido del premio */}
                    <div className="text-center relative z-10">
                      {/* Dato destacado en coral */}
                      <div className="text-xl font-bold text-coral mb-2" 
                           style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {award.highlight}
                      </div>
                      
                      {/* Título del premio */}
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 group-hover:text-coral transition-colors duration-300"
                          style={{ fontFamily: 'Playfair Display, serif' }}>
                        {award.title}
                      </h3>
                      
                      {/* Fecha */}
                      <p className="text-gray-500 text-xs mb-2 font-medium"
                         style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {award.date}
                      </p>
                      
                      {/* Organización */}
                      <p className="text-gray-600 text-xs mb-2 font-medium"
                         style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {award.organization}
                      </p>
                      
                      {/* Descripción */}
                      <p className="text-gray-600 text-xs leading-relaxed"
                         style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {award.description}
                      </p>
                    </div>

                    {/* Líneas decorativas curvas */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-coral/30 rounded-tl-lg"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-coral/30 rounded-br-lg"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botones de navegación a los laterales */}
          <button
            onClick={() => moveCarousel('up')}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-cyan-blue/80 hover:bg-cyan-blue text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Premio anterior"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => moveCarousel('down')}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-cyan-blue/80 hover:bg-cyan-blue text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Siguiente premio"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>

        {/* Indicadores de página */}
        <div className="flex justify-center gap-3 mb-8">
          {awards.map((_, index) => (
            <button
              key={index}
              onClick={() => moveCarousel(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-coral scale-125' 
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
              aria-label={`Ir al premio ${index + 1}`}
            />
          ))}
        </div>

        {/* Frase de cierre */}
        <div className="text-center relative">
          {/* Fondo más claro para el cierre */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl"></div>
          
          <div className={`relative z-10 p-4 transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="inline-flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 text-coral" />
              <div className="h-px w-12 bg-coral/50"></div>
              <Star className="w-5 h-5 text-coral" />
            </div>
            
            <p className="text-lg md:text-xl text-gray-200 font-light max-w-4xl mx-auto leading-relaxed italic"
               style={{ fontFamily: 'Poppins, sans-serif' }}>
              "Estos logros son el fruto de la constancia y la pasión por crecer, mientras inspiro a otros a descubrir su propio camino hacia el éxito."
            </p>
            
            <div className="mt-4 text-coral font-semibold"
                 style={{ fontFamily: 'Playfair Display, serif' }}>
              — Maddy Peñuela
            </div>
          </div>
        </div>
      </div>

      {/* Estilos adicionales para animaciones verticales invertidas */}
      <style jsx>{`
        @keyframes slideInFromTop {
          0% { 
            transform: translateY(-100px) scale(0.8);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) scale(1.05);
            opacity: 0.8;
          }
          100% { 
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes slideOutToTop {
          0% { 
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% { 
            transform: translateY(-100px) scale(0.8);
            opacity: 0;
          }
        }
        
        @keyframes slideOutToBottom {
          0% { 
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% { 
            transform: translateY(100px) scale(0.8);
            opacity: 0;
          }
        }
        
        @keyframes lightSweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-slideInFromTop {
          animation: slideInFromTop 0.8s ease-out forwards;
        }
        
        .animate-slideOutToTop {
          animation: slideOutToTop 0.6s ease-in forwards;
        }
        
        .animate-slideOutToBottom {
          animation: slideOutToBottom 0.6s ease-in forwards;
        }
        
        .light-sweep {
          animation: lightSweep 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
