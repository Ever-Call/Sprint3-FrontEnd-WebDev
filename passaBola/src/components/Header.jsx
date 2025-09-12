import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; //importar svg

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-13 w-full bg-gray-200 text-pink-400 text-xl fixed top-0 left-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link className="font-bold">Passa Bola</Link>

        {/* Botão menu hambúrguer - padrão: mobile */}
        <button
          className="text-pink-500 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navegação desktop (escondida por padrão, visível só em md+) */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-pink-600">Início</Link>
          <Link to="/noticias" className="hover:text-pink-600">Notícias</Link>
          <Link to="/copa" className="hover:text-pink-600">Copa</Link>
          <Link to="/sortearTime" className="hover:text-pink-600">Sortear Time</Link>
        </nav>
        <div className="hidden  md:flex gap-6 items-center">
          <Link to="/entrar" className="hover:text-pink-600">Entrar</Link>
          <Link to="/cadastrar" className="hover:text-pink-600">Cadastrar</Link>
        </div>
      </div>

      {/* Navegação mobile (visível só quando open=true) */}
      {open && (
        <nav className="flex flex-col gap-4 bg-gray-200 p-4 md:hidden">
          <Link to="/" onClick={() => setOpen(false)} className="hover:text-pink-600">Início</Link>
          <Link to="/noticias" onClick={() => setOpen(false)} className="hover:text-pink-600">Notícias</Link>
          <Link to="/copa" onClick={() => setOpen(false)} className="hover:text-pink-600">Copa</Link>
          <Link to="/sortearTime" onClick={() => setOpen(false)} className="hover:text-pink-600">Sortear Time</Link>
          <Link to="/entrar" onClick={() => setOpen(false)} className="hover:text-pink-600">Entrar</Link>
          <Link to="/cadastrar" onClick={() => setOpen(false)} className="hover:text-pink-600">Cadastrar</Link>
        </nav>
      )}
    </header>
  );
}
