import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#222222] to-navy py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#FFFFF3]">Opportunity</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering professionals to reach their full potential through unlimited opportunities.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#FFFFF3]">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-cyan-blue transition-colors" data-testid="link-about">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-blue transition-colors" data-testid="link-careers">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-blue transition-colors" data-testid="link-benefits">Benefits</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#FFFFF3]">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-cyan-blue transition-colors" data-testid="link-faq">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-blue transition-colors" data-testid="link-contact">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-blue transition-colors" data-testid="link-privacy">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#FFFFF3]">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-cyan-blue rounded-lg hover-elevate active-elevate-2 transition-all" data-testid="link-facebook">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-cyan-blue rounded-lg hover-elevate active-elevate-2 transition-all" data-testid="link-twitter">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-cyan-blue rounded-lg hover-elevate active-elevate-2 transition-all" data-testid="link-linkedin">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-cyan-blue rounded-lg hover-elevate active-elevate-2 transition-all" data-testid="link-instagram">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Opportunity Unlimited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
