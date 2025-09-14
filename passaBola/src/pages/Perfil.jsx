export default function Perfil({ user }) {
  return (
    <div className="max-w-2xl mx-auto p-6 mt-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-pink-600 mb-6 text-center">
          Meu Perfil
        </h1>

        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white font-bold text-2xl">
              {user.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Nome:</label>
            <div className="bg-gray-50 border rounded-lg px-4 py-2">
              {user.name}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email:</label>
            <div className="bg-gray-50 border rounded-lg px-4 py-2">
              {user.email}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Senha:</label>
            <div className="bg-gray-50 border rounded-lg px-4 py-2">
              ••••••••
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Editar Perfil
          </button>
          <button className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors">
            Alterar Senha
          </button>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-700">
            <strong>Nota:</strong> Esta é uma versão de demonstração. 
            As funcionalidades de edição não estão implementadas.
          </p>
        </div>
      </div>
    </div>
  );
}