// app/blog/page.tsx
export const dynamic = 'force-dynamic'

import BlogPageClient from "@/components/blog/BlogPageClient"
import { getPublishedPosts, getCategories } from "@/services/blogService"
import { notFound } from "next/navigation"

export default async function BlogPage() {
  const posts = await getPublishedPosts()
  const categories = await getCategories()

  if (!posts || "error" in posts) {
    return notFound()
  }

  return <BlogPageClient blogPosts={posts} categories={["Todos", ...categories.map((c: any) => c.name)]} />
}
