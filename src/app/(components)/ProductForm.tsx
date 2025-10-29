'use client'

import { Product } from "@/lib/data"
import { useEffect, useState } from "react"

interface ProductFormProps {
    product?: Product | null
    onSave: (product: Product) => void
    onCancel: () => void
}

const ProductForm = ({ product, onSave, onCancel }: ProductFormProps) => {
    const [title, setTitle] = useState<string>('')
    const [price, setPrice] = useState<string>('')

    useEffect(() => {
        if (product) {
            setTitle(product.title)
            setPrice(String(product.price))
        } else {
            setTitle('')
            setPrice(String(''))

        }

    }, [product])

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        const data: Product = {
            title,
            price: Number(price)
        }
        onSave(product?.id ? { ...data, id: product.id } : data)
    }


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <h2 className="text-green-400 text-2xl font-bold mb-4">{product ? 'Editar Produto' : 'Novo Produto'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Título</label>
                        <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border rounded text-black" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-700 font-semibold mb-2">Preço</label>
                        <input type="number" id="price" value={price} onChange={e => setPrice(e.target.value)} className="w-full p-2 border rounded text-black" required step="0.01" />
                    </div>
                    <div className="flex justify-end gap-4">
                        <button type="button" onClick={onCancel} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors cursor-pointer">
                            Cancelar
                        </button>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors cursor-pointer">
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}



export default ProductForm