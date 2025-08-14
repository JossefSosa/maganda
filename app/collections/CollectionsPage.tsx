"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import ProductModal from "@/components/product-modal"
import { Product } from "@/types/products"
import CollectionsDetail from "@/components/collections/CollectionsDetail"
import FeaturedCollection from "@/components/collections/FeaturedCollection"
import CollectionGrid from "@/components/collections/CollectionsGrid"

type Collection = {
    id: string
    name: string
    description: string
    imageUrl?: string
    productCount: number
    featured?: boolean
}

type Props = {
    collections: Collection[]
    collectionProducts: Record<string, Product[]>
}

export default function CollectionsPage({ collections = [], collectionProducts = {} }: Props) {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null)
    const [favorites, setFavorites] = useState<Set<string>>(new Set())

    const toggleFavorite = (productId: string) => {
        const newFavorites = new Set(favorites)
        if (newFavorites.has(productId)) {
            newFavorites.delete(productId)
        } else {
            newFavorites.add(productId)
        }
        setFavorites(newFavorites)
    }
    const hasCollections = collections && collections.length > 0

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            <div className="max-w-7xl mx-auto px-4 py-8">
                {!selectedCollection ? (
                    <>
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestras Colecciones</h1>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                Descubre nuestras colecciones cuidadosamente curadas, cada una diseñada para diferentes momentos y estilos de vida
                            </p>
                        </div>

                        {hasCollections ? (
                            <>
                                {/* Featured Collection */}
                                <FeaturedCollection
                                    collections={collections}
                                    setSelectedCollection={setSelectedCollection}
                                />

                                {/* Collections Grid */}
                                <CollectionGrid
                                    collections={collections}
                                    setSelectedCollection={setSelectedCollection}
                                />
                            </>
                        ) : (
                            <p className="text-center text-gray-500">No hay colecciones disponibles.</p>
                        )}
                    </>
                ) : (
                    <>
                        {/* Collection Detail View */}
                        {selectedCollection && collectionProducts[selectedCollection.id] ? (
                            <CollectionsDetail
                                collectionProducts={collectionProducts}
                                favorites={favorites}
                                selectedCollection={selectedCollection}
                                setSelectedProduct={setSelectedProduct}
                                toggleFavorite={toggleFavorite}
                                setSelectedCollection={setSelectedCollection}
                            />
                        ) : (
                            <p className="text-center text-gray-500">No hay productos para esta colección.</p>
                        )}
                    </>
                )}
            </div>

            {selectedProduct && (
                <ProductModal product={selectedProduct} isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} />
            )}
        </div>
    )
}