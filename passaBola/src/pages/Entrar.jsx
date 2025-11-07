import { useState } from "react";
import { Mail, Lock, LogIn, UserPlus, Eye, EyeOff, Sparkles, AlertCircle } from "lucide-react";

export default function Entrar({ onLogin, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true);
    
    setTimeout(() => {
      let success = false;
      if(isRegister){
        success = onRegister(email, password);
      }else{
        success = onLogin(email, password);
      }
      
      if (!success) {
        setError(isRegister ? "Erro ao cadastrar" : "Email ou senha inválidos");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center p-4 relative overflow-hidden">
      
      
      {/* Main Card */}
      <div className="relative bg-white/70 rounded-3xl shadow-2xl p-8  w-full max-w-md border border-white/50">
        
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full">
            <img src="/logo.png" alt="" />
          </div>
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Passa a Bola
          </h1>
          
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-full border border-pink-200">
            <Sparkles className="w-4 h-4 text-pink-600" />
            <p className="text-sm font-semibold text-gray-700">
              {isRegister ? "Criar Nova Conta" : "Bem-vinda(o) de Volta"}
            </p>
          </div>
        </div>

        {/* Form */}
        <div onSubmit={handleSubmit} className="space-y-6">
          
          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-2xl flex items-center gap-3 animate-in slide-in-from-top duration-300">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium">{error}</span>
            </div>
          )}

          {/* Email Input */}
          <div>
            <label className=" text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/3 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all outline-none bg-gray-50 focus:bg-white text-lg"
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Senha
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/3 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none bg-gray-50 focus:bg-white text-lg"
                placeholder="Sua senha"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full font-bold text-lg py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl flex items-center justify-center gap-3 ${
              isLoading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-2xl cursor-pointer'
            } text-white`}
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Processando...</span>
              </>
            ) : (
              <>
                {isRegister ? (
                  <>
                    <UserPlus className="w-5 h-5" />
                    <span>Criar Conta</span>
                  </>
                ) : (
                  <>
                    <LogIn className="w-5 h-5" />
                    <span>Entrar</span>
                  </>
                )}
              </>
            )}
          </button>
        </div>

        {/* Toggle Login/Register */}
        <div className="text-center mt-6">
          <button
            onClick={() => {
              setIsRegister(!isRegister);
              setError("");
            }}
            className="text-gray-600 hover:text-pink-600 font-semibold transition-colors group cursor-pointer"
          >
            {isRegister ? (
              <span className="flex items-center justify-center gap-2">
                Já tem conta? 
                <span className="text-pink-600 group-hover:underline">Entrar</span>
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                Não tem conta? 
                <span className="text-pink-600 group-hover:underline">Cadastrar</span>
              </span>
            )}
          </button>
        </div>

        {/* Info Box */}
        <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200">
          <p className="text-sm font-bold text-blue-700 mb-1">Para testar o sistema:</p>
          <p className="text-sm text-blue-600">
            Use qualquer email válido e senha com 3 ou mais caracteres
          </p>
        </div>
      </div>
    </div>
  );
}