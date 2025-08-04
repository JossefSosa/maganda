import prisma from "@/lib/prisma"

export const toggleFavorite = async (userId: string, productId: string) => {
    const existing = await prisma.userFavorite.findFirst({
        where: { userId, productId },
    })
    if (existing) {
        return prisma.userFavorite.delete({
            where: { id: existing.id },
        })
    } else {
        return prisma.userFavorite.create({
            data: { userId, productId },
        })
    }
}