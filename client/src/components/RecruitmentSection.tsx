import { Check } from "lucide-react";

interface RecruitmentSectionProps {
  onCTAClick: () => void;
}

export default function RecruitmentSection({ onCTAClick }: RecruitmentSectionProps) {
  const features = [
    { title: "Formación Integral y Gratuita:", description: "Aprende todo lo necesario sin costo." },
    { title: "Acompañamiento Personalizado:", description: "Un mentor te guía en cada paso." },
    { title: "Modelo de Ingresos Comprobado:", description: "Genera ganancias desde el inicio." }
  ];

  return (
    <section id="formacion" className="py-20 bg-white relative overflow-hidden">
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
              Un <span className="relative inline-block px-3 py-1 rounded-md" style={{ backgroundColor: 'rgba(54, 125, 217, 0.25)', color: '#367DD9' }}>sistema</span> <em style={{ color: '#F2887E' }}>claro</em> para <span className="underline decoration-2 decoration-[#2D61A6]" style={{ color: '#2D61A6' }}>avanzar</span> sin <span className="relative inline-block px-2" style={{ backgroundColor: 'rgba(242, 136, 126, 0.3)', color: '#F2887E' }}>miedo</span>
            </h2>

            {/* Descripción */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              No estás solo. Te acompañamos desde tu primera entrevista hasta tus primeros resultados.
Con nuestro método probado, podrás crecer, formarte y alcanzar independencia paso a paso.
            </p>

            {/* Lista con checkmarks */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3" data-testid={`feature-${index}`}>
                  <div className="w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700">
                    <span className="font-bold" style={{ color: '#2D61A6' }}>{feature.title}</span>{' '}
                    {feature.description}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <button
                onClick={onCTAClick}
                className="bg-gradient-to-r from-coral to-cyan-blue text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Estoy listo para empezar
              </button>
            </div>
          </div>
          
          {/* Columna derecha - Imagen */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-50 z-0"></div>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/maddy-2.jpg"
                alt="Maddy Peñuela - Sistema de formación"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
