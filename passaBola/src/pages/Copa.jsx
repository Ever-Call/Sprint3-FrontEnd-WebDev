import React, { useState, useEffect } from 'react';

export default function Copa() {
  // Estado para armazenar os dados da tabela do campeonato feminino
  const [tabela, setTabela] = useState([]);
  // Estado para controle de carregamento (loading)
  const [carregando, setCarregando] = useState(true);
  // Estado para armazenar erro caso a requisição falhe
  const [erro, setErro] = useState(null);

  useEffect(() => {
    // Fetch para a API do TheSportsDB (exemplo de campeonato feminino: WSL 2024-2025)
    fetch('https://www.thesportsdb.com/api/v1/json/123/lookuptable.php?l=4849&s=2024-2025')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na resposta da API');
        }
        return response.json();
      })
      .then((dados) => {
        // A API retorna um objeto com a propriedade "table" contendo o array de posições
        if (dados.table) {
          setTabela(dados.table);
        } else {
          setTabela([]);
        }
      })
      .catch((err) => {
        // Em caso de erro, armazena a mensagem de erro
        setErro(err.message);
      })
      .finally(() => {
        // Finaliza o carregamento após a tentativa de requisição
        setCarregando(false);
      });
  }, []);

  // Exibe mensagem de carregando enquanto os dados estão sendo buscados
  if (carregando) {
    return <p>Carregando...</p>;
  }

  // Exibe mensagem de erro caso ocorra algum problema na requisição
  if (erro) {
    return <p>Erro ao carregar dados.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Tabela do Campeonato Feminino (TheSportsDB)</h2>

      {/* Tabela tradicional */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Posição</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Jogos</th>
              <th className="px-4 py-2">Vitórias</th>
              <th className="px-4 py-2">Empates</th>
              <th className="px-4 py-2">Derrotas</th>
              <th className="px-4 py-2">Gols Pró</th>
              <th className="px-4 py-2">Gols Contra</th>
              <th className="px-4 py-2">Saldo</th>
              <th className="px-4 py-2">Pontos</th>
            </tr>
          </thead>
          <tbody>
            {tabela.map((item) => (
              <tr key={item.idTeam} className="text-center odd:bg-white even:bg-gray-50">
                <td className="border px-4 py-2">{item.intRank}</td>
                <td className="border px-4 py-2">{item.strTeam}</td>
                <td className="border px-4 py-2">{item.intPlayed}</td>
                <td className="border px-4 py-2">{item.intWin}</td>
                <td className="border px-4 py-2">{item.intDraw}</td>
                <td className="border px-4 py-2">{item.intLoss}</td>
                <td className="border px-4 py-2">{item.intGoalsFor}</td>
                <td className="border px-4 py-2">{item.intGoalsAgainst}</td>
                <td className="border px-4 py-2">{item.intGoalDifference}</td>
                <td className="border px-4 py-2">{item.intPoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Exibição em cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tabela.map((item) => (
          <div key={item.idTeam} className="bg-white rounded-lg shadow p-4 flex flex-col">
            <h3 className="text-xl font-semibold mb-2 text-center">
              {item.intRank}. {item.strTeam}
            </h3>
            <p className="text-gray-600 text-sm">
              <strong>Jogos:</strong> {item.intPlayed} &bull;
              <strong> Vitórias:</strong> {item.intWin} &bull;
              <strong> Empates:</strong> {item.intDraw} &bull;
              <strong> Derrotas:</strong> {item.intLoss}
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Gols:</strong> {item.intGoalsFor} &bull;
              <strong> Contra:</strong> {item.intGoalsAgainst} &bull;
              <strong> Saldo:</strong> {item.intGoalDifference}
            </p>
            <p className="text-gray-800 font-bold mt-2 text-center">Pontos: {item.intPoints}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


