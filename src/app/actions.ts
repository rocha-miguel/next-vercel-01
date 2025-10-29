"use server";

import { revalidatePath } from 'next/cache';

// Simulação de um banco de dados em memória para as avaliações
export interface Review {
  id: number;
  author: string;
  review: string;
  createdAt: Date;
}

const reviews: Review[] = [
  { id: 1, review: "Produto excelente, superou minhas expectativas!", author: "Cliente Satisfeito", createdAt: new Date() }
];

export async function getReviews(): Promise<Review[]> {
  // Em um app real, você buscaria isso do seu banco de dados
  console.log("Buscando avaliações no servidor...");
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simula latência da rede
  return reviews.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

export interface FormState {
  message: string;
  errors?: {
    author?: string[];
    review?: string[];
  };
  success: boolean;
}

export async function submitReview(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Simula latência para vermos o estado pendente
  await new Promise(resolve => setTimeout(resolve, 1000));

  const author = formData.get('author') as string;
  const review = formData.get('review') as string;

  // Validação manual simples
  if (!author || author.trim().length < 2) {
    return {
      message: "Erro de validação. Por favor, corrija os campos.",
      errors: { author: ["O nome deve ter pelo menos 2 caracteres."] },
      success: false,
    };
  }
  if (!review || review.trim().length < 10) {
    return {
      message: "Erro de validação. Por favor, corrija os campos.",
      errors: { review: ["A avaliação deve ter pelo menos 10 caracteres."] },
      success: false,
    };
  }

  const newReview: Review = {
    id: reviews.length + 2,
    author: author.trim(),
    review: review.trim(),
    createdAt: new Date(),
  };

  reviews.push(newReview);
  revalidatePath('/');

  return { message: "Avaliação enviada com sucesso!", success: true };
}