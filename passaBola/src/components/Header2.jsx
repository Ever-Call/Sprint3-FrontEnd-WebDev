export default function Header() {
  return (
    <>
      {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/75 backdrop-blur-md border-b border-gray-200/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 flex items-center justify-center">
                            <img src="/logo2.png" alt="" />
                        </div>
                        <span className="text-xl font-bold text-gradient">
                            FutFem Brasil
                        </span>
                    </div>

                    {/* Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#"
                            className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                        >
                            Início
                        </a>
                        <a
                            href="#"
                            className="text-purple-600 font-semibold border-b-2 border-purple-600 pb-1"
                        >
                            Notícias
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                        >
                            Times
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                        >
                            Jogadoras
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                        >
                            Torneios
                        </a>
                    </div>

                    {/* Ações */}
                    <div className="flex items-center space-x-4">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                        </svg>
                    </button>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transition-all transform hover:scale-105">
                        Ao Vivo
                    </button>
                    </div>
                </div>
            </div>
        </nav>
    </>
  );
}
