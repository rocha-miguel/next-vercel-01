export async function PromoBanner() {
  // Simula uma busca de dados rápida para o banner
  await new Promise(resolve => setTimeout(resolve, 5000)); 
  return <div className="bg-blue-500 text-white p-4 rounded-lg my-4">
    <h3 className="text-lg font-bold">Oferta Especial!</h3>
    <p>Use o cupom NEXT10 para 10% de desconto.</p>
  </div>;
}