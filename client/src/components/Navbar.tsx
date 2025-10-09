const navItems = ['Simpot', 'Lviens', 'Cnegry', 'Ertefaler', 'Promer ol'];

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm transform rotate-12"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">Opportunity</span>
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
            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-6 py-2 rounded-full font-medium text-base shadow-lg hover:shadow-xl transition-all duration-200"
            data-testid="button-nav-cta"
          >
            Bcd nialid
          </button>
        </div>
      </div>
    </header>
  );
}
