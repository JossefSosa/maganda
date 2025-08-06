import prisma from "@/lib/prisma"

export const createReview = async (userId: string, productId: string, content: string, rating: number) => {
    return prisma.review.create({
        data: {
            userId,
            productId,
            content,
            rating,
        },
    })
}

export const getReviewsForProduct = async (productId: string) => {
    return prisma.review.findMany({
        where: { productId },
        include: { user: true },
    })
}