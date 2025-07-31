"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Star, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import ProductModal from "@/components/product-modal"

const products = [
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
    description: "Pantalón de pierna ancha que sigue las últimas tendencias. Cómodo y versátil para cualquier ocasión.",
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
  {
    id: 5,
    name: "Falda Midi Plisada",
    price: 65.0,
    category: "Faldas",
    rating: 4.6,
    reviews: 203,
    images: [
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
    description:
      "Falda midi con pliegues que aporta movimiento y elegancia. Un básico imprescindible en tu guardarropa.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Negro", "Gris", "Azul Marino", "Camel"],
  },
  {
    id: 6,
    name: "Abrigo Largo Camel",
    price: 180.0,
    originalPrice: 220.0,
    category: "Abrigos",
    rating: 4.9,
    reviews: 45,
    images: [
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
    description: "Abrigo largo de corte clásico en color camel. Perfecto para los días fríos sin renunciar al estilo.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Camel", "Negro", "Gris"],
    isSale: true,
  },
]

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [favorites, setFavorites] = useState(new Set())

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
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">NUEVA COLECCIÓN</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Descubre las últimas tendencias en moda femenina
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-3">
            Explorar Ahora
          </Button>
        </div>
      </section>

      {/* Products Section */}
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
                    <span className="text-sm text-gray-600">({product.reviews})</span>
                  </div>

                  <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.category}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900">€{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">€{product.originalPrice}</span>
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
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Mantente al día</h2>
          <p className="text-gray-300 mb-8">Suscríbete para recibir las últimas novedades y ofertas exclusivas</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Tu email" className="flex-1 px-4 py-3 rounded-lg text-black" />
            <Button className="bg-white text-black hover:bg-gray-100">Suscribirse</Button>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal product={selectedProduct} isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  )
}
