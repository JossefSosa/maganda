import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function FeaturedPosts({ featuredPosts }: { featuredPosts: any[] }) {
    return (
        <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Destacados</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post: any) => (
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
                                    {post.tags.map((tag: any) => (
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
    )
}