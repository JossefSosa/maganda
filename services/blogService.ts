import prisma from "@/lib/prisma"

export const getPublishedPosts = async () => {
    return prisma.blogPost.findMany({
        where: { isPublished: true },
        include: { category: true, tags: true },
    })
}

export const getPostBySlug = async (slug: string) => {
    return prisma.blogPost.findUnique({
        where: { slug },
        include: {
            category: true,
            tags: { include: { tag: true } },
            comments: { where: { isApproved: true } },
        },
    })
}