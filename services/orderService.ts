// import prisma from "@/lib/prisma"
// import { Prisma } from "@prisma/client"

// export const getOrdersByUser = async (userId: string) => {
//     return prisma.order.findMany({
//         where: { userId },
//         include: { items: true },
//     })
// }

// export const createOrder = async (userId: string, data: any) => {
//     return prisma.order.create({
//         data: {
//             userId,
//             ...data,
//         },
//     })
// }