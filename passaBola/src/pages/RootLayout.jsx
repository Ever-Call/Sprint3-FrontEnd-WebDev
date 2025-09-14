import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ user, onLogout }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogout={onLogout} />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}