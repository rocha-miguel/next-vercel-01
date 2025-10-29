import { Product, products } from "@/lib/data";
import { NextResponse } from "next/server";

interface Params { id: string; }

export async function GET(request: Request, context: { params: Promise<Params> }) {
    const params = await context.params
    const id = parseInt(params.id)
    const product = products.find((p) => p.id === id)

    if (!product) {
        return NextResponse.json({ error: 'Produto não encntrado' }, { status: 404 })
    }

    return NextResponse.json(product)
}

export async function PUT(request: Request, context: { params: Promise<Params> }) {
    const params = await context.params
    const id = parseInt(params.id)
    const index = products.findIndex((p) => p.id ===id)
    if (index < 0) {
        return NextResponse.json({error: 'Produto não encntrado' }, { status: 404 })
    }

    const updatedProduct: Product = await request.json()
    products[index] = { ...updatedProduct, id}
    return NextResponse.json(products[index])

}

export async function DELETE(request: Request, context: {params: Promise<Params>}) {
    const params = await context.params
    const id = parseInt(params.id)
    const index = products.findIndex((p) => p.id ===id)
    if (index < 0) {
        return NextResponse.json({error: 'Produto não encntrado' }, { status: 404 })
    }

    products.splice(index, 1)
    return NextResponse.json({id})

}