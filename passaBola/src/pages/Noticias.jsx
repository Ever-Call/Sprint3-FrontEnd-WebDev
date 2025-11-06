import { useState, useEffect } from "react";

export default function Noticias() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [createArticle, setCreateArticle] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newUrl, setNewUrl] = useState("");

  // Carregar JSON
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`) //import.meta.env.BASE_URL serve para pegar a base url do projeto, assim não ocorrendo erro de rota; eu retirei depois, mudei o vite.config.js para base: '/'
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error(err));
  }, []);

  // Criar resumo automático (apenas se não existir)
  const generateResumo = (text) =>
    text.length > 100 ? text.substring(0, 100) + "..." : text;

  // Adicionar nova notícia
  const handleAddArticle = () => {
    const newArticle = {
      id: Date.now(),
      titulo: newTitle,
      texto: newContent,
      resumo: generateResumo(newContent),
      url: newUrl || "#",
    };
    setArticles([newArticle, ...articles]);
    setCreateArticle(false);
    setNewTitle("");
    setNewContent("");
    setNewUrl("");
  };

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
          {/* Header com gradiente */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-pink-600 mb-2">
              Notícias
            </h1>
            <div className="h-1 w-35 bg-pink-600 rounded-full"></div>
          </div>

          {/* Botão de criar notícia com hover animado */}
          <button
            className="bg-pink-600 text-white px-6 py-3 rounded-xl mb-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
            onClick={() => setCreateArticle(true)}
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 transition-transform " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
              Adicionar Notícia
            </span>
          </button>

          {/* Grid de cards aprimorado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.length > 0 ? (
              articles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="group relative bg-white rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden"
                >
                  
                  
                  <h2 className="font-bold text-lg text-gray-800 mb-3 group-hover:text-pink-600 transition-colors line-clamp-2 relative z-10">
                    {article.titulo}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed relative z-10 line-clamp-3 wrap-break-word">
                    {article.resumo || generateResumo(article.texto)}
                  </p>
                  
                  {/* Indicador de leitura */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-16 text-gray-500">
                <div className="animate-spin w-8 h-8 border-2 border-pink-500 border-t-transparent rounded-full mb-4"></div>
                <p className="text-lg">Carregando notícias...</p>
              </div>
            )}
          </div>
        </div>

        {/* Modal para notícia selecionada - design aprimorado */}
        {selectedArticle && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 z-50 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-in slide-in-from-bottom-4 duration-300">
              <button
                className="absolute top-4 right-4 w-8 h-8 bg-red-100 hover:bg-red-200 text-red-600 rounded-full flex items-center justify-center transition-colors z-10"
                onClick={() => setSelectedArticle(null)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pr-8 leading-tight">
                  {selectedArticle.titulo}
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 wrap-break-word">
                    {selectedArticle.texto}
                  </p>
                </div>
                
                {selectedArticle.url && selectedArticle.url !== "#" && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <a
                      href={selectedArticle.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-xl hover:from-pink-600 hover:to-pink-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <span>Ler notícia completa</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Modal para criar notícia - design aprimorado */}
        {createArticle && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 z-50 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-in slide-in-from-bottom-4 duration-300">
              <button
                className="absolute top-4 right-4 w-8 h-8 bg-red-100 hover:bg-red-200 text-red-600 rounded-full flex items-center justify-center transition-colors z-10"
                onClick={() => setCreateArticle(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pr-8">Nova Notícia</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Título</label>
                    <input
                      type="text"
                      placeholder="Digite o título da notícia..."
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Conteúdo</label>
                    <textarea
                      placeholder="Escreva o conteúdo da notícia..."
                      value={newContent}
                      onChange={(e) => setNewContent(e.target.value)}
                      rows={6}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors outline-none resize-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">URL da notícia (opcional)</label>
                    <input
                      type="url"
                      placeholder="https://exemplo.com/noticia"
                      value={newUrl}
                      onChange={(e) => setNewUrl(e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors outline-none"
                    />
                  </div>
                </div>
                
                <div className="flex gap-4 mt-8">
                  <button
                    className="flex-1 bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 font-semibold"
                    onClick={handleAddArticle}
                    disabled={!newTitle || !newContent}
                  >
                    Adicionar Notícia
                  </button>
                  <button
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                    onClick={() => setCreateArticle(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}