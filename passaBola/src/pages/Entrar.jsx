import { useState } from "react";

export default function Entrar({ onLogin, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Preencha todos os campos");
      return;
    }

    if (password.length < 3) {
      setError("Senha deve ter pelo menos 3 caracteres");
      return;
    }
    let success = false;
    if(isRegister){
      success = onRegister(email, password);
    }else{
      success = onLogin(email, password);
    }
    if (!success) {
      setError("Erro ao fazer login");
    }
  };

  return (
    <div className="min-h-screen bg-pink-400 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-pink-600">Passa a Bola</h1>
          <p className=" mt-2">
            {isRegister ? "Criar nova conta" : "Entre na sua conta"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div>
            <label className="block text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-pink-500"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-pink-500"
              placeholder="Sua senha"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-400 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors"
          >
            {isRegister ? "Cadastrar" : "Entrar"}
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-pink-600 hover:underline"
          >
            {isRegister ? "Já tem conta? Entrar" : "Não tem conta? Cadastrar"}
          </button>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700">
            <strong>Para testar:</strong> Use qualquer email e senha com 3+ caracteres
          </p>
        </div>
      </div>
    </div>
  );
}