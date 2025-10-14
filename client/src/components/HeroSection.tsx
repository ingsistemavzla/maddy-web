import { ArrowRight } from "lucide-react";
import heroImage from "@assets/20250910_2242_image (1)_1760024166015.png";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  onCTAClick: () => void;
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  const heroImages = [
    "/images/maddy-hero1.png",
    "/images/maddy-hero2.png",
    "/images/maddy-hero3.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000); // Cambiar cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full transform translate-x-32 -translate-y-16 opacity-60"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-40"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-blue to-cyan-500 rounded-full"></div>
            
            <h1 className="text-[42px] lg:text-[54px] font-bold text-gray-900 leading-tight">
              La <span className="relative inline-block px-3 py-1 rounded-md" style={{ backgroundColor: 'rgba(242, 136, 126, 0.3)', color: '#F2887E' }}>oportunidad</span> de <span style={{ color: '#367DD9' }}>vivir</span> <em style={{ color: '#2D61A6' }}>plenamente</em>, <span className="relative inline-block px-2" style={{ backgroundColor: 'rgba(54, 125, 217, 0.2)', color: '#2A5E8C' }}>hoy</span>.<br />
              <span className="text-3xl lg:text-4xl">Está aquí en <span className="underline decoration-4 decoration-[#F2887E]" style={{ color: '#F2887E' }}>tus manos</span>!</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Llegué a EE.UU. con un sueño. Hoy ayudo a migrantes a encontrar un camino real de crecimiento y libertad financiera. Si yo pude, tú también puedes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="bg-gradient-to-r from-[#FF6A6A] to-[#FF8C7A] hover:from-[#FF6A6A] hover:to-[#FF8C7A] text-white px-8 py-3.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                data-testid="button-hero-primary"
                onClick={onCTAClick}
              >
                Quiero conocer la oportunidad
              </button>
            </div>
          </div>
          
          <div className="relative">
            {/* Decorative background shapes using CSS gradients */}
            <div
              className="absolute inset-0 z-0"
              style={{
                background: `
                  radial-gradient(circle at 80% 20%, hsla(210, 80%, 80%, 0.4), transparent 40%),
                  radial-gradient(circle at 20% 70%, hsla(340, 80%, 85%, 0.3), transparent 40%),
                  radial-gradient(circle at 50% 50%, hsla(220, 10%, 40%, 0.5), transparent 60%),
                  radial-gradient(circle at 90% 80%, hsla(220, 15%, 70%, 0.6), transparent 50%)
                `,
                filter: 'blur(80px)',
                transform: 'rotate(15deg)',
                top: '-20%',
                right: '-20%',
                width: '140%',
                height: '140%'
              }}
            />

            {/* Additional decorative elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full opacity-30 z-0 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-full opacity-40 z-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -left-4 w-20 h-20 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-25 z-0 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="relative z-10 p-0 m-0">
              <img
                src={heroImages[currentImageIndex]}
                alt="Professional businesswoman"
                className={`w-full max-w-lg mx-auto h-auto transform -mr-10 relative z-20 transition-all duration-500 ${
                  currentImageIndex === 2 ? 'scale-125' : 'scale-110'
                }`}
                style={{
                  marginRight: '-10px',
                  borderRadius: '0px',
                  boxShadow: 'none',
                  border: 'none',
                  background: 'transparent'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
