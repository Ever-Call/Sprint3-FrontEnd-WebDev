import { useState } from "react";

export default function Gerenciador() {
  const [numJogadores, setNumJogadores] = useState("");
  const [jogadores, setJogadores] = useState([]);
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [partidas, setPartidas] = useState([]);

  const handleNomeChange = (index, value) => {
    const novosJogadores = [...jogadores];
    novosJogadores[index] = value;
    setJogadores(novosJogadores);
  };

  const handleSetNumJogadores = () => {
    let n = parseInt(numJogadores);
    if (isNaN(n) || n <= 0) return;

    if (n % 2 !== 0) n++;
    setJogadores(Array(n).fill(""));
  };

  const handleSalvarPartida = () => {
    if (!data || !hora || jogadores.length === 0) return;

    const novaPartida = {
      data,
      hora,
      jogadores: jogadores.map((j) => (j.trim() === "" ? "Vazio" : j)),
    };

    setPartidas([...partidas, novaPartida]);
    setNumJogadores("");
    setJogadores([]);
    setData("");
    setHora("");
  };

  return (
    <div className="p-7 mx-auto max-w-3xl">
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-full  relative ">
        <h1 className="text-3xl font-bold mb-6 text-pink-600 text-center">
          Gerenciador de Partidas ⚽
        </h1>

        {/* Configurar jogadores */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Número de jogadores:</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={numJogadores}
              onChange={(e) => setNumJogadores(e.target.value)}
              className="border p-2 rounded-lg w-full"
            />
            <button
              onClick={handleSetNumJogadores}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
            >
              Definir
            </button>
          </div>
        </div>

        {/* Jogadores */}
        {jogadores.length > 0 && (
          <div className="mb-6">
            <h2 className="font-bold text-lg mb-4">Jogadores</h2>
            <div className="grid grid-cols-2 gap-3">
              {jogadores.map((j, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={`Jogador ${i + 1}`}
                  value={j}
                  onChange={(e) => handleNomeChange(i, e.target.value)}
                  className="border p-2 rounded-lg"
                />
              ))}
            </div>
          </div>
        )}

        {/* Data e Hora */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Data:</label>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="border p-2 rounded-lg w-full mb-4"
          />

          <label className="block mb-2 font-semibold">Hora:</label>
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            className="border p-2 rounded-lg w-full"
          />
        </div>

        <button
          onClick={handleSalvarPartida}
          className="bg-pink-400 text-white px-6 py-3 rounded-xl shadow hover:bg-pink-600 transition mb-8 w-full"
        >
          Salvar Partida
        </button>

        {/* Partidas salvas */}
        {partidas.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">📋 Partidas Cadastradas</h2>
            <div className="space-y-4">
              {partidas.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 shadow rounded-xl p-4 border"
                >
                  <p className="font-semibold mb-2">
                    📅 {p.data} ⏰ {p.hora}
                  </p>
                  <ul className="grid grid-cols-2 gap-2">
                    {p.jogadores.map((j, i) => (
                      <li
                        key={i}
                        className="border p-2 rounded-lg text-center bg-white"
                      >
                        {j}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}