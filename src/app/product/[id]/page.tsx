export default function ProductPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params

  // Mock de produto
  const product = {
    id,
    name: "Camisa Básica Unissex",
    description:
      "Camisa feita com algodão 100% orgânico, confortável e perfeita para o dia a dia.",
    price: 79.9,
    image:
      "https://images.unsplash.com/photo-1602810316725-399f16f1c087?auto=format&fit=crop&w=800&q=80",
    colors: ["Preto", "Branco", "Cinza"],
    sizes: ["P", "M", "G", "GG"],
  }

  return (
    <div className="max-w-5xl mx-auto p-8 grid md:grid-cols-2 gap-8">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600 mb-6">
            R$ {product.price.toFixed(2)}
          </p>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Cor:</label>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <span
                  key={color}
                  className="px-3 py-1 border rounded-full text-sm cursor-pointer hover:bg-gray-100"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Tamanho:</label>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="px-3 py-1 border rounded-full text-sm cursor-pointer hover:bg-gray-100"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}