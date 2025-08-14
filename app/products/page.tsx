export const dynamic = "force-dynamic";

import { getAllProductsAction } from "@/serverActions/productsActions";
import ProductsPage from "./ProductsPage";
import { getAllCategoriesAction } from "@/serverActions/categoriesActions";

export default async function Products() {
  const categories = ["Todos"]
  const categoriesFromDB = await getAllCategoriesAction();
  categoriesFromDB.forEach((category: any) => {
    categories.push(category.name);
  });
  const productsData = await getAllProductsAction();

  // Asegúrate de que productsData es un array plano, sin funciones ni fechas
  if ("error" in productsData) {
    // Puedes renderizar una página de error aquí si quieres
    return <div>Error loading products</div>;
  }

  return <ProductsPage categories={categories} allProducts={productsData} />;
}