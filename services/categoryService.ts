import prisma from "@/lib/prisma"

export const getAllCategories = async () => {
    return prisma.category.findMany({
        include: { children: true },
    })
}

export const getCategoryBySlug = async (slug: string) => {
    return prisma.category.findUnique({
        where: { slug },
        include: { products: true },
    })
}