export default function AuthoritySection() {
  const companies = [
    "Globe Life",
    "Carta Business Group",
    "S&P 500",
    "American Income Life"
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#002C5F] to-[#26358C] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFF3] mb-6 leading-tight">
            No estás solo. Detrás de esta oportunidad hay una compañía sólida.
          </h2>
          
          <p className="text-lg text-[#FFFFF3]/90 max-w-3xl mx-auto leading-relaxed mb-12">
            Carta Business Group está respaldado por American Income Life – Globe Life, 
            una empresa que cotiza en el S&P 500, con más de 70 años construyendo seguridad financiera para miles de familias.
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
                <p className="text-[#FFFFF3] font-bold text-center text-lg">
                  {company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
