import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import RootLayout from "./pages/RootLayout";
import Noticias from "./pages/Noticias";
import Copa from "./pages/Copa";
import GerenciarTime from "./pages/GerenciarTime";
import Inicio from "./pages/Inicio";
import Perfil from "./pages/Perfil";
import Login from "./pages/Login";

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    // Validação simples
    if (email && password.length >= 3) {
      setUser({ email, name: email.split('@')[0] });
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setUser(null);
  };

  // Se não estiver logado, mostra tela de login
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  // Se estiver logado, mostra a aplicação
  return (
    <Routes>
      <Route path="/" element={<RootLayout user={user} onLogout={handleLogout} />}>
        <Route index element={<Navigate to="/inicio" replace />} />
        <Route path="inicio" element={<Inicio />} />
        <Route path="noticias" element={<Noticias />} />
        <Route path="copa" element={<Copa />} />
        <Route path="gerenciarTime" element={<GerenciarTime />} />
        <Route path="perfil" element={<Perfil user={user} />} />
      </Route>
    </Routes>
  );
}