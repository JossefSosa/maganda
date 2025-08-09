import { Heart, Star } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import Image from "next/image"

export default function ProductsSection({ products, favorites, setSelectedProduct, toggleFavorite }: {
    products: any[],
    favorites: Set<number>,
    setSelectedProduct: (product: any) => void,
    toggleFavorite: (productId: number) => void
}) {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Productos Destacados</h2>
                <p className="text-gray-600 text-lg">Prendas cuidadosamente seleccionadas para ti</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product: any) => (
                    <Card
                        key={product.id}
                        className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-md"
                        onClick={() => setSelectedProduct(product)}
                    >
                        <CardContent className="p-0">
                            <div className="relative overflow-hidden">
                                <Image
                                    src={product.images[0]?.imageUrl || "/placeholder.svg"}
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
                                                className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-600">({product.reviews.length})</span>
                                </div>

                                <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>
                                <p className="text-sm text-gray-600">{product.category.name}</p>

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
            {products.length === 0 && (
                <div className="text-center mb-12">
                    <p className="text-gray-500 text-lg">No hay productos destacados por el momento</p>
                </div>
            )}
        </section >
    )
}