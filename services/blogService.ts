// services/blog.ts
import prisma from "@/lib/prisma"

export const getPublishedPosts = async () => {
    return prisma.blogPost.findMany({
        where: { isPublished: true },
        orderBy: { publishedAt: "desc" },
        include: {
            category: true,
            tags: { include: { tag: true } },
        },
    })
}

export const getFeaturedPosts = async () => {
    return prisma.blogPost.findMany({
        where: { isPublished: true, isFeatured: true },
        orderBy: { publishedAt: "desc" },
        include: {
            category: true,
            tags: { include: { tag: true } },
        },
    })
}

export const getPostBySlug = async (slug: string) => {
    return prisma.blogPost.findUnique({
        where: { slug },
        include: {
            category: true,
            tags: { include: { tag: true } },
            comments: {
                where: { isApproved: true },
                include: { user: true },
            },
        },
    })
}

export const getCategories = async () => {
    return prisma.blogCategory.findMany({
        orderBy: { sortOrder: "asc" },
    })
}

export const getTags = async () => {
    return prisma.blogTag.findMany({
        orderBy: { name: "asc" },
    })
}

export const getCommentsForPost = async (postId: string) => {
    return prisma.blogComment.findMany({
        where: { postId, isApproved: true },
        include: { user: true },
        orderBy: { createdAt: "desc" },
    })
}

export const createComment = async ({
    postId,
    userId,
    content,
    parentId,
}: {
    postId: string
    userId: string
    content: string
    parentId?: string
}) => {
    return prisma.blogComment.create({
        data: {
            postId,
            userId,
            content,
            parentId,
        },
    })
}
