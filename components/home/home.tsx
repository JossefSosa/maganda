"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import ProductModal from "@/components/product-modal"
import ProductsSection from "./ProductsSection"
import { Product } from "@/types/products"
import { Input } from "../ui/input"
import { NewsletterSection } from "./NewsletterSection"
import Link from "next/link"

export default function Home({ products }: { products: Product[] }) {
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [favorites, setFavorites] = useState<Set<number>>(new Set())


    const toggleFavorite = (productId: any) => {
        const newFavorites = new Set(favorites)
        if (newFavorites.has(productId)) {
            newFavorites.delete(productId)
        } else {
            newFavorites.add(productId)
        }
        setFavorites(newFavorites)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Hero Section */}
            <section className="relative h-[70vh] bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center text-white">
                <div className="text-center space-y-6 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">COLECCIONES</h1>
                    <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
                        Descubre las últimas tendencias en moda con nuestra nueva colección. Prendas únicas y exclusivas para destacar en cualquier ocasión.
                    </p>
                    <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-3">
                        <Link href={"collections"}>
                            Explorar Ahora
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Products Section */}
            <ProductsSection
                favorites={favorites}
                products={products}
                setSelectedProduct={setSelectedProduct}
                toggleFavorite={toggleFavorite}
            />

            {/* Newsletter Section */}
            {/* <NewsletterSection /> */}

            {selectedProduct && (
                <ProductModal product={selectedProduct} isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} />
            )}
        </div>
    )
}
