import prisma from "@/lib/prisma"
import { Prisma } from "@prisma/client"

export const getUserById = async (id: string) => {
    return prisma.user.findUnique({
        where: { id },
        include: {
            preferences: true,
            favorites: true,
            addresses: true,
        },
    })
}

// export const updateUser = async (id: string, data: Prisma.UserUpdateInput) => {
//     return prisma.user.update({
//         where: { id },
//         data,
//     })
// }

export const getUserFavorites = async (userId: string) => {
    return prisma.userFavorite.findMany({
        where: { userId },
        include: { product: true },
    })
}