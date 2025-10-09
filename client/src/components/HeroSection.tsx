import { Button } from "@/components/ui/button";
import heroImage from "@assets/20250910_2242_image (1)_1760024166015.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50"></div>
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-navy rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-blue rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block h-1 w-20 bg-cyan-blue rounded-full mb-4"></div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-navy">Opportunity</span>
            <br />
            <span className="relative inline-block text-cyan-blue">
              Unlimited
              <div className="absolute -inset-1 bg-coral/20 blur-xl -z-10"></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            Apply, Act and Win 🚀
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-xl">
            Join thousands of professionals who have transformed their careers. 
            Experience unlimited growth opportunities with competitive benefits and flexible work arrangements.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg"
              className="bg-coral hover:bg-coral text-coral-foreground px-8 py-6 text-lg font-semibold rounded-lg shadow-lg"
              data-testid="button-get-started"
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-semibold rounded-lg"
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-navy/10 to-cyan-blue/10 rounded-3xl transform rotate-3"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={heroImage}
              alt="Professional with phone"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
