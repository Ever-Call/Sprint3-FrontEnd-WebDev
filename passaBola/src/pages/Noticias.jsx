import React, { useState, useEffect } from 'react';

export default function Noticias() {
  // Estado para guardar as notícias da GNews API
  const [articles, setArticles] = useState([]);
  const API_KEY = '6e5d7fcf6d817c97a7804cae625de27f'; // Substitua pela sua chave obtida em gnews.io

  useEffect(() => {
    // Requisição à GNews API buscando notícias de futebol feminino em português
    fetch(`https://gnews.io/api/v4/search?q=futebol&lang=pt&country=br&max=6&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.articles) {
          setArticles(data.articles); // Guarda as notícias no estado
        }
      })
      .catch((error) => console.error('Erro ao buscar GNews:', error));
  }, []);

  return (
    <div className="container mx-auto p-4 mt-14">
      <h2 className="text-xl font-semibold mb-4">Futebol Feminino (GNews API)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="w-full rounded-lg shadow-md">
            {/* Exibe imagem se disponível (campo image) */}
            {article.image && (
              <img
                className="object-cover w-full h-48 rounded-t-lg"
                src={article.image}
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
        ))}
      </div>
    </div>
  );
}
