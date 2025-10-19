import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Award, TrendingUp, X } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Outstanding Performance",
    amount: "$6,396",
    description: "en Ventas - American Income Division",
    date: "Semana del 23 de Agosto, 2024",
    image: "/certified/Aug23PP110.pdf",
    imageJpg: "/certified/Aug23PP110_page-0001.jpg",
    bgGradient: "from-blue-50 to-cyan-50",
    fullDescription: "Otorgado por desempeño sobresaliente en ventas y liderazgo profesional dentro de Globe Life American Income Division."
  },
  {
    id: 2,
    title: "Outstanding Performance",
    amount: "$7,145",
    description: "en Ventas - American Income Division",
    date: "Semana del 02 de Agosto, 2024",
    image: "/certified/Aug02PP180.pdf",
    imageJpg: "/certified/Aug02PP180_page-0001.jpg",
    bgGradient: "from-coral-50 to-orange-50",
    fullDescription: "Otorgado por desempeño sobresaliente en ventas y liderazgo profesional dentro de Globe Life American Income Division."
  },
  {
    id: 3,
    title: "Outstanding Performance",
    amount: "$4,730",
    description: "en Ventas - American Income Division",
    date: "Semana del 26 de Julio, 2024",
    image: "/certified/Jul26PP298.pdf",
    imageJpg: "/certified/Jul26PP298_page-0001.jpg",
    bgGradient: "from-purple-50 to-pink-50",
    fullDescription: "Otorgado por desempeño sobresaliente en ventas y liderazgo profesional dentro de Globe Life American Income Division."
  },
  {
    id: 4,
    title: "Outstanding Performance",
    amount: "$6,234",
    description: "en Ventas - American Income Division",
    date: "Semana del 01 de Diciembre, 2023",
    image: "/certified/Dec01SAGA35.pdf",
    imageJpg: "/certified/Dec01SAGA35_page-0001.jpg",
    bgGradient: "from-green-50 to-emerald-50",
    fullDescription: "Otorgado por desempeño sobresaliente en ventas como gerente y liderazgo profesional dentro de Globe Life American Income Division."
  },
  {
    id: 5,
    title: "Outstanding Performance",
    amount: "$5,679",
    description: "en Ventas - American Income Division",
    date: "Semana del 10 de Noviembre, 2023",
    image: "/certified/Nov10SAGA37.pdf",
    imageJpg: "/certified/Nov10SAGA37_page-0001.jpg",
    bgGradient: "from-amber-50 to-yellow-50",
    fullDescription: "Otorgado por desempeño sobresaliente en ventas como gerente y liderazgo profesional dentro de Globe Life American Income Division."
  },
  {
    id: 6,
    title: "Outstanding Performance",
    amount: "$7,499",
    description: "en Ventas - American Income Division",
    date: "Semana del 27 de Octubre, 2023",
    image: "/certified/Oct27SAGA33.pdf",
    imageJpg: "/certified/Oct27SAGA33_page-0001.jpg",
    bgGradient: "from-indigo-50 to-purple-50",
    fullDescription: "Otorgado por desempeño sobresaliente en ventas como gerente y liderazgo profesional dentro de Globe Life American Income Division."
  },
  {
    id: 7,
    title: "Outstanding Performance",
    amount: "$4,540",
    description: "en Ventas - American Income Division",
    date: "Semana del 18 de Agosto, 2023",
    image: "/certified/Aug18PP225.pdf",
    imageJpg: "/certified/Aug18PP225_page-0001.jpg",
    bgGradient: "from-rose-50 to-pink-50",
    fullDescription: "Otorgado por desempeño sobresaliente en ventas y liderazgo profesional dentro de Globe Life American Income Division."
  },
  {
    id: 8,
    title: "Outstanding Performance",
    amount: "$4,474",
    description: "en Ventas - American Income Division",
    date: "Semana del 04 de Agosto, 2023",
    image: "/certified/Aug04PP358.pdf",
    imageJpg: "/certified/Aug04PP358_page-0001.jpg",
    bgGradient: "from-teal-50 to-cyan-50",
    fullDescription: "Otorgado por desempeño sobresaliente en ventas y liderazgo profesional dentro de Globe Life American Income Division."
  },
  {
    id: 9,
    title: "Outstanding Performance",
    amount: "$4,029",
    description: "en Ventas - American Income Division",
    date: "Semana del 28 de Julio, 2023",
    image: "/certified/July28PP436.pdf",
    imageJpg: "/certified/July28PP436_page-0001.jpg",
    bgGradient: "from-orange-50 to-amber-50",
    fullDescription: "Otorgado por desempeño sobresaliente en ventas y liderazgo profesional dentro de Globe Life American Income Division."
  },
  {
    id: 10,
    title: "Outstanding Performance",
    amount: "$4,962",
    description: "en Ventas - American Income Division",
    date: "Semana del 14 de Julio, 2023",
    image: "/certified/July14PP378.pdf",
    imageJpg: "/certified/July14PP378_page-0001.jpg",
    bgGradient: "from-sky-50 to-blue-50",
    fullDescription: "Otorgado por desempeño sobresaliente en ventas y liderazgo profesional dentro de Globe Life American Income Division."
  }
];

export default function AchievementsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState<typeof achievements[0] | null>(null);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  // Auto-play: loop infinito cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // 5 segundos

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const openModal = (achievement: typeof achievements[0]) => {
    setSelectedAchievement(achievement);
    setModalOpen(true);
  };

  // Calcular índices visibles: anterior, actual, siguiente
  const getVisibleIndices = () => {
    const prev = (currentIndex - 1 + achievements.length) % achievements.length;
    const next = (currentIndex + 1) % achievements.length;
    return { prev, current: currentIndex, next };
  };

  const visibleIndices = getVisibleIndices();
  const currentAchievement = achievements[currentIndex];

  // Función para renderizar cada card
  const renderCard = (achievement: typeof achievements[0], isCenter: boolean) => {
    return (
      <div 
        className={`bg-gradient-to-br ${achievement.bgGradient} rounded-2xl shadow-xl p-2 md:p-4 transition-all duration-500 w-full`}
        style={{ minWidth: '480px', minHeight: '220px' }}
      >
        {/* Grid: Imagen (izquierda) + Info (derecha) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-3 items-center">
          {/* Imagen del certificado - Más rectangular (85% de altura, 15% menos) */}
          <div 
            className={`relative group ${isCenter ? 'cursor-pointer' : 'pointer-events-none'}`}
            onClick={() => isCenter && openModal(achievement)}
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 md:border-3 border-white relative" style={{ aspectRatio: '1 / 0.85' }}>
              {/* Visor del certificado JPG */}
              <img
                src={achievement.imageJpg}
                alt={`Certificado ${achievement.title}`}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay en hover (solo en card central) */}
              {isCenter && (
                <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="text-white text-center">
                    <TrendingUp className="w-5 h-5 md:w-8 md:h-8 mx-auto mb-1.5" />
                    <p className="font-semibold" style={{ fontSize: '0.48rem' /* 20% más pequeño */ }}>Ver certificado completo</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Información del logro - Reducido 5% */}
          <div className="text-center md:text-left">
            <div className="inline-block bg-coral/10 text-coral px-1 py-0.5 md:px-2.5 md:py-0.5 rounded-full font-bold mb-1 md:mb-1.5" style={{ fontSize: '0.37rem' /* 30% más pequeño para móvil */ }}>
              <span className="md:hidden">🏆 Reconocimiento Oficial</span>
              <span className="hidden md:inline">🏆 Reconocimiento Oficial</span>
            </div>
            
            <h3 className="font-bold text-navy mb-0.5 md:mb-1" style={{ fontSize: '0.58rem', lineHeight: '0.77rem' /* 30% más pequeño para móvil */ }}>
              <span className="md:hidden">{achievement.title}</span>
              <span className="hidden md:inline" style={{ fontSize: '0.828rem', lineHeight: '1.104rem' }}>{achievement.title}</span>
            </h3>
            
            <div className="mb-2 md:mb-2.5">
              <div className="font-bold bg-gradient-to-r from-coral to-orange-500 bg-clip-text text-transparent mb-0.5" style={{ fontSize: '1.23rem', lineHeight: '1.34rem' /* 30% más pequeño para móvil */ }}>
                <span className="md:hidden">{achievement.amount}</span>
                <span className="hidden md:inline" style={{ fontSize: '1.76rem', lineHeight: '1.92rem' }}>{achievement.amount}</span>
              </div>
              <p className="text-gray-700 font-semibold" style={{ fontSize: '0.48rem' /* 30% más pequeño para móvil */ }}>
                <span className="md:hidden">{achievement.description}</span>
                <span className="hidden md:inline" style={{ fontSize: '0.68rem' }}>{achievement.description}</span>
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-0.5 md:gap-1 text-gray-600 mb-2 md:mb-2.5" style={{ fontSize: '0.42rem' /* 30% más pequeño para móvil */ }}>
              <svg className="w-2 h-2 md:w-3 md:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">
                <span className="md:hidden">{achievement.date}</span>
                <span className="hidden md:inline" style={{ fontSize: '0.6rem' }}>{achievement.date}</span>
              </span>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-md md:rounded-lg p-1.5 md:p-2.5 border-l-4 border-coral">
              <p className="text-gray-700 italic line-clamp-3" style={{ fontSize: '0.43rem' /* 30% más pequeño para móvil */ }}>
                <span className="md:hidden">"{achievement.fullDescription}"</span>
                <span className="hidden md:inline" style={{ fontSize: '0.61rem' }}>"{achievement.fullDescription}"</span>
              </p>
            </div>

            {/* Botón para ver detalle (solo en card central) */}
            {isCenter && (
              <button
                onClick={() => openModal(achievement)}
                className="mt-2 md:mt-3 bg-gradient-to-r from-coral to-orange-500 hover:from-coral hover:to-orange-600 text-white px-3 py-1 md:px-5 md:py-2 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{ fontSize: '0.48rem' /* 30% más pequeño para móvil */ }}
              >
                <span className="md:hidden">Ver Certificado Completo</span>
                <span className="hidden md:inline" style={{ fontSize: '0.68rem' }}>Ver Certificado Completo</span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-coral to-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-blue to-cyan-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Encabezado */}
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 md:w-10 md:h-10 text-coral" />
              <h2 className="text-3xl md:text-5xl font-bold text-navy">
                Resultados Reales, Éxito Comprobado
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              Cada logro representa un paso más hacia un futuro sin límites. <br className="hidden md:block" />
              <span className="text-coral font-semibold italic">El éxito no es suerte, es constancia y propósito.</span>
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-coral to-orange-400 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Carrusel */}
          <div className="relative max-w-5xl mx-auto">
            {/* Controles de navegación - Desktop */}
            <button
              onClick={goToPrev}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 bg-white hover:bg-coral text-coral hover:text-white p-3 rounded-full border-2 border-coral shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Certificado anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 bg-white hover:bg-coral text-coral hover:text-white p-3 rounded-full border-2 border-coral shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Siguiente certificado"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carrusel con 3 cards visibles - Estructura similar a testimonios */}
            <div className="relative min-h-[400px] md:min-h-[450px] flex items-center justify-center px-4 md:px-8">
              {/* Contenedor principal centrado */}
              <div className="relative w-full max-w-5xl mx-auto">
                {/* Grid de 3 columnas para las cards - Centrado */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-center justify-items-center">
                  
                  {/* Card Izquierda (pequeña, atrás) */}
                  <div 
                    className="hidden md:block cursor-pointer transition-all duration-700 hover:scale-105"
                    style={{
                      transform: 'scale(0.7) translateZ(-20px)',
                      opacity: 0.8,
                      zIndex: 2
                    }}
                    onClick={goToPrev}
                  >
                    {renderCard(achievements[visibleIndices.prev], false)}
                  </div>

                  {/* Card Centro (grande, adelante) */}
                  <div 
                    className="transition-all duration-700"
                    style={{
                      transform: 'scale(1) translateZ(0px)',
                      opacity: 1,
                      zIndex: 10
                    }}
                  >
                    {renderCard(achievements[visibleIndices.current], true)}
                  </div>

                  {/* Card Derecha (pequeña, atrás) */}
                  <div 
                    className="hidden md:block cursor-pointer transition-all duration-700 hover:scale-105"
                    style={{
                      transform: 'scale(0.7) translateZ(-20px)',
                      opacity: 0.8,
                      zIndex: 2
                    }}
                    onClick={goToNext}
                  >
                    {renderCard(achievements[visibleIndices.next], false)}
                  </div>
                </div>
              </div>

              {/* Controles móviles - Flechas abajo de la card */}
              <div className="flex md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 justify-center gap-4 mt-6">
                <button
                  onClick={goToPrev}
                  className="bg-white hover:bg-coral text-coral hover:text-white p-3 rounded-full border-2 border-coral shadow-lg transition-all duration-300"
                  aria-label="Certificado anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="bg-white hover:bg-coral text-coral hover:text-white p-3 rounded-full border-2 border-coral shadow-lg transition-all duration-300"
                  aria-label="Siguiente certificado"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Indicadores (dots) */}
            <div className="flex justify-center gap-3 mt-8">
              {achievements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'bg-coral w-10 h-3'
                      : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                  }`}
                  aria-label={`Ir al certificado ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Frase motivacional inferior */}
          <div className="text-center mt-12 md:mt-16">
            <p className="text-xl md:text-2xl text-navy font-semibold max-w-3xl mx-auto">
              💫 Estos logros son el resultado de <span className="text-coral">creer, persistir y no rendirse.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Modal para ver certificado completo */}
      {modalOpen && selectedAchievement && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-coral hover:bg-coral/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="p-6 md:p-10">
              <div className="text-center mb-6">
                <Award className="w-16 h-16 text-coral mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-navy mb-2">
                  {selectedAchievement.title}
                </h3>
                <p className="text-xl text-gray-600">{selectedAchievement.date}</p>
              </div>

              {/* Certificado JPG ampliado */}
              <div className="w-full max-w-3xl mx-auto bg-white rounded-xl mb-6 shadow-lg border-4 border-gray-200 overflow-hidden" style={{ height: '70vh' }}>
                <img
                  src={selectedAchievement.imageJpg}
                  alt={`Certificado ${selectedAchievement.title}`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Detalles */}
              <div className="bg-gradient-to-br from-coral/5 to-orange-50 rounded-xl p-6 border-l-4 border-coral">
                <h4 className="text-xl font-bold text-navy mb-3">Detalles del Reconocimiento</h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Logro:</strong> {selectedAchievement.amount} {selectedAchievement.description}</p>
                  <p><strong>Fecha:</strong> {selectedAchievement.date}</p>
                  <p><strong>Otorgado por:</strong> Globe Life American Income Division</p>
                  <p className="italic mt-4">
                    {selectedAchievement.fullDescription}
                  </p>
                </div>
              </div>

              {/* Botón para ver PDF original */}
              <div className="text-center mt-6">
                <button
                  onClick={() => window.open(selectedAchievement.image, '_blank')}
                  className="bg-gradient-to-r from-coral to-orange-500 hover:from-coral hover:to-orange-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  📄 Ver PDF Original
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

