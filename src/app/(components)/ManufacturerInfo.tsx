export async function ManufacturerInfo() {
  // Simula busca de dados do fabricante
  await new Promise(resolve => setTimeout(resolve, 500));
  return (
    <div>
      <p>Fabricado por: Acme Corporation</p>
      <p>Desde: 1985</p>
    </div>
  );
}