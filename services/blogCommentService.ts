import prisma from "@/lib/prisma"

export const createComment = async (postId: string, userId: string, content: string) => {
    return prisma.blogComment.create({
        data: {
            postId,
            userId,
            content,
        },
    })
}

export const getCommentsForPost = async (postId: string) => {
    return prisma.blogComment.findMany({
        where: { postId, isApproved: true },
        include: { user: true },
    })
}