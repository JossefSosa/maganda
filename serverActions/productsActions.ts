"use server"

import { getFeaturedProducts, getProductById, listProducts } from "@/services/productService"

export async function getProductByIdAction(productId: string) {
    try {
        const product = await getProductById(productId)
        return { product };
    } catch (err) {
        return { error: "Failed to load product" }
    }
}

export async function getAllProductsAction() {
    try {
        const products = await listProducts()
        return products;
    } catch (err) {
        // return { error: "Failed to load products" }
        return [];
    }
}

export async function getProductsFeaturedAction() {
    try {
        const products = await getFeaturedProducts()
        return products;
    } catch (err) {
        console.log('err :', err);
        // return { error: "Failed to load products" }
        return [];
    }
}