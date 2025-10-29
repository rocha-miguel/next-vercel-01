"use client"; // Marca este como um Client Component

import { useState } from 'react';

export default function AddToCartButton({ productId }: { productId: number }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    alert(`Produto ${productId} adicionado ao carrinho!`);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000); // Reseta o estado após 2 segundos
  };

  return (
    <button 
      onClick={handleAddToCart}
      disabled={isAdded}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 cursor-pointer"
    >
      {isAdded ? 'Adicionado!' : 'Adicionar ao Carrinho'}
    </button>
  );
}