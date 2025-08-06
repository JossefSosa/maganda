"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Star, Filter, Grid, List, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import Navigation from "@/components/navigation"
import ProductModal from "@/components/product-modal"

const allProducts = [
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
      "Falda midi con pliegues que aporta movimiento y elegancia. Un básico imprescindible en tu guardarroba.",
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
    id: 8,
    name: "Jeans Skinny Negros",
    price: 85.0,
    category: "Jeans",
    rating: 4.4,
    reviews: 234,
    images: [
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
      "/placeholder.svg?height=400&width=300",
    ],
    description: "Jeans skinny de corte perfecto que estiliza la figura. Confeccionados en denim de alta calidad.",
    sizes: ["24", "26", "28", "30", "32", "34"],
    colors: ["Negro", "Azul Oscuro", "Gris"],
  },
]

const categories = ["Todos", "Vestidos", "Blazers", "Pantalones", "Blusas", "Faldas", "Abrigos", "Camisas", "Jeans"]

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

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [favorites, setFavorites] = useState(new Set())
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [priceRange, setPriceRange] = useState([0, 300])
  const [showFilters, setShowFilters] = useState(false)

  const toggleFavorite = (productId: any) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId)
    } else {
      newFavorites.add(productId)
    }
    setFavorites(newFavorites)
  }

  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch = selectedCategory === "Todos" || product.category === selectedCategory
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
    return categoryMatch && priceMatch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.isNew ? 1 : -1
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Todos los Productos</h1>
          <p className="text-gray-600 text-lg">Descubre nuestra colección completa de moda femenina</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <div className="lg:hidden">
              <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="w-full">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
            </div>

            <div className={`space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
              {/* Categories */}
              <Card>
                <div className="p-4">
                  <h3 className="font-semibold mb-4">Categorías</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={category}
                          checked={selectedCategory === category}
                          onCheckedChange={() => setSelectedCategory(category)}
                        />
                        <Label htmlFor={category} className="text-sm cursor-pointer">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Price Range */}
              <Card>
                <div className="p-4">
                  <h3 className="font-semibold mb-4">Rango de Precio</h3>
                  <div className="space-y-4">
                    <Slider value={priceRange} onValueChange={setPriceRange} max={300} step={5} className="w-full" />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Filters */}
              <Card>
                <div className="p-4">
                  <h3 className="font-semibold mb-4">Filtros Rápidos</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="new" />
                      <Label htmlFor="new" className="text-sm cursor-pointer">
                        Nuevos
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="sale" />
                      <Label htmlFor="sale" className="text-sm cursor-pointer">
                        En Oferta
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="high-rated" />
                      <Label htmlFor="high-rated" className="text-sm cursor-pointer">
                        Mejor Valorados
                      </Label>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">{sortedProducts.length} productos encontrados</span>
              </div>

              <div className="flex items-center space-x-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Destacados</SelectItem>
                    <SelectItem value="newest">Más Nuevos</SelectItem>
                    <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                    <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                    <SelectItem value="rating">Mejor Valorados</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
              {sortedProducts.map((product) => (
                <Card
                  key={product.id}
                  className={`group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-md ${viewMode === "list" ? "flex" : ""
                    }`}
                >
                  <CardContent className="p-0">
                    <div className={`${viewMode === "list" ? "flex" : ""}`}>
                      <div className={`relative overflow-hidden ${viewMode === "list" ? "w-48 flex-shrink-0" : ""}`}>
                        <Image
                          src={product.images[0] || "/placeholder.svg"}
                          alt={product.name}
                          width={400}
                          height={500}
                          className={`object-cover group-hover:scale-105 transition-transform duration-300 ${viewMode === "list" ? "w-48 h-48" : "w-full h-80"
                            }`}
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

                      <div className={`space-y-3 ${viewMode === "list" ? "flex-1 p-6" : "p-6"}`}>
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
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedProducts.length === 0 && (
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
        </div>
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} isOpen={!!selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  )
}
