import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header({ user, onLogout }) {
  const [open, setOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="h-13 w-full bg-pink-400 text-gray-50 text-xl fixed top-0 left-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/inicio" className="font-bold">⚽Passa Bola</Link>

        {/* Botão menu hambúrguer - padrão: mobile */}
        <button
          className="text-gray-50 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navegação desktop (escondida por padrão, visível só em md+) */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/inicio" className="hover:text-pink-600 hover:border-b-2 hover:border-pink-600">Início</Link>
          <Link to="/noticias" className="hover:text-pink-600 hover:border-b-2 hover:border-pink-600">Notícias</Link>
          <Link to="/copa" className="hover:text-pink-600 hover:border-b-2 hover:border-pink-600">Copa</Link>
          <Link to="/gerenciarTime" className="hover:text-pink-600 hover:border-b-2 hover:border-pink-600">Gerenciar Time</Link>
        </nav>

        {/* Perfil do usuário */}
        <div className="hidden md:flex gap-6 items-center relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 px-3 py-1 rounded-lg transition-colors"
          >
            <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">
              {user.name.charAt(0).toUpperCase()}
            </span>
            <span className="text-sm">{user.name}</span>
          </button>

          {showProfile && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 text-gray-800 text-sm">
              <div className="px-4 py-2 border-b">
                <p className="font-medium">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              <button
                onClick={() => {
                  onLogout();
                  setShowProfile(false);
                }}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
              >
                Sair
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Navegação mobile (visível só quando open=true) */}
      {open && (
        <nav className="flex flex-col gap-4 bg-pink-400 p-4 md:hidden">
          <Link to="/inicio" onClick={() => setOpen(false)} className="hover:text-pink-600">Início</Link>
          <Link to="/noticias" onClick={() => setOpen(false)} className="hover:text-pink-600">Notícias</Link>
          <Link to="/copa" onClick={() => setOpen(false)} className="hover:text-pink-600">Copa</Link>
          <Link to="/gerenciarTime" onClick={() => setOpen(false)} className="hover:text-pink-600">Gerenciar Time</Link>
          
          {/* Perfil mobile */}
          <div className="border-t border-pink-300 pt-4 mt-2">
            <p className="text-sm mb-2">Logado como: <span className="font-semibold">{user.name}</span></p>
            <Link to="/perfil" onClick={() => setOpen(false)} className="block text-sm mb-2 hover:text-pink-600">
              Ver Perfil
            </Link>
            <button
              onClick={() => {
                onLogout();
                setOpen(false);
              }}
              className="text-red-200 hover:text-red-100 text-sm"
            >
              Sair
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}