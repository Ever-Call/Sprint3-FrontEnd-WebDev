import { useEffect, useState } from "react";

export default function SortearTime() {
  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function buscarTabela() {
      try {
        const url =
          "https://v3.football.api-sports.io/standings?league=74&season=2023"; 
        // league=120 é Brasileirão Feminino A1 (ajuste se quiser outro)

        const myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", "51dbb7d7a84baf534ad4eb057b227fcf"); // coloque sua chave RapidAPI
        myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        const resp = await fetch(url, requestOptions);
        if (!resp.ok) throw new Error("Erro na requisição: " + resp.status);

        const dados = await resp.json();
        console.log("Resposta bruta:", dados);

        // caminho seguro até os standings
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
    <div className="p-6 space-y-10 mt-14">
      <h2 className="text-2xl font-bold text-center text-pink-600">
        Tabela - Brasileirão Feminino A1 (2023)
      </h2>

      {/* --- TABELA --- */}
      <div className="overflow-x-auto">
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

      {/* --- CARDS --- */}
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
