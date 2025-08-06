"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Star, ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import ProductModal from "@/components/product-modal"

type Collection = {
  id: number
  name: string
  description: string
  image: string
  productCount: number
  featured?: boolean
}

type Product = {
  id: number
  name: string
  price: number
  originalPrice?: number
  category: string
  rating: number
  reviews: number
  images: string[]
  description: string
  sizes: string[]
  colors: string[]
  isNew?: boolean
  isSale?: boolean
}


const collections = [
  {
    id: 1,
    name: "Elegancia Urbana",
    description: "Sofisticación para el día a día en la ciudad",
    image: "/placeholder.svg?height=400&width=600",
    productCount: 24,
    featured: true,
  },
  {
    id: 2,
    name: "Oficina Chic",
    description: "Looks profesionales con un toque moderno",
    image: "/placeholder.svg?height=400&width=600",
    productCount: 18,
  },
  {
    id: 3,
    name: "Noche Glamour",
    description: "Prendas especiales para ocasiones únicas",
    image: "/placeholder.svg?height=400&width=600",
    productCount: 15,
  },
  {
    id: 4,
    name: "Casual Weekend",
    description: "Comodidad y estilo para tus días libres",
    image: "/placeholder.svg?height=400&width=600",
    productCount: 32,
  },
]

const collectionProducts: Record<number, Product[]> = {
  1: [
    {
      id: 1,
      name: "Vestido Elegante Negro",
      price: 89.99,
      originalPrice: 120.0,
      category: "Vestidos",
      rating: 4.8,
      reviews: 124,
      images: [
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
      ],
      description:
        "Vestido elegante perfecto para ocasiones especiales. Confeccionado en tela de alta calidad con un corte favorecedor que realza la silueta.",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Negro", "Azul Marino", "Burdeos"],
      isNew: true,
      isSale: true,
    },
    {
      id: 2,
      name: "Blazer Moderno Beige",
      price: 125.0,
      category: "Blazers",
      rating: 4.9,
      reviews: 89,
      images: [
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
      ],
      description:
        "Blazer contemporáneo que combina elegancia y comodidad. Ideal para looks profesionales y casuales sofisticados.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Beige", "Negro", "Blanco"],
      isNew: true,
    },
    {
      id: 3,
      name: "Pantalón Wide Leg",
      price: 75.0,
      category: "Pantalones",
      rating: 4.7,
      reviews: 156,
      images: [
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
      ],
      description:
        "Pantalón de pierna ancha que sigue las últimas tendencias. Cómodo y versátil para cualquier ocasión.",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Negro", "Camel", "Blanco"],
      isSale: true,
      originalPrice: 95.0,
    },
    {
      id: 4,
      name: "Blusa Seda Premium",
      price: 95.0,
      category: "Blusas",
      rating: 5.0,
      reviews: 67,
      images: [
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
      ],
      description: "Blusa de seda natural con acabados de lujo. Perfecta para combinar con cualquier outfit elegante.",
      sizes: ["S", "M", "L"],
      colors: ["Blanco", "Rosa Palo", "Azul Cielo"],
      isNew: true,
    },
  ],
  2: [
    {
      id: 2,
      name: "Blazer Moderno Beige",
      price: 125.0,
      category: "Blazers",
      rating: 4.9,
      reviews: 89,
      images: [
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
      ],
      description:
        "Blazer contemporáneo que combina elegancia y comodidad. Ideal para looks profesionales y casuales sofisticados.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Beige", "Negro", "Blanco"],
      isNew: true,
    },
    {
      id: 7,
      name: "Camisa Oversize Blanca",
      price: 55.0,
      category: "Camisas",
      rating: 4.5,
      reviews: 98,
      images: [
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
      ],
      description: "Camisa oversize de algodón premium. Un básico versátil que no puede faltar en tu armario.",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Blanco", "Azul Claro", "Rosa"],
      isNew: true,
    },
    {
      id: 3,
      name: "Pantalón Wide Leg",
      price: 75.0,
      category: "Pantalones",
      rating: 4.7,
      reviews: 156,
      images: [
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
        "/placeholder.svg?height=400&width=300",
      ],
      description:
        "Pantalón de pierna ancha que sigue las últimas tendencias. Cómodo y versátil para cualquier ocasión.",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Negro", "Camel", "Blanco"],
      isSale: true,
      originalPrice: 95.0,
    },
  ],
}

export default function CollectionsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null)
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

      <div className="max-w-7xl mx-auto px-4 py-8">
        {!selectedCollection ? (
          <>
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestras Colecciones</h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Descubre nuestras colecciones cuidadosamente curadas, cada una diseñada para diferentes momentos y
                estilos de vida
              </p>
            </div>

            {/* Featured Collection */}
            <div className="mb-16">
              <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-r from-gray-900 to-gray-700">
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative h-full flex items-center justify-center text-white text-center">
                  <div className="space-y-4">
                    <Badge className="bg-white text-black">COLECCIÓN DESTACADA</Badge>
                    <h2 className="text-5xl font-bold">Elegancia Urbana</h2>
                    <p className="text-xl max-w-md mx-auto">
                      Sofisticación para el día a día en la ciudad. Prendas versátiles que combinan comodidad y estilo.
                    </p>
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-gray-100"
                      onClick={() => setSelectedCollection(collections[0])}
                    >
                      Explorar Colección
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Collections Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {collections.map((collection: any) => (
                <Card
                  key={collection.id}
                  className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-md"
                  onClick={() => setSelectedCollection(collection)}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={collection.image || "/placeholder.svg"}
                        alt={collection.name}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {collection.featured && (
                        <Badge className="absolute top-4 left-4 bg-black text-white">DESTACADA</Badge>
                      )}
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-semibold text-gray-900">{collection.name}</h3>
                      <p className="text-gray-600">{collection.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{collection.productCount} productos</span>
                        <Button variant="ghost" size="sm" className="text-black hover:text-gray-700">
                          Ver Colección
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Collection Header */}
            <div className="mb-8">
              <Button variant="ghost" onClick={() => setSelectedCollection(null)} className="mb-4">
                ← Volver a Colecciones
              </Button>
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{selectedCollection.name}</h1>
                <p className="text-gray-600 text-lg">{selectedCollection.description}</p>
                <p className="text-sm text-gray-500 mt-2">{selectedCollection.productCount} productos</p>
              </div>
            </div>

            {/* Collection Hero */}
            <div className="relative h-64 rounded-xl overflow-hidden mb-12 bg-gradient-to-r from-gray-800 to-gray-600">
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative h-full flex items-center justify-center text-white">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-2">{selectedCollection.name}</h2>
                  <p className="text-lg">{selectedCollection.description}</p>
                </div>
              </div>
            </div>

            {/* Collection Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {(collectionProducts[selectedCollection.id] || []).map((product: any) => (
                <Card
                  key={product.id}
                  className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-md"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.name}
                        width={400}
                        height={500}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                        onClick={() => setSelectedProduct(product)}
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
                          className={`h-5 w-5 ${favorites.has(product.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                            }`}
                        />
                      </Button>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({product.reviews})</span>
                      </div>

                      <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-600">{product.category}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                          )}
                        </div>
                        <Button
                          size="sm"
                          className="bg-black hover:bg-gray-800"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedProduct(product)
                          }}
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Consultar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {(!collectionProducts[selectedCollection.id] || collectionProducts[selectedCollection.id].length === 0) && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Esta colección estará disponible próximamente.</p>
                <Button variant="outline" className="mt-4" onClick={() => setSelectedCollection(null)}>
                  Ver Otras Colecciones
                </Button>
              </div>
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
