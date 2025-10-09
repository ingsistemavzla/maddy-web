import { Award, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const badges = [
  {
    icon: Award,
    title: "95% Success Rate",
    description: "Job placement success",
  },
  {
    icon: Users,
    title: "10K+ Hired",
    description: "Professionals placed",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {badges.map((badge, index) => (
            <Card 
              key={index}
              className="bg-[#555555] border-2 border-royal-blue p-10 hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`card-badge-${index}`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-royal-blue rounded-xl">
                  <badge.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {badge.title}
                </h3>
                <p className="text-gray-200 text-lg">
                  {badge.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
