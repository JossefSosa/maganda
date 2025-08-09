"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Navigation from "@/components/navigation"


// interface BlogPostWithRelations {
//     id: string
//     title: string
//     slug: string
//     excerpt?: string | null
//     content: string
//     featuredImage?: string | null
//     category?: { name: string } | null
//     authorName: string
//     authorBio?: string | null
//     authorImage?: string | null
//     isFeatured: boolean
//     isPublished: boolean
//     readTime?: number | null
//     likesCount: number
//     commentsCount: number
//     publishedAt?: string | Date | null
//     createdAt: string | Date
//     tags: { tag: { name: string } }[]
// }

export default function BlogPostPage({ blogPost }: { blogPost: any }) {
    const [isLiked, setIsLiked] = useState(false)

    // Fecha publicada, fallback a createdAt
    const displayDate = blogPost.publishedAt ? new Date(blogPost.publishedAt) : new Date(blogPost.createdAt)

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
                        <Image
                            src={blogPost.featuredImage || "/placeholder.svg"}
                            alt={blogPost.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                        <Badge className="absolute top-6 left-6 bg-black text-white">{blogPost.category?.name}</Badge>
                    </div>

                    {/* Article Content */}
                    <div className="p-8">
                        {/* Meta Information */}
                        <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                {blogPost.authorName}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {displayDate.toLocaleDateString("es-ES", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {blogPost.readTime ? `${blogPost.readTime} min` : "—"}
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">{blogPost.title}</h1>

                        {/* Excerpt */}
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            {blogPost.excerpt || "No hay resumen disponible para este artículo."}
                        </p>

                        {/* Social Actions */}
                        <div className="flex items-center gap-4 mb-8">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setIsLiked(!isLiked)}
                                className={isLiked ? "text-red-500 border-red-500" : ""}
                            >
                                <Heart className={`h-4 w-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
                                {blogPost.likesCount + (isLiked ? 1 : 0)}
                            </Button>
                            <Button variant="outline" size="sm">
                                <MessageCircle className="h-4 w-4 mr-2" />
                                {blogPost.commentsCount} Comentarios
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
                                {blogPost.tags.map(({ tag }: { tag: any }) => (
                                    <Badge key={tag.name} variant="secondary">
                                        {tag.name}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Author Bio */}
                        <div className="mt-8 pt-8 border-t">
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                                    {blogPost.authorImage ? (
                                        <Image
                                            src={blogPost.authorImage}
                                            alt={blogPost.authorName}
                                            width={64}
                                            height={64}
                                            className="rounded-full object-cover"
                                        />
                                    ) : (
                                        <User className="h-8 w-8 text-gray-600" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg text-gray-900">{blogPost.authorName}</h3>
                                    <p className="text-gray-600 mt-1">
                                        {blogPost.authorBio || "Autor sin biografía disponible."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}
