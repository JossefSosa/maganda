import { getPostBySlugAction } from "@/serverActions/blogActions"
import { notFound } from "next/navigation"
import BlogPostPage from "@/components/blog/BlogPostPage" // ajusta el path si es necesario

interface BlogPageProps {
  params: { slug: string }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blogPost = await getPostBySlugAction(params.slug)
  console.log('blogPost :', blogPost);

  if (!blogPost) return notFound()

  return <BlogPostPage blogPost={blogPost} />
}
