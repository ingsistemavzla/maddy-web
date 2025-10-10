import { ArrowRight } from "lucide-react";
import heroImage from "@assets/20250910_2242_image (1)_1760024166015.png";

interface HeroSectionProps {
  onCTAClick: () => void;
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full transform translate-x-32 -translate-y-16 opacity-60"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-40"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-blue to-cyan-500 rounded-full"></div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Yo también empecé <span className="text-coral">desde cero</span>
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
                src="/images/maddy-hero.png"
                alt="Professional businesswoman"
                className="w-full max-w-lg mx-auto h-auto transform scale-150 -mr-10 relative z-20"
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
