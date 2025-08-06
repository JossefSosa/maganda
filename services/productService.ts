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
        include: { images: true },
        take: 20,
    })
}
