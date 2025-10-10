const navItems = ['Inicio', 'Historias', 'Oportunidad', 'Formación', 'Contacto'];

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="/images/logo-maddy.png"
              alt="Carta Business Group Logo"
              className="w-[187px] h-[76px] object-contain mr-[-10px]"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                data-testid={`link-nav-${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
          </nav>
          
          <button 
            className="bg-gradient-to-r from-[#FF6A6A] to-[#FF8C7A] hover:from-[#FF6A6A] hover:to-[#FF8C7A] text-white px-6 py-2 rounded-full font-medium text-base shadow-lg hover:shadow-xl transition-all duration-200"
            data-testid="button-nav-cta"
          >
            Contactame
          </button>
        </div>
      </div>
    </header>
  );
}
