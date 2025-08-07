// app/blog/page.tsx
import BlogPageClient from "@/components/blog/BlogPageClient"
import { getPublishedPosts, getCategories } from "@/services/blogService"

export default async function BlogPage() {
  const posts = await getPublishedPosts()
  const categories = await getCategories()

  return <BlogPageClient blogPosts={posts} categories={["Todos", ...categories.map((c: any) => c.name)]} />
}
