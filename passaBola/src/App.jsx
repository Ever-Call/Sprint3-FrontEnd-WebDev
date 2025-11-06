import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import RootLayout from "./pages/RootLayout";
import Noticias from "./pages/Noticias";
import Copa from "./pages/Copa";
import Gerenciador from "./pages/Gerenciador";
import Inicio from "./pages/Inicio";
import Perfil from "./pages/Perfil";
import Entrar from "./pages/Entrar";
import Loja from "./pages/Loja";

export default function App() {
  const [user, setUser] = useState(null);
  const[users, setUsers]=useState([
    // Usuários de exemplo
    {email:"ana@gmail.com",name:"ana", password:"123"},
    {email:"bruno@gmail.com",name:"bruno", password:"123"},
    {email:"carlos@gmail.com",name:"carlos", password:"123"}
  ])

  const handleLogin = (email, password) => {
    if((users.find((user)=>user.email===email && user.password===password))){
      setUser({ email, name: email.split('@')[0] });
      return true;
    }
    return false;
  };
  
  const handleRegister = (email, password) => {
    if(!(users.find((user)=>user.email===email))){
      const name = email.split('@')[0];
      const newUser = { email: email, name: name, password: password };
      setUsers([...users, newUser]);
      setUser({ email: email, name: name});
      return true;
    }
    return false;
  }

  const handleLogout = () => {
    setUser(null);
  };

  // Se não estiver logado, mostra tela de login
  if (!user) {
    console.log("Não logado");
    return <Entrar onLogin={handleLogin} onRegister={handleRegister} />;
  }else{
    console.log("Logado como:", user);      
  }


  // Se estiver logado, mostra a aplicação
  return (
    <Routes>
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/copa" element={<Copa />} />
        <Route path="/gerenciador" element={<Gerenciador />} />
        <Route path="/perfil" element={<Perfil user={user} onLogout={handleLogout} />} />
        <Route path="/loja" element={<Loja />} />
      </Route>
    </Routes>
  );
}