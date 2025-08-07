// actions/blog.ts
"use server"

import { createComment, getPostBySlug } from "@/services/blogService"
import { revalidatePath } from "next/cache"

export const handleCreateComment = async (formData: FormData) => {
    const postId = formData.get("postId") as string
    const userId = formData.get("userId") as string
    const content = formData.get("content") as string
    const parentId = formData.get("parentId") as string | null

    if (!postId || !userId || !content) {
        return { success: false, message: "Campos obligatorios faltantes." }
    }

    try {
        await createComment({ postId, userId, content, parentId: parentId || undefined })
        revalidatePath(`/blog/${postId}`) // Opcional: refresca la página del blog
        return { success: true }
    } catch (error) {
        console.error("Error al crear comentario:", error)
        return { success: false, message: "Error interno del servidor." }
    }
}

export const getPostBySlugAction = async (slug: string) => {
    try {
        const post = await getPostBySlug(slug)
        if (!post) {
            return { error: "Post not found" }
        }
        return post
    } catch (error) {
        console.error("Error fetching post by slug:", error)
        return { error: "Failed to fetch post" }
    }
}