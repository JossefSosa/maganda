import Image from "next/image"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Heart, MessageCircle, Star } from "lucide-react"
import { Badge } from "../ui/badge"

export default function CollectionsDetail({
    selectedCollection,
    collectionProducts,
    setSelectedProduct,
    setSelectedCollection,
    favorites,
    toggleFavorite
}: {
    selectedCollection: any
    collectionProducts: Record<string, any[]>
    setSelectedProduct: (product: any) => void
    setSelectedCollection: (collection: any) => void
    favorites: Set<string>
    toggleFavorite: (productId: string) => void
}) {
    return (
        <>
            <div className="mb-8">
                <Button variant="ghost" onClick={() => setSelectedCollection(null)} className="mb-4">
                    ← Volver a Colecciones
                </Button>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden mb-12 bg-gradient-to-r from-gray-800 to-gray-600">
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative h-full flex items-center justify-center text-white">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-2">{selectedCollection.name}</h2>
                        <p className="text-lg">{selectedCollection.description}</p>
                        <p className="text-sm text-gray-300 mt-2">{selectedCollection.productCount} productos</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {(collectionProducts[selectedCollection.id] || []).map((product) => (
                    <Card
                        key={product.id}
                        className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-md"
                        onClick={() => setSelectedProduct(product)}
                    >
                        <CardContent className="p-0">
                            <div className="relative overflow-hidden">
                                <Image
                                    src={product.images[0].imageUrl || "/placeholder.svg"}
                                    alt={product.name}
                                    width={400}
                                    height={500}
                                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
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
                                    <Heart
                                        className={`h-5 w-5 ${favorites.has(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
                                    />
                                </Button>
                            </div>

                            <div className="p-6 space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-4 w-4 ${i < Math.floor(product.reviews.length || 0) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-600">({product.reviews?.length || 0})</span>
                                </div>

                                <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>
                                <p className="text-sm text-gray-600">{product.category?.name || "Sin categoría"}</p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                                        {product.originalPrice && (
                                            <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {(!collectionProducts[selectedCollection.id] || collectionProducts[selectedCollection.id].length === 0) && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">Esta colección estará disponible próximamente.</p>
                    <Button variant="outline" className="mt-4" onClick={() => setSelectedCollection(null)}>
                        Ver Otras Colecciones
                    </Button>
                </div>
            )}
        </>
    )
}