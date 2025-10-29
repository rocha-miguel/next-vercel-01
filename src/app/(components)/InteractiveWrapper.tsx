"use client";

import { useState } from 'react';

export default function InteractiveWrapper({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} style={{ border: '1px solid gray', padding: '0.25rem 0.5rem', borderRadius: '5px' }}>
        {isOpen ? 'Esconder' : 'Mostrar'} Conteúdo
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
}