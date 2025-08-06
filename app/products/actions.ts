"use server"

import { getProductById } from "@/services/productService"

export async function fetchProduct(productId: string) {
    try {
        const product = await getProductById(productId)
        return { product }
    } catch (err) {
        return { error: "Failed to load product" }
    }
}