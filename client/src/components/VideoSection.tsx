import React from "react";

const VideoSection: React.FC = () => {
  return (
    <section
      id="descubre-oportunidad"
      className="py-20 text-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FF6FB1 0%, #FF8960 100%)",
        color: "#fff",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        {/* Etiqueta superior */}
        <p
          className="text-sm font-semibold tracking-widest uppercase mb-2"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          🎬 HISTORIAS QUE INSPIRAN
        </p>

        {/* Título */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4"
          style={{ textShadow: "0px 3px 8px rgba(0,0,0,0.3)" }}
        >
          Descubre la oportunidad que está cambiando vidas
        </h2>

        {/* Subtítulo */}
        <p
          className="text-lg md:text-xl mb-8 max-w-4xl mx-auto"
          style={{ color: "rgba(255,255,255,0.95)" }}
        >
          Mira este video y conoce cómo miles de latinos están transformando su
          realidad con un sistema humano, educativo y sin límites.
        </p>

        {/* Video Embed */}
        <div className="flex justify-center mb-8 animate-scale-up">
          <div className="w-full max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Descubre la Oportunidad"
                className="w-full aspect-video rounded-3xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Frase motivacional */}
        <p
          className="text-xl italic mb-8"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          "Todo gran cambio comienza con una decisión. Esta puede ser la tuya."
        </p>

        {/* Botón CTA */}
        <a
          href="#oportunidad"
          className="inline-block bg-white text-coral px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-coral hover:text-white"
        >
          💫 Quiero saber más
        </a>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes scaleUp {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }

          .animate-fade-in {
            animation: fadeIn 1s ease-in-out;
          }

          .animate-scale-up {
            animation: scaleUp 1s ease-in-out 0.3s both;
          }

          @media (max-width: 640px) {
            .animate-fade-in h2 {
              font-size: 1.8rem !important;
            }
            .animate-fade-in p.text-lg {
              font-size: 1rem !important;
            }
            .animate-scale-up iframe {
              border-radius: 12px !important;
            }
          }
        `
      }} />
    </section>
  );
};

export default VideoSection;
