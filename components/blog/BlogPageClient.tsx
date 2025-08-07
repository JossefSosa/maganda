"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import FeaturedPosts from "@/components/blog/FeaturedPosts"

interface BlogPost {
    id: string
    title: string
    slug: string
    excerpt: string
    image: string
    category: {
        name: string
    }
    tags: {
        tag: { name: string }
    }[]
    date: string
    readTime: string
    featured?: boolean
}

export default function BlogPageClient({
    blogPosts,
    categories,
}: {
    blogPosts: BlogPost[]
    categories: string[]
}) {
    const [selectedCategory, setSelectedCategory] = useState("Todos")
    const [searchTerm, setSearchTerm] = useState("")

    const filteredPosts = blogPosts.filter((post) => {
        const categoryMatch = selectedCategory === "Todos" || post.category.name === selectedCategory
        const searchMatch =
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.tags.some((tag) => tag.tag.name.toLowerCase().includes(searchTerm.toLowerCase()))
        return categoryMatch && searchMatch
    })

    const featuredPosts = blogPosts.filter((post) => post.featured)

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

                <FeaturedPosts featuredPosts={featuredPosts} />

                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {/* Filters */}
                        <div className="mb-8 space-y-4">
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

                        {/* Posts Grid */}
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
                                            <Badge className="absolute top-4 left-4 bg-black text-white">
                                                {post.category.name}
                                            </Badge>
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
                                                {blogPosts.filter((post) => post.category.name === category).length}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
