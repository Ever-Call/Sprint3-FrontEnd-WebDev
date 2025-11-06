import { useState } from 'react';
import { Menu, X, Home, ShoppingBag, Newspaper, User, Trophy, ChartNoAxesGantt  } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Início', icon: Home, href: '/inicio' },
    { name: 'Notícias', icon: Newspaper, href: '/noticias' },
    { name: 'Perfil', icon: User, href: '/perfil' },
    { name: 'Copa', icon: Trophy, href: '/copa' },
    { name: 'Gerenciador', icon: ChartNoAxesGantt , href: '/gerenciador' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <a href="#inicio" className="group flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl"><img src="/logo.png" alt="" /></span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Passa a Bola
                </h1>
                <p className="text-xs text-gray-600">Futebol Feminino</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item,i) => {
              const Icon = item.icon;
              return (
                <Link key={i} to={item.href} className='flex px-6 py-2.5 rounded-xl font-semibold text-gray-700 hover:text-pink-600 hover:bg-pink-100 transition-all duration-300 items-center gap-2'>
                  <Icon className="w-4 h-4 " />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Button Store */}
          <div className="hidden lg:block">
            <Link to='/loja' className='bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 flex items-center gap-2'>
              <ShoppingBag className="w-4 h-4" />
              <span>Ver Loja</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-2">
              {navItems.map((item,i) => {
              const Icon = item.icon;
              return (
                <Link key={i+10} to={item.href} className='flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-gray-700 hover:text-pink-600 hover:bg-pink-100 transition-all duration-300'>
                  <Icon className="w-5 h-5 " />
                  <span>{item.name}</span>
                </Link>
              );
              })}
              
              {/* Mobile Loja */}
              <Link to='/loja' className='mt-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-3 rounded-xl font-semibold text-center hover:from-pink-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2'>
                <ShoppingBag className="w-5 h-5" />
                <span>Ver Loja</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}