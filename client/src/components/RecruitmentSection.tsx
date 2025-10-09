import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function RecruitmentSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Ruamivite Recruitment<br />
              Alnd Insigess
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              'Chlitanted insproctures cailion ofr revle gendlyed eonesarilly for ipastuation for sue lifactor and gucesment
            </p>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <Avatar className="w-full h-auto rounded-3xl shadow-2xl" style={{ aspectRatio: '1/1' }}>
                <AvatarImage src="" alt="Professional" />
                <AvatarFallback className="text-6xl bg-gradient-to-br from-blue-100 to-purple-100 text-gray-700 rounded-3xl">
                  RP
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
