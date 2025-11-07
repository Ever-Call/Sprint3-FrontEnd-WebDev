import { useEffect, useState } from "react"
import { ShoppingCart, Plus, Minus, Trash2, X } from "lucide-react"

export default function Loja() {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cart, setCart] = useState({ itens: [], total: 0 })
  const [showCart, setShowCart] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("todos")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/loja.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data.produtos)
        setLoading(false)
      })
      .catch(error => {
        console.error('Erro ao carregar produtos:', error)
        setLoading(false)
      })
  }, [])

  const categories = ["todos", ...new Set(products.map(p => p.categoria))]

  const filteredProducts = selectedCategory === "todos" 
    ? products 
    : products.filter(p => p.categoria === selectedCategory)

  const updateCart = (product, quantity) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.itens.findIndex(item => item.produto.id === product.id)
      let newItens = [...prevCart.itens]

      if (existingItemIndex >= 0) {
        const newQuantity = newItens[existingItemIndex].qtd + quantity
        
        if (newQuantity <= 0) {
          newItens.splice(existingItemIndex, 1)
        } else {
          newItens[existingItemIndex] = {
            ...newItens[existingItemIndex],
            qtd: newQuantity
          }
        }
      } else if (quantity > 0) {
        newItens.push({
          produto: product,
          qtd: quantity,
          preco: product.preco
        })
      }

      const newTotal = newItens.reduce((sum, item) => sum + (item.preco * item.qtd), 0)

      return { itens: newItens, total: newTotal }
    })
  }

  const getCartItemQuantity = (productId) => {
    const item = cart.itens.find(item => item.produto.id === productId)
    return item ? item.qtd : 0
  }

  const clearCart = () => {
    setCart({ itens: [], total: 0 })
  }

  const totalItems = cart.itens.reduce((sum, item) => sum + item.qtd, 0)

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 p-8 mb-8">
          <div className="md:flex justify-between items-center">
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Loja da Passa a Bola
              </h1>
              <p className="text-gray-600">Compre os melhores produtos voltado ao publico feminino ⚽️</p>
            </div>
            
            {/* Botão do Carrinho */}
            <button
              onClick={() => setShowCart(true)}
              className="cursor-pointer w-full md:w-auto mt-5 md:mt-0 relative bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="font-semibold">Carrinho</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Categorias */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-white/50 p-6 mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'cursor-pointer bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading ? (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-gray-500">
              <div className="animate-spin w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full mb-4"></div>
              <p className="text-lg">Carregando produtos...</p>
            </div>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              const quantity = getCartItemQuantity(product.id)
              return (
                <div
                  key={product.id}
                  className="group bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div 
                    onClick={() => setSelectedProduct(product)}
                    className="cursor-pointer"
                  >
                    <div className="relative overflow-hidden aspect-square">
                      <img 
                        src={product.imagens[0]} 
                        alt={product.nome}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {product.estoque < 10 && (
                        <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Últimas unidades!
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full capitalize">
                        {product.categoria}
                      </span>
                      <h2 className="font-bold text-lg text-gray-800 mt-3 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2">
                        {product.nome}
                      </h2>
                      <p className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                        R$ {product.preco.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Estoque: {product.estoque} unidades
                      </p>
                    </div>
                  </div>

                  {/* Controles do Carrinho */}
                  <div className="px-6 pb-6">
                    {quantity === 0 ? (
                      <button
                        onClick={() => updateCart(product, 1)}
                        disabled={product.estoque === 0}
                        className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                          product.estoque === 0
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'cursor-pointer bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:shadow-lg hover:-translate-y-0.5 active:scale-95'
                        }`}
                      >
                        {product.estoque === 0 ? 'Sem Estoque' : 'Adicionar ao Carrinho'}
                      </button>
                    ) : (
                      <div className="flex items-center justify-between bg-gray-100 rounded-xl p-2">
                        <button
                          onClick={() => updateCart(product, -1)}
                          className="cursor-pointer bg-white text-pink-600 w-10 h-10 rounded-lg hover:bg-pink-100 transition-colors flex items-center justify-center"
                        >
                          <Minus className="w-5 h-5" />
                        </button>
                        <span className="font-bold text-lg">{quantity}</span>
                        <button
                          onClick={() => updateCart(product, 1)}
                          disabled={quantity >= product.estoque}
                          className={`w-10 h-10 rounded-lg transition-colors flex items-center justify-center ${
                            quantity >= product.estoque
                              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                              : 'cursor-pointer bg-white text-pink-600 hover:bg-pink-100'
                          }`}
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )
            })
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-gray-500">
              <p className="text-lg">Nenhum produto encontrado nesta categoria</p>
            </div>
          )}
        </div>

        {/* Modal do Produto */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4 z-50 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-in slide-in-from-bottom-4 duration-300">
              <button
                className="cursor-pointer absolute top-6 right-6 w-10 h-10 bg-red-100 hover:bg-red-200 text-red-600 rounded-full flex items-center justify-center transition-colors z-10 shadow-lg"
                onClick={() => setSelectedProduct(null)}
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="p-8 lg:flex lg:gap-8">
                <div className="lg:w-1/2">
                  <img 
                    src={selectedProduct.imagens[0]} 
                    alt={selectedProduct.nome}
                    className="w-full rounded-2xl shadow-lg"
                  />
                </div>
                
                <div className="lg:w-1/2 mt-6 lg:mt-0">
                  <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full capitalize">
                    {selectedProduct.categoria}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-800 mt-4 mb-4 leading-tight">
                    {selectedProduct.nome}
                  </h2>
                  <p className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    R$ {selectedProduct.preco.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-600 mb-6">
                    Estoque disponível: <span className="font-semibold">{selectedProduct.estoque} unidades</span>
                  </p>
                  
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {selectedProduct.detalhes.descricao}
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-gray-500">Material:</span>
                        <p className="font-semibold">{selectedProduct.detalhes.material}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Marca:</span>
                        <p className="font-semibold">{selectedProduct.detalhes.marca}</p>
                      </div>
                      {selectedProduct.detalhes.tamanhos && (
                        <div className="col-span-2">
                          <span className="text-gray-500">Tamanhos:</span>
                          <p className="font-semibold">{selectedProduct.detalhes.tamanhos.join(', ')}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {getCartItemQuantity(selectedProduct.id) === 0 ? (
                    <button 
                      onClick={() => {
                        updateCart(selectedProduct, 1)
                        setSelectedProduct(null)
                      }}
                      disabled={selectedProduct.estoque === 0}
                      className={`w-full px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                        selectedProduct.estoque === 0
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'cursor-pointer bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:shadow-xl hover:-translate-y-1 active:scale-95'
                      }`}
                    >
                      {selectedProduct.estoque === 0 ? 'Produto Esgotado' : 'Adicionar ao Carrinho'}
                    </button>
                  ) : (
                    <div className="flex items-center justify-between bg-gray-100 rounded-xl p-4">
                      <button
                        onClick={() => updateCart(selectedProduct, -1)}
                        className="cursor-pointer bg-white text-pink-600 w-12 h-12 rounded-lg hover:bg-pink-100 transition-colors flex items-center justify-center"
                      >
                        <Minus className="w-6 h-6" />
                      </button>
                      <span className="font-bold text-2xl">{getCartItemQuantity(selectedProduct.id)}</span>
                      <button
                        onClick={() => updateCart(selectedProduct, 1)}
                        disabled={getCartItemQuantity(selectedProduct.id) >= selectedProduct.estoque}
                        className={`w-12 h-12 rounded-lg transition-colors flex items-center justify-center ${
                          getCartItemQuantity(selectedProduct.id) >= selectedProduct.estoque
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'cursor-pointer bg-white text-pink-600 hover:bg-pink-100'
                        }`}
                      >
                        <Plus className="w-6 h-6" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal do Carrinho */}
        {showCart && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-end p-4 z-50 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md h-full overflow-y-auto animate-in slide-in-from-right duration-300 flex flex-col">
              <div className="sticky top-0 bg-white p-6 border-b z-10 rounded-t-3xl">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Meu Carrinho
                  </h2>
                  <button
                    onClick={() => setShowCart(false)}
                    className="cursor-pointer w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 p-6">
                {cart.itens.length === 0 ? (
                  <div className="text-center py-16">
                    <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Seu carrinho está vazio</p>
                  </div>
                ) : (
                  <>
                    {cart.itens.map(item => (
                      <div key={item.produto.id} className="flex gap-4 bg-gray-50 rounded-2xl p-4 mb-4">
                        <img 
                          src={item.produto.imagens[0]} 
                          alt={item.produto.nome}
                          className="w-20 h-20 object-cover rounded-xl"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2 text-sm">{item.produto.nome}</h3>
                          <p className="text-pink-600 font-bold">R$ {item.preco.toFixed(2)}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateCart(item.produto, -1)}
                              className="cursor-pointer bg-white w-7 h-7 rounded-lg hover:bg-pink-100 transition-colors flex items-center justify-center"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-semibold w-8 text-center">{item.qtd}</span>
                            <button
                              onClick={() => updateCart(item.produto, 1)}
                              disabled={item.qtd >= item.produto.estoque}
                              className={`w-7 h-7 rounded-lg transition-colors flex items-center justify-center ${
                                item.qtd >= item.produto.estoque
                                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                  : 'cursor-pointer bg-white hover:bg-pink-100'
                              }`}
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => updateCart(item.produto, -item.qtd)}
                              className="cursor-pointer ml-auto bg-red-100 text-red-600 w-7 h-7 rounded-lg hover:bg-red-200 transition-colors flex items-center justify-center"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>

              {cart.itens.length > 0 && (
                <div className="sticky bottom-0 bg-white border-t p-6 rounded-b-3xl">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-semibold text-gray-800">Total:</span>
                    <span className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                      R$ {cart.total.toFixed(2)}
                    </span>
                  </div>
                  <button 
                    onClick={() => {
                      alert('Compra finalizada com sucesso! 🎉')
                      clearCart()
                      setShowCart(false)
                    }}
                    className="cursor-pointer w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-95 mb-2"
                  >
                    Finalizar Compra
                  </button>
                  <button 
                    onClick={clearCart}
                    className="cursor-pointer w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                  >
                    Limpar Carrinho
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}