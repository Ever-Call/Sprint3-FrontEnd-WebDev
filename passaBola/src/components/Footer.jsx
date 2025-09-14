export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">⚽</span>
                </div>
                <span className="text-2xl font-bold text-pink-400">Passa Bola</span>
              </div>
              <p className="text-gray-400 mb-4">
                O canal digital dedicado ao futebol feminino. Promovendo o esporte com conteúdo informativo e descontraído.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">📘</a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">📷</a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">🐦</a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">📺</a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400">Futebol Feminino</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Brasileirão Feminino</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Copa do Brasil</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Seleção Brasileira</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Campeonatos Estaduais</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400">Conteúdo</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Notícias</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Copa Passa Bola</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Gerenciar Times</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Tabelas</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-400">Sobre Nós</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Nossa História</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Alê Xavier</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Luana Maluf</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Passa Bola. Todos os direitos reservados. Feito com ❤️ para o futebol feminino.</p>
          </div>
        </div>
      </footer>
    </>
  );
}