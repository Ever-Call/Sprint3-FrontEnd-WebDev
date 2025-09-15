import { useState } from 'react';

export default function Inicio() {
  const [formData, setFormData] = useState({ });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({...formData,[e.target.id]: e.target.value});//eu pego o id do input e o conteudo dentro do elemento, e adiciono ao formData. basicamente posso dizer, depois da virgula, [e.target.id]: e.target.value adiciona ou sobrescreve um campo
    console.log(formData)
  };

  const handleSubmit = (ev) => {
  ev.preventDefault();
  setIsSubmitting(true);

  // Monta a mensagem com os dados enviados
  const mensagem = `Mensagem enviada com sucesso! Obrigada pelo contato.\n\nNome: ${formData.name}\nEmail: ${formData.email}\nMensagem: ${formData.message}`;

  alert(mensagem);

  // Limpa formulário
  setFormData({ name: '', email: '', message: '' });
  setIsSubmitting(false);
};


  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          
          {/* Logo Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Bem vinda(o) ao Passa a Bola!
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              O aplicativo oficial da Copa Passa Bola, dedicado ao 
              <span className="text-pink-500 font-semibold"> Futebol Feminino</span>
            </p>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-20 border border-gray-100">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8">
              Passa a Bola
            </h2>
            
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed mb-8">
                Passa a Bola é um canal digital criado em 2021 por 
              </p>
              
              {/* Creator cards */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-8">
                <div className="flex items-center bg-pink-50 rounded-xl p-4 border border-pink-100">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    A
                  </div>
                  <span className="text-gray-800 font-semibold text-lg">Alê Xavier</span>
                </div>
                
                <div className="text-gray-400 font-bold text-xl">+</div>
                
                <div className="flex items-center bg-pink-50 rounded-xl p-4 border border-pink-100">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    L
                  </div>
                  <span className="text-gray-800 font-semibold text-lg">Luana Maluf</span>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                para promover o futebol feminino. Começou como um coletivo de jogos entre mulheres 
                em São Paulo e evoluiu para um canal de conteúdo informativo e descontraído sobre o tema.
              </p>
            </div>
          </div>

          {/* Instagram Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Siga no Instagram
              </h2>
              <div className="w-16 h-1 bg-pink-500 rounded-full mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {/* Alê Xavier Card */}
              <a 
                href="https://www.instagram.com/alexavier "
                target="_blank" 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative overflow-hidden ">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src={import.meta.env.BASE_URL+"/aleInsta.jpg"} 
                    alt="Alê Xavier Instagram" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="font-bold text-2xl text-gray-800 mb-2">
                    Alê Xavier
                  </h3>
                  <p className="text-gray-500 mb-4">@alexavier</p>
                  
                  <div className="bg-pink-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-pink-600 transition-colors duration-300">
                    <span>Seguir</span>
                  </div>
                </div>
              </a>

              {/* Luana Maluf Card */}
              <a 
                href="https://www.instagram.com/luanamaluf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative overflow-hidden ">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src={import.meta.env.BASE_URL +"/luanaInsta.jpg" }
                    alt="Luana Maluf Instagram" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="font-bold text-2xl text-gray-800 mb-2">
                    Luana Maluf
                  </h3>
                  <p className="text-gray-500 mb-4">@luanamaluf</p>
                  
                  <div className="bg-pink-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-pink-600 transition-colors duration-300">
                    <span>Seguir</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Fale com a gente
              </h2>
              <div className="w-16 h-1 bg-pink-500 rounded-full mx-auto"></div>
              <p className="text-gray-600 mt-4">Estamos ansiosas para ouvir você!</p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none bg-gray-50 focus:bg-white"
                    placeholder="Digite seu nome completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none bg-gray-50 focus:bg-white"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea 
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all outline-none bg-gray-50 focus:bg-white resize-none"
                    placeholder="Conte pra gente o que você está pensando..."
                  ></textarea>
                </div>
                
                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-4 px-6 rounded-lg transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-pink-500 hover:bg-pink-600 transform hover:scale-[1.02] active:scale-[0.98]'
                  } text-white shadow-lg`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    'Enviar Mensagem'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}