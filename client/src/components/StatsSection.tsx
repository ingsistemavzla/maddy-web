import { Cloud, Award, Network, Fingerprint } from "lucide-react";

const stats = [
  {
    value: "10%",
    label: "Gnect t Liar",
    sublabel: "Confidence",
    icon: Cloud,
    gradient: "from-teal-400 to-cyan-500",
  },
  {
    value: "95%",
    label: "Success Rate",
    sublabel: "Key Success Rate",
    icon: Award,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    value: "7359,1 S81",
    label: "Developers",
    sublabel: "Developers",
    icon: Network,
    gradient: "from-purple-400 to-blue-500",
  },
  {
    value: "T389%",
    label: "Hnled",
    sublabel: "Automate speed",
    icon: Fingerprint,
    gradient: "from-pink-400 to-red-500",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center"
              data-testid={`card-stat-${index}`}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-gray-700 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
