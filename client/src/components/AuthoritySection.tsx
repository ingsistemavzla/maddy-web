export default function AuthoritySection() {
  const companies = [
    { name: "Globe Life", logo: "/images/GLOBE.png" },
    { name: "Carta Business Group", logo: null },
    { name: "S&P 500", logo: null },
    { name: "American Income Life", logo: "/images/AIL.png" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#002C5F] to-[#26358C] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFF3] mb-6 leading-tight">
            <span className="underline decoration-2 decoration-[#FFB6A3]">No</span> <em>estás</em> <span className="underline decoration-2 decoration-[#FF9AA2]">solo</span>.
            <br />
            <span className="text-2xl md:text-3xl block mt-3">
              Detrás de esta <span className="bg-gradient-to-r from-[#40E0D0] to-[#7FDBFF] bg-clip-text text-transparent font-bold">oportunidad</span> hay una <em style={{ color: '#FFB6A3' }}>compañía</em> <span style={{ color: '#FFFFFF', textShadow: '0 0 15px #40E0D0, 0 0 25px #7FDBFF' }}>sólida</span>.
            </span>
          </h2>
          
          <p className="text-lg text-[#FFFFF3]/90 max-w-3xl mx-auto leading-relaxed mb-12">
            Carta Business Group forma parte del ecosistema de American Income Life y Globe Life, empresas reconocidas en el S&P 500 y patrocinadores de los Dallas Cowboys y Los Angeles Lakers.
Juntos, impulsamos el crecimiento y la estabilidad de las familias latinas en EE.UU.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border-2 border-royal-blue rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`company-card-${index}`}
            >
              <div className="flex items-center justify-center h-20">
                {company.logo ? (
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <p className="text-[#FFFFF3] font-bold text-center text-lg">
                    {company.name}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
