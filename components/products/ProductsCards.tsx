"use client"

import Image from "next/image"
import { Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Product } from "@/types/products"

interface ProductsCardsProps {
    products: Product[]
    favorites: Set<string>
    toggleFavorite: (id: string) => void
    viewMode: string
    setSelectedProduct: (product: Product) => void
    setSelectedCategory: (category: string) => void
    setPriceRange: (range: [number, number]) => void
}

export default function ProductsCards({
    products,
    favorites,
    toggleFavorite,
    viewMode,
    setSelectedProduct,
    setSelectedCategory,
    setPriceRange
}: ProductsCardsProps) {
    return (
        <div>
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
                {products.map((product) => (
                    <Card
                        key={product.id}
                        className={`group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-md ${viewMode === "list" ? "flex" : ""}`}
                        onClick={() => setSelectedProduct(product)}
                    >
                        <CardContent className="p-0">
                            <div className={viewMode === "list" ? "flex" : ""}>
                                <div className={`relative overflow-hidden ${viewMode === "list" ? "w-48 flex-shrink-0" : ""}`}>
                                    <Image
                                        src={product.images[0]?.imageUrl || "/placeholder.svg"}
                                        alt={product.name}
                                        width={400}
                                        height={500}
                                        className={`object-cover group-hover:scale-105 transition-transform duration-300 ${viewMode === "list" ? "w-48 h-48" : "w-full h-80"}`}
                                    />
                                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                                        {product.isNew && <Badge className="bg-black text-white">NUEVO</Badge>}
                                        {product.isSale && <Badge className="bg-red-500 text-white">OFERTA</Badge>}
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            toggleFavorite(product.id)
                                        }}
                                    >
                                        <Heart className={`h-5 w-5 ${favorites.has(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
                                    </Button>
                                </div>

                                <div className={`space-y-3 ${viewMode === "list" ? "flex-1 p-6" : "p-6"}`}>
                                    <div className="flex items-center gap-2">
                                        {(() => {
                                            const ratings = product.reviews.map((r: any) => r.rating)
                                            const avgRating = ratings.length ? ratings.reduce((a: any, b: any) => a + b, 0) / ratings.length : 0
                                            return (
                                                <>
                                                    <div className="flex items-center">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className={`h-4 w-4 ${i < Math.round(avgRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                                                        ))}
                                                    </div>
                                                    <span className="text-sm text-gray-600">({product.reviews.length})</span>
                                                </>
                                            )
                                        })()}
                                    </div>

                                    <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>
                                    <p className="text-sm text-gray-600">{product.category?.name}</p>

                                    {viewMode === "list" && (
                                        <p className="text-sm text-gray-700 line-clamp-2">{product.description}</p>
                                    )}

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                                            {product.originalPrice && (
                                                <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {products.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No se encontraron productos con los filtros seleccionados.</p>
                    <Button
                        variant="outline"
                        className="mt-4"
                        onClick={() => {
                            setSelectedCategory("Todos")
                            setPriceRange([0, 300])
                        }}
                    >
                        Limpiar Filtros
                    </Button>
                </div>
            )}
        </div>
    )
}
