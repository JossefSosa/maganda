import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function FeaturedCollection({
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
    const featuredCollection = collections.find((col) => col.featured);
    return (
        <>
            {collections.length > 0 && (
                <div className="mb-16">
                    {featuredCollection && (
                        <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-r from-gray-900 to-gray-700">
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="relative h-full flex items-center justify-center text-white text-center">
                                <div className="space-y-4">
                                    <Badge className="bg-white text-black">COLECCIÓN DESTACADA</Badge>
                                    <h2 className="text-5xl font-bold">{featuredCollection.name}</h2>
                                    <p className="text-xl max-w-md mx-auto">{featuredCollection.description}</p>
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
                    )}
                </div>
            )}
        </>
    );
}