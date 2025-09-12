export default function Footer(){
    return(
        <>
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">S</span>
                                </div>
                                <span className="text-2xl font-bold text-gradient">SportHer</span>
                                </div>
                                <p className="text-gray-400 mb-4">
                                O maior portal de notícias sobre esporte feminino do Brasil.
                                </p>
                            <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">📘</a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">📷</a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">🐦</a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">📺</a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Modalidades</h3>
                        <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-primary transition-colors">Futebol</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Vôlei</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Basquete</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Tênis</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Conteúdo</h3>
                        <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-primary transition-colors">Notícias</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Entrevistas</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Análises</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Estatísticas</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Sobre</h3>
                        <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-primary transition-colors">Nossa História</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Equipe</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Parcerias</a></li>
                        </ul>
                    </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 SportHer. Todos os direitos reservados. Feito com ❤️ para o esporte feminino.</p>
                    </div>
                </div>
            </footer>

        </>
    )
}