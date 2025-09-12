export default function Hero(){
    return(
        <>
            {/* <!-- Hero Section --> */}
            <section className="pt-16 gradient-bg min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-pink-600 to-cyan-500">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float" />
                    <div
                    className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full animate-float"
                    style={{ animationDelay: '-2s' }}
                    />
                    <div
                    className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-float"
                    style={{ animationDelay: '-4s' }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white animate-fade-in">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        O Poder do
                        <span className="block text-yellow-300">Esporte Feminino</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90">
                        Conheça as histórias inspiradoras, conquistas e desafios das mulheres no esporte mundial.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors hover-scale">
                            Explorar Conteúdo
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors hover-scale">
                            Assinar Newsletter
                        </button>
                        </div>
                    </div>

                    <div className="relative animate-slide-up">
                        <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="bg-white rounded-2xl p-6">
                            <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                <span className="text-white font-bold">🏆</span>
                            </div>
                            <div className="ml-4">
                                <h3 className="font-bold text-gray-800">Destaque da Semana</h3>
                                <p className="text-gray-600">Marta faz história</p>
                            </div>
                            </div>
                            <p className="text-gray-700 mb-4">
                            A rainha do futebol brasileiro quebra mais um recorde internacional...
                            </p>
                            <button className="text-primary font-semibold hover:underline">
                            Ler mais →
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        </>
    )
}