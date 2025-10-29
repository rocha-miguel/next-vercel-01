"use client";

import { submitReview, FormState } from "../actions";
import { SubmitButton } from "./SubmitButton";
import { useActionState, useEffect, useRef } from "react";

const initialState: FormState = {
  message: "",
  success: false,
};

export function ReviewForm() {
  const [state, formAction] = useActionState(submitReview, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      // Limpa o formulário após o sucesso
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="mt-6 p-4 border rounded-lg bg-white shadow-sm space-y-4">
      <h3 className="text-lg font-semibold text-black">Deixe sua Avaliação</h3>
      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">Seu Nome</label>
        <input type="text" name="author" id="author" className="w-full p-2 border rounded-md text-black" />
        {state.errors?.author && (
          <p className="text-sm text-red-500 mt-1">{state.errors.author[0]}</p>
        )}
      </div>
      <div>
        <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">Sua Avaliação</label>
        <textarea name="review" id="review" rows={3} className="w-full p-2 border rounded-md text-black"></textarea>
        {state.errors?.review && (
          <p className="text-sm text-red-500 mt-1">{state.errors.review[0]}</p>
        )}
      </div>
      
      <SubmitButton />

      {state.message && (
         <p className={`text-sm mt-2 ${state.success ? 'text-green-600' : 'text-red-600'}`}>
           {state.message}
         </p>
      )}
    </form>
  );
}