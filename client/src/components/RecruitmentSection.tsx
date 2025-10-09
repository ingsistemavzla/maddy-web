import { Check } from "lucide-react";

interface RecruitmentSectionProps {
  onCTAClick: () => void;
}

export default function RecruitmentSection({ onCTAClick }: RecruitmentSectionProps) {
  const features = [
    "Advanced recruitment analytics",
    "AI-powered candidate matching",
    "Real-time insights and reporting"
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Círculos decorativos de fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-200 rounded-full opacity-40"></div>
        <div className="absolute bottom-60 right-32 w-48 h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-40"></div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna izquierda - Texto */}
          <div>
            {/* Título */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ruamivite Recruitment<br />
              <span className="text-gray-700">Alnd Insigess</span>
            </h2>
            
            {/* Descripción */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Votiifanted insprooctures oarion ofr revit gendiyed eornesrially for ipestuation for sue lifactor and gucesment
            </p>
            
            {/* Lista con checkmarks */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3" data-testid={`feature-${index}`}>
                  <div className="w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <button
                onClick={onCTAClick}
                className="bg-gradient-to-r from-coral to-cyan-blue text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                🌟 Quiero ser el próximo testimonio
              </button>
            </div>
          </div>
          
          {/* Columna derecha - Imagen */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-50 z-0"></div>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://ext.same-assets.com/2339639548/3160881759.false"
                alt="Professional man"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
