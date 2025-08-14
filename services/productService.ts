import prisma from "@/lib/prisma"

export const getProductById = async (id: string) => {
    return prisma.product.findUnique({
        where: { id },
        include: {
            images: true,
            category: true,
            variants: true,
            reviews: true,
        },
    })
}

export const listProducts = async () => {
    return prisma.product.findMany({
        where: { isActive: true },
        include: {
            images: true,
            category: true,
            variants: true,
            reviews: true,
            _count: {
                select: { reviews: true },
            },
        },
        orderBy: { createdAt: "desc" },
        take: 20,
    })
}

export const getFeaturedProducts = async () => {
    return prisma.product.findMany({
        where: { isFeatured: true, isActive: true },
        include: {
            images: true,
            category: true,
            variants: true,
            reviews: true,
        },
        orderBy: { createdAt: "desc" },
        take: 10,
    });
}