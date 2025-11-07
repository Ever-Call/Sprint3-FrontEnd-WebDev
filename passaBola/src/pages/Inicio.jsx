import { useState } from 'react';
import { Instagram, Send, Users, Heart, Sparkles, Trophy, Target, Award, Newspaper, TrendingUp, PlayCircle } from 'lucide-react';

export default function Inicio() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const mensagem = `Mensagem enviada com sucesso! Obrigada pelo contato.\n\nNome: ${formData.name}\nEmail: ${formData.email}\nMensagem: ${formData.message}`;
      alert(mensagem);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const timeline = [
    {
      year: 2021,
      title: 'Fundação',
      description: 'Início do coletivo de jogos entre mulheres em São Paulo',
      icon: PlayCircle,
      color: 'from-pink-500 to-pink-600'
    },
    {
      year: 2022,
      title: 'Expansão Digital',
      description: 'Criação do canal de conteúdo nas redes sociais',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600'
    },
    {
      year: 2024,
      title: 'Copa Passa Bola',
      description: 'Primeira edição do torneio oficial',
      icon: Trophy,
      color: 'from-pink-500 to-purple-500'
    },
    {
      year: 2025,
      title: 'Consolidação',
      description: 'Reconhecimento nacional e parcerias estratégicas',
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const achievements = [
    { number: '200k+', label: 'Seguidoras', icon: Users },
    { number: '2k+', label: 'Conteúdos Publicados', icon: Newspaper }
  ];

  const founders = [
    {
      name: 'Alê Xavier',
      role: 'Co-fundadora',
      instagram: '@alexavier',
      instagramUrl: 'https://www.instagram.com/alexavier',
      image: '/aleInsta.jpg',
      color: 'pink',
      bio: 'Comunicadora esportiva dedicada a dar voz e visibilidade às mulheres no futebol. Acredita no poder das histórias que inspiram e transformam o esporte.',
      carreira: [
        'Atuou como repórter ou apresentadora esportiva com foco em futebol',
        'Colunista especializada em futebol',
        'Criadora de conteúdo sobre esporte e empoderamento',
        'Comentarista em transmissões de jogos femininos'
      ]
    },
    {
      name: 'Luana Maluf',
      role: 'Co-fundadora',
      instagram: '@luanamaluf',
      instagramUrl: 'https://www.instagram.com/luanamaluf',
      image: '/luanaInsta.jpg',
      color: 'purple',
      bio: 'Criadora de conteúdo e comunicadora com experiência em marketing digital, com foco em projetos de impacto social. Acredita no poder do esporte para transformar vidas.',
      carreira: [
        'Estrategista de mídias sociais para marcas esportivas',
        'Teve atuação em gestão de comunidades digitais',
        'Consultora de marketing para o futebol feminino',
        'se formou em Relações Públicas'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 relative">
          
          {/* Hero Title */}
          <div className="text-center mb-20">
                        
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-in slide-in-from-bottom duration-700">
              Passa a Bola
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Mais que um canal, um <span className="text-pink-600 font-bold">movimento</span> de transformação do futebol feminino brasileiro
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-pink-100 hover:scale-105 transition-transform duration-300">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-gray-700">Comunidade Ativa</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-pink-100 hover:scale-105 transition-transform duration-300">
                <Heart className="w-5 h-5 text-pink-600" />
                <span className="font-semibold text-gray-700">Desde 2021</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-pink-100 hover:scale-105 transition-transform duration-300">
                <Target className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-gray-700">Impacto Nacional</span>
              </div>
            </div>
          </div>

          {/* Achievements Stats */}
          <div className="grid grid-cols-2 gap-6 mb-20">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50 text-center group hover:-translate-y-2 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-semibold text-sm">
                    {achievement.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mission Section */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 lg:p-16 mb-20 border border-white/50">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                  Nossa Missão
                </h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto"></div>
              </div>
              
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 lg:p-12 border-2 border-pink-200 mb-12">
                <p className="text-gray-700 text-xl lg:text-2xl leading-relaxed text-center font-medium">
                  "Promover, valorizar e dar visibilidade ao futebol feminino, criando uma comunidade forte, 
                  conectada e apaixonada pelo esporte que transforma vidas."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-200 hover:border-pink-400 transition-all duration-300">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Paixão</h3>
                  <p className="text-gray-600">Amor genuíno pelo futebol feminino e suas atletas</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-200 hover:border-purple-400 transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Comunidade</h3>
                  <p className="text-gray-600">Construir uma rede de apoio e conexão entre fãs</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-200 hover:border-pink-400 transition-all duration-300">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                    <Trophy className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Excelência</h3>
                  <p className="text-gray-600">Conteúdo de qualidade sobre o esporte feminino</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Linha do Tempo
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 to-purple-300 -translate-x-1/2 hidden md:block"></div>

                <div className="space-y-12">
                  {timeline.map((item, idx) => {
                    const Icon = item.icon;
                    const isEven = idx % 2 === 0;
                    return (
                      <div key={idx+10} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        {/* Content */}
                        <div className={`flex-1 ${isEven ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50 hover:-translate-y-1 transition-all duration-300">
                            <div className={`inline-block px-4 py-1 rounded-full text-white font-bold text-sm mb-3 bg-gradient-to-r ${item.color}`}>
                              {item.year}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>

                        {/* Icon Circle */}
                        <div className={`absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br ${item.color} rounded-full items-center justify-center shadow-lg z-10 hidden md:flex`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>

                        {/* Spacer */}
                        <div className="flex-1 hidden md:block"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Founders Section */}
          <div className="mb-20">

            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Quem Somos
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {founders.map((founder, index) => (
                <div key={index+20} className="group relative ">
                  <div className={`absolute inset-0 bg-gradient-to-r ${founder.color === 'pink' ? 'from-pink-400 to-purple-400' : 'from-purple-400 to-pink-400'} rounded-3xl blur-xl opacity-30 group-hover:opacity-90 transition-opacity duration-300`}></div>
                  
                  <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:-translate-y-2 transition-all duration-300">
                    <div className="p-8">
                      <div className="flex items-start gap-6 mb-6">
                        <div className='w-20 h-20 rounded-full'>
                          <img src={founder.image} className='rounded-full' />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-800 mb-1">{founder.name}</h3>
                          <p className={`${founder.color === 'pink' ? 'text-pink-600' : 'text-purple-600'} font-semibold mb-2`}>{founder.role}</p>
                          <a 
                            href={founder.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer inline-flex items-center gap-1 text-gray-600 hover:text-pink-600 transition-colors text-sm"
                          >
                            <Instagram className="w-4 h-4" />
                            {founder.instagram}
                          </a>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 text-lg">
                        {founder.bio}
                      </p>

                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 mb-6">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                          <Trophy className="w-5 h-5 text-pink-600" />
                          Trajetória Profissional
                        </h4>
                        <ul className="space-y-2">
                          {founder.carreira.map((item, i) => (
                            <li key={i+30} className="text-gray-600 flex items-start gap-2">
                              <span className={`w-2 h-2 ${founder.color === 'pink' ? 'bg-pink-500' : 'bg-purple-500'} rounded-full mt-2 flex-shrink-0`}></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    <button
                      onClick={() => window.open(founder.instagramUrl, '_blank')}
                      className={`cursor-pointer w-full py-4 bg-gradient-to-r ${founder.color === 'pink' ? 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700' : 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'} text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2`}
                    >
                      <Instagram className="w-5 h-5" />
                      <span>Seguir no Instagram</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 lg:p-16 border border-white/50">
            <div className="text-center mb-12">              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Fale com a Gente
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto"></div>
              <p className="text-gray-600 mt-6 text-lg">Estamos ansiosas para ouvir você! 💜</p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <div className="group">
                  <label className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    Nome Completo *
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all outline-none bg-gray-50 focus:bg-white text-lg"
                    placeholder="Digite seu nome completo"
                    required
                  />
                </div>
                
                <div className="group">
                  <label className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    E-mail *
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none bg-gray-50 focus:bg-white text-lg"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                
                <div className="group">
                  <label className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    Mensagem *
                  </label>
                  <textarea 
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all outline-none bg-gray-50 focus:bg-white resize-none text-lg"
                    placeholder="Conte pra gente o que você está pensando..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-bold text-lg py-5 px-8 rounded-2xl transition-all duration-300 shadow-xl ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'cursor-pointer bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-2xl'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando mensagem...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensagem</span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}