import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/20250910_2242_image (1)_1760024166015.png";

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full transform translate-x-32 -translate-y-16 opacity-60"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-40"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-blue to-cyan-500 rounded-full"></div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Opportunity<br />
              <span className="text-gray-800">Unlimited</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Use nation entinimalare palcaobe; tuch echou stropps incloty motuh prossort alidr seertions to sdetralia #S227515.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8"
                data-testid="button-hero-primary"
              >
                Queiir teilbone
              </Button>
              <button 
                className="text-gray-700 font-medium hover:text-gray-900 transition-colors flex items-center justify-center sm:justify-start gap-2"
                data-testid="button-hero-secondary"
              >
                1AUS redursal
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-teal-200 to-blue-300 rounded-full opacity-60 z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-orange-200 to-red-300 rounded-full opacity-50 z-0"></div>
            
            <div className="relative z-10">
              <img 
                src={heroImage}
                alt="Professional businesswoman"
                className="w-full h-auto rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
