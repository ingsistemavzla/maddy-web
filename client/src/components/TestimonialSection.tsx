import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-blue/5 to-royal-blue/5"></div>
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-blue/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from professionals who transformed their careers with us
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <Avatar className="w-32 h-32 border-4 border-royal-blue">
                  <AvatarImage src="" alt="Sarah Johnson" />
                  <AvatarFallback className="text-2xl bg-cyan-blue text-white">SJ</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="flex-1 space-y-4">
                <Quote className="w-12 h-12 text-coral opacity-50" />
                <blockquote className="text-xl md:text-2xl text-navy font-medium leading-relaxed">
                  "This opportunity completely changed my life. Within six months, I went from uncertain about my career to 
                  <span className="text-coral font-bold"> leading a successful team</span> and achieving 
                  <span className="text-coral font-bold"> financial freedom</span>. 
                  The support and training were exceptional."
                </blockquote>
                <div className="pt-4">
                  <p className="text-lg font-bold text-navy">Sarah Johnson</p>
                  <p className="text-royal-blue">Senior Team Lead, New York</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
