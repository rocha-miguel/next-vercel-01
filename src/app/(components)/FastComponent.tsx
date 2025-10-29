export async function FastComponent() {
  await new Promise(resolve => setTimeout(resolve, 1000)); // 1 segundo de espera
  return <p>Componente rápido carregado!</p>;
}