import { NextResponse } from "next/server";
import { products } from "@/lib/data";

export async function GET(
    request: Request,
    { params }: { params: { [key: string]: string } } 
) {
    const id = parseInt(params.id);
    const product = products.find((p) => p.id === id);

    if (!product) {
        return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 });
    }

    return NextResponse.json(product);
}

export async function PUT(
    request: Request,
    { params }: { params: { [key: string]: string } }
) {
    const id = parseInt(params.id);
    const index = products.findIndex((p) => p.id === id);

    if (index < 0) {
        return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 });
    }

    const updatedProduct = await request.json();
    products[index] = { ...updatedProduct, id };

    return NextResponse.json(products[index]);
}

export async function DELETE(
    request: Request,
    { params }: { params: { [key: string]: string } }
) {
    const id = parseInt(params.id);
    const index = products.findIndex((p) => p.id === id);

    if (index < 0) {
        return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 });
    }

    products.splice(index, 1);
    return NextResponse.json({ id });
}
