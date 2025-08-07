"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import ProductModal from "@/components/product-modal"
import { Product } from "@/types/products"
import FiltersSidebar from "@/components/products/FiltersSidebar"
import Toolbar from "@/components/products/Toolbar"
import ProductsCards from "@/components/products/ProductsCards"

// Página principal de productos
export default function ProductsPage({
    categories,
    allProducts,
}: {
    categories: string[]
    allProducts: any,
}) {
    // Estado para el producto seleccionado (modal)
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    // Estado para productos marcados como favoritos (por ID)
    const [favorites, setFavorites] = useState<Set<string>>(new Set())
    // Estado de la vista (grid o lista)
    const [viewMode, setViewMode] = useState("grid")
    // Estado para el criterio de ordenamiento
    const [sortBy, setSortBy] = useState("featured")
    // Estado de la categoría seleccionada
    const [selectedCategory, setSelectedCategory] = useState("Todos")
    // Estado del rango de precio seleccionado
    const [priceRange, setPriceRange] = useState([0, 300])
    // Alternar un producto como favorito (agregar o quitar del Set)
    const toggleFavorite = (productId: string) => {
        const updatedFavorites = new Set(favorites)
        if (updatedFavorites.has(productId)) {
            updatedFavorites.delete(productId)
        } else {
            updatedFavorites.add(productId)
        }
        setFavorites(updatedFavorites)
    }
    // Filtrado de productos por categoría y rango de precio
    const filteredProducts = allProducts.filter((product: any) => {
        const categoryMatch =
            selectedCategory === "Todos" || product.category?.name === selectedCategory
        const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
        return categoryMatch && priceMatch
    })
    // Ordenamiento de productos según el criterio seleccionado
    const sortedProducts = [...filteredProducts].sort((productA, productB) => {
        const averageRatingA = productA.reviews.length
            ? productA.reviews.reduce((sum: number, review: any) => sum + review.rating, 0) / productA.reviews.length
            : 0

        const averageRatingB = productB.reviews.length
            ? productB.reviews.reduce((sum: number, review: any) => sum + review.rating, 0) / productB.reviews.length
            : 0

        switch (sortBy) {
            case "price-low":
                return productA.price - productB.price
            case "price-high":
                return productB.price - productA.price
            case "rating":
                return averageRatingB - averageRatingA
            case "newest":
                return Number(productB.isNew) - Number(productA.isNew)
            default:
                return 0
        }
    })

    // Renderizado de la página de productos
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navegación superior */}
            <Navigation />

            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Encabezado */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Productos</h1>
                    <p className="text-gray-600 text-lg">
                        Descubre nuestras colecciones completas de moda y accesorios.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filtros laterales (categoría y precio) */}
                    <FiltersSidebar
                        categories={categories}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                    />

                    {/* Sección principal de productos */}
                    <div className="flex-1">
                        {/* Barra de herramientas (ordenamiento y vista) */}
                        <Toolbar
                            viewMode={viewMode}
                            setViewMode={setViewMode}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                            total={sortedProducts.length}
                        />

                        {/* Tarjetas de productos */}
                        <ProductsCards
                            products={sortedProducts}
                            favorites={favorites}
                            toggleFavorite={toggleFavorite}
                            viewMode={viewMode}
                            setSelectedProduct={setSelectedProduct}
                            setSelectedCategory={setSelectedCategory}
                            setPriceRange={setPriceRange}
                        />
                    </div>
                </div>
            </div>

            {/* Modal de detalles del producto */}
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    isOpen={!!selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </div>
    )
}
