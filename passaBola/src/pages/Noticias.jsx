import React, { useState, useEffect } from 'react';

export default function Noticias() {
  // Estado para guardar as notícias da NewsAPI
  const [articles, setArticles] = useState([]);
  const API_KEY = '31ceec67eccd49529c0d02957a31e082'; // Substitua pela sua chave obtida em newsapi.org

  useEffect(() => {
    // Requisição à NewsAPI buscando notícias de futebol feminino em português
    fetch(`https://newsapi.org/v2/everything?q=futebol%20feminino&language=pt&pageSize=6&apiKey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.articles) {
          setArticles(data.articles); // Guarda as notícias no estado
        }
      })
      .catch((error) => console.error('Erro ao buscar NewsAPI:', error));
  }, []);
  console.log(articles)

  return (
    <div className="container mx-auto px-4 mt-14  ">
      <h2 className="text-xl font-semibold mb-4">Futebol Feminino (NewsAPI)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <a href={article.url} target="_blank" >
            <div key={index} className="w-full rounded-lg shadow-md">
              {/* Exibe imagem se disponível (campo urlToImage) */}
              {article.urlToImage && (
                <img
                  className="object-cover w-full h-48 rounded-t-lg"
                  src={article.urlToImage}
                  alt="Imagem da notícia"
                />
              )}
              <div className="p-4">
                {/* Título da notícia */}
                <h3 className="text-lg font-semibold">{article.title}</h3>
                {/* Resumo (descrição) da notícia */}
                <p className="text-gray-600">{article.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
