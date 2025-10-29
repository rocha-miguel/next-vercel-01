"use client";
import { useState } from "react";

 // Marca este como um Client Component
export function CounterComponent() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)} style={{ border: '1px solid gray', padding: '0.25rem 0.5rem', borderRadius: '5px' }}>
      Cliques: {count}
    </button>
  );
}