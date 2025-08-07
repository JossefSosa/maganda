import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function BlogPostsGrid({
    posts,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
}: {
    posts: {
        id: string;
        title: string;
        slug: string;
        excerpt: string;
        image?: string;
        category: string;
        date: string;
        readTime: string;
    }[];
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}) {
    // Filter posts based on selected category and search term
    const filteredPosts = posts.filter((post) => {
        const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    return (
        <>
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

            {
                filteredPosts.length === 0 && (
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
                )
            }
        </>
    );
}