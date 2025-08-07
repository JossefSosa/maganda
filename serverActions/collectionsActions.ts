'use server'

import prisma from "@/lib/prisma";
import { Product } from "@/types/products"

export async function getAllCollectionsWithProductsAction(): Promise<{
    collections: {
        id: string
        name: string
        slug: string
        description: string
        imageUrl?: string
        productCount: number
        featured: boolean
    }[],
    collectionProducts: Record<string, Product[]>
}> {
    const collections = await prisma.collection.findMany({
        where: { isActive: true },
        include: {
            products: {
                include: {
                    product: {
                        include: {
                            category: true,
                            images: true,
                            variants: true,
                            reviews: true
                        }
                    }
                },
                orderBy: { sortOrder: 'asc' }
            }
        },
        orderBy: { sortOrder: 'asc' }
    });

    const resultCollections = collections.map((col: any) => ({
        id: col.id,
        name: col.name,
        slug: col.slug,
        description: col.description ?? '',
        imageUrl: col.imageUrl ?? "/placeholder.svg",
        productCount: col.products.length,
        featured: col.isFeatured
    }));

    const collectionProducts: Record<string, Product[]> = {};

    for (const col of collections) {
        collectionProducts[col.id] = col.products.map((cp: any) => {
            const p = cp.product;

            const avgRating = p.reviews.length > 0
                ? p.reviews.reduce((sum: any, r: any) => sum + r.rating, 0) / p.reviews.length
                : 0;

            return {
                ...p,
                rating: avgRating,
            };
        });
    }

    return { collections: resultCollections, collectionProducts };
}
