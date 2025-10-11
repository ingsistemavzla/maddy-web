const navItems = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Historias', href: '#historias' },
  { name: 'Oportunidad', href: '#oportunidad' },
  { name: 'Formación', href: '#formacion' },
  { name: 'Contacto', href: '#contacto' }
];

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center -my-2">
            <img
              src="/images/logo-maddy.png"
              alt="Carta Business Group Logo"
              className="w-[187px] h-[76px] object-contain -ml-2"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium transition-colors hover:opacity-70"
                style={{ color: '#1a1a2e' }}
                data-testid={`link-nav-${item.name.toLowerCase()}`}
              >
                {item.name}
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
