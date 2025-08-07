import { getAllCategories } from "@/services/categoryService";

export async function getAllCategoriesAction() {
    try {
        const categories = await getAllCategories()
        return categories.map((category: any) => ({
            id: category.id,
            name: category.name,
            slug: category.slug,
            children: category.children.map((child: any) => ({
                id: child.id,
                name: child.name,
                slug: child.slug
            }))
        }));
    } catch (err) {
        // return { error: "Failed to load products" }
        return [];
    }
}