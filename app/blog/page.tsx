"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Navigation from "@/components/navigation"

const blogPosts = [
  {
    id: 1,
    title: "La Historia de STYLISH: 10 Años de Elegancia",
    slug: "historia-stylish-10-anos",
    excerpt:
      "Descubre cómo comenzó nuestra marca y el camino que nos ha llevado a convertirnos en referente de la moda femenina.",
    content:
      "Hace 10 años, STYLISH nació de un sueño: crear prendas que empoderen a las mujeres y las hagan sentir seguras de sí mismas...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Marca",
    author: "María González",
    date: "2024-01-20",
    readTime: "5 min",
    featured: true,
    tags: ["historia", "marca", "aniversario"],
  },
  {
    id: 2,
    title: "Colaboración Exclusiva con Isabella Martín",
    slug: "colaboracion-isabella-martin",
    excerpt:
      "Nuestra nueva colección cápsula diseñada junto a la reconocida diseñadora Isabella Martín ya está disponible.",
    content:
      "La colaboración entre STYLISH e Isabella Martín representa la fusión perfecta entre elegancia clásica y modernidad...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Colaboraciones",
    author: "Ana López",
    date: "2024-01-18",
    readTime: "4 min",
    featured: true,
    tags: ["colaboración", "diseñador", "colección"],
  },
  {
    id: 3,
    title: "STYLISH en la Semana de la Moda de Madrid 2024",
    slug: "semana-moda-madrid-2024",
    excerpt: "Revive los mejores momentos de nuestra participación en la Mercedes-Benz Fashion Week Madrid.",
    content:
      "La pasarela de STYLISH en la Semana de la Moda de Madrid fue un éxito rotundo, presentando nuestra nueva colección Primavera-Verano...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Pasarelas",
    author: "Carmen Ruiz",
    date: "2024-01-15",
    readTime: "6 min",
    tags: ["pasarela", "madrid", "fashion week"],
  },
  {
    id: 4,
    title: "Próximo Evento: Trunk Show Exclusivo",
    slug: "trunk-show-exclusivo-febrero",
    excerpt:
      "Te invitamos a nuestro evento exclusivo donde podrás ver en primicia las nuevas colecciones y disfrutar de descuentos especiales.",
    content: "El próximo 15 de febrero, STYLISH abrirá las puertas de su showroom para un evento exclusivo...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Eventos",
    author: "Laura Fernández",
    date: "2024-01-12",
    readTime: "3 min",
    tags: ["evento", "trunk show", "exclusivo"],
  },
  {
    id: 5,
    title: "Sostenibilidad: Nuestro Compromiso con el Futuro",
    slug: "sostenibilidad-compromiso-futuro",
    excerpt:
      "Conoce las iniciativas que hemos implementado para hacer de STYLISH una marca más sostenible y responsable.",
    content: "En STYLISH creemos que la moda debe ser bella, pero también responsable con nuestro planeta...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Marca",
    author: "Elena Torres",
    date: "2024-01-10",
    readTime: "7 min",
    tags: ["sostenibilidad", "medio ambiente", "responsabilidad"],
  },
  {
    id: 6,
    title: "Behind the Scenes: Shooting de la Nueva Campaña",
    slug: "behind-scenes-nueva-campana",
    excerpt: "Un vistazo exclusivo al proceso creativo detrás de nuestra última campaña publicitaria.",
    content:
      "Te llevamos detrás de cámaras para mostrarte cómo se creó nuestra campaña más ambiciosa hasta la fecha...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Marca",
    author: "Sofía Morales",
    date: "2024-01-08",
    readTime: "5 min",
    tags: ["campaña", "fotografía", "behind the scenes"],
  },
  {
    id: 7,
    title: "Colaboración con Artistas Locales",
    slug: "colaboracion-artistas-locales",
    excerpt:
      "Descubre cómo estamos apoyando el talento local a través de colaboraciones únicas con artistas emergentes.",
    content:
      "STYLISH se enorgullece de colaborar con artistas locales para crear piezas únicas que fusionan moda y arte...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Colaboraciones",
    author: "Patricia Vega",
    date: "2024-01-05",
    readTime: "4 min",
    tags: ["arte", "colaboración", "talento local"],
  },
  {
    id: 8,
    title: "Fashion Week París: Próxima Parada",
    slug: "fashion-week-paris-proxima-parada",
    excerpt: "STYLISH se prepara para su debut en la Semana de la Moda de París. Te contamos todos los detalles.",
    content:
      "Después del éxito en Madrid, STYLISH se prepara para dar el salto internacional con su participación en París...",
    image: "/placeholder.svg?height=400&width=600",
    category: "Eventos",
    author: "Isabella Ramos",
    date: "2024-01-03",
    readTime: "6 min",
    tags: ["parís", "fashion week", "internacional"],
  },
]

const categories = ["Todos", "Marca", "Colaboraciones", "Pasarelas", "Eventos"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const categoryMatch = selectedCategory === "Todos" || post.category === selectedCategory
    const searchMatch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return categoryMatch && searchMatch
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog STYLISH</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubre las últimas noticias, colaboraciones, eventos y todo lo que acontece en el mundo STYLISH
          </p>
        </div>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Destacados</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-black text-white">{post.category}</Badge>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString("es-ES")}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" className="p-0 h-auto font-medium text-black hover:text-gray-700">
                        Leer más
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="mb-8 space-y-4">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-4 pr-4 py-3"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-black hover:bg-gray-800" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-black text-white">{post.category}</Badge>
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString("es-ES")}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="ghost" className="p-0 h-auto font-medium text-black hover:text-gray-700">
                          Leer más
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No se encontraron artículos con los criterios seleccionados.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory("Todos")
                    setSearchTerm("")
                  }}
                >
                  Limpiar Filtros
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Recent Posts */}
            <Card>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-4">Artículos Recientes</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`}>
                      <div className="flex gap-3 group cursor-pointer">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={80}
                          height={60}
                          className="w-20 h-15 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm text-gray-900 group-hover:text-gray-700 line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-600 mt-1">
                            {new Date(post.date).toLocaleDateString("es-ES")}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Card>

            {/* Categories */}
            <Card>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-4">Categorías</h3>
                <div className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className="flex items-center justify-between w-full text-left py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-gray-700">{category}</span>
                      <span className="text-sm text-gray-500">
                        {blogPosts.filter((post) => post.category === category).length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </Card>

            {/* Newsletter */}
            <Card>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Suscríbete para recibir las últimas noticias y artículos directamente en tu email.
                </p>
                <div className="space-y-3">
                  <Input type="email" placeholder="Tu email" />
                  <Button className="w-full bg-black hover:bg-gray-800">Suscribirse</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
