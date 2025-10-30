import { Product, products } from "@/lib/data";
import {  NextResponse } from "next/server";


export async function GET() {
    return NextResponse.json(products)


}
export async function POST(request: Request) {
        const newProduct: Product = await request.json()

        if (!newProduct?.title || !newProduct?.price) {
            return NextResponse.json ({error: 'Dados incompletos'}, {status: 400})
        }

        const newId = products.length > 0 ? Math.max(...products.map((p) => {
            if (p.id) {
                return p.id
            }
            return 0
            
        })) + 1 : 1
        newProduct.id = newId
        products.push(newProduct)

        return NextResponse.json(newProduct, {status: 201})
    }


