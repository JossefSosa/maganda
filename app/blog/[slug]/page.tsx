"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Navigation from "@/components/navigation"

// Datos de ejemplo para el artículo
const blogPost = {
  id: 1,
  title: "La Historia de STYLISH: 10 Años de Elegancia",
  slug: "historia-stylish-10-anos",
  excerpt:
    "Descubre cómo comenzó nuestra marca y el camino que nos ha llevado a convertirnos en referente de la moda femenina.",
  content: `
    <p>Hace 10 años, STYLISH nació de un sueño: crear prendas que empoderen a las mujeres y las hagan sentir seguras de sí mismas. Lo que comenzó como una pequeña boutique en el corazón de Madrid, se ha convertido en una marca reconocida internacionalmente.</p>

    <h2>Los Primeros Pasos</h2>
    <p>Nuestra fundadora, María González, siempre tuvo una visión clara: la moda debe ser accesible, elegante y atemporal. Con una formación en diseño de moda en París y años de experiencia en las mejores casas de moda europeas, María decidió crear algo propio.</p>

    <p>El primer taller de STYLISH era un pequeño espacio de 30 metros cuadrados donde María, junto con dos costureras expertas, creaba piezas únicas para un selecto grupo de clientas. La atención al detalle y la calidad de los materiales fueron desde el principio nuestras señas de identidad.</p>

    <h2>El Crecimiento</h2>
    <p>El boca a boca fue nuestro mejor aliado. Las clientas satisfechas recomendaban STYLISH a sus amigas, y pronto nos vimos en la necesidad de ampliar tanto el equipo como las instalaciones. En 2018, abrimos nuestra primera tienda física en la Calle Serrano, en pleno corazón del distrito de Salamanca.</p>

    <p>La llegada de las redes sociales marcó un antes y un después en nuestra historia. Instagram se convirtió en nuestra ventana al mundo, permitiéndonos llegar a mujeres de toda España y posteriormente de Europa.</p>

    <h2>Reconocimiento Internacional</h2>
    <p>En 2020, a pesar de los desafíos globales, STYLISH logró participar por primera vez en la Mercedes-Benz Fashion Week Madrid. Nuestra colección "Elegancia Urbana" fue aclamada por la crítica y marcó nuestro debut en las pasarelas internacionales.</p>

    <p>Desde entonces, hemos colaborado con diseñadores de renombre, hemos vestido a celebrities en eventos importantes y hemos expandido nuestra presencia a más de 15 países.</p>

    <h2>El Futuro</h2>
    <p>Mirando hacia el futuro, STYLISH se compromete con la sostenibilidad y la responsabilidad social. Estamos trabajando en nuevas líneas eco-friendly y en programas de apoyo a jóvenes diseñadores.</p>

    <p>Estos 10 años han sido un viaje increíble, pero estamos seguros de que lo mejor está por venir. Gracias a todas las mujeres que han confiado en STYLISH y han hecho posible esta historia.</p>
  `,
  image: "/placeholder.svg?height=600&width=1200",
  category: "Marca",
  author: "María González",
  date: "2024-01-20",
  readTime: "5 min",
  tags: ["historia", "marca", "aniversario"],
  likes: 234,
  comments: 18,
}

const relatedPosts = [
  {
    id: 2,
    title: "Colaboración Exclusiva con Isabella Martín",
    slug: "colaboracion-isabella-martin",
    image: "/placeholder.svg?height=200&width=300",
    category: "Colaboraciones",
    date: "2024-01-18",
  },
  {
    id: 5,
    title: "Sostenibilidad: Nuestro Compromiso con el Futuro",
    slug: "sostenibilidad-compromiso-futuro",
    image: "/placeholder.svg?height=200&width=300",
    category: "Marca",
    date: "2024-01-10",
  },
  {
    id: 6,
    title: "Behind the Scenes: Shooting de la Nueva Campaña",
    slug: "behind-scenes-nueva-campana",
    image: "/placeholder.svg?height=200&width=300",
    category: "Marca",
    date: "2024-01-08",
  },
]

export default function BlogPostPage() {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/blog">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al Blog
          </Button>
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-96">
            <Image src={blogPost.image || "/placeholder.svg"} alt={blogPost.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/20" />
            <Badge className="absolute top-6 left-6 bg-black text-white">{blogPost.category}</Badge>
          </div>

          {/* Article Content */}
          <div className="p-8">
            {/* Meta Information */}
            <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {blogPost.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(blogPost.date).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {blogPost.readTime}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">{blogPost.title}</h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{blogPost.excerpt}</p>

            {/* Social Actions */}
            <div className="flex items-center gap-4 mb-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
                className={isLiked ? "text-red-500 border-red-500" : ""}
              >
                <Heart className={`h-4 w-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
                {blogPost.likes + (isLiked ? 1 : 0)}
              </Button>
              <Button variant="outline" size="sm">
                <MessageCircle className="h-4 w-4 mr-2" />
                {blogPost.comments}
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Compartir
              </Button>
            </div>

            <Separator className="mb-8" />

            {/* Article Content */}
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }} />

            {/* Tags */}
            <div className="mt-8 pt-8 border-t">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-600">Etiquetas:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-8 pt-8 border-t">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-gray-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900">{blogPost.author}</h3>
                  <p className="text-gray-600 mt-1">
                    Fundadora y Directora Creativa de STYLISH. Con más de 15 años de experiencia en la industria de la
                    moda, María ha liderado la transformación de STYLISH en una marca reconocida internacionalmente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Artículos Relacionados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Card
                key={post.id}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-black text-white">{post.category}</Badge>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600 mb-2">{new Date(post.date).toLocaleDateString("es-ES")}</p>
                    <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" className="p-0 h-auto font-medium text-black hover:text-gray-700 mt-2">
                        Leer más
                        <ArrowLeft className="h-4 w-4 ml-1 rotate-180" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <Card className="mt-16 bg-gray-900 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">¿Te gustó este artículo?</h3>
            <p className="text-gray-300 mb-6">
              Suscríbete a nuestro newsletter para recibir las últimas noticias y artículos exclusivos de STYLISH.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Tu email" className="flex-1 px-4 py-3 rounded-lg text-black" />
              <Button className="bg-white text-black hover:bg-gray-100">Suscribirse</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
