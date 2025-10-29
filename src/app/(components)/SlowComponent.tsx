export async function SlowComponent() {
  await new Promise(resolve => setTimeout(resolve, 5000)); // 5 segundos de espera
  return <p>Componente lento carregado!</p>;
}