import React, { useState, useEffect } from "react";

function PassaBola() {
  // Lista inicial de jogos
  const [jogos, setJogos] = useState([
    {
      id: 1,
      timeA: "Time A",
      timeB: "Time B",
      data: "2025-06-15",
      horario: "14:00",
      local: "Estádio Municipal",
      canal: "ESPN Brasil",
      golsA: 2,
      golsB: 1,
    },
    {
      id: 2,
      timeA: "Time C",
      timeB: "Time D",
      data: "2025-06-22",
      horario: "20:00",
      local: "Estádio Municipal",
      canal: "CazéTV",
      golsA: 3,
      golsB: 3,
    },
    {
      id: 3,
      timeA: "Time A",
      timeB: "Time C",
      data: "2025-06-30",
      horario: "16:00",
      local: "Estádio Municipal",
      canal: "ESPN Brasil",
      golsA: 1,
      golsB: 0,
    },
  ]);

  // Função que calcula classificação com base nos resultados
  const calcularClassificacao = () => {
    const tabela = {};

    jogos.forEach((jogo) => {
      const { timeA, timeB, golsA, golsB } = jogo;

      // Garante que os times estão na tabela
      if (!tabela[timeA]) tabela[timeA] = { J: 0, V: 0, E: 0, D: 0, Pts: 0 };
      if (!tabela[timeB]) tabela[timeB] = { J: 0, V: 0, E: 0, D: 0, Pts: 0 };

      tabela[timeA].J++;
      tabela[timeB].J++;

      if (golsA > golsB) {
        tabela[timeA].V++;
        tabela[timeA].Pts += 3;
        tabela[timeB].D++;
      } else if (golsB > golsA) {
        tabela[timeB].V++;
        tabela[timeB].Pts += 3;
        tabela[timeA].D++;
      } else {
        tabela[timeA].E++;
        tabela[timeB].E++;
        tabela[timeA].Pts++;
        tabela[timeB].Pts++;
      }
    });

    // Converte em array ordenado por pontos
    return Object.entries(tabela)
      .map(([time, stats]) => ({ time, ...stats }))
      .sort((a, b) => b.Pts - a.Pts);
  };

  const classificacao = calcularClassificacao();

  return (
    <div className="w-xl bg-white shadow-2xl rounded-2xl p-6 flex flex-col items-center">
      <div className="w-full ">
        {/* --- Tabela de Jogos --- */}
        <h2 className="text-lg font-bold mb-4">Tabela de Jogos</h2>
        <div className="space-y-4">
          {jogos.map((jogo) => (
            <div
              key={jogo.id}
              className="bg-white shadow rounded-lg p-4 flex flex-col relative"
            >
              <p className="font-semibold text-gray-800">
                {jogo.timeA} vs {jogo.timeB}
              </p>
              <p className="text-sm text-gray-600">
                {jogo.horario} - {jogo.local}
              </p>
              <p className="text-sm text-gray-600">
                Transmissão: Canal Esportivo da {jogo.canal}
              </p>
              <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {new Date(jogo.data).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                })}
              </span>
            </div>
          ))}
        </div>

        {/* --- Classificação --- */}
        <h2 className="text-lg font-bold mt-8 mb-4">Classificação</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-pink-500 text-white">
              <tr>
                <th className="p-2 border">Time</th>
                <th className="p-2 border">J</th>
                <th className="p-2 border">V</th>
                <th className="p-2 border">E</th>
                <th className="p-2 border">D</th>
                <th className="p-2 border">Pts.</th>
              </tr>
            </thead>
            <tbody>
              {classificacao.map((t, i) => (
                <tr
                  key={i}
                  className={`${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="p-2 border font-semibold">{t.time}</td>
                  <td className="p-2 border text-center">{t.J}</td>
                  <td className="p-2 border text-center">{t.V}</td>
                  <td className="p-2 border text-center">{t.E}</td>
                  <td className="p-2 border text-center">{t.D}</td>
                  <td className="p-2 border text-center font-bold text-pink-600">
                    {t.Pts}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- Botão --- */}
        <button className="w-full mt-6 bg-pink-500 text-white font-semibold py-3 rounded-full shadow hover:bg-pink-600 transition">
          Inscrever Time
        </button>
      </div>
    </div>
  );
}

// --- COMPONENTE TABELA ---
function TabelaCampeonato() {
  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function buscarTabela() {
      try {
        const url =
          "https://v3.football.api-sports.io/standings?league=74&season=2023";

        const myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", "51dbb7d7a84baf534ad4eb057b227fcf");
        myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

        const resp = await fetch(url, {
          method: "GET",
          headers: myHeaders,
        });
        console.log(resp);
        if (!resp.ok) throw new Error("Erro na requisição: " + resp.status);

        const dados = await resp.json();
        const tabela = dados.response?.[0]?.league?.standings?.[0] || [];
        setTimes(tabela);
      } catch (err) {
        setErro(err.message);
      } finally {
        setLoading(false);
      }
    }
    buscarTabela();
  }, []);

  if (loading) return <p className="text-center mt-10">Carregando tabela...</p>;
  if (erro) return <p className="text-red-500 text-center">{erro}</p>;

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-5xl mx-auto relative">
      <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
        Tabela - Brasileirão Feminino A1 (2023)
      </h2>

      {/* Tabela */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
          <thead className="bg-pink-600 text-white">
            <tr>
              <th className="border p-2">Pos</th>
              <th className="border p-2">Time</th>
              <th className="border p-2">Pts</th>
              <th className="border p-2">J</th>
              <th className="border p-2">V</th>
              <th className="border p-2">E</th>
              <th className="border p-2">D</th>
              <th className="border p-2">SG</th>
            </tr>
          </thead>
          <tbody>
            {times.map((t) => (
              <tr key={t.team.id} className="hover:bg-gray-100">
                <td className="border p-2 text-center">{t.rank}</td>
                <td className="border p-2 flex items-center gap-2">
                  <img src={t.team.logo} alt={t.team.name} className="h-6 w-6" />
                  {t.team.name}
                </td>
                <td className="border p-2 text-center">{t.points}</td>
                <td className="border p-2 text-center">{t.all.played}</td>
                <td className="border p-2 text-center">{t.all.win}</td>
                <td className="border p-2 text-center">{t.all.draw}</td>
                <td className="border p-2 text-center">{t.all.lose}</td>
                <td className="border p-2 text-center">{t.goalsDiff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {times.map((t) => (
          <div
            key={t.team.id}
            className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            <img src={t.team.logo} alt={t.team.name} className="h-12 mb-3" />
            <h3 className="font-semibold text-lg">{t.team.name}</h3>
            <p className="text-pink-600 font-bold">#{t.rank}</p>
            <p>Pontos: {t.points}</p>
            <p>Jogos: {t.all.played}</p>
            <p>
              {t.all.win}V - {t.all.draw}E - {t.all.lose}D
            </p>
            <p>Saldo: {t.goalsDiff}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- COMPONENTE PRINCIPAL ---
export default function App() {
  const [aba, setAba] = useState("tabela");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Botões */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setAba("tabela")}
          className={`px-6 py-3 rounded-xl shadow ${
            aba === "tabela"
              ? "bg-pink-600 text-white"
              : "bg-white text-gray-700 hover:bg-pink-100"
          }`}
        >
          Brasileirão
        </button>
        <button
          onClick={() => setAba("gerenciador")}
          className={`px-6 py-3 rounded-xl shadow ${
            aba === "gerenciador"
              ? "bg-pink-600 text-white"
              : "bg-white text-gray-700 hover:bg-pink-100"
          }`}
        >
          Passa a Bola
        </button>
      </div>

      {/* Conteúdo */}
      <div className="w-full flex justify-center">
        {aba === "tabela" ? <TabelaCampeonato /> : <PassaBola />}
      </div>
    </div>
  );
}
