import { DollarSign, Laptop, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Salaries",
    description: "Top-tier compensation packages that reward your expertise and dedication with industry-leading pay scales.",
    bgColor: "bg-gray-100",
  },
  {
    icon: Laptop,
    title: "Remote Work Flexibility",
    description: "Work from anywhere with full remote options and flexible schedules that fit your lifestyle.",
    bgColor: "bg-cyan-blue/10",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Unlimited advancement opportunities with comprehensive training programs and clear career pathways.",
    bgColor: "bg-gray-100",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Why Join Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the benefits that set us apart and help you thrive in your career
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className={`${benefit.bgColor} border-0 p-8 hover-elevate active-elevate-2 transition-all duration-300`}
              data-testid={`card-benefit-${index}`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-cyan-blue rounded-xl">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
