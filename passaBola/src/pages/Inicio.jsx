export default function Inicio(){
  return(
    <>
      {/* Hero Section */}
      <section className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h1>Bem vinda(o) ao Passa a Bola!</h1>
          <p>O aplicativo oficial da Copa Passa Bola, dedicado ao Futebol Feminino</p>
          {/* Logo */}
          <div className="text-center mb-5">
            <img 
              src="./LuAleCor2.png" 
              className="w-full lg:w-96 mx-auto " 
              alt="Passa Bola Logo" 
            />
          </div>

          {/* Main Content Card */}
          <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl shadow-2xl p-8 lg:p-12 mb-20 hover:shadow-pink-200/50 transition-all duration-500">
            <h1 className="text-5xl lg:text-6xl text-center bg-gradient-to-r from-pink-400 to-teal-500 bg-clip-text text-transparent font-black mb-8 leading-tight">
              Passa Bola
            </h1>
            <p className="text-gray-700 text-lg lg:text-xl leading-relaxed text-center max-w-4xl mx-auto font-medium">
              Passa a Bola é um canal digital criado em 2021 por <span className="text-pink-600 font-semibold">Alê Xavier</span> e <span className="text-teal-600 font-semibold">Luana Maluf</span> 
              para promover o futebol feminino. Começou como um coletivo de jogos entre mulheres 
              em São Paulo e evolui para um canal de conteúdo informativo e descontraído sobre o tema.
            </p>
          </div>

          {/* Instagram Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-teal-600 bg-clip-text text-transparent">
              Siga no Instagram
            </h2>
            
            <div className="grid grid-cols-2 gap-4 mx-auto">
              {/* Alê Xavier Card */}
              <a 
                href="https://www.instagram.com/alexavier" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-pink-200/50 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    className="w-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    src="/aleInsta.jpg" 
                    alt="Alê Xavier Instagram" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-2xl mb-2 bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">
                    Alê Xavier
                  </h3>
                  <p className="text-gray-600 text-sm">@alexavier</p>
                  <div className="mt-4 inline-flex items-center text-pink-600 font-medium group-hover:text-pink-700">
                    <span>Seguir no Instagram</span>
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Luana Maluf Card */}
              <a 
                href="https://www.instagram.com/luanamaluf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-teal-200/50 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    className="w-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    src="/luanaInsta.jpg" 
                    alt="Luana Maluf Instagram" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-2xl mb-2 bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
                    Luana Maluf
                  </h3>
                  <p className="text-gray-600 text-sm">@luanamaluf</p>
                  <div className="mt-4 inline-flex items-center text-teal-600 font-medium group-hover:text-teal-700">
                    <span>Seguir no Instagram</span>
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 lg:p-12 border border-white/50">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Fale com a gente
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none bg-white/50"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none bg-white/50"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea 
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none bg-white/50 resize-none"
                    placeholder="Digite sua mensagem aqui..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-teal-500 text-white font-bold py-4 px-6 rounded-xl hover:from-pink-600 hover:to-teal-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">PB</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-teal-400 bg-clip-text text-transparent">
                  Passa Bola
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Promovendo o futebol feminino com conteúdo informativo e descontraído desde 2021.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="text-xl">📷</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-teal-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="text-xl">🐦</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <span className="text-xl">📺</span>
                </a>
              </div>
            </div>

            {/* Conteúdo */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-teal-400">Conteúdo</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-teal-400 transition-colors duration-300">Notícias</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors duration-300">Entrevistas</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors duration-300">Análises</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors duration-300">Estatísticas</a></li>
              </ul>
            </div>

            {/* Sobre */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-purple-400">Sobre</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Nossa História</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Equipe</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Contato</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Parcerias</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 Passa Bola. Todos os direitos reservados. Feito com 
              <span className="text-pink-500 mx-1">❤️</span>
              para o futebol feminino.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}