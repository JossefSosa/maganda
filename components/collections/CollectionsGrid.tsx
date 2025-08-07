import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function CollectionGrid({
    collections,
    setSelectedCollection
}: {
    collections: {
        id: string;
        name: string;
        description: string;
        imageUrl?: string;
        productCount: number;
        featured?: boolean;
    }[];
    setSelectedCollection: (collection: any) => void;
}) {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection) => (
                <Card
                    key={collection.id}
                    className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-md"
                    onClick={() => setSelectedCollection(collection)}
                >
                    <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                            <Image
                                src={collection.imageUrl || "/placeholder.svg"}
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
    );
}